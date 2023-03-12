[sklearn](../readme.md) / [Exports](../modules.md) / DecisionTreeClassifier

# Class: DecisionTreeClassifier

A decision tree classifier.

Read more in the [User Guide](../tree.html#tree).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html

## Table of contents

### Constructors

- [constructor](DecisionTreeClassifier.md#constructor)

### Properties

- [\_isDisposed](DecisionTreeClassifier.md#_isdisposed)
- [\_isInitialized](DecisionTreeClassifier.md#_isinitialized)
- [\_py](DecisionTreeClassifier.md#_py)
- [id](DecisionTreeClassifier.md#id)
- [opts](DecisionTreeClassifier.md#opts)

### Accessors

- [classes\_](DecisionTreeClassifier.md#classes_)
- [feature\_names\_in\_](DecisionTreeClassifier.md#feature_names_in_)
- [max\_features\_](DecisionTreeClassifier.md#max_features_)
- [n\_classes\_](DecisionTreeClassifier.md#n_classes_)
- [n\_features\_in\_](DecisionTreeClassifier.md#n_features_in_)
- [n\_outputs\_](DecisionTreeClassifier.md#n_outputs_)
- [py](DecisionTreeClassifier.md#py)
- [tree\_](DecisionTreeClassifier.md#tree_)

### Methods

- [apply](DecisionTreeClassifier.md#apply)
- [cost\_complexity\_pruning\_path](DecisionTreeClassifier.md#cost_complexity_pruning_path)
- [decision\_path](DecisionTreeClassifier.md#decision_path)
- [dispose](DecisionTreeClassifier.md#dispose)
- [fit](DecisionTreeClassifier.md#fit)
- [get\_depth](DecisionTreeClassifier.md#get_depth)
- [get\_n\_leaves](DecisionTreeClassifier.md#get_n_leaves)
- [init](DecisionTreeClassifier.md#init)
- [predict](DecisionTreeClassifier.md#predict)
- [predict\_log\_proba](DecisionTreeClassifier.md#predict_log_proba)
- [predict\_proba](DecisionTreeClassifier.md#predict_proba)
- [score](DecisionTreeClassifier.md#score)

## Constructors

### constructor

• **new DecisionTreeClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DecisionTreeClassifierOptions`](../interfaces/DecisionTreeClassifierOptions.md) |

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L478)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L586)

___

### max\_features\_

• `get` **max_features_**(): `Promise`<`number`\>

The inferred value of max\_features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L505)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number`\>

The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L532)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L559)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L613)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L32)

___

### tree\_

• `get` **tree_**(): `Promise`<`any`\>

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L640)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Return the index of the leaf that each sample is predicted as.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierApplyOptions`](../interfaces/DecisionTreeClassifierApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L120)

___

### cost\_complexity\_pruning\_path

▸ **cost_complexity_pruning_path**(`opts`): `Promise`<`any`\>

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierCostComplexityPruningPathOptions`](../interfaces/DecisionTreeClassifierCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L154)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierDecisionPathOptions`](../interfaces/DecisionTreeClassifierDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L193)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a decision tree classifier from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierFitOptions`](../interfaces/DecisionTreeClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L230)

___

### get\_depth

▸ **get_depth**(`opts`): `Promise`<`any`\>

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierGetDepthOptions`](../interfaces/DecisionTreeClassifierGetDepthOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L268)

___

### get\_n\_leaves

▸ **get_n_leaves**(`opts`): `Promise`<`any`\>

Return the number of leaves of the decision tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierGetNLeavesOptions`](../interfaces/DecisionTreeClassifierGetNLeavesOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L298)

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

[generated/tree/DecisionTreeClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierPredictOptions`](../interfaces/DecisionTreeClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L332)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class log-probabilities of the input samples X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierPredictLogProbaOptions`](../interfaces/DecisionTreeClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L368)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class probabilities of the input samples X.

The predicted class probability is the fraction of samples of the same class in a leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierPredictProbaOptions`](../interfaces/DecisionTreeClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L405)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierScoreOptions`](../interfaces/DecisionTreeClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L444)
