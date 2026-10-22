<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const bukuTampil = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarBuku
  }
  return state.daftarBuku.filter(
    (buku) => (buku.kategori || '').toLowerCase() === state.kategoriAktif.toLowerCase()
  )
})
</script>

<template>
  <div>
    <section id="koleksi">
      <h2>Koleksi Novel Tere Liye</h2>
      <p>
        Selamat datang di halaman koleksi rak buku saya.
        Halaman ini menampilkan beberapa novel karya Tere Liye
        yang menjadi bagian dari koleksi buku saya.
      </p>

      <div class="galeri">
        <p v-if="bukuTampil.length === 0" id="pesan-kosong">
          Belum ada buku dalam kategori ini.
        </p>

        <article
          v-for="(buku, index) in bukuTampil"
          :key="buku.id"
          class="kartu"
          :class="{ sorotan: index === 0 }"
        >
          <div class="kartu__isi">
            <figure v-if="buku.gambar">
              <img
                :src="buku.gambar"
                :alt="buku.judul"
                width="600"
                height="400"
                loading="lazy"
              />
              <figcaption v-if="buku.sinopsis">
                {{ buku.sinopsis }}
              </figcaption>
            </figure>
            <div v-else-if="buku.sinopsis">
              <p>{{ buku.sinopsis }}</p>
            </div>
          </div>

          <div class="kartu__kaki">
            <strong>{{ buku.judul }}</strong>
            <span>{{ buku.penulis }}</span>
          </div>
        </article>
      </div>

      <div class="papan">
        <table>
          <caption>
            Daftar Koleksi Novel Tere Liye
          </caption>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Judul Buku</th>
              <th scope="col">Penulis</th>
              <th scope="col">Kategori</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(buku, index) in bukuTampil" :key="buku.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ buku.judul }}</td>
              <td>{{ buku.penulis }}</td>
              <td>{{ buku.kategori || 'Novel' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="notisia">
      <h2>Data Postingan dari API</h2>
      <p>
        Bagian ini mengambil data postingan dari API publik
        menggunakan JavaScript asinkron.
      </p>

      <div id="status-notisia" role="status" aria-live="polite">
        <span v-if="state.statusNotisia === 'memuat'">Sedang memuat data dari API...</span>
        <span v-else-if="state.statusNotisia === 'gagal'">Data tidak berhasil dimuat: {{ state.pesanGalatNotisia }}</span>
        <span v-else-if="state.statusNotisia === 'kosong'">API berhasil dihubungi, tetapi tidak ada data.</span>
        <span v-else>Data berhasil dimuat: {{ state.daftarNotisia.length }} item.</span>
      </div>

      <div id="daftar-notisia" class="galeri">
        <article
          v-for="item in state.daftarNotisia.slice(0, 10)"
          :key="item.id"
          class="kartu"
        >
          <div class="kartu__isi">
            <h3 class="kartu__judul">{{ item.title || item.judul || 'Tanpa judul' }}</h3>
            <p>{{ item.body || item.bodyText || item.isi || '' }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
