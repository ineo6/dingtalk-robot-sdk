const MessageTemplateAbs = require("./template");

class ActionCard extends MessageTemplateAbs {
  constructor() {
    super();
    this.msgtype = 'actionCard';

    this.title = '';
    this.text = '';
    // 0-正常发消息者头像，1-隐藏发消息者头像
    this.hideAvatar = 0;
    // 0-按钮竖直排列，1-按钮横向排列
    this.btnOrientation = 0;

    // 单个按钮的方案。(设置此项和singleURL后btns无效)
    this.singleTitle = "";
    this.singleURL = "";
    this.btns = [];
  }

  setBtns(btns) {
    this.btns = this.btns.concat(btns);
    return this;
  }

  setSingleTitle(title) {
    this.singleTitle = title;
    return this;
  }

  setSingleURL(url) {
    this.singleURL = url;
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setText(content) {
    this.text = content;
    return this;
  }

  setBtnOrientation(flag) {
    this.btnOrientation = flag;
    return this
  }

  setHideAvatar(flag) {
    this.hideAvatar = flag;
    return this
  }

  get() {
    return this.render({
      actionCard: {
        title: this.title,
        text: this.text,
        hideAvatar: this.hideAvatar,
        btnOrientation: this.btnOrientation,
        btns: this.btns,
        singleTitle: this.singleTitle,
        singleURL: this.singleURL,
      },
    });
  }
}

module.exports = ActionCard;
