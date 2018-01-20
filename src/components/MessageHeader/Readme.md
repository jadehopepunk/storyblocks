Here's a header from a message from the Hoff. This one has no channel tags.

```js
const moment = require('moment');
<MessageHeader
  author={{id: 'HOFF123', name: 'David Hasselhoff'}}
  date={moment().subtract(12, 'days')}
  />
```

This one has some channels. Only the first one actually gets displayed.

```js
const moment = require('moment');
<MessageHeader
  author={{id: 'HOFF123', name: 'David Hasselhoff'}}
  date={moment().subtract(12, 'days')}
  channels={['#vegan-junkfood', '#solarpunk']}
  />
```
