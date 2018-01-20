The message body needs to render some markdown.

```js
var markdown = `
# this is great
I love *markdown*. It rocks so hard.
`;
<MessageBody text={markdown} format='markdown' />
```

If for some strange reason you fail to give it any text, we indicate that.

```js
<MessageBody text='' format='markdown' />
```
