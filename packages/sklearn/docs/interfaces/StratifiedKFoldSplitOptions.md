[sklearn](../readme.md) / [Exports](../modules.md) / StratifiedKFoldSplitOptions

# Interface: StratifiedKFoldSplitOptions

## Table of contents

### Properties

- [X](StratifiedKFoldSplitOptions.md#x)
- [groups](StratifiedKFoldSplitOptions.md#groups)
- [y](StratifiedKFoldSplitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data.

#### Defined in

[generated/model_selection/StratifiedKFold.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L206)

___

### groups

• `Optional` **groups**: `any`

Always ignored, exists for compatibility.

#### Defined in

[generated/model_selection/StratifiedKFold.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L216)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target variable for supervised learning problems. Stratification is done based on the y labels.

#### Defined in

[generated/model_selection/StratifiedKFold.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L211)
