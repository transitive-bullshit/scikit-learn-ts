# QuantileTransformer

Transform features using quantiles information.

This method transforms the features to follow a uniform or a normal distribution. Therefore, for a given feature, this transformation tends to spread out the most frequent values. It also reduces the impact of (marginal) outliers: this is therefore a robust preprocessing scheme.

The transformation is applied on each feature independently. First an estimate of the cumulative distribution function of a feature is used to map the original values to a uniform distribution. The obtained values are then mapped to the desired output distribution using the associated quantile function. Features values of new/unseen data that fall below or above the fitted range will be mapped to the bounds of the output distribution. Note that this transform is non-linear. It may distort linear correlations between variables measured at the same scale but renders variables measured at different scales more directly comparable.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new QuantileTransformer(opts?: object): QuantileTransformer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Set to `false` to perform inplace transformation and avoid a copy (if the input is already a numpy array).  `Default Value`  `true` |
| `opts.ignore_implicit_zeros?` | `boolean` | Only applies to sparse matrices. If `true`, the sparse entries of the matrix are discarded to compute the quantile statistics. If `false`, these entries are treated as zeros.  `Default Value`  `false` |
| `opts.n_quantiles?` | `number` | Number of quantiles to be computed. It corresponds to the number of landmarks used to discretize the cumulative distribution function. If n\_quantiles is larger than the number of samples, n\_quantiles is set to the number of samples as a larger number of quantiles does not give a better approximation of the cumulative distribution function estimator.  `Default Value`  `1000` |
| `opts.output_distribution?` | `"uniform"` \| `"normal"` | Marginal distribution for the transformed data. The choices are ‘uniform’ (default) or ‘normal’.  `Default Value`  `'uniform'` |
| `opts.random_state?` | `number` | Determines random number generation for subsampling and smoothing noise. Please see `subsample` for more details. Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.subsample?` | `number` | Maximum number of samples used to estimate the quantiles for computational efficiency. Note that the subsampling procedure may differ for value-identical sparse and dense matrices.  `Default Value`  `10` |

### Returns

[`QuantileTransformer`](QuantileTransformer.md)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L27)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L135)

### fit()

Compute the quantiles used for transforming.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`. Additionally, the sparse matrix needs to be nonnegative if `ignore\_implicit\_zeros` is `false`. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L152)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L194)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L245)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L85)

### inverse\_transform()

Back-projection to the original space.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`. Additionally, the sparse matrix needs to be nonnegative if `ignore\_implicit\_zeros` is `false`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L283)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L323)

### transform()

Feature-wise transformation of the data.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`. Additionally, the sparse matrix needs to be nonnegative if `ignore\_implicit\_zeros` is `false`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L360)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L23)

### id

> `string`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L20)

### opts

> `any`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L21)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/QuantileTransformer.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L503)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/QuantileTransformer.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L476)

### n\_quantiles\_

The actual number of quantiles used to discretize the cumulative distribution function.

#### Signature

```ts
n_quantiles_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/QuantileTransformer.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L395)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L72)

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

Defined in: [generated/preprocessing/QuantileTransformer.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L76)

### quantiles\_

The values corresponding the quantiles of reference.

#### Signature

```ts
quantiles_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/preprocessing/QuantileTransformer.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L422)

### references\_

Quantiles of references.

#### Signature

```ts
references_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/QuantileTransformer.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L449)
