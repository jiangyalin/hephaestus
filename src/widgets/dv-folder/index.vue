<template>
  <p>这是文件夹{{ props.name }}</p>
</template>

<script setup lang="ts">
interface Props {
  name: string | number
}

const props = withDefaults(defineProps<Props>(), {
  name: '测试文件夹'
})
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
