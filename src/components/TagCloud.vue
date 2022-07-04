<template>
  <div>
    <svg
      class="tagcloud-all"
      id="tagcloud"
      style="width: 100%; height: 420px"
      @mousemove="listener($event)"
    >
      <a
        :href="tag.href"
        v-for="(tag, index) in tags"
        :key="index"
        @mouseover="refreshBoard(tag)"
      >
        <text
          :x="tag.x"
          :y="tag.y"
          :font-size="20 * (600 / (600 - tag.z))"
          :fill-opacity="(400 + tag.z) / 600"
        >
          {{ tag.text }}
        </text>
      </a>
    </svg>
    <div class="ux_container container">
      <div id="board" class="img-thumbnail">
        <div>{{ board_info.text }}</div>
        <div>{{ board_info.num }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.tagcloud-all {
  position: relative;
  height: 100%;
  min-height: 400px;
  min-width: 400px;
}
.tagcloud-all a {
  position: absolute;
  top: 0px;
  left: 0px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 3px 6px;
}
.tagcloud-all a text {
  color: aqua;
}

.tagcloud-all a text :hover {
  color: #ff0000;
  /* letter-spacing: 2px; */
}
#board {
  height: 200px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
</style>
<script>
export default {
  name: "TagCloud",
  data() {
    return {
      width: 700,
      height: 400,
      RADIUS: 200,
      speedX: Math.PI / 360,
      speedY: Math.PI / 360,
      tags: [],
      board_info: { text: " ", num: " " },
      tags_info: [
        {
          text: "#粉红税#",
          talk: 4039,
          read: 158.7,
          href: "https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%BA%A2%E7%A8%8E%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#抵制粉红税#",
          talk: 5132,
          read: 610,
          href: "https://s.weibo.com/weibo?q=%23%E6%8A%B5%E5%88%B6%E7%B2%89%E7%BA%A2%E7%A8%8E%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#女性该如何拒绝粉红税#",
          talk: 137,
          read: 1087.4,
          href: "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%80%A7%E8%AF%A5%E5%A6%82%E4%BD%95%E6%8B%92%E7%BB%9D%E7%B2%89%E7%BA%A2%E7%A8%8E%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#你会为粉红税买单吗#",
          talk: 4039,
          read: 158.7,
          href: "https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%BA%A2%E7%A8%8E%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#女款总是比男款贵是粉红税吗#",
          talk: 10000,
          read: 231.2,
          href: "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%AC%BE%E6%80%BB%E6%98%AF%E6%AF%94%E7%94%B7%E6%AC%BE%E8%B4%B5%E6%98%AF%E7%B2%89%E7%BA%A2%E7%A8%8E%E5%90%97%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#纽约将取消粉红税#",
          talk: 380,
          read: 109.6,
          href: "https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%B0%86%E5%8F%96%E6%B6%88%E7%B2%89%E7%BA%A2%E7%A8%8E%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#女神节是粉红税吗#",
          talk: 5599,
          read: 166,
          href: "https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%A5%9E%E8%8A%82%E6%98%AF%E7%B2%89%E7%BA%A2%E7%A8%8E%E5%90%97%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#粉红税的坑你掉过吗#",
          talk: 134,
          read: 318.5,
          href: "https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%BA%A2%E7%A8%8E%E7%9A%84%E5%9D%91%E4%BD%A0%E6%8E%89%E8%BF%87%E5%90%97%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#消除粉红税#",
          talk: 1373,
          read: 105.3,
          href: "https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%99%A4%E7%B2%89%E7%BA%A2%E7%A8%8E%23",
          x: 0,
          y: 0,
          z: 0,
        },
        {
          text: "#为什么会出现粉红税#",
          talk: 218,
          read: 184.9,
          href: "https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E5%87%BA%E7%8E%B0%E7%B2%89%E7%BA%A2%E7%A8%8E%23",
          x: 0,
          y: 0,
          z: 0,
        },
      ],
    };
  },
  computed: {
    CX() {
      return this.width / 2;
    },
    CY() {
      return this.height / 2;
    },
  },
  created() {
    //初始化标签位置
    this.width = window.screen.availWidth - 200;
    console.log(this.width);
    const tagsNum = this.tags_info.length;
    console.log(tagsNum);
    this.tags_info.forEach((t, i) => {
      let tag = {};
      tag.text = t.text;
      tag.talk = t.talk;
      tag.read = t.read;
      tag.href = t.href;
      let k = -1 + (2 * (i + 1) - 1) / tagsNum;
      let a = Math.acos(k);
      let b = a * Math.sqrt(tagsNum * Math.PI);
      tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);
      tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
      tag.z = this.RADIUS * Math.cos(a);
      this.tags.push(tag);
      console.log(this.CX, this.CY);
    });
    this.refreshBoard(this.tags[0]);
  },
  mounted() {
    //使球开始旋转
    setInterval(() => {
      this.rotateX(this.speedX);
      this.rotateY(this.speedY);
    }, 17);
  },
  methods: {
    rotateX(angleX) {
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      for (let tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
        var z1 = tag.z * cos + (tag.y - this.CY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(angleY) {
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      for (let tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
        var z1 = tag.z * cos + (tag.x - this.CX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event) {
      //响应鼠标移动
      var x = event.clientX - this.CX;
      var y = event.clientY - this.CY;
      this.speedX =
        x * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, x * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
      this.speedY =
        y * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, y * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
    },
    refreshBoard(tag) {
      this.board_info.text = `${tag.text}`;
      this.board_info.num = `${tag.talk} 讨论 ${tag.read}万阅读`;
    },
  },
};
</script>
