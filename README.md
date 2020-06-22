# 介绍
该作品原本是阿姆斯特丹设计师 `Bryan James`用纯CSS技术表现出30种动物的碎片拼图形象，这30动物，非常的可爱，但不幸的是，它们都是濒临灭绝的动物，它们的生存情况正面临着危机。 你能看到它们在挣扎，它们在反抗... 它们在这个互动的作品里申诉...


点击打开[ 30个物种，30种碎片拼图 (“Species in Pieces”互动式濒危动物展览) ](http://species-in-pieces.com/)的网站主页   


![灰盔鸟](https://img-blog.csdnimg.cn/20200620094024217.gif)  

<br>
<br>
  
  
空灵的背景音乐引入了颜色饱满的多边形图案，配合着30种濒危动物的文字介绍。伴随30只生命样貌的切换，一幅幅几何状组合的破碎，设计师试图展现过去10年来栖息地遭受破坏是如何把动物推向灭绝的边缘——曾是 2014 年巴西世界杯吉祥物的三带犰狳（ Three-Banded Armadillo of Brazil）数量减少了 30%，新几内亚岛上的原针鼹鼠（ Long-Beaked Echidna ）因人类的狩猎而在过去 35-40 年间减少近 80%。

![鸮鹦鹉](https://img-blog.csdnimg.cn/2020062009454617.gif)
![克尼斯纳海马](https://img-blog.csdnimg.cn/20200620094545876.gif)
![小头鼠海豚](https://img-blog.csdnimg.cn/20200620094545423.gif)


从择选物种、设计图形到搜集生存处境等数据，James 历时半年，终于完成了这场展览。在接受《赫芬顿邮报》（The Huffington Post）的采访时，他表示自己深信唯有看见，才有机会理解。他希望借用看似干瘪的的数位科技棱角，营造出特殊的美感，来表达在地球上生存着的美好生命随时有可能消失剥离的意象。而之所以叫`“30 PIECES”`，是因为James起初在编程的时候，第一幅成型的作品刚刚好是30片三角形拼接而成。
 <br>
 
#  设计实现

这个作品展示的是 30 个濒危动物，没有使用 `canvas` 绘制，而是只使用了 `CSS/ clip-path `这个属性，如下：

```css
clip-path: polygon(49% 0, 95% 65%, 11% 94%);
```

`clip-path `的前身其实是 SVG，所以它理应和 SVG 相似，是以点的坐标相连实现遮罩的， 创建一个小的 Demo 非常简单，只需一个 div，就可以画出千奇百怪的造型，这便是整个项目的基础。

```css
 width: 200px;
height: 200px;
 background-color: #fff88b;
clip-path: polygon(49% 0, 95% 65%, 11% 94%);
```
<br>

## 运动效果实现
如何让它运动呢？ 其实也很简单， 那就是`transition`
是的，这个属性支持 transition 补间动画，只需要这样设置，你的“碎片”就会按照你预想的轨迹运动了。

```css
    div {
     width: 200px;
     height: 200px;
     background-color: #fff88b;
     transition: 1s;
     clip-path: polygon(49% 0, 95% 65%, 11% 94%);
    }
    div:hover {
     clip-path: polygon(49% 19%, 95% 85%, 1% 99%);
    }
```
<br>

## 图形绘制
在一个空白页面放入设计图，通过点击每个点，自动计算到页面左边、顶端的百分比。
![图形绘制](https://img-blog.csdnimg.cn/20200620145331849.png)
**代码如下：**

```javascript
    $('body').on('click', function (e){
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      var shapesoffsetX = $('.polygon-wrap').offset().left;
      var shapesoffsetY = $('.polygon-wrap').offset().top;
      var polygonswidth=$('.polygon-wrap').width();
      var polygonsheight=$('.polygon-wrap').height();
      var shapesmouseX = mouseX - shapesoffsetX;
      var shapesmouseY = mouseY - shapesoffsetY;
      var mousepercentX = shapesmouseX / polygonswidth;
      var mousepercentY = shapesmouseY / polygonsheight;
      var finalmouseX = (mousepercentX) * 100 ;
      var finalmouseY = (mousepercentY) * 100 ;
      var normalisedX = parseFloat(finalmouseX).toFixed(3);
      var normalisedY = parseFloat(finalmouseY).toFixed(3);
      nodecount = nodecount+1;
      if (nodecount < 3) {
        nodescss = nodescss + normalisedX + '% ' + normalisedY + '% ,';
      } else  
      if (nodecount == 3) {
        nodescss = nodescss + normalisedX + '% ' + normalisedY + '% );';
        alert(nodescss);
        nodescss = '-webkit-clip-path: polygon( ';
        nodecount = 0;
      }   
    });
```
<br>

**draw-demo.html**

```html
<!DOCTYPE html">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
    <body>
        <div class="polygon-wrap">
            <img class="feature" src="assets/img/polygon-demo.png" alt="polygon">
            <script src="assets/js/jquery-3.js"></script>
            <script>
                nodescss = '-webkit-clip-path: polygon( ';
                nodecount = 0;
                $(document.body).on('click', function(e) {
                    var mouseX = e.pageX;
                    var mouseY = e.pageY;
                    var shapesoffsetX = $('.polygon-wrap').offset().left;
                    var shapesoffsetY = $('.polygon-wrap').offset().top;
                    var polygonswidth = $('.polygon-wrap').width();
                    var polygonsheight = $('.polygon-wrap').height();
                    var shapesmouseX = mouseX - shapesoffsetX;
                    var shapesmouseY = mouseY - shapesoffsetY;
                    var mousepercentX = shapesmouseX / polygonswidth;
                    var mousepercentY = shapesmouseY / polygonsheight;
                    var finalmouseX = (mousepercentX) * 100;
                    var finalmouseY = (mousepercentY) * 100;
                    var normalisedX = parseFloat(finalmouseX).toFixed(3);
                    var normalisedY = parseFloat(finalmouseY).toFixed(3);
                    nodecount = nodecount + 1;
                    if (nodecount < 3) {
                        nodescss = nodescss + normalisedX + '% ' + normalisedY + '% ,';
                    } else
                    if (nodecount == 3) {
                        nodescss = nodescss + normalisedX + '% ' + normalisedY + '% );';
                        alert(nodescss);
                        console.log(nodescss);
                        nodescss = '-webkit-clip-path: polygon( ';
                        nodecount = 0;
                    }
                });
            </script>
    </body>

</html>
```
>`draw-demo.html`用于获取鼠标点击三个点形成的相对位置坐标用于画三角形,例如`-webkit-clip-path       : polygon(67.3% 25.143%, 68.2% 20.143%, 71.3% 32.714%);`<br>
>需要注意的是需要画其他多边形的话要将`if (nodecount == 3)`修改成你需要的值,如果是四边形就改成`if (nodecount == 4)`<br>
>`draw-demo.html`的相对坐标是相对于`polygon-wrap`这个class的而`species-in-pieces.html	`是相对于`show-stage`这个id, 不同的参照物得到的相对坐标是不一样的

<br>


![在这里插入图片描述](https://img-blog.csdnimg.cn/2020062014554528.png)
当然也有不少问题，点击的精确度并不如预想，图形绘制有间隙，只能通过微调让它对齐，这十分考验人的耐心。

<br>

## 特殊边框的按钮

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200620145853315.png)

像上面这种按钮，实际上是通过元素背景配合伪元素实现的，具体代码如下：

```css
    .btn {
        height: 54px;
        width: 54px;
        border-radius: 50%;
        background: (背景图);
        &::after {
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            width: 44px;
            height: 44px;
            background-color: #64d6e2;
            border-radius: 100px;
        }
    }
```
通过这种方式，在元素内部创建伪元素定位遮盖该元素背景图，就能达到图中的效果。 而 hover 边框变宽，实际上是给元素加了 `transfrom:scale `属性，让元素略微放大，伪元素略微缩小。
<br>

## 动物的微动
动物在运动的时候，非常的细腻，不止一个地方在运动，有时会交替运动，显得十分生动。探究其原理，是类名控制，这就需要设置一个不断循环的定时器，而且要在几个状态间反复切换。代码如下：

```javascript
    setInterval(() => {
          b.removeClass("state3");
          setTimeout(() => {
            b.addClass("state1");
          }, 1000);
          setTimeout(() => {
            b.removeClass("state1").addClass("state2");
          }, 2500);
          setTimeout(() => {
            b.removeClass("state2").addClass("state3");
          }, 3500)
        }, 5000)
```
通过 interval 嵌套 timeout 的方式达到微动状态间的切换，每个类名对应每个动物的不同微动状态。第二种微动状态也如上代码，大同小异，这里不做赘述。
<br>

## 动物碎片的闪烁
动物展示的时候会发现，碎片有闪烁的效果，这是通过伪元素实现的。创建一个 100% 宽高的伪元素，添加一个 animation，让其有一个透明度的变化，达到相当于遮罩层的闪烁。通过 scss 循环，可以方便的设定动画执行延迟。代码如下：

```css
    .pieces{
       content: "";
       display: block;
       width: 100%;
       height: 100%;
       animation: shimmer .8s forwards;
    }
    @keyframes shimmer {
      0% {
        background-color: rgba(255,255,255,0);
      }
      35% {
        background-color: rgba(255,255,255,.1);
      }
      100% {
        background-color: rgba(255,255,255,0);
      }
    }
```
<br>

# 项目代码
- **完整代码地址**

	[https://github.com/keginx/species-in-pieces](https://github.com/keginx/species-in-pieces)
<br>

- **项目结构** 

	```bash
	species-in-pieces# tree
	.
	├── assets
	│   ├── audio  音频文件
	│   │   ├── ambient-loop-piano.mp3
	│   │   ├── hover_ui.mp3
	│   │   ├── none.mp3
	│   │   └── smash.mp3
	│   ├── css   网页css文件
	│   │   └── main.css
	│   ├── fonts  动画特效用到的字体
	│   │   ├── blocextcond.ttf
	│   │   └── blocextcond.woff
	│   ├── img  图片文件
	│   │   ├── 1366x768_vaquita.png
	│   │   ├── svg  可缩放矢量图形
	│   │   │   ├── awwwards.svg
	│   │   │   └── fwa.svg
	│   │   └── wallpapers   所有壁纸图片
	│   │       ├── 1024x1024
	│   │       ├── 1366x768
	│   │       ├── 1920x1080
	│   │       ├── 2560x1600
	│   │       └── all-animals
	│   └── js
	│       ├── jquery-3.js   jquery库
	│       ├── main.js		主要js文件
	│       └── soundmanager2.min.js  声音控制需要的库文件
	├── draw-demo.html 用于获取鼠标后形成的多边形坐标的demo
	├── README.md
	└── species-in-pieces.html		主页
	```
	> `assets/css /main,css  `  是作品动画实现需要用到的样式文件
	>`assets/js/main.js`  是存放自定义函数的主要js文件
<br>

# 参考
[1. http://species-in-pieces.com](http://species-in-pieces.com)

[2. https://www.miaov.com/index.php/news/newsDetail/nid/152](https://www.miaov.com/index.php/news/newsDetail/nid/152)

[3. http://project.microbu.com/161114/dongwu/](http://project.microbu.com/161114/dongwu/)

[4. https://www.webhek.com/post/species-in-pieces.html](https://www.webhek.com/post/species-in-pieces.html)

[5. https://www.techug.com/post/species-in-pieces.html](https://www.techug.com/post/species-in-pieces.html)
