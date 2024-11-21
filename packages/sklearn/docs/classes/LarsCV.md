[**sklearn**](../README.md) • **Docs**

***

Cross-validated Least Angle Regression model.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../linear_model.html#least-angle-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LarsCV.html)

## Constructors

### new LarsCV()

> **new LarsCV**(`opts`?): [`LarsCV`](LarsCV.md)

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

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.precompute?**: `boolean` \| [`ArrayLike`](../type-aliases/ArrayLike.md) \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.

**Default Value**

`'auto'`

• **opts.verbose?**: `number` \| `boolean`

Sets the verbosity amount.

**Default Value**

`false`

#### Returns

[`LarsCV`](LarsCV.md)

#### Defined in

[generated/linear\_model/LarsCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/LarsCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/LarsCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/LarsCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/LarsCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/LarsCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L19)

## Accessors

### active\_

#### Get Signature

> **get** **active\_**(): `Promise`\<`any`\>

Indices of active variables at the end of the path. If this is a list of lists, the outer list length is `n\_targets`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L378)

***

### alpha\_

#### Get Signature

> **get** **alpha\_**(): `Promise`\<`number`\>

the estimated regularization parameter alpha

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L468)

***

### alphas\_

#### Get Signature

> **get** **alphas\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

the different values of alpha along the path

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/LarsCV.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L490)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

parameter vector (w in the formulation formula)

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/LarsCV.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L400)

***

### coef\_path\_

#### Get Signature

> **get** **coef\_path\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

the varying values of the coefficients along the path

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/linear\_model/LarsCV.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L445)

***

### cv\_alphas\_

#### Get Signature

> **get** **cv\_alphas\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

all the values of alpha along the path for the different folds

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/LarsCV.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L512)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/LarsCV.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L603)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number`\>

independent term in decision function

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L422)

***

### mse\_path\_

#### Get Signature

> **get** **mse\_path\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

the mean square error on left-out for each fold along the path (alpha values given by `cv\_alphas`)

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/linear\_model/LarsCV.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L535)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L580)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

the number of iterations run by Lars with the optimal alpha.

##### Returns

`Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/LarsCV.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L558)

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

[generated/linear\_model/LarsCV.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L87)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L138)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model using X, y as training data.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to be passed to the CV splitter.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training data.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L155)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L199)

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

[generated/linear\_model/LarsCV.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L100)

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

[generated/linear\_model/LarsCV.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L231)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True values for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L264)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.Xy?**: `string` \| `boolean`

Metadata routing for `Xy` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L310)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/LarsCV.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/LarsCV.ts#L346)
