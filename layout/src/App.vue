<script setup>
import SuspenseWithErrors from "./SuspenseWithErrors";
import Layout from "./Layout.vue";
</script>

<template>
  <div class="main">
    <SuspenseWithErrors>
      <template #error="props">
        <p class="center error space-up">
          {{ props.error }}
        </p>
      </template>
      <template #default>
        <Layout />
      </template>
      <template #fallback>
        <div class="space-up">Loading please wait ...</div>
      </template>
    </SuspenseWithErrors>
  </div>
</template>
