<template>
  <div
    class="bg_container text-white shadow"
    :style="{ backgroundImage: 'url(' + backgroundImg + ')' }"
  >
    <p
      class="text-center display-1 font-weight-bold"
      style="top: 20%; font-weight: 500; text-shadow: black 0.1em 0.1em 0.2em"
    >
      {{ title }}
    </p>
    <p
      class="text-center display-1 font-weight-bold"
      style="
        bottom: 25%;
        font-weight: 500;
        text-shadow: black 0.1em 0.1em 0.2em;
      "
    >
      {{ subtitle }}
    </p>
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
  height: 125vh;
  background-attachment: fixed;
  background-position: top center;
  background-size: cover;
  /* min-width: 100%; */
  position: relative;
  min-height: 70%;
}
.bg_container p {
  position: absolute;
}
</style>
