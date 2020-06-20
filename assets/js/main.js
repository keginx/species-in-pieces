!function (e) {
    function a(t) {
        if (n[t])
            return n[t].exports;
        var s = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, a),
        s.l = !0,
        s.exports
    }
    var n = {};
    return a.m = e,
    a.c = n,
    a.i = function (e) {
        return e
    },
    a.d = function (e, n, t) {
        a.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    },
    a.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return a.d(n, "a", n),
        n
    },
    a.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    },
    a.p = "",
    a(a.s = 2)
}
([function (e, a, n) {
            "use strict";
            var t = {
                animalList: ["crow", "vaquita", "tamarin", "frog", "owl", "turtle", "oryx", "iguana", "seahorse", "armadillo", "sloth", "kakapo", "echidna", "penguin", "damselfly", "bear", "parrotfish", "camel", "butterfly", "ostrich", "panda", "tapir", "sifaka", "lynx", "rhino", "peccary", "okapi", "loris", "hirola", "drill"],
                animalNames: ["Helmeted Hornbill", "Vaquita", "Golden Lion Tamarin", "Golden Poison Frog", "Forest Owlet", "Kemp’s Ridley Turtle", "Scimitar Oryx", "Fiji Crested Iguana", "Knysna Seahorse", "Brazilian Armadillo", "Pygmy 3-toed Sloth", "Kakapo", "Long-beaked Echidna", "African Penguin", "Greek Red Damsel", "Sun Bear", "Rainbow Parrotfish", "Bactrian Camel", "Wallace’s Birdwing", "Somali Ostrich", "Red Panda", "Malayan Tapir", "Diademed Sifaka", "Iberian Lynx", "Sumatran Rhino", "Chocoan Peccary", "Okapi", "Javan Slow Loris", "Hirola", "Drill"],
                translatedAnimalNames: ["盔犀鸟", "小头鼠海豚", "金狮狨", "金色箭毒蛙", "林斑小鸮", "坎普龟", "弯刀羚羊", "斐济冠状鬣蜥", "克尼斯纳海马", "巴西犰狳", "三指树獭", "鸮鹦鹉", "长喙针鼹鼠", "非洲企鹅", "希腊红蜻蜓", "马来熊", "彩虹鹦嘴鱼", "双峰驼", "红鸟翼凤蝶", "索马利鸵鸟", "红熊猫", "马来文貘", "冕狐猴", "伊比利亚猞猁", "苏门答腊犀牛", "草原西貒", "霍加狓", "爪哇懒猴", "亨氏牛羚", "鬼狒"],
                animalScientificName: ["Rhinoplax vigil", "Phocoena sinus", "Leontopithecus rosalia", "Phyllobates terribilis", "Heteroglaux blewitti", "Lepidochelys kempii", "Oryx dammah", "Brachylophus vitiensis", "Hippocampus capensis", "Tolypeutes tricinctus", "Bradypus pygmaeus", "Strigops habroptilus", "Zaglossus", "Spheniscus demersus", "Pyrrhosoma elisabethae", "Helarctos malayanus", "Scarus guacamaia", "Camelus bactrianus", "Ornithoptera croesus", "Struthio camelus molybdophanes", "Ailurus fulgens", "Tapirus indicus", "Propithecus diadema", "Lynx pardinus", "Dicerorhinus sumatrensis", "Catagonus wagneri", "Okapia johnstoni", "Nycticebus javanicus", "Beatragus hunteri", "Mandrillus leucophaeus"],
                animalRange: ["Indonesia / Malaysia", "Gulf of California", "Southeast Brazil", "Colombia", "India", "Gulf of Mexico", "North Africa", "Fiji", "South Africa", "Brazil", "Isla Escudo de Veraguas, Panama", "New Zealand", "New Guinea", "South Africa", "Greece / Southern Albania", "Southeast Asia", "Carribean / Bermuda", "China / Mongolia", "Maluku, Indonesia", "Horn of Africa", "Himalayas / Southwest China", "Sumatra / Malaysia / Thailand", "Eastern Madagascar", "Iberian Peninsula", "Sumatra / Borneo / Malay Peninsula", "Paraguay / Bolivia / Argentina", "Democratic Republic of the Congo", "Java, Indonesia", "Somalian Border", "Nigeria / Cameriib / Bioko Island"],
                translatedAnimalRange: ["印度尼西亚/马来西亚", "加利福尼亚湾", "巴西东南部", "哥伦比亚", "印度", "墨西哥湾", "北非", "斐济", "南非", "巴西", "埃斯库多德岛贝拉瓜斯/巴拿马", "新西兰", "新几内亚", "南非", "希腊/南阿尔巴尼亚", "东南亚", "加勒比/百慕大", "中国/蒙古", "摩鹿加群岛/印度尼西亚", "非洲之角", "喜马拉雅/中国西南", "苏门答腊/马来西亚/泰国", "东马达加斯加", "伊比利亚半岛", "苏门答腊/婆罗洲/马来半岛", "巴拉圭/玻利维亚/阿根廷 ", "刚果民主共和国", "爪哇/印度尼西亚", "索马里边界", "尼日利亚/ Cameriib / 比奥科岛"],
                animalCharity: ['<a class="line-link red offsite" target="_blank" href="http://rangkong.org/"><span></span>Rangkong</a>', '<a class="line-link red offsite" target="_blank" href="http://vaquita.tv"><span></span>Conservation</a>', '<a class="line-link red offsite" target="_blank" href="http://www.savetheliontamarin.org/"><span></span>Save the GLT</a>', '<a class="line-link red offsite" target="_blank" href="https://www.rainforesttrust.org/projects/complete-projects/preventing-extinction-golden-poison-frog/"><span></span>Rainforest Trust</a>', '<a class="line-link red offsite" target="_blank" href="http://www.edgeofexistence.org/birds/species_info.php?id=1934"><span></span>Further info</a>', '<a class="line-link red offsite" target="_blank" href="http://www.conserveturtles.org/seaturtleinformation.php?page=kemps-ridley"><span></span>Sea Turtle Conservancy</a>', '<a class="line-link red offsite" target="_blank" href="http://www.saharaconservation.org/?Scimitar-horned-Oryx-Chad"><span></span>Sahara Fund</a>', '<a class="line-link red offsite" target="_blank" href="http://taronga.org.au/animals-conservation/breeding-programs/global-breeding-programs/fijian-crested-iguana-breeding"><span></span>Breeding Program</a>', '<a class="line-link red offsite" target="_blank" href="http://seahorse.fisheries.ubc.ca/species/capensis"><span></span>Project Seahorse</a>', '<a class="line-link red offsite" target="_blank" href="http://www.acaatinga.org.br/english/index.php/2014/i-help-to-save-the-three-banded-armadillo/"><span></span>Caatinga</a>', '<a class="line-link red offsite" target="_blank" href="http://www.zsl.org/conservation/regions/americas/pygmy-three-toed-sloth-conservation"><span></span>ZSL Initiative</a>', '<a class="line-link red offsite" target="_blank" href="http://kakaporecovery.org.nz/"><span></span>Kakapo Recovery</a>', '<a class="line-link red offsite" target="_blank" href="http://www.edgeofexistence.org/mammals/species_info.php?id=1395"><span></span>Further info</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sanccob.co.za/"><span></span>SANCCOB initiative</a>', '<a class="line-link red offsite" target="_blank" href="http://www.iucnredlist.org/details/60274/0"><span></span>Further Info</a>', '<a class="line-link red offsite" target="_blank" href="http://sunbears.wildlifedirect.org/"><span></span>BNSBCC Iniative</a>', '<a class="line-link red offsite" target="_blank" href="http://blog.nature.org/science/2014/07/31/parrotfish-caribbean-coral-reef-iucn-report/"><span></span>Nature Conservancy</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sospecies.org/sos_projects/pilot_projects/edge_of_existence/wild_camel/"><span></span>SOS Wild Camel</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sawai-ecotourism.com/rainforest-conservation/"><span></span>Sawai Ecotourism</a>', '<a class="line-link red offsite" target="_blank" href="http://www.awf.org/"><span></span>AWF Foundation</a>', '<a class="line-link red offsite" target="_blank" href="http://redpandanetwork.org/"><span></span>Red Panda Network</a>', '<a class="line-link red offsite" target="_blank" href="http://www.malaytapir.org/"><span></span>Malay Tapir Project</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sadabe.org/whatis.html"><span></span>Sadabe</a>', '<a class="line-link red offsite" target="_blank" href="http://soslynx.org/"><span></span>SOS Lynx</a>', '<a class="line-link red offsite" target="_blank" href="http://www.rhinos.org/rhinos/sumatran-rhino"><span></span>IRF</a>', '<a class="line-link red offsite" target="_blank" href="http://www.worldlandtrust.org/education/species/chacoan-peccary"><span></span>WLT Initiative</a>', '<a class="line-link red offsite" target="_blank" href="http://www.okapiconservation.org"><span></span>Okapi Project</a>', '<a class="line-link red offsite" target="_blank" href="http://www.conservationleadershipprogramme.org/project/javan-slow-loris-project-indonesia/"><span></span>JSL Project</a>', '<a class="line-link red offsite" target="_blank" href="http://www.hirolaconservation.org/"><span></span>Hirola Program</a>', '<a class="line-link red offsite" target="_blank" href="https://www.facebook.com/pages/The-Drill-Project/258035237544233"><span></span>Drill Project</a>'],
                animalCopyOne: ["This glorious hornbill uplisted 3 levels from Near Threatened to <span>Critically endangered</span> in late 2015.", "The greatest threat to the remaining vaquita is incidental death caused by fishing gear.", "Once at a low of 150 in a key habitat, Golden Lion Tamarins suffer from a range of human influences.", "This vivid dart frog is the <span>most poisonous species</span>, but it finds itself under considerable threat.", "The cute and petite Forest Owl suffers from a number of influences upon its small numbers.", "The smallest marine turtle has declined through food and egg exploitation but mainly, accidental <span>capture through shrimp fishing</span>.", "The Scimitar Oryx has immensely <span>charismatic horns</span> which proved too valuable a-source not to be hunted to extinction in the wild.", "Fiji is a fresh paradise for an array of natural wonders such as one of the only <span>colour-morphing</span> Iguanas, the Fiji Crested.", "Unlike many of the species in pieces, the Knysna Seahorse&rsquo;s endangerment is <span>not linked</span> to human activity.", "The Three Banded Armadillo of Brazil is a hard nut to crack – with only Pumas and Jaguars powerful enough to be a predatory threat. ", "The Pygmy Three-toed Sloths are situated on a lone uninhabited, protected island of Panama.", "The evolutionarily distinct Kakapo is one of the many flightless birds which evolved in isolation without predators in New Zealand.", "The Long-beaked Echidna is one of the longest serving species on Earth but its time may unfortunately finally be coming to an end.", "Once in abundance, the African Penguin’s decline in the past century has occurred with velocity.", "This long and vivid damselfly which bares likeness to the Large Red Damselfly, is restricted to very <span>limited ranges</span>.", "Sun Bears have a delightful necklace pattern accompanied by a long tongue but their existence may unfortunately be a lot shorter.", "A gorgeous array of colours spreads over this large fish but it&rsquo;s this size which helps place it under threat of overfishing.", "With <span>25-30</span> Bactrian Camels to be lost per year if current trends continue, this special specimen has a grim-looking future.", 'Named after <a class="offsite" href="http://en.wikipedia.org/wiki/Alfred_Russel_Wallace" target="_blank"><span></span>Alfred R. Wallace</a>, this butterfly&rsquo;s struggles would sadden the great naturalist.', "The Somali Ostrich, only declared a unique species as recently as 2014, is another unfortunate victim of human influences.", "The Wonderfully playful Red Panda is under threat from the common combination of habitat loss and to a lesser extent, poaching.", "This interesting snouty specimen is yet another unfortunate victim of deforestation and hunting. ", "This critically endangered Sifaka is under threat from hunting for food, but also primarily <span>loss of the rain forest</span> in its range.", "The Iberian Lynx is the world’s rarest cat species and could be the first to become extinct since the Sabre-toothed Tiger.", "Once in abundance in Southeast Asia, the Sumatran Rhinoceros is now critically endangered with 50% per decade lost till the early 90s.", "A range of problems place this Peccary in danger, hunting being the most significant contributor.", "This species which resemble a half-zebra, half-giraffe suffers from the usual combination of habitat loss and poaching.", "Wide-eyed and little wonder as like other Loris species, it has been <span>over-exploited</span> by humans.", "This critically endangered antelope stares extinction in the eyes, and would be the <span>first mammalian loss</span> in Africa in modern history.", "With a range of less than 220km&sup2;, this stocky primate is listed as <span>highest priority</span> African primate."],
                translatedAnimalCopyOne: ["盔犀鸟的保护动物等级在2015年下半年从近危险直接上升了3个级别到<span>极度濒危</span>", "小头鼠海豚最大的威胁是渔具造成的附带伤害", "金狮狨的主要栖息地曾一度低于150个，他们饱受着人类的影响", "这活灵活现的动物是世界上<span>最毒的物种</span>，但它们渐渐发现自己正受到相当大的威胁", "这可爱又灵巧的林斑小鸮种群数目已经不多于250头", "这种海龟通常因为捕虾而被意外捕捞", "弯刀羚羊有着<span>巨大旖旎的角</span>代表着它的价值，直接导致了它在野外被捕杀", "斐济是一系列自然奇观的天堂，例如斐济冠状鬣蜥就是唯一的<span>变色</span>鬣鳞蜥", "与许多物种不同，克尼斯纳海马的濒危是<span>不与</span>人类活动有关的", "巴西犰狳是一种具有坚硬外壳的动物，只有美洲虎、美洲狮才能对它构成威胁", "三指树獭生活在巴拿马群岛的无人区", "进化独特的鸮鹦鹉生活在新西兰与世隔绝没有捕食者的地方，它们是许多不会飞的鸟类之一", "长喙针鼹鼠是地球上最早的哺乳类动物之一，可不幸的是它们最终要迎来灭绝", "非洲企鹅在过去的一个世纪数量快速下降", "这种长而生动的蜻蜓与大红蜻蜓相似，只有<span>有限的活动范围</span>", "马来熊是现存体型最小的熊,它的长舌头富有代表性，全球种群数量正在快速下降", "缤纷的颜色散布在这条鱼身上，但它的大小使它受到过度捕捞的威胁", "如果目前的趋势继续，每年将减少<span>25-30</span>头双峰驼，这个特殊的标本有着严峻的未来", "因为Alfred R. Wallace而得名，这只蝴蝶的挣扎会让自然主义者感到担忧", "索马里鸵鸟在2014年被列为保护动物，它是另一个不幸受到人类影响的物种", "奇妙俏皮的红熊猫受到栖息地丧失的威胁，并在一定程度受到偷猎的影响", "马来文貘是砍伐森林、狩猎的受害者", "这个极度濒危的冕狐猴受到寻找食物的威胁，但也主要因为<span>雨林的破坏</span>", "伊比利亚猞猁是世界上最稀有的猫科动物，也可能是继剑齿虎以来第一个灭绝的", "苏门答腊犀牛现在危急濒危，自从90年代初，每十年损失50％", "一系列的问题导致草原西貒处于危险之中，狩猎则是其中最重要的威胁", "这种类似斑马/长颈鹿的物种受到栖息地丧失和偷猎的威胁", "爪哇懒猴有着硕大的眼睛，就像其他的狐猴一样，它已被人类过渡剥削", "这种极度濒危的羚羊就在此时慢慢灭绝，并且将是现代史中非洲<span>第一大哺乳动物的消亡</span>", "生存面积小于220平方公里，这种矮壮的动物在非洲灵长类动物中列为<span>最高优先级</span>"],
                animalCopyTwo: ["Its highly-prized casque is unique in that it is almost completely solid and <span>rich in ivory</span> &ndash; leading to excessive hunting in recent years which is set to increase, with China the largest consumer of the casque. ", "Vaquitas are known to die in gillnets set for sharks, rays, mackerels and chano, as well as in <span>illegal and occasionally permitted</span> gillnet sets for an endangered <i>fish called Totoaba.</i> ", "Extensive programmes have had fair success in reversing the trend <span>caused primarily by habitat loss</span> but also logging, mining, poaching and animal trade.", "Deforestation in the name of agricultural development, humans settling in the frog’s range, logging, and planting as well as spraying for crops have all had a combined effect.", "Illegal <span>deforestation</span> and <span>forest fires</span> have a major impact, and encroachment from humans for various reasons is a consistent problem.", "Kemp’s Ridley nests are unfortunately easy for both direct <span>predators and humans to find</span>, making growth of the species sporadic at best.", "Before this hunting almost saw off the species, <span>climate change</span> in its previous range dramatically affected numbers, when the range Sahara dried up.", "However, these forests have undergone consistent and intense degradation through burning, grazing, human settlement and tourism development meaning forestry and beach loss have cost the Iguana dearly.", "This seahorse rather, resides in such a limited range that events occurring to these estuaries would be catastrophic for the seahorse. ", "But this species finds itself vulnerable from the <span>loss of habitat</span> to allow space for livestock and hunting for food.", "However, the lack of residents on the island unfortunately doesn’t stop visitors and plans to develop tourism on the island causes problems for the Sloth&rsquo;s habitat. ", "The lack of defences meant that when humans arrived in the range 700 years ago, it was <span>hunted</span> to intensely small numbers followed by further decreases when <span>pest control predators</span> for other species were introduced in the late 1800s.", "It hunts using its spiky tongue to find and digest worms, but is itself on the receiving end of <span>hunting, by humans for food</span>. It has also suffered from habitat loss in ranges now densely populated by locals. ", "Climate change and pollution from events such as <span>oil spills</span> has had an effect, but depletion of eggs via over-collection and intense fishing in the area has also impacted their status.", "This aspect puts the fly under threat as climate change can affect the already <span>poorly managed brooks</span> very easily, and expanding tourism increases the threat.", "Hunting and deforestation impact to varying degrees depending on the range, with <span>forest fires, developments and logging</span> all contributing to lost habitat.", "This fish coasts into shallow water which increases the risk of being caught by fisherman, but its <span>habitat has also declined</span> rapidly over the past 25 years.", "Consistent hunting over the past 30 years has caused significant decline while predation from wolves in the range adds to the problems faced.", "Located mainly in the Maluku Islands, the lowland areas of forest where the Butterfly resides has been greatly reduced by logging. The deforestation continues today within commercial context.", "With a variety of questionable purposes such as water <span>containers, ornaments and protective religious symbols</span>, their eggs are intensely exploited.", "<span>Human numbers in the Panda’s range</span> doubled towards the end of the last Century with previous habitat being turned into housing, farmland and other developments.", "Much of the <span>range is uncontrolled</span>, allowing illegal logging to continue, and in Sumatra – its stronghold range – it suffers similar issues to other Sumatra-based species from consistent, relentless <span>loss of forestry</span>.", "Despite in theory providing protection, national parks are away from governmental areas meaning that encroaching within the range from local peoples is unmanaged.", "<span>The Lynx’s story is tragic</span>. Rabbits declined dramatically, taking away the most important food storage – <span>Myxomotosis</span> spread far and wide through France and Australia, introduced in 1952 by a French gardener attempting to control pests.", "Rhinos’ body parts sell for various applications but a horn is <span>worth around &euro;27,000</span>, a major prize for poaching with uses including fabled poison protection.", "In Argentina deforestation has soared with <span>33% lost in just 15 years</span>, having a huge impact on Peccary who disappear without more than 87% of cover is left.", "<span>Logging and human settlement</span> within the previous range has impacted a steady decline since the mid 90s.", "Easily captured through its slow movement, it is captured and used under the mythical pretence that it has <span>healing or magical properties</span>.", 'Predation, resource competition, poaching and diseases <a class="offsite" target="_blank" href="http://en.wikipedia.org/wiki/Rinderpest"><span></span>Rinderpest</a> and Tuberculosis continue to decline numbers.', "Human development within the range as well as general habitat loss mixed with illegal hunting has meant declining numbers for many decades."],
                animalCopyThree: ["Logging and agricultural conversion is contributing to the ominous pressure of hunting, and restoration is complicated further by the hornbill&rsquo;s <span>slow reproductive cycle</span>.", "It is believed that about 30 vaquitas are <br/>lost to these threats each year.", "De-forestation limits purported success of re-introduction initiatives. Just <span>8% of original forest</span> habitat size remains, resulting in behavioural effects such as in-breeding.", 'Only one <a class="offsite" target="_blank" href="http://en.wikipedia.org/wiki/Liophis"><span></span>Snake predator</a> is unaffected by its toxin and terrible taste, but this hasn&rsquo;t deterred international trade, though sparse', "The species is low on the food chain with various predators adding to issues, as well as it being <span>hunted for eggs and body parts</span> which are used for items such as drums.", "Racoons, Skunks and Coyotes and a portfolio of sea and land-based species find the nests easy as easy prey. ", "Since European settlement within the Oryx&rsquo;s range, numbers have only declined further.", "Their small frame signals <span>easy prey</span> for beasts such as Black Rats and feral Cats, who also utilise Iguana eggs.", "<span>Floods occur</span> within some of the 3 estuaries – the Knysna, Swatvlei and Keurbooms – and mis-management continues these kind of occurrences could lead to <span>total extinction</span>.", "The armadillo was the mascot of the <span>2014 World Cup in Brazil</span>, yet only 3% of its range lies within protected areas.", "This sloth has become something of a <span>flagship species</span>, resulting in interested humans visiting the island to capture them <span>for captivity</span>.", "Looking extinction in the eyes, the Kakapo is a rare recent success story and numbers now continue to <span>grow slowly</span> through an extensive recovery program.", "A further development in the form of a <span>nickel mine</span> is being planned in an area with a major population of the Echidna.", 'One <a class="offsite" target="_blank" href="http://en.wikipedia.org/wiki/MV_Treasure_oil_spill#Effects_of_the_spill"><span></span>oil spill in June 2000</a> caused a wipeout of 40% of the entire species. If that proportion of loss were to happen to humans today, it would equate to 2.9 billion people.', "Water pollution and replacement by concrete have a huge impact on the fly’s habitat, while recent dry summers have at times dried out the brooks completely.", "Hunting is actually illegal in all of the Bear’s range but unfortunately as is so often the case uncontrolled, where some areas have <span>seen populations halve</span> in over two decades.", "The quality of conditions of habitat which remains – especially <span>coral reefs</span> – is also declining, which Parrotfish use for food and shelter.", "The Chinese range of camels is being mined along with other development work, while Mongolia <span>will lose 84%</span> of its current population by 2033.", "Mosquitos in the area have also posed a problem indirectly – as they are fought off <span>by insecticides</span> which also affect this beautiful Birdwing.", "Direct hunting for food, sport, feather usage for leather and exhaustion through the chase all lead to a very grim future, while the usual case of habitat loss causes further issues.", "Human hunting is invariably accidental, though in places the fur is <span>used for caps and other apparel</span>, whilst inbreeding depression adds another threat.", "Hunting pressure has increased by the decline of other hunted species within the range still left, though is currently a secondary threat.", "When hunted, its fur is used for trade and the meat being used for food.", "Little did they know the disastrous effect this would have on such a tremendous species.", "Sumatra also has <span>heavy deforestation</span> occurring, but other aspects such as in-breeding depression look to have an even heavier price.", "Rounding off these causes for concern is a <span>mysterious disease</span> which has troubled this species for decades.", 'Complete protection in the Congo and the initiative <a class="offsite" target="_blank" href="http://www.okapiconservation.org"><span></span>Okapi Conservation Project</a> symbolise the very real threat this species faces.', "Also kept as an exotic pet, humans have also encroached upon the range and the species looks extinction in the eye.", "A sanctuary has recently been put in place with protection from outside influences and supplies a glimmer of light for Hirola&rsquo;s future.", "The final 30th pieces is represented by a number of <span>just 3,000 Drills</span> believed to be left, with a highest estimate of 8,000."]
            };
            e.exports = t
        }, function (e, a) {}, function (e, a, n) {
            "use strict";
            function t(e, a) {
                if (!(e instanceof a))
                    throw new TypeError("Cannot call a class as a function")
            }
            var s = function () {
                function e(e, a) {
                    for (var n = 0; n < a.length; n++) {
                        var t = a[n];
                        t.enumerable = t.enumerable || !1,
                        t.configurable = !0,
                        "value" in t && (t.writable = !0),
                        Object.defineProperty(e, t.key, t)
                    }
                }
                return function (a, n, t) {
                    return n && e(a.prototype, n),
                    t && e(a, t),
                    a
                }
            }
            ();
            n(1);
            var i = n(0),
            o = function () {
                function e(a) {
                    t(this, e),
                    this.$e = $("#" + a),
                    this.nameArr = i.animalList,
                    this.n = 0,
                    this.$startBtn = $("#start"),
                    this.timer = null,
                    this.init()
                }
                return s(e, [{
                            key: "init",
                            value: function () {
                                var e = this;
                                this._resize(),
                                this._initEvent(),
                                this._initData(),
                                window.onload = function () {
                                    e._preloaderSeq()
                                }
                            }
                        }, {
                            key: "_initEvent",
                            value: function () {
                                var e = this;
                                window.onresize = this._resize.bind(this),
                                this._setStateX(),
                                this._setState_X(),
                                this._setShimmer(),
                                this.$startBtn.click(function () {
                                    $(".intro-content").fadeOut(300, function () {
                                        $(document.body).removeClass("show-title")
                                    }),
                                    $(document.body).removeClass("title"),
                                    $(document.body).addClass(e.nameArr[e.n]),
                                    $("#animal-name").text(i.translatedAnimalNames[e.n]),
                                    $(".prev .popout").text(i.translatedAnimalNames[e.nameArr.length - 1]),
                                    $(".next .popout").text(i.translatedAnimalNames[e.n + 1]),
                                    setTimeout(function () {
                                        $(document.body).removeClass("preloader-layer"),
                                        $(document.body).addClass("animation-lock")
                                    }, 1800),
                                    $(".next").on("click", function () {
                                        e.next()
                                    }),
                                    $(".prev").on("click", function () {
                                        e.prev()
                                    })
                                }),

                                $(document.body).on("mousewheel DOMMouseScroll", function (event) {

                                    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
                                    (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1)); // firefox
                                    if ($(".animation-lock").length) {
                                        delta > 0 ? e.prev() : e.next(); //delta > 0向上滚动,delta < 0向下滚动
                                    }

                                }),
								$("#start").click(function (){
									// SOUNDS.init()
									// SOUNDS.play('ambientloop')
									 document.getElementById("audio").play()
									
								}),

                                $(".help").click(function () {
                                    $(document.body).removeClass("animation-lock"),
                                    e.$e.addClass("no-delay"),
                                    $("#scientific-name").text(i.animalScientificName[e.n]),
                                    $("#range").text(i.translatedAnimalRange[e.n]),
                                    $(".why-info").eq(0).html(i.translatedAnimalCopyOne[e.n]),
                                    $(".why-info").eq(1).html(i.animalCopyTwo[e.n]),
                                    $(".why-info").eq(2).html(i.animalCopyThree[e.n]),
                                    $(document.body).addClass("smash"),
                                    setTimeout(function () {
                                        $(".content-wrapper").addClass("show")
                                    }, 1e3)
                                }),
                                $(".direct-stats").click(function () {
                                    $(document.body).removeClass("animation-lock"),
                                    e.$e.addClass("no-delay"),
                                    $("#scientific-name").text(i.animalScientificName[e.n]),
                                    $("#range").text(i.translatedAnimalRange[e.n]),
                                    $(".why-info").eq(0).html(i.translatedAnimalCopyOne[e.n]),
                                    $(".why-info").eq(1).html(i.animalCopyTwo[e.n]),
                                    $(".why-info").eq(2).html(i.animalCopyThree[e.n]),
                                    $(document.body).addClass("smash"),
                                    setTimeout(function () {
                                        $(".content-wrapper").addClass("show")
                                    }, 1e3)
                                }),
                                $(".content-info .close").click(function () {
                                    e.$e.removeClass("no-delay"),
                                    setTimeout(function () {
                                        $(".content-wrapper").removeClass("show"),
                                        $(document.body).removeClass("smash"),
                                        setTimeout(function () {
                                            $(document.body).addClass("animation-lock")
                                        }, 1700)
                                    }, 100)
                                }),
                                $(".main-nav .nav-btn").eq(2).click(function () {
                                    $("#audio")[0].muted ? ($("#audio")[0].muted = !1, $(".main-nav .nav-btn").eq(2).parent().removeClass("muted")) : ($("#audio")[0].muted = !0, $(".main-nav .nav-btn").eq(2).parent().addClass("muted"))
                                }),
                                $(".main-nav .nav-btn").eq(1).click(function () {
                                    e.timer ? ($(".main-nav .nav-btn").eq(1).removeClass("stop"), e.autoPlay(!1)) : ($(".main-nav .nav-btn").eq(1).addClass("stop"), e.autoPlay(!0))
                                }),
                                this._linkEvent(),
                                this._allAnimalEvent()
                            }
                        }, {
                            key: "_allAnimalEvent",
                            value: function () {
                                var e = this;
                                $("#all-animals-btn").click(function () {
                                    $(document.body).removeClass("animation-lock"),
                                    $(document.body).addClass("all-animals"),
                                    $(".hover-detector").removeClass("inactive").find("div").removeClass("active-animal").eq(e.n).addClass("active-animal"),
                                    $(".animal-nav-content").removeClass("inactive"),
                                    setTimeout(function () {
                                        $(".hover-detector").addClass("active"),
                                        $(".animal-nav-content").addClass("active")
                                    }, 1200),
                                    $(".main-nav > .close").addClass("active")
                                }),
                                $(".main-nav > .close").click(function () {
                                    $(".hover-detector").removeClass("active").addClass("inactive"),
                                    $(".animal-nav-content").removeClass("active").addClass("inactive"),
                                    $(".main-nav > .close").removeClass("active"),
                                    $(document.body).removeClass("all-animals"),
                                    setTimeout(function () {
                                        $(document.body).addClass("animation-lock")
                                    }, 1500)
                                }),
                                $(".random-animal-btn").click(function () {
                                    $(".hover-detector").removeClass("active").addClass("inactive"),
                                    $(".animal-nav-content").removeClass("active").addClass("inactive"),
                                    $(".main-nav > .close").removeClass("active"),
                                    $(document.body).removeClass("all-animals"),
                                    e.random()
                                }),
                                $(".hover-detector").find("div").each(function (a, n) {
                                    $(n).hover(function (e) {
                                        $(".title-content").addClass("inactive"),
                                        $("#show-stage").find(".pieces").removeClass("active").eq($(e.target).index()).addClass("active"),
                                        $(".all-animals-title").find("li").eq($(e.target).index()).addClass("active")
                                    }, function () {
                                        $(".title-content").removeClass("inactive"),
                                        $("#show-stage").find(".pieces").removeClass("active"),
                                        $(".all-animals-title").find("li").removeClass("active")
                                    }),
                                    $(n).click(function (a) {
                                        $(".hover-detector").removeClass("active").addClass("inactive"),
                                        $(".animal-nav-content").removeClass("active").addClass("inactive"),
                                        $(".main-nav > .close").removeClass("active"),
                                        $(document.body).removeClass("all-animals"),
                                        e.n = $(a.target).index(),
                                        e.show()
                                    })
                                }),
                                $(".all-animals-title").find("li").each(function (a, n) {
                                    "small-nav" === document.documentElement.className && $(n).click(function (a) {
                                        var n = "LI" === a.target.nodeName ? a.target : a.target.parentNode;
                                        $(".animal-nav-content").removeClass("active").addClass("inactive"),
                                        $(".main-nav > .close").removeClass("active"),
                                        $(document.body).removeClass("all-animals"),
                                        $(".hover-detector").removeClass("active").addClass("inactive"),
                                        e.n = $(n).index(),
                                        e.show()
                                    })
                                })
                            }
                        }, {
                            key: "_linkEvent",
                            value: function () {
								var e = this;
                                $(".overlay .close").click(function () {
                                    $(".overlay > div").hide(0).removeClass("active"),
                                    $(".overlay").removeClass("active")
                                }),
                                $(".link .about").click(function () {
                                    $(".overlay").addClass("active"),
                                    $(".overlay .about").show(0).addClass("active")
                                }),
                                $(".link .how").click(function () {
                                    $(".overlay").addClass("active"),
                                    $(".overlay .how").show(0).addClass("active")
                                }),
                                $(".link .sources").click(function () {
                                    $(".overlay").addClass("active"),
                                    $(".overlay .sources").show(0).addClass("active")
                                }),
                                $(".link .share").click(function () {
                                    $(".overlay").addClass("active"),
                                    $(".overlay .shring-goodies").show(0).addClass("active")
                                }),
                                $(".animal-info .wallpaper").click(function () {
									//i.translatedAnimalNames[e.n]表示第n+1个动物的汉语名称
                                    var t = "下载 " + i.translatedAnimalNames[e.n] + " 壁纸";
                                    $(".overlay .download h2").text(t);
                                    var macImg = "assets/img/wallpapers/2560x1600/2560x1600_" + i.animalList[e.n] + ".png",
                                    largeImg = "assets/img/wallpapers/1920x1080/1920x1080_" + i.animalList[e.n] + ".png",
                                    smallImg = "assets/img/wallpapers/1366x768/1366x768_" + i.animalList[e.n] + ".png",
                                    ipadImg = "assets/img/wallpapers/1024x1024/1024x1024_" + i.animalList[e.n] + ".png";
                                    $(".overlay .download img").attr("src", smallImg),
                                    $(".overlay .download li:nth-child(1) a").attr("href", macImg),
                                    $(".overlay .download li:nth-child(2) a").attr("href", largeImg),
                                    $(".overlay .download li:nth-child(3) a").attr("href", smallImg),
                                    $(".overlay .download li:nth-child(4) a").attr("href", ipadImg),
                                    $(".overlay").addClass("active"),
                                    $(".overlay .download").show(0).addClass("active")

                                }),
                                $(".footer-nav").click(function () {
                                    "mobile-footer-active" === $("footer")[0].className ? $("footer").removeClass("mobile-footer-active") : $("footer").addClass("mobile-footer-active")
                                })
                            }
                        }, {
                            key: "_initData",
                            value: function () {
                                $(".all-animals-title").find("h2").each(function (e, a) {
                                    $(a).text(i.translatedAnimalNames[e])
                                })
                            }
                        }, {
                            key: "autoPlay",
                            value: function (e) {
                                var a = this;
                                e ? (this.next(), this.timer = setInterval(function () {
                                            a.next()
                                        }, 4500)) : (clearInterval(this.timer), this.timer = null)
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var e = this;
                                $(".prev .popout").text(i.translatedAnimalNames[this.n - 1 < 0 ? i.translatedAnimalNames.length - 1 : this.n - 1]),
                                $(".next .popout").text(i.translatedAnimalNames[this.n + 1 >= i.translatedAnimalNames.length ? 0 : this.n + 1]),
                                $(document.body).removeClass(),
                                $(".animal-info").addClass("text-change"),
                                setTimeout(function () {
                                    $(".pieces-no").text(e.n + 1),
                                    $("#animal-name").text(i.translatedAnimalNames[e.n]),
                                    $(".animal-info").removeClass("text-change")
                                }, 300),
                                $(document.body).addClass(this.nameArr[this.n]),
                                setTimeout(function () {
                                    $(document.body).addClass("animation-lock")
                                }, 2e3)
                            }
                        }, {
                            key: "next",
                            value: function () {
                                $(document.body).removeClass("animation-lock"),
                                this.n++,
                                this.n >= this.nameArr.length && (this.n = 0),
                                this.show()
                            }
                        }, {
                            key: "prev",
                            value: function () {
                                $(document.body).removeClass("animation-lock"),
                                this.n--,
                                this.n < 0 && (this.n = this.nameArr.length - 1),
                                this.show()
                            }
                        }, {
                            key: "random",
                            value: function () {
                                $(document.body).removeClass("animation-lock"),
                                this.n = Math.floor(Math.random() * this.nameArr.length),
                                this.show()
                            }
                        }, {
                            key: "_resize",
                            value: function () {
                                var e = .9 * $(window).innerWidth(),
                                a = e * (2 / 3);
                                $(window).innerWidth() < 700 ? $(document.documentElement).addClass("small-nav") : $(document.documentElement).removeClass("small-nav"),
                                this.$e.width(e),
                                this.$e.height(a)
                            }
                        }, {
                            key: "_preloaderSeq",
                            value: function () {
                                var e = this,
                                a = $(document.body);
                                setTimeout(function () {
                                    a.addClass("ready").removeClass("preloader"),
                                    $(".loading-progress").addClass("active"),
                                    e._introSeq(),
                                    setTimeout(function () {
                                        a.addClass("preAni"),
                                        setTimeout(function () {
                                            a.removeClass("preAni"),
                                            setTimeout(function () {
                                                a.removeClass("ready").addClass("title"),
                                                setTimeout(function () {
                                                    a.addClass("show-title")
                                                }, 2e3)
                                            }, 2300)
                                        }, 1e4)
                                    }, 4500)
                                }, 3e3)
                            }
                        }, {
                            key: "_introSeq",
                            value: function () {
                                var e = $(".loading-intro").find("p");
                                $(e[0]).addClass("show"),
                                setTimeout(function () {
                                    $(e[0]).removeClass("show"),
                                    $(e[1]).addClass("show"),
                                    setTimeout(function () {
                                        $(e[1]).removeClass("show"),
                                        $(e[2]).addClass("show"),
                                        setTimeout(function () {
                                            $(e[2]).removeClass("show"),
                                            $(e[3]).addClass("show"),
                                            setTimeout(function () {
                                                $(e[3]).removeClass("show")
                                            }, 4e3)
                                        }, 4e3)
                                    }, 4e3)
                                }, 4e3)
                            }
                        }, {
                            key: "_setStateX",
                            value: function () {
                                var e = $(document.body);
                                setInterval(function () {
                                    e.removeClass("state3"),
                                    setTimeout(function () {
                                        e.addClass("state1")
                                    }, 1e3),
                                    setTimeout(function () {
                                        e.removeClass("state1").addClass("state2")
                                    }, 2500),
                                    setTimeout(function () {
                                        e.removeClass("state2").addClass("state3")
                                    }, 3500)
                                }, 5e3)
                            }
                        }, {
                            key: "_setState_X",
                            value: function () {
                                setInterval(function () {
                                    var e = $(document.body);
                                    setTimeout(function () {
                                        e.addClass("state-1")
                                    }, 1e3),
                                    setTimeout(function () {
                                        e.removeClass("state-1")
                                    }, 1500),
                                    setTimeout(function () {
                                        e.addClass("state-1")
                                    }, 1900),
                                    setTimeout(function () {
                                        e.removeClass("state-1")
                                    }, 2500)
                                }, 3e3)
                            }
                        }, {
                            key: "_setShimmer",
                            value: function () {
                                var e = $(document.body);
                                setInterval(function () {
                                    setTimeout(function () {
                                        e.addClass("shimmer")
                                    }, 2e3),
                                    setTimeout(function () {
                                        e.removeClass("shimmer")
                                    }, 6700)
                                }, 7e3)
                            }
                        }
                    ]),
                e
            }
            ();
            document.addEventListener("DOMContentLoaded", function () {
                new o("show-stage")
            })
        }
    ]);





 SOUNDS = {
    btn: $("<a>").attr("href", "#").attr("id", "toggle-mute").addClass("toggle-mute").text(""),
    looping: null,
    fading: null,
    init: function () {
        soundManager.setup({
            url: "swf/",
            debugMode: !1,
            waitForWindowLoad: !1,
            useHighPerformance: !0,
            useHTML5Audio: !0,
            flashVersion: 9,
            multiShot: !0,
            onready: SOUNDS.onSoundManagerReady,
            ontimeout: function () {}
        })
    },
    onSoundManagerReady: function () {
        soundManager.createSound({
            id: "ambientloop",
            url: "assets/audio/ambient-loop-piano.mp3",
            autoLoad: !0,
            multiShot: !0,
            onload: function () {
                SOUNDS.playLoop("ambientloop", 44500)
            }
        }),
        soundManager.createSound({
            id: "hover",
            url: "assets/audio/hover_ui.mp3",
            autoLoad: !0,
            onload: function () {}
        }),
        soundManager.createSound({
            id: "softhover",
            url: "assets/audio/hover_ui.mp3",
            autoLoad: !0,
            onload: function () {
                this.setVolume(50)
            }
        }),
        soundManager.createSound({
            id: "smashpiano",
            url: "assets/audio/smash.mp3",
            autoLoad: !0,
            onload: function () {
                this.setVolume(30)
            }
        })
    },
    play: function (t) {
        soundManager.play(t)
    },
    playLoop: function (t, a) {
        SOUNDS[t + "looping"] || (SOUNDS[t + "looping"] = !0, SOUNDS.play(t), SOUNDS["looping" + t] = setInterval(function () {
                    SOUNDS.play(t)
                }, a))
    },
    stopLoop: function (t) {
        clearInterval(SOUNDS["looping" + t]),
        SOUNDS[t + "looping"] = !1
    },
    setVolume: function (t, a) {
        var e = soundManager.getSoundById(soundID);
        e.setVolume(a)
    },
    fadeIn: function (t) {
        if ("out" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (e >= 100)
                    return SOUNDS.fading = "", !1;
                SOUNDS.fading = "in",
                a.setVolume(Math.min(100, e + 10)),
                setTimeout(function () {
                    SOUNDS.fadeIn(t)
                }, 50)
            }
        }
    },
    fadeOut: function (t) {
        if ("in" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (40 >= e)
                    return SOUNDS.fading = "", !1;
                SOUNDS.fading = "out",
                a.setVolume(Math.max(0, e - 10)),
                setTimeout(function () {
                    SOUNDS.fadeOut(t)
                }, 50)
            }
        }
    },
    toggleMute: function (t) {
        t.preventDefault(),
        SOUNDS.btn.hasClass("muted") ? SOUNDS.unmute() : SOUNDS.mute()
    },
    mute: function (t) {
        soundManager.mute(t),
        SOUNDS.btn.addClass("muted")
    },
    unmute: function (t) {
        soundManager.unmute(t),
        SOUNDS.btn.removeClass("muted")
    }
};

