# RandomForestRegressor

A random forest regressor.

A random forest is a meta estimator that fits a number of classifying decision trees on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. The sub-sample size is controlled with the `max\_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

For a comparison between tree-based ensemble models see the example [Comparing Random Forests and Histogram Gradient Boosting models](../../auto_examples/ensemble/plot_forest_hist_grad_boosting_comparison.html#sphx-glr-auto-examples-ensemble-plot-forest-hist-grad-boosting-comparison-py).

Read more in the [User Guide](../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new RandomForestRegressor(opts?: object): RandomForestRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.bootstrap?` | `boolean` | Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree.  `Default Value`  `true` |
| `opts.ccp_alpha?` | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.  `Default Value`  `0` |
| `opts.criterion?` | `"squared_error"` \| `"absolute_error"` \| `"friedman_mse"` \| `"poisson"` | The function to measure the quality of a split. Supported criteria are “squared\_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman\_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute\_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits. Training using “absolute\_error” is significantly slower than when using “squared\_error”.  `Default Value`  `'squared_error'` |
| `opts.max_depth?` | `number` | The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. |
| `opts.max_features?` | `number` \| `"sqrt"` \| `"log2"` | The number of features to consider when looking for the best split:  `Default Value`  `1` |
| `opts.max_leaf_nodes?` | `number` | Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes. |
| `opts.max_samples?` | `number` | If bootstrap is `true`, the number of samples to draw from X to train each base estimator. |
| `opts.min_impurity_decrease?` | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following:  `Default Value`  `0` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.  `Default Value`  `1` |
| `opts.min_samples_split?` | `number` | The minimum number of samples required to split an internal node:  `Default Value`  `2` |
| `opts.min_weight_fraction_leaf?` | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.  `Default Value`  `0` |
| `opts.n_estimators?` | `number` | The number of trees in the forest.  `Default Value`  `100` |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomForestRegressor.fit "sklearn.ensemble.RandomForestRegressor.fit"), [`predict`](#sklearn.ensemble.RandomForestRegressor.predict "sklearn.ensemble.RandomForestRegressor.predict"), [`decision\_path`](#sklearn.ensemble.RandomForestRegressor.decision_path "sklearn.ensemble.RandomForestRegressor.decision_path") and [`apply`](#sklearn.ensemble.RandomForestRegressor.apply "sklearn.ensemble.RandomForestRegressor.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.oob_score?` | `boolean` | Whether to use out-of-bag samples to estimate the generalization score. By default, [`r2\_score`](sklearn.metrics.r2_score.html#sklearn.metrics.r2_score "sklearn.metrics.r2_score") is used. Provide a callable with signature `metric(y\_true, y\_pred)` to use a custom metric. Only available if `bootstrap=True`.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Controls both the randomness of the bootstrapping of the samples used when building trees (if `bootstrap=True`) and the sampling of the features to consider when looking for the best split at each node (if `max\_features < n\_features`). See [Glossary](../../glossary.html#term-random_state) for details. |
| `opts.verbose?` | `number` | Controls the verbosity when fitting and predicting.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [Glossary](../../glossary.html#term-warm_start) and [Fitting additional weak-learners](../ensemble.html#gradient-boosting-warm-start) for details.  `Default Value`  `false` |

### Returns

[`RandomForestRegressor`](RandomForestRegressor.md)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L27)

## Methods

### apply()

Apply trees in the forest to X, return leaf indices.

#### Signature

```ts
apply(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L239)

### decision\_path()

Return the decision path in the forest.

#### Signature

```ts
decision_path(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L274)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L222)

### fit()

Build a forest of trees from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L312)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L363)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L156)

### predict()

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the trees in the forest.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L403)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L440)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L493)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L535)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L21)

## Accessors

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L573)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L573)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L600)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L600)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L654)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L654)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L627)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L627)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L681)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L681)

### oob\_prediction\_

Prediction computed with out-of-bag estimate on the training set. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_prediction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L735)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L735)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomForestRegressor.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L708)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L708)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L143)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/ensemble/RandomForestRegressor.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L147)

Defined in:  [generated/ensemble/RandomForestRegressor.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L143) [generated/ensemble/RandomForestRegressor.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L147)
