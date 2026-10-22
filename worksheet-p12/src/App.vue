<script setup>
import { onMounted, watch } from 'vue'
import { state, tetapkanNotisia, gagalMuatNotisia } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'
import { ambilNotisia } from './api.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = {
  nama: 'Ahmad Abdillah Rabani',
  peran: 'Mahasiswa Informatika',
  nim: '25523225',
  keahlian: ['HTML', 'CSS', 'JavaScript'],
}

onMounted(() => {
  // Membaca simpanan dari localStorage (VERSI diperiksa di muat())
  const isi = muat()
  if (isi) {
    if (isi.kategoriAktif) {
      state.kategoriAktif = isi.kategoriAktif
    }
    if (typeof isi.temaGelap === 'boolean') {
      state.temaGelap = isi.temaGelap
    }
  }

  // Mengambil data asinkron dari API JSONPlaceholder
  ambilNotisia()
    .then(tetapkanNotisia)
    .catch(gagalMuatNotisia)
})

// Menyimpan perubahan state secara reaktif
watch(state, (nilai) => simpan(nilai), { deep: true })

// Menangani perubahan tema gelap / terang
watch(
  () => state.temaGelap,
  (gelap) => {
    document.documentElement.classList.toggle('tema-gelap', gelap)
    document.body.classList.toggle('tema-gelap', gelap)
  },
  { immediate: true }
)

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  state.temaGelap = false
  simpan(state)
}
</script>

<template>
  <div class="page">
    <header>
      <div class="header-baris">
        <KepalaProfil :profil="identitas" />

        <nav aria-label="Navigasi utama">
          <a href="#koleksi">Koleksi Buku</a>
          <a href="#kategori">Kategori Buku</a>
          <a href="#kontak">Tambah Buku</a>
        </nav>

        <div class="pengaturan-tema">
          <input
            id="tema"
            v-model="state.temaGelap"
            type="checkbox"
            class="pengalih-tema"
          />
          <label for="tema" class="tombol-tema">
            Tema gelap
          </label>
        </div>
      </div>
    </header>

    <main class="isi">
      <aside class="sisi">
        <h2>Menu</h2>
        <nav aria-label="Navigasi samping">
          <ul>
            <li>
              <a href="#koleksi">Koleksi Buku</a>
            </li>
            <li>
              <a href="#kategori">Kategori Buku</a>
            </li>
            <li>
              <a href="#kontak">Tambah Buku</a>
            </li>
          </ul>
        </nav>
      </aside>

      <div class="utama">
        <TombolFilter />
        <DaftarProyek />
        <FormKontak />
      </div>
    </main>

    <footer>
      <p>
        Ahmad Abdillah Rabani | NIM: 25523225 | 2026
      </p>
    </footer>
  </div>
</template>
