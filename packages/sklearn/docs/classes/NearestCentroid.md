[sklearn](../readme.md) / [Exports](../modules.md) / NearestCentroid

# Class: NearestCentroid

Nearest centroid classifier.

Each class is represented by its centroid, with test samples classified to the class with the nearest centroid.

Read more in the [User Guide](../neighbors.html#nearest-centroid-classifier).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestCentroid.html

## Table of contents

### Constructors

- [constructor](NearestCentroid.md#constructor)

### Properties

- [\_isDisposed](NearestCentroid.md#_isdisposed)
- [\_isInitialized](NearestCentroid.md#_isinitialized)
- [\_py](NearestCentroid.md#_py)
- [id](NearestCentroid.md#id)
- [opts](NearestCentroid.md#opts)

### Accessors

- [centroids\_](NearestCentroid.md#centroids_)
- [classes\_](NearestCentroid.md#classes_)
- [feature\_names\_in\_](NearestCentroid.md#feature_names_in_)
- [n\_features\_in\_](NearestCentroid.md#n_features_in_)
- [py](NearestCentroid.md#py)

### Methods

- [dispose](NearestCentroid.md#dispose)
- [fit](NearestCentroid.md#fit)
- [init](NearestCentroid.md#init)
- [predict](NearestCentroid.md#predict)
- [score](NearestCentroid.md#score)

## Constructors

### constructor

• **new NearestCentroid**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NearestCentroidOptions`](../interfaces/NearestCentroidOptions.md) |

#### Defined in

[generated/neighbors/NearestCentroid.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/NearestCentroid.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/NearestCentroid.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/NearestCentroid.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/NearestCentroid.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/NearestCentroid.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L19)

## Accessors

### centroids\_

• `get` **centroids_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Centroid of each class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L194)

___

### classes\_

• `get` **classes_**(): `Promise`<`any`[]\>

The unique classes labels.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L219)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L269)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L244)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/NearestCentroid.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/NearestCentroid.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the NearestCentroid model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestCentroidFitOptions`](../interfaces/NearestCentroidFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L100)

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

[generated/neighbors/NearestCentroid.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on an array of test vectors `X`.

The predicted class `C` for each sample in `X` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestCentroidPredictOptions`](../interfaces/NearestCentroidPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L132)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestCentroidScoreOptions`](../interfaces/NearestCentroidScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L162)
