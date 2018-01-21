Here's a root message.

```js
var moment = require('moment');
var markdown = `
# this is great
I love *markdown*. It rocks so hard.
`;
<Message
  id='abc123'
  author={{id: 'HOF123', name: 'David Hasselhoff'}}
  text={markdown}
  date={moment().subtract(12, 'days')}
  channels={['#vegan-junkfood', '#solarpunk']}
  />
```