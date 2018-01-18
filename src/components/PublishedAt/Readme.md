If it was published today, we show the number of hours ago

```js
var moment = require('moment');
<PublishedAt date={moment().subtract(3, 'hours')} />
```

Longer ago, and we show the number of days, months or years. The actual time string is
provided by the momentjs [fromNow](https://momentjs.com/docs/#/displaying/fromnow/) method.

```js
var moment = require('moment');
<PublishedAt date={moment().subtract(6, 'days')} />
```
