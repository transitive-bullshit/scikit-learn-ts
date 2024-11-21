[**sklearn**](../README.md) • **Docs**

***

Generate univariate B-spline bases for features.

Generate a new feature matrix consisting of `n\_splines=n\_knots + degree \- 1` (`n\_knots \- 1` for `extrapolation="periodic"`) spline basis functions (B-splines) of polynomial order=`degree` for each feature.

In order to learn more about the SplineTransformer class go to: [Time-related feature engineering](../../auto_examples/applications/plot_cyclical_feature_engineering.html#sphx-glr-auto-examples-applications-plot-cyclical-feature-engineering-py)

Read more in the [User Guide](../preprocessing.html#spline-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.SplineTransformer.html)

## Constructors

### new SplineTransformer()

> **new SplineTransformer**(`opts`?): [`SplineTransformer`](SplineTransformer.md)

#### Parameters

• **opts?**

• **opts.degree?**: `number`

The polynomial degree of the spline basis. Must be a non-negative integer.

**Default Value**

`3`

• **opts.extrapolation?**: `"linear"` \| `"constant"` \| `"error"` \| `"continue"` \| `"periodic"`

If ‘error’, values outside the min and max values of the training features raises a `ValueError`. If ‘constant’, the value of the splines at minimum and maximum value of the features is used as constant extrapolation. If ‘linear’, a linear extrapolation is used. If ‘continue’, the splines are extrapolated as is, i.e. option `extrapolate=True` in [`scipy.interpolate.BSpline`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.BSpline.html#scipy.interpolate.BSpline "(in SciPy v1.14.1)"). If ‘periodic’, periodic splines with a periodicity equal to the distance between the first and last knot are used. Periodic splines enforce equal function values and derivatives at the first and last knot. For example, this makes it possible to avoid introducing an arbitrary jump between Dec 31st and Jan 1st in spline features derived from a naturally periodic “day-of-year” input feature. In this case it is recommended to manually set the knot values to control the period.

**Default Value**

`'constant'`

• **opts.include\_bias?**: `boolean`

If `false`, then the last spline element inside the data range of a feature is dropped. As B-splines sum to one over the spline basis functions for each data point, they implicitly include a bias term, i.e. a column of ones. It acts as an intercept term in a linear models.

**Default Value**

`true`

• **opts.knots?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[] \| `"uniform"` \| `"quantile"`

Set knot positions such that first knot <= features <= last knot.

**Default Value**

`'uniform'`

• **opts.n\_knots?**: `number`

Number of knots of the splines if `knots` equals one of {‘uniform’, ‘quantile’}. Must be larger or equal 2. Ignored if `knots` is array-like.

**Default Value**

`5`

• **opts.order?**: `"C"` \| `"F"`

Order of output array in the dense case. `'F'` order is faster to compute, but may slow down subsequent estimators.

**Default Value**

`'C'`

• **opts.sparse\_output?**: `boolean`

Will return sparse CSR matrix if set `true` else will return an array. This option is only available with `scipy>=1.8`.

**Default Value**

`false`

#### Returns

[`SplineTransformer`](SplineTransformer.md)

#### Defined in

[generated/preprocessing/SplineTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L21)

## Accessors

### bsplines\_

#### Get Signature

> **get** **bsplines\_**(): `Promise`\<`any`[]\>

List of BSplines objects, one for each feature.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L428)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L482)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

The total number of input features.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L455)

***

### n\_features\_out\_

#### Get Signature

> **get** **n\_features\_out\_**(): `Promise`\<`number`\>

The total number of output features, which is computed as `n\_features \* n\_splines`, where `n\_splines` is the number of bases elements of the B-splines, `n\_knots + degree \- 1` for non-periodic splines and `n\_knots \- 1` for periodic ones. If `include\_bias=False`, then it is only `n\_features \* (n\_splines \- 1)`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L509)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/preprocessing/SplineTransformer.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L81)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L135)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute knot positions of splines.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Individual weights for each sample. Used to calculate quantiles if `knots="quantile"`. For `knots="uniform"`, zero weighted observations are ignored for finding the min and max of `X`.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L152)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L198)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L244)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L282)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L94)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L322)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L360)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Transform each feature data to B-splines.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data to transform.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/SplineTransformer.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L394)
