[sklearn](../readme.md) / [Exports](../modules.md) / GradientBoostingClassifierFitOptions

# Interface: GradientBoostingClassifierFitOptions

## Table of contents

### Properties

- [X](GradientBoostingClassifierFitOptions.md#x)
- [monitor](GradientBoostingClassifierFitOptions.md#monitor)
- [sample\_weight](GradientBoostingClassifierFitOptions.md#sample_weight)
- [y](GradientBoostingClassifierFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:943](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L943)

___

### monitor

• `Optional` **monitor**: `any`

The monitor is called after each iteration with the current iteration, a reference to the estimator and the local variables of `\_fit\_stages` as keyword arguments `callable(i, self, locals())`. If the callable returns `true` the fitting procedure is stopped. The monitor can be used for various things such as computing held-out estimates, early stopping, model introspect, and snapshoting.

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:958](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L958)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:953](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L953)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values (strings or integers in classification, real numbers in regression) For classification, labels must correspond to classes.

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:948](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L948)
