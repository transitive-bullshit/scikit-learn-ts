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

Defined in:  [generated/preprocessing/StandardScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L23)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L104)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data used to compute the mean and standard deviation used for later scaling along the features axis. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Individual weights for each sample. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L121)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/StandardScaler.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L170)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L217)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/preprocessing/StandardScaler.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L255)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L62)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data used to scale along the features axis. |
| `opts.copy?` | `boolean` | Copy the input X or not. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L290)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data used to compute the mean and standard deviation used for later scaling along the features axis. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Individual weights for each sample. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L336)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L387)

### set\_inverse\_transform\_request()

Request metadata passed to the `inverse\_transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_inverse_transform_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.copy?` | `string` \| `boolean` | Metadata routing for `copy` parameter in `inverse\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L426)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

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

Defined in:  [generated/preprocessing/StandardScaler.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L464)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_partial_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L501)

### set\_transform\_request()

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_transform_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.copy?` | `string` \| `boolean` | Metadata routing for `copy` parameter in `transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L541)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L576)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/StandardScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/StandardScaler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/StandardScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/StandardScaler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/StandardScaler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L710)

Defined in:  [generated/preprocessing/StandardScaler.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L710)

### mean\_

The mean value for each feature in the training set. Equal to `undefined` when `with\_mean=False` and `with\_std=False`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L639)

Defined in:  [generated/preprocessing/StandardScaler.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L639)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/StandardScaler.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L685)

Defined in:  [generated/preprocessing/StandardScaler.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L685)

### n\_samples\_seen\_

The number of samples processed by the estimator for each feature. If there are no missing samples, the `n\_samples\_seen` will be an integer, otherwise it will be an array of dtype int. If `sample\_weights` are used it will be a float (if no missing data) or an array of dtype float that sums the weights seen so far. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L735)

Defined in:  [generated/preprocessing/StandardScaler.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L735)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/StandardScaler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L49)

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

Defined in:  [generated/preprocessing/StandardScaler.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L53)

Defined in:  [generated/preprocessing/StandardScaler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L49) [generated/preprocessing/StandardScaler.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L53)

### scale\_

Per feature relative scaling of the data to achieve zero mean and unit variance. Generally this is calculated using `np.sqrt(var\_)`. If a variance is zero, we can’t achieve unit variance, and the data is left as-is, giving a scaling factor of 1. `scale\_` is equal to `undefined` when `with\_std=False`.

#### Signature

```ts
scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L616)

Defined in:  [generated/preprocessing/StandardScaler.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L616)

### var\_

The variance for each feature in the training set. Used to compute `scale\_`. Equal to `undefined` when `with\_mean=False` and `with\_std=False`.

#### Signature

```ts
var_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/StandardScaler.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L662)

Defined in:  [generated/preprocessing/StandardScaler.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L662)
