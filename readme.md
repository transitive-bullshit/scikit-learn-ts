# TODO <!-- omit in toc -->

> TODO

[![Build Status](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml) [![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
- [TODO](#todo)
- [License](#license)

## Intro

## TODO

```ts
import { TSNE } from 'sklearn/manifold'

const model = new TSNE({
  nComponents: 2,
  learningRate: 'auto',
  init: 'random',
  perplexity: 3
})

const x = await model.fitTransform([
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
])

model.dispose()
```

- core mvp
  - embeddings
  - k-means
  - t-SNE
  - visualize
- extra
  - preprocess tweet urls for opengraph metadata
  - embed opengraph metadata for links
  - handle quotes and retweets

## License

MIT © [Travis Fischer](https://transitivebullsh.it)
