## Status

> This project is new and _experimental_. It works great for local development, but I wouldn't recommend using it for production just yet. You can follow the progress on Twitter [@transitive_bs](https://twitter.com/transitive_bs)

## TODO

- MVP
  - [x] e2e working example for MinMaxScaler
  - [x] e2e working example for TSNE
  - [x] e2e working example for Kmeans
  - [x] add support for class attributes
  - [x] generate all sklearn classes
  - [x] refactor generated code into namespaces / folders
  - [x] validate python `scikit-learn` version
  - [x] generate readme files for each directory
  - [x] port changes to python-bridge...
  - [x] validate generated code via `tsc`G
  - [x] refactor into `packages`
  - [x] test build via CI
  - [x] basic readme w/ usage and examples
  - [x] publish `sklearn` package to NPM
  - [x] contact `scikit-learn` for feedback
- current
  - docs
    - improve python => TS markdown and type edge cases
    - fix relative markdown links
- post-MVP
  - add support for sklearn functions (in addition to classes)
  - add support for accessing the built-in datasets
  - add support for better python exception / error handling
  - add support for positional arguments (in addition to the default keyword-based arguments)
  - add basic benchmarks
  - add python <> TS unit tests
  - add support for concurrent python requests and multiple python bridges
    - this may work currently, but it's untested and is likely to have race conditions
  - consider changing identifier names from python `snake_case` to JS `camelCase`
  - update fork of `python-bridge` to be more modern
    - update deps
    - replace bluebird with native promises
    - fix python warnings
    - etc
- ideas
  - add support for [polars](https://github.com/pola-rs/nodejs-polars) and/or [danfo.js](https://github.com/javascriptdata/danfojs) dataframe formatting
  - add support for `pandas`
  - explore more efficient serialization formats for IPC
    - explore memory mapping arrays between node.js and python for efficiency
    - would need the two serialized array formats to be byte-equivalent between python and node.js which seems difficult...
  - explore [pyodide](https://github.com/pyodide/pyodide) as a possible alternative to the Python bridge
