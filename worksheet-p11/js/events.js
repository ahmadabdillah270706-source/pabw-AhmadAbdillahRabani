
/**
 * PABW - Pertemuan 11
 * Event dan Interaktivitas
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

import {
  aturUlang,
  pilihKategori,
  pilihTema,
  tambahBuku,
} from "./state.js";

import { siapkanKontrol } from "./dom.js";

export function pasangPendengar() {
  siapkanKontrol();

  // Event tombol filter buku.
  const filter = document.querySelector("#filter");

  if (filter && !filter.dataset.pendengarTerpasang) {
    filter.addEventListener("click", (peristiwa) => {
      if (!(peristiwa.target instanceof Element)) {
        return;
      }

      const tombol = peristiwa.target.closest("button");

      if (!tombol || !filter.contains(tombol)) {
        return;
      }

      if (tombol.id === "atur-ulang") {
        aturUlang();
        return;
      }

      if (tombol.dataset.kategori) {
        pilihKategori(tombol.dataset.kategori);
      }
    });

    filter.dataset.pendengarTerpasang = "true";
  }

  // Event tema gelap.
  const tema = document.querySelector("#tema");

  if (tema && !tema.dataset.pendengarTerpasang) {
    tema.addEventListener("change", () => {
      pilihTema(tema.checked);
    });

    tema.dataset.pendengarTerpasang = "true";
  }

  // Event formulir tambah buku.
  const form = document.querySelector("#kontak form");

  if (form && !form.dataset.pendengarTerpasang) {
    form.addEventListener("submit", (peristiwa) => {
      peristiwa.preventDefault();

      const judulInput = form.querySelector("#judul");
      const penulisInput = form.querySelector("#penulis");
      const tahunInput = form.querySelector("#tahun");

      const judul = judulInput?.value.trim() || "";
      const penulis = penulisInput?.value.trim() || "";
      const tahunTeks = tahunInput?.value.trim() || "";
      const tahun = Number(tahunTeks);

      let pesan = form.querySelector("#pesan-form");

      if (!pesan) {
        pesan = document.createElement("p");
        pesan.id = "pesan-form";
        pesan.setAttribute("role", "status");
        pesan.setAttribute("aria-live", "polite");
        form.append(pesan);
      }

      const galat = [];

      if (!judul) {
        galat.push("Judul buku wajib diisi.");
      }

      if (!penulis) {
        galat.push("Nama penulis wajib diisi.");
      }

      if (
        !tahunTeks ||
        !Number.isInteger(tahun) ||
        tahun < 1900 ||
        tahun > 2026
      ) {
        galat.push("Tahun terbit harus berupa bilangan bulat 1900–2026.");
      }

      if (galat.length > 0) {
        pesan.textContent = galat.join(" ");
        return;
      }

      tambahBuku({
        judul,
        penulis,
        tahun,
        kategori: "Novel",
        gambar: "",
        sinopsis: "",
      });

      form.reset();
      pesan.textContent = "Buku berhasil ditambahkan ke koleksi.";
    });

    form.dataset.pendengarTerpasang = "true";
  }
}