<template>
  <div class="DocumentTree">
    <span
      :class="[
        'DocumentTree__chip',
        structure.children.length ? 'DocumentTree__chip_border_right' : '',
        structure.id !== 0 ? 'DocumentTree__chip_border_left' : '',
        'mx-4',
        'my-2',
      ]"
      >{{ structure.name }}</span
    >

    <div
      :class="[
        'DocumentTree__wrap',
        structure.children.length > 1 ? 'DocumentTree__wrap_border_left' : '',
      ]"
    >
      <draggable :list="structure.children" group="documents">
        <div v-for="item in structure.children" :key="item.id">
          <DocumentTree :structure="item" />
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'DocumentTree',
  components: {
    draggable,
  },

  data: () => ({}),

  props: {
    structure: Object,
  },
};
</script>

<style scoped>
.DocumentTree {
  display: flex;
  align-items: center;
}

.DocumentTree__chip {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 32px;
  background-color: #cfd8dc;
  border-radius: 16px;
}

.DocumentTree__chip_border_right,
.DocumentTree__chip_border_left {
  position: relative;
}

.DocumentTree__chip_border_right::before {
  position: absolute;
  content: '';
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 1px;
  background-color: #b2dfdb;
}

.DocumentTree__chip_border_left::after {
  position: absolute;
  content: '';
  left: -16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 1px;
  background-color: #b2dfdb;
}

.DocumentTree__wrap {
  flex-grow: 1;
}

.DocumentTree__wrap > div {
  min-height: 32px;
}

.DocumentTree__wrap_border_left {
  position: relative;
}

.DocumentTree__wrap_border_left::before {
  position: absolute;
  content: '';
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: calc(100% - 32px);
  background-color: #b2dfdb;
}
</style>
