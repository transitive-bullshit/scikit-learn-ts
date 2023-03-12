[sklearn](../readme.md) / [Exports](../modules.md) / StratifiedShuffleSplitSplitOptions

# Interface: StratifiedShuffleSplitSplitOptions

## Table of contents

### Properties

- [X](StratifiedShuffleSplitSplitOptions.md#x)
- [groups](StratifiedShuffleSplitSplitOptions.md#groups)
- [y](StratifiedShuffleSplitSplitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data.

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L223)

___

### groups

• `Optional` **groups**: `any`

Always ignored, exists for compatibility.

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L233)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target variable for supervised learning problems. Stratification is done based on the y labels.

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L228)