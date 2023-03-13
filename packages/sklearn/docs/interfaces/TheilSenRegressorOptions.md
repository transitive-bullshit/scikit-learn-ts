# TheilSenRegressorOptions

## Properties

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L408)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations.

#### Default Value

`true`

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L401)

### max\_iter?

> `number`

Maximum number of iterations for the calculation of spatial median.

#### Default Value

`300`

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L427)

### max\_subpopulation?

> `number`

Instead of computing with a set of cardinality ‘n choose k’, where n is the number of samples and k is the number of subsamples (at least number of features), consider only a stochastic subpopulation of a given maximal size if ‘n choose k’ is larger than max\_subpopulation. For other than small problem sizes this parameter will determine memory usage and runtime if n\_subsamples is not changed. Note that the data type should be int but floats such as 1e4 can be accepted too.

#### Default Value

`10000`

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L415)

### n\_jobs?

> `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L444)

### n\_subsamples?

> `number`

Number of samples to calculate the parameters. This is at least the number of features (plus 1 if fit\_intercept=`true`) and the number of samples as a maximum. A lower number leads to a higher breakdown point and a low efficiency while a high number leads to a low breakdown point and a high efficiency. If `undefined`, take the minimum number of subsamples leading to maximal robustness. If n\_subsamples is set to n\_samples, Theil-Sen is identical to least squares.

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L420)

### random\_state?

> `number`

A random number generator instance to define the state of the random permutations generator. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L439)

### tol?

> `number`

Tolerance when calculating spatial median.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L434)

### verbose?

> `boolean`

Verbose mode when fitting the model.

#### Default Value

`false`

Defined in:  [generated/linear\_model/TheilSenRegressor.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L451)
