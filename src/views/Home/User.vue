<template>
  <div class="page-user">
    <div class="header">
      <div class="title">个人中心</div>
    </div>

    <div class="page-for-center">
      <div class="common-box">
        <router-link to="/Login">
          <div class="avatar">
            <img
              src="//static.smartisanos.cn/account/asset/img/default-user-avatar.png"
              alt
            />
          </div>
          <span>登录/注册</span>
          <span class="iconfont icon-youjian"></span>
        </router-link>
      </div>
      <ul class="list-box-ul">
        <li class="list-box-li" v-for="(tab, index) in tabs" :key="index">
          <router-link :to="tab.to">
            <i class="iconfont" :class="tab.icon"></i>
            <span>{{ tab.name }}</span>
          </router-link>
        </li>
      </ul>
      <ul class="box-radius">
        <li v-for="(list, index) in addlists" :key="index">
          <router-link to="list.to">
            <span>{{ list.name }}</span>
            <span class="iconfont icon-youjian"></span>
          </router-link>
        </li>
      </ul>
      <ul class="box-radius">
        <li v-for="(list, index) in problemlists" :key="index">
          <router-link to="list.to">
            <span>{{ list.name }}</span>
            <span class="iconfont icon-youjian"></span>
          </router-link>
        </li>
      </ul>
      <ul class="box-radius">
        <li v-for="(list, index) in promiselists" :key="index">
          <router-link to="list.to">
            <span>{{ list.name }}</span>
            <span class="iconfont icon-youjian"></span>
          </router-link>
        </li>
      </ul>
      <!--中间部分--->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: '全部订单', icon: 'icon-order', to: '/' },
        { name: '待付款', icon: 'icon-daifukuan', to: '/' },
        { name: '待收费', icon: 'icon-quhuo', to: '/' },
        { name: '售后', icon: 'icon-shouhou', to: '/' }
      ],
      addlists: [
        { name: '地址管理', to: '/' },
        { name: '我的优惠券', to: '/' },
        { name: '优先购买码', to: '/' },
        { name: '提货兑换卡', to: '/' }
      ],
      problemlists: [
        { name: '常见问题', to: '/' },
        { name: '服务支持', to: '/' }
      ],
      promiselists: [
        { name: '意外碎屏保修服务', to: '/' },
        { name: '延长保修服务', to: '/' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/common/mixins.scss';
.page-user {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.page-user .header {
  background: #1d1d1d;
  height: 50px;

  .title {
    color: #fff;
    font-size: 18px;
    line-height: 20px;
    padding: 16px 0 0;
    text-align: center;
    // position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.page-user .page-for-center {
  padding: 7px 6px;
  background-color: #e5e5e5;
  flex: 1;
  overflow-y: auto;
  .common-box {
    @include border-bottom;
    position: relative;
    height: 6rem;
    line-height: 6rem;
    padding-left: 6rem;
    // padding-right: 1.2rem;
    font-size: 1rem;
    color: #333;
    border-radius: 0.4rem 0.4rem 0 0;
    background-color: #fff;
    // display:flex;
    // justify-content:space-between;
    .avatar {
      position: absolute;
      left: 0.9rem;
      top: 1rem;
      width: 2.66rem;
      img {
        width: 3.66rem;
        height: 3.66rem;
        border-radius: 50%;
      }
    }
    .iconfont {
      float: right;
      padding-right: 0.8rem;
    }
  }
  .list-box-ul {
    position: relative;
    overflow: hidden;
    margin-bottom: 0.7rem;
    background: #fff;
    border-radius: 0 0 0.4rem 0.4rem;
    .list-box-li {
      float: left;
      width: 25%;
      height: 4rem;
      padding-top: 2rem;
      text-align: center;
      a {
        padding: 2rem 0 0.5rem;
        .iconfont {
          font-size: 30px;
        }
      }
      span {
        display: block;
      }
    }
  }
  .box-radius {
    position: relative;
    overflow: hidden;
    border-radius: 0.4rem;
    background: #fff;
    margin-top: 0.7rem;
    list-style: none;
    li {
      height: 4rem;
      line-height: 3rem;
      span:first-child {
        float: left;
        padding-left: 0.8rem;
      }
      span:nth-child(2) {
        float: right;
        padding-right: 0.8rem;
      }
    }
  }
}
</style>
