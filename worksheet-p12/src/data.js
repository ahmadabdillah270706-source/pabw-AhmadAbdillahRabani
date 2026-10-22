/**
 * PABW - Pertemuan 12
 * Data dan Fungsi Murni
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

export const profil = {
  nama: "Ahmad Abdillah Rabani",
  peran: "Mahasiswa Informatika",
  nim: "25523225",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

export const daftarProyek = [
  {
    id: 1,
    judul: "Halaman Profil",
    tahun: 2026,
    selesai: true,
  },
  {
    id: 2,
    judul: "Katalog Produk",
    tahun: 2026,
    selesai: false,
  },
  {
    id: 3,
    judul: "Koleksi Rak Buku Saya",
    tahun: 2026,
    selesai: true,
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
  return daftar.join(" · ");
}

export const daftarBukuAwal = [
  {
    id: 1,
    judul: "Janji",
    penulis: "Tere Liye",
    tahun: 2021,
    kategori: "Novel",
    gambar: "/rak-buku/rak-buku.jpeg",
    sinopsis:
      "Kisah perjalanan tiga santri untuk mencari Bahar Safar.",
  },
  {
    id: 2,
    judul: "Tentang Kamu",
    penulis: "Tere Liye",
    tahun: 2016,
    kategori: "Novel",
    gambar: "/rak-buku/rak-buku1.jpeg",
    sinopsis:
      "Kisah hidup Sri Ningsih yang ditelusuri oleh seorang pengacara.",
  },
  {
    id: 3,
    judul: "Bulan",
    penulis: "Tere Liye",
    tahun: 2015,
    kategori: "Novel",
    gambar: "",
    sinopsis:
      "Petualangan Raib, Seli, dan Ali di klan matahari.",
  },
];
