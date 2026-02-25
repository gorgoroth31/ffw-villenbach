<template>
  <span id="breadcrumbs-container">
    <a v-for="(breadcrumb, index) of allBreadcrumbs()" :href="breadcrumb[1]">
      {{ breadcrumb[0] }}<span v-if="index !== allBreadcrumbs().length - 1" class="breadcrumb-divider">></span>
    </a>
  </span>
</template>

<script setup lang="ts">

  const props = defineProps<{
    breadcrumbs: [string, string][]
  }>()

  function allBreadcrumbs() {
    if (props.breadcrumbs !== null && props.breadcrumbs !== undefined) {
      return [["Startseite", "/"], ...props.breadcrumbs]
    }
    return [["Startseite", "/"]];
  }
</script>

<style scoped lang="css">
  a{
      text-decoration: none;
      color: gray;
  }

  .breadcrumb-divider {
    color: gray;
    margin: 0 .5vw;
  }

</style>
