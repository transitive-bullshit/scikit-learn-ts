# scikit-learn-ts <!-- omit in toc -->

> Use the full power of Python's #1 ML library from Node.js 🔥

[![Build Status](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml) [![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
- [Usage](#usage)
- [TODO](#todo)
- [License](#license)

## Intro

## Usage

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

## TODO

- MVP
  - basic e2e working example for tsne
- post-MVP
  - handle "py functions" ([example](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_20newsgroups_vectorized.html))
  - explore [camelcase](https://github.com/sindresorhus/camelcase)
  - support positional arguments (in addition to keyword-based arguments)
  - support function exports in addition to class exports
  - support class attributes

## License

MIT © [Travis Fischer](https://transitivebullsh.it)
