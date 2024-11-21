**sklearn** • **Docs**

***

Multi-task ElasticNet model trained with L1/L2 mixed-norm as regularizer.

The optimization objective for MultiTaskElasticNet is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNet.html)

## Constructors

### new MultiTaskElasticNet()

> **new MultiTaskElasticNet**(`opts`?): [`MultiTaskElasticNet`](MultiTaskElasticNet.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Constant that multiplies the L1/L2 term. Defaults to 1.0.

**Default Value**

`1`

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.fit\_intercept?**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**Default Value**

`true`

• **opts.l1\_ratio?**: `number`

The ElasticNet mixing parameter, with 0 < l1\_ratio <= 1. For l1\_ratio = 1 the penalty is an L1/L2 penalty. For l1\_ratio = 0 it is an L2 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1/L2 and L2.

**Default Value**

`0.5`

• **opts.max\_iter?**: `number`

The maximum number of iterations.

**Default Value**

`1000`

• **opts.random\_state?**: `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.selection?**: `"random"` \| `"cyclic"`

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

**Default Value**

`'cyclic'`

• **opts.tol?**: `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

**Default Value**

`0.0001`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See the Glossary.

**Default Value**

`false`

#### Returns

[`MultiTaskElasticNet`](MultiTaskElasticNet.md)

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L17)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`[]\>

Parameter vector (W in the cost function formula). If a 1D y is passed in at fit (non multi-task usage), `coef\_` is then a 1D array. Note that `coef\_` stores the transpose of `W`, `W.T`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L557)

***

### dual\_gap\_

#### Get Signature

> **get** **dual\_gap\_**(): `Promise`\<`number`\>

The dual gaps at the end of the optimization.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L611)

***

### eps\_

#### Get Signature

> **get** **eps\_**(): `Promise`\<`number`\>

The tolerance scaled scaled by the variance of the target `y`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L638)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L692)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`ArrayLike`\>

Independent term in decision function.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L530)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L665)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L584)

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

[generated/linear\_model/MultiTaskElasticNet.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L89)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L145)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit MultiTaskElasticNet model with coordinate descent.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Data.

• **opts.y?**: `ArrayLike`[]

Target. Will be cast to X’s dtype if necessary.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L162)

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

[generated/linear\_model/MultiTaskElasticNet.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L203)

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

[generated/linear\_model/MultiTaskElasticNet.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L102)

***

### path()

> **path**(`opts`): `Promise`\<`ArrayLike`\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

• **opts**

• **opts.alphas?**: `ArrayLike`

List of alphas where to compute the models. If `undefined` alphas are set automatically.

• **opts.check\_input?**: `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

**Default Value**

`true`

• **opts.coef\_init?**: `ArrayLike`

The initial values of the coefficients.

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.eps?**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**Default Value**

`0.001`

• **opts.l1\_ratio?**: `number`

Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

**Default Value**

`0.5`

• **opts.n\_alphas?**: `number`

Number of alphas along the regularization path.

**Default Value**

`100`

• **opts.params?**: `any`

Keyword arguments passed to the coordinate descent solver.

• **opts.positive?**: `boolean`

If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

**Default Value**

`false`

• **opts.precompute?**: `boolean` \| `ArrayLike`[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**Default Value**

`'auto'`

• **opts.return\_n\_iter?**: `boolean`

Whether to return the number of iterations or not.

**Default Value**

`false`

• **opts.verbose?**: `number` \| `boolean`

Amount of verbosity.

**Default Value**

`false`

• **opts.X?**: `ArrayLike`

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

• **opts.Xy?**: `ArrayLike`

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

• **opts.y?**: `any`

Target values.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L243)

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

[generated/linear\_model/MultiTaskElasticNet.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L365)

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

[generated/linear\_model/MultiTaskElasticNet.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L401)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.check\_input?**: `string` \| `boolean`

Metadata routing for `check\_input` parameter in `fit`.

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/MultiTaskElasticNet.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L449)

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

[generated/linear\_model/MultiTaskElasticNet.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L494)
