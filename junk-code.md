顶栏上面的下拉菜单

```html
<el-dropdown class="avatar-container" trigger="click">
    <div class="avatar-wrapper">
    <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
    <i class="el-icon-caret-bottom"/>
    </div>
    <el-dropdown-menu slot="dropdown" class="user-dropdown">
    <router-link class="inlineBlock" to="/">
        <el-dropdown-item>
        Home
        </el-dropdown-item>
    </router-link>
    <el-dropdown-item divided>
        <span style="display:block;" @click="logout">LogOut</span>
    </el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>
```

```js
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
```

```scss
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
```