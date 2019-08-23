<template>
  <div class="home-foor">
    <div v-for="(item, index) in floorList" :key="index">
      <div :class="asdsda(index)">
        <!-- home-floors-f -->
        <a href="###">
          <span>{{ item.floorName }}</span>
          <i class="iconfont icon-youjian"></i>
        </a>
        <div>
          <ul>
            <!-- :to="{name:'item',params:{itemId:commodity.find(a => a.id == i) &&commodity.find(a => a.id == i).id}}" -->
            <li v-for="i in item.dataList" :key="i">
              <router-link :to="'item/'+i">
                <span>
                  <img
                    :src="
                      commodity.find(a => a.id == i) &&
                        commodity.find(a => a.id == i).shop_info.ali_image
                    "
                    alt
                  />
                </span>
                <div>
                  <p>
                    {{
                    commodity.find(a => a.id == i) &&
                    commodity.find(a => a.id == i).product_info.product_name
                    }}
                  </p>
                  <p>
                    {{
                    commodity.find(a => a.id == i) &&
                    commodity.find(a => a.id == i).spu.shop_info
                    .spu_mobile_sub_title
                    }}
                  </p>
                  <p>
                    <!-- 使用过滤器，进行判断，当spec_v2的对象中的属性spec_id为1时，则返回该对对象 -->
                    <!-- <span v-for="(colorc, index) in ((commodity.find(a => a.id == i) &&commodity.find(a => a.id == i).spu.shop_info) | setcolor).spec_values" :key="index"> -->
                    <span
                      v-for="(colorc, index) in commodity.find(
                        a => a.id == i
                      ) &&
                        commodity.find(a => a.id == i).spu.shop_info.spec_v2[0]
                          .spec_values"
                      :key="index"
                    >
                      <img :src="colorc.image" />
                    </span>
                  </p>
                  <p>
                    ￥
                    {{
                    (commodity.find(a => a.id == i) &&
                    commodity.find(a => a.id == i).price) | numFilter
                    }}
                  </p>
                </div>
              </router-link>
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

  // 过滤器
  filters: {
    numFilter(value) {
      return parseFloat(value).toFixed(2);
    },
    setcolor(item) {
      console.log(item);
      // if (item.spec_id == 1) {
      //   return item
      // }
    }
  },

  methods: {
    asdsda(num) {
      let a = String;
      switch (num) {
        case 0:
          a = "home-floors-f";
          break;
        case 1:
          a = "home-bags";
          break;
        case 2:
          a = "home-parets";
          break;
        default:
          //3
          a = "home-mobler";
          break;
      }
      return a;
    }
    // aa() {
    //   let aee = []
    //   console.log(floorList)
    //   floorList.forEach(element => {
    //     aee = element.spu.shop_info.spec_v2.map(function(item) {
    //       if (item.spec_id == 1) {
    //         return item
    //       }
    //     }).spec_values
    //   })
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
  ul::-webkit-scrollbar {
    /*隐藏滚动条*/
    display: none;
  }
  .color-switch {
    display: flex;
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
      > a {
        span {
          box-sizing: border-box;
          img {
            width: 8.75rem;
            height: 8.75rem;
            display: inline-block;
            border: 0.0625rem solid #f1f1f1;
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
            height: 0.9375rem;
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
            display: none;
          }
          p:nth-child(4) {
            font-size: 0.875rem;
            color: rgb(192, 0, 0);
            font-weight: 800;
            margin-bottom: 0.625rem;
          }
        }
      }
    }
  }
}

.home-bags {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  > a {
    @include home--header;
  }
  ul {
    width: 100%;
    li {
      > a {
        width: 100%;
        display: flex;
        align-items: center;
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
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          > p {
            display: inline-block;
            padding: 0.125rem 0;
            height: 1rem;
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
            display: flex;
            padding-right: 11rem;
            justify-content: flex-start;
            align-items: center;
            > span {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 0.375rem;
              height: 0.625rem;
              width: 0.625rem;
              border-radius: 50%;
              border: #979797 0.0625rem solid;
              > img {
                display: inline-block;
                height: 0.5rem;
                width: 0.5rem;
                border-radius: 50%;
              }
            }
          }
          > p:nth-child(4) {
            font-size: 0.875rem;
            color: rgb(177, 0, 0);
            font-weight: 800;
          }
        }
      }
    }
  }
}

.home-parets {
  width: 100%;
  flex-direction: column;
  margin-bottom: 0.5rem;
  display: flex;
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
      margin: 0 1.0625rem;
      display: flex;
      flex-wrap: wrap;
      overflow-y: scroll;
      overflow-x: hidden;
      justify-content: space-between;
    }
    ul::-webkit-scrollbar {
      /*隐藏滚动条*/
      display: none;
    }
    li {
      > a {
        height: 17.5rem;
        width: 11.875rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        span {
          box-sizing: border-box;
          border: 0.0625rem solid #f1f1f1;
          img {
            width: 11rem;
            height: 11rem;
            display: inline-block;
          }
        }

        > div {
          flex: 1;
          width: 100%;
          margin: 0.6rem 0;
          padding: 0 0.625rem;
          box-sizing: border-box;
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
            font-size: 0.5rem;
            // transform: scale(0.8);
            width: 100%;
            left: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-child(3) {
            display: none;
          }
          p:nth-child(4) {
            font-size: 0.875rem;
            color: rgb(192, 0, 0);
            font-weight: 800;
            margin-bottom: 0.625rem;
          }
        }
      }
    }
  }
}

.home-mobler {
  width: 100%;
  flex-direction: column;
  margin-bottom: 0.5rem;
  display: flex;
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
      margin: 0 1.0625rem;
      display: flex;
      flex-wrap: wrap;
      overflow-y: scroll;
      overflow-x: hidden;
      justify-content: space-between;
    }
    ul::-webkit-scrollbar {
      /*隐藏滚动条*/
      display: none;
    }
    li {
      > a {
        height: 17.5rem;
        width: 11.875rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        span {
          box-sizing: border-box;
          border: 0.0625rem solid #f1f1f1;
          img {
            width: 11rem;
            height: 11rem;
            display: inline-block;
          }
        }

        > div {
          flex: 1;
          width: 100%;
          margin: 0.6rem 0;
          padding: 0 0.625rem;
          box-sizing: border-box;
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
            font-size: 0.5rem;
            // transform: scale(0.8);
            width: 100%;
            left: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-child(3) {
            display: none;
          }
          p:nth-child(4) {
            font-size: 0.875rem;
            color: rgb(192, 0, 0);
            font-weight: 800;
            margin-bottom: 0.625rem;
          }
        }
      }
    }
  }
}
</style>
