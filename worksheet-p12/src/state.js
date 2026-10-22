/**
 * PABW - Pertemuan 12
 * State Terpusat dan Reaktif
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

import { reactive } from 'vue'
import { daftarBukuAwal } from './data.js'

export const state = reactive({
  daftarBuku: daftarBukuAwal.map((buku) => ({ ...buku })),
  kategoriAktif: 'semua',
  temaGelap: false,
  daftarNotisia: [],
  statusNotisia: 'memuat',
  pesanGalatNotisia: '',
})

export function pilihKategori(nilai) {
  if (['semua', 'novel'].includes(nilai)) {
    state.kategoriAktif = nilai
  }
}

export function pilihTema(nilai) {
  state.temaGelap = Boolean(nilai)
}

export function tambahBuku(buku) {
  const idBaru =
    Math.max(0, ...state.daftarBuku.map((item) => Number(item.id) || 0)) + 1

  state.daftarBuku.push({
    ...buku,
    id: idBaru,
  })

  state.kategoriAktif = 'semua'
}

export function tetapkanNotisia(data) {
  state.daftarNotisia = Array.isArray(data) ? data : []
  state.statusNotisia = state.daftarNotisia.length > 0 ? 'sukses' : 'kosong'
}

export function gagalMuatNotisia(galat) {
  state.statusNotisia = 'gagal'
  state.pesanGalatNotisia = galat?.message || 'Gagal memuat data'
}
