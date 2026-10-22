<script setup>
import { ref } from 'vue'
import { tambahBuku } from '../state.js'

const judul = ref('')
const penulis = ref('')
const tahun = ref('')
const pesan = ref('')

function kirimForm() {
  const judulNilai = judul.value.trim()
  const penulisNilai = penulis.value.trim()
  const tahunNilai = Number(tahun.value)

  if (!judulNilai) {
    pesan.value = 'Judul buku wajib diisi.'
    return
  }

  if (!penulisNilai) {
    pesan.value = 'Nama penulis wajib diisi.'
    return
  }

  if (!tahunNilai || tahunNilai < 1900 || tahunNilai > 2026) {
    pesan.value = 'Tahun terbit harus antara 1900 dan 2026.'
    return
  }

  tambahBuku({
    judul: judulNilai,
    penulis: penulisNilai,
    tahun: tahunNilai,
    kategori: 'Novel',
    gambar: '',
    sinopsis: `Koleksi buku ${judulNilai} karya ${penulisNilai}.`,
  })

  // Mengosongkan form tanpa memuat ulang halaman
  judul.value = ''
  penulis.value = ''
  tahun.value = ''
  pesan.value = 'Buku berhasil disimpan ke dalam koleksi!'
}
</script>

<template>
  <section id="kategori">
    <h2>Kategori Buku</h2>
    <p>
      Koleksi yang saya tampilkan pada halaman ini merupakan
      novel karya Tere Liye. Ketiga novel tersebut menjadi
      bagian dari koleksi rak buku saya.
    </p>

    <h3>Janji</h3>
    <p>
      <strong>Janji</strong> merupakan salah satu novel karya
      Tere Liye yang terdapat dalam koleksi rak buku saya.
    </p>

    <h3>Tentang Kamu</h3>
    <p>
      <strong>Tentang Kamu</strong> merupakan salah satu novel
      karya Tere Liye yang juga menjadi bagian dari koleksi
      buku saya.
    </p>

    <h3>Bulan</h3>
    <p>
      <strong>Bulan</strong> merupakan novel karya Tere Liye
      yang termasuk dalam koleksi rak buku saya.
    </p>

    <div id="kontak">
      <h3>Tambah Koleksi Buku</h3>
      <p>
        Gunakan formulir berikut untuk mencatat buku yang
        ingin ditambahkan ke dalam koleksi rak buku.
      </p>

      <form @submit.prevent="kirimForm">
        <div class="form-kolom">
          <label for="judul">Judul Buku:</label>
          <input
            id="judul"
            v-model="judul"
            type="text"
            name="judul"
            required
          />
        </div>

        <div class="form-kolom">
          <label for="penulis">Penulis:</label>
          <input
            id="penulis"
            v-model="penulis"
            type="text"
            name="penulis"
            required
          />
        </div>

        <div class="form-kolom">
          <label for="tahun">Tahun Terbit:</label>
          <input
            id="tahun"
            v-model="tahun"
            type="number"
            name="tahun"
            min="1900"
            max="2026"
            required
          />
        </div>

        <button type="submit">Simpan</button>

        <p
          v-if="pesan"
          id="pesan-form"
          role="status"
          aria-live="polite"
        >
          {{ pesan }}
        </p>
      </form>
    </div>
  </section>
</template>
