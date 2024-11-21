[**sklearn**](../README.md) • **Docs**

***

Gradient Boosting for classification.

This algorithm builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage `n\_classes\_` regression trees are fit on the negative gradient of the loss function, e.g. binary or multiclass log loss. Binary classification is a special case where only a single regression tree is induced.

[`HistGradientBoostingClassifier`](sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier "sklearn.ensemble.HistGradientBoostingClassifier") is a much faster variant of this algorithm for intermediate and large datasets (`n\_samples >= 10\_000`) and supports monotonic constraints.

Read more in the [User Guide](../ensemble.html#gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html)

## Constructors

### new GradientBoostingClassifier()

> **new GradientBoostingClassifier**(`opts`?): [`GradientBoostingClassifier`](GradientBoostingClassifier.md)

#### Parameters

• **opts?**

• **opts.ccp\_alpha?**: `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. Values must be in the range `\[0.0, inf)`. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

**Default Value**

`0`

• **opts.criterion?**: `"squared_error"` \| `"friedman_mse"`

The function to measure the quality of a split. Supported criteria are ‘friedman\_mse’ for the mean squared error with improvement score by Friedman, ‘squared\_error’ for mean squared error. The default value of ‘friedman\_mse’ is generally the best as it can provide a better approximation in some cases.

**Default Value**

`'friedman_mse'`

• **opts.init?**: `"zero"`

An estimator object that is used to compute the initial predictions. `init` has to provide [fit](../../glossary.html#term-fit) and [predict\_proba](../../glossary.html#term-predict_proba). If ‘zero’, the initial raw predictions are set to zero. By default, a `DummyEstimator` predicting the classes priors is used.

• **opts.learning\_rate?**: `number`

Learning rate shrinks the contribution of each tree by `learning\_rate`. There is a trade-off between learning\_rate and n\_estimators. Values must be in the range `\[0.0, inf)`.

**Default Value**

`0.1`

• **opts.loss?**: `"exponential"` \| `"log_loss"`

The loss function to be optimized. ‘log\_loss’ refers to binomial and multinomial deviance, the same as used in logistic regression. It is a good choice for classification with probabilistic outputs. For loss ‘exponential’, gradient boosting recovers the AdaBoost algorithm.

**Default Value**

`'log_loss'`

• **opts.max\_depth?**: `number`

Maximum depth of the individual regression estimators. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the interaction of the input variables. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. If int, values must be in the range `\[1, inf)`.

**Default Value**

`3`

• **opts.max\_features?**: `number` \| `"sqrt"` \| `"log2"`

The number of features to consider when looking for the best split:

• **opts.max\_leaf\_nodes?**: `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. Values must be in the range `\[2, inf)`. If `undefined`, then unlimited number of leaf nodes.

• **opts.min\_impurity\_decrease?**: `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value. Values must be in the range `\[0.0, inf)`.

The weighted impurity decrease equation is the following:

**Default Value**

`0`

• **opts.min\_samples\_leaf?**: `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

**Default Value**

`1`

• **opts.min\_samples\_split?**: `number`

The minimum number of samples required to split an internal node:

**Default Value**

`2`

• **opts.min\_weight\_fraction\_leaf?**: `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided. Values must be in the range `\[0.0, 0.5\]`.

**Default Value**

`0`

• **opts.n\_estimators?**: `number`

The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting so a large number usually results in better performance. Values must be in the range `\[1, inf)`.

**Default Value**

`100`

• **opts.n\_iter\_no\_change?**: `number`

`n\_iter\_no\_change` is used to decide if early stopping will be used to terminate training when validation score is not improving. By default it is set to `undefined` to disable early stopping. If set to a number, it will set aside `validation\_fraction` size of the training data as validation and terminate training when validation score is not improving in all of the previous `n\_iter\_no\_change` numbers of iterations. The split is stratified. Values must be in the range `\[1, inf)`. See [Early stopping in Gradient Boosting](../../auto_examples/ensemble/plot_gradient_boosting_early_stopping.html#sphx-glr-auto-examples-ensemble-plot-gradient-boosting-early-stopping-py).

• **opts.random\_state?**: `number`

Controls the random seed given to each Tree estimator at each boosting iteration. In addition, it controls the random permutation of the features at each split (see Notes for more details). It also controls the random splitting of the training data to obtain a validation set if `n\_iter\_no\_change` is not `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.subsample?**: `number`

The fraction of samples to be used for fitting the individual base learners. If smaller than 1.0 this results in Stochastic Gradient Boosting. `subsample` interacts with the parameter `n\_estimators`. Choosing `subsample < 1.0` leads to a reduction of variance and an increase in bias. Values must be in the range `(0.0, 1.0\]`.

**Default Value**

`1`

• **opts.tol?**: `number`

Tolerance for the early stopping. When the loss is not improving by at least tol for `n\_iter\_no\_change` iterations (if set to a number), the training stops. Values must be in the range `\[0.0, inf)`.

**Default Value**

`0.0001`

• **opts.validation\_fraction?**: `number`

The proportion of training data to set aside as validation set for early stopping. Values must be in the range `(0.0, 1.0)`. Only used if `n\_iter\_no\_change` is set to an integer.

**Default Value**

`0.1`

• **opts.verbose?**: `number`

Enable verbose output. If 1 then it prints progress and performance once in a while (the more trees the lower the frequency). If greater than 1 then it prints progress and performance for every tree. Values must be in the range `\[0, inf)`.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

**Default Value**

`false`

#### Returns

[`GradientBoostingClassifier`](GradientBoostingClassifier.md)

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L21)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The classes labels.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:969](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L969)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`[]\>

The collection of fitted sub-estimators. `n\_trees\_per\_iteration\_` is 1 for binary classification, otherwise `n\_classes`.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:942](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L942)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:1023](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L1023)

***

### init\_

#### Get Signature

> **get** **init\_**(): `Promise`\<`any`\>

The estimator that provides the initial predictions. Set via the `init` argument.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:915](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L915)

***

### max\_features\_

#### Get Signature

> **get** **max\_features\_**(): `Promise`\<`number`\>

The inferred value of max\_features.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:1077](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L1077)

***

### n\_classes\_

#### Get Signature

> **get** **n\_classes\_**(): `Promise`\<`number`\>

The number of classes.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:1050](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L1050)

***

### n\_estimators\_

#### Get Signature

> **get** **n\_estimators\_**(): `Promise`\<`number`\>

The number of estimators as selected by early stopping (if `n\_iter\_no\_change` is specified). Otherwise it is set to `n\_estimators`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:753](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L753)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:996](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L996)

***

### n\_trees\_per\_iteration\_

#### Get Signature

> **get** **n\_trees\_per\_iteration\_**(): `Promise`\<`number`\>

The number of trees that are built at each iteration. For binary classifiers, this is always 1.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:780](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L780)

***

### oob\_improvement\_

#### Get Signature

> **get** **oob\_improvement\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The improvement in loss on the out-of-bag samples relative to the previous iteration. `oob\_improvement\_\[0\]` is the improvement in loss of the first stage over the `init` estimator. Only available if `subsample < 1.0`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:807](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L807)

***

### oob\_score\_

#### Get Signature

> **get** **oob\_score\_**(): `Promise`\<`number`\>

The last value of the loss on the out-of-bag samples. It is the same as `oob\_scores\_\[-1\]`. Only available if `subsample < 1.0`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:861](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L861)

***

### oob\_scores\_

#### Get Signature

> **get** **oob\_scores\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The full history of the loss values on the out-of-bag samples. Only available if `subsample < 1.0`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:834](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L834)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L164)

***

### train\_score\_

#### Get Signature

> **get** **train\_score\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The i-th score `train\_score\_\[i\]` is the loss of the model at iteration `i` on the in-bag sample. If `subsample \== 1` this is the loss on the training data.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:888](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L888)

## Methods

### apply()

> **apply**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[][]\>

Apply trees in the ensemble to X, return leaf indices.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted to a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[][]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L237)

***

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Compute the decision function of `X`.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L273)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L220)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the gradient boosting model.

#### Parameters

• **opts**

• **opts.monitor?**: `any`

The monitor is called after each iteration with the current iteration, a reference to the estimator and the local variables of `\_fit\_stages` as keyword arguments `callable(i, self, locals())`. If the callable returns `true` the fitting procedure is stopped. The monitor can be used for various things such as computing held-out estimates, early stopping, model introspect, and snapshotting.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (strings or integers in classification, real numbers in regression) For classification, labels must correspond to classes.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L309)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L362)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L177)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict class for X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L398)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Predict class log-probabilities for X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L434)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Predict class probabilities for X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L470)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Test samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L508)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.monitor?**: `string` \| `boolean`

Metadata routing for `monitor` parameter in `fit`.

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L558)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L603)

***

### staged\_decision\_function()

> **staged\_decision\_function**(`opts`): `Promise`\<`any`[]\>

Compute decision function of `X` for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L641)

***

### staged\_predict()

> **staged\_predict**(`opts`): `Promise`\<`any`[]\>

Predict class at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L679)

***

### staged\_predict\_proba()

> **staged\_predict\_proba**(`opts`): `Promise`\<`any`[]\>

Predict class probabilities at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:717](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L717)
