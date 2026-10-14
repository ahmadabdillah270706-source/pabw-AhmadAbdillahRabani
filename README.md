# PABW — AHMAD ABDILLAH RABANI — 25523225

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 10 — JavaScript Asynchronous, Fetch API, Promise, dan JSON

* Fetch API digunakan untuk mengambil data dari sumber eksternal melalui URL API.
* Fungsi ambilNotisia() pada file js/api.js digunakan untuk mengambil data dari API JSONPlaceholder.
* URL API disimpan dalam satu konstanta agar mudah dikelola dan digunakan kembali.
* async digunakan untuk membuat fungsi asinkron yang dapat menggunakan await.
* await digunakan untuk menunggu proses pengambilan data dan pembacaan respons selesai.
* try/catch digunakan untuk menangani kesalahan selama proses pengambilan dan pengolahan data API.
* response.ok digunakan untuk memeriksa apakah respons HTTP berhasil sebelum data dibaca.
* response.status digunakan untuk memeriksa kode status HTTP dari respons API.
* response.headers.get('content-type') digunakan untuk memeriksa jenis konten yang dikirim oleh API.
* response.json() digunakan untuk membaca respons JSON dan mengubahnya menjadi nilai JavaScript.
* throw new Error() digunakan untuk menghasilkan kesalahan ketika respons API tidak berhasil.
* export dan import digunakan untuk menghubungkan fungsi pengambilan data pada js/api.js dengan js/app.js.
* File js/app.js bertugas memanggil fungsi API, mengolah data yang diterima, dan menampilkan hasilnya pada halaman.
* createElement() digunakan untuk membuat elemen HTML untuk menampilkan data API.
* textContent digunakan untuk menampilkan judul dan isi berita atau kiriman API dengan aman.
* append() digunakan untuk menambahkan elemen hasil pengolahan data ke dalam halaman.
* replaceChildren() digunakan untuk membersihkan wadah sebelum menampilkan data baru agar elemen tidak berlipat.
* Keadaan loading ditampilkan ketika proses pengambilan data sedang berlangsung.
* Keadaan berhasil ditampilkan ketika data berhasil diperoleh dan ditampilkan pada halaman.
* Keadaan gagal ditampilkan ketika terjadi kesalahan saat mengambil atau mengolah data API.
* Keadaan kosong ditampilkan ketika API berhasil diakses tetapi tidak mengembalikan data untuk ditampilkan.
* console.log() dan console.error() digunakan untuk membantu memeriksa data, status respons, dan kesalahan melalui Console browser.
* JSON digunakan sebagai format pertukaran data antara API dan aplikasi JavaScript.
* JSON.parse() digunakan untuk mengubah teks JSON menjadi nilai JavaScript.
* JSON.stringify() digunakan untuk mengubah nilai JavaScript menjadi teks JSON.
* Browser DevTools digunakan untuk memeriksa respons API, pesan kesalahan, dan hasil pengujian fitur.

## Catatan Penggunaan AI

AI digunakan untuk membantu memahami penggunaan async/await dan try/catch dalam pengambilan data dari API serta penanganan kesalahan. Penerapan kode dan pengujian hasil dilakukan dan diperiksa sendiri.

## Pertemuan 9 — JavaScript DOM, Event, dan Validasi Form

* JavaScript dihubungkan ke halaman menggunakan file js/dom.js dengan <script type="module">.
* querySelector() digunakan untuk mengambil elemen HTML berdasarkan pemilih CSS.
* querySelectorAll() digunakan untuk mengambil beberapa elemen yang cocok dengan pemilih.
* createElement() digunakan untuk membuat elemen HTML baru melalui JavaScript.
* textContent digunakan untuk mengisi teks elemen dengan aman.
* append() digunakan untuk menambahkan elemen ke dalam wadah galeri buku.
* replaceChildren() atau innerHTML = "" digunakan untuk mengosongkan wadah sebelum proses render ulang agar kartu tidak berlipat.
* addEventListener() digunakan untuk menangani peristiwa klik dan pengiriman form.
* Event delegation digunakan dengan memasang satu event listener pada elemen induk untuk menangani tombol filter.
* event.target dan closest() digunakan untuk mengetahui tombol filter yang diklik.
* dataset digunakan untuk membaca atribut data-*, seperti kategori pada tombol filter.
* Method filter() digunakan untuk menampilkan buku sesuai kategori yang dipilih.
* Pesan keadaan kosong ditampilkan ketika tidak ada buku yang sesuai dengan kategori filter.
* preventDefault() digunakan untuk mencegah form memuat ulang halaman saat dikirim.
* Validasi form digunakan untuk memeriksa judul, penulis, dan tahun sebelum data buku ditambahkan.
* trim() digunakan untuk menghapus spasi di awal dan akhir input serta mencegah input yang hanya berisi spasi.
* Console browser dan DevTools digunakan untuk memeriksa error, elemen DOM, event listener, dan hasil pengujian fitur.

## Catatan Penggunaan AI

AI digunakan untuk membantu memahami konsep DOM, pemilihan elemen HTML, pembuatan elemen menggunakan createElement() dan textContent, serta penerapan event listener dan event delegation.
AI juga digunakan untuk membantu memahami proses render ulang, pemfilteran data buku, penanganan keadaan kosong, dan validasi form menggunakan JavaScript.
Penulisan dan penerapan kode pada js/dom.js, penyesuaian halaman HTML, pengujian melalui browser, serta pemeriksaan hasil akhir dilakukan dan diperiksa sendiri.


## Pertemuan 8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

- JavaScript dihubungkan ke halaman menggunakan file js/app.js dengan <script type="module">.
- Data profil disimpan menggunakan variabel const dan let sesuai kebutuhan.
- const digunakan untuk data yang tidak perlu diubah, sedangkan let digunakan untuk nilai yang dapat berubah.
- Template literal digunakan untuk menyusun teks dengan ${}.
- Data profil disimpan dalam bentuk object yang berisi nama, peran, dan daftar keahlian.
- Data proyek disimpan dalam array of objects yang berisi judul, tahun, dan status selesai.
- Function buatPerkenalan() dan formatKeahlian() dibuat sebagai pure function dengan parameter dan nilai return.
- Method filter() digunakan untuk mengambil proyek yang sudah selesai.
- Method find() digunakan untuk mencari satu proyek berdasarkan judul.
- Method map() digunakan untuk mengubah setiap data dalam array menjadi bentuk baru.
- Method reduce() digunakan untuk menghasilkan satu nilai dari seluruh data array.
- Spread operator digunakan untuk membuat salinan array sebelum melakukan sort() agar data asli tidak berubah.
- console.log() dan console.table() digunakan untuk memeriksa hasil pengolahan data melalui Console browser.
- JavaScript dijalankan menggunakan local server/Live Server agar module script dapat berjalan dengan baik.
- Console browser digunakan untuk memeriksa error, hasil function, serta data array dan object.

## Catatan Penggunaan AI
AI digunakan untuk membantu memahami konsep JavaScript modern ES6+, terutama penggunaan const dan let, object dan array of objects, pure function, serta method map(), filter(), find(), dan reduce().
AI juga digunakan untuk membantu memahami cara membaca pesan error pada Console dan memeriksa hasil kode selama pengerjaan.
Penulisan dan penerapan kode pada app.js, pemilihan data profil dan proyek, pengujian melalui Console, serta keputusan akhir dalam pengerjaan dilakukan dan diperiksa sendiri.

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

