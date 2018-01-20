A thread is a group of messages, but that isn't really working yet, so actually
it just renders a single message.

```js
var markdown = `
# this is great
I love *markdown*. It rocks so hard.
`;
<Thread
  author={{id: 'HOF123', name: 'David Hasselhoff'}}
  text={markdown}
  />
```