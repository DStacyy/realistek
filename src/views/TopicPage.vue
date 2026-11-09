<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import HotspotImage from '../components/HotspotImage.vue'
import { topics } from '../data/topics'
import { topicDetails } from '../data/topicDetails'

const route = useRoute()
const slug = computed(() => route.params.slug)
const topic = computed(() => topicDetails[slug.value])

// Posisi topik untuk eyebrow dan navigasi sebelumnya/berikutnya
const index = computed(() => topics.findIndex((t) => t.slug === slug.value))
const prev = computed(() => (index.value > 0 ? topics[index.value - 1] : null))
const next = computed(() =>
  index.value >= 0 && index.value < topics.length - 1 ? topics[index.value + 1] : null
)

const openIds = ref([])
const hovered = ref(null)
const activeTier = ref(0)

const allOpen = computed(
  () => !!topic.value && openIds.value.length === topic.value.sections.length
)
const currentTier = computed(() => topic.value?.recommendations?.[activeTier.value])

// Ringkasan singkat untuk tooltip titik di diagram
function shortText(body) {
  if (body.length <= 100) return body
  const cut = body.slice(0, 100)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

const diagramPoints = computed(() =>
  (topic.value?.diagram?.points ?? []).map((p) => {
    const section = topic.value.sections.find((s) => s.id === p.sectionId)
    return { ...p, text: section ? shortText(section.body) : undefined }
  })
)

function isOpen(id) {
  return openIds.value.includes(id)
}

function toggle(id) {
  openIds.value = isOpen(id)
    ? openIds.value.filter((x) => x !== id)
    : [...openIds.value, id]
}

function toggleAll() {
  openIds.value = allOpen.value ? [] : topic.value.sections.map((s) => s.id)
}

// Dipanggil saat titik di diagram diklik: buka bagian, lalu scroll ke sana
async function openSection(id) {
  if (!isOpen(id)) openIds.value = [...openIds.value, id]
  await nextTick()
  document.getElementById('section-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

// Reset state saat pindah ke topik lain
watch(slug, () => {
  openIds.value = []
  activeTier.value = 0
  hovered.value = null
})
</script>

<template>
  <div v-if="topic" class="topic">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <RouterLink to="/">Beranda</RouterLink>
      <span>/</span>
      <span>{{ topic.title }}</span>
    </nav>

    <PageHero
      :eyebrow="`Komponen ${String(index + 1).padStart(2, '0')} / ${String(topics.length).padStart(2, '0')}`"
      :title="topic.title"
      :subtitle="topic.subtitle"
      :paragraph="topic.paragraph"
    />

    <!-- Bagian penjelasan (akordion) -->
    <section class="panel">
      <div class="toolbar">
        <h2 class="section-title">Pelajari satu per satu</h2>
        <button type="button" class="link-btn" @click="toggleAll">
          {{ allOpen ? 'Tutup semua' : 'Buka semua' }}
        </button>
      </div>

      <div class="acc-list">
        <div
          v-for="(section, i) in topic.sections"
          :key="section.id"
          :id="'section-' + section.id"
          class="acc-item"
          :class="{ open: isOpen(section.id), hovered: hovered === section.id }"
        >
          <button
            :id="'head-' + section.id"
            type="button"
            class="acc-head"
            :aria-expanded="isOpen(section.id)"
            :aria-controls="'panel-' + section.id"
            @click="toggle(section.id)"
            @mouseenter="hovered = section.id"
            @mouseleave="hovered = null"
            @focus="hovered = section.id"
            @blur="hovered = null"
          >
            <span class="acc-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="acc-title">{{ section.title }}</span>
            <svg class="chevron" :class="{ open: isOpen(section.id) }" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div
            :id="'panel-' + section.id"
            class="acc-wrap"
            :class="{ open: isOpen(section.id) }"
            role="region"
            :aria-labelledby="'head-' + section.id"
          >
            <div class="acc-inner">
              <p class="acc-body">{{ section.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diagram: klik titik untuk membuka bagian terkait -->
    <section v-if="topic.diagram" class="panel">
      <h2 class="section-title">Bagian-bagiannya</h2>
      <p class="section-sub" style="margin-bottom: 20px">
        Arahkan kursor ke titik untuk melihat ringkasan, klik untuk membuka penjelasannya.
      </p>
      <HotspotImage
        :src="topic.diagram.image"
        :alt="topic.title"
        :caption="topic.diagram.caption"
        :points="diagramPoints"
        :active-id="hovered"
        @select="openSection"
        @hover="hovered = $event"
      />
    </section>

    <!-- Rekomendasi: pilih rentang harga lewat tab -->
    <section v-if="topic.recommendations" class="panel">
      <h2 class="section-title">Rekomendasi</h2>
      <p class="section-sub">Pilih rentang budget kamu untuk melihat pilihannya.</p>

      <div class="tabs" role="tablist" aria-label="Rentang harga">
        <button
          v-for="(tier, i) in topic.recommendations"
          :key="tier.tier"
          type="button"
          role="tab"
          class="tab"
          :class="{ active: activeTier === i }"
          :aria-selected="activeTier === i"
          @click="activeTier = i"
        >
          {{ tier.tier }}
        </button>
      </div>

      <div v-if="currentTier" :key="activeTier" class="tier-panel" role="tabpanel">
        <span class="tier-range">{{ currentTier.range }}</span>
        <ul class="tier-items">
          <li v-for="item in currentTier.items" :key="item.name">
            <strong>{{ item.name }}</strong>
            <span>{{ item.note }}</span>
          </li>
        </ul>
      </div>
    </section>

    <nav class="topic-nav" aria-label="Navigasi topik">
      <RouterLink v-if="prev" :to="`/topik/${prev.slug}`" class="topic-nav-link">
        <span>← Sebelumnya</span>
        <strong>{{ prev.name }}</strong>
      </RouterLink>
      <span v-else></span>

      <RouterLink v-if="next" :to="`/topik/${next.slug}`" class="topic-nav-link next">
        <span>Berikutnya →</span>
        <strong>{{ next.name }}</strong>
      </RouterLink>
    </nav>
  </div>

  <div v-else class="panel info-panel">
    <h1 class="hero-title">Topik tidak ditemukan</h1>
    <RouterLink to="/" class="btn btn-primary">Kembali ke beranda</RouterLink>
  </div>
</template>