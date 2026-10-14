/**
 * PABW - Pertemuan 10
 * JavaScript Asinkron: fetch, Promise, dan JSON
 * Nama  : Ahmad Abdillah Rabani
 * NIM   : 25523225
 * Kelas : B
 */

const ALAMAT = 'https://jsonplaceholder.typicode.com/posts';

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);

    console.log(
      'Status:',
      respons.status,
      'OK:',
      respons.ok
    );

    console.log(
      'Content-Type:',
      respons.headers.get('content-type')
    );

    // fetch tidak otomatis gagal pada status 404 atau 500.
    if (!respons.ok) {
      throw new Error('Status HTTP ' + respons.status);
    }

    // Mengubah badan respons JSON menjadi data JavaScript.
    const data = await respons.json();

    console.log('Data API:', data);

    return data;
  } catch (galat) {
    console.error('Gagal memuat data:', galat.message);

    // Lempar ulang supaya app.js dapat menampilkan pesan
    // galat di halaman, bukan hanya di Console.
    throw galat;
  }
}