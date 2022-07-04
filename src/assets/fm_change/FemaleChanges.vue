<template>
  <div class="tl_container">
    <div
      class=""
      id="result2"
      key="q2_chart"
      style="margin: 0 auto; width: 50%; height: 200px"
    >
      <v-chart
        class="chart"
        ref="bar"
        :option="bar_options"
        style="height: 300px"
      />
    </div>
    <transition
      name="fade"
      class="animate__animated animate__bounceIn"
      mode="out-in"
    >
      <div id="axis">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 1080"
        >
          <defs>
            <clipPath id="a" transform="translate(92.44 50.95)">
              <rect class="a" width="1229.4" height="581.58" rx="21.84" />
            </clipPath>
          </defs>
          <g id="固定背景">
            <!-- <g id="区域框" class="cls-2">
            <g class="cls-3">
              <image
                id="区域框_图像"
                data-name="区域框 图像"
                width="1920"
                height="1080"
                xlink:href="../../assets/fm_change/fm_7.png"
              />
            </g>
          </g> -->
            <g id="椭圆_1" data-name="椭圆 1">
              <circle class="cls-4" cx="543" cy="467.62" r="270" />
            </g>
          </g>
          <g id="色块">
            <g id="婴幼儿色块_图像" data-name="婴幼儿色块 图像">
              <image
                id="婴幼儿色块_图像-2"
                data-name="婴幼儿色块 图像"
                width="228"
                height="77"
                transform="translate(284 886)"
                xlink:href="../../assets/fm_change/fm_1.png"
                v-if="this.p === 0"
              />
              <image
                id="婴幼儿色块_图像-2"
                data-name="婴幼儿色块 图像"
                width="228"
                height="77"
                transform="translate(284 886)"
                xlink:href="../../assets/fm_change/fm_1.png"
                v-else
              />
            </g>
            <g id="幼儿色块_图像" data-name="幼儿色块 图像">
              <image
                id="幼儿色块_图像-2"
                data-name="幼儿色块 图像"
                width="229"
                height="77"
                transform="translate(512 886)"
                xlink:href="../../assets/fm_change/fm_2.png"
              />
            </g>
            <g id="青少年色块_图像" data-name="青少年色块 图像">
              <image
                id="青少年色块_图像-2"
                data-name="青少年色块 图像"
                width="228"
                height="77"
                transform="translate(741 886)"
                xlink:href="../../assets/fm_change/fm_3.png"
              />
            </g>
            <g id="青年色块_图像" data-name="青年色块 图像">
              <image
                id="青年色块_图像-2"
                data-name="青年色块 图像"
                width="231"
                height="77"
                transform="translate(969 886)"
                xlink:href="../../assets/fm_change/fm_4.png"
              />
            </g>
            <g id="中年色块_图像" data-name="中年色块 图像">
              <image
                id="中年色块_图像-2"
                data-name="中年色块 图像"
                width="229"
                height="77"
                transform="translate(1197 886)"
                xlink:href="../../assets/fm_change/fm_5.png"
              />
            </g>
            <g id="老年色块_图像" data-name="老年色块 图像">
              <image
                id="老年色块_图像-2"
                data-name="老年色块 图像"
                width="228"
                height="77"
                transform="translate(1426 886)"
                xlink:href="../../assets/fm_change/fm_6.png"
              />
            </g>
          </g>
          <g id="轮播内容">
            <g id="婴幼儿" v-show="this.p === 0">
              <g id="婴幼儿_图像" data-name="婴幼儿 图像">
                <image
                  id="婴幼儿_图像-2"
                  data-name="婴幼儿 图像"
                  width="527"
                  height="630"
                  transform="translate(303 154)"
                  xlink:href="../../assets/fm_change/fm_8.png"
                />
              </g>
              <g
                id="童装_图像"
                data-name="童装 图像"
                class="good"
                :content="this.contents.childcloth"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('childcloth')"
              >
                <image
                  id="童装_图像-2"
                  data-name="童装 图像"
                  width="340"
                  height="336"
                  transform="translate(996 278)"
                  xlink:href="../../assets/fm_change/fm_9.png"
                />
              </g>
            </g>
            <g id="幼儿" v-show="this.p === 1">
              <g
                id="文具_图像"
                data-name="文具 图像"
                class="good"
                :content="this.contents.stationary"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('stationary')"
              >
                <image
                  id="文具_图像-2"
                  data-name="文具 图像"
                  width="363"
                  height="266"
                  transform="translate(960 309)"
                  xlink:href="../../assets/fm_change/fm_10.png"
                />
              </g>
              <g id="少儿_图像" data-name="少儿 图像">
                <image
                  id="少儿_图像-2"
                  data-name="少儿 图像"
                  width="453"
                  height="674"
                  transform="translate(316 134)"
                  xlink:href="../../assets/fm_change/fm_11.png"
                />
              </g>
            </g>
            <g id="青少年" v-show="this.p === 2">
              <g id="青少年_图像" data-name="青少年 图像">
                <image
                  id="青少年_图像-2"
                  data-name="青少年 图像"
                  width="174"
                  height="713"
                  transform="translate(455 134)"
                  xlink:href="../../assets/fm_change/fm_12.png"
                />
              </g>
              <g
                id="布洛芬_图像"
                data-name="布洛芬 图像"
                class="good"
                :content="this.contents.ibuprofen"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('ibuprofen')"
              >
                <image
                  id="布洛芬_图像-2"
                  data-name="布洛芬 图像"
                  width="218"
                  height="251"
                  transform="translate(920 132)"
                  xlink:href="../../assets/fm_change/fm_13.png"
                />
              </g>
              <g
                id="牙刷_图像"
                data-name="牙刷 图像"
                class="good"
                :content="this.contents.toothbrush"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('toothbrush')"
              >
                <image
                  id="牙刷_图像-2"
                  data-name="牙刷 图像"
                  width="151"
                  height="355"
                  transform="translate(1251 283)"
                  xlink:href="../../assets/fm_change/fm_14.png"
                />
              </g>
              <g
                id="洗发水_图像"
                data-name="洗发水 图像"
                class="good"
                :content="this.contents.shampoo"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('shampoo')"
              >
                <image
                  id="洗发水_图像-2"
                  data-name="洗发水 图像"
                  width="236"
                  height="402"
                  transform="translate(1012 440)"
                  xlink:href="../../assets/fm_change/fm_15.png"
                />
              </g>
            </g>
            <g id="青年" v-show="this.p === 3">
              <g id="青年_图像" data-name="青年 图像">
                <image
                  id="青年_图像-2"
                  data-name="青年 图像"
                  width="273"
                  height="723"
                  transform="translate(446 131)"
                  xlink:href="../../assets/fm_change/fm_16.png"
                />
              </g>
              <g
                id="护肤品_图像"
                data-name="护肤品 图像"
                class="good"
                :content="this.contents.skincare"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('skincare')"
              >
                <image
                  id="护肤品_图像-2"
                  data-name="护肤品 图像"
                  width="182"
                  height="234"
                  transform="translate(865 107)"
                  xlink:href="../../assets/fm_change/fm_17.png"
                />
              </g>
              <g
                id="美发工具_图像"
                data-name="美发工具 图像"
                class="good"
                :content="this.contents.hair"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('hair')"
              >
                <image
                  id="美发工具_图像-2"
                  data-name="美发工具 图像"
                  width="326"
                  height="361"
                  transform="translate(842 454)"
                  xlink:href="../../assets/fm_change/fm_18.png"
                />
              </g>
              <g
                id="刮毛刀_图像"
                data-name="刮毛刀 图像"
                class="good"
                :content="this.contents.shaver"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('shaver')"
              >
                <image
                  id="刮毛刀_图像-2"
                  data-name="刮毛刀 图像"
                  width="173"
                  height="295"
                  transform="translate(1291 487)"
                  xlink:href="../../assets/fm_change/fm_19.png"
                />
              </g>
              <g
                id="服装_图像"
                data-name="服装 图像"
                class="good"
                :content="this.contents.clothes"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('clothes')"
              >
                <image
                  id="服装_图像-2"
                  data-name="服装 图像"
                  width="527"
                  height="446"
                  transform="translate(1098 107)"
                  xlink:href="../../assets/fm_change/fm_20.png"
                />
              </g>
            </g>
            <g id="中年" v-show="this.p === 4">
              <g id="中年_图像" data-name="中年 图像">
                <image
                  id="中年_图像-2"
                  data-name="中年 图像"
                  width="703"
                  height="523"
                  transform="translate(154 165)"
                  xlink:href="../../assets/fm_change/fm_21.png"
                />
              </g>
              <g
                id="护腰_图像"
                data-name="护腰 图像"
                class="good"
                :content="this.contents.waist"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('waist')"
              >
                <image
                  id="护腰_图像-2"
                  data-name="护腰 图像"
                  width="427"
                  height="325"
                  transform="translate(979 284)"
                  xlink:href="../../assets/fm_change/fm_22.png"
                />
              </g>
            </g>
            <g id="老年" v-show="this.p === 5">
              <g id="老年_图像" data-name="老年 图像">
                <image
                  id="老年_图像-2"
                  data-name="老年 图像"
                  width="386"
                  height="716"
                  transform="translate(341 133)"
                  xlink:href="../../assets/fm_change/fm_23.png"
                />
              </g>
              <g
                id="牛奶_图像"
                data-name="牛奶 图像"
                class="good"
                :content="this.contents.powder"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('powder')"
              >
                <image
                  id="牛奶_图像-2"
                  data-name="牛奶 图像"
                  width="248"
                  height="345"
                  transform="translate(909 127)"
                  xlink:href="../../assets/fm_change/fm_24.png"
                />
              </g>
              <g
                id="钙片_图像"
                data-name="钙片 图像"
                class="good"
                :content="this.contents.calcium"
                v-tippy="{ followCursor: true }"
                @click="refreshBar('calcium')"
              >
                <image
                  id="钙片_图像-2"
                  data-name="钙片 图像"
                  width="341"
                  height="409"
                  transform="translate(1148 398)"
                  xlink:href="../../assets/fm_change/fm_25.png"
                />
              </g>
            </g>
          </g>
          <g id="箭头切换">
            <g
              id="白色栏01婴幼儿_图像"
              data-name="白色栏01婴幼儿 图像"
              @click="change(0)"
              class="axis"
            >
              <image
                id="白色栏01婴幼儿_图像-2"
                data-name="白色栏01婴幼儿 图像"
                width="228"
                height="77"
                transform="translate(284 886)"
                xlink:href="../../assets/fm_change/fm_26.png"
                v-if="this.p !== 0"
              />
              <image
                id="婴幼儿色块_图像-2"
                data-name="婴幼儿色块 图像"
                width="228"
                height="77"
                transform="translate(284 886)"
                xlink:href="../../assets/fm_change/fm_1.png"
                v-else
              />
            </g>
            <g
              id="白色栏02幼儿_图像"
              data-name="白色栏02幼儿 图像"
              @click="change(1)"
              class="axis"
            >
              <image
                id="白色栏02幼儿_图像-2"
                data-name="白色栏02幼儿 图像"
                width="229"
                height="77"
                transform="translate(512 886)"
                xlink:href="../../assets/fm_change/fm_27.png"
                v-if="this.p !== 1"
              />
              <image
                id="幼儿色块_图像-2"
                data-name="幼儿色块 图像"
                width="229"
                height="77"
                transform="translate(512 886)"
                xlink:href="../../assets/fm_change/fm_2.png"
                v-else
              />
            </g>
            <g
              id="白色栏03青少年_图像"
              data-name="白色栏03青少年 图像"
              @click="change(2)"
              class="axis"
            >
              <image
                id="白色栏03青少年_图像-2"
                data-name="白色栏03青少年 图像"
                width="228"
                height="77"
                transform="translate(741 886)"
                xlink:href="../../assets/fm_change/fm_28.png"
                v-if="this.p !== 2"
              />
              <image
                id="青少年色块_图像-2"
                data-name="青少年色块 图像"
                width="228"
                height="77"
                transform="translate(741 886)"
                xlink:href="../../assets/fm_change/fm_3.png"
                v-else
              />
            </g>
            <g
              id="白色栏04青年_图像"
              data-name="白色栏04青年 图像"
              @click="change(3)"
              class="axis"
            >
              <image
                id="白色栏04青年_图像-2"
                data-name="白色栏04青年 图像"
                width="228"
                height="77"
                transform="translate(969 886)"
                xlink:href="../../assets/fm_change/fm_29.png"
                v-if="this.p !== 3"
              />
              <image
                id="青年色块_图像-2"
                data-name="青年色块 图像"
                width="231"
                height="77"
                transform="translate(969 886)"
                xlink:href="../../assets/fm_change/fm_4.png"
                v-else
              />
            </g>
            <g
              id="白色栏05中年_图像"
              data-name="白色栏05中年 图像"
              @click="change(4)"
              class="axis"
            >
              <image
                id="白色栏05中年_图像-2"
                data-name="白色栏05中年 图像"
                width="229"
                height="77"
                transform="translate(1197 886)"
                xlink:href="../../assets/fm_change/fm_30.png"
                v-if="this.p !== 4"
              />
              <image
                id="中年色块_图像-2"
                data-name="中年色块 图像"
                width="229"
                height="77"
                transform="translate(1197 886)"
                xlink:href="../../assets/fm_change/fm_5.png"
                v-else
              />
            </g>
            <g
              id="白色栏06老年_图像"
              data-name="白色栏06老年 图像"
              @click="change(5)"
              class="axis"
            >
              <image
                id="白色栏06老年_图像-2"
                data-name="白色栏06老年 图像"
                width="228"
                height="77"
                transform="translate(1426 886)"
                xlink:href="../../assets/fm_change/fm_31.png"
                v-if="this.p !== 5"
              />
              <image
                id="老年色块_图像-2"
                data-name="老年色块 图像"
                width="228"
                height="77"
                transform="translate(1426 886)"
                xlink:href="../../assets/fm_change/fm_6.png"
                v-else
              />
            </g>
            <g
              id="箭头右_图像"
              data-name="箭头右 图像"
              @click="add()"
              class="axis"
            >
              <image
                id="箭头右_图像-2"
                data-name="箭头右 图像"
                width="106"
                height="49"
                transform="translate(1688 897)"
                xlink:href="../../assets/fm_change/fm_32.png"
              />
            </g>
            <g
              id="箭头左_图像"
              data-name="箭头左 图像"
              @click="sub()"
              class="axis"
            >
              <image
                id="箭头左_图像-2"
                data-name="箭头左 图像"
                width="106"
                height="49"
                transform="translate(144 902)"
                xlink:href="../../assets/fm_change/fm_33.png"
              />
            </g>
          </g>
        </svg>
      </div>
    </transition>
  </div>
</template>
<script>
import VChart from "vue-echarts";

export default {
  name: "FemaleChanges",
  components: {
    VChart,
  },
  data() {
    return {
      tips: {
        waist: {
          name: "护腰",
          value: "1.4",
          price_m: 139.72,
          price_f: 171.88,
        },
        clothes: {
          name: "服装",
          value: "1.4",
          price_m: 122.91,
          price_f: 189.33,
        },
        powder: {
          name: "老年奶粉",
          value: "1.4",
          price_m: 158.74,
          price_f: 252.6,
        },
        calcium: {
          name: "老年钙片",
          value: "1.4",
          price_m: 123.34,
          price_f: 130.28,
        },
        shaver: {
          name: "剃须刀",
          value: "1.4",
          price_m: 137.97,
          price_f: 254.23,
        },
        hair: { name: "美发", value: "1.4", price_m: 126.6, price_f: 175.53 },
        ibuprofen: {
          name: "布洛芬",
          value: "1.4",
          price_m: 62.71,
          price_f: 100.21,
        },
        toothbrush: {
          name: "牙刷",
          value: "1.4",
          price_m: 92.68,
          price_f: 102.46,
        },
        shampoo: {
          name: "洗发水",
          value: "1.4",
          price_m: 78.82,
          price_f: 103.2,
        },
        stationary: {
          name: "文具",
          value: "1.4",
          price_m: 59.81,
          price_f: 62.56,
        },
        childcloth: {
          name: "童装",
          value: "1.4",
          price_m: 139.72,
          price_f: 171.88,
        },
        skincare: {
          name: "护肤品",
          value: "1.4",
          price_m: 236.76,
          price_f: 492.51,
        },
      },
      contents: {},
      p: 0,
      bar_options: {
        title: {
          text: "Test",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        yAxis: {
          type: "category",
          boundaryGap: true,
          data: ["男", "女"],
        },
        xAxis: {
          type: "value",
        },
        series: [
          {
            barWidth: 50,
            barGap: "10%",
            barCategoryGap: "0%",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "#b7c3e5",
                },
              },
              {
                value: 200,
                itemStyle: {
                  color: "#ed256d",
                },
              },
            ],
            type: "bar",
          },
        ],
      },
    };
  },
  created() {
    this.refreshBar("childcloth");
    let keys = Object.keys(this.tips);
    keys.forEach((key) => {
      this.contents[key] = this.getContent(
        this.tips[key].name,
        this.tips[key].price_m,
        this.tips[key].price_f
      );
    });
    // console.log(this.contents);
  },
  methods: {
    refreshBar: function (key) {
      let info = this.tips[key];
      this.bar_options.series[0].data[0].value = info.price_m;
      this.bar_options.series[0].data[1].value = info.price_f;
      let name = info.name;
      this.bar_options.title.text = `搜索"${name}"返回的商品均价`;
      this.bar_options.yAxis.data = [`"${name} 男"`, `"${name} 女"`];
    },
    getContent: function (name, price_m, price_f) {
      // this.bar_options.series[0].data[0].value = price_m;
      // this.bar_options.series[0].data[1].value = price_f;
      // console.log(this.bar_options);
      const content = `<div style="width:200px">
      <p>商品名称：${name}</p>
      <p>搜索词返回的商品均价:<br/>
        "${name} 男": <span>${price_m}</span>
        <br/>
        "${name} 女": <span>${price_f}</span>
        </p>
        </div>`;
      return content;
    },
    add: function () {
      this.p = (this.p + 1) % 6;
      console.log(this.p);
    },
    sub: function () {
      // this.p = (this.p - 1) % 6;
      if (this.p === 0) this.p = 5;
      else this.p = this.p - 1;
      console.log(this.p);
    },
    change: function (key) {
      this.p = key;
    },
  },
};
</script>
<style>
.a {
  fill: none;
  isolation: isolate;
}
.b {
  clip-path: url(#a);
}
.c {
  isolation: isolate;
}
.d {
  fill: #d05a6e;
}
.tl_container {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  /* min-width: 100%; */
}
.axis:hover {
  transform: translate(0px, -10px);
  transition-delay: 0s !important;
  transition-duration: 0.3s !important;
  cursor: pointer;
}
.good:hover {
  /* box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); */
  transform: translate(0px, -10px);
  transition-delay: 0s !important;
  transition-duration: 0.3s !important;
  cursor: pointer;
}
.tl_container .good {
  /* 相对定位 */
  position: relative;
  width: 15rem;
  height: 15rem;
  background-color: white;
  margin: 30px;
  border-radius: 10px;
  /* 阴影 */
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  /* 溢出隐藏 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* 背景模糊 */
  backdrop-filter: blur(10px);
}
span {
  color: rgb(246, 203, 203);
  font-weight: bolder;
}
#axis {
  width: 70%;
  margin: 0 auto;
}
</style>
