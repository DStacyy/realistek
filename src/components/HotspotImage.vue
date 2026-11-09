<script setup>
import { ref } from 'vue'

defineProps({
  src: String,
  alt: String,
  caption: String,
  points: { type: Array, default: () => [] }, // [{ x, y, label, text?, sectionId }]
  activeId: { type: String, default: null }, // sectionId yang sedang disorot
})

const emit = defineEmits(['select', 'hover'])

// Jika gambar gagal dimuat, tampilkan placeholder tetapi titik tetap berfungsi
const failed = ref(false)
</script>

<template>
  <figure class="hotspot">
    <div class="hotspot-img">
      <img v-if="src && !failed" :src="src" :alt="alt" loading="lazy" @error="failed = true" />

      <div v-else class="hotspot-fallback" role="img" :aria-label="alt">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
        <span>{{ alt }}</span>
      </div>

      <button
        v-for="(p, i) in points"
        :key="i"
        type="button"
        class="pin"
        :class="{ active: activeId === p.sectionId }"
        :style="{ left: p.x + '%', top: p.y + '%' }"
        :aria-label="p.label"
        @click="emit('select', p.sectionId)"
        @mouseenter="emit('hover', p.sectionId)"
        @mouseleave="emit('hover', null)"
        @focus="emit('hover', p.sectionId)"
        @blur="emit('hover', null)"
      >
        <span class="pin-dot"></span>
        <span class="pin-tip">
          <strong>{{ p.label }}</strong>
          <small v-if="p.text">{{ p.text }}</small>
        </span>
      </button>
    </div>

    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>