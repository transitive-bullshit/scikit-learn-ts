## How it works

This project uses a fork of [python-bridge](https://github.com/Submersible/node-python-bridge) to spawn a Python interpreter as a subprocess and communicates back and forth via standard Unix pipes. The IPC pipes don't interfere with `stdout`/`stderr`/`stdin`, so your Node.js code and the underlying Python code can print things normally.

The TS library is **auto-generated** from the Python `scikit-learn` [API docs](https://scikit-learn.org/stable/modules/classes.html). By using the official Python docs as a source of truth, we can guarantee a certain level of compatibility and upgradeability.

For each `scikit-learn` HTML page that belongs to an exported Python `class` or `function`, we first parse it's metadata, params, methods, attributes, etc using `cheerio`, then we convert the Python types into equivalent TypeScript types. We then generate a corresponding `TypeScript` file which wraps an instance of that Python declaration via a `PythonBridge`.

For each `TypeScript` wrapper `class` of `function`, we take special care to handle serializing values back and forth between Node.js and Python as JSON, including converting between primitive arrays and `numpy` arrays where necessary. All `numpy` array conversions should be handled automatically for you since we only support serializing primitive JSON types over the `PythonBridge`. There may be some edge cases where the automatic `numpy` inference fails, but we have a regression test suite for parsing these cases, so as long as the official Python docs are correct for a given type, then our implicit `numpy` conversion logic should "just work".
