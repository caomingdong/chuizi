<template>
  <div class="page-category">
    <div v-for="(item, index) in cateCents" :key="index" class="box">
      <div class="title-wrapper">
        <h1>{{ item.name }}</h1>
      </div>
      <div class="img-box">
        <a :href="item.image.linkUrl">
          <img :src="item.image.src" />
        </a>
      </div>
      <div
        :class="
          item.layout.dataList.length == '2'
            ? 'box-line'
            : item.layout.dataList.length == '6'
            ? 'box-six'
            : 'box-four'
        "
      >
        <router-link
          :to="'/item/'+hello.sku"
          v-for="hello in item.layout.dataList"
          :key="hello.sku"
        >
          <div class="img-box">
            <img
              :src="
                cateParticulars.find(a => a.id == hello.sku) &&
                  cateParticulars.find(a => a.id == hello.sku).shop_info
                    .ali_image
              "
            />
          </div>
          <span>{{
            cateParticulars.find(a => a.id == hello.sku) &&
              cateParticulars.find(a => a.id == hello.sku).shop_info.title
          }}</span>
          <i class="iconfont icon-youjian"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categorys",
  props: {
    cateCents: {
      type: Array
    },
    cateParticulars: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";

.page-category {
  overflow: hidden;
  background: #ccc;
  .box {
    background: #fff;
    margin-bottom: 6px;
    position: relative;
    box-sizing: border-box;
    .title-wrapper {
      @include border-bottom;
      h1 {
        height: 2.5rem;
        line-height: 2.5rem;
        color: #666;
        font-weight: 700;
        font-size: 1rem;
        padding: 0 0.6rem;
      }
    }
  }
  .img-box {
    @include border-bottom;
    padding: 0.911438rem 0;
    a {
      width: 100%;
      padding: 0 1.25rem;
      position: relative;
      img {
        width: 21.124rem;
        z-index: 100;
      }
    }
  }
  .box-line {
    a {
      @include border-bottom;
      height: 3rem;
      width: 100%;
      display: flex;
      align-items: center;
      img {
        margin: 0 0.6rem;
        height: 1.8rem;
        width: 1.8rem;
      }
      span {
        font-size: 0.6rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.8);
      }
      i {
        float: right;
        transform: scale(0.8);
        position: absolute;
        right: 20px;
      }
    }
  }
  .box-four {
    padding: 0.9rem 0.6rem 0 0.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    a {
      width: 10.71875rem;
      height: 3.90625rem;
      display: flex;
      align-content: center;
      line-height: 3.90625rem;
      img {
        margin: 0 0.6rem;
        height: 1.8rem;
        width: 1.8rem;
      }
      span {
        font-size: 0.6rem;
        font-weight: 700;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      i {
        float: right;
        transform: scale(0.8);
      }
    }
  }
  .box-six {
    padding: 0.9rem 0.6rem 0 0.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    a {
      width: 6.944375rem;
      text-align: center;
      .img-box {
        width: 6.944375rem;
        height: 6.944375rem;
        border: 1px solid #f0f0f0;
        text-align: center;
        line-height: 6.944375rem;
        img {
          width: 4.3125rem;
          height: 4.3125rem;
        }
      }
      span {
        display: block;
        width: 6.944375rem;
        font-size: 0.5rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.8);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0.390625rem 0 0.9rem;
      }
      i {
        display: none;
      }
    }
  }
}
</style>
