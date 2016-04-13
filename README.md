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



strong('**some strong text** with a little bit of normal text after');
// {
//     original: '**some strong text**',
//     parsed: 'some strong text'
// }
```

## License

[MIT](LICENSE)
