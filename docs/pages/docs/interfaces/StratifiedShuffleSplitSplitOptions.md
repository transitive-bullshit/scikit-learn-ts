# StratifiedShuffleSplitSplitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data.

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L223)

### groups?

> `any`

Always ignored, exists for compatibility.

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L233)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

The target variable for supervised learning problems. Stratification is done based on the y labels.

Defined in:  [generated/model\_selection/StratifiedShuffleSplit.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L228)
