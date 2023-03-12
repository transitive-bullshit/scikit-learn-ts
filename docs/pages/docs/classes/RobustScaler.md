# RobustScaler

Scale features using statistics that are robust to outliers.

This Scaler removes the median and scales the data according to the quantile range (defaults to IQR: Interquartile Range). The IQR is the range between the 1st quartile (25th quantile) and the 3rd quartile (75th quantile).

Centering and scaling happen independently on each feature by computing the relevant statistics on the samples in the training set. Median and interquartile range are then stored to be used on later data using the [`transform`](#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") method.

Standardization of a dataset is a common requirement for many machine learning estimators. Typically this is done by removing the mean and scaling to unit variance. However, outliers can often influence the sample mean / variance in a negative way. In such cases, the median and the interquartile range often give better results.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.RobustScaler.html)

## Constructors

## constructor()

### Signature

```ts
new RobustScaler(opts?: RobustScalerOptions): RobustScaler;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RobustScalerOptions`](../interfaces/RobustScalerOptions.md) |

### Returns

[`RobustScaler`](RobustScaler.md)

Defined in:  [generated/preprocessing/RobustScaler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/RobustScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/RobustScaler.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/RobustScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L23)

### id

> `string`

Defined in:  [generated/preprocessing/RobustScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L20)

### opts

> `any`

Defined in:  [generated/preprocessing/RobustScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L21)

## Accessors

### center\_

The median value for each feature in the training set.

#### Signature

```ts
center_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/RobustScaler.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L293)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/RobustScaler.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L364)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/RobustScaler.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L339)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/RobustScaler.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L32)

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

Defined in: [generated/preprocessing/RobustScaler.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L36)

### scale\_

The (scaled) interquartile range for each feature in the training set.

#### Signature

```ts
scale_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/RobustScaler.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L316)

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

Defined in:  [generated/preprocessing/RobustScaler.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L89)

### fit()

Compute the median and quantiles to be used for scaling.

#### Signature

```ts
fit(opts: RobustScalerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerFitOptions`](../interfaces/RobustScalerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/RobustScaler.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L106)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: RobustScalerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerFitTransformOptions`](../interfaces/RobustScalerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/RobustScaler.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L136)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: RobustScalerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerGetFeatureNamesOutOptions`](../interfaces/RobustScalerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/RobustScaler.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L168)

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

Defined in:  [generated/preprocessing/RobustScaler.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L45)

### inverse\_transform()

Scale back the data to the original representation.

#### Signature

```ts
inverse_transform(opts: RobustScalerInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerInverseTransformOptions`](../interfaces/RobustScalerInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/RobustScaler.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L201)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: RobustScalerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerSetOutputOptions`](../interfaces/RobustScalerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/RobustScaler.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L235)

### transform()

Center and scale the data.

#### Signature

```ts
transform(opts: RobustScalerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RobustScalerTransformOptions`](../interfaces/RobustScalerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/RobustScaler.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L263)
