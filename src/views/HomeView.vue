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
      sectionId: t.slug, // slug menghubungkan titik dan kartu
    }))
)

// Slug yang sedang disorot (karena hover kartu atau titik)
const hovered = ref(null)
// Slug kartu yang sedang berkedip setelah titik diklik
const blinking = ref(null)

// Dipanggil saat titik diklik: scroll ke kartu, lalu berkedip
function focusCard(slug) {
  document.getElementById('card-' + slug)?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  setTimeout(() => {
    blinking.value = slug
    setTimeout(() => {
      if (blinking.value === slug) blinking.value = null
    }, 1200)
  }, 500)
}

function scrollToMap() {
  document.getElementById('peta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <PageHero
    brand
    eyebrow="Panduan setup desktop"
    title="Realistek"
    subtitle="Kenali setup desktop kamu, satu komponen per satu"
    paragraph="Dari keyboard sampai earphone, pahami fungsi tiap perangkat sebelum memilihnya. Arahkan kursor ke titik pada gambar untuk melihat ringkasannya."
  >
    <template #actions>
      <RouterLink to="/topik/keyboard" class="btn btn-primary">Mulai dari Keyboard →</RouterLink>
      <button type="button" class="btn btn-ghost" @click="scrollToMap">Lihat peta setup</button>
    </template>
  </PageHero>

  <section id="peta" class="panel">
    <HotspotImage
      src="/img/setup.webp"
      alt="Setup desktop"
      caption="Arahkan kursor ke titik untuk melihat info, klik untuk menuju kartu topik."
      :points="setupPoints"
      :active-id="hovered"
      @select="focusCard"
      @hover="hovered = $event"
    />
  </section>

  <section class="topics-intro">
    <h2 class="section-title">Pilih topik</h2>
    <p class="section-sub">Empat komponen utama setup desktop. Mulai dari yang paling sering kamu pakai.</p>
  </section>

  <section class="grid">
    <RouterLink
      v-for="(topic, i) in topics"
      :key="topic.slug"
      :id="'card-' + topic.slug"
      :to="`/topik/${topic.slug}`"
      class="topic-card"
      :class="{ hovered: hovered === topic.slug, blink: blinking === topic.slug }"
      :style="{ '--i': i }"
      @mouseenter="hovered = topic.slug"
      @mouseleave="hovered = null"
      @focus="hovered = topic.slug"
      @blur="hovered = null"
    >
      <div class="card-top">
        <span class="card-icon">{{ topic.icon }}</span>
        <span class="card-num">{{ String(i + 1).padStart(2, '0') }}</span>
      </div>
      <h3>{{ topic.name }}</h3>
      <p>{{ topic.info }}</p>
      <span class="card-cta">Pelajari <span class="card-arrow">→</span></span>
    </RouterLink>
  </section>
</template>