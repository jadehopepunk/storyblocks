A thread is a group of messages, but that isn't really working yet, so actually
it just renders a single message.

```js
var moment = require('moment');
var markdown = `
# this is great
I love *markdown*. It rocks so hard.
`;
<Thread
  id='abc123'
  author={{id: 'HOF123', name: 'David Hasselhoff'}}
  text={markdown}
  date={moment().subtract(12, 'days')}
  channels={['#vegan-junkfood', '#solarpunk']}
  />
```