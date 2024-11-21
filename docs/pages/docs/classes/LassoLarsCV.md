**sklearn** • **Docs**

***

Cross-validated Lasso, using the LARS algorithm.

See glossary entry for cross-validation estimator.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsCV.html)

## Constructors

### new LassoLarsCV()

> **new LassoLarsCV**(`opts`?): [`LassoLarsCV`](LassoLarsCV.md)

#### Parameters

• **opts?**

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

• **opts.eps?**: `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.

• **opts.fit\_intercept?**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**Default Value**

`true`

• **opts.max\_iter?**: `number`

Maximum number of iterations to perform.

**Default Value**

`500`

• **opts.max\_n\_alphas?**: `number`

The maximum number of points on the path used to compute the residuals in the cross-validation.

**Default Value**

`1000`

• **opts.n\_jobs?**: `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.positive?**: `boolean`

Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set `true` by default. Under the positive restriction the model coefficients do not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=`true`) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator. As a consequence using LassoLarsCV only makes sense for problems where a sparse solution is expected and/or reached.

**Default Value**

`false`

• **opts.precompute?**: `boolean` \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.

**Default Value**

`'auto'`

• **opts.verbose?**: `number` \| `boolean`

Sets the verbosity amount.

**Default Value**

`false`

#### Returns

[`LassoLarsCV`](LassoLarsCV.md)

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L19)

## Accessors

### active\_

#### Get Signature

> **get** **active\_**(): `Promise`\<`any`\>

Indices of active variables at the end of the path.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L578)

***

### alpha\_

#### Get Signature

> **get** **alpha\_**(): `Promise`\<`number`\>

the estimated regularization parameter alpha

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L461)

***

### alphas\_

#### Get Signature

> **get** **alphas\_**(): `Promise`\<`ArrayLike`\>

the different values of alpha along the path

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L484)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`\>

parameter vector (w in the formulation formula)

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L388)

***

### coef\_path\_

#### Get Signature

> **get** **coef\_path\_**(): `Promise`\<`ArrayLike`[]\>

the varying values of the coefficients along the path

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L436)

***

### cv\_alphas\_

#### Get Signature

> **get** **cv\_alphas\_**(): `Promise`\<`ArrayLike`\>

all the values of alpha along the path for the different folds

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L507)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L626)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number`\>

independent term in decision function.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L411)

***

### mse\_path\_

#### Get Signature

> **get** **mse\_path\_**(): `Promise`\<`ArrayLike`[]\>

the mean square error on left-out for each fold along the path (alpha values given by `cv\_alphas`)

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L532)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L601)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number` \| `ArrayLike`\>

the number of iterations run by Lars with the optimal alpha.

##### Returns

`Promise`\<`number` \| `ArrayLike`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L555)

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

[generated/linear\_model/LassoLarsCV.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L94)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L146)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model using X, y as training data.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to be passed to the CV splitter.

• **opts.X?**: `ArrayLike`[]

Training data.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L163)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L207)

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

[generated/linear\_model/LassoLarsCV.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L107)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict using the linear model.

#### Parameters

• **opts**

• **opts.X?**: `any`

Samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L241)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.

• **opts.y?**: `ArrayLike`

True values for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L274)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.Xy?**: `string` \| `boolean`

Metadata routing for `Xy` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L320)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LassoLarsCV.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L356)
