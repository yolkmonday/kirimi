[![CodeFactor](https://www.codefactor.io/repository/github/yolkmonday/kirimi/badge)](https://www.codefactor.io/repository/github/yolkmonday/kirimi)
[![Npm package monthly downloads](https://badgen.net/npm/dm/kirimi)](https://npmjs.ccom/package/kirimi)

# kirimi Client for Node Js

This library is the abstraction of kirimi API for access from applications written with server-side Javascript.

[![NPM](https://nodei.co/npm/kirimi.png)](https://nodei.co/npm/kirimi/)



## Instalasi

```bash
npm install kirimi
```

atau

```bash
yarn add kirimi
```

## Pemakaian
Dapatkan User Code dan Secret Key Anda di [Kirimi Dashboard](https://console.kirimi.id/docs).

```js
const kirimi = require('kirimi');
const client = new kirimi("YOUR USER CODE","YOUR SECRET");
```


### Kirim Pesan
```js
let sendMessage = await client.sendMessage('device_id','receiver','message');
```

### License

[MIT](https://github.com/yolkmonday/kirimi/blob/master/LICENSE)

### Author

[Ari Padrian](mailto:yolkmonday@gmail.com)



