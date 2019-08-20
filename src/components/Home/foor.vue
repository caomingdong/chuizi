<template>
  <div class="home-foor">
    <div v-for="(item,index) in floorList" :key="index">
      <div class="home-floors-f">
        <a class="home-foor-header" href="###">
          <span>{{ item.floorName }}</span>
          <i class="iconfont icon-youjian"></i>
        </a>
        <div class="home-foor-commer">
          <ul class="home-foor-commer-list">
            <li v-for="(i, index) in item.dataList" :key="index">
              <span>
                <img src alt />
              </span>
              <p>{{ commodity.find( a => a.id == i) && commodity.find( a => a.id == i).name }}</p>
              <p>{{ index }}</p>
              <p>{{ index }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <div class="home-bags">
      <a class="home-bags-header" href="###">
        <span>服饰商品</span>
        <i class="iconfont icon-youjian"></i>
      </a>
      <div class="home-bags-commer">
        <ul class="home-bags-commer-list">
          <li v-for="(item, index) in 5" :key="index">
            <span>
              <img src alt />
            </span>
            <p>{{ index }}</p>
            <p>{{ index }}</p>
            <p>{{ index }}</p>
          </li>
        </ul>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "fome-foor",

  // 动态获取数据
  props: {
    commodity: Array,
    floorList: Array
  }
};
</script>

<style lang="scss">
@import "./../../assets/styles/common/mixins.scss";
.home-foor {
  > div {
    background-color: #fff;
  }
}

.home-floors-f {
  width: 100%;
  height: 18.221875rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  .home-foor-header {
    @include home--header;
  }
  .home-foor-commer {
    width: 100%;
    flex: 1;
    display: flex;
    padding-top: 1.25rem;
  }
  .home-foor-commer-list {
    width: 100%;
    flex: 1;
    padding: 0 1.25rem;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    justify-content: space-between;
  }
  li {
    height: 100%;
    width: 9.375rem;
    margin-right: 0.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 8.75rem;
      height: 8.75rem;
      display: inline-block;
      border: 0.0625rem solid #f1f1f1;
    }
  }
  .home-foor-commer-list::-webkit-scrollbar {
    /*隐藏滚动条*/
    display: none;
  }
}

.home-bags {
  width: 100%;
  display: flex;
  flex-direction: column;
  .home-bags-header {
    @include home--header;
  }
}
</style>
