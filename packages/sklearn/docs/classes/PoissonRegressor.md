[**sklearn**](../README.md) • **Docs**

***

Generalized Linear Model with a Poisson distribution.

This regressor uses the ‘log’ link function.

Read more in the [User Guide](../linear_model.html#generalized-linear-models).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PoissonRegressor.html)

## Constructors

### new PoissonRegressor()

> **new PoissonRegressor**(`opts`?): [`PoissonRegressor`](PoissonRegressor.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.

**Default Value**

`1`

• **opts.fit\_intercept?**: `boolean`

Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor (`X @ coef + intercept`).

**Default Value**

`true`

• **opts.max\_iter?**: `number`

The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.

**Default Value**

`100`

• **opts.solver?**: `"lbfgs"` \| `"newton-cholesky"`

Algorithm to use in the optimization problem:

**Default Value**

`'lbfgs'`

• **opts.tol?**: `number`

Stopping criterion. For the lbfgs solver, the iteration will stop when `max{|g\_j|, j \= 1, ..., d} <= tol` where `g\_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.

**Default Value**

`0.0001`

• **opts.verbose?**: `number`

For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef\_` and `intercept\_` .

**Default Value**

`false`

#### Returns

[`PoissonRegressor`](PoissonRegressor.md)

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L19)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`any`[]\>

Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L394)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L475)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number`\>

Intercept (a.k.a. bias) added to linear predictor.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L421)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L448)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Actual number of iterations used in the solver.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L502)

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

[generated/linear\_model/PoissonRegressor.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L79)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L133)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit a Generalized Linear Model.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training data.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L150)

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

[generated/linear\_model/PoissonRegressor.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L196)

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

[generated/linear\_model/PoissonRegressor.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L92)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`[]\>

Predict using GLM with feature matrix X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Samples.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L232)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute D^2, the percentage of deviance explained.

D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](../model_evaluation.html#regression-metrics).

D^2 is defined as \\(D^2 = 1-\\frac{D(y\_{true},y\_{pred})}{D\_{null}}\\), \\(D\_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y\_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample\_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Test samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True values of target.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/PoissonRegressor.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L270)

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

[generated/linear\_model/PoissonRegressor.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L318)

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

[generated/linear\_model/PoissonRegressor.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L358)
