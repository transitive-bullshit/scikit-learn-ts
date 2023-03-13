# SplineTransformerOptions

## Properties

### degree?

> `number`

The polynomial degree of the spline basis. Must be a non-negative integer.

#### Default Value

`3`

Defined in:  [generated/preprocessing/SplineTransformer.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L398)

### extrapolation?

> `"linear"` \| `"constant"` \| `"error"` \| `"continue"` \| `"periodic"`

If ‘error’, values outside the min and max values of the training features raises a `ValueError`. If ‘constant’, the value of the splines at minimum and maximum value of the features is used as constant extrapolation. If ‘linear’, a linear extrapolation is used. If ‘continue’, the splines are extrapolated as is, i.e. option `extrapolate=True` in [`scipy.interpolate.BSpline`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.BSpline.html#scipy.interpolate.BSpline "(in SciPy v1.10.1)"). If ‘periodic’, periodic splines with a periodicity equal to the distance between the first and last knot are used. Periodic splines enforce equal function values and derivatives at the first and last knot. For example, this makes it possible to avoid introducing an arbitrary jump between Dec 31st and Jan 1st in spline features derived from a naturally periodic “day-of-year” input feature. In this case it is recommended to manually set the knot values to control the period.

#### Default Value

`'constant'`

Defined in:  [generated/preprocessing/SplineTransformer.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L412)

### include\_bias?

> `boolean`

If `true` (default), then the last spline element inside the data range of a feature is dropped. As B-splines sum to one over the spline basis functions for each data point, they implicitly include a bias term, i.e. a column of ones. It acts as an intercept term in a linear models.

#### Default Value

`true`

Defined in:  [generated/preprocessing/SplineTransformer.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L419)

### knots?

> [`ArrayLike`](../types/ArrayLike.md)[] \| `"uniform"` \| `"quantile"`

Set knot positions such that first knot <= features <= last knot.

#### Default Value

`'uniform'`

Defined in:  [generated/preprocessing/SplineTransformer.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L405)

### n\_knots?

> `number`

Number of knots of the splines if `knots` equals one of {‘uniform’, ‘quantile’}. Must be larger or equal 2. Ignored if `knots` is array-like.

#### Default Value

`5`

Defined in:  [generated/preprocessing/SplineTransformer.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L391)

### order?

> `"C"` \| `"F"`

Order of output array. ‘F’ order is faster to compute, but may slow down subsequent estimators.

#### Default Value

`'C'`

Defined in:  [generated/preprocessing/SplineTransformer.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L426)
