# QuantileTransformerOptions

## Properties

### copy?

> `boolean`

Set to `false` to perform inplace transformation and avoid a copy (if the input is already a numpy array).

#### Default Value

`true`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L490)

### ignore\_implicit\_zeros?

> `boolean`

Only applies to sparse matrices. If `true`, the sparse entries of the matrix are discarded to compute the quantile statistics. If `false`, these entries are treated as zeros.

#### Default Value

`false`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L471)

### n\_quantiles?

> `number`

Number of quantiles to be computed. It corresponds to the number of landmarks used to discretize the cumulative distribution function. If n\_quantiles is larger than the number of samples, n\_quantiles is set to the number of samples as a larger number of quantiles does not give a better approximation of the cumulative distribution function estimator.

#### Default Value

`1000`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L457)

### output\_distribution?

> `"uniform"` \| `"normal"`

Marginal distribution for the transformed data. The choices are ‘uniform’ (default) or ‘normal’.

#### Default Value

`'uniform'`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L464)

### random\_state?

> `number`

Determines random number generation for subsampling and smoothing noise. Please see `subsample` for more details. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/preprocessing/QuantileTransformer.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L483)

### subsample?

> `number`

Maximum number of samples used to estimate the quantiles for computational efficiency. Note that the subsampling procedure may differ for value-identical sparse and dense matrices.

#### Default Value

`10`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L478)
