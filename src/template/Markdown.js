const MessageTemplateAbs = require("./template");

class Markdown extends MessageTemplateAbs {
    constructor() {
        super();
        this.msgtype = 'markdown';
        this.canAt = true;
        this.items = [];
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    add(text) {
        if (Array.isArray(text)) {
            this.items.concat(text);
        } else {
            this.items.push(text);
        }

        return this;
    }

    get() {
        return this.render({
            markdown: {
                title: this.title,
                text: this.items.join('\n'),
            },
        });
    }
}

module.exports = Markdown;
