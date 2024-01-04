# PatchExtractor

Extracts patches from a collection of images.

Read more in the User Guide.

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
| `opts.max_patches?` | `number` | The maximum number of patches per image to extract. If `max\_patches` is a float in (0, 1), it is taken to mean a proportion of the total number of patches. If set to `undefined`, extract all possible patches. |
| `opts.patch_size?` | `any` | The dimensions of one patch. If set to `undefined`, the patch size will be automatically set to `(img\_height // 10, img\_width // 10)`, where `img\_height` and `img\_width` are the dimensions of the input images. |
| `opts.random_state?` | `number` | Determines the random number generator used for random sampling when `max\_patches is not None`. Use an int to make the randomness deterministic. See Glossary. |

### Returns

[`PatchExtractor`](PatchExtractor.md)

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L23)

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

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L98)

### fit()

Only validate the parameters of the estimator.

This method allows to: (i) validate the parameters of the estimator and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[][] | Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L117)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L157)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L206)

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

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L56)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L243)

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
| `opts.X?` | `ArrayLike`[][] | Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L276)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L19)

### id

> `string`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L16)

### opts

> `any`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L43)

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

Defined in: [generated/feature\_extraction/image/PatchExtractor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L47)
