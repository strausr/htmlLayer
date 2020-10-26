# HTMLLayer

## Overview

```bash
This is our html/layer library. The objective of this layer is render a
TransformableImg. This library is a dependency on our framework layer. As of now
React, Angular and Vue.
```

## Install
Since this library is not on npm, we will need to preform the following
to use on our framework libraries-

1. clone repo
2. npm run build
3. npm run prepare-build
4. cd into /dist
5. npm link or npm pack
6. install package in framework layer

## Usage

```js
import HtmlLayer from 'html-layer'; 
import {TransformableImage} from "@cloudinary/base";

new HtmlLayer(element, TransformableImage);
```

## License

MIT © [strausr](https://github.com/strausr)
