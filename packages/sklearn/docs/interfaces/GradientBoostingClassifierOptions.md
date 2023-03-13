# GradientBoostingClassifierOptions

## Properties

### ccp\_alpha?

> `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. Values must be in the range `\[0.0, inf)`. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:922](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L922)

### criterion?

> `"squared_error"` \| `"friedman_mse"`

The function to measure the quality of a split. Supported criteria are ‘friedman\_mse’ for the mean squared error with improvement score by Friedman, ‘squared\_error’ for mean squared error. The default value of ‘friedman\_mse’ is generally the best as it can provide a better approximation in some cases.

#### Default Value

`'friedman_mse'`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:825](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L825)

### init?

> `"zero"`

An estimator object that is used to compute the initial predictions. `init` has to provide [`fit`](#sklearn.ensemble.GradientBoostingClassifier.fit "sklearn.ensemble.GradientBoostingClassifier.fit") and [`predict\_proba`](#sklearn.ensemble.GradientBoostingClassifier.predict_proba "sklearn.ensemble.GradientBoostingClassifier.predict_proba"). If ‘zero’, the initial raw predictions are set to zero. By default, a `DummyEstimator` predicting the classes priors is used.

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:867](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L867)

### learning\_rate?

> `number`

Learning rate shrinks the contribution of each tree by `learning\_rate`. There is a trade-off between learning\_rate and n\_estimators. Values must be in the range `\[0.0, inf)`.

#### Default Value

`0.1`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:804](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L804)

### loss?

> `"exponential"` \| `"log_loss"` \| `"deviance"`

The loss function to be optimized. ‘log\_loss’ refers to binomial and multinomial deviance, the same as used in logistic regression. It is a good choice for classification with probabilistic outputs. For loss ‘exponential’, gradient boosting recovers the AdaBoost algorithm.

#### Default Value

`'log_loss'`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:797](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L797)

### max\_depth?

> `number`

Maximum depth of the individual regression estimators. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the interaction of the input variables. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. If int, values must be in the range `\[1, inf)`.

#### Default Value

`3`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:853](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L853)

### max\_features?

> `number` \| `"auto"` \| `"sqrt"` \| `"log2"`

The number of features to consider when looking for the best split:

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:877](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L877)

### max\_leaf\_nodes?

> `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. Values must be in the range `\[2, inf)`. If `undefined`, then unlimited number of leaf nodes.

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:889](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L889)

### min\_impurity\_decrease?

> `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value. Values must be in the range `\[0.0, inf)`.

The weighted impurity decrease equation is the following:

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:862](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L862)

### min\_samples\_leaf?

> `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

#### Default Value

`1`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:839](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L839)

### min\_samples\_split?

> `number`

The minimum number of samples required to split an internal node:

#### Default Value

`2`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:832](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L832)

### min\_weight\_fraction\_leaf?

> `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided. Values must be in the range `\[0.0, 0.5\]`.

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:846](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L846)

### n\_estimators?

> `number`

The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting so a large number usually results in better performance. Values must be in the range `\[1, inf)`.

#### Default Value

`100`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:811](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L811)

### n\_iter\_no\_change?

> `number`

`n\_iter\_no\_change` is used to decide if early stopping will be used to terminate training when validation score is not improving. By default it is set to `undefined` to disable early stopping. If set to a number, it will set aside `validation\_fraction` size of the training data as validation and terminate training when validation score is not improving in all of the previous `n\_iter\_no\_change` numbers of iterations. The split is stratified. Values must be in the range `\[1, inf)`.

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:908](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L908)

### random\_state?

> `number`

Controls the random seed given to each Tree estimator at each boosting iteration. In addition, it controls the random permutation of the features at each split (see Notes for more details). It also controls the random splitting of the training data to obtain a validation set if `n\_iter\_no\_change` is not `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:872](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L872)

### subsample?

> `number`

The fraction of samples to be used for fitting the individual base learners. If smaller than 1.0 this results in Stochastic Gradient Boosting. `subsample` interacts with the parameter `n\_estimators`. Choosing `subsample < 1.0` leads to a reduction of variance and an increase in bias. Values must be in the range `(0.0, 1.0\]`.

#### Default Value

`1`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:818](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L818)

### tol?

> `number`

Tolerance for the early stopping. When the loss is not improving by at least tol for `n\_iter\_no\_change` iterations (if set to a number), the training stops. Values must be in the range `\[0.0, inf)`.

#### Default Value

`0.0001`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:915](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L915)

### validation\_fraction?

> `number`

The proportion of training data to set aside as validation set for early stopping. Values must be in the range `(0.0, 1.0)`. Only used if `n\_iter\_no\_change` is set to an integer.

#### Default Value

`0.1`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:903](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L903)

### verbose?

> `number`

Enable verbose output. If 1 then it prints progress and performance once in a while (the more trees the lower the frequency). If greater than 1 then it prints progress and performance for every tree. Values must be in the range `\[0, inf)`.

#### Default Value

`0`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:884](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L884)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/ensemble/GradientBoostingClassifier.ts:896](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L896)
