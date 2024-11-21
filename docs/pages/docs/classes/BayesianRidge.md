**sklearn** • **Docs**

***

Bayesian ridge regression.

Fit a Bayesian ridge model. See the Notes section for details on this implementation and the optimization of the regularization parameters lambda (precision of the weights) and alpha (precision of the noise).

Read more in the User Guide. For an intuitive visualization of how the sinusoid is approximated by a polynomial using different pairs of initial values, see Curve Fitting with Bayesian Ridge Regression.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.BayesianRidge.html)

## Constructors

### new BayesianRidge()

> **new BayesianRidge**(`opts`?): [`BayesianRidge`](BayesianRidge.md)

#### Parameters

• **opts?**

• **opts.alpha\_1?**: `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.

**Default Value**

`0.000001`

• **opts.alpha\_2?**: `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.

**Default Value**

`0.000001`

• **opts.alpha\_init?**: `number`

Initial value for alpha (precision of the noise). If not set, alpha\_init is 1/Var(y).

• **opts.compute\_score?**: `boolean`

If `true`, compute the log marginal likelihood at each iteration of the optimization.

**Default Value**

`false`

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.fit\_intercept?**: `boolean`

Whether to calculate the intercept for this model. The intercept is not treated as a probabilistic parameter and thus has no associated variance. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).

**Default Value**

`true`

• **opts.lambda\_1?**: `number`

Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.

**Default Value**

`0.000001`

• **opts.lambda\_2?**: `number`

Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.

**Default Value**

`0.000001`

• **opts.lambda\_init?**: `number`

Initial value for lambda (precision of the weights). If not set, lambda\_init is 1.

• **opts.max\_iter?**: `number`

Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion.

**Default Value**

`300`

• **opts.tol?**: `number`

Stop the algorithm if w has converged.

**Default Value**

`0.001`

• **opts.verbose?**: `boolean`

Verbose mode when fitting the model.

**Default Value**

`false`

#### Returns

[`BayesianRidge`](BayesianRidge.md)

#### Defined in

[generated/linear\_model/BayesianRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/BayesianRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/BayesianRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/BayesianRidge.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/BayesianRidge.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/BayesianRidge.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L19)

## Accessors

### alpha\_

#### Get Signature

> **get** **alpha\_**(): `Promise`\<`number`\>

Estimated precision of the noise.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L502)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`\>

Coefficients of the regression model (mean of distribution)

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L454)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L692)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number`\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L477)

***

### lambda\_

#### Get Signature

> **get** **lambda\_**(): `Promise`\<`number`\>

Estimated precision of the weights.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L525)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:667](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L667)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The actual number of iterations to reach the stopping criterion.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L594)

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

[generated/linear\_model/BayesianRidge.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L110)

***

### scores\_

#### Get Signature

> **get** **scores\_**(): `Promise`\<`ArrayLike`\>

If computed\_score is `true`, value of the log marginal likelihood (to be maximized) at each iteration of the optimization. The array starts with the value of the log marginal likelihood obtained for the initial values of alpha and lambda and ends with the value obtained for the estimated alpha and lambda.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L571)

***

### sigma\_

#### Get Signature

> **get** **sigma\_**(): `Promise`\<`ArrayLike`[]\>

Estimated variance-covariance matrix of the weights

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L548)

***

### X\_offset\_

#### Get Signature

> **get** **X\_offset\_**(): `Promise`\<`ArrayLike`\>

If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L617)

***

### X\_scale\_

#### Get Signature

> **get** **X\_scale\_**(): `Promise`\<`ArrayLike`\>

Set to np.ones(n\_features).

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L642)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L162)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Individual weights for each sample.

• **opts.X?**: `ArrayLike`[]

Training data.

• **opts.y?**: `ArrayLike`

Target values. Will be cast to X’s dtype if necessary.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L179)

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

[generated/linear\_model/BayesianRidge.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L223)

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

[generated/linear\_model/BayesianRidge.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L123)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict using the linear model.

In addition to the mean of the predictive distribution, also its standard deviation can be returned.

#### Parameters

• **opts**

• **opts.return\_std?**: `boolean`

Whether to return the standard deviation of posterior prediction.

**Default Value**

`false`

• **opts.X?**: `ArrayLike`

Samples.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L259)

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

[generated/linear\_model/BayesianRidge.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L300)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L346)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.return\_std?**: `string` \| `boolean`

Metadata routing for `return\_std` parameter in `predict`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/BayesianRidge.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L382)

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

[generated/linear\_model/BayesianRidge.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L420)
