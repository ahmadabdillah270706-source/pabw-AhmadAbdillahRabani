import { ambilNotisia } from './api.js';

// ============================================
// DATA PROFIL
// ============================================

const nama = "Ahmad Abdillah Rabani";
const jumlahProyek = 3;

let pilihanAktif = "semua";
pilihanAktif = "selesai";

console.log(nama);
console.log(jumlahProyek);
console.log(pilihanAktif);

console.log(typeof nama);
console.log(typeof jumlahProyek);
console.log(typeof pilihanAktif);

const profil = {
  nama: "Ahmad Abdillah Rabani",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

console.log(profil);
console.log(profil.nama);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// ============================================
// DATA PROYEK
// ============================================

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter(
  (proyek) => proyek.selesai
);
console.table(selesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk"
);
console.log(katalog);

const hasil = [1, 2, 3].map((angka) => angka * 2);
console.log(hasil);

const hasil2 = [1, 2, 3].filter((angka) => angka > 1);
console.log(hasil2);

const hasil3 = [1, 2, 3].reduce(
  (total, angka) => total + angka,
  0
);
console.log(hasil3);

const urutanProyek = [...daftarProyek].sort(
  (a, b) => a.tahun - b.tahun
);

console.table(urutanProyek);
console.table(daftarProyek);

// ============================================
// CONTOH JSON.STRINGIFY
// ============================================

const badan = JSON.stringify({
  title: 'Latihan JSON',
  level: 2
});

console.log('Hasil stringify:', badan);
console.log('Jenis hasil stringify:', typeof badan);

// ============================================
// DATA BUKU PERTEMUAN 9
// ============================================

export const daftarBuku = [
  {
    id: 1,
    judul: "Janji",
    penulis: "Tere Liye",
    tahun: 2021,
    kategori: "Novel",
    gambar: "rak-buku/rak-buku.jpeg",
    sinopsis:
      "Kisah perjalanan tiga santri untuk mencari Bahar Safar."
  },
  {
    id: 2,
    judul: "Tentang Kamu",
    penulis: "Tere Liye",
    tahun: 2016,
    kategori: "Novel",
    gambar: "rak-buku/rak-buku1.jpeg",
    sinopsis:
      "Kisah hidup Sri Ningsih yang ditelusuri oleh seorang pengacara."
  },
];

// ============================================
// API PERTEMUAN 10
// ============================================

const wadahNotisia = document.querySelector('#daftar-notisia');
const statusNotisia = document.querySelector('#status-notisia');

// Membuat kartu untuk setiap postingan API.
function gambarNotisia(daftar) {
  wadahNotisia.textContent = '';

  daftar.forEach((post) => {
    const kartu = document.createElement('article');
    kartu.className = 'kartu';

    const isi = document.createElement('div');
    isi.className = 'kartu__isi';

    const judul = document.createElement('h3');
    judul.textContent = post.title;

    const paragraf = document.createElement('p');
    paragraf.textContent = post.body;

    const informasi = document.createElement('small');
    informasi.textContent = `Postingan nomor ${post.id}`;

    isi.append(judul, paragraf, informasi);
    kartu.append(isi);
    wadahNotisia.append(kartu);
  });
}

// Mengambil data dan menangani empat keadaan antarmuka.
async function tampilkanNotisia() {
  if (!wadahNotisia || !statusNotisia) {
    console.warn(
      'Elemen #daftar-notisia atau #status-notisia tidak ditemukan.'
    );
    return;
  }

  // Keadaan 1: memuat.
  statusNotisia.hidden = false;
  statusNotisia.textContent = 'Memuat data postingan...';
  wadahNotisia.textContent = '';

  try {
    const daftar = await ambilNotisia();

    if (!Array.isArray(daftar)) {
      throw new Error('Format data API bukan larik.');
    }

    // Keadaan 2: kosong.
    if (daftar.length === 0) {
      wadahNotisia.textContent = '';
      statusNotisia.textContent = 'Belum ada postingan.';
      return;
    }

    // Keadaan 3: berhasil.
    gambarNotisia(daftar);
    statusNotisia.textContent =
      `Berhasil memuat ${daftar.length} postingan.`;

  } catch (galat) {
    // Keadaan 4: gagal.
    wadahNotisia.textContent = '';
    statusNotisia.hidden = false;
    statusNotisia.textContent =
      'Gagal memuat data: ' + galat.message;
  }
}

// Jalankan saat app.js dimuat.
tampilkanNotisia();
