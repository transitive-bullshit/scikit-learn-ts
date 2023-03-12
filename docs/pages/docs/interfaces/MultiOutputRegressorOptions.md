# MultiOutputRegressorOptions

## Properties

### estimator?

> `any`

An estimator object implementing [fit](../../glossary.html#term-fit) and [predict](../../glossary.html#term-predict).

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L325)

### n\_jobs?

> `number`

The number of jobs to run in parallel. [`fit`](#sklearn.multioutput.MultiOutputRegressor.fit "sklearn.multioutput.MultiOutputRegressor.fit"), [`predict`](#sklearn.multioutput.MultiOutputRegressor.predict "sklearn.multioutput.MultiOutputRegressor.predict") and [`partial\_fit`](#sklearn.multioutput.MultiOutputRegressor.partial_fit "sklearn.multioutput.MultiOutputRegressor.partial_fit") (if supported by the passed estimator) will be parallelized for each target.

When individual estimators are fast to train or predict, using `n\_jobs > 1` can result in slower performance due to the parallelism overhead.

`undefined` means `1` unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all available processes / threads. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L334)
