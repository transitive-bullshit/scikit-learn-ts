[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsClassifier

# Class: KNeighborsClassifier

Classifier implementing the k-nearest neighbors vote.

Read more in the [User Guide](../neighbors.html#classification).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html

## Table of contents

### Constructors

- [constructor](KNeighborsClassifier.md#constructor)

### Properties

- [\_isDisposed](KNeighborsClassifier.md#_isdisposed)
- [\_isInitialized](KNeighborsClassifier.md#_isinitialized)
- [\_py](KNeighborsClassifier.md#_py)
- [id](KNeighborsClassifier.md#id)
- [opts](KNeighborsClassifier.md#opts)

### Accessors

- [classes\_](KNeighborsClassifier.md#classes_)
- [effective\_metric\_](KNeighborsClassifier.md#effective_metric_)
- [effective\_metric\_params\_](KNeighborsClassifier.md#effective_metric_params_)
- [feature\_names\_in\_](KNeighborsClassifier.md#feature_names_in_)
- [n\_features\_in\_](KNeighborsClassifier.md#n_features_in_)
- [n\_samples\_fit\_](KNeighborsClassifier.md#n_samples_fit_)
- [outputs\_2d\_](KNeighborsClassifier.md#outputs_2d_)
- [py](KNeighborsClassifier.md#py)

### Methods

- [dispose](KNeighborsClassifier.md#dispose)
- [fit](KNeighborsClassifier.md#fit)
- [init](KNeighborsClassifier.md#init)
- [kneighbors](KNeighborsClassifier.md#kneighbors)
- [kneighbors\_graph](KNeighborsClassifier.md#kneighbors_graph)
- [predict](KNeighborsClassifier.md#predict)
- [predict\_proba](KNeighborsClassifier.md#predict_proba)
- [score](KNeighborsClassifier.md#score)

## Constructors

### constructor

• **new KNeighborsClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNeighborsClassifierOptions`](../interfaces/KNeighborsClassifierOptions.md) |

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<`any`[]\>

Class labels known to the classifier

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L315)

___

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L342)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L369)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L423)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L396)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

Number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L450)

___

### outputs\_2d\_

• `get` **outputs_2d_**(): `Promise`<`boolean`\>

False when `y`’s shape is (n\_samples, ) or (n\_samples, 1) during fit otherwise `true`.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L477)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the k-nearest neighbors classifier from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierFitOptions`](../interfaces/KNeighborsClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L108)

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

[generated/neighbors/KNeighborsClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L41)

___

### kneighbors

▸ **kneighbors**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierKneighborsOptions`](../interfaces/KNeighborsClassifierKneighborsOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L142)

___

### kneighbors\_graph

▸ **kneighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierKneighborsGraphOptions`](../interfaces/KNeighborsClassifierKneighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L178)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the class labels for the provided data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierPredictOptions`](../interfaces/KNeighborsClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L215)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`\>

Return probability estimates for the test data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierPredictProbaOptions`](../interfaces/KNeighborsClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L245)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierScoreOptions`](../interfaces/KNeighborsClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsClassifier.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L281)
