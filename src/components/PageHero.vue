<script setup>
defineProps({
  eyebrow: String,
  title: String,
  subtitle: String,
  paragraph: String,
  image: String, // opsional, hanya tampil jika diisi
  brand: Boolean, // pakai font logo untuk judul
})
</script>

<template>
  <section class="hero" :class="{ 'hero--split': image }">
    <div class="hero-text">
      <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
      <h1 class="hero-title" :class="{ brand }">{{ title }}</h1>
      <h2 v-if="subtitle" class="hero-sub">{{ subtitle }}</h2>
      <p v-if="paragraph" class="hero-p">{{ paragraph }}</p>
      <div v-if="$slots.actions" class="hero-actions">
        <slot name="actions" />
      </div>
    </div>

    <div v-if="image" class="hero-media">
      <img :src="image" :alt="title" />
    </div>
  </section>
</template>