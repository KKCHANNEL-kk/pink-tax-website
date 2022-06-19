<template>
  <div
    class="bg_container text-white shadow"
    :style="{ backgroundImage: 'url(' + backgroundImg + ')' }"
  >
    <h2 class="display-2">{{ title }}</h2>
    <h3 class="display-4">{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "img"],
  data() {
    return {
      backgroundImg: this.img,
    };
  },
};
</script>

<style>
.bg_container {
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-attachment: fixed;
  background-position: top center;
  /* min-width: 100%; */

  min-height: 60%;
}
h2 {
  padding-top: 100px;
}
h3 {
  padding-top: 50px;
  padding-bottom: 100px;
}
</style>
