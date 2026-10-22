<script setup>
import { state, pilihKategori } from '../state.js'
import { aturUlang, simpan } from '../simpanan.js'

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  state.temaGelap = false
  simpan(state)
}
</script>

<template>
  <div id="filter" class="kontrol-filter">
    <div class="grup-tombol">
      <button
        type="button"
        :class="{ aktif: state.kategoriAktif === 'semua' }"
        data-kategori="semua"
        @click="pilihKategori('semua')"
      >
        Semua
      </button>
      <button
        type="button"
        :class="{ aktif: state.kategoriAktif === 'novel' }"
        data-kategori="novel"
        @click="pilihKategori('novel')"
      >
        Novel
      </button>
      <button
        type="button"
        id="atur-ulang"
        @click="aturUlangPilihan"
      >
        Atur Ulang
      </button>
    </div>
  </div>
</template>

<style scoped>
.kontrol-filter {
  margin-block: var(--space-3);
}

.grup-tombol {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

button.aktif {
  background: var(--color-focus);
  color: #fff;
  font-weight: 600;
}
</style>
