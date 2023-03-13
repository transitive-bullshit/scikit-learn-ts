# PatchExtractor

Extracts patches from a collection of images.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.image.PatchExtractor.html)

## Constructors

## constructor()

### Signature

```ts
new PatchExtractor(opts?: PatchExtractorOptions): PatchExtractor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `PatchExtractorOptions` |

### Returns

[`PatchExtractor`](PatchExtractor.md)

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L19)

### id

> `string`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L16)

### opts

> `any`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L28)

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

Defined in: [generated/feature\_extraction/image/PatchExtractor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L32)

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

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L83)

### fit()

Do nothing and return the estimator unchanged.

This method is just there to implement the usual API and hence work in pipelines.

#### Signature

```ts
fit(opts: PatchExtractorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `PatchExtractorFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L102)

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

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L41)

### transform()

Transform the image samples in `X` into a matrix of patch data.

#### Signature

```ts
transform(opts: PatchExtractorTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `PatchExtractorTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/image/PatchExtractor.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L130)
