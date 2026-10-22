<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="judul-header">
    <h1>Koleksi Rak Buku Saya</h1>
    <p>
      <strong>{{ props.profil.nama }}</strong> &mdash; {{ props.profil.peran }} (NIM: {{ props.profil.nim }})
    </p>
  </div>
</template>
