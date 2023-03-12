[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreeRegressor

# Class: ExtraTreeRegressor

An extremely randomized tree regressor.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the [User Guide](../tree.html#tree).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeRegressor.html

## Table of contents

### Constructors

- [constructor](ExtraTreeRegressor.md#constructor)

### Properties

- [\_isDisposed](ExtraTreeRegressor.md#_isdisposed)
- [\_isInitialized](ExtraTreeRegressor.md#_isinitialized)
- [\_py](ExtraTreeRegressor.md#_py)
- [id](ExtraTreeRegressor.md#id)
- [opts](ExtraTreeRegressor.md#opts)

### Accessors

- [feature\_names\_in\_](ExtraTreeRegressor.md#feature_names_in_)
- [max\_features\_](ExtraTreeRegressor.md#max_features_)
- [n\_features\_in\_](ExtraTreeRegressor.md#n_features_in_)
- [n\_outputs\_](ExtraTreeRegressor.md#n_outputs_)
- [py](ExtraTreeRegressor.md#py)
- [tree\_](ExtraTreeRegressor.md#tree_)

### Methods

- [apply](ExtraTreeRegressor.md#apply)
- [cost\_complexity\_pruning\_path](ExtraTreeRegressor.md#cost_complexity_pruning_path)
- [decision\_path](ExtraTreeRegressor.md#decision_path)
- [dispose](ExtraTreeRegressor.md#dispose)
- [fit](ExtraTreeRegressor.md#fit)
- [get\_depth](ExtraTreeRegressor.md#get_depth)
- [get\_n\_leaves](ExtraTreeRegressor.md#get_n_leaves)
- [init](ExtraTreeRegressor.md#init)
- [predict](ExtraTreeRegressor.md#predict)
- [score](ExtraTreeRegressor.md#score)

## Constructors

### constructor

• **new ExtraTreeRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExtraTreeRegressorOptions`](../interfaces/ExtraTreeRegressorOptions.md) |

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L21)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L451)

___

### max\_features\_

• `get` **max_features_**(): `Promise`<`number`\>

The inferred value of max\_features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L397)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L424)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L478)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L36)

___

### tree\_

• `get` **tree_**(): `Promise`<`any`\>

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L505)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Return the index of the leaf that each sample is predicted as.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorApplyOptions`](../interfaces/ExtraTreeRegressorApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L122)

___

### cost\_complexity\_pruning\_path

▸ **cost_complexity_pruning_path**(`opts`): `Promise`<`any`\>

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorCostComplexityPruningPathOptions`](../interfaces/ExtraTreeRegressorCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L156)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorDecisionPathOptions`](../interfaces/ExtraTreeRegressorDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L195)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L105)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a decision tree regressor from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorFitOptions`](../interfaces/ExtraTreeRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L231)

___

### get\_depth

▸ **get_depth**(`opts`): `Promise`<`any`\>

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorGetDepthOptions`](../interfaces/ExtraTreeRegressorGetDepthOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L269)

___

### get\_n\_leaves

▸ **get_n_leaves**(`opts`): `Promise`<`any`\>

Return the number of leaves of the decision tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorGetNLeavesOptions`](../interfaces/ExtraTreeRegressorGetNLeavesOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L297)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorPredictOptions`](../interfaces/ExtraTreeRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L329)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorScoreOptions`](../interfaces/ExtraTreeRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L363)
