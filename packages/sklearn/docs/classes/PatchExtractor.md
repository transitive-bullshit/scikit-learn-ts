[sklearn](../readme.md) / [Exports](../modules.md) / PatchExtractor

# Class: PatchExtractor

Extracts patches from a collection of images.

Read more in the [User Guide](../feature_extraction.html#image-feature-extraction).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.image.PatchExtractor.html

## Table of contents

### Constructors

- [constructor](PatchExtractor.md#constructor)

### Properties

- [\_isDisposed](PatchExtractor.md#_isdisposed)
- [\_isInitialized](PatchExtractor.md#_isinitialized)
- [\_py](PatchExtractor.md#_py)
- [id](PatchExtractor.md#id)
- [opts](PatchExtractor.md#opts)

### Accessors

- [py](PatchExtractor.md#py)

### Methods

- [dispose](PatchExtractor.md#dispose)
- [fit](PatchExtractor.md#fit)
- [init](PatchExtractor.md#init)
- [transform](PatchExtractor.md#transform)

## Constructors

### constructor

• **new PatchExtractor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PatchExtractorOptions`](../interfaces/PatchExtractorOptions.md) |

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L17)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L83)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Do nothing and return the estimator unchanged.

This method is just there to implement the usual API and hence work in pipelines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PatchExtractorFitOptions`](../interfaces/PatchExtractorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L102)

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

[generated/feature_extraction/image/PatchExtractor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L41)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Transform the image samples in `X` into a matrix of patch data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PatchExtractorTransformOptions`](../interfaces/PatchExtractorTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L130)
