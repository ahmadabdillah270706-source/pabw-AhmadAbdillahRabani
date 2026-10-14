/**

* PABW - Pengembangan Aplikasi Berbasis Web (SIF302)
* Pertemuan 9 - DOM, Event, dan Interaktivitas
*
* Nama    : Ahmad Abdillah Rabani
* NIM     : 25523225
* Kelas   : SIF302 / B
* Topik   : Koleksi Rak Buku Saya
  */

/* =========================================================
LEMBAR A & B: MEMILIH ELEMEN DOM DAN RENDER DATA
========================================================= */

// Data buku diimpor dari app.js
import { daftarBuku } from "./app.js";

// Pemilih elemen DOM sesuai HTML
const galeri = document.querySelector(".galeri");
const tabel = document.querySelector(".papan tbody");
const pesanKosong = document.querySelector("#pesan-kosong");
const formBuku = document.querySelector("#kontak form");

const inputJudul = document.querySelector("#judul");
const inputPenulis = document.querySelector("#penulis");
const inputTahun = document.querySelector("#tahun");

const tombolSubmit = formBuku
? formBuku.querySelector("button[type='submit']")
: null;

/**

* Membuat satu kartu buku.
* @param {Object} buku - Data buku.
* @returns {HTMLElement} Elemen kartu buku.
  */
  function buatKartu(buku) {
  const artikel = document.createElement("article");
  artikel.className = "kartu";

const isi = document.createElement("div");
isi.className = "kartu__isi";

const figure = document.createElement("figure");

if (buku.gambar) {
const gambar = document.createElement("img");
gambar.src = buku.gambar;
gambar.alt = `Sampul ${buku.judul} karya ${buku.penulis}`;
gambar.width = 600;
gambar.height = 400;
gambar.loading = "lazy";

```
figure.append(gambar);
```

}

const caption = document.createElement("figcaption");
caption.textContent = buku.sinopsis || "Belum ada deskripsi buku.";

figure.append(caption);
isi.append(figure);

const kaki = document.createElement("div");
kaki.className = "kartu__kaki";

const judul = document.createElement("strong");
judul.textContent = buku.judul;

const penulis = document.createElement("span");
penulis.textContent = buku.penulis;

kaki.append(judul, penulis);
artikel.append(isi, kaki);

return artikel;
}

/**

* Membuat satu baris tabel buku.
* @param {Object} buku - Data buku.
* @param {number} nomor - Nomor urut buku.
* @returns {HTMLTableRowElement} Baris tabel.
  */
  function buatBarisTabel(buku, nomor) {
  const baris = document.createElement("tr");

const kolomNomor = document.createElement("th");
kolomNomor.scope = "row";
kolomNomor.textContent = nomor;

const kolomJudul = document.createElement("td");
kolomJudul.textContent = buku.judul;

const kolomPenulis = document.createElement("td");
kolomPenulis.textContent = buku.penulis;

const kolomKategori = document.createElement("td");
kolomKategori.textContent = buku.kategori || "Novel";

baris.append(
kolomNomor,
kolomJudul,
kolomPenulis,
kolomKategori
);

return baris;
}

/**

* Menampilkan daftar buku pada galeri dan tabel.
* @param {Array} daftar - Daftar buku yang akan ditampilkan.
  */
  function render(daftar) {
  if (galeri) galeri.textContent = "";
  if (tabel) tabel.textContent = "";

if (!daftar || daftar.length === 0) {
if (pesanKosong) pesanKosong.hidden = false;
return;
}

if (pesanKosong) pesanKosong.hidden = true;

daftar.forEach((buku, indeks) => {
if (galeri) {
galeri.append(buatKartu(buku));
}

```
if (tabel) {
  tabel.append(buatBarisTabel(buku, indeks + 1));
}
```

});
}

// Render awal ketika halaman dibuka
render(daftarBuku);

/* =========================================================
LEMBAR C: EVENT DELEGATION FILTER KATEGORI BUKU
========================================================= */

// Membuat wadah filter karena HTML belum memiliki elemen filter
let barisFilter = document.querySelector("#filter");

if (!barisFilter && galeri) {
barisFilter = document.createElement("div");
barisFilter.id = "filter";

const tombolSemua = document.createElement("button");
tombolSemua.type = "button";
tombolSemua.textContent = "Semua Buku";
tombolSemua.dataset.kategori = "semua";
tombolSemua.classList.add("aktif");

const tombolNovel = document.createElement("button");
tombolNovel.type = "button";
tombolNovel.textContent = "Novel";
tombolNovel.dataset.kategori = "Novel";

barisFilter.append(tombolSemua, tombolNovel);

const judulKoleksi = document.querySelector("#koleksi h2");

if (judulKoleksi) {
judulKoleksi.after(barisFilter);
}
}

/**

* Menandai tombol filter aktif.
* @param {HTMLButtonElement} tombolAktif - Tombol yang dipilih.
  */
  function tandaiTombolAktif(tombolAktif) {
  if (!barisFilter) return;

barisFilter.querySelectorAll("button").forEach((tombol) => {
tombol.classList.toggle("aktif", tombol === tombolAktif);
});
}

// Satu event listener untuk semua tombol filter
if (barisFilter) {
barisFilter.addEventListener("click", (event) => {
const target = event.target;

```
if (!(target instanceof Element)) return;

const tombol = target.closest("button");

if (!tombol || !barisFilter.contains(tombol)) return;

const kategori = tombol.dataset.kategori;

tandaiTombolAktif(tombol);

const bukuTerpilih = daftarBuku.filter(
  (buku) => kategori === "semua" ||
    (buku.kategori || "Novel") === kategori
);

render(bukuTerpilih);
```

});
}

/* =========================================================
LEMBAR D: VALIDASI FORM TAMBAH BUKU
========================================================= */

/**

* Memvalidasi satu kolom.
* @param {HTMLInputElement} input - Kolom yang diperiksa.
* @param {boolean} saatSubmit - Validasi saat form dikirim.
* @returns {boolean} Status validasi.
  */
  function periksaKolom(input, saatSubmit = false) {
  if (!input) return false;

const kolom = input.closest(".form-kolom");
const nilai = input.value.trim();

let pesanGalat = kolom
? kolom.querySelector(".pesan-galat")
: null;

if (kolom && !pesanGalat) {
pesanGalat = document.createElement("small");
pesanGalat.className = "pesan-galat";
pesanGalat.style.display = "none";
kolom.append(pesanGalat);
}

let sah = true;
let pesan = "";

if (input === inputJudul) {
sah = nilai !== "";
pesan = "Judul buku wajib diisi.";
} else if (input === inputPenulis) {
sah = nilai !== "";
pesan = "Nama penulis wajib diisi.";
} else if (input === inputTahun) {
const tahun = Number(nilai);

```
sah =
  nilai !== "" &&
  Number.isInteger(tahun) &&
  tahun >= 1900 &&
  tahun <= 2026;

pesan = "Tahun terbit harus antara 1900 dan 2026.";
```

}

if (!sah && (saatSubmit || input.dataset.touched === "true")) {
input.setAttribute("aria-invalid", "true");

```
if (pesanGalat) {
  pesanGalat.textContent = pesan;
  pesanGalat.style.display = "block";
}
```

} else if (sah) {
input.removeAttribute("aria-invalid");

```
if (pesanGalat) {
  pesanGalat.style.display = "none";
}
```

}

return sah;
}

/**

* Memeriksa seluruh kolom form.
* @returns {boolean} True jika semua input valid.
  */
  function periksaSeluruhForm() {
  const sahJudul = periksaKolom(inputJudul);
  const sahPenulis = periksaKolom(inputPenulis);
  const sahTahun = periksaKolom(inputTahun);

const semuaSah = sahJudul && sahPenulis && sahTahun;

if (tombolSubmit) {
tombolSubmit.disabled = !semuaSah;
}

return semuaSah;
}

if (formBuku) {
const inputs = [
inputJudul,
inputPenulis,
inputTahun
].filter(Boolean);

// Validasi saat mengetik dan saat meninggalkan kolom
inputs.forEach((input) => {
input.addEventListener("input", () => {
input.dataset.touched = "true";
periksaKolom(input);
periksaSeluruhForm();
});

```
input.addEventListener("blur", () => {
  input.dataset.touched = "true";
  periksaKolom(input);
  periksaSeluruhForm();
});
```

});

// Pemeriksaan awal
periksaSeluruhForm();

// Menangani pengiriman form
formBuku.addEventListener("submit", (event) => {
event.preventDefault();


let kolomPertamaGalat = null;

inputs.forEach((input) => {
  input.dataset.touched = "true";

  if (!periksaKolom(input, true) && !kolomPertamaGalat) {
    kolomPertamaGalat = input;
  }
});

if (!periksaSeluruhForm()) {
  if (kolomPertamaGalat) {
    kolomPertamaGalat.focus();
  }

  return;
}

// Membuat data buku baru
const bukuBaru = {
  id: daftarBuku.length > 0
    ? Math.max(...daftarBuku.map((buku) => buku.id)) + 1
    : 1,
  judul: inputJudul.value.trim(),
  penulis: inputPenulis.value.trim(),
  tahun: Number(inputTahun.value.trim()),
  kategori: "Novel",
  gambar: "",
  sinopsis:
    `${inputJudul.value.trim()} merupakan buku karya ` +
    `${inputPenulis.value.trim()} yang diterbitkan pada tahun ` +
    `${inputTahun.value.trim()}.`
};

daftarBuku.push(bukuBaru);

// Kembalikan filter ke Semua Buku
const tombolSemua = barisFilter
  ? barisFilter.querySelector("[data-kategori='semua']")
  : null;

if (tombolSemua) {
  tandaiTombolAktif(tombolSemua);
}

// Perbarui galeri dan tabel
render(daftarBuku);

// Bersihkan form dan pesan kesalahan
formBuku.reset();

inputs.forEach((input) => {
  delete input.dataset.touched;
  input.removeAttribute("aria-invalid");

  const pesan = input.closest(".form-kolom")
    ?.querySelector(".pesan-galat");

  if (pesan) {
    pesan.style.display = "none";
  }
});

periksaSeluruhForm();
  });
}

/* =========================================================
LEMBAR TAMBAHAN: TEMA GELAP
========================================================= */

const pengalihTema = document.querySelector("#tema");

if (pengalihTema) {
  pengalihTema.addEventListener("change", () => {
    document.body.classList.toggle(
      "tema-gelap",
      pengalihTema.checked
    );
  });
}