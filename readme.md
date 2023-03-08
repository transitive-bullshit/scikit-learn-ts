# scikit-learn-ts <!-- omit in toc -->

> Use the full power of Python's #1 ML library from Node.js 🔥

[![Build Status](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml) [![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
  - [Pros](#pros)
  - [Notes](#notes)
- [Usage](#usage)
- [TODO](#todo)
- [License](#license)

## Intro

### Pros

- **auto-generated from the official python scikit-learn docs**
-

### Notes

- hacky as fuck
- only tested with Node.js v19 and Python 3.11
- copying arrays between node and python isn't ideal, but the python implementations are so much faster and more robust, that it ends up being a massive win over JS-based alternatives for common ML algorithims like K-Means and t-SNE
  - seriously; I tested 6 different t-SNE JS packages, and several k-Means packages. none of the t-SNE packages worked for medium-sized inputs, they were 1000x slower, and I kept running into `NaN` city with the JS-based versions.
  - case in point; it's _really_ hard to compete with the robustness and optimizations of a mature ML library like `scikit-learn` in JS/TS land.

## Usage

<table>
<tr>
<th width="450px"><b>Python</b></th>
<th width="450px"><b>TypeScript</b></th>
</tr>
<tr>
<td>

```python
import numpy as np
from sklearn.manifold import TSNE

data = np.array([
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
])

model = TSNE(
  n_components=2,
  learning_rate='auto',
  init='random',
  perplexity=2
)
x = model.fit_transform(data)
```

</td>
<td>

```ts
import { TSNE, createPythonBridge } from 'sklearn'

const data = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

const model = new TSNE({
  n_components: 2,
  learning_rate: 'auto',
  init: 'random',
  perplexity: 2
})

const py = await createPythonBridge()
await model.init(py)

const x = await model.fit_transform({ X: data })
```

</td>
</tr>
</table>

## TODO

- MVP
  - [x] e2e working example for MinMaxScaler
  - [x] e2e working example for TSNE
  - [x] e2e working example for Kmeans
  - [x] add support for class attributes
  - [ ] generate all sklearn classes
  - [ ] generate all sklearn functions
  - [ ] generate docs via tsdoc
  - [ ] validate generated code via `tsc`
  - [ ] refactor into `packages`
  - [ ] basic readme w/ usage and examples
- post-MVP
  - add support for better python exception / error handling
  - add support for positional arguments (in addition to the default keyword-based arguments)
  - add support for function exports in addition to class exports
    - "py functions" ([example](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_20newsgroups_vectorized.html))
  - add basic benchmarks
  - add python <> TS unit tests
  - add support for concurrent python requests and multiple python bridges
    - this may work currently, but it's untested and likely to have race conditions
  - consider changing identifier names from python `snake_case` to JS `camelCase`
- ideas
  - support polars or danfo.js dataframe formatting
  - explore memory mapping arrays between node.js and python for efficiency
    - would need the two serialized array formats to be byte-equivalent between python and node.js which seems difficult to guarantee

## License

MIT © [Travis Fischer](https://transitivebullsh.it)
