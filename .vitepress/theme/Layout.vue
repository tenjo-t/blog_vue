<script setup>
import Header from "./components/Header.vue";
import NotFound from "./components/NotFound.vue";
import Home from "./components/Home.vue";
import Page from "./components/Page.vue";
import Footer from "./components/Footer.vue";

import { useData } from "vitepress";

const { page, frontmatter } = useData();
</script>

<template>
  <div class="container">
    <Header />

    <div class="content">
      <template v-if="page.isNotFound">
        <NotFound />
      </template>
      <template v-else-if="frontmatter.layout === 'home'">
        <Home />
      </template>
      <template v-else>
        <Page />
      </template>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 700px;
  padding: 16px;
}

.content {
  padding: 16px 0;
}
</style>
