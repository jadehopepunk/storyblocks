A group of threads, with a little space in between.

```js
var message1 = {
  text: `
# this is great
I love *markdown*. It rocks so hard.
`,
  author: {id: 'HOF123', name: 'David Hasselhoff'}
};
var message2 = {
  text: `
# This is the second message
I love *markdown*. It rocks so hard.
`,
  author: {id: 'HOF123', name: 'David Hasselhoff'}
};
var messages = [message1, message2];
<FeedPanel>
  <ThreadSet threads={messages} />
</FeedPanel>
```