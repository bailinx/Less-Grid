# X-Grid

* 栅格系统深入研究
* 实现24格灵活布局
* 类Bootstrap语法

![X-Grid](https://raw.githubusercontent.com/radishj/X-Grid/master/docs/img/4.gif)

## 使用方法
引入css
``` html
<link href="css/x-grid.css" rel="stylesheet">
```
使用预定义class
``` css
col-xs-13 col-xs-offset-1(超小屏幕)
col-sm-13 col-sm-offset-1(小屏)
col-md-13 col-md-offset-1(中等)
col-lg-13 col-lg-offset-1(超大屏幕)
```
系统分为24格，布局有更多选择，若需更改，请将`\@columns`改为12 or 自定义，其他并不需要更改

## 关于栅格系统
栅格系统是Bootstrap的核心，其中精妙的思想将网页划分为12列，再按屏幕大小，分为xs(超小屏幕480px), sm(超小屏幕768px), md(中等屏幕992px), lg(超大屏1200px+)。通过形如col-md-x及col-md-offset-x组合使用，让布局不再复杂。

> 950px/960px栅格标准

![950px/960px栅格标准](https://raw.githubusercontent.com/radishj/X-Grid/master/docs/img/1.png)

> 栅格计算原理(有用)

![栅格计算原理](https://raw.githubusercontent.com/radishj/X-Grid/master/docs/img/2.png)

> 常用布局参考(24列)

![常用布局参考(24列)](https://raw.githubusercontent.com/radishj/X-Grid/master/docs/img/3.png)
