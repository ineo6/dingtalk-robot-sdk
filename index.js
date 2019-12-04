'use strict';

const Robot = require('./src/robot');

const Text = require("./src/template/Text");
const ActionCard = require("./src/template/ActionCard");
const FeedCard = require("./src/template/FeedCard");
const Markdown = require("./src/template/Markdown");
const Link = require("./src/template/Link");

module.exports = Robot;

module.exports.Text = Text;
module.exports.ActionCard = ActionCard;
module.exports.FeedCard = FeedCard;
module.exports.Markdown = Markdown;
module.exports.Link = Link;
