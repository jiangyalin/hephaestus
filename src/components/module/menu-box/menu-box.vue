<template>
  <div
    v-click-outside="unActive"
    class="g-box g-menu-box"
  >
    <ul class="u-list">
      <li
        v-for="item in menu"
        :key="item.value"
        class="u-li"
      >
        <p
          class="u-p"
          :data-active="active === item.value"
          @click="active = item.value"
        >
          {{ item.title }}
        </p>
        <menu-panel
          v-if="active === item.value"
          :menu="item.menuNode"
          class="m-menu-panel"
        ></menu-panel>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vClickOutside } from '../../../utils/click-outside'
import { globalClick } from '../../../utils/global-event'
import menuPanel from '../../../widgets/menu-panel/index.vue'
import { useCounterStore } from '../../../stores/menu/counter'

const menu = useCounterStore()

const active = ref(0)

const unActive = () => {
  active.value = 0
}
</script>

<style lang="scss" scoped>
@import "./../../../style/global-variable";
.g-menu-box {
  padding: 0 10px;
  color: $fc-primary;
  border: 1px solid $box-bc;
  border-bottom: 0;

  .u-list {
    display: flex;

    .u-li {
      position: relative;

      .u-p {
        padding: 0 10px;
        line-height: 22px;
        cursor: default;

        &[data-active="true"] {
          background-color: $box-bg;
        }
      }

      .m-menu-panel {
        top: 22px;
        left: 0;
      }
    }
  }
}
</style>

<style lang="scss">
</style>
