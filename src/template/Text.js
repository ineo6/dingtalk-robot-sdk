const MessageTemplateAbs = require("./template");

class Text extends MessageTemplateAbs {
    constructor(content) {
        super();
        this.msgtype = 'text';
        this.canAt = true;

        content && this.setContent(content);
    }

    setContent(content) {
        this.content = content;
        return this
    }

    get() {
        return this.render({
            text: {
                content: this.content,
            },
        });
    }
}

module.exports = Text;
