# KBinsDiscretizer

Bin continuous data into intervals.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KBinsDiscretizer.html)

## Constructors

## constructor()

### Signature

```ts
new KBinsDiscretizer(opts?: object): KBinsDiscretizer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.dtype?` | `any` | The desired data-type for the output. If `undefined`, output dtype is consistent with input dtype. Only np.float32 and np.float64 are supported. |
| `opts.encode?` | `"onehot"` \| `"onehot-dense"` \| `"ordinal"` | Method used to encode the transformed result.  `Default Value`  `'onehot'` |
| `opts.n_bins?` | `number` \| `ArrayLike` | The number of bins to produce. Raises ValueError if `n\_bins < 2`.  `Default Value`  `5` |
| `opts.random_state?` | `number` | Determines random number generation for subsampling. Pass an int for reproducible results across multiple function calls. See the `subsample` parameter for more details. See Glossary. |
| `opts.strategy?` | `"uniform"` \| `"quantile"` \| `"kmeans"` | Strategy used to define the widths of the bins.  `Default Value`  `'quantile'` |
| `opts.subsample?` | `number` | Maximum number of samples, used to fit the model, for computational efficiency. Used when `strategy="quantile"`. `subsample=None` means that all the training samples are used when computing the quantiles that determine the binning thresholds. Since quantile computation relies on sorting each column of `X` and that sorting has an `n log(n)` time complexity, it is recommended to use subsampling on datasets with a very large number of samples. |

### Returns

[`KBinsDiscretizer`](KBinsDiscretizer.md)

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L23)

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

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L125)

### fit()

Fit the estimator.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Data to be discretized. |
| `opts.y?` | `any` | Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L142)

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

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L184)

### get\_feature\_names\_out()

Get output feature names.

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

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L235)

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

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L77)

### inverse\_transform()

Transform discretized data back to original feature space.

Note that this function does not regenerate the original data due to discretization rounding.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.Xt?` | `ArrayLike`[] | Transformed data in the binned space. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L275)

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

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L315)

### transform()

Discretize the data.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Data to be discretized. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L350)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L17)

## Accessors

### bin\_edges\_

The edges of each bin. Contain arrays of varying shapes `(n\_bins\_, )` Ignored features will have empty arrays.

#### Signature

```ts
bin_edges_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L385)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L466)

### n\_bins\_

Number of bins per feature. Bins whose width are too small (i.e., <= 1e-8) are removed with a warning.

#### Signature

```ts
n_bins_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L412)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L439)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L64)

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

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L68)
