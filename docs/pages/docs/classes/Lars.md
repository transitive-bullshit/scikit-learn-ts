**sklearn** • **Docs**

***

Least Angle Regression model a.k.a. LAR.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lars.html)

## Constructors

### new Lars()

> **new Lars**(`opts`?): [`Lars`](Lars.md)

#### Parameters

• **opts?**

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.eps?**: `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.

• **opts.fit\_intercept?**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**Default Value**

`true`

• **opts.fit\_path?**: `boolean`

If `true` the full path is stored in the `coef\_path\_` attribute. If you compute the solution for a large problem or many targets, setting `fit\_path` to `false` will lead to a speedup, especially with a small alpha.

**Default Value**

`true`

• **opts.jitter?**: `number`

Upper bound on a uniform noise parameter to be added to the `y` values, to satisfy the model’s assumption of one-at-a-time computations. Might help with stability.

• **opts.n\_nonzero\_coefs?**: `number`

Target number of non-zero coefficients. Use `np.inf` for no limit.

**Default Value**

`500`

• **opts.precompute?**: `boolean` \| `ArrayLike` \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**Default Value**

`'auto'`

• **opts.random\_state?**: `number`

Determines random number generation for jittering. Pass an int for reproducible output across multiple function calls. See Glossary. Ignored if `jitter` is `undefined`.

• **opts.verbose?**: `number` \| `boolean`

Sets the verbosity amount.

**Default Value**

`false`

#### Returns

[`Lars`](Lars.md)

#### Defined in

[generated/linear\_model/Lars.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/Lars.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/Lars.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/Lars.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/Lars.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/Lars.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L17)

## Accessors

### active\_

#### Get Signature

> **get** **active\_**(): `Promise`\<`any`[]\>

Indices of active variables at the end of the path. If this is a list of list, the length of the outer list is `n\_targets`.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/linear\_model/Lars.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L397)

***

### alphas\_

#### Get Signature

> **get** **alphas\_**(): `Promise`\<`ArrayLike`\>

Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If this is a list of array-like, the length of the outer list is `n\_targets`.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Lars.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L375)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`\>

Parameter vector (w in the formulation formula).

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Lars.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L442)

***

### coef\_path\_

#### Get Signature

> **get** **coef\_path\_**(): `Promise`\<`ArrayLike`[]\>

The varying values of the coefficients along the path. It is not present if the `fit\_path` parameter is `false`. If this is a list of array-like, the length of the outer list is `n\_targets`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/Lars.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L419)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Lars.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L532)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number` \| `ArrayLike`\>

Independent term in decision function.

##### Returns

`Promise`\<`number` \| `ArrayLike`\>

#### Defined in

[generated/linear\_model/Lars.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L464)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/Lars.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L509)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number` \| `ArrayLike`\>

The number of iterations taken by lars\_path to find the grid of alphas for each target.

##### Returns

`Promise`\<`number` \| `ArrayLike`\>

#### Defined in

[generated/linear\_model/Lars.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L487)

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

[generated/linear\_model/Lars.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L85)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/Lars.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L136)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model using X, y as training data.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data.

• **opts.Xy?**: `ArrayLike`

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Lars.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L153)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Lars.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L196)

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

[generated/linear\_model/Lars.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L98)

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

[generated/linear\_model/Lars.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L228)

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

[generated/linear\_model/Lars.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L261)

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

[generated/linear\_model/Lars.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L307)

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

[generated/linear\_model/Lars.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Lars.ts#L343)
