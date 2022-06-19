<template>
  <div>
    <b-container>
      <div
        style="width: 100%"
        class="flourish-embed flourish-hierarchy"
        data-src="visualisation/10390634"
      ></div>
    </b-container>
    <Jumbotron :img="title_pic_path[0]" title=" " subtitle=" "> </Jumbotron>
    <Jumbotron :img="title_pic_path[1]" title=" " subtitle=" "> </Jumbotron>
    <Jumbotron :img="title_pic_path[2]" title=" " subtitle=" "> </Jumbotron>
    <Jumbotron :img="title_pic_path[3]" title=" " subtitle=" "> </Jumbotron>
  </div>
</template>

<script>
// import HelloWorldVue from "@/components/HelloWorld.vue";
import Jumbotron from "../components/MyJumbotron.vue";
export default {
  name: "CommPage",
  components: {
    Jumbotron,
  },
  data() {
    return {
      title_pic_path: [
        require("@/assets/title_1.png"),
        require("@/assets/title_2.png"),
        require("@/assets/title_3.png"),
        require("@/assets/title_4.png"),
      ],
    };
  },
};
</script>
<style scoped>
.bg_container {
  margin-bottom: 50vh;
}
iframe {
  height: 80vh;
  width: 100vw;
}
</style>
