A group of threads, with a little space in between.

```js
var moment = require('moment');
var message1 = {
  id: '1',
  text: `
# this is great
I love *markdown*. It rocks so hard.
`,
  author: {id: 'HOF123', name: 'David Hasselhoff'},
  date: moment().subtract(10, 'days'),
  channels: ['#vegan']
};
var message2 = {
  id: '2',
  text: `
# This is the second message
I love *markdown*. It rocks so hard.
`,
  author: {id: 'HOF123', name: 'David Hasselhoff'},
  date: moment().subtract(4, 'hours'),
  channels: ['#solarpunk']
};
var messages = [message1, message2];
<FeedPanel>
  <ThreadSet threads={messages} />
</FeedPanel>
```