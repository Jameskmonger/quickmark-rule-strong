# quickmark-rule-strong

Bold / strong text matching rule for [quickmark](https://github.com/jameskmonger/quickmark).

## Usage

```javascript
const strong = require('quickmark-rule-strong');

strong('**bold text**');

// {
//     original: '**bold text**',
//     parsed: 'bold text'
// }

strong('__bold text__');

// {
//     original: '__bold text__',
//     parsed: 'bold text'
// }
```

## License

[MIT](LICENSE)
