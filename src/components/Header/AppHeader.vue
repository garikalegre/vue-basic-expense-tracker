<template>
  <v-app-bar
    absolute
    dark
    color="primary"
    height="60"
    elevation="0"
    class="main-app-bar"
  >
    <v-toolbar-title>Expense Tracker</v-toolbar-title>
    <v-spacer></v-spacer>
    <ul>
      <li :class="{ active: isRouteActive('main') }" class="cursor-pointer">
        <router-link class="link" :to="{ name: 'main' }" tag="div">
          Chart
        </router-link>
      </li>
      <li
        :class="{ active: isRouteActive('add-expense') }"
        class="cursor-pointer"
      >
        <router-link class="link" :to="{ name: 'add-expense' }" tag="div">
          Add Expense
        </router-link>
      </li>
    </ul>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    isRouteActive(routeName) {
      return this.$route.matched.some(record => record.name === routeName);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  height: 60px;
  li {
    position: relative;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    &.active {
      border-bottom: 3px solid white;
      font-weight: bold;
    }
    &.active:before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
    }
    .link {
      color: #fff;
    }
  }
}
</style>
