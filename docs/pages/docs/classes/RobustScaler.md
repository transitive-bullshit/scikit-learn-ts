# RobustScaler

Scale features using statistics that are robust to outliers.

This Scaler removes the median and scales the data according to the quantile range (defaults to IQR: Interquartile Range). The IQR is the range between the 1st quartile (25th quantile) and the 3rd quartile (75th quantile).

Centering and scaling happen independently on each feature by computing the relevant statistics on the samples in the training set. Median and interquartile range are then stored to be used on later data using the [`transform`](#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") method.

Standardization of a dataset is a common preprocessing for many machine learning estimators. Typically this is done by removing the mean and scaling to unit variance. However, outliers can often influence the sample mean / variance in a negative way. In such cases, using the median and the interquartile range often give better results. For an example visualization and comparison to other scalers, refer to Compare RobustScaler with other scalers.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.RobustScaler.html)

## Constructors

## constructor()

### Signature

```ts
new RobustScaler(opts?: object): RobustScaler;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.  `Default Value`  `true` |
| `opts.quantile_range?` | `any` | Quantile range used to calculate `scale\_`. By default this is equal to the IQR, i.e., `q\_min` is the first quantile and `q\_max` is the third quantile. |
| `opts.unit_variance?` | `boolean` | If `true`, scale data so that normally distributed features have a variance of 1. In general, if the difference between the x-values of `q\_max` and `q\_min` for a standard normal distribution is greater than 1, the dataset will be scaled down. If less than 1, the dataset will be scaled up.  `Default Value`  `false` |
| `opts.with_centering?` | `boolean` | If `true`, center the data before scaling. This will cause [`transform`](#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") to raise an exception when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.  `Default Value`  `true` |
| `opts.with_scaling?` | `boolean` | If `true`, scale the data to interquartile range.  `Default Value`  `true` |

### Returns

[`RobustScaler`](RobustScaler.md)

Defined in:  [generated/preprocessing/RobustScaler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L27)

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

Defined in:  [generated/preprocessing/RobustScaler.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L122)

### fit()

Compute the median and quantiles to be used for scaling.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to compute the median and quantiles used for later scaling along the features axis. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/RobustScaler.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L139)

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

Defined in:  [generated/preprocessing/RobustScaler.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L179)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/RobustScaler.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L226)

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

Defined in:  [generated/preprocessing/RobustScaler.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L264)

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

Defined in:  [generated/preprocessing/RobustScaler.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L78)

### inverse\_transform()

Scale back the data to the original representation.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The rescaled data to be transformed back. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/RobustScaler.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L299)

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

Defined in:  [generated/preprocessing/RobustScaler.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L336)

### transform()

Center and scale the data.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to scale along the specified axis. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/RobustScaler.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L369)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/RobustScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/RobustScaler.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/RobustScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L23)

### id

> `string`

Defined in:  [generated/preprocessing/RobustScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L20)

### opts

> `any`

Defined in:  [generated/preprocessing/RobustScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L21)

## Accessors

### center\_

The median value for each feature in the training set.

#### Signature

```ts
center_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/RobustScaler.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L402)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/RobustScaler.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L473)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/RobustScaler.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L448)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/RobustScaler.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L65)

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

Defined in: [generated/preprocessing/RobustScaler.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L69)

### scale\_

The (scaled) interquartile range for each feature in the training set.

#### Signature

```ts
scale_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/RobustScaler.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L425)
