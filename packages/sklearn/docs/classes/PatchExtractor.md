# PatchExtractor

Extracts patches from a collection of images.

Read more in the [User Guide](../feature_extraction.html#image-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.image.PatchExtractor.html)

## Constructors

## constructor()

### Signature

```ts
new PatchExtractor(opts?: object): PatchExtractor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.max_patches?` | `number` | The maximum number of patches per image to extract. If `max\_patches` is a float in (0, 1), it is taken to mean a proportion of the total number of patches. |
| `opts.patch_size?` | `any` | The dimensions of one patch. |
| `opts.random_state?` | `number` | Determines the random number generator used for random sampling when `max\_patches is not None`. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state). |

### Returns

[`PatchExtractor`](PatchExtractor.md)

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L23)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L98)

### fit()

Do nothing and return the estimator unchanged.

This method is just there to implement the usual API and hence work in pipelines.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L117)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L56)

### transform()

Transform the image samples in `X` into a matrix of patch data.

#### Signature

```ts
transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[][] | Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L155)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L19)

### id

> `string`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L16)

### opts

> `any`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L43)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L47)

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L43) [generated/feature\_extraction/image/PatchExtractor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L47)
