## WHAT ??---什么是高清
![http://gtms04.alicdn.com/tps/i4/TB1Ks_4FVXXXXa9XXXXoA323pXX-856-504.png](http://gtms04.alicdn.com/tps/i4/TB1Ks_4FVXXXXa9XXXXoA323pXX-856-504.png)   
*  高清，英文为High Definition，意思是高分辨率。我们可以缩小范围来说一下，这款是apple的mbp笔记本的retina屏幕下的图片。在传统的操作系统，点跟像素之间的映射比例是1:1。不过在OS X，点与像素并不是一对一的关系，而是一对多的关系。因为在高像素密度的屏幕，一个点可以映射多个像素！所有才有更高的分辨率，更高的色彩饱和。这种分辨率在正常观看距离下足以使人肉眼无法分辨其中的单独像素，也被称为视网膜显示屏。
*  **So综合来说，高清，我们可以这么理解：相同尺寸范围内 ，把更多的像素点压缩至这一块屏幕里，从而达到更高的分辨率， 更高色彩和对比度 ，使得屏幕显示的更细腻的一种技术。**

## WHY?--- 为什么发起高清化
* 市场形势
	* 苹果公司是业界中最早推出高清屏Retina的公司，在行业内是个领军企业 。[2010 年 iPhone4 发布会](http://v.youku.com/v_show/id_XMTgwMDMyMDY0.html)，可以说苹果带来了一场高清的变革。现在你手上的手机，电脑等电子产品，越来越多的设备厂商一起加入到探索高清设备的道路上。从这种市场形势来看，高清，已经成为现代科技发展的必要条件。对于技术而言，高清技术支持已经迫在眉睫。
* 数据现状
	* [淘宝无线数据]
	   * 总体: >90%的设备已经支持高清！
	* 天猫首页高清数据PC
* 其他：
	*  当作为工程师的你在Mac下浏览网站，展现都是略显模糊的图片，这不是与我们一直要提高用户体验相违背吗？  
* 从以上几点来看，高清数据的占比，更加充分说明了高清时代已经到来！当然另一个比较有说服力的是，当在推进高清落地到业务的时候，让业务方更能接受的一个相当好的理由！
	
##  高清化之路 
*  天猫在13年5月底启动融入字体图标iconfont，推动设计师对接入集团iconfont平台，与设计师到达一致目标，制定相关的规范......到今年年初从iconfont的应用推广视角扩大至天猫的整个高清化，这使得我们在高清这个目标下有更多的解决方案。这是一个质的改变。不仅仅关注图标字体，更多的是用户体验的提升，与更多种高清化方案的选择。
*  现在，天猫所有业务开始了高清化之路，不同的是各个业务线根据自身情况使用不同的高清技术方案，相同的是，为天猫的用户品质又提升了一层。例子：吊顶与小icon都是通过iconfont实现，而频道页头的logo则是通过图片 or iconfont来实现！
*  天猫在高清方面主要考虑一下两点：
    *   在pc端，考虑到针对消费者网页的兼容性问题，大多数小图标我们采取了iconfont这种友好的方式；针对商品图，对颜色的饱和度要求高，图片元素又混杂，我们则采用了双倍图的方式；当然在图标上，iconfont不是唯一的解决方案，base64也是不错的选择。只不过在兼容性上需另作兼容方案。
    *   抛开兼容IE6，7的问题，我们选择实现高清的方式显然多了，所以，mobile端的推行高清的思路则是不限制具体方案类型，各个业务线自由发挥即可！
    
*  近期 “使用 SVG 代替 Web Icon Font”这个话题很火热，感兴趣的童鞋也不妨点击看看[Inline SVG vs Icon Fonts](http://css-tricks.com/icon-fonts-vs-svg/),[Icon System with SVG Sprites](http://css-tricks.com/svg-sprites-use-better-icon-fonts/)。
    *  个人想表达的是：浏览器兼容性是前端领域永恒的话题，会出现越来越多的解决方案。方案之间永远没有最好，只有适合当前业务情况下现阶段最合适的方案！    

## 高清化的技术方案：
*  现阶段我们常用的几种，有如下几种：

###  双倍图片 
   * <img src="http://gtms02.alicdn.com/tps/i2/TB1Snz4FVXXXXXAXXXXDbxP3XXX-191-251.png_100x100.jpg" width="100" height="125" alt="一般效果" title="一般效果"/><img src="http://gtms02.alicdn.com/tps/i2/TB1Snz4FVXXXXXAXXXXDbxP3XXX-191-251.png" width="100" height="125"  alt="高清效果" title="高清效果"/>
   *  拟人化性格分析：热情，平易近人，有时有点傲娇 
   *  使用场景: 对色彩饱和度较高的商品图片,banner图等。 线上效果：[http://miao.tmall.com/](http://miao.tmall.com/)  PS：retina屏下的高清商品图
   *  常用的写法：

```
@media only ......{
     ......
     ......
     background-image:"xxxx-330x312.png";
     background-size:165px 156px;
}

or 

<img src="XXX-200-250.png" width="100" height="125"/>

``` 

未来也可以通过srcset属性来实现，详见：[img srcset规范](http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-picture-source-srcset)
   * 优劣势
	   * 好处：
		  * 写法丰富且平台支持度高，兼容性好
       * 缺点 
           * 体积比同尺寸图片大 
             
###   iconfont
* <img src="http://img3.tbcdn.cn/L1/461/1/93184ba396e1c928bd580700eb1be49db5ef572f" width="178" height="52"/>
* 拟人化性格分析： 单纯型, 酷爱单色系  
* 使用场景：页面小图标复用性比较高，且图标可使用纯色；线上效果：[http://www.tmall.com/](http://www.tmall.com/) 天猫首页,吊顶,频道页等anywhere, 几乎都留有它的足迹！
* 常用的写法

```
@font-face {
	font-family: 'tmall3c';
    src: url('iconfont.eot');
    src: url('iconfont.eot?#iefix') format('embedded-opentype'), 
    url('iconfont.woff') format('woff'), 
    url('iconfont.ttf') format('truetype'), 
    url('iconfont.svg#iconfont') format('svg'); 
}
.icon{
	font-family:"tmall3c" !important;
	font-size:16px;font-style:normal;
	-webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
<i class="icon">&#x3486;</i>
```


* 优劣势
	*  好处
		*  轻量性：一个图标字体比一系列的图像小；
		*  灵活性：可自由设置大小，字体样式
		*  兼容性：网页字体支持所有现代浏览器 
	*  缺点 
		*  样式不如图片丰富，只能被渲染成单色或者CSS3的渐变色
		*  重构成本相应提高
		  
###  SVG
 <img src="http://img3.tbcdn.cn/L1/461/1/94e5d0cd2237926303d528acae133c3e1e4cf1b5" width="230" height="365"/>
* 拟人化性格分析：冷静理智，智慧型  
* 使用场景：多用于图表，图标等。
* 常用的写法：

```
<svg height="300" version="1.1" width="750" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: absolute; top: auto; left: auto; z-index: 10;">
	<desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Rapha?l 2.1.0</desc>
	<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
	<path fill="#98df8a" stroke="#ffffff" d="M86.25,214.1142857142857L91.05,218.9142857142857L86.25,223.71428571428572L81.45,218.9142857142857Z" transform="matrix(1,0,0,1,0,0)" r="4" stroke-width="1.5" cx="86.25" cy="218.9142857142857" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
	<circle cx="0" cy="0" r="5" fill="#1f77b4" stroke="#ffffff" stroke-width="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;" transform="matrix(1,0,0,1,138.75,178.8)"></circle>
	......
	......
</svg>
```

* 优劣势
	* 好处：
	  * 在具备png和iconfont的所有优势外，支持所有dpi的屏幕，尺寸更小
	  * 可压缩性更强（可压缩性 ：指可伸缩，在图像质量不下降的情况下被放大） 
    * 缺点： 
      * 兼容性略显逊色，部分国内浏览器不支持，如QQ浏览器
      * 重构成本相应提高
      
###  base64
* <img src="http://img4.tbcdn.cn/L1/461/1/59740ff902f3e092e204001ba5c02d6f28014d58" width="130" height="95"/>
* 拟人化性格分析：倔强有个性，爱恨分明  
* 使用场景：小图标，mobile端使用较多，pc端需在IE6,7下另作图片来兼容；线上效果：天猫工具栏等。
* 常用的写法：

```
.mui-mbar-tab-logo-brand{
	background-image:url(data:image/png;base64,iVBORw0KG4bXAAAAAAADw/e/......AAAAASUVORK5CYII=);
      .......
      .......
}
```

* 优劣势
	* 好处：
	    * 减少了HTTP请求，无清理缓存
    * 缺点：
       * 浏览器支持差（IE7及以下不支持）
       * 增加了CSS文件的尺寸
       * 编码成本略高 	     

  
## 衍生---集团iconfont平台使用篇
* 推荐使用集团iconfont平台,请点击[http://iconfont.cn/](http://iconfont.cn/)

	     	     
## 高清化工具 
* [crossImage组件] 
* [fontloader] 
     
    
    
    
    		 
		 
