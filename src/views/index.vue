<template>
  <div>
    <!-- <h1 class="text-center display-1">被粉饰的迷局</h1> -->
    <Jumbotron
      :img="title_pic_path[0]"
      :title="this.pinkTitle"
      subtitle="货架上的“粉红税”陷阱"
    >
    </Jumbotron>
    <div></div>
    <div class="content container" style="height: 100%; min-height: 95vh">
      <transition
        name="fade"
        class="animate__animated animate__bounceIn"
        mode="out-in"
      >
        <div v-if="selected_status == 0" key="q1_before">
          <p class="text-center display-6">
            当你需要购买一盒布洛芬止痛片时<br />有以下两种选择（二者功效相当）<br />你的选择是？
          </p>
          <div class="ux_container container" id="question1">
            <div class="selected_card">
              <img
                src="../assets/blf_male.png"
                class="img-thumbnail"
                @click="answer(1, 0)"
              />
            </div>
            <div class="selected_card">
              <img
                src="../assets/blf_female.png"
                class="img-thumbnail"
                @click="answer(1, 1)"
              />
            </div>
          </div>
        </div>
        <div v-else-if="selected_status == 1" key="q1_after">
          <p class="text-center display-6">
            当你得知这两盒药片的价格后<br />你的选择是？
          </p>
          <div class="ux_container container" id="question2">
            <div class="selected_card">
              <img
                src="../assets/blf_male_price.png"
                class="img-thumbnail"
                @click="answer(2, 0)"
              />
            </div>
            <div class="selected_card">
              <img
                src="../assets/blf_female_price.png"
                class="img-thumbnail"
                @click="answer(2, 1)"
              />
            </div>
          </div>
        </div>
        <b-container
          fluid
          id="result1"
          v-else-if="selected_status == 2"
          key="q1_chart"
        >
          <b-row>
            <b-col>
              <h3 class="text-center display-3">
                有<span
                  >{{ ((this.same_a1 / this.sum_a1) * 100).toFixed(2) }}%</span
                >的人和你做出一样的选择
              </h3>
            </b-col>
          </b-row>
          <b-row style="width=100%" fluid>
            <b-col>
              <v-chart
                class="chart"
                ref="diagram"
                :option="piechart_options"
                :theme="chartTheme"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="addition">*商品价格来源于某电商平台</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h3 class="text-center display-3">↓下滑展开正文↓</h3>
            </b-col>
          </b-row>
        </b-container>
      </transition>
    </div>

    <div class="content container">
      <section id="intro">
        <p>
          5月26日，一条关于“粉红税”的科普视频再抖音上收获了24万点赞，ID名为“淦诗琪”的博主在其中提到，“女性一生可能要比男性多花68w元”引发评论区内争议。“粉红税”并非一项”看得见“的税目，其表现形式为：当产品或服务在核心功能表现上完全相同或相似，针对不同性别，制定不同的定价，致使女性在同类商品消费中支出更高。
        </p>
        <p>
          “粉红税”并非一个新兴概念，目前国外已有相关研究与行业法规。纽约消费者事务部2015年发布的一项报告指出，针对女性的同类产品比男性同类产品贵7%，其中女性个护产品比男性贵13%；而早在1996年，美国加利福尼亚州威尔逊州长便出台了《废除性别税法》，目的为了抑制商家在销售核心功能相同，提供时间成本相同的服务时，针对男女性消费者制定不同定价的行为。
        </p>
        <b-container>
          <div
            style="width: 85%"
            class="flourish-embed flourish flourish-hierarchy"
            data-src="visualisation/10522352"
          ></div>
        </b-container>
        <p class="addition">
          注：鼠标点击，查看具有粉红税效应的各类目及详细数据；点击右上角箭头或空白处返回上一级
          <br />数据来源：纽约市消费者事务部
        </p>
        <b-container>
          <div
            style="width: 85%"
            class="flourish-embed flourish flourish-hierarchy"
            data-src="visualisation/10393400"
          ></div>
        </b-container>
        <p>
          反观国内，“粉红税”的概念却鲜为国内大众知晓，我们不禁好奇“粉红税”陷阱是否蔓延在当下的国内市场？价格背后，是谁在操盘“粉红”法则？针对一系列疑问，我们在京东电商平台，针对23种中性商品抓取的20608条商品信息进行数据分析，探寻粉红税的踪迹；此外，我们参与式观察豆瓣小组、抖音评论区，针对抓取的1335条帖子中的30391条评论进行内容分析与文本分析，延伸粉红税概念背后的不同面向。
        </p>
      </section>
    </div>
    <div class="container">
      <h3>从「童装」到「老年奶粉」，“粉红税”贯穿女性一生</h3>
      <time-line></time-line>
    </div>

    <div class="content container">
      <section id="lifejourney">
        <p class="addition">
          我们选取了不同年龄阶段具有代表性的中性商品，分别以“男”“女”字眼进行检索，从电商平台上抓取价格等数据并计算出均价，对比不同年龄段的男女消费者可能花费的金额。<br />
          数据来源：京东
        </p>
        <p>
          据电商平台上抓取的不同商品价格数据反映，从儿童玩具、成人服饰到老年用品，女用商品通常要比男用商品均价要高，且这些商品往往在核心功能上并无差异。此类溢价现象通常表现为，同一品牌同一设计下，粉色商品要比其他颜色的商品贵。甚至有时仅仅将商品名称条目中的“女”，更改成“男”，就产生了不可忽视的价格差。
          2021年年末，大二学生雨婷在某品牌电商旗舰店内下单了一条心仪已久的女款长裤。不久后，她却发现了令人瞠目的事实：该店同时还出售男子尺码的同款长裤，在外观设计与详情描述均相同的情况下，售价却比女款便宜100元。
        </p>
        <p>
          同样的，ID为「注销已」的豆瓣用户在社交媒体上分享个人购物经历，得知安踏旗舰店上某款的运动鞋，女性尺码也要比男性尺码贵20元，随后向客服询问价格差异的缘由，然而只得到“优惠力度不同”的答复。
        </p>
        <p>
          诸如“颜色不同”、“不同商品的优惠套餐不同”，是电商平台客服们的常见话术。面对此类现象，当下女性消费者的维权似乎止步于社交媒体上的控诉，或是选择“绕道而行”。
        </p>
        <p>
          去年冬季，初入职场的映雪走进服装店准备购置保暖衣物，却便被摆放在正门的两个模特身着着的羽绒服价格“劝退”：女款羽绒服329元，男款200元。“成分含量没去看，外观上是一样的。”最后她选择与“粉红税”作无声的斗争，结果是：“冻着吧，多穿几件长袖。”
        </p>
        <p>
          诚然，供需关系或消费弹性会对男性和女性产品价格造成影响，进而产生差距；但“粉红定价”表象背后指向一种基于性别的定价歧视问题。
        </p>
        <p>
          再者，由于大多数消费者对“粉红税”的认知有限，甚至有人认为部分商品的溢价是合理存在的，所以尽管女性在经济上要比男性付出更大代价，多数情况下不会采取进一步的维权行为，愤怒的情绪终究会被平息。作为曾经的“受害者”雨婷表示，将来如果在该店遇到了喜欢的商品，<b>“我还是会买的”</b>。
        </p>
      </section>
    </div>
    <Jumbotron
      :img="title_pic_path[1]"
      title="“粉红”法则 "
      subtitle="谁在幕后操盘？"
    >
    </Jumbotron>
    <div class="content container">
      <section id="deepin">
        <!-- <h2 class="text-center display-3">“粉红”法则，谁在背后操盘？</h2> -->
        <p class="text-left display-6">市场主体</p>
        <p>
          偏爱粉红色、精致香味、精美包装，是消费主义时代下，女性消费者被塑造的刻板印象。当部分针对女性设计的商品被添加了特殊香料或其他成分时，更高的设计制造成本致使售价更高，这无可厚非。然而，在核心功能不变的情况下，粉色产品的定价比同款商品的其他颜色定价更高，这种现象也并不罕见。
        </p>
        <div>
          <div class="" id="result2" key="q2_chart">
            <v-chart
              class="chart"
              ref="diagram"
              style="margin: 0 auto"
              :option="sankey_options"
              :theme="chartTheme"
            />
          </div>
        </div>
        <p>
          相比单纯更换商品颜色，外包装整体的更新换代，似乎为商品提价赋予了更“正当”的提价契机。以芬必得布洛芬咀嚼片为例，作为一种较为大众的止痛片，该药品的外包装盒从先前的男性人像变成女性人像，疼痛点也从先前的头部转移至女子腹部位置。
        </p>
        <p>
          在佛山市某药店店主梁先生看来，新老两款布洛芬咀嚼片在成分、功效上无异，二者的重要成分布洛芬含量均为0.2克/粒。然而，在同一容量前提下，各大电商平台上标示的价格却相距甚远——新款价格却在老款基础上翻了一倍。
        </p>
        <p>
          通过追溯药品从出厂到流入市面的流通过程，不难发现，溢价问题出现在从药品代理商到零售上这一环节上。药房订货购药一般需要通过药品代理商，同为一盒十片的芬必得布洛芬，新旧两款药均在13～16元这一区间内浮动，差别不大。至于最终面向消费者的具体售价，梁先生透露，“不同药房有着不同的定价机制”。
        </p>
        <p>
          像上述雨伞、键盘、布洛芬这类产品，通过在产品功能、外观设计及广告推广方面强调男女消费者的区别，是一种性别差异化的营销策略。社会学学者Elizabeth
          Sweet在其研究中发现，在1975年的Sears百货目录中，儿童玩具对象被明确列为是男孩还是女孩的比例还不到2%；到了1995年，比例扩大到50%左右，随着消费市场的发展壮大，基于性别差异化的营销模式伴也在成人商品市场里逐渐成熟。
        </p>
        <p class="text-left display-6">文化推手</p>
        <div style="max-width: 900px">
          <b-img :src="require('@/assets/douban_text.gif')" fluid></b-img>
        </div>
        <div class="addition">
          *所有语录均摘选自豆瓣「粉红税抵制者联盟」小组
        </div>
        <p>
          粉红税或许是一个深远的文化议题。论坛中深受“粉红税”困扰的消费者，会习惯性把将问题的矛头指向“性别歧视”与社会文化。这样的担忧不无道理。
        </p>
        <p>
          芮塔·菲尔斯基在《现代性的性别》中指出，在现代消费主义的兴起过程中，“性别”是消费需求塑造过程中的重要因素。早在十九世纪后期，消费者就经常以女性的形象出现，当时的广告商总是会通过饱含情欲的商品激发女性的欲望。1883年出版的长篇小说《妇女乐园》这样描述女性购物的场景:
          “无论是穿着绫罗绸缎的上层贵妇，还是穿着普通的中产阶级妇女，或是没戴帽子的姑娘们，她们在挑选蕾丝、皮草、裙子、贴身内衣等物品时激动得面色绯红，像见到情人一样。”,女性的购买欲与情欲联系在一起,女性的消费潜力也在无形中被放大。
        </p>
        <p>
          而法国社会学家布尔迪厄同样认为，文化悄然嵌入在社会评价标准中，以隐秘的方式影响社会行动者，在这一过程中让他们潜移默化地接受一套社会惯例。“粉红税”正是这样一种商品市场与社会文化共谋的结果。营销口号打造精致的女生色系，附着符合社会文化定义的性别符号，女性一旦对这类符号化的商品起心动念，就等于接受了社会设置的规则，甘心为所谓的“女性专属”商品买单。
        </p>
        <p>
          放眼当下，即使“她经济”崛起有实然层面的数据支撑，但同样也是社会文化建构的结果。诸如“‘包’治百病”、“口红是女人的身价”的话语与标签，让女性在不经意间成为消费意识形态的理想对象，也进而为商家设置“粉红税”制造定价空间。
        </p>
        <p class="text-left display-6">制度缺憾</p>
        <p>
          针对商家基于性别的定价策略，部分消费者也在积极寻找对策。如部分KOL会在社交媒体平台上发布“避税清单”，如何机智运用不同关键词，检索出同一款或功能相似但价格更低的商品。如“化妆刷筒”可以用“笔筒”代替，“白T恤”可以置换成“纯棉T恤男”等等，从用途角度进行搜索，尽量避免“小众”“网红”等关键词描述。
        </p>
        <p>
          然而“曲线救国”的办法没有从根本上解决“粉红定价”的歧视性问题——商家们针对女性消费者制定更高的商品定价。女性消费者为何需要付出额外的努力，才能确保本来应有的经济权益不受损害？
        </p>
        <p>
          尽管针对粉红税的讨论与日俱增，但回首国内现有法律法规，类似规范尚属空白地带。
        </p>
        <p>
          2019年12月22日，纽约州长宣布纽约将推进取消粉红税的相关立法，弥补男女在购买相同或类似产品时所产生的差价。经过一年的探索，纽约州的粉红税禁令于次年10月正式实施。
        </p>
        <P>
          这并非是平地一声雷，美国在消除粉红税的道路上已探索已久。早在20世纪30年代，美国在起草消费税体系时就已提出了粉红税的概念；而于1995年，加利福尼亚州通过了《性别税废除法案》，在全国有关禁止性别歧视性定价的法案探索中迈出里程碑式的第一步。
        </P>
        <div class="container" style="width: 80%">
          <law-time-line></law-time-line>
        </div>
        <b-container>
          <div
            style="width: 85%"
            class="flourish-embed flourish-map"
            data-src="visualisation/10525586"
          ></div>
        </b-container>
        <div class="addition">数据来源：网络搜索，westlaw</div>
        <p>
          现如今，少数州和地方立法机构已经采取相关措施，禁止了基于性别的服务定价，但美国依然在禁止粉红税在司法和立法过程中面临诸多挑战。一方面，尽管存在上述出台法律的支持，但因同类商品存在价格差异而与商家对簿公堂的消费者依然少之又少。从法律全文数据库Westlaw检索结果来看，有关性别歧视性定价的案件仅有6例，而除去上诉案件的审理，只有3位消费者就该问题向法院提出诉讼，并皆以败诉告终。
        </p>
        <p>
          “男性和女性能购买面向异性销售的产品，但由于社会条件和社会对于两性期望的不同，使得女性在消费的选择上更加不公平。”2020年7月，舒尔特以克诺普科公司的除汗剂具有性别歧视性的定价方案为由，向法院起诉克诺普科公司。但由于舒尔特所依据的法规并没有涉及商品定价，其本人也没有办法就这些不同产品线的生产、研发和营销相关的成本提出任何失实指控，该案件最终以其败诉收场。在该判决书中，法官留下了他的主张：“通常，我们期望市场能够自我纠正，并依靠消费者自主购买的行为来管理市场。消费者可以选择最理想的替代品以避免那些不满意的商品。”司法将商品定价交由自由市场调解，保障女性消费者的合法权益仍任重道远。
        </p>
        <p>
          另一方面，既有法律所涉及的范围具有极大的局限性。在废除粉红税的法律体系中，商家依然被允许通过延长服务时间、提高服务成本和难度来设计更高的标价，而有关产品的价格歧视并不在法律的约束范围内。同时，国会两院拟议的《粉红税废除法案》几经波折，除了部分成员的阻挠，诸如“辨别何为‘类似产品’”等细节定义也成为阻碍推进立法的绊脚石。直到报道的今天，该法案始终停留在“提出草案”的第一步，在它之后，还有“众议院通过-参议院通过-总统批准-颁布法律”的漫漫长路。
        </p>
      </section>
    </div>

    <div class="content container">
      <section id="end">
        <h2 class="text-center display-3">尾声</h2>
        <p>
          在“粉红税”陷阱依然存在的今天，“她经济”的力量究竟在多大程度得以彰显，仍值得商榷。一方面，女性背负“粉红税”，在无形中增加了生活成本；而另一方面，大量行业调查也通过两性收入对比，显现出女性的收入劣势。LuLulemon在日本制作的一份简报中指出：“在全职工作里，女性工资仅为男性的75%，而在美国用户体验设计师的行业里，女性和男性的工资差为13.7%。”智联招聘发布的《2022年职场妈妈生存状况调查报告》中的最新数据显示，职场妈妈平均薪酬为9315元/月，与职场爸爸12534元/月的薪酬水平相比，职场妈妈收入低25.7%。或许，“她经济”不应只停留在显示购买力与消费数额的表象上，女性在多大程度上拥有扭转不公平对待的强劲议价权，也是“她力量”的体现，而当前这股力量却被无形束缚。
        </p>
        <b-container>
          <div
            style="width: 100%"
            class="flourish-embed flourish flourish-chart"
            data-src="visualisation/10393031"
          ></div>
        </b-container>

        <p>
          此外，“粉红税”陷阱在多大程度上能被规避或是被抑制，仍是未解难题。潜伏于商品货架上的“粉红税目”并非孤立因素导致的单因困局，其背后有着纷繁复杂的成因——公众认知程度、市场主体因素、社会文化语境、政策法规.......凡此种种因素交织共构，造成现下情状。况且，“粉红税”的在不同的学界讨论情景中有不同的定义，我们的报道中只局限于其中较为广泛运用的定义，却无法进一步触及这个议题中的模糊地带：附着商业营销色彩的樱花限定女性酒定价远高于同款经典鸡尾酒，算不算粉红税？天然为女性设计的卫生棉条，又是否指向不合理溢价？这些问题仍然有待讨论。
        </p>
        <p>
          当然，进一步有进一步的欢喜。近年来，性别中立的营销方式越来越得到认可，从产品设计、开发、生产到推广，各个环节都更注重打破传统性别叙事，提倡给予女性更多自主选择权、倡导女性审美多元化。而2021年1月15日推出的《深圳市广告性别平等审视指南》也同样释放了关注两性定价平等的积极信号，成为制度探索路上踏出的勇敢一步。但破除“粉红税”的道路究竟有多漫长，只有当更多人亲身踏上征途方能体会。
        </p>
        <tag-cloud></tag-cloud>
      </section>
    </div>
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import Jumbotron from "@/components/MyJumbotron.vue";
import TimeLine from "@/components/icons/TimeLine";
import LawTimeLine from "@/components/icons/LawTimeLine.vue";

import * as echarts from "echarts";
import themeVintage from "@/assets/js/echartsTheme/vintage.json";
echarts.registerTheme("vintage", themeVintage);

// import * as floatingjs from "./floating.js";
import TagCloud from "@/components/TagCloud.vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
export default {
  name: "IndexPage",
  components: {
    VChart,
    Jumbotron,
    TimeLine,
    LawTimeLine,
    TagCloud,
  },
  data() {
    return {
      selected_status: 0,
      piechart_data: [82, 105, 1, 80],
      same_a1: 0,
      sum_a1: 0,
      ans: 0,
      piechart_options: {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "男性包装->男性包装",
            "男性包装->女性包装",
            "女性包装->男性包装",
            "女性包装->女性包装",
          ],
        },
        series: [
          {
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            data: [1, 1, 1, 1],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      sankey_options: {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}",
        },
        title: {
          show: true,
          text: "商品价格对消费者选择的影响",
          subtext:
            "从回收的407份问卷发现，在得知原先选择的商品款式比同类商品其他颜色（如黑色、灰色等）价格更高后，消费者的选择变化",
        },
        series: {
          type: "sankey",
          layout: "none",
          right: "15%",
          top: "15%",
          emphasis: {
            focus: "adjacency",
          },
          data: [
            {
              name: "键盘--粉色",
              itemStyle: {
                color: "rgba(242, 167, 171,1)",
              },
            },
            {
              name: "粉色--75元",
              itemStyle: {
                color: "rgba(242, 167, 171,0.7)",
              },
            },
            {
              name: "白色--60元",
              itemStyle: {
                color: "rgba(230, 230, 230,0.7)",
              },
            },
            {
              name: "黑色--60元",
              itemStyle: {
                color: "rgba(0, 0, 0,0.7)",
              },
            },
            {
              name: "雨伞--粉色",
              itemStyle: {
                color: "rgba(244, 212, 215,1)",
              },
            },
            {
              name: "灰色--65元",
              itemStyle: {
                color: "rgba(142, 147, 151,0.7)",
              },
            },
            {
              name: "粉色--79元",
              itemStyle: {
                color: "rgba(244, 212, 215,0.7)",
              },
            },
            {
              name: "蓝色--65元",
              itemStyle: {
                color: "rgba(191, 217, 241,0.7)",
              },
            },
            {
              name: "行李箱--冰川蓝",
              itemStyle: {
                color: "rgba(190, 203, 209,1)",
              },
            },
            {
              name: "行李箱--少女粉",
              itemStyle: {
                color: "rgba(226, 202, 202,1)",
              },
            },
            {
              name: "冰川蓝--399元",
              itemStyle: {
                color: "rgba(190, 203, 209,0.7)",
              },
            },
            {
              name: "少女粉--399元",
              itemStyle: {
                color: "rgba(226, 202, 202,0.7)",
              },
            },
            {
              name: "经典深蓝--299元",
              itemStyle: {
                color: "rgba(61, 70, 85,0.7)",
              },
            },
            {
              name: "经典黑--299元",
              itemStyle: {
                color: "rgba(35, 35, 35,0.7)",
              },
            },
          ],
          links: [
            {
              source: "键盘--粉色",
              target: "粉色--75元",
              value: 18,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "键盘--粉色",
              target: "白色--60元",
              value: 10,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "键盘--粉色",
              target: "黑色--60元",
              value: 6,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "雨伞--粉色",
              target: "灰色--65元",
              value: 8,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "雨伞--粉色",
              target: "粉色--79元",
              value: 14,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "雨伞--粉色",
              target: "蓝色--65元",
              value: 18,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--冰川蓝",
              target: "冰川蓝--399元",
              value: 59,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--冰川蓝",
              target: "少女粉--399元",
              value: 2,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--冰川蓝",
              target: "经典深蓝--299元",
              value: 30,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--冰川蓝",
              target: "经典黑--299元",
              value: 33,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--少女粉",
              target: "冰川蓝--399元",
              value: 2,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--少女粉",
              target: "少女粉--399元",
              value: 26,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--少女粉",
              target: "经典深蓝--299元",
              value: 8,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "行李箱--少女粉",
              target: "经典黑--299元",
              value: 19,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
          ],
        },
      },
      chartTheme: "vintage",
      title_pic_path: [
        require("@/assets/rolling_bg_5.gif"),
        require("@/assets/title_8.png"),
      ],
      pinkTitle: `被<span style='color:pink'>粉</span>饰的迷局: `,
    };
  },
  created() {
    this.sum_a1 = this.piechart_data.reduce((a, b) => a + b, 0);
    // this.axios.get("/api/question1").then(() => {
    //   this.piechart_options.series[0].data = [
    //     { value: 1, name: "男性包装" },
    //     { value: 1, name: "女性包装" },
    //   ];
    // });
  },
  methods: {
    answer: function (question_no, ans) {
      switch (question_no) {
        case 1: {
          this.selected_status = 1;
          this.ans = ans;
          break;
          //   this.piechart_options.series[0].data[ans].value =
          //     this.piechart_options.series[0].data[ans].value + 1;
          //   console.log(this.piechart_options.series[0].data);
        }
        case 2: {
          this.selected_status = 2;
          this.ans = ans * 10 + this.ans;
          switch (this.ans) {
            case 0:
              this.same_a1 = this.piechart_data[0];
              this.piechart_data[0]++;
              break;
            case 1:
              this.same_a1 = this.piechart_data[1];
              this.piechart_data[1]++;
              break;
            case 10:
              this.same_a1 = this.piechart_data[2];
              this.piechart_data[2]++;
              break;
            case 11:
              this.same_a1 = this.piechart_data[3];
              this.piechart_data[3]++;
              break;
          }
          this.piechart_options.series[0].data = [
            { value: this.piechart_data[0], name: "男性包装->男性包装" },
            { value: this.piechart_data[1], name: "女性包装->男性包装" },
            { value: this.piechart_data[2], name: "男性包装->女性包装" },
            { value: this.piechart_data[3], name: "女性包装->女性包装" },
          ];
          break;
        }
      }
    },
  },
  mounted() {
    // floatingjs.rollingOnLoad();
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  text-align: center;
  max-width: 80%;
  display: inline-block;
  vertical-align: middle;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 2rem 0 2rem 0;
}
p {
  min-width: 100%;
  text-align: justify;
  max-width: 900px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.7rem;
  /* color: whitesmoke; */
}
.card-body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0eaec;
  padding: 0rem 1rem;
  // background-image: url("@/assets/bg.png");
  // background-attachment: fixed;
  /* background-position: top center; */
}
.ux_container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
}
.selected_card:hover {
  /* box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); */
  transform: translate(0, -5px);
  transition-delay: 0s !important;
  transition-duration: 0.3s !important;
  cursor: pointer;
}
.addition {
  min-width: 0;
  font-size: 14px;
  margin-top: 1rem;
  text-align: left;
  color: rgb(173, 173, 173);
}
h2 {
  padding-top: 1.5rem;
}
// @include media-breakpoint-up(sm) {
//   .ux_container .selected_card {
//     width: 12rem;
//     height: 12rem;
//   }
// }
// @include media-breakpoint-up(md) {
//   .ux_container .selected_card {
//     width: 15rem;
//     height: 15rem;
//   }
// }
// @include media-breakpoint-up(lg) {
//   .ux_container .selected_card {
//     width: 17rem;
//     height: 17rem;
//   }
// }
// @include media-breakpoint-up(xl) {
//   .ux_container .selected_card {
//     width: 20rem;
//     height: 20rem;
//   }
// }
.ux_container .selected_card {
  /* 相对定位 */
  position: relative;
  width: 20rem;
  height: 20rem;
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
.ux_container .selected_card .img-thumbnail {
  padding: 20px;
  border: 0px;
}

.content {
  font-family: "Halant", serif;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
// #result1 {
//   /* height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center; */
// }
.chart {
  height: 500px;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.flourish {
  // box-shadow: 20px 20px 50px rgb(0 0 0 / 50%);
  // width: 70%;
  // border-radius: 10px;
  // background-color: white;
  margin: 0 auto;
}
</style>
