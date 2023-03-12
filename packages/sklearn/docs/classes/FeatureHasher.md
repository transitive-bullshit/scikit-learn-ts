[sklearn](../readme.md) / [Exports](../modules.md) / FeatureHasher

# Class: FeatureHasher

Implements feature hashing, aka the hashing trick.

This class turns sequences of symbolic feature names (strings) into scipy.sparse matrices, using a hash function to compute the matrix column corresponding to a name. The hash function employed is the signed 32-bit version of Murmurhash3.

Feature names of type byte string are used as-is. Unicode strings are converted to UTF-8 first, but no Unicode normalization is done. Feature values must be (finite) numbers.

This class is a low-memory alternative to DictVectorizer and CountVectorizer, intended for large-scale (online) learning and situations where memory is tight, e.g. when running prediction code on embedded devices.

Read more in the [User Guide](../feature_extraction.html#feature-hashing).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.FeatureHasher.html

## Table of contents

### Constructors

- [constructor](FeatureHasher.md#constructor)

### Properties

- [\_isDisposed](FeatureHasher.md#_isdisposed)
- [\_isInitialized](FeatureHasher.md#_isinitialized)
- [\_py](FeatureHasher.md#_py)
- [id](FeatureHasher.md#id)
- [opts](FeatureHasher.md#opts)

### Accessors

- [py](FeatureHasher.md#py)

### Methods

- [dispose](FeatureHasher.md#dispose)
- [fit](FeatureHasher.md#fit)
- [fit\_transform](FeatureHasher.md#fit_transform)
- [init](FeatureHasher.md#init)
- [set\_output](FeatureHasher.md#set_output)
- [transform](FeatureHasher.md#transform)

## Constructors

### constructor

• **new FeatureHasher**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FeatureHasherOptions`](../interfaces/FeatureHasherOptions.md) |

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L23)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureHasherFitOptions`](../interfaces/FeatureHasherFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureHasherFitTransformOptions`](../interfaces/FeatureHasherFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L138)

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

[generated/feature_extraction/FeatureHasher.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L47)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureHasherSetOutputOptions`](../interfaces/FeatureHasherSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L172)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Transform a sequence of instances to a scipy.sparse matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureHasherTransformOptions`](../interfaces/FeatureHasherTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L200)
