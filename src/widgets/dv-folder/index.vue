<template>
  <div class="g-box g-dv-folder-box">
    <el-icon class="u-icon">
      <folder />
    </el-icon>
    <p>{{ props.name }}</p>
  </div>
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
.g-dv-folder-box {
  display: flex;
  align-items: center;

  .u-icon {
    margin-right: 5px;
  }
}
</style>

<style lang="scss">
</style>
