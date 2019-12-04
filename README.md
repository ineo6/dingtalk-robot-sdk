# dingtalk-robot-sdk

[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]

[![PRs Welcome][prs-badge]][prs]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

钉钉自定义机器人SDk, 支持文本 (text)、链接 (link)、markdown(markdown)、ActionCard、FeedCard消息类型。

## 功能特性

- 支持加签安全设置（HmacSHA256）
- 链式调用

## Installation

```shell
npm install dingtalk-robot-sdk --save-dev 
```

## Usage

### 初始化

```js
const Robot = require("dingtalk-robot-sdk")

const robot = new Robot({
    accessToken: 'accessToken',
    secret: 'secret',
});
```

### 发送text

```js
const Text = Robot.Text;

const text = new Text('我就是我,  @1825718XXXX 是不一样的烟火');
text.atPhone('1825718XXXX');

robot.send(text);
```


### 发送link

```js
const Link = Robot.Link;

const link = new Link('这个即将发布的新版本，创始人xx称它为“红树林');
link.setTitle('时代的火车向前开')
    .setImage("https://images")
    .setUrl("https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI")

robot.send(link);
```


### 发送markdown

```js
const Markdown = Robot.Markdown;

const markDown = new Markdown();

markDown.setTitle("杭州天气").add("#### 杭州天气 @156xxxx8827\n")
  .add("> 9度，西北风1级，空气良89，相对温度73%\n\n").atPhone('1825718XXXX')

robot.send(markDown);
```


### 发送ActionCard

#### 整体跳转ActionCard类型

```js
const ActionCard = Robot.ActionCard;

const actionCard = new ActionCard();

actionCard.setTitle("乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身")
  .setText(`![screenshot](@lADOpwk3K80C0M0FoA)
### 乔布斯 20 年前想打造的苹果咖啡厅
Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`)
  .setHideAvatar(1).setBtnOrientation(1)
  .setSingleTitle("阅读全文")
  .setSingleURL("https://www.dingtalk.com/");

robot.send(actionCard);
```

#### 独立跳转ActionCard类型

```js
const ActionCard = Robot.ActionCard;

const actionCard = new ActionCard();

actionCard.setTitle("乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身")
  .setText(`![screenshot](@lADOpwk3K80C0M0FoA)
### 乔布斯 20 年前想打造的苹果咖啡厅
Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`)
  .setHideAvatar(1).setBtnOrientation(1)
  .setBtns([
    {
      "title": "内容不错",
      "actionURL": "https://www.dingtalk.com/"
    },
    {
      "title": "不感兴趣",
      "actionURL": "https://www.dingtalk.com/"
    }
  ]);

robot.send(actionCard);
```

### 发送FeedCard
```js
const FeedCard = Robot.FeedCard;

const feedCard = new FeedCard([{
  "title": "时代的火车向前开",
  "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
  "picURL": "https://www.dingtalk.com/"
},
  {
    "title": "时代的火车向前开2",
    "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
    "picURL": "https://www.dingtalk.com/"
  }]);

robot.send(feedCard);
```

[version-badge]: https://img.shields.io/npm/v/dingtalk-robot-sdk.svg?style=flat-square
[package]: https://www.npmjs.com/package/dingtalk-robot-sdk
[downloads-badge]: https://img.shields.io/npm/dm/dingtalk-robot-sdk.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=dingtalk-robot-sdk&from=2018-10-31
[license-badge]: https://img.shields.io/npm/l/dingtalk-robot-sdk.svg?style=flat-square
[license]: https://github.com/ineo6/dingtalk-robot-sdk/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: htts://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[github-watch-badge]: https://img.shields.io/github/watchers/ineo6/dingtalk-robot-sdk.svg?style=social
[github-watch]: https://github.com/ineo6/dingtalk-robot-sdk/watchers
[github-star-badge]: https://img.shields.io/github/stars/ineo6/dingtalk-robot-sdk.svg?style=social
[github-star]: https://github.com/ineo6/dingtalk-robot-sdk/stargazers
