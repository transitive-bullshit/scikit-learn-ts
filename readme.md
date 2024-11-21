<img alt="sklearn ts logo" src="/media/scikit-learn-ts-social.png">
<h1 align="center">scikit-learn-ts</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/sklearn"><img alt="NPM" src="https://img.shields.io/npm/v/sklearn.svg" /></a>
  <a href="https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml"><img alt="Build Status" src="https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml/badge.svg" /></a>
  <a href="https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/license"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <a href="https://prettier.io"><img alt="Prettier Code Formatting" src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg" /></a>
</p>

- [Intro](#intro)
- [Features](#features)
- [Prequisites](#prequisites)
- [Install](#install)
- [Usage](#usage)
- [Restrictions](#restrictions)
- [Examples](#examples)
  - [StandardScaler](#standardscaler)
  - [KMeans](#kmeans)
  - [TSNE](#tsne)
- [Why?](#why)
- [How it works](#how-it-works)
- [Credit](#credit)
- [License](#license)

## Intro

This project enables Node.js devs to use Python's powerful [scikit-learn](https://scikit-learn.org/) machine learning library – *without having to know any Python*. 🤯

See the [full docs](https://sklearn.vercel.app/) for more info.

> **Note**
> This project is new and _experimental_. It works great for local development, but I wouldn't recommend using it for production just yet. You can follow the progress on Twitter [@transitive_bs](https://twitter.com/transitive_bs)

## Features

- **All TS classes are auto-generated from the official python scikit-learn docs!**
- All [259 classes](https://scikit-learn.org/stable/api/index.html) are supported along with proper TS types and docs
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
- Generally much faster and more robust than JS-based alternatives
  - (benchmarks & comparisons coming soon)

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

_Congratulations!_ You've safely navigated Python land, and from here on out, we'll be using Node.js / JS / TS. The `sklearn` NPM package will use your Python installation under the hood.

## Install

```
npm install sklearn
```

## Usage

See the [full docs](https://sklearn.vercel.app/) for more info.

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

Since the TS classes are auto-generated from the Python docs, the code will look almost identical to the Python version, so use their excellent [API docs](https://scikit-learn.org/stable/api/index.html) as a reference.

All class names, method names, attribute (accessor) names and types are the same as the official Python version.

The main differences are:

- You need to call `createPythonBridge()` before using any `sklearn` classes
  - This spawns a Python child process and validates all of the Python dependencies
  - You can pass a custom `python` path via `createPythonBridge({ python: '/path/to/your/python3' })`
- **You need to pass this bridge to a class's async `init` method before using it**
  - This creates an underlying Python variable representing your class instance
- Instead of using `numpy` or `pandas`, we're just using plain JavaScript arrays
  - Anywhere the Python version would input or output a `nympy` array, we instead just use `number[]`, `number[][]`, etc
  - We take care of converting to and from `numpy` arrays automatically where necessary
- Whenever you're done using an instance, call `dispose()` to free the underlying Python resources
- Whenever you're done using your Python bridge, call `disconnect()` on the bridge to cleanly exit the Python child process

## Restrictions

- We don't currently support positional arguments; only keyword-based arguments:

```ts
// this works (keyword args)
const x = await model.fit_transform({ X: data })

// this doesn't work yet (positional args)
const y = await model.fit_transform(data)
```

- We don't currently generate TS code for `scikit-learn`'s built-in datasets
- We don't currently generate TS code for `scikit-learn`'s top-level function exports (only classes right now)
- There are basic unit tests for a handful of the auto-generated TS classes, and they work well, but there are probably edge cases and bugs in other auto-generated classes
  - Please create an issue on GitHub if you run into any weird behavior and include as much detail as possible, including code snippets

## Examples

Here are some side-by-side examples using the official Python `scikit-learn` package on the left and the TS `sklearn` package on the right.

### StandardScaler

<i><a href="https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html">StandardScaler Python docs</a></i>

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
import * as sklearn from 'sklearn'

const data = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

const py = await sklearn.createPythonBridge()

const s = new sklearn.StandardScaler()
await s.init(py)

const x = await s.fit_transform({ X: data })
```

</td>
</tr>
</table>

### KMeans

<i><a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html">KMeans Python docs</a></i>

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
  random_state=42,
  n_init='auto'
)

x = model.fit_predict(data)
```

</td>
<td>

```ts
import * as sklearn from 'sklearn'

const data = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

const py = await sklearn.createPythonBridge()

const model = new sklearn.KMeans({
  n_clusters: 2,
  random_state: 42,
  n_init: 'auto'
})
await model.init(py)

const x = await model.fit_predict({ X: data })
```

</td>
</tr>
</table>

### TSNE

<i><a href="https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html">TSNE Python docs</a></i>

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
  perplexity=2,
  learning_rate='auto',
  init='random'
)

x = model.fit_transform(data)
```

</td>
<td>

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
  perplexity: 2,
  learning_rate: 'auto',
  init: 'random'
})
await model.init(py)

const x = await model.fit_transform({ X: data })
```

</td>
</tr>
</table>

See the [full docs](https://sklearn.vercel.app/) for more examples.

## Why?

The Python ML ecosystem is generally a lot more mature than the Node.js ML ecosystem. Most ML research happens in Python, and many common ML tasks that Python devs take for granted are much more difficult to accomplish in Node.js.

For example, I was recently working on a data viz project using full-stack TypeScript, and I needed to use k-means and t-SNE on some text embeddings. I tested 6 different t-SNE JS packages and several k-means packages. None of the t-SNE packages worked for medium-sized inputs, they were 1000x slower in many cases, and I kept running into `NaN` city with the JS-based versions.

Case in point; it's _incredibly difficult_ to compete with the robustness, speed, and maturity of proven Python ML libraries like `scikit-learn` in JS/TS land.

So instead of trying to build a Rust-based version from scratch or using ad hoc NPM packages like above, I decided to create an experiment to see how practical it would be to just use `scikit-learn` from Node.js.

And that's how `scikit-learn-ts` was born.

## How it works

This project uses a fork of [python-bridge](https://github.com/Submersible/node-python-bridge) to spawn a Python interpreter as a subprocess and communicates back and forth via standard Unix pipes. The IPC pipes don't interfere with `stdout`/`stderr`/`stdin`, so your Node.js code and the underlying Python code can print things normally.

The TS library is **auto-generated** from the Python `scikit-learn` [API docs](https://scikit-learn.org/stable/api/index.html). By using the official Python docs as a source of truth, we can guarantee a certain level of compatibility and upgradeability.

For each `scikit-learn` HTML page that belongs to an exported Python `class` or `function`, we first parse it's metadata, params, methods, attributes, etc using `cheerio`, then we convert the Python types into equivalent TypeScript types. We then generate a corresponding `TypeScript` file which wraps an instance of that Python declaration via a `PythonBridge`.

For each `TypeScript` wrapper `class` of `function`, we take special care to handle serializing values back and forth between Node.js and Python as JSON, including converting between primitive arrays and `numpy` arrays where necessary. All `numpy` array conversions should be handled automatically for you since we only support serializing primitive JSON types over the `PythonBridge`. There may be some edge cases where the automatic `numpy` inference fails, but we have a regression test suite for parsing these cases, so as long as the official Python docs are correct for a given type, then our implicit `numpy` conversion logic should "just work".

## Credit

This project is not affiliated with the [official Python scikit-learn project](https://scikit-learn.org/stable/about.html). Hopefully it will be one day. 😄

All of the difficult machine learning work happens under the hood via the [official Python scikit-learn project](https://scikit-learn.org), with full credit given to their [absolutely amazing team](https://scikit-learn.org/stable/about.html). This project is just a small open source experiment to try and leverage the existing `scikit-learn` ecosystem for the Node.js community.

See the [full docs](https://sklearn.vercel.app/) for more info.

## License

The official Python `scikit-learn` project is licensed under the [BSD 3-Clause](https://github.com/scikit-learn/scikit-learn/blob/main/COPYING).

This project is licensed under MIT © [Travis Fischer](https://transitivebullsh.it).

If you found this project helpful, please consider <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
