# StandardScaler

Standardize features by removing the mean and scaling to unit variance.

The standard score of a sample `x` is calculated as:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html)

## Constructors

## constructor()

### Signature

```ts
new StandardScaler(opts?: object): StandardScaler;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.  `Default Value`  `true` |
| `opts.with_mean?` | `boolean` | If `true`, center the data before scaling. This does not work (and will raise an exception) when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.  `Default Value`  `true` |
| `opts.with_std?` | `boolean` | If `true`, scale the data to unit variance (or equivalently, unit standard deviation).  `Default Value`  `true` |

### Returns

[`StandardScaler`](StandardScaler.md)

Defined in:  [generated/preprocessing/StandardScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/StandardScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/StandardScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/StandardScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/StandardScaler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/StandardScaler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/StandardScaler.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L515)

### mean\_

The mean value for each feature in the training set. Equal to `undefined` when `with\_mean=False`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/StandardScaler.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L444)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/StandardScaler.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L490)

### n\_samples\_seen\_

The number of samples processed by the estimator for each feature. If there are no missing samples, the `n\_samples\_seen` will be an integer, otherwise it will be an array of dtype int. If `sample\_weights` are used it will be a float (if no missing data) or an array of dtype float that sums the weights seen so far. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/preprocessing/StandardScaler.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L540)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/StandardScaler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L49)

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

Defined in: [generated/preprocessing/StandardScaler.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L53)

### scale\_

Per feature relative scaling of the data to achieve zero mean and unit variance. Generally this is calculated using `np.sqrt(var\_)`. If a variance is zero, we can’t achieve unit variance, and the data is left as-is, giving a scaling factor of 1. `scale\_` is equal to `undefined` when `with\_std=False`.

#### Signature

```ts
scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/StandardScaler.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L421)

### var\_

The variance for each feature in the training set. Used to compute `scale\_`. Equal to `undefined` when `with\_std=False`.

#### Signature

```ts
var_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/StandardScaler.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L467)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L104)

### fit()

Compute the mean and std to be used for later scaling.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to compute the mean and standard deviation used for later scaling along the features axis. |
| `opts.sample_weight?` | `ArrayLike` | Individual weights for each sample. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L121)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L170)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L217)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L62)

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
| `opts.X?` | `ArrayLike` | The data used to scale along the features axis. |
| `opts.copy?` | `boolean` | Copy the input X or not. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L253)

### partial\_fit()

Online computation of mean and std on X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.StandardScaler.fit "sklearn.preprocessing.StandardScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

The algorithm for incremental mean and std is given in Equation 1.5a,b in Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. “Algorithms for computing the sample variance: Analysis and recommendations.” The American Statistician 37.3 (1983): 242-247:

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to compute the mean and standard deviation used for later scaling along the features axis. |
| `opts.sample_weight?` | `ArrayLike` | Individual weights for each sample. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L299)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L348)

### transform()

Perform standardization by centering and scaling.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | The data used to scale along the features axis. |
| `opts.copy?` | `boolean` | Copy the input X or not. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L381)
