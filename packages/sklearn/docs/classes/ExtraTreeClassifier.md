[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreeClassifier

# Class: ExtraTreeClassifier

An extremely randomized tree classifier.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the [User Guide](../tree.html#tree).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeClassifier.html

## Table of contents

### Constructors

- [constructor](ExtraTreeClassifier.md#constructor)

### Properties

- [\_isDisposed](ExtraTreeClassifier.md#_isdisposed)
- [\_isInitialized](ExtraTreeClassifier.md#_isinitialized)
- [\_py](ExtraTreeClassifier.md#_py)
- [id](ExtraTreeClassifier.md#id)
- [opts](ExtraTreeClassifier.md#opts)

### Accessors

- [classes\_](ExtraTreeClassifier.md#classes_)
- [feature\_names\_in\_](ExtraTreeClassifier.md#feature_names_in_)
- [max\_features\_](ExtraTreeClassifier.md#max_features_)
- [n\_classes\_](ExtraTreeClassifier.md#n_classes_)
- [n\_features\_in\_](ExtraTreeClassifier.md#n_features_in_)
- [n\_outputs\_](ExtraTreeClassifier.md#n_outputs_)
- [py](ExtraTreeClassifier.md#py)
- [tree\_](ExtraTreeClassifier.md#tree_)

### Methods

- [apply](ExtraTreeClassifier.md#apply)
- [cost\_complexity\_pruning\_path](ExtraTreeClassifier.md#cost_complexity_pruning_path)
- [decision\_path](ExtraTreeClassifier.md#decision_path)
- [dispose](ExtraTreeClassifier.md#dispose)
- [fit](ExtraTreeClassifier.md#fit)
- [get\_depth](ExtraTreeClassifier.md#get_depth)
- [get\_n\_leaves](ExtraTreeClassifier.md#get_n_leaves)
- [init](ExtraTreeClassifier.md#init)
- [predict](ExtraTreeClassifier.md#predict)
- [predict\_log\_proba](ExtraTreeClassifier.md#predict_log_proba)
- [predict\_proba](ExtraTreeClassifier.md#predict_proba)
- [score](ExtraTreeClassifier.md#score)

## Constructors

### constructor

• **new ExtraTreeClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExtraTreeClassifierOptions`](../interfaces/ExtraTreeClassifierOptions.md) |

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L472)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L580)

___

### max\_features\_

• `get` **max_features_**(): `Promise`<`number`\>

The inferred value of max\_features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L499)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number`\>

The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L526)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L553)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L607)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L36)

___

### tree\_

• `get` **tree_**(): `Promise`<`any`\>

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L634)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Return the index of the leaf that each sample is predicted as.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierApplyOptions`](../interfaces/ExtraTreeClassifierApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L124)

___

### cost\_complexity\_pruning\_path

▸ **cost_complexity_pruning_path**(`opts`): `Promise`<`any`\>

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierCostComplexityPruningPathOptions`](../interfaces/ExtraTreeClassifierCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L158)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierDecisionPathOptions`](../interfaces/ExtraTreeClassifierDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L197)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L107)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a decision tree classifier from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierFitOptions`](../interfaces/ExtraTreeClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L233)

___

### get\_depth

▸ **get_depth**(`opts`): `Promise`<`any`\>

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierGetDepthOptions`](../interfaces/ExtraTreeClassifierGetDepthOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L271)

___

### get\_n\_leaves

▸ **get_n_leaves**(`opts`): `Promise`<`any`\>

Return the number of leaves of the decision tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierGetNLeavesOptions`](../interfaces/ExtraTreeClassifierGetNLeavesOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L299)

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

[generated/tree/ExtraTreeClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierPredictOptions`](../interfaces/ExtraTreeClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L331)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class log-probabilities of the input samples X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierPredictLogProbaOptions`](../interfaces/ExtraTreeClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L363)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class probabilities of the input samples X.

The predicted class probability is the fraction of samples of the same class in a leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierPredictProbaOptions`](../interfaces/ExtraTreeClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L400)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierScoreOptions`](../interfaces/ExtraTreeClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L438)
