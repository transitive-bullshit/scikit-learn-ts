[sklearn](../readme.md) / [Exports](../modules.md) / AdaBoostRegressorOptions

# Interface: AdaBoostRegressorOptions

## Table of contents

### Properties

- [base\_estimator](AdaBoostRegressorOptions.md#base_estimator)
- [estimator](AdaBoostRegressorOptions.md#estimator)
- [learning\_rate](AdaBoostRegressorOptions.md#learning_rate)
- [loss](AdaBoostRegressorOptions.md#loss)
- [n\_estimators](AdaBoostRegressorOptions.md#n_estimators)
- [random\_state](AdaBoostRegressorOptions.md#random_state)

## Properties

### base\_estimator

• `Optional` **base\_estimator**: `any`

The base estimator from which the boosted ensemble is built. If `undefined`, then the base estimator is [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor") initialized with `max\_depth=3`.

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L485)

___

### estimator

• `Optional` **estimator**: `any`

The base estimator from which the boosted ensemble is built. If `undefined`, then the base estimator is [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor") initialized with `max\_depth=3`.

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L454)

___

### learning\_rate

• `Optional` **learning\_rate**: `number`

Weight applied to each regressor at each boosting iteration. A higher learning rate increases the contribution of each regressor. There is a trade-off between the `learning\_rate` and `n\_estimators` parameters. Values must be in the range `(0.0, inf)`.

**`Default Value`**

`1`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L468)

___

### loss

• `Optional` **loss**: ``"linear"`` \| ``"square"`` \| ``"exponential"``

The loss function to use when updating the weights after each boosting iteration.

**`Default Value`**

`'linear'`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L475)

___

### n\_estimators

• `Optional` **n\_estimators**: `number`

The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early. Values must be in the range `\[1, inf)`.

**`Default Value`**

`50`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L461)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the random seed given at each `estimator` at each boosting iteration. Thus, it is only used when `estimator` exposes a `random\_state`. In addition, it controls the bootstrap of the weights used to train the `estimator` at each boosting iteration. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L480)
