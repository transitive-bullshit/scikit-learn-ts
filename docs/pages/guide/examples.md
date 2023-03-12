# Examples

Here are some side-by-side examples using the official Python `scikit-learn` package on the left and the TS `sklearn` package on the right.

## StandardScaler

### Python

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

### TypeScript

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

## KMeans

### Python

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

### TypeScript

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

## TSNE

### Python

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

### TypeScript

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
