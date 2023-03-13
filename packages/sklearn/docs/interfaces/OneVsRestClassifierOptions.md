# OneVsRestClassifierOptions

## Properties

### estimator?

> `any`

A regressor or a classifier that implements [fit](../../glossary.html#term-fit). When a classifier is passed, [decision\_function](../../glossary.html#term-decision_function) will be used in priority and it will fallback to [predict\_proba](../../glossary.html#term-predict_proba) if it is not available. When a regressor is passed, [predict](../../glossary.html#term-predict) is used.

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L460)

### n\_jobs?

> `number`

The number of jobs to use for the computation: the `n\_classes` one-vs-rest problems are computed in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L467)

### verbose?

> `number`

The verbosity level, if non zero, progress messages are printed. Below 50, the output is sent to stderr. Otherwise, the output is sent to stdout. The frequency of the messages increases with the verbosity level, reporting all iterations at 10. See [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") for more details.

#### Default Value

`0`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L474)
