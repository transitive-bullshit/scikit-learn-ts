# Class: ExtraTreeRegressor

An extremely randomized tree regressor.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max_features` randomly selected features and the best split among those is chosen. When `max_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeRegressor.html)

## Constructors

### new ExtraTreeRegressor()

> **new ExtraTreeRegressor**(`opts`?): [`ExtraTreeRegressor`](ExtraTreeRegressor.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.ccp_alpha`? | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](https://scikit-learn.org/stable/modules/generated/../tree.html#minimal-cost-complexity-pruning) for details. |
| `opts.criterion`? | `"squared_error"` \| `"absolute_error"` \| `"friedman_mse"` \| `"poisson"` | The function to measure the quality of a split. Supported criteria are “squared_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits. |
| `opts.max_depth`? | `number` | The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples. |
| `opts.max_features`? | `number` | The number of features to consider when looking for the best split: |
| `opts.max_leaf_nodes`? | `number` | Grow a tree with `max_leaf_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes. |
| `opts.min_impurity_decrease`? | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value. The weighted impurity decrease equation is the following: |
| `opts.min_samples_leaf`? | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min_samples_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression. |
| `opts.min_samples_split`? | `number` | The minimum number of samples required to split an internal node: |
| `opts.min_weight_fraction_leaf`? | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided. |
| `opts.monotonic_cst`? | `any`[] | 1: monotonic increase |
| `opts.random_state`? | `number` | Used to pick randomly the `max_features` used at each split. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details. |
| `opts.splitter`? | `"random"` \| `"best"` | The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split. |

**Returns** [`ExtraTreeRegressor`](ExtraTreeRegressor.md)

**Defined in** [generated/tree/ExtraTreeRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/tree/ExtraTreeRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/tree/ExtraTreeRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/tree/ExtraTreeRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L23) |
| `id` | `string` | `undefined` | [generated/tree/ExtraTreeRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L20) |
| `opts` | `any` | `undefined` | [generated/tree/ExtraTreeRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L21) |

## Accessors

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L732)

***

### max\_features\_

**Get Signature**

> **get** **max\_features\_**(): `Promise`\<`number`\>

The inferred value of max_features.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L678)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:705](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L705)

***

### n\_outputs\_

**Get Signature**

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

The number of outputs when `fit` is performed.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:759](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L759)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/tree/ExtraTreeRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L110)

***

### tree\_

**Get Signature**

> **get** **tree\_**(): `Promise`\<`any`\>

The underlying Tree object. Please refer to `help(sklearn.tree._tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](https://scikit-learn.org/stable/modules/generated/../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:786](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L786)

## Methods

### apply()

> **apply**(`opts`): `Promise`\<`ArrayLike`\>

Return the index of the leaf that each sample is predicted as.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.check_input`? | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing. |
| `opts.X`? | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L183)

***

### cost\_complexity\_pruning\_path()

> **cost\_complexity\_pruning\_path**(`opts`): `Promise`\<`any`\>

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](https://scikit-learn.org/stable/modules/generated/../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.X`? | `ArrayLike` | The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc_matrix`. |
| `opts.y`? | `ArrayLike` | The target values (class labels) as integers or strings. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L226)

***

### decision\_path()

> **decision\_path**(`opts`): `Promise`\<`any`[]\>

Return the decision path in the tree.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.check_input`? | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing. |
| `opts.X`? | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`. |

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L272)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L166)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a decision tree regressor from the training set (X, y).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.check_input`? | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing. |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. |
| `opts.X`? | `ArrayLike` | The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc_matrix`. |
| `opts.y`? | `ArrayLike` | The target values (real numbers). Use `dtype=np.float64` and `order='C'` for maximum efficiency. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L315)

***

### get\_depth()

> **get\_depth**(`opts`): `Promise`\<`any`\>

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L368)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L398)

***

### get\_n\_leaves()

> **get\_n\_leaves**(`opts`): `Promise`\<`any`\>

Return the number of leaves of the decision tree.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L434)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L123)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.check_input`? | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing. |
| `opts.X`? | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L466)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.y`? | `ArrayLike` | True values for `X`. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L509)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.check_input`? | `string` \| `boolean` | Metadata routing for `check_input` parameter in `fit`. |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L557)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.check_input`? | `string` \| `boolean` | Metadata routing for `check_input` parameter in `predict`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L602)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/tree/ExtraTreeRegressor.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L642)
