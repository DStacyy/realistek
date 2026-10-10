<script setup>
import { computed, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import HotspotImage from '../components/HotspotImage.vue'
import { topics } from '../data/topics'

// Ubah data topik menjadi titik di gambar
const setupPoints = computed(() =>
  topics
    .filter((t) => t.pin)
    .map((t) => ({
      x: t.pin.x,
      y: t.pin.y,
      label: t.name,
      text: t.info,
      sectionId: t.slug, // slug dipakai sebagai penghubung ke kartu
    }))
)

// Slug kartu yang sedang berkedip
const highlight = ref(null)

// Dipanggil saat pin diklik: scroll ke kartu, lalu berkedip
function focusCard(slug) {
  const el = document.getElementById('card-' + slug)
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  // Jeda agar kedipan terlihat setelah scroll selesai
  setTimeout(() => {
    highlight.value = slug
    setTimeout(() => {
      if (highlight.value === slug) highlight.value = null
    }, 1200)
  }, 500)
}
</script>

<template>
  <PageHero
    title="Realistek"
    subtitle="Kenali setup desktop kamu"
    paragraph="Realistek membantu kamu memahami komponen setup desktop, mulai dari keyboard, mouse, speaker, hingga earphone. Arahkan kursor ke titik pada gambar, lalu klik untuk melihat kartunya."
  />

  <section class="diagram">
    <HotspotImage
      src="/img/setup.webp"
      alt="Setup desktop"
      caption="Arahkan kursor ke titik untuk melihat info, klik untuk menuju topik."
      :points="setupPoints"
      @select="focusCard"
    />
  </section>

  <section class="topics-intro">
    <h2 class="topics-title">Pilih Topik</h2>
    <p class="topics-sub">Empat komponen utama setup desktop yang bisa kamu pelajari satu per satu.</p>
  </section>

  <section class="grid">
    <RouterLink
      v-for="topic in topics"
      :key="topic.slug"
      :id="'card-' + topic.slug"
      :to="`/topik/${topic.slug}`"
      class="card"
      :class="{ blink: highlight === topic.slug }"
    >
      <span class="card-icon">{{ topic.icon }}</span>
      <h3>{{ topic.name }}</h3>
      <p>{{ topic.info }}</p>
    </RouterLink>
  </section>
</template>