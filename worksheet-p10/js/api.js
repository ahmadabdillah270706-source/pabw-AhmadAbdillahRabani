
const ALAMAT = 'https://jsonplaceholder.typicode.com/posts';

export async function ambilNotisia() {
  const respons = await fetch(ALAMAT);

  console.log('Status:', respons.status);
  console.log('OK:', respons.ok);

  if (!respons.ok) {
    throw new Error('Status HTTP ' + respons.status);
  }

  return await respons.json();
}
