# ExtraTreeRegressor

An extremely randomized tree regressor.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new ExtraTreeRegressor(opts?: object): ExtraTreeRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.ccp_alpha?` | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See Minimal Cost-Complexity Pruning for details.  `Default Value`  `0` |
| `opts.criterion?` | `"squared_error"` \| `"absolute_error"` \| `"friedman_mse"` \| `"poisson"` | The function to measure the quality of a split. Supported criteria are “squared\_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman\_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute\_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits.  `Default Value`  `'squared_error'` |
| `opts.max_depth?` | `number` | The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. |
| `opts.max_features?` | `number` \| `"sqrt"` | The number of features to consider when looking for the best split:  `Default Value`  `1` |
| `opts.max_leaf_nodes?` | `number` | Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes. |
| `opts.min_impurity_decrease?` | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following:  `Default Value`  `0` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.  `Default Value`  `1` |
| `opts.min_samples_split?` | `number` | The minimum number of samples required to split an internal node:  `Default Value`  `2` |
| `opts.min_weight_fraction_leaf?` | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.  `Default Value`  `0` |
| `opts.random_state?` | `number` | Used to pick randomly the `max\_features` used at each split. See Glossary for details. |
| `opts.splitter?` | `"random"` \| `"best"` | The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.  `Default Value`  `'random'` |

### Returns

[`ExtraTreeRegressor`](ExtraTreeRegressor.md)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L27)

## Methods

### apply()

Return the index of the leaf that each sample is predicted as.

#### Signature

```ts
apply(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L195)

### cost\_complexity\_pruning\_path()

Compute the pruning path during Minimal Cost-Complexity Pruning.

See Minimal Cost-Complexity Pruning for details on the pruning process.

#### Signature

```ts
cost_complexity_pruning_path(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | `ArrayLike` | The target values (class labels) as integers or strings. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L241)

### decision\_path()

Return the decision path in the tree.

#### Signature

```ts
decision_path(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L293)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L178)

### fit()

Build a decision tree regressor from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. |
| `opts.y?` | `ArrayLike` | The target values (real numbers). Use `dtype=np.float64` and `order='C'` for maximum efficiency. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L339)

### get\_depth()

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Signature

```ts
get_depth(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L399)

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

Defined in:  [generated/tree/ExtraTreeRegressor.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L429)

### get\_n\_leaves()

Return the number of leaves of the decision tree.

#### Signature

```ts
get_n_leaves(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L467)

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

Defined in:  [generated/tree/ExtraTreeRegressor.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L118)

### predict()

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L499)

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

Defined in:  [generated/tree/ExtraTreeRegressor.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L545)

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
| `opts.check_input?` | `string` \| `boolean` | Metadata routing for `check\_input` parameter in `fit`. |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L598)

### set\_predict\_request()

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_predict_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.check_input?` | `string` \| `boolean` | Metadata routing for `check\_input` parameter in `predict`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L645)

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

Defined in:  [generated/tree/ExtraTreeRegressor.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L687)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L21)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/tree/ExtraTreeRegressor.ts:779](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L779)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/tree/ExtraTreeRegressor.ts:725](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L725)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/tree/ExtraTreeRegressor.ts:752](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L752)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/tree/ExtraTreeRegressor.ts:806](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L806)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L105)

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

Defined in: [generated/tree/ExtraTreeRegressor.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L109)

### tree\_

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and Understanding the decision tree structure for basic usage of these attributes.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/tree/ExtraTreeRegressor.ts:833](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L833)
