<template>
  <p>这是文件{{ props.name }}</p>
</template>

<script setup lang="ts">
interface Props {
  name: string | number
}

const props = withDefaults(defineProps<Props>(), {
  name: '测试文件'
})
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
