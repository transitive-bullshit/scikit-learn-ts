# ExtraTreesRegressor

An extra-trees regressor.

This class implements a meta estimator that fits a number of randomized decision trees (a.k.a. extra-trees) on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new ExtraTreesRegressor(opts?: object): ExtraTreesRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.bootstrap?` | `boolean` | Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree.  `Default Value`  `false` |
| `opts.ccp_alpha?` | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See Minimal Cost-Complexity Pruning for details.  `Default Value`  `0` |
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
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.ExtraTreesRegressor.fit "sklearn.ensemble.ExtraTreesRegressor.fit"), [`predict`](#sklearn.ensemble.ExtraTreesRegressor.predict "sklearn.ensemble.ExtraTreesRegressor.predict"), [`decision\_path`](#sklearn.ensemble.ExtraTreesRegressor.decision_path "sklearn.ensemble.ExtraTreesRegressor.decision_path") and [`apply`](#sklearn.ensemble.ExtraTreesRegressor.apply "sklearn.ensemble.ExtraTreesRegressor.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.oob_score?` | `boolean` | Whether to use out-of-bag samples to estimate the generalization score. By default, [`r2\_score`](sklearn.metrics.r2_score.html#sklearn.metrics.r2_score "sklearn.metrics.r2_score") is used. Provide a callable with signature `metric(y\_true, y\_pred)` to use a custom metric. Only available if `bootstrap=True`.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Controls 3 sources of randomness: |
| `opts.verbose?` | `number` | Controls the verbosity when fitting and predicting.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See Glossary and Fitting additional weak-learners for details.  `Default Value`  `false` |

### Returns

[`ExtraTreesRegressor`](ExtraTreesRegressor.md)

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L25)

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
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L237)

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
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L272)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L220)

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
| `opts.X?` | `ArrayLike` | The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | `ArrayLike` | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L309)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

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

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L360)

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

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L154)

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
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L400)

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
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L437)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

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

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L490)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

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

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L532)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L19)

## Accessors

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L570)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L597)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L651)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:624](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L624)

### n\_outputs\_

The number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L678)

### oob\_prediction\_

Prediction computed with out-of-bag estimate on the training set. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_prediction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L732)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:705](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L705)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/ExtraTreesRegressor.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L141)

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

Defined in: [generated/ensemble/ExtraTreesRegressor.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L145)
