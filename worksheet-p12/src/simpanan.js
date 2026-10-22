/**
 * PABW - Pertemuan 12
 * Penyimpanan Klien (LocalStorage)
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

export const KUNCI = "pabw-p11";
export const VERSI = 2;

export function simpan(dataState) {
  const isi = {
    versi: VERSI,
    kategoriAktif: dataState.kategoriAktif,
    temaGelap: Boolean(dataState.temaGelap),
  };

  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch (galat) {
    console.warn("Pilihan tidak dapat disimpan:", galat.message);
  }
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);

    // Belum ada simpanan: gunakan nilai bawaan
    if (teks === null) {
      return null;
    }

    const isi = JSON.parse(teks);

    // Memeriksa versi dan validitas struktur data
    if (
      !isi ||
      isi.versi !== VERSI ||
      typeof isi.temaGelap !== "boolean" ||
      !["semua", "novel"].includes(isi.kategoriAktif)
    ) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch (galat) {
    // Jika JSON rusak, halaman tetap berjalan dan simpanan dibersihkan
    try {
      localStorage.removeItem(KUNCI);
    } catch {
      // Abaikan jika pembersihan gagal
    }

    console.warn("Simpanan rusak; nilai bawaan digunakan.");
    return null;
  }
}

export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI);
  } catch (galat) {
    console.warn("Simpanan tidak dapat dihapus:", galat.message);
  }
}
