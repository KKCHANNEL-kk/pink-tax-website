<template>
  <div
    class="bg_container text-white shadow"
    :style="{ backgroundImage: 'url(' + backgroundImg + ')' }"
  >
    <div class="bg_card">
      <p class="text-center" style="line-height: 5rem" v-html="t">
        <!-- {{ title }} -->
      </p>
      <p class="text-center" style="line-height: 4rem" v-html="st">
        <!-- {{ subtitle }} -->
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
      t:
        "<span class='title'>" +
        this.title.replace(/\\n/g, "<br/>") +
        "</span>",
      st:
        "<span class='subtitle'>" +
        this.subtitle.replace(/\\n/g, "<br/>") +
        "</span>",
    };
  },
  created() {
    console.log(this.subtitle.replace(/\\n/g, "<br>"));
  },
};
</script>

<style>
.bg_card {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
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
.bg_card p {
  /* padding: 5%; */
  padding-left: 1rem;
  padding-right: 1rem;
}
.bg_card p span {
  color: white;
  font-weight: 400;

  text-shadow: black 0.05em 0.05em 0.2em;

  white-space: pre-wrap;
}
.title {
  font-size: 4rem;
  /* padding-bottom: 20%; */
}
.subtitle {
  font-size: 3rem;
  /* padding-top: 20%; */
}
</style>
