<img alt="sklearn ts logo" src="/media/scikit-learn-ts-social.png">
<h1 align="center">scikit-learn-ts</h1>

<p align="center">
  <a href="https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml"><img alt="Build Status" src="https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml/badge.svg" /></a>
  <a href="https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/license"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <a href="https://prettier.io"><img alt="Prettier Code Formatting" src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg" /></a>
</p>

- [Intro](#intro)
- [Features](#features)
- [Prequisites](#prequisites)
- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
  - [StandardScaler](#standardscaler)
  - [KMeans](#kmeans)
  - [TSNE](#tsne)
- [Why?](#why)
- [How it works](#how-it-works)
- [TODO](#todo)
- [Credit](#credit)
- [License](#license)

## Intro

This project enables Node.js devs to use Python's powerful `scikit-learn` machine learning library – *without having to know any Python*.

> This project is new and _experimental_. It works great for local development, but I wouldn't recommend it for production scenarios just yet. If you have feedback, questions, or bug reports, please create a GitHub issue. Any contributions are greatly appreciated!

## Features

- **Auto-generated from the official python scikit-learn docs**
- All [259 classes](https://scikit-learn.org/stable/modules/classes.html) are supported along with proper TS types and docs
  - `KMeans`
  - `TSNE`
  - `PCA`
  - `LinearRegression`
  - `LogisticRegression`
  - `DecisionTreeClassifier`
  - `RandomForestClassifier`
  - `XGBClassifier`
  - `DBSCAN`
  - `StandardScaler`
  - `MinMaxScaler`
  - ... _all of them_ 💯

## Prequisites

_This project is meant for Node.js users, so don't worry if you're not familiar with Python. This is the only step where you'll need to touch Python, and it should be pretty straightforward._

Make sure you have Node.js and Python 3 installed and in your `PATH`.

- `node >= 14`
- `python >= 3.7`

In python land, install `numpy` and `scikit-learn` either globally via `pip` or via your favorite virtualenv manager. The shell running your Node.js program will need access to these python modules, so if you're using a virtualenv, make sure it's activated.

If you're not sure what this means, it's okay. First [install python](https://realpython.com/installing-python/), which will also install `pip`, python's package manager. Then run:

```
pip install numpy scikit-learn
```

_Congratulations!_ You've safely navigated Python land, and from here on out, we'll be using Node.js / JS / TS. The `sklearn` NPM package will use your Python installation under the hood — without you needing to know Python! 🤯

## Install

```
npm install sklearn
```

## Usage

```ts
import * as sklearn from 'sklearn'

const data = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

const py = await sklearn.createPythonBridge()

const model = new sklearn.TSNE({
  n_components: 2,
  perplexity: 2
})
await model.init(py)

const x = await model.fit_transform({ X: data })
console.log(x)

await model.dispose()
await py.disconnect()
```

Since the TS classes are auto-generated from the Python docs, the code will generally look very close to the Python version, so use their excellent [API docs](https://scikit-learn.org/stable/modules/classes.html) as a reference.

All class names, method names, attribute (accessor) names and types are the same as the official Python version.

The main differences are:

- You need to call `createPythonBridge()` before using any `sklearn` classes
  - This spawns a Python child process and validates all of the Python dependencies
  - You can pass a custom `python` path via `createPythonBridge({ python: '/path/to/your/python3' })`
- You need to pass this bridge to any class's async `init` method before using it
  - This creates an underlying Python variable representing your class instance.
- Instead of using `numpy` or `pandas`, we're just using plain JavaScript arrays.
  - Anywhere the Python version would input or output a `nympy` array, we instead just use `number[]`, `number[][]`, etc
  - We take care of converting to and from `numpy` arrays automatically where necessary
- Whenever you're done using an instance, call `dispose()` to free the underlying Python resources
- Whenever you're done using your Python bridge, call `disconnect()` on the bridge to cleanly exit the Python child process

## Examples

Here are some side-by-side examples using the official Python `scikit-learn` package on the left and the TS `sklearn` package on the right.

### StandardScaler

<table>
<tr>
<th width="450px"><b>Python</b></th>
<th width="450px"><b>TypeScript</b></th>
</tr>
<tr>
<td>

```python
import numpy as np
from sklearn.preprocessing import StandardScaler

data = np.array([
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
])

s = StandardScaler()
x = s.fit_transform(data)
```

</td>
<td>

```ts
import { StandardScaler, createPythonBridge } from 'sklearn'

const data = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

const py = await createPythonBridge()

const s = new StandardScaler()
await s.init(py)

const x = await s.fit_transform({ X: data })
```

</td>
</tr>
</table>

### KMeans

<table>
<tr>
<th width="450px"><b>Python</b></th>
<th width="450px"><b>TypeScript</b></th>
</tr>
<tr>
<td>

```python
import numpy as np
from sklearn.cluster import KMeans

data = np.array([
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
])

model = KMeans(
  n_clusters=2,
  random_state=42
)
x = model.fit_predict(data)
```

</td>
<td>

```ts
import { KMeans, createPythonBridge } from 'sklearn'

const data = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

const py = await createPythonBridge()

const model = new KMeans({
  n_clusters: 2,
  random_state: 42
})
await model.init(py)

const x = await model.fit_predict({ X: data })
```

</td>
</tr>
</table>

### TSNE

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

const py = await createPythonBridge()

const model = new TSNE({
  n_components: 2,
  learning_rate: 'auto',
  init: 'random',
  perplexity: 2
})
await model.init(py)

const x = await model.fit_transform({ X: data })
```

</td>
</tr>
</table>

## Why?

<p align="center">
  <a href="https://twitter.com/transitive_bs/status/1616559787101114374">
    <img alt="JS / TS developers are jealous of the Python ML ecosystem" src="/media/python-vs-js-ts.jpg" width="500">
  </a>
</p>

Seriously though, the Python ML ecosystem is significantly better than the Node.js ML ecosystem. I don't expect this to fundamentally change, but it does mean there's lots of room for improvement.

I was recently working on a data viz project which was full-stack TypeScript, and I needed to use k-means and t-SNE on some text embeddings. I tested 6 different t-SNE JS packages, and several k-means packages. None of the t-SNE packages worked for medium-sized inputs, they were 1000x slower in many cases, and I kept running into `NaN` city with the JS-based versions. Ugh.

Case in point; it's _incredibly difficult_ to compete with the robustness, speed, and maturity of proven Python ML library like `scikit-learn` in JS/TS land.

So instead of trying to build a Rust-based version from scratch, or using ad hoc Node.js modules like above, I decided to create a quick experiment to see how practical it would be to just use `scikit-learn` from Node.js.

And that's how the `scikit-learn-ts` project was born.

## How it works

This project uses a fork of [python-bridge](https://github.com/Submersible/node-python-bridge) to spawn a Python interpreter as a subprocess and communicates back and forth via standard Unix pipes. The IPC pipes don't interfere with `stdout`/`stderr`/`stdin`, so your Node.js code and the underlying Python code can print things normally.

The TS library is auto-generated from the Python `scikit-learn` [API docs](https://scikit-learn.org/stable/modules/classes.html). By using the official Python docs as a source of truth, we can guarantee a certain level of compatibility and future-proofing.

For each `scikit-learn` HTML page that belongs to an exported Python `class` or `function`, we first parse it's metadata, params, methods, attributes, and return values using `cheerio`, then we convert the Python types into equivalent TypeScript types. We then generate a corresponding `TypeScript` file which wraps an instance of that Python declaration via a `PythonBridge`.

For each `TypeScript` wrapper `class` of `function`, we take special care to handle serializing values back and forth between Node.js and Python as JSON, including converting between primitive arrays and `numpy` arrays where necessary. All `numpy` array conversions should be handled automatically for you since we only support serializing primitive JSON types over the `PythonBridge`. There may be some edge cases where the automatic `numpy` inference fails, but we have a regression test suite for parsing these cases, so as long as the official Python docs are correct for a given type, then our implicit `numpy` conversion logic should "just work".

Some related thoughts:

- _This project is objectively pretty hacky_, but I think the premise is very much worth exploring.
- Serializing and copying potentially large arrays between Node.js and Python certainly isn't ideal, but **the Python implementations are so much faster and more robust**, that it ends up being a massive win over JS-based alternatives for common ML algorithims like K-Means and t-SNE

## TODO

- MVP
  - [x] e2e working example for MinMaxScaler
  - [x] e2e working example for TSNE
  - [x] e2e working example for Kmeans
  - [x] add support for class attributes
  - [x] generate all sklearn classes
  - [x] refactor generated code into namespaces / folders
  - [x] check python `scikit-learn` version
  - [x] generate readme files for each directory
  - [x] port changes to python-bridge...
  - [x] validate generated code via `tsc`
  - [x] refactor into `packages`
  - [x] test build via CI
  - [x] basic readme w/ usage and examples
  - [ ] publish `sklearn` package to NPM
  - [ ] contact `scikit-learn` for feedback
- post-MVP
  - generate docs via tsdoc
  - add support for sklearn functions (in addition to classes)
  - add support for accessing the built-in datasets
  - add support for better python exception / error handling
  - add support for positional arguments (in addition to the default keyword-based arguments)
  - add support for function exports in addition to class exports
    - "py functions" ([example](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_20newsgroups_vectorized.html))
  - add basic benchmarks
  - add python <> TS unit tests
  - add support for concurrent python requests and multiple python bridges
    - this may work currently, but it's untested and is likely to have race conditions
  - consider changing identifier names from python `snake_case` to JS `camelCase`
  - add support for `pandas`
  - update fork of `python-bridge` to be more modern
    - update deps
    - replace bluebird with native promises
    - fix python warnings
    - etc
- ideas
  - add support for [polars](https://github.com/pola-rs/nodejs-polars) and/or [danfo.js](https://github.com/javascriptdata/danfojs) dataframe formatting
  - explore memory mapping arrays between node.js and python for efficiency
    - would need the two serialized array formats to be byte-equivalent between python and node.js which seems difficult...
  - explore more efficient serialization formats for IPC
  - explore [pyodide](https://github.com/pyodide/pyodide) as a possible alternative
    - the `scikit-learn` team has an [open issue](https://github.com/scikit-learn/scikit-learn/issues/23727) considering support, but it looks stalled
    - it would likely be more performance than the approach used by this project, and it would theoretically support both Node.js and browser via WASM
    - it would, however, also be quite a bit more complicated on the tooling / buildchain side of things (as opposed to this package which punts this complexity to the runtime side of things); tradeoffs...
    - see also this [example issue + code snippet](https://github.com/scikit-learn/scikit-learn/issues/23707)

## Credit

This project is not affiliated with the [official Python scikit-learn project](https://scikit-learn.org/stable/about.html). Hopefully it will be one day. 😄

All of the difficult machine learning work happens under the hood via the [official Python scikit-learn project](https://scikit-learn.org), with full credit given to their [absolutely amazing team](https://scikit-learn.org/stable/about.html). This project is just a small open source experiment to try and leverage the existing `scikit-learn` ecosystem for the Node.js community.

## License

The official Python `scikit-learn` project is licensed under the [BSD 3-Clause](https://github.com/scikit-learn/scikit-learn/blob/main/COPYING).

This project is licensed under MIT © [Travis Fischer](https://transitivebullsh.it).

If you found this project helpful, please consider <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
