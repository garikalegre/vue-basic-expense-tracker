<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  },
  data: () => ({})
};
</script>
