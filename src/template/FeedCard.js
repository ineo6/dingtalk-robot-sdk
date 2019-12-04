const MessageTemplateAbs = require("./template");

class FeedCard extends MessageTemplateAbs {
    constructor(links) {
        super();
        this.msgtype = 'feedCard';

        this.links = links || [];
    }

    addLinks(links) {
        this.links = this.links.concat(links);
        return this;
    }

    get() {
        return this.render({
            feedCard: {
                links: this.links,
            }
        });
    }
}

module.exports = FeedCard;
