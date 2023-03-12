[sklearn](../readme.md) / [Exports](../modules.md) / HistGradientBoostingRegressorOptions

# Interface: HistGradientBoostingRegressorOptions

## Table of contents

### Properties

- [categorical\_features](HistGradientBoostingRegressorOptions.md#categorical_features)
- [early\_stopping](HistGradientBoostingRegressorOptions.md#early_stopping)
- [interaction\_cst](HistGradientBoostingRegressorOptions.md#interaction_cst)
- [l2\_regularization](HistGradientBoostingRegressorOptions.md#l2_regularization)
- [learning\_rate](HistGradientBoostingRegressorOptions.md#learning_rate)
- [loss](HistGradientBoostingRegressorOptions.md#loss)
- [max\_bins](HistGradientBoostingRegressorOptions.md#max_bins)
- [max\_depth](HistGradientBoostingRegressorOptions.md#max_depth)
- [max\_iter](HistGradientBoostingRegressorOptions.md#max_iter)
- [max\_leaf\_nodes](HistGradientBoostingRegressorOptions.md#max_leaf_nodes)
- [min\_samples\_leaf](HistGradientBoostingRegressorOptions.md#min_samples_leaf)
- [monotonic\_cst](HistGradientBoostingRegressorOptions.md#monotonic_cst)
- [n\_iter\_no\_change](HistGradientBoostingRegressorOptions.md#n_iter_no_change)
- [quantile](HistGradientBoostingRegressorOptions.md#quantile)
- [random\_state](HistGradientBoostingRegressorOptions.md#random_state)
- [scoring](HistGradientBoostingRegressorOptions.md#scoring)
- [tol](HistGradientBoostingRegressorOptions.md#tol)
- [validation\_fraction](HistGradientBoostingRegressorOptions.md#validation_fraction)
- [verbose](HistGradientBoostingRegressorOptions.md#verbose)
- [warm\_start](HistGradientBoostingRegressorOptions.md#warm_start)

## Properties

### categorical\_features

• `Optional` **categorical\_features**: `number`

Indicates the categorical features.

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L542)

___

### early\_stopping

• `Optional` **early\_stopping**: `boolean` \| ``"auto"``

If ‘auto’, early stopping is enabled if the sample size is larger than 10000. If `true`, early stopping is enabled, otherwise early stopping is disabled.

**`Default Value`**

`'auto'`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L572)

___

### interaction\_cst

• `Optional` **interaction\_cst**: ``"pairwise"`` \| ``"no_interaction"``

Specify interaction constraints, the sets of features which can interact with each other in child node splits.

Each item specifies the set of feature indices that are allowed to interact with each other. If there are more features than specified in these constraints, they are treated as if they were specified as an additional set.

The strings “pairwise” and “no\_interactions” are shorthands for allowing only pairwise or no interactions, respectively.

For instance, with 5 features in total, `interaction\_cst=\[{0, 1}\]` is equivalent to `interaction\_cst=\[{0, 1}, {2, 3, 4}\]`, and specifies that each branch of a tree will either only split on features 0 and 1 or only split on features 2, 3 and 4.

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L558)

___

### l2\_regularization

• `Optional` **l2\_regularization**: `number`

The L2 regularization parameter. Use `0` for no regularization (default).

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L530)

___

### learning\_rate

• `Optional` **learning\_rate**: `number`

The learning rate, also known as *shrinkage*. This is used as a multiplicative factor for the leaves values. Use `1` for no shrinkage.

**`Default Value`**

`0.1`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L497)

___

### loss

• `Optional` **loss**: ``"quantile"`` \| ``"squared_error"`` \| ``"absolute_error"`` \| ``"poisson"``

The loss function to use in the boosting process. Note that the “squared error” and “poisson” losses actually implement “half least squares loss” and “half poisson deviance” to simplify the computation of the gradient. Furthermore, “poisson” loss internally uses a log-link and requires `y >= 0`. “quantile” uses the pinball loss.

**`Default Value`**

`'squared_error'`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L485)

___

### max\_bins

• `Optional` **max\_bins**: `number`

The maximum number of bins to use for non-missing values. Before training, each feature of the input array `X` is binned into integer-valued bins, which allows for a much faster training stage. Features with a small number of unique values may use less than `max\_bins` bins. In addition to the `max\_bins` bins, one more bin is always reserved for missing values. Must be no larger than 255.

**`Default Value`**

`255`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L537)

___

### max\_depth

• `Optional` **max\_depth**: `number`

The maximum depth of each tree. The depth of a tree is the number of edges to go from the root to the deepest leaf. Depth isn’t constrained by default.

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L516)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations of the boosting process, i.e. the maximum number of trees.

**`Default Value`**

`100`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L504)

___

### max\_leaf\_nodes

• `Optional` **max\_leaf\_nodes**: `number`

The maximum number of leaves for each tree. Must be strictly greater than 1. If `undefined`, there is no maximum limit.

**`Default Value`**

`31`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L511)

___

### min\_samples\_leaf

• `Optional` **min\_samples\_leaf**: `number`

The minimum number of samples per leaf. For small datasets with less than a few hundred samples, it is recommended to lower this value since only very shallow trees would be built.

**`Default Value`**

`20`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L523)

___

### monotonic\_cst

• `Optional` **monotonic\_cst**: `any`

Monotonic constraint to enforce on each feature are specified using the following integer values:

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L547)

___

### n\_iter\_no\_change

• `Optional` **n\_iter\_no\_change**: `number`

Used to determine when to “early stop”. The fitting process is stopped when none of the last `n\_iter\_no\_change` scores are better than the `n\_iter\_no\_change \- 1` -th-to-last one, up to some tolerance. Only used if early stopping is performed.

**`Default Value`**

`10`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L593)

___

### quantile

• `Optional` **quantile**: `number`

If loss is “quantile”, this parameter specifies which quantile to be estimated and must be between 0 and 1.

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L490)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo-random number generator to control the subsampling in the binning process, and the train/validation data split if early stopping is enabled. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L612)

___

### scoring

• `Optional` **scoring**: `string`

Scoring parameter to use for early stopping. It can be a single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)). If `undefined`, the estimator’s default scorer is used. If `scoring='loss'`, early stopping is checked w.r.t the loss value. Only used if early stopping is performed.

**`Default Value`**

`'loss'`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L579)

___

### tol

• `Optional` **tol**: `number`

The absolute tolerance to use when comparing scores during early stopping. The higher the tolerance, the more likely we are to early stop: higher tolerance means that it will be harder for subsequent iterations to be considered an improvement upon the reference score.

**`Default Value`**

`1e-7`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L600)

___

### validation\_fraction

• `Optional` **validation\_fraction**: `number`

Proportion (or absolute size) of training data to set aside as validation data for early stopping. If `undefined`, early stopping is done on the training data. Only used if early stopping is performed.

**`Default Value`**

`0.1`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L586)

___

### verbose

• `Optional` **verbose**: `number`

The verbosity level. If not zero, print some information about the fitting process.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L607)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble. For results to be valid, the estimator should be re-trained on the same data only. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L565)
