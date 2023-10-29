# SplineTransformer

Generate univariate B-spline bases for features.

Generate a new feature matrix consisting of `n\_splines=n\_knots + degree \- 1` (`n\_knots \- 1` for `extrapolation="periodic"`) spline basis functions (B-splines) of polynomial order=`degree` for each feature.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.SplineTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new SplineTransformer(opts?: object): SplineTransformer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.degree?` | `number` | The polynomial degree of the spline basis. Must be a non-negative integer.  `Default Value`  `3` |
| `opts.extrapolation?` | `"linear"` \| `"constant"` \| `"error"` \| `"continue"` \| `"periodic"` | If ‘error’, values outside the min and max values of the training features raises a `ValueError`. If ‘constant’, the value of the splines at minimum and maximum value of the features is used as constant extrapolation. If ‘linear’, a linear extrapolation is used. If ‘continue’, the splines are extrapolated as is, i.e. option `extrapolate=True` in [`scipy.interpolate.BSpline`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.BSpline.html#scipy.interpolate.BSpline "(in SciPy v1.11.3)"). If ‘periodic’, periodic splines with a periodicity equal to the distance between the first and last knot are used. Periodic splines enforce equal function values and derivatives at the first and last knot. For example, this makes it possible to avoid introducing an arbitrary jump between Dec 31st and Jan 1st in spline features derived from a naturally periodic “day-of-year” input feature. In this case it is recommended to manually set the knot values to control the period.  `Default Value`  `'constant'` |
| `opts.include_bias?` | `boolean` | If `false`, then the last spline element inside the data range of a feature is dropped. As B-splines sum to one over the spline basis functions for each data point, they implicitly include a bias term, i.e. a column of ones. It acts as an intercept term in a linear models.  `Default Value`  `true` |
| `opts.knots?` | `ArrayLike`[] \| `"uniform"` \| `"quantile"` | Set knot positions such that first knot <= features <= last knot.  `Default Value`  `'uniform'` |
| `opts.n_knots?` | `number` | Number of knots of the splines if `knots` equals one of {‘uniform’, ‘quantile’}. Must be larger or equal 2. Ignored if `knots` is array-like.  `Default Value`  `5` |
| `opts.order?` | `"C"` \| `"F"` | Order of output array in the dense case. `'F'` order is faster to compute, but may slow down subsequent estimators.  `Default Value`  `'C'` |
| `opts.sparse_output?` | `boolean` | Will return sparse CSR matrix if set `true` else will return an array. This option is only available with `scipy>=1.8`.  `Default Value`  `false` |

### Returns

[`SplineTransformer`](SplineTransformer.md)

Defined in:  [generated/preprocessing/SplineTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L25)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L140)

### fit()

Compute knot positions of splines.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data. |
| `opts.sample_weight?` | `ArrayLike` | Individual weights for each sample. Used to calculate quantiles if `knots="quantile"`. For `knots="uniform"`, zero weighted observations are ignored for finding the min and max of `X`. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/SplineTransformer.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L157)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L208)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L259)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L299)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L92)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L341)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L381)

### transform()

Transform each feature data to B-splines.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data to transform. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/SplineTransformer.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L416)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/SplineTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/SplineTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/SplineTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/SplineTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/SplineTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L19)

## Accessors

### bsplines\_

List of BSplines objects, one for each feature.

#### Signature

```ts
bsplines_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/preprocessing/SplineTransformer.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L451)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/SplineTransformer.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L505)

### n\_features\_in\_

The total number of input features.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/SplineTransformer.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L478)

### n\_features\_out\_

The total number of output features, which is computed as `n\_features \* n\_splines`, where `n\_splines` is the number of bases elements of the B-splines, `n\_knots + degree \- 1` for non-periodic splines and `n\_knots \- 1` for periodic ones. If `include\_bias=False`, then it is only `n\_features \* (n\_splines \- 1)`.

#### Signature

```ts
n_features_out_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/SplineTransformer.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L532)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/SplineTransformer.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L79)

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

Defined in: [generated/preprocessing/SplineTransformer.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L83)
