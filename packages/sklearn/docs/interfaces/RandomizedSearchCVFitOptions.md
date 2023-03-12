[sklearn](../readme.md) / [Exports](../modules.md) / RandomizedSearchCVFitOptions

# Interface: RandomizedSearchCVFitOptions

## Table of contents

### Properties

- [X](RandomizedSearchCVFitOptions.md#x)
- [fit\_params](RandomizedSearchCVFitOptions.md#fit_params)
- [groups](RandomizedSearchCVFitOptions.md#groups)
- [y](RandomizedSearchCVFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:821](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L821)

___

### fit\_params

• `Optional` **fit\_params**: `any`

Parameters passed to the `fit` method of the estimator.

If a fit parameter is an array-like whose length is equal to `num\_samples` then it will be split across CV groups along with `X` and `y`. For example, the [sample\_weight](../../glossary.html#term-sample_weight) parameter is split because `len(sample\_weights) \= len(X)`.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:838](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L838)

___

### groups

• `Optional` **groups**: [`ArrayLike`](../modules.md#arraylike)

Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:831](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L831)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)[]

Target relative to X for classification or regression; `undefined` for unsupervised learning.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:826](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L826)
