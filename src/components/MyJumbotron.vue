<template>
  <div
    class="bg_container text-white shadow"
    :style="{ backgroundImage: 'url(' + backgroundImg + ')' }"
  >
    <div class="bg_card">
      <p
        class="text-center display-1 font-weight-bold"
        style="
          font-weight: 500;
          font-size: 5rem;
          text-shadow: black 0.05em 0.05em 0.2em;
        "
      >
        {{ title }}
      </p>
      <p
        class="text-center display-3 font-weight-bold"
        style="
          font-weight: 500;
          font-size: 3rem;
          text-shadow: black 0.05em 0.05em 0.2em;
        "
      >
        {{ subtitle }}
      </p>
    </div>
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
.bg_card {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
}
.bg_container {
  width: 100vw;
  height: 125vh;
  background-attachment: fixed;
  background-position: top center;
  background-size: cover;
  /* min-width: 100%; */
  position: relative;
  min-height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg_container p {
  /* position: absolute; */
}
</style>
