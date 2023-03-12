# StandardScaler

Standardize features by removing the mean and scaling to unit variance.

The standard score of a sample `x` is calculated as:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html)

## Constructors

## constructor()

### Signature

```ts
new StandardScaler(opts?: StandardScalerOptions): StandardScaler;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StandardScalerOptions`](../interfaces/StandardScalerOptions.md) |

### Returns

[`StandardScaler`](StandardScaler.md)

Defined in:  [generated/preprocessing/StandardScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/StandardScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/StandardScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/StandardScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/StandardScaler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/StandardScaler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/StandardScaler.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L425)

### mean\_

The mean value for each feature in the training set. Equal to `undefined` when `with\_mean=False`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/StandardScaler.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L354)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/StandardScaler.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L400)

### n\_samples\_seen\_

The number of samples processed by the estimator for each feature. If there are no missing samples, the `n\_samples\_seen` will be an integer, otherwise it will be an array of dtype int. If `sample\_weights` are used it will be a float (if no missing data) or an array of dtype float that sums the weights seen so far. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/StandardScaler.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L450)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/StandardScaler.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L28)

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

Defined in: [generated/preprocessing/StandardScaler.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L32)

### scale\_

Per feature relative scaling of the data to achieve zero mean and unit variance. Generally this is calculated using `np.sqrt(var\_)`. If a variance is zero, we can’t achieve unit variance, and the data is left as-is, giving a scaling factor of 1. `scale\_` is equal to `undefined` when `with\_std=False`.

#### Signature

```ts
scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/StandardScaler.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L331)

### var\_

The variance for each feature in the training set. Used to compute `scale\_`. Equal to `undefined` when `with\_std=False`.

#### Signature

```ts
var_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/StandardScaler.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L377)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L83)

### fit()

Compute the mean and std to be used for later scaling.

#### Signature

```ts
fit(opts: StandardScalerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerFitOptions`](../interfaces/StandardScalerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L100)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: StandardScalerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerFitTransformOptions`](../interfaces/StandardScalerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/StandardScaler.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L134)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: StandardScalerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerGetFeatureNamesOutOptions`](../interfaces/StandardScalerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L166)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L41)

### inverse\_transform()

Scale back the data to the original representation.

#### Signature

```ts
inverse_transform(opts: StandardScalerInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerInverseTransformOptions`](../interfaces/StandardScalerInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L199)

### partial\_fit()

Online computation of mean and std on X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.StandardScaler.fit "sklearn.preprocessing.StandardScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

The algorithm for incremental mean and std is given in Equation 1.5a,b in Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. “Algorithms for computing the sample variance: Analysis and recommendations.” The American Statistician 37.3 (1983): 242-247:

#### Signature

```ts
partial_fit(opts: StandardScalerPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerPartialFitOptions`](../interfaces/StandardScalerPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L237)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: StandardScalerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerSetOutputOptions`](../interfaces/StandardScalerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L271)

### transform()

Perform standardization by centering and scaling.

#### Signature

```ts
transform(opts: StandardScalerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StandardScalerTransformOptions`](../interfaces/StandardScalerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L299)
