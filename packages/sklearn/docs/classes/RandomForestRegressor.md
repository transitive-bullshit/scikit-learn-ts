# Class: RandomForestRegressor

A random forest regressor.

A random forest is a meta estimator that fits a number of decision tree regressors on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. Trees in the forest use the best split strategy, i.e. equivalent to passing `splitter="best"` to the underlying [`DecisionTreeRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor"). The sub-sample size is controlled with the `max_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

For a comparison between tree-based ensemble models see the example [Comparing Random Forests and Histogram Gradient Boosting models](https://scikit-learn.org/stable/modules/generated/../../auto_examples/ensemble/plot_forest_hist_grad_boosting_comparison.html#sphx-glr-auto-examples-ensemble-plot-forest-hist-grad-boosting-comparison-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html)

## Constructors

### new RandomForestRegressor()

> **new RandomForestRegressor**(`opts`?): [`RandomForestRegressor`](RandomForestRegressor.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.bootstrap`? | `boolean` | Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree. |
| `opts.ccp_alpha`? | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](https://scikit-learn.org/stable/modules/generated/../tree.html#minimal-cost-complexity-pruning) for details. |
| `opts.criterion`? | `"squared_error"` \| `"absolute_error"` \| `"friedman_mse"` \| `"poisson"` | The function to measure the quality of a split. Supported criteria are “squared_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits. Training using “absolute_error” is significantly slower than when using “squared_error”. |
| `opts.max_depth`? | `number` | The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples. |
| `opts.max_features`? | `number` \| `"sqrt"` \| `"log2"` | The number of features to consider when looking for the best split: |
| `opts.max_leaf_nodes`? | `number` | Grow trees with `max_leaf_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes. |
| `opts.max_samples`? | `number` | If bootstrap is `true`, the number of samples to draw from X to train each base estimator. |
| `opts.min_impurity_decrease`? | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value. The weighted impurity decrease equation is the following: |
| `opts.min_samples_leaf`? | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min_samples_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression. |
| `opts.min_samples_split`? | `number` | The minimum number of samples required to split an internal node: |
| `opts.min_weight_fraction_leaf`? | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided. |
| `opts.monotonic_cst`? | `any`[] | 1: monotonically increasing |
| `opts.n_estimators`? | `number` | The number of trees in the forest. |
| `opts.n_jobs`? | `number` | The number of jobs to run in parallel. [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.RandomForestRegressor.fit "sklearn.ensemble.RandomForestRegressor.fit"), [`predict`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.RandomForestRegressor.predict "sklearn.ensemble.RandomForestRegressor.predict"), [`decision_path`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.RandomForestRegressor.decision_path "sklearn.ensemble.RandomForestRegressor.decision_path") and [`apply`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.RandomForestRegressor.apply "sklearn.ensemble.RandomForestRegressor.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.oob_score`? | `boolean` | Whether to use out-of-bag samples to estimate the generalization score. By default, [`r2_score`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html#sklearn.metrics.r2_score "sklearn.metrics.r2_score") is used. Provide a callable with signature `metric(y_true, y_pred)` to use a custom metric. Only available if `bootstrap=True`. |
| `opts.random_state`? | `number` | Controls both the randomness of the bootstrapping of the samples used when building trees (if `bootstrap=True`) and the sampling of the features to consider when looking for the best split at each node (if `max_features < n_features`). See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details. |
| `opts.verbose`? | `number` | Controls the verbosity when fitting and predicting. |
| `opts.warm_start`? | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start) and [Fitting additional trees](https://scikit-learn.org/stable/modules/generated/../ensemble.html#tree-ensemble-warm-start) for details. |

#### Returns

[`RandomForestRegressor`](RandomForestRegressor.md)

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/ensemble/RandomForestRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/ensemble/RandomForestRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/ensemble/RandomForestRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L23) |
| `id` | `string` | `undefined` | [generated/ensemble/RandomForestRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L20) |
| `opts` | `any` | `undefined` | [generated/ensemble/RandomForestRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L21) |

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L535)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L562)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L616)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L589)

***

### n\_outputs\_

#### Get Signature

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

The number of outputs when `fit` is performed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L643)

***

### oob\_prediction\_

#### Get Signature

> **get** **oob\_prediction\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Prediction computed with out-of-bag estimate on the training set. This attribute exists only when `oob_score` is `true`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L697)

***

### oob\_score\_

#### Get Signature

> **get** **oob\_score\_**(): `Promise`\<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob_score` is `true`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L670)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L148)

## Methods

### apply()

> **apply**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr_matrix`. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L221)

***

### decision\_path()

> **decision\_path**(`opts`): `Promise`\<`any`[]\>

Return the decision path in the forest.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr_matrix`. |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L255)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L204)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a forest of trees from the training set (X, y).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc_matrix`. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L291)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L337)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L161)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the trees in the forest.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr_matrix`. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L375)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L411)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L459)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L499)
