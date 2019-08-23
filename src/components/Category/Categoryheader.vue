<template>
  <div class="cz-Header">
    <van-popup v-model="show" position="top" :style="{ height: '50%' }">
      <ul class="cz-Header-nav">
        <li v-for="item in czHeadernav" :key="item.id">
          <a>
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </van-popup>
    <van-nav-bar
      title="分类"
      fixed
      @click-left="showPopup"
      @click-right="showSeach"
    >
      <van-icon class="iconmenu icon-left" slot="left" />
      <van-icon class="iconfont icon-fangdajing" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      show: false,

      czHeadernav: [
        {
          id: 1,
          name: '锤子商城',
          icon: 'icon-shangcheng'
        },
        {
          id: 2,
          name: '坚果 Pro 2S',
          icon: 'icon-shoujicellphone57'
        },
        {
          id: 3,
          name: '坚果 R1',
          icon: 'icon-phone'
        },
        {
          id: 4,
          name: '坚果 TNT 工作站',
          icon: 'icon-pc'
        },
        {
          id: 5,
          name: '坚果 3',
          icon: 'icon-shouji'
        },
        {
          id: 6,
          name: '坚果 Pro 2S',
          icon: 'icon-shoujicellphone57'
        },
        {
          id: 7,
          name: '应用',
          icon: 'icon-chuizi'
        },
        {
          id: 8,
          name: '论坛',
          icon: 'icon-shoujicellphone57'
        },
        {
          id: 9,
          name: '服务支持',
          icon: 'icon-fuwu2'
        }
      ]
    }
  },

  props: {
    // czHeadernav: Array,
    headername: String
  },

  methods: {
    showPopup() {
      this.show = true
    },
    showSeach() {
      //跳转搜索页面
      this.$router.replace('/search')
    }
  }
}
</script>
<style lang="scss">
.cz-Header {
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  .van-overlay {
    background-color: rgba(228, 228, 228, 0.575);
  }
  .van-nav-bar__right {
    width: 3.125rem;
    height: 3.125rem;
    right: 0.5rem;
    .iconfont {
      margin-top: 0.4375rem;
      font-size: 2.125rem;
    }
  }

  .van-nav-bar {
    background-color: #1d1d1d;
    color: #eeeeee;
  }
  .van-nav-bar__left {
    left: 0;
    .icon-left {
      width: 3.125rem;
      height: 3.125rem;
      display: inline-block;
      background-position: -50px 347px;
      background-size: cover;
    }
  }
  .van-nav-bar__title {
    font-size: 1.25rem;
    font-weight: 800;
  }
  .van-nav-bar__title,
  .van-icon,
  .van-nav-bar__text {
    color: #eeeeee;
  }
  // 下拉框
  .van-popup {
    background-color: #252525ee;
    transition: 0.5s ease-out;
    margin-top: 45px;
    .cz-Header-nav {
      width: 100%;
      height: 100%;
      > li {
        > a {
          width: 25%;
          height: 83px;
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          border: 0.03125rem solid #868585;
          color: #eeeeee;
          i {
            font-size: 1.875rem;
          }
          span {
            padding-top: 0.6rem;
            font-size: 0.75rem;
            color: #cccccc;
            transform: scale(0.8);
          }
        }
      }
    }
  }
}
</style>
