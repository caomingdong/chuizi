<template>
  <div class="page-item-list">
    <itemHeader :itemHeaderLists="itemLists && itemLists.name"></itemHeader>
    <!-- 按钮 -->
    <div class="operation-btn">
      <div
        v-for="(item, index) in ['商品','详情','参数','推荐']"
        :key="index"
        @click="jump(index)"
        :style="{background: activeStep === index ? '#bfbfbf' : '#f2f2f2',color: activeStep === index ? '#fff' : '#606060'}"
      >{{item}}</div>
    </div>
    <!-- 滚动区域 -->
    <div class="scroll-content" @scroll="onScroll">
      <div class="scroll-item box-one">
        <div class="img-boxone">
          <img :src="itemLists && itemLists.sku_info[0].ali_image" />
        </div>
        <div class="money">
          <span>{{ itemLists &&itemLists.sku_info[0].title }}</span>
          <span>{{ itemLists &&itemLists.sku_info[0].sub_title }}</span>
          <div>
            <span>￥ {{ itemLists &&itemLists.sku_info[0].price }}</span>
            <p>满 99 元包邮</p>
          </div>
        </div>
      </div>
      <div class="scroll-item img-box">
        <div class="box-title">
          <h1>商品详情</h1>
        </div>
        <img :src="itemLists && itemLists.shop_info.tpl_content.base.images.ali_mobile.url[0]" />
      </div>
      <div class="scroll-item img-box skill-box">
        <div class="box-title">
          <h1>技术参数</h1>
        </div>
        <img
          v-if="itemLists && itemLists.shop_info.merchant_id == 1 ? false : true"
          :src="itemLists && itemLists.shop_info.tpl_content.base.images.spec_params_mobile.url[0]"
        />
        <div
          v-if="itemLists && itemLists.shop_info.merchant_id == 1 ? true : false"
          class="skill-span-box"
        >
          <span
            v-for="(item,value) in itemLists && itemLists.shop_info.tpl_content.base.attributes[0].list"
            :key="value"
          >
            <h1>{{item.name}}</h1>
            <p>{{item.value}}</p>
          </span>
        </div>
      </div>
      <div class="scroll-item box-rem">
        <div class="box-title">
          <h1>相关推荐</h1>
        </div>
        <div class="box-rem-box">
          <router-link :to="'/item/'+ item.id" v-for="item in RecommendList" :key="item.id">
            <img :src="item.shop_info.ali_image" />
            <div>
              <h4>{{item.shop_info.sku_mobile_sub_title}}</h4>
              <span>{{item.shop_info.title}}</span>
              <strong>￥ {{item.price}}</strong>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <footerList></footerList>
  </div>
</template>

<script>
import footerList from "./footer/index";
import itemHeader from "./header/index";
export default {
  name: "itemList",
  components: {
    itemHeader,
    footerList
  },
  props: {
    itemLists: Object,
    RecommendList: Array
  },
  data() {
    return {
      activeStep: 0
    };
  },
  methods: {
    // 滚动触发按钮高亮
    onScroll(e) {
      let scrollItems = document.querySelectorAll(".scroll-item");
      for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
        let judge =
          e.target.scrollTop >=
          scrollItems[i].offsetTop - scrollItems[0].offsetTop;
        if (judge) {
          this.activeStep = i;
          break;
        }
      }
    },
    // 点击切换锚点
    jump(index) {
      let target = document.querySelector(".scroll-content");
      let scrollItems = document.querySelectorAll(".scroll-item");
      // 判断滚动条是否滚动到底部
      if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
        this.activeStep = index;
      }
      let total = scrollItems[index].offsetTop - scrollItems[0].offsetTop; // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
      let distance = document.querySelector(".scroll-content").scrollTop; // 滚动条距离滚动区域顶部的距离
      // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
      // 滚动动画实现, 使用setTimeout的递归实现平滑滚动，将距离细分为50小段，10ms滚动一次
      // 计算每一小段的距离
      let step = total / 50;
      if (total > distance) {
        smoothDown(document.querySelector(".scroll-content"));
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp(document.querySelector(".scroll-content"));
      }

      // 参数element为滚动区域
      function smoothDown(element) {
        if (distance < total) {
          distance += step;
          element.scrollTop = distance;
          setTimeout(smoothDown.bind(this, element), 10);
        } else {
          element.scrollTop = total;
        }
      }

      function smoothUp(element) {
        if (distance > total) {
          distance -= step;
          element.scrollTop = distance;
          setTimeout(smoothUp.bind(this, element), 10);
        } else {
          element.scrollTop = total;
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
.page-item-list {
  padding-top: 6.125rem;
  padding-bottom: 2.75rem - 0.5625rem;
  flex-basis: 100%;
  display: flex;
  overflow: hidden;
  .operation-btn {
    width: 100%;
    display: flex;
    position: fixed;
    top: 3.125rem;
    left: 0;
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.12);
    background: #f2f2f2;
    z-index: 999;
    padding: 0.45rem 0.5rem;
    div {
      border-radius: 0.15rem;
      font-size: 0.875rem;
      font-weight: 700;
      flex-basis: 24%;
      padding: 0.4rem 0;
      position: relative;
      text-align: center;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
    }
  }
  .scroll-content {
    height: 33.375rem;
    flex: 1;
    width: 100%;
    overflow-y: auto;
    background: #ccc;
    > div {
      margin-bottom: 0.5625rem;
    }
    .box-one {
      .img-boxone {
        background: #fff;
        text-align: center;
        img {
          width: 18.75rem;
          height: 18.75rem;
        }
      }
      .money {
        background: #fff;
        padding: 0.8rem 0.9rem;
        > span:nth-child(1) {
          display: block;
          font-size: 1rem;
          margin-bottom: 0.4rem;
          color: #333;
          font-weight: 600;
        }
        > span:nth-child(2) {
          font-size: 0.6rem;
          color: #7f7f7f;
          margin-bottom: 0.4rem;
          line-height: 1.5;
          display: block;
          overflow: hidden;
        }
        div {
          position: relative;
          span {
            font-size: 1rem;
            font-weight: 800;
            color: #d44d44;
          }
          p {
            color: #7f7f7f;
            font-size: 0.6rem;
            font-weight: 400;
            position: absolute;
            right: 0.9rem;
            bottom: 0.25rem;
          }
        }
      }
    }
    .img-box {
      background: #fff;
      img {
        width: 100%;
      }
    }
    .skill-box {
      .skill-span-box {
        padding: 1rem 1rem 2rem;
        span {
          display: flex;
          justify-content: space-between;
          padding: 0.9rem 1rem;
          @include border-bottom;
          h1 {
            color: #333;
            font-weight: 700;
            transform: scale(0.83333);
            font-size: 0.75rem;
            transform-origin: 100% 50%;
          }
          p {
            font-size: 0.75rem;
            transform: scale(0.83333);
            transform-origin: 100% 50%;
          }
        }
        span:nth-child(odd) {
          background: #fafafa;
        }
      }
    }
    .box-title {
      @include border-bottom;
      margin: 0;
      padding: 0 0.78125rem;
      h1 {
        height: 40px;
        line-height: 40px;
        font-size: 1.125rem;
        font-weight: 700;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &::before {
        height: 2px;
        transform: scale(1);
      }
    }
    .box-rem {
      background: #fff;
      .box-rem-box {
        padding: 0.9rem 0.75rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        > a {
          width: 10.67675rem;
          box-sizing: border-box;
          div {
            display: block;
            padding: 0.4rem 0.6rem 0.9rem;
            h4 {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 0.75rem;
              color: #333;
              font-weight: 600;
            }
            span {
              margin-top: 0.3rem;
              margin-bottom: 0.3125rem;
              display: block;
              font-size: 0.5rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #7f7f7f;
              transform: scaleY(0.9);
            }
            strong {
              margin-top: 0.3rem;
              color: #d44d44;
              font-weight: 600;
            }
          }
          img {
            width: 10.67675rem;
            height: 10.67675rem;
            border: 1px solid #f0f0f0;
            border-radius: 0.25rem;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
