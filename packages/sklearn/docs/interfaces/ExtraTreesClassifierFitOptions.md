[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreesClassifierFitOptions

# Interface: ExtraTreesClassifierFitOptions

## Table of contents

### Properties

- [X](ExtraTreesClassifierFitOptions.md#x)
- [sample\_weight](ExtraTreesClassifierFitOptions.md#sample_weight)
- [y](ExtraTreesClassifierFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`.

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L754)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:764](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L764)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values (class labels in classification, real numbers in regression).

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:759](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L759)
