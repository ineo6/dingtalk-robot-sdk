const crypto = require('crypto');
const axios = require('axios');
const debug = require('debug')('dingtalk-robot-sdk');

class Robot {
  constructor(options = {}) {
    this.accessToken = options.accessToken;
    this.secret = options.secret || "";
    this.isSession = false;

    if (options.sessionWebhook) {
      this.webhook = options.sessionWebhook;
      this.isSession = true;
    } else {
      if (!this.accessToken) {
        throw new Error("accessToken is required!")
      }

      this.webhook = `https://oapi.dingtalk.com/robot/send?access_token=${this.accessToken}`;
    }
  }

  getWebHook() {
    let signStr = "";

    if (this.secret && this.isSession === false) {
      const timeStamp = Date.now();

      const hash = encodeURIComponent(crypto.createHmac('sha256', this.secret)
        .update(timeStamp + '\n' + this.secret)
        .digest('base64'));

      signStr = "&sign=" + hash + "&timestamp=" + timeStamp;

      debug("Sign string is %s, result is %s", timeStamp + '\n' + this.secret, hash)
    }

    return this.webhook + signStr;
  }

  request(body) {
    debug("Send message: %O ", body);

    axios.post(this.getWebHook(), JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      debug("Result is %s, %s。", response.data.errcode, response.data.errmsg)
      if (response.data.errcode === 310000) {
        console.error("Send Failed:", response.data);
        debug("Please check safe config : %O", response.data)
      }
    })
  }

  send(message) {
    let body = message.get();

    return this.request(body)
  }
}

module.exports = Robot;
