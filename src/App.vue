<template>
  <v-app class="">
    <v-app-bar app color="red" class="pl-10 pr-10" absolute>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <header class="">
        <v-btn to="/">Home</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn to="/contact">Contact</v-btn>
      </header>

    </v-app-bar>

    <v-main class="">
      <router-view></router-view>
    </v-main>


    <v-footer app color="red" height="50" class="mt-auto " absolute>Footer</v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      message: 'Hello World'
    }
  },
};
</script>
<style scoped>
#app {
  padding: 0
}
</style>