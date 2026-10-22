/**
 * PABW - Pertemuan 11
 * Aplikasi Utama
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

import {
  inisialisasiState,
  tetapkanNotisia,
  gagalMuatNotisia,
} from "./state.js";

import { pasangPendengar } from "./events.js";
import { siapkanKontrol } from "./dom.js";
import { ambilNotisia } from "./api.js";

// Menyiapkan elemen dan event.
siapkanKontrol();
pasangPendengar();

// Memuat state dan preferensi pengguna.
inisialisasiState();

// Mengambil data API.
ambilNotisia()
  .then(tetapkanNotisia)
  .catch(gagalMuatNotisia);