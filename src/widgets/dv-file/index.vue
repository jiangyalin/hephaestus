<template>
  <div class="g-box g-dv-file-box">
    <el-icon class="u-icon">
      <document />
    </el-icon>
    <p>{{ props.name }}</p>
  </div>
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
.g-dv-file-box {
  display: flex;
  padding-left: 18px;
  align-items: center;

  .u-icon {
    margin-right: 5px;
  }
}
</style>

<style lang="scss">
</style>
