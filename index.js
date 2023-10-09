const crypto = require("crypto")
const rp = require("request-promise-native");

class Kirimi {
  /**
   * @param {string} user_code - User Code
   * @param {string} secret - Secret Key
   **/
  constructor(user_code, secret) {
    this._user_code = user_code;
    this._secret = secret;
    this._endpoint = "https://api.kirimi.id"
  }

  sendMessage(deviceId, to, message) {
    const options = {
      method: 'POST',
      uri: `${this._endpoint}/v1/send-message`,
      body: {
        "user_code": this._user_code,
        "device_id": deviceId,
        "receiver": to,
        "message": message,
        "secret": this._secret
},
      json: true,
    };

    return rp(options)
      .then(function (resp) {
        console.log(resp)
        if (resp.data) {
          return resp.data;
        }
      })
      .catch(function (err) {
        throw Error(err);
      });
  }
}

module.exports = Kirimi;
