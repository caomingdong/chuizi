<template>
  <div class="page-item-list">
    <itemHeader :itemHeaderLists="itemLists && itemLists.name"></itemHeader>
    <p>{{ itemLists }}</p>
  </div>
</template>

<script>
import itemHeader from "./header/index";
export default {
  name: "itemList",
  components: {
    itemHeader
  },
  props: {
    itemLists: Object
  }
};
</script>

<style lang="scss">
.page-item-list {
  padding-top: 3.125rem;
}
</style>
