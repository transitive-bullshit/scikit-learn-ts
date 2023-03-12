[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreesRegressorOptions

# Interface: ExtraTreesRegressorOptions

## Table of contents

### Properties

- [bootstrap](ExtraTreesRegressorOptions.md#bootstrap)
- [ccp\_alpha](ExtraTreesRegressorOptions.md#ccp_alpha)
- [criterion](ExtraTreesRegressorOptions.md#criterion)
- [max\_depth](ExtraTreesRegressorOptions.md#max_depth)
- [max\_features](ExtraTreesRegressorOptions.md#max_features)
- [max\_leaf\_nodes](ExtraTreesRegressorOptions.md#max_leaf_nodes)
- [max\_samples](ExtraTreesRegressorOptions.md#max_samples)
- [min\_impurity\_decrease](ExtraTreesRegressorOptions.md#min_impurity_decrease)
- [min\_samples\_leaf](ExtraTreesRegressorOptions.md#min_samples_leaf)
- [min\_samples\_split](ExtraTreesRegressorOptions.md#min_samples_split)
- [min\_weight\_fraction\_leaf](ExtraTreesRegressorOptions.md#min_weight_fraction_leaf)
- [n\_estimators](ExtraTreesRegressorOptions.md#n_estimators)
- [n\_jobs](ExtraTreesRegressorOptions.md#n_jobs)
- [oob\_score](ExtraTreesRegressorOptions.md#oob_score)
- [random\_state](ExtraTreesRegressorOptions.md#random_state)
- [verbose](ExtraTreesRegressorOptions.md#verbose)
- [warm\_start](ExtraTreesRegressorOptions.md#warm_start)

## Properties

### bootstrap

• `Optional` **bootstrap**: `boolean`

Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree.

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L546)

___

### ccp\_alpha

• `Optional` **ccp\_alpha**: `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L584)

___

### criterion

• `Optional` **criterion**: ``"squared_error"`` \| ``"absolute_error"`` \| ``"friedman_mse"`` \| ``"poisson"``

The function to measure the quality of a split. Supported criteria are “squared\_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman\_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute\_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits. Training using “absolute\_error” is significantly slower than when using “squared\_error”.

**`Default Value`**

`'squared_error'`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L492)

___

### max\_depth

• `Optional` **max\_depth**: `number`

The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L497)

___

### max\_features

• `Optional` **max\_features**: `number` \| ``"sqrt"`` \| ``"log2"``

The number of features to consider when looking for the best split:

**`Default Value`**

`1`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L525)

___

### max\_leaf\_nodes

• `Optional` **max\_leaf\_nodes**: `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L530)

___

### max\_samples

• `Optional` **max\_samples**: `number`

If bootstrap is `true`, the number of samples to draw from X to train each base estimator.

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L589)

___

### min\_impurity\_decrease

• `Optional` **min\_impurity\_decrease**: `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

The weighted impurity decrease equation is the following:

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L539)

___

### min\_samples\_leaf

• `Optional` **min\_samples\_leaf**: `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

**`Default Value`**

`1`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L511)

___

### min\_samples\_split

• `Optional` **min\_samples\_split**: `number`

The minimum number of samples required to split an internal node:

**`Default Value`**

`2`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L504)

___

### min\_weight\_fraction\_leaf

• `Optional` **min\_weight\_fraction\_leaf**: `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L518)

___

### n\_estimators

• `Optional` **n\_estimators**: `number`

The number of trees in the forest.

**`Default Value`**

`100`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L485)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.ExtraTreesRegressor.fit "sklearn.ensemble.ExtraTreesRegressor.fit"), [`predict`](#sklearn.ensemble.ExtraTreesRegressor.predict "sklearn.ensemble.ExtraTreesRegressor.predict"), [`decision\_path`](#sklearn.ensemble.ExtraTreesRegressor.decision_path "sklearn.ensemble.ExtraTreesRegressor.decision_path") and [`apply`](#sklearn.ensemble.ExtraTreesRegressor.apply "sklearn.ensemble.ExtraTreesRegressor.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L558)

___

### oob\_score

• `Optional` **oob\_score**: `boolean`

Whether to use out-of-bag samples to estimate the generalization score. Only available if bootstrap=`true`.

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L553)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls 3 sources of randomness:

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L563)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity when fitting and predicting.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L570)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [Glossary](../../glossary.html#term-warm_start) and [Fitting additional weak-learners](../ensemble.html#gradient-boosting-warm-start) for details.

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L577)
