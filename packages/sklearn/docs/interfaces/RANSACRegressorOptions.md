# RANSACRegressorOptions

## Properties

### base\_estimator?

> `any`

Use `estimator` instead.

#### Default Value

`'deprecated'`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L486)

### estimator?

> `any`

Base estimator object which implements the following methods:

Defined in:  [generated/linear\_model/RANSACRegressor.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L414)

### is\_data\_valid?

> `any`

This function is called with the randomly selected data before the model is fitted to it: `is\_data\_valid(X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped.

Defined in:  [generated/linear\_model/RANSACRegressor.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L429)

### is\_model\_valid?

> `any`

This function is called with the estimated model and the randomly selected data: `is\_model\_valid(model, X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is\_data\_valid`. `is\_model\_valid` should therefore only be used if the estimated model is needed for making the rejection decision.

Defined in:  [generated/linear\_model/RANSACRegressor.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L434)

### loss?

> `string`

String inputs, ‘absolute\_error’ and ‘squared\_error’ are supported which find the absolute error and squared error per sample respectively.

If `loss` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on `X\[i\]`.

If the loss on a sample is greater than the `residual\_threshold`, then this sample is classified as an outlier.

#### Default Value

`'absolute_error'`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L474)

### max\_skips?

> `number`

Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by `is\_data\_valid` or invalid models defined by `is\_model\_valid`.

Defined in:  [generated/linear\_model/RANSACRegressor.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L446)

### max\_trials?

> `number`

Maximum number of iterations for random sample selection.

#### Default Value

`100`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L441)

### min\_samples?

> `number`

Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min\_samples >= 1`, treated as a relative number `ceil(min\_samples \* X.shape\[0\])` for `min\_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `estimator`. By default a `sklearn.linear\_model.LinearRegression()` estimator is assumed and `min\_samples` is chosen as `X.shape\[1\] + 1`. This parameter is highly dependent upon the model, so if a `estimator` other than `linear\_model.LinearRegression` is used, the user must provide a value.

Defined in:  [generated/linear\_model/RANSACRegressor.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L419)

### random\_state?

> `number`

The generator used to initialize the centers. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/RANSACRegressor.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L479)

### residual\_threshold?

> `number`

Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`. Points whose residuals are strictly equal to the threshold are considered as inliers.

Defined in:  [generated/linear\_model/RANSACRegressor.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L424)

### stop\_n\_inliers?

> `number`

Stop iteration if at least this number of inliers are found.

Defined in:  [generated/linear\_model/RANSACRegressor.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L451)

### stop\_probability?

> `number`

RANSAC iteration stops if at least one outlier-free set of the training data is sampled in RANSAC. This requires to generate at least N samples (iterations):

#### Default Value

`0.99`

Defined in:  [generated/linear\_model/RANSACRegressor.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L463)

### stop\_score?

> `number`

Stop iteration if score is greater equal than this threshold.

Defined in:  [generated/linear\_model/RANSACRegressor.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L456)
