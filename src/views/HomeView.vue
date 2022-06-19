<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SogTagCloud :tags="tags" :options="options" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import SogTagCloud from "sog-tag-cloud";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    // SogTagCloud,
  },
  data() {
    return {
      tags: [
        { name: "#社恐的人第一天上班#" },
        { name: "#当代社恐最想逃离的瞬间#" },
        { name: "#大湾区全体社恐#" },
        { name: "#隐形社恐#" },
        { name: "#社恐的过年绝望瞬间#" },
      ],
      options: {
        width: 600,
        height: 600,
        radius: 200, // 球体半径
        opacity: 300, // 数值越小透明度越高
        fontSize: 600, // 数值越大字体越小[300-600]
      },
    };
  },
};
</script>
