[sklearn](../readme.md) / [Exports](../modules.md) / MDS

# Class: MDS

Multidimensional scaling.

Read more in the [User Guide](../manifold.html#multidimensional-scaling).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.manifold.MDS.html

## Table of contents

### Constructors

- [constructor](MDS.md#constructor)

### Properties

- [\_isDisposed](MDS.md#_isdisposed)
- [\_isInitialized](MDS.md#_isinitialized)
- [\_py](MDS.md#_py)
- [id](MDS.md#id)
- [opts](MDS.md#opts)

### Accessors

- [dissimilarity\_matrix\_](MDS.md#dissimilarity_matrix_)
- [embedding\_](MDS.md#embedding_)
- [feature\_names\_in\_](MDS.md#feature_names_in_)
- [n\_features\_in\_](MDS.md#n_features_in_)
- [n\_iter\_](MDS.md#n_iter_)
- [py](MDS.md#py)
- [stress\_](MDS.md#stress_)

### Methods

- [dispose](MDS.md#dispose)
- [fit](MDS.md#fit)
- [fit\_transform](MDS.md#fit_transform)
- [init](MDS.md#init)

## Constructors

### constructor

• **new MDS**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MDSOptions`](../interfaces/MDSOptions.md) |

#### Defined in

[generated/manifold/MDS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/MDS.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/MDS.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/MDS.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/manifold/MDS.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/manifold/MDS.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L17)

## Accessors

### dissimilarity\_matrix\_

• `get` **dissimilarity_matrix_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Pairwise dissimilarities between the points. Symmetric matrix that:

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/MDS.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L214)

___

### embedding\_

• `get` **embedding_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Stores the position of the dataset in the embedding space.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/MDS.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L170)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/MDS.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L262)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/MDS.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L239)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The number of iterations corresponding to the best stress.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/MDS.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L285)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/manifold/MDS.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/manifold/MDS.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L32)

___

### stress\_

• `get` **stress_**(): `Promise`<`number`\>

The final value of the stress (sum of squared distance of the disparities and the distances for all constrained points). If `normalized\_stress=True`, and `metric=False` returns Stress-1. A value of 0 indicates “perfect” fit, 0.025 excellent, 0.05 good, 0.1 fair, and 0.2 poor [\[1\]](#r77760563872b-1).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/MDS.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L192)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/manifold/MDS.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L90)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Compute the position of the points in the embedding space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MDSFitOptions`](../interfaces/MDSFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/manifold/MDS.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L107)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit the data from `X`, and returns the embedded coordinates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MDSFitTransformOptions`](../interfaces/MDSFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/MDS.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L138)

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

[generated/manifold/MDS.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L41)
