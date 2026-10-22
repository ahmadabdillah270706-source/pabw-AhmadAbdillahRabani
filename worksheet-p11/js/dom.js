
/**
 * PABW - Pertemuan 11
 * DOM dan Render
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

import {
  buatPerkenalan,
  formatKeahlian,
  profil,
  daftarProyek,
} from "./data.js";

const ambil = (pemilih) => document.querySelector(pemilih);

function buatElemen(tag, teks, kelas) {
  const elemen = document.createElement(tag);

  if (teks !== undefined && teks !== null) {
    elemen.textContent = teks;
  }

  if (kelas) {
    elemen.className = kelas;
  }

  return elemen;
}

export function siapkanKontrol() {
  const bagianKoleksi = ambil("#koleksi");
  const galeri = bagianKoleksi?.querySelector(".galeri");

  let kosong = ambil("#pesan-kosong");

  if (!kosong && galeri) {
    kosong = buatElemen(
      "p",
      "Belum ada buku dalam koleksi."
    );

    kosong.id = "pesan-kosong";
    kosong.hidden = true;
    galeri.parentElement.insertBefore(kosong, galeri);
  }
}

function buatKartu(buku) {
  const kartu = buatElemen("article", undefined, "kartu");

  kartu.append(
    buatElemen("h3", buku.judul),
    buatElemen("p", `Penulis: ${buku.penulis}`)
  );

  if (buku.tahun) {
    kartu.append(
      buatElemen("p", `Tahun: ${buku.tahun}`)
    );
  }

  if (buku.gambar) {
    const gambar = document.createElement("img");
    gambar.src = buku.gambar;
    gambar.alt = `Sampul buku ${buku.judul}`;
    gambar.loading = "lazy";
    gambar.onerror = () => gambar.remove();

    kartu.prepend(gambar);
  }

  if (buku.sinopsis) {
    kartu.append(
      buatElemen("p", buku.sinopsis)
    );
  }

  return kartu;
}

function renderGaleri(state) {
  const bagianKoleksi = ambil("#koleksi");
  const galeri = bagianKoleksi?.querySelector(".galeri");
  const kosong = ambil("#pesan-kosong");

  if (!galeri) return;

  galeri.textContent = "";

  const bukuTampil = state.daftarBuku || [];

  if (kosong) {
    kosong.hidden = bukuTampil.length > 0;
  }

  bukuTampil.forEach((buku) => {
    galeri.append(buatKartu(buku));
  });
}

function renderTabel(state) {
  const badanTabel = ambil(".papan tbody");

  if (!badanTabel) return;

  badanTabel.textContent = "";

  (state.daftarBuku || []).forEach((buku, indeks) => {
    const baris = document.createElement("tr");

    baris.append(
      buatElemen("th", indeks + 1),
      buatElemen("td", buku.judul),
      buatElemen("td", buku.penulis),
      buatElemen("td", buku.kategori || "Novel")
    );

    baris.firstElementChild.setAttribute("scope", "row");
    badanTabel.append(baris);
  });
}

function renderTema(state) {
  const pengalih = ambil("#tema");

  if (pengalih) {
    pengalih.checked = state.temaGelap;
  }

  document.documentElement.classList.toggle(
    "tema-gelap",
    state.temaGelap
  );

  document.body.classList.toggle(
    "tema-gelap",
    state.temaGelap
  );
}

function renderProfil() {
  const elemenNama = ambil("#nama-profil");

  if (elemenNama) {
    elemenNama.textContent = profil.nama;
  }

  const elemenPerkenalan = ambil("#perkenalan");

  if (elemenPerkenalan) {
    elemenPerkenalan.textContent = buatPerkenalan(profil);
  }

  const elemenKeahlian = ambil("#keahlian");

  if (elemenKeahlian) {
    elemenKeahlian.textContent =
      formatKeahlian(profil.keahlian);
  }

  const wadahProyek = ambil("#daftar-proyek");

  if (wadahProyek) {
    wadahProyek.textContent = "";

    daftarProyek.forEach((proyek) => {
      const status = proyek.selesai
        ? "Selesai"
        : "Dalam proses";

      wadahProyek.append(
        buatElemen(
          "li",
          `${proyek.judul} (${proyek.tahun}) — ${status}`
        )
      );
    });
  }
}

function renderNotisia(state) {
  const status = ambil("#status-notisia");
  const daftar = ambil("#daftar-notisia");

  if (!status || !daftar) return;

  daftar.textContent = "";

  if (state.statusNotisia === "memuat") {
    status.textContent = "Sedang memuat data dari API...";
    return;
  }

  if (state.statusNotisia === "gagal") {
    status.textContent =
      `Data tidak berhasil dimuat: ${state.pesanGalatNotisia}`;
    return;
  }

  if (state.statusNotisia === "kosong") {
    status.textContent =
      "API berhasil dihubungi, tetapi tidak ada data.";
    return;
  }

  const data = state.daftarNotisia || [];

  status.textContent =
    `Data berhasil dimuat: ${data.length} item.`;

  data.slice(0, 10).forEach((item) => {
    const kartu = buatElemen("article", undefined, "kartu");

    kartu.append(
      buatElemen(
        "h3",
        item.title || item.judul || "Tanpa judul"
      ),
      buatElemen(
        "p",
        item.body || item.bodyText || item.isi || ""
      )
    );

    daftar.append(kartu);
  });
}

export function render(state) {
  siapkanKontrol();
  renderProfil();
  renderTema(state);
  renderGaleri(state);
  renderTabel(state);
  renderNotisia(state);
}
