<template>
  <!-- 
    这里是分类页
  -->
  <div class="page-category">
    <Header></Header>
    <categorys
      :cateCents="categoryList"
      :cateParticulars="cateParticularsList"
    />
  </div>
</template>

<script>
import categorys from '../../components/Category'

import Header from './../../components/Header/index'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'caregoy',
  components: {
    categorys,
    Header
  },
  methods: {
    ...mapActions('category', ['getCategoryList'])
  },
  computed: {
    ...mapState('category', ['categoryList', 'cateParticularsList'])
  },
  created() {
    this.getCategoryList()
  }
}
</script>
