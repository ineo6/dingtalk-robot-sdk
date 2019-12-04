const MessageTemplateAbs = require("./template");

class Link extends MessageTemplateAbs {
  constructor(content) {
    super();
    this.msgtype = 'link';
    this.title = "";
    this.messageUrl = "";
    this.picUrl = "";

    content && this.setContent(content);
  }

  setContent(content) {
    this.text = content;
    return this
  }

  setTitle(title) {
    this.title = title;
    return this
  }

  setImage(image) {
    this.picUrl = image;
    return this
  }

  setUrl(url) {
    this.messageUrl = url;
    return this
  }

  get() {
    return this.render({
      link: {
        text: this.text,
        title: this.title,
        picUrl: this.picUrl,
        messageUrl: this.messageUrl,
      },
    });
  }
}

module.exports = Link;
