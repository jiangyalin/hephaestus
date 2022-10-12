<template>
  <div class="g-box g-dv-folder-box">
    <el-icon
      class="u-icon"
      :data-expand="props.isExpand"
      @click="store.expandElement(props.id)"
    >
      <arrow-right />
    </el-icon>
    <el-icon class="u-icon">
      <folder />
    </el-icon>
    <p>{{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/file-tree/counter'
const store = useCounterStore()

interface Props {
  id: number,
  name: string | number,
  isExpand: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
  name: '测试文件夹',
  isExpand: false
})
</script>

<style lang="scss" scoped>
.g-dv-folder-box {
  display: flex;
  align-items: center;

  .u-icon {
    margin-right: 5px;

    &[data-expand="true"] {
      transform: rotate(90deg);
    }
  }
}
</style>

<style lang="scss">
</style>
