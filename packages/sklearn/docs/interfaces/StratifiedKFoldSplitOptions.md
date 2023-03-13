# StratifiedKFoldSplitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data.

Defined in:  [generated/model\_selection/StratifiedKFold.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L206)

### groups?

> `any`

Always ignored, exists for compatibility.

Defined in:  [generated/model\_selection/StratifiedKFold.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L216)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

The target variable for supervised learning problems. Stratification is done based on the y labels.

Defined in:  [generated/model\_selection/StratifiedKFold.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L211)
