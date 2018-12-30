# supports-imgix [![Build Status](https://travis-ci.com/JonnyBurger/supports-imgix.svg?branch=master)](https://travis-ci.com/JonnyBurger/supports-imgix?new)

> List of mime types that Imgix can process

A simple list of MIME types that Imgix can process. Useful for validating the files that users upload through your website.

## Install

```
$ npm install supports-imgix
```


## Usage

```js
const supportsImgix = require('supports-imgix');

supportsImgix('image/png');
//=> true

supportsImgix('image/webp');
//=> false

supportsImgix.supportedTypes
//=> ['application/illustrator','application/vnd.adobe.illustrator','image/bmp',...]


```


## API

### supportsImgix(mimeType)

#### mimeType

Type: `string`

### supportsImgix.supportedTypes

Array of MIME types that Imgix can process.

## License

MIT © [Jonny Burger](http://jonny.io)
