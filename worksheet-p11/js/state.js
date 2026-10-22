/**
 * PABW - Pertemuan 11
 * State dan Local Storage
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

import { daftarBukuAwal } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  daftarBuku: daftarBukuAwal.map((buku) => ({ ...buku })),
  kategoriAktif: "semua",
  temaGelap: false,
  daftarNotisia: [],
  statusNotisia: "memuat",
  pesanGalatNotisia: "",
};

function simpan() {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    temaGelap: state.temaGelap,
  };

  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch (galat) {
    console.warn(
      "Pilihan tidak dapat disimpan:",
      galat.message
    );
  }
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);

    // Belum ada simpanan: gunakan nilai bawaan.
    if (teks === null) {
      return null;
    }

    const isi = JSON.parse(teks);

    // Memeriksa versi dan bentuk data.
    if (
      !isi ||
      isi.versi !== VERSI ||
      typeof isi.temaGelap !== "boolean" ||
      !["semua", "novel"].includes(isi.kategoriAktif)
    ) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch (galat) {
    // Jika JSON rusak, halaman tetap berjalan.
    try {
      localStorage.removeItem(KUNCI);
    } catch {
      // Tidak perlu menghentikan aplikasi.
    }

    console.warn(
      "Simpanan rusak; nilai bawaan digunakan."
    );

    return null;
  }
}

export function inisialisasiState() {
  const isi = muat();

  if (isi) {
    state.kategoriAktif = isi.kategoriAktif;
    state.temaGelap = isi.temaGelap;
  }

  render(state);
}

export function pilihKategori(nilai) {
  if (!["semua", "novel"].includes(nilai)) {
    return;
  }

  state.kategoriAktif = nilai;

  simpan();
  render(state);
}

export function pilihTema(nilai) {
  state.temaGelap = Boolean(nilai);

  simpan();
  render(state);
}

export function tambahBuku(buku) {
  const idBaru =
    Math.max(
      0,
      ...state.daftarBuku.map(
        (item) => Number(item.id) || 0
      )
    ) + 1;

  state.daftarBuku.push({
    ...buku,
    id: idBaru,
  });

  state.kategoriAktif = "semua";

  simpan();
  render(state);
}


export function aturUlang() {
  state.daftarBuku = daftarBukuAwal.map((buku) => ({ ...buku }));
  state.kategoriAktif = "semua";
  state.temaGelap = false;

  try {
    localStorage.removeItem(KUNCI);
  } catch (galat) {
    console.warn(
      "Simpanan tidak dapat dihapus:",
      galat.message
    );
  }

  render(state);
}


export function tetapkanNotisia(data) {
  state.daftarNotisia = Array.isArray(data) ? data : [];

  state.statusNotisia =
    state.daftarNotisia.length > 0
      ? "berhasil"
      : "kosong";

  state.pesanGalatNotisia = "";

  render(state);
}

export function gagalMuatNotisia(galat) {
  state.daftarNotisia = [];
  state.statusNotisia = "gagal";

  state.pesanGalatNotisia =
    galat?.message ||
    "Terjadi kesalahan saat memuat data.";

  render(state);
}