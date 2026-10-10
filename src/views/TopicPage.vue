<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import HotspotImage from '../components/HotspotImage.vue'
import { topicDetails } from '../data/topicDetails'

const route = useRoute()
const topic = computed(() => topicDetails[route.params.slug])
const openIds = ref([])

function toggle(id) {
  if (openIds.value.includes(id)) {
    openIds.value = openIds.value.filter((x) => x !== id)
  } else {
    openIds.value.push(id)
  }
}

// Dipanggil saat titik di diagram diklik
async function openSection(id) {
  if (!openIds.value.includes(id)) openIds.value.push(id)
  await nextTick() // tunggu DOM diperbarui sebelum scroll
  document.getElementById('section-' + id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

watch(() => route.params.slug, () => {
  openIds.value = []
})
</script>

<template>
  <div v-if="topic">
    <PageHero :title="topic.title" :subtitle="topic.subtitle" :paragraph="topic.paragraph" />

    <section class="sections">
      <div
        v-for="section in topic.sections"
        :key="section.id"
        :id="'section-' + section.id"
        class="card section-card"
      >
        <button class="section-head" @click="toggle(section.id)">
          <span>{{ section.title }}</span>
          <span>{{ openIds.includes(section.id) ? '−' : '+' }}</span>
        </button>

        <div v-show="openIds.includes(section.id)" class="section-body">
          <p>{{ section.body }}</p>
        </div>
      </div>
    </section>

    <section v-if="topic.diagram" class="diagram">
      <HotspotImage
        :src="topic.diagram.image"
        :alt="topic.title"
        :caption="topic.diagram.caption"
        :points="topic.diagram.points"
        @select="openSection"
      />
    </section>

    <section v-if="topic.recommendations" class="recs">
      <h2 class="recs-title">Rekomendasi</h2>
      <div class="grid">
        <div v-for="tier in topic.recommendations" :key="tier.tier" class="card">
          <h3>{{ tier.tier }}</h3>
          <p class="tier-range">{{ tier.range }}</p>
          <ul class="tier-items">
            <li v-for="item in tier.items" :key="item.name">
              <strong>{{ item.name }}</strong>
              <span>{{ item.note }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

  <p v-else>Topik tidak ditemukan.</p>
</template>