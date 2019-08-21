<template>
  <div class="home-foor">
    <div v-for="(item, index) in floorList" :key="index">
      <div :class="asdsda(item.dataList.length)">
        <!-- home-floors-f -->
        <a href="###">
          <span>{{ item.floorName }}</span>
          <i class="iconfont icon-youjian"></i>
        </a>
        <div>
          <ul>
            <li v-for="(i, index) in item.dataList" :key="index">
              <span>
                <img
                  :src="
                    commodity.find(a => a.id == i) &&
                      commodity.find(a => a.id == i).shop_info.ali_image
                  "
                  :alt="
                    commodity.find(a => a.id == i) &&
                      commodity.find(a => a.id == i).name
                  "
                />
              </span>
              <div>
                <p>
                  {{
                  commodity.find(a => a.id == i) &&
                  commodity.find(a => a.id == i).name
                  }}
                </p>
                <p ref="reference">
                  {{
                  commodity.find(a => a.id == i) &&
                  commodity.find(a => a.id == i).spu.shop_info
                  .spu_mobile_sub_title
                  }}
                </p>
                <p>
                  ￥
                  {{
                  commodity.find(a => a.id == i) &&
                  commodity.find(a => a.id == i).price
                  }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fome-foor",

  // 动态获取数据
  props: {
    commodity: Array,
    floorList: Array
  },

  methods: {
    asdsda(num) {
      console.log(num);
      switch (num) {
        case 9:
          "home-floors-f";
          break;
        case 5:
          "home-bags";
          break;
        case 8:
          break;
        default:
          //3
          break;
      }
    }
    // bbbb() {
    //   const asd = this.$refs.reference;
    //   if ((asd.innertext = "")) {
    //     console.log("无数据");
    //   }
    // }
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

  > a {
    @include home--header;
  }
  > div {
    width: 100%;
    flex: 1;
    display: flex;
    padding-top: 1.25rem;
    > ul {
      width: 100%;
      flex: 1;
      padding: 0 1.25rem;
      display: flex;
      flex-wrap: nowrap;
      overflow-y: hidden;
      overflow-x: scroll;
      justify-content: space-between;
    }
    ul::-webkit-scrollbar {
      /*隐藏滚动条*/
      display: none;
    }
    li {
      height: 100%;
      width: 9.375rem;
      margin-right: 0.625rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      span {
        box-sizing: border-box;
        border: 0.0625rem solid #f1f1f1;
        img {
          width: 8.75rem;
          height: 8.75rem;
          display: inline-block;
        }
      }

      > div {
        flex: 1;
        width: 9.375rem;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > p {
          padding: 0.125rem 0;
        }
        p:nth-child(1) {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: rgb(39, 39, 39);
          font-weight: 800;
          font-size: 0.875rem;
        }
        p:nth-child(2) {
          font-size: 0.75rem;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p:nth-child(3) {
          font-size: 0.875rem;
          color: rgb(192, 0, 0);
          font-weight: 800;
          margin-bottom: 0.625rem;
        }
      }
    }
  }
}

.home-bags {
  width: 100%;
  display: flex;
  flex-direction: column;

  > a {
    @include home--header;
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      @include border-bottom;
      > span {
        overflow: hidden;
        margin-right: 2.25rem;
        img {
          width: 8.75rem;
          height: 8.75rem;
        }
      }
      > div {
        width: 15.9375rem;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        > p {
          padding: 0.125rem 0;
        }

        > p:nth-child(1) {
          color: #272727;
          font-weight: 800;
          font-size: 0.875rem;
          width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        > p:nth-child(2) {
          font-size: 0.875rem;
        }
        > p:nth-child(3) {
          font-size: 0.875rem;
          color: rgb(177, 0, 0);
          font-weight: 800;
        }
      }
    }
  }
}
</style>
