<script setup>
defineProps({
  src: String,
  alt: String,
  caption: String,
  points: Array, // [{ x, y, label, text?, sectionId }]
})

const emit = defineEmits(['select'])
</script>

<template>
  <figure class="hotspot">
    <div class="hotspot-img">
      <img :src="src" :alt="alt" loading="lazy" />

      <button
        v-for="(p, i) in points"
        :key="i"
        class="pin"
        :style="{ left: p.x + '%', top: p.y + '%' }"
        :aria-label="p.label"
        @click="emit('select', p.sectionId)"
      >
        +
        <span class="pin-tip">
          <strong>{{ p.label }}</strong>
          <small v-if="p.text">{{ p.text }}</small>
        </span>
      </button>
    </div>

    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>