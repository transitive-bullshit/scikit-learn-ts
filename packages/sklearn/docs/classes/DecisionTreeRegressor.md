[sklearn](../readme.md) / [Exports](../modules.md) / DecisionTreeRegressor

# Class: DecisionTreeRegressor

A decision tree regressor.

Read more in the [User Guide](../tree.html#tree).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html

## Table of contents

### Constructors

- [constructor](DecisionTreeRegressor.md#constructor)

### Properties

- [\_isDisposed](DecisionTreeRegressor.md#_isdisposed)
- [\_isInitialized](DecisionTreeRegressor.md#_isinitialized)
- [\_py](DecisionTreeRegressor.md#_py)
- [id](DecisionTreeRegressor.md#id)
- [opts](DecisionTreeRegressor.md#opts)

### Accessors

- [feature\_names\_in\_](DecisionTreeRegressor.md#feature_names_in_)
- [max\_features\_](DecisionTreeRegressor.md#max_features_)
- [n\_features\_in\_](DecisionTreeRegressor.md#n_features_in_)
- [n\_outputs\_](DecisionTreeRegressor.md#n_outputs_)
- [py](DecisionTreeRegressor.md#py)
- [tree\_](DecisionTreeRegressor.md#tree_)

### Methods

- [apply](DecisionTreeRegressor.md#apply)
- [cost\_complexity\_pruning\_path](DecisionTreeRegressor.md#cost_complexity_pruning_path)
- [decision\_path](DecisionTreeRegressor.md#decision_path)
- [dispose](DecisionTreeRegressor.md#dispose)
- [fit](DecisionTreeRegressor.md#fit)
- [get\_depth](DecisionTreeRegressor.md#get_depth)
- [get\_n\_leaves](DecisionTreeRegressor.md#get_n_leaves)
- [init](DecisionTreeRegressor.md#init)
- [predict](DecisionTreeRegressor.md#predict)
- [score](DecisionTreeRegressor.md#score)

## Constructors

### constructor

• **new DecisionTreeRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DecisionTreeRegressorOptions`](../interfaces/DecisionTreeRegressorOptions.md) |

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L452)

___

### max\_features\_

• `get` **max_features_**(): `Promise`<`number`\>

The inferred value of max\_features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L398)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L425)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L479)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L32)

___

### tree\_

• `get` **tree_**(): `Promise`<`any`\>

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L506)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Return the index of the leaf that each sample is predicted as.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorApplyOptions`](../interfaces/DecisionTreeRegressorApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L118)

___

### cost\_complexity\_pruning\_path

▸ **cost_complexity_pruning_path**(`opts`): `Promise`<`any`\>

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorCostComplexityPruningPathOptions`](../interfaces/DecisionTreeRegressorCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L152)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorDecisionPathOptions`](../interfaces/DecisionTreeRegressorDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L191)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L101)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a decision tree regressor from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorFitOptions`](../interfaces/DecisionTreeRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L228)

___

### get\_depth

▸ **get_depth**(`opts`): `Promise`<`any`\>

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorGetDepthOptions`](../interfaces/DecisionTreeRegressorGetDepthOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L266)

___

### get\_n\_leaves

▸ **get_n_leaves**(`opts`): `Promise`<`any`\>

Return the number of leaves of the decision tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorGetNLeavesOptions`](../interfaces/DecisionTreeRegressorGetNLeavesOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L296)

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

[generated/tree/DecisionTreeRegressor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorPredictOptions`](../interfaces/DecisionTreeRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L330)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorScoreOptions`](../interfaces/DecisionTreeRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L364)
