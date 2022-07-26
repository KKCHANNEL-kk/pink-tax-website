<template>
  <div>
    <!-- 封面GIF -->
    <Jumbotron
      :img="title_pic_path[0]"
      title="被粉饰的迷局:"
      subtitle="货架上的“粉红税”陷阱"
    >
    </Jumbotron>
    <!-- 布洛芬互动 -->
    <div
      class="content container"
      style="
        height: 100%;
        min-height: 95vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      "
    >
      <transition
        name="fade"
        class="animate__animated animate__bounceIn"
        mode="out-in"
      >
        <div v-if="selected_status == 0" key="q1_before">
          <p class="text-center display-6">
            布洛芬是一款可用于减轻疼痛的药品<br />当你想要购买一盒布洛芬止痛片时<br />面对以下两种选择（二者功效相当）<br />你更可能做出的选择是？
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
        <!-- 互动结果展示 -->
        <b-container
          fluid
          id="result1"
          v-else-if="selected_status == 2"
          key="q1_chart"
        >
          <b-row>
            <b-col>
              <p class="text-center display-6">
                有<span style="font-size: 2em"
                  >{{ ((this.same_a1 / this.sum_a1) * 100).toFixed(2) }}%</span
                >的人和你做出一样的选择
              </p>
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
              <div class="content container">
                <section id="HCI_result">
                  <p>
                    <b style="color: #ed256d"
                      >上述场景虽然只是一次消费选择的模拟实验，但这个价目数据却来自现实生活。</b
                    >实际上，两盒布洛芬规格相同，成分与功能相同，仅因包装和商品分类标签的差异，就将其划分了“经典止痛款”和“缓和女性痛经款”两类，制定了不同的价目。
                  </p>
                  <p>
                    若你留心观察，试图在购物网页依据不同的性别标签检索其他如童装、洗发水、老年钙片等商品，结果或许也会让你大吃一惊。<b
                      style="color: #ed256d"
                      >这种现象，在国外学界被视作典型的“粉红税（Pink
                      Tax）”陷阱。</b
                    >
                  </p>
                  <p>
                    “粉红税”并非是一项的“看得见”的税目，其表现形式为：
                    <b style="color: #ed256d"
                      >当产品或服务在核心功能表现上完全相同或相似，针对不同性别，制定不同的定价，致使女性在同类商品消费中支出更高。</b
                    >
                  </p>
                  <p>
                    但目前而言，这场被“粉”饰的迷局略显朦胧，关乎“粉红税”的迷思也接连不断。它们隐藏于纷繁的商品货架之间，如若没有庞大商品基数之上的横向对比，也被难以察觉。
                  </p>
                  <p>
                    基于此，我们不禁好奇——“粉红税”陷阱是否蔓延在当下的国内市场？大众对此究竟认知如何？价格背后，是谁在操盘“粉红”法则？这期间究竟是市场主体的推波助澜，还是社会文化的驱动？
                  </p>
                  <p>
                    针对一系列疑问，我们在京东电商平台，针对23种中性商品抓取的20608条商品信息进行数据分析，试图探寻粉红税的具象踪迹；为进一步倾听民众的想法，我们参与式观察豆瓣小组、抖音评论区，并针对抓取到的1469条帖子进行内容分析与文本分析，再于其中找到希望发声的人群，倾听与记录他们的声音，以期延伸“粉红税”背后的各种现象。
                  </p>
                </section>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </transition>
    </div>

    <!-- <Jumbotron title="开篇：一场迷局" subtitle=" "> </Jumbotron> -->

    <div class="content container">
      <section id="intro" v-if="selected_status == 2">
        <!-- <h1>开篇：一场迷局</h1> -->
      </section>
    </div>
    <Jumbotron
      :img="title_pic_path[2]"
      title="01. “听不见”的粉红税"
      subtitle="“一种后知后觉的被欺骗感”"
    ></Jumbotron>
    <div class="content container">
      <section id="hear1">
        <p>
          2022年5月26日，一条关于“粉红税”的科普视频在抖音上收获了24万点赞，ID名为“淦诗琪”的博主在其中提到，“女性一生可能要比男性多花68w元”，博主提出的骇人数字，让观众在评论区议论纷纷，这也让部分网友第一次认识到这一现象。
        </p>
        <p>
          <b style="color: #ed256d"
            >“当下觉得很震惊！因为我之前从来没有意识到这个问题。”</b
          >
        </p>
        <p>
          楚怡正是通过这则视频第一次认识到“粉红税”。看完视频后，她久久不能平复自己的情绪，旋即将视频链接转发到了宿舍群。
        </p>
        <p>
          很快，她意识到自己愤怒的原因并非只因同情女性遭遇，其本人亦深受其害——在某购物平台的消费记录中，清晰记载了楚怡在过去一年内的商品消费信息。遗憾的是，她也陆陆续续踩雷了视频里提到的商品——化妆镜、洗发水，甚至连自己购买的笔筒，搜索同款产品时都能发现更大众的款式，价格更为低廉。
        </p>
        <p>
          楚怡在宿舍群与舍友们讨论起此事，“我们各自去搜索了视频里提到的一些商品，有些商品的男女款价格差真的离谱到令人发指。”更大的问题也随之而来，一番讨论之下，楚怡的一位舍友在群里留下疑问：“为什么在此之前，我们都意识不到这件事情？”
        </p>
        <p>
          这个问题引起了女孩们的思考，也折射出这个议题长期以来的国内受众群体中的认知处境。群聊界面静置良久，楚怡意识到问题所在——“这种后知后觉的被欺骗感，或许来自相关议题的缺失。”
        </p>
        <p>
          但议题真的缺失了吗？在微博检索“粉红税”相关的议题，我们可以看到相应的词条讨论。
        </p>
      </section>
    </div>
    <!-- 词条滚动 -->
    <tag-cloud></tag-cloud>
    <div class="content container">
      <section id="hear2">
        <p>
          但问题在于，绝大多数的相关微博话题词条中，讨论数量不超过5000条，最高的一条#女款总是比男款贵是粉红税吗#讨论量仅达到1w+，与动辄上百万讨论量的社会议题相比，这或许并不在“广泛讨论”的范畴。
        </p>
        <p>
          <b style="color: #ed256d"
            >某种程度上，议题并没有完全缺失，但讨论议题的声音过于微小，以至于大众听不见。</b
          >
        </p>
        <p>
          事实上，“粉红税”并非新兴概念，国外已展开了相关研究与报道。纽约消费者事务部（NYCDCA）于2016年发布了一篇名为《从摇篮到拐杖:成为一名女性消费者的代价》的调查报告。
        </p>
        <p>
          NYCDCA调查了纽约市零售商出售的近400对商品，并将单品划分成个人护理、保健品、童装、玩具配件、成人服装五大类，这五类商品的取样前提是男女两款商品的功能属性与制作成本均无明显差异。
        </p>
        <!-- 纽约粉红税调查 -->
        <b-container>
          <div
            class="flourish-embed flourish-hierarchy flourish"
            data-src="visualisation/10412134"
          ></div>
        </b-container>
        <p>
          在上述五大商品类目中，均出现4%-13%不等的性别溢价。从整体上来看，同款女性商品的价格比同款男性商品高出两倍以上。其中，占42%的商品需要女性为其付出更高的价格，而需要男性支付更高价格的商品仅有18%。这项报告引起了美国民众的广泛关注，也让学界就此议题进行一轮又一轮的研讨与交锋。
        </p>
        <p>
          反观国内，“粉红税”的概念却鲜为国内大众知晓。在巨量算数平台上检索“粉红税”话题关键词，我们发觉该词条自2021年11月建立以来，连续数月抖音搜索指数均为个位数。
        </p>
        <p>
          在2022年5月5日，“粉红税”搜索指数达到最高峰值66144，却远不及今年同样讲述消费现象的“女神节”历史高峰的1/122。且“粉红税”的热度持续时间较短，在5月中旬之后讨论热度又回归沉寂的状态。
        </p>
        <p>
          但即便声音微弱，我们同样发现了
          <b style="color: #ed256d">一些专注“粉红税”讨论的空间。</b>
          创建于2020年11月24日的豆瓣讨论组"粉红税抵制者联盟”中汇聚了26298名讨论小组的组员，我们抓取小组中有效帖子共1469条，发现高频话题仍然是豆瓣网友对“粉红税重灾区”的讨论。
        </p>
        <!-- 豆瓣讨论区提及商品 -->
        <b-container>
          <div
            class="flourish-embed flourish-hierarchy flourish"
            data-src="visualisation/10522352"
          ></div>
        </b-container>
        <p>
          在讨论帖中，豆瓣网友“集火”的粉红税灾区覆盖极广：服饰、洗护用品、美妆用品、玩具、数码产品......这些在生活中数见不鲜的产品，在评论区中均被描述成承载“粉红税”的罪恶容器。在豆瓣网友的讨论中，粉红税已经蔓延到生活中的方方面面，成为大众消费中隐性但顽固的一部分。
        </p>
        <p>
          我们可以看见，在834次涉及到粉红税商品重灾区的讨论中，关于服装类产品的讨论高达416次，占据接近一半的讨论度。而服装作为大众普遍的刚需消费品，产品的价值浮动与差异对消费者的影响是整体且广泛的。
        </p>
      </section>
    </div>

    <Jumbotron
      :img="title_pic_path[3]"
      title='02. “看不见"的粉红税'
      subtitle="从「童装」到「老年奶粉」，置身“粉红税”陷阱中的“她”们"
    ></Jumbotron>
    <div class="content container">
      <section id="lifejourney1">
        <p>
          “粉红税”并非一项显见的税目，如果不曾在庞大的商品基数中搜寻规律，绝大多数人只会对孤立的现象习焉不察，或将其归纳为一种偶然与巧合。但即便如此，在这些巧合交汇之间，一些人也留下了属于她们的声音。
        </p>
        <p>
          2021年年末，大二学生雨婷在某品牌电商旗舰店内下单了一条心仪已久的女款长裤。不久后，她却发现了令人瞠目的事实：该店同时还出售男子尺码的同款长裤，在外观设计与详情描述均相同的情况下，售价却比女款便宜100元。
        </p>
        <p>
          去年冬季，初入职场的映雪走进服装店准备购置保暖衣物，却便被摆放在正门的两个模特身着着的羽绒服价格“劝退”：女款羽绒服329元，男款200元。“成分含量没去看，外观上是一样的。”
          <b style="color: #ed256d"
            >最后她选择与“粉红税”作无声的斗争，结果是：“冻着吧，多穿几件长袖。”</b
          >
        </p>
        <p>
          同样的，ID为「注销已」的豆瓣用户在社交媒体上分享个人购物经历，得知安踏旗舰店上某款的运动鞋，女性尺码也要比男性尺码贵20元，随后向客服询问价格差异的缘由，然而只得到“优惠力度不同”的答复。
        </p>
        <p>
          诸如“颜色不同”、“不同商品的优惠套餐不同”，是电商平台客服们的常见话术。
          <b style="color: #ed256d"
            >面对此类现象，当下女性消费者的维权似乎止步于社交媒体上的控诉，或是选择“绕道而行”。</b
          >
        </p>
        <p>
          诚然，供需关系或消费弹性会对男性和女性产品价格造成影响，进而产生差距，但“粉红定价”表象背后指向一种基于性别的定价歧视问题。
        </p>
        <p>
          “我并不认为这是一种合理的现象”，当听闻这个事例，楚怡耷拉着肩膀无奈地说。“我觉得这件事情很无奈，因为我们都没办法确认这是否是一件普遍的事情。换言之，如果只是很局部的小事，为什么会有人愿意参与？”楚怡坦诚地表达了她的困惑，留下一声叹息。
        </p>
        <p>
          在20608条商品信息中，我们发现这件事出现了更为严肃的走向。据京东电商平台上抓取的不同商品价格数据反映，从儿童玩具、成人服饰到老年用品，女用商品通常要比男用商品均价要高，且这些商品往往在核心功能上并无差异。
        </p>
        <p style="margin-bottom: 0">
          此类溢价现象通常表现为，同一品牌同一设计下，粉色商品要比其他颜色的商品贵。
          <b style="color: #ed256d"
            >甚至有时仅仅将商品名称条目中的“女”，更改成“男”，就产生了不可忽视的价格差。</b
          >
        </p>
      </section>
      <!-- 女性一生换装 -->
      <div class="container">
        <FemaleChanges></FemaleChanges>
        <section style="padding: 0">
          <div class="addition">
            鼠标点击商品图案，可查看价格对比<br />
            来源：京东商城使用指定检索词组合得到的检索结果
          </div>
        </section>
      </div>

      <section id="lifejourney2">
        <p style="margin-top: 0">
          从童装价格数据开始，童装（男）的均价为139.72元，而童装（女）的均价数据为171.88元，二者价格相差超过30元。而众所周知，由于婴儿与幼童阶段，男女体格差异还不显著，服装尺码与所需布料都较为接近，二者单价差异如此之大，可以窥见问题所在。
        </p>
        <p>
          而在童装之外，许多日常用品也或多或少存在粉红税：学生时代的文具、成年以后的成人服饰、步入职场后的化妆用品、日常中必不可少的洗发水、甚至是年老后服用的钙片、老年奶粉等保健品……
        </p>
        <p>
          这些商品中均出现了显著的男女定价差异，暴露了问题所在——
          <b style="color: #ed256d"
            >“粉红税”陷阱并不局限于某个消费领域的一隅，令人担忧的是，它足以贯穿女性成长的一生。</b
          >
        </p>
        <p>
          无奈的是，大众对“粉红税”的认知更像是"洞穴以内”的人，身陷迷局而不自知。对于绝大多数消费者而言，他们并不如豆瓣讨论小组以内的网友一般，对粉红税深恶痛绝。
        </p>
        <p>
          尽管女性在经济上要比男性付出更大代价，她们在多数情况下不会采取进一步的维权行为，愤怒的情绪终究会被平息。而作为曾经的“受害者”雨婷表示，将来如果在该店遇到了喜欢的商品，即使百般纠结，最终她的选择仍然是——
          <b style="color: #ed256d">“我还是会买的”。</b>
        </p>
        <p>
          甚至有人认为部分商品的溢价是合理存在的。“其实对于女性而言，她们对产品要求更苛刻，产品成本应该也会相应提升吧，那么价格不一样也很正常。”职场白领凌志如是说。
        </p>
        <p>
          但当凌志被问及到如何看待因布洛芬的封面而导致的定价差异问题，凌志无言以对，旋即表示：“那可能还是商家的别有用心。”这番话似乎有一定的道理。
        </p>
        <p>
          在豆瓣评论区，除了有关于“重灾区”的讨论，女孩们同样关心粉红税从何而来。豆瓣网友@Purple
          Rain提到：“女性的消费习惯赋予了商家太多盈利空间，这让他们天然地瞄准了女性市场，想分一块蛋糕。”
        </p>
        <p>真的只是商家的别有用心吗？还是，另有隐情……</p>
      </section>
    </div>
    <Jumbotron
      :img="title_pic_path[1]"
      title="03. “粉红”法则，谁在幕后操盘？"
      subtitle="市场、文化、制度，孰是孰非"
    >
    </Jumbotron>
    <div class="content container">
      <section id="deepin">
        <p class="text-left display-6 sub-title">
          市场黑箱：别有用心的“性别定制”?
        </p>
        <p>
          对粉红色、精致香味、精美包装有着极致的偏爱——这是消费主义时代下，女性消费者被塑造出来的刻板印象。当部分针对女性设计的商品被添加了特殊香料或其他成分时，更高的设计制造成本致使售价更高，这无可厚非。“如果商品是在真正意义上为女性定制更好的服务，有质的飞跃，那我会愿意为此买单”，楚怡提到。
        </p>
        <p>
          然而，
          <b style="color: #ed256d"
            >在核心功能不变的情况下，粉色产品的定价比同款商品的其他颜色定价更高的现象也并不罕见。</b
          >
          在这种情景下，消费者其实会倾向于做出理性的选择。在得知产品几乎别无二致的情况下，商品价格产生的差异会让消费者恍然大悟，并随即"望而生畏"。
        </p>
        <p>
          在我们设计的问卷中，我们提供了四种商品消费场景：布洛芬、键盘、雨伞、行李箱，正如报道开篇展示的布洛芬消费选择实验，我们对其他三样产品也进行了类似的设计部署。
        </p>
        <p>
          我们先让消费者针对不同的色系，做出第一反应下的选择。随后，在公布“粉红税”陷阱之后，让消费者再次做出选择，结果自然明朗——消费者在直观的数据对比下，做出了更为理性的选择。
        </p>

        <!-- 消费者偏好改变 -->
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
          <!-- <section>
            <div class="addition">
              在数据结果上，我们能够看到约有54.7%的消费者在得知自己所选商品价格更高的情况下，重新选择了价位较低的同款商品。
            </div>
          </section> -->
        </div>
        <p>
          在数据结果上，我们能够看到约有54.7%的消费者在得知自己所选商品价格更高的情况下，重新选择了价位较低的同款商品。
        </p>

        <p>
          但上述选择成立的前提在于：消费者获悉充分的商品信息。
          <b style="color: #ed256d"
            >在消费者还身陷困局，缺乏足够的时间精力“货比三家”的时候，商家已经想出了更精当的伎俩。</b
          >
          相比单纯更换商品颜色，商家成常见的做法是，对外包装整体进行更新换代。
        </p>
        <p>
          正如报道开头的互动案例，以“芬必得”布洛芬咀嚼片为例，作为一种较为大众的止痛片，该药品的外包装盒从先前的男性人像变成女性人像，疼痛点从先前的头部转移至女子腹部位置，货架上的名称也从过往的“普通款”更改为“痛经专用款”。
        </p>
        <p>
          据佛山市某药店店主梁先生透露，新老两款布洛芬咀嚼片在成分、功效上无异，二者的重要成分布洛芬含量均为0.2克/粒。然而，
          <b style="color: #ed256d"
            >在同一容量前提下，各大电商平台上标示的价格却相距甚远。</b
          >
        </p>
        <!-- <div class="container">【可视化】药代流程</div> -->
        <p>
          通过追溯药品从出厂到流入市面的流通过程，不难发现，溢价问题出现在从药品代理商到零售商这一环节上。
        </p>
        <p>
          药房一般需要通过药品代理商订货购药，在代理商这一环节，能够明晰的是，同一容量的“芬必得”布洛芬，新旧两款药价均在13～16元这一区间内浮动，差别不大，但二者最终呈现在消费者面前的价格差异却翻了一倍。深入其中原因，梁先生只能透露：“不同药房有着不同的定价机制”。
        </p>
        <p>
          像上述雨伞、键盘、布洛芬这类产品，
          <b style="color: #ed256d"
            >通过在产品功能、外观设计及广告推广方面强调男女消费者的区别，是一种性别差异化的营销策略。</b
          >
          社会学学者Elizabeth
          Sweet在其研究中发现，在1975年的Sears百货目录中，儿童玩具对象被明确列为是男孩还是女孩的比例还不到2%；到了1995年，比例扩大到50%左右，随着消费市场的发展壮大，基于性别差异化的营销模式伴也在成人商品市场里逐渐成熟。
        </p>
        <p class="text-left display-6 sub-title">
          文化推手：社会偏见与期望的共谋？
        </p>
        <p>
          “粉红税”的概念并非某个地区所独有，而是一个普遍而又由来已久的文化现象。只是在以往的叙述中，人们常用“性别歧视性定价”等表达来形容这种消费上的不公。这也表明，
          <b style="color: #ed256d"
            >“粉红税”所指向的现实比其词语的诞生更为悠久和广泛。</b
          >
        </p>
        <p>
          2021年4月15日，据南美侨报网报道，智利女性消费者中有88%表示会在消费过程中受到歧视。同时有61%智利女性消费者认为，她们在日常消费中不得不以更高的价格，支付那些被大众认为是"女性专属"的商品，比如粉红色颜色的各类商品。这种因具有女性色彩的关键词而使同款商品得到更高溢价的现象，使消费者感到有如受到诈骗般的不适。
        </p>
        <div style="max-width: 900px">
          <b-img :src="require('@/assets/douban_text.gif')" fluid></b-img>
          <section style="padding: 0">
            <div class="addition">
              *所有语录均摘选自豆瓣「粉红税抵制者联盟」小组
            </div>
          </section>
        </div>

        <p>
          豆瓣网友@Purple
          Rain在她的另一篇帖子中写道：“有时候，正是观念把我们束缚了，凭什么女性就一定就得是消费主力军？这并不是自然形成的。”而楚怡也同样认为，“我们在讨论时也提过这个问题，我们都认为这是对女性的歧视。”
        </p>
        <p>
          这些声音都指向更深处：社会成因与文化氛围——粉红税或许是一个深远的文化议题。除了上述两人，论坛中深受“粉红税”困扰的消费者，也时常会习惯性把将问题的矛头指向“性别歧视”与社会文化。这样的担忧不无道理。
        </p>
        <p>
          芮塔·菲尔斯基在《现代性的性别》中指出，
          <b style="color: #ed256d"
            >在现代消费主义的兴起过程中，“性别”是消费需求塑造过程中的重要因素。</b
          >
          早在十九世纪后期，消费者就经常以女性的形象出现，当时的广告商总是会通过饱含情欲的商品激发女性的欲望。
        </p>
        <p>
          1883年出版的长篇小说《妇女乐园》这样描述女性购物的场景:
          “无论是穿着绫罗绸缎的上层贵妇，还是穿着普通的中产阶级妇女，或是没戴帽子的姑娘们，她们在挑选蕾丝、皮草、裙子、贴身内衣等物品时激动得面色绯红，像见到情人一样。”女性的购买欲与情欲联系在一起,女性的消费潜力也在无形中被放大。
        </p>
        <p>
          而法国社会学家布尔迪厄同样认为，文化悄然嵌入在社会评价标准中，以隐秘的方式影响社会行动者，在这一过程中让他们潜移默化地接受一套社会惯例。“粉红税”正是这样一种商品市场与社会文化共谋的结果。
        </p>
        <p>
          营销口号打造精致的女生色系，附着符合社会文化定义的性别符号，女性一旦对这类符号化的商品起心动念，就等于接受了社会设置的规则，甘心为所谓的“女性专属”商品买单。
        </p>
        <p>
          这也证明，“粉红税”所扎根的文化土壤正是基于性别的刻板印象。
          <b style="color: #ed256d"
            >诸如“‘包’治百病”、“口红是女人的身价”的话语与标签，让女性在不经意间成为消费意识形态的理想对象，也进而为商家设置“粉红税”制造定价空间。</b
          >
        </p>
        <p>
          商家费尽心思地使用“女神”、“少女”等词语向女性消费者谄媚，转而用“轻薄便捷”、“樱花限定”、“精致小巧”等宣传词将其装入“定制化”产品的桎梏中。在2020年8月，网络爆出天津市双峰道某饭店推出“男女版盒饭”，将“减少米饭量更适合女性顾客”作为减量不减价的依据，引起众多网友的不满。
        </p>
        <p>
          无独有偶，2021年10月，一名学生在网上发布了一段关于云南某高校食堂因性别而对米饭差异化收费的视频，同样点燃网民的不满情绪，有网友一针见血地讽刺道：“是不是不会写‘大份’、‘小份’这几个字？”。尽管在这一事件中，男性学生需要比女性学生多支付两毛钱的米饭价格，这虽与“粉红税”所界定的概念不同，但其背后仍然是一种
          <b style="color: #ed256d"
            >对两性特征刻板化而由此进行市场化的归因谬误。</b
          >
        </p>
        <p class="text-left display-6 sub-title">
          制度缺憾：避税指南与空白地带
        </p>
        <p>针对部分商家采用的性别差异定价策略，一些消费者也在积极寻找对策。</p>
        <p>
          在网络上，我们可以看到如“淦诗琪”等博主除了披露现象之余，还会提到“粉红税重灾区清单”、“避（粉红）税指南”。大意是，通过这份清单，网友可以清晰地认识到哪些商品显然存在粉红税，由此在下一次消费选择中保持警惕。
        </p>
        <p>
          而“避税指南”则提供了一些较为实用的购物建议，“关键词法”有助于检索同款中性价比更高的商品。如“化妆刷筒”可以用“笔筒”代替，“白T恤”可以置换成“纯棉T恤男”等等，博主们纷纷建议女性消费者直接从用途角度进行关键词搜索，更是要尽量避免“网红”等关键词描述。
        </p>
        <p>
          然而，
          <b style="color: #ed256d"
            >“曲线救国”的办法没有从根本上解决“粉红定价”的歧视性问题——商家们针对女性消费者制定更高的商品定价。</b
          >
          女性消费者为何需要付出额外的努力，才能确保本来应有的经济权益不受损害？
        </p>
        <p>
          2019年12月22日，纽约州长宣布纽约将推进取消粉红税的相关立法，弥补男女在购买相同或类似产品时所产生的差价。经过一年的探索，纽约州的粉红税禁令于次年10月正式实施。
        </p>
        <p>
          这并非是平地一声雷，美国在消除粉红税的道路上已探索已久。早在20世纪30年代，美国在起草消费税体系时就已提出了粉红税的概念；而于1995年，加利福尼亚州通过了《性别税废除法案》，在全国有关禁止性别歧视性定价的法案探索中迈出里程碑式的第一步，意图抑制商家在销售核心功能、提供时间成本相同的服务时，针对两性消费者制定不同定价的行为。而回首我国国内现有法律法规，类似规范尚属空白地带。
        </p>
        <p>
          现如今，美国少数州和地方立法机构已经针对基于性别的服务定价采取了相关打击措施，但有关取缔粉红税的法律探索仍然道阻且长——仅有不足5个州或城市针对性别歧视性定价做出法律层面的约束。
        </p>

        <!-- 空间信息 美国立法地图 -->
        <b-container>
          <div
            class="flourish-embed flourish-map flourish"
            data-src="visualisation/10525586"
          ></div>
          <section style="padding: 0">
            <div class="addition">鼠标悬浮至立法地区可查看法律详规</div>
          </section>
        </b-container>

        <p>
          除此之外，在司法层面，尽管存在上述出台法律的支持，但因同类商品存在价格差异而与商家对簿公堂的消费者依然少之又少。从法律数据库Westlaw检索结果来看，有关性别歧视性定价的案件总计仅有6例，而除去同一案件的上诉审理，
          <b style="color: #ed256d"
            >只有3位消费者就商品性别定价问题向法院提出诉讼，并皆以败诉告终。</b
          >
        </p>
        <p>
          “男性和女性能购买面向异性销售的产品，但
          <b style="color: #ed256d"
            >由于社会条件和社会对于两性期望的不同，使得女性在消费的选择上更加不公平。</b
          >
          ”2020年7月，舒尔特以克诺普科公司的除汗剂具有性别歧视性的定价方案为由，向法院起诉克诺普科公司。
        </p>
        <p>
          但由于舒尔特所依据的法规中并不涉及商品性别定价的条例，其本人也没有办法就这些不同产品线的生产、研发和营销相关的成本提出任何事实指控，导致该案件最终以其败诉收场。
        </p>
        <p>
          在该判决书中，法官留下了他的主张：“通常，我们期望市场能够自我纠正，并依靠消费者自主购买的行为来管理市场。消费者可以选择最理想的替代品以避免那些不满意的商品。”司法将商品定价交由自由市场调节，保障女性消费者的合法权益仍任重道远。
        </p>

        <!-- 法律时间线 美国立法年份 -->
        <!-- <div class="container" style="width: 100%">
          <b-img :src="title_pic_path[6]" style="width: 100%"></b-img>
        </div>
        <div class="addition">
          来源：Westlaw法律数据库、美国国会官网、网络搜索
        </div> -->
        <b-container>
          <div>
            <!-- <iframe
              src="https://hanabi.data-viz.cn/chart.html?id=s_80f2f65496c3486baa45949ea8a5819f&isIframe=1"
              frameborder="0"
              width="100%"
              height="2434"
            ></iframe> -->
            <iframe
              src="https://hanabi.data-viz.cn/chart.html?id=chartId_706e18678e514e208e82a59c9ba702a9&isIframe=1"
              frameborder="0"
              width="100%"
              height="1280px"
            ></iframe>
          </div>
        </b-container>

        <p>
          而更为迫切的是，既有法律所涉及的范围仍具有极大的局限性。在废除粉红税的法律体系中，
          <b style="color: #ed256d"
            >商家依然被允许通过延长服务时间、提高服务成本和难度来设计更高的标价，而有关产品的价格歧视并不在法律的约束范围内。</b
          >
          同时，国会两院拟议的《粉红税废除法案》几经波折，除了部分议员的阻挠，诸如“辨别何为‘类似产品’”等细节定义也成为阻碍推进立法的绊脚石。
        </p>
        <p>
          <b style="color: #ed256d"
            >直到报道的今天，该法案始终停留在“提出草案”的第一步，</b
          >
          在它之后，还有“众议院通过-参议院通过-总统批准-颁布法律”的漫漫长路。
        </p>
      </section>
    </div>
    <Jumbotron
      title="04.尾声：在迷局中前行"
      subtitle="“我们要一起向上，共同对抗”"
      :img="title_pic_path[5]"
    >
    </Jumbotron>

    <div class="content container">
      <section id="end">
        <p>
          在“粉红税”陷阱依然存在的今天，“她经济”的力量究竟在多大程度得以彰显，仍值得商榷。一方面，女性背负“粉红税”，在无形中增加了生活成本；而另一方面，大量行业调查也通过两性收入对比，显现出女性的收入劣势。
        </p>
        <p>
          LuLulemon在日本制作的一份简报中指出：“在全职工作里，女性工资仅为男性的75%，而在美国用户体验设计师的行业里，女性和男性的工资差为13.7%。”
        </p>
        <p>
          另外，BOSS直聘研究院发布的《2016年至2021年中国男女薪资差异对比》的数据显示，2021年女性平均薪酬为7017元/月，而男性平均薪酬为9104元/月，其中仍存在一定的差距。
        </p>

        <!-- 薪资图 -->
        <b-container>
          <div
            class="flourish-embed flourish flourish"
            style="width: 100%; height: auto"
            data-src="visualisation/10530180"
          ></div>
        </b-container>

        <p>
          此外，“粉红税”陷阱在多大程度上能被规避或是被抑制，仍是未解难题。潜伏于商品货架上的“粉红税目”并非孤立因素导致的单因困局，其背后有着纷繁复杂的成因——
          <b style="color: #ed256d"
            >公众认知程度、市场主体因素、社会文化语境、政策法规……</b
          >
          凡此种种因素交织共构，造成现下情状。
        </p>
        <p>
          况且，“粉红税”的在不同的学界讨论情景中有不同的定义，我们的报道中只局限于其中较为广泛运用的定义，却无法进一步触及这个议题中的模糊地带：附着商业营销色彩的樱花限定女性酒定价远高于同款经典鸡尾酒，算不算粉红税？天然为女性设计的卫生棉条，又是否指向不合理溢价？这些问题仍然有待讨论。
        </p>
        <p>
          当然，进一寸亦有欢喜。近年来，
          <b style="color: #ed256d"
            >性别中立的营销方式越来越得到认可，从产品设计、开发、生产到推广，各个环节都更注重打破传统性别叙事，提倡给予女性更多自主选择权、倡导女性审美多元化。</b
          >
          而2021年1月15日推出的《深圳市广告性别平等审视指南》也同样释放了关注两性定价平等的积极信号，成为制度探索路上踏出的勇敢一步。
        </p>
        <p>在媒体领域，有关“粉红税”的文章数量也正在不断攀升。</p>

        <!-- 媒体报道图 -->
        <b-container> </b-container>
        <div style="display: flex; flex-direction: column; align-items: center">
          <iframe
            src="https://hanabi.data-viz.cn/chart.html?id=mul_9328f7879bb64d548ec7384e8b2da2cb&isIframe=1"
            frameborder="0"
            style="
              width: 1280px;
              height: 960px;
              transform-origin: left top;
              transform: scale(0.8, 0.8) translate(calc(100% * 0.125));
            "
          ></iframe>
        </div>

        <p style="margin-top: 0">
          2022年02月16日，“粉红税”正式“亮相”于《今晚报》的版面，是近年来首次以“网络新词语”的概念刊登在纸质报刊上。从数据上对比，尽管网站与报刊的报道量差异悬殊，但在消费主义席卷下的互联网，受众仍能直接便捷地捕捉到相关议题的讨论。
        </p>
        <p>
          在这些报道中，不论是观点分享，还是国内外的案例介绍，都能从字里行间感受到粉红税作为一种较不合理的定价标准，正困扰着众多消费者做出决策。而部分作者的讨论并不仅仅局限于商品消费的范畴之中，
          <b style="color: #ed256d"
            >从“女为悦己者容”的消费表征深入到性别歧视的文化内核，从消费趋势延伸到两性的就业环境、生存环境，他们将笔墨倾注于女性生命历程之中的每一道“坎”，从中呼唤尊重和平等。</b
          >
        </p>
        <p>
          另外，自媒体领域内也出现了有关吐槽“粉红税”的内容。从抖音、B站等视频平台，到主打图文内容的小红书、知乎等网站，都有一定的博主围绕“粉红税”展开讨论，或是将之与“冤枉钱”挂钩，为观众分享“踩雷”商品，或是从“女性主义”、“消费主义”等更为学理性的角度出发，探讨“粉红税”形成的内在原因与现实意涵。
        </p>
        <p>
          <b style="color: #ed256d">“我们要一起向上，共同对抗。”</b>
          这是停留楚怡微信界面中，关于这场“粉红税”讨论的最后一句。但破除“粉红税”的道路究竟有多漫长，只有当更多人亲身踏上征途方能体会。
        </p>
      </section>
    </div>
    <div class="">
      <div class="data-source">
        数据来源:<br />
        Westlaw法律数据库：http://www.westlaw.com<br />
        美国国会官网：https://www.congress.gov<br />
        豆瓣“粉红税抵制者联盟”小组讨论帖：https://www.douban.com/group/711982/<br />
        《BOSS直聘研究院2016年至2021年性别薪资差异报告》<br />京东商城商品检索数据<br />
        纽约消费者事务部：From Cradle to Cane: The Cost of Being a Female
        Consumer（2015）<br />《深圳市广告性别平等审视指南（2021年）》<br />
        “粉红税”新浪微博话题<br />
        <br />
        文稿：杜芷茵、刘龙昊、朱梓鹏<br />
        数据：刘宇康、谢钰芸<br />
        设计：杜芷茵、刘龙昊、谢钰芸<br />
        开发：刘宇康<br />
        指导教师：黄文森<br />
        2022 © 深圳大学传播学院《数据新闻与可视化》课程项目<br />
      </div>
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
// import TimeLine from "@/components/icons/TimeLine";
// import LawTimeLine from "@/components/icons/LawTimeLine.vue";

import * as echarts from "echarts";
import themeVintage from "@/assets/js/echartsTheme/vintage.json";
echarts.registerTheme("vintage", themeVintage);

// import * as floatingjs from "./floating.js";
import TagCloud from "@/components/TagCloud.vue";
import FemaleChanges from "@/assets/fm_change/FemaleChanges.vue";

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
    // TimeLine,
    // LawTimeLine,
    TagCloud,
    FemaleChanges,
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
        grid: {
          right: "1",
        },
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
          layoutIterations: 0,

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
            {
              name: "（得知高价）选择不变",
              itemStyle: {
                color: "rgba(237, 37, 109,0.7)",
              },
            },
            {
              name: "（得知高价）改变选择",
              itemStyle: {
                color: "rgba(183, 195, 229,0.7)",
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
            {
              source: "粉色--75元",
              target: "（得知高价）选择不变",
              value: 18,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "粉色--79元",
              target: "（得知高价）选择不变",
              value: 14,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "冰川蓝--399元",
              target: "（得知高价）选择不变",
              value: 61,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "少女粉--399元",
              target: "（得知高价）选择不变",
              value: 28,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "白色--60元",
              target: "（得知高价）改变选择",
              value: 10,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "黑色--60元",
              target: "（得知高价）改变选择",
              value: 6,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "灰色--65元",
              target: "（得知高价）改变选择",
              value: 8,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "蓝色--65元",
              target: "（得知高价）改变选择",
              value: 18,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "白色--60元",
              target: "（得知高价）改变选择",
              value: 10,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "少女粉--399元",
              target: "（得知高价）改变选择",
              value: 2,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "冰川蓝--399元",
              target: "（得知高价）改变选择",
              value: 2,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "经典深蓝--299元",
              target: "（得知高价）改变选择",
              value: 30,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "经典深蓝--299元",
              target: "（得知高价）改变选择",
              value: 8,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "经典黑--299元",
              target: "（得知高价）改变选择",
              value: 33,
              lineStyle: {
                color: "gradient",
                opacity: 0.5,
              },
            },
            {
              source: "经典黑--299元",
              target: "（得知高价）改变选择",
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
        require("@/assets/rolling_bg_7.gif"),
        require("@/assets/title_12.png"),
        require("@/assets/title_10.png"),
        require("@/assets/title_11.png"),
        require("@/assets/title_9.png"),
        require("@/assets/title_7.png"),
        require("@/assets/law_timeline.png"),
        require("@/assets/media.gif"),
      ],
      pinkTitle: `被粉饰的迷局：货架上的“粉红税”陷阱`,
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
  font-size: 1.25rem;
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
  margin-top: 4rem;
  margin-bottom: 4rem;
  line-height: 3rem;
  /* color: whitesmoke; */
}
.card-body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
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
  font-size: 1rem;
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
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  margin-right: 30px;
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
  // font-family: "Halant", serif;
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
  width: 70%;
  margin: 0 auto;
}
.sub-title {
  margin-top: 6rem;
}
.data-source {
  background-color: rgba(220, 110, 120, 0.2);
  width: 100vw;
  padding: 30px;
  color: gray;
  font-size: 12px;
}
</style>
