# KBinsDiscretizerOptions

## Properties

### dtype?

> `any`

The desired data-type for the output. If `undefined`, output dtype is consistent with input dtype. Only np.float32 and np.float64 are supported.

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L441)

### encode?

> `"onehot"` \| `"onehot-dense"` \| `"ordinal"`

Method used to encode the transformed result.

#### Default Value

`'onehot'`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L429)

### n\_bins?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

The number of bins to produce. Raises ValueError if `n\_bins < 2`.

#### Default Value

`5`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L422)

### random\_state?

> `number`

Determines random number generation for subsampling. Pass an int for reproducible results across multiple function calls. See the `subsample` parameter for more details. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L451)

### strategy?

> `"uniform"` \| `"quantile"` \| `"kmeans"`

Strategy used to define the widths of the bins.

#### Default Value

`'quantile'`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L436)

### subsample?

> `number`

Maximum number of samples, used to fit the model, for computational efficiency. Used when `strategy="quantile"`. `subsample=None` means that all the training samples are used when computing the quantiles that determine the binning thresholds. Since quantile computation relies on sorting each column of `X` and that sorting has an `n log(n)` time complexity, it is recommended to use subsampling on datasets with a very large number of samples.

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L446)
