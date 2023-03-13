# GradientBoostingRegressorOptions

## Properties

### alpha?

> `number`

The alpha-quantile of the huber loss function and the quantile loss function. Only if `loss='huber'` or `loss='quantile'`. Values must be in the range `(0.0, 1.0)`.

#### Default Value

`0.9`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:649](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L649)

### ccp\_alpha?

> `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. Values must be in the range `\[0.0, inf)`. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L694)

### criterion?

> `"squared_error"` \| `"friedman_mse"`

The function to measure the quality of a split. Supported criteria are “friedman\_mse” for the mean squared error with improvement score by Friedman, “squared\_error” for mean squared error. The default value of “friedman\_mse” is generally the best as it can provide a better approximation in some cases.

#### Default Value

`'friedman_mse'`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L590)

### init?

> `"zero"`

An estimator object that is used to compute the initial predictions. `init` has to provide [fit](../../glossary.html#term-fit) and [predict](../../glossary.html#term-predict). If ‘zero’, the initial raw predictions are set to zero. By default a `DummyEstimator` is used, predicting either the average target value (for loss=’squared\_error’), or a quantile for the other losses.

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L632)

### learning\_rate?

> `number`

Learning rate shrinks the contribution of each tree by `learning\_rate`. There is a trade-off between learning\_rate and n\_estimators. Values must be in the range `\[0.0, inf)`.

#### Default Value

`0.1`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L569)

### loss?

> `"quantile"` \| `"squared_error"` \| `"absolute_error"` \| `"huber"`

Loss function to be optimized. ‘squared\_error’ refers to the squared error for regression. ‘absolute\_error’ refers to the absolute error of regression and is a robust loss function. ‘huber’ is a combination of the two. ‘quantile’ allows quantile regression (use `alpha` to specify the quantile).

#### Default Value

`'squared_error'`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L562)

### max\_depth?

> `number`

Maximum depth of the individual regression estimators. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the interaction of the input variables. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. If int, values must be in the range `\[1, inf)`.

#### Default Value

`3`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L618)

### max\_features?

> `number` \| `"auto"` \| `"sqrt"` \| `"log2"`

The number of features to consider when looking for the best split:

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L642)

### max\_leaf\_nodes?

> `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. Values must be in the range `\[2, inf)`. If `undefined`, then unlimited number of leaf nodes.

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:661](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L661)

### min\_impurity\_decrease?

> `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value. Values must be in the range `\[0.0, inf)`.

The weighted impurity decrease equation is the following:

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L627)

### min\_samples\_leaf?

> `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

#### Default Value

`1`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L604)

### min\_samples\_split?

> `number`

The minimum number of samples required to split an internal node:

#### Default Value

`2`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L597)

### min\_weight\_fraction\_leaf?

> `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided. Values must be in the range `\[0.0, 0.5\]`.

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L611)

### n\_estimators?

> `number`

The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting so a large number usually results in better performance. Values must be in the range `\[1, inf)`.

#### Default Value

`100`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L576)

### n\_iter\_no\_change?

> `number`

`n\_iter\_no\_change` is used to decide if early stopping will be used to terminate training when validation score is not improving. By default it is set to `undefined` to disable early stopping. If set to a number, it will set aside `validation\_fraction` size of the training data as validation and terminate training when validation score is not improving in all of the previous `n\_iter\_no\_change` numbers of iterations. Values must be in the range `\[1, inf)`.

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L680)

### random\_state?

> `number`

Controls the random seed given to each Tree estimator at each boosting iteration. In addition, it controls the random permutation of the features at each split (see Notes for more details). It also controls the random splitting of the training data to obtain a validation set if `n\_iter\_no\_change` is not `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L637)

### subsample?

> `number`

The fraction of samples to be used for fitting the individual base learners. If smaller than 1.0 this results in Stochastic Gradient Boosting. `subsample` interacts with the parameter `n\_estimators`. Choosing `subsample < 1.0` leads to a reduction of variance and an increase in bias. Values must be in the range `(0.0, 1.0\]`.

#### Default Value

`1`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L583)

### tol?

> `number`

Tolerance for the early stopping. When the loss is not improving by at least tol for `n\_iter\_no\_change` iterations (if set to a number), the training stops. Values must be in the range `\[0.0, inf)`.

#### Default Value

`0.0001`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L687)

### validation\_fraction?

> `number`

The proportion of training data to set aside as validation set for early stopping. Values must be in the range `(0.0, 1.0)`. Only used if `n\_iter\_no\_change` is set to an integer.

#### Default Value

`0.1`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:675](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L675)

### verbose?

> `number`

Enable verbose output. If 1 then it prints progress and performance once in a while (the more trees the lower the frequency). If greater than 1 then it prints progress and performance for every tree. Values must be in the range `\[0, inf)`.

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L656)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L668)
