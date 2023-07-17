<template>
  <div class="g-box g-menu-panel-box">
    <ul
      v-if="menu.length"
      class="u-list"
    >
      <li
        v-for="item in props.menu"
        :key="item.value"
        class="u-li"
      >
        <div
          class="u-group"
          @click="store.clickMenu(item.value)"
        >
          <p class="u-p">{{ item.title }}</p>
          <el-icon
            v-if="(item.menuNode || []).length"
            class="u-icon"
          >
            <ArrowRight />
          </el-icon>
        </div>
        <index
          :menu="item.menuNode"
          class="m-index"
        ></index>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Menu } from '../../components/module/menu-box/menu'
import { useCounterStore } from '../../stores/menu/counter'

const store = useCounterStore()

interface Props {
  menu?: Array<Menu>
}

const props = withDefaults(defineProps<Props>(), {
  menu: () => []
})
</script>

<style lang="scss" scoped>
@import "../../style/global-variable";
.g-menu-panel-box {
  position: absolute;
  //top: 22px;
  //right: 0;
  z-index: 1;
  background-color: $box-bg;
  border-radius: 4px;
  //transform: translateX(100%);

  .u-list {
    padding: 3px;
    border: 1px solid $box-bc;
    border-radius: 4px;
    box-shadow: $box-sh;

    .u-li {
      position: relative;

      &:hover .m-index {
        display: block;
      }
    }
  }

  .u-group {
    display: flex;
    padding: 0 3px 0 8px;
    height: 22px;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;

    &:hover {
      background-color: $fc-theme;
    }
  }

  .m-index {
    display: none;
    top: -3px;
    right: 0;
    transform: translateX(100%);
  }

  .u-p {
    white-space: nowrap;
    line-height: 22px;
    cursor: default;
  }

  .u-icon {
    margin-left: 10px;
    width: 12px;
  }
}
</style>

<style lang="scss">
</style>
