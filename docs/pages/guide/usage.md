# Usage

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
