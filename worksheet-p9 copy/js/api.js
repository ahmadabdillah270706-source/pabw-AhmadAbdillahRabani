
const ALAMAT = 'https://openlibrary.org/search.json?q=tere+liye&limit=10';

export async function ambilBuku() {
  const respons = await fetch(ALAMAT);

  console.log('Status:', respons.status);
  console.log('OK:', respons.ok);

  if (!respons.ok) {
    throw new Error('Status ' + respons.status);
  }

  const data = await respons.json();

  console.log(data);

  return data;
}
