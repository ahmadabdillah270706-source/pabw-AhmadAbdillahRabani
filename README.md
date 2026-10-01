# PABW — AHMAD ABDILLAH RABANI — 25523225

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 6 — Responsif Mobile-First

- Halaman menggunakan meta viewport agar tampilan mengikuti lebar perangkat.
- Layout dasar dibuat satu kolom untuk layar kecil.
- Menu sidebar ditempatkan di atas konten utama pada ukuran layar kecil.
- Galeri menggunakan Grid satu kolom pada layar kecil dan berubah menjadi dua kolom pada breakpoint 48rem.
- Sidebar dan konten utama disusun berdampingan pada breakpoint 60rem.
- Breakpoint menggunakan min-width dengan satuan rem.
- Gambar menggunakan max-width: 100% agar tidak meluber dari wadah.
- Tabel menggunakan overflow-x: auto agar tabel lebar dapat digulir sendiri.
- Ukuran teks menggunakan satuan relatif seperti rem.
- Layout diuji pada ukuran layar 360 px, 768 px, dan 1.280 px untuk memastikan tidak terjadi gulir mendatar.

## Catatan Penggunaan AI

AI digunakan untuk membantu memahami dan memeriksa penerapan responsive design dan pendekatan mobile-first, terutama pengaturan satu kolom pada layar kecil, penggunaan breakpoint 48rem dan 60rem, serta penyesuaian gambar dan tabel agar tidak meluber.

Pembuatan isi halaman, pemilihan topik, data buku, gambar, struktur kode, serta keputusan akhir dalam pengerjaan dilakukan dan diperiksa sendiri.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Topik halaman saya: pengaturan layout modern pada halaman koleksi rak buku saya.
- Halaman menggunakan CSS Grid untuk kerangka halaman, pembagian content, dan galeri.
- Halaman menggunakan Flexbox untuk navbar, menu sidebar, isi kartu, dan footer kartu.
- Kerangka halaman: header, content, dan footer.
- Content dibagi menjadi dua kolom: sidebar dan konten utama.
- Galeri menggunakan Grid adaptif dengan auto-fit dan minmax().
- Penempatan elemen menggunakan span dan area bernama.
- Jarak antar elemen menggunakan gap.
- Layout menggunakan satuan relatif seperti rem dan fr.
- Layout diuji agar tidak meluber pada ukuran layar 360 px dan 1.280 px.

## Catatan Penggunaan AI

AI digunakan untuk membantu pada bagian yang paling sulit, yaitu memahami dan memeriksa penggunaan CSS Grid dan Flexbox, terutama grid-template-areas, grid-column: span, dan repeat(auto-fit, minmax()).

Pembuatan isi halaman, pemilihan topik, data buku, gambar, struktur kode, serta keputusan akhir dalam pengerjaan dilakukan dan diperiksa sendiri.

## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #6B4F3A (cokelat), dipilih karena sesuai dengan tema koleksi buku dan memberikan kesan hangat serta elegan.
- Halaman menggunakan design token untuk warna, jarak, sudut, bayangan, dan ukuran huruf.
- Layout akan menggunakan Flexbox dan gap.
- Tipografi menggunakan satuan relatif seperti remg.
- Tema gelap akan menggunakan token semantik.

 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #6B4F3A | tombol, tautan, penanda |
| --color-fg | #2E2926 | warna teks utama |
| --color-bg | #F7F3EE | latar halaman |
| --color-surface | #FFFFFF | latar kartu dan panel |
| --color-border | #D8C9BA | garis pemisah dan tepi kotak |
| --color-danger | #A94442 | peringatan dan isian tidak sah |
| --color-focus | #B58B5A | garis fokus papan ketik |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus tanpa menyunting berkas CSS lainnya.

## Catatan Penggunaan AI

AI digunakan untuk membantu menentukan dan memeriksa nilai kontras warna pada tampilan halaman.
Pembuatan isi halaman, pemilihan topik, data buku, gambar, struktur kode, serta keputusan akhir dalam pengerjaan dilakukan dan diperiksa sendiri.

## Pertemuan 3 — Halaman Profil Saya

Topik halaman saya: koleksi rak buku saya.
- Judul halaman: Koleksi Rak Buku Saya
- Deskripsi: halaman yang menampilkan koleksi novel Tere Liye yang saya miliki
- Tautan navigasi: Koleksi Buku, Kategori Buku, Kontak
- Dua bagian utama: Koleksi Buku, Kategori Buku
- Kolom tabel: No., Judul Buku, Penulis, Kategori
- Kolom form: Judul Buku, Penulis, Tahun Terbit
- Gambar: rak-buku.jpeg, rak-buku1.jpeg

## Catatan Penggunaan AI

AI Untuk bantuan pada bagian yang sulit, untuk memahami struktur HTML5, penggunaan atribut seperti label, for, dan id, dan validasi pada form menggunakan required, min, dan max.
Pembuatan isi halaman, pemilihan topik, data buku, gambar, dan keputusan akhir dalam pengerjaan dilakukan dan diperiksa sendiri.

