**sklearn** • **Docs**

***

Linear least squares with l2 regularization.

Minimizes the objective function:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html)

## Constructors

### new Ridge()

> **new Ridge**(`opts`?): [`Ridge`](Ridge.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Constant that multiplies the L2 term, controlling regularization strength. `alpha` must be a non-negative float i.e. in `\[0, inf)`.

When `alpha \= 0`, the objective is equivalent to ordinary least squares, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Ridge` object is not advised. Instead, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.

If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.

**Default Value**

`1`

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.fit\_intercept?**: `boolean`

Whether to fit the intercept for this model. If set to false, no intercept will be used in calculations (i.e. `X` and `y` are expected to be centered).

**Default Value**

`true`

• **opts.max\_iter?**: `number`

Maximum number of iterations for conjugate gradient solver. For ‘sparse\_cg’ and ‘lsqr’ solvers, the default value is determined by scipy.sparse.linalg. For ‘sag’ solver, the default value is 1000. For ‘lbfgs’ solver, the default value is 15000.

• **opts.positive?**: `boolean`

When set to `true`, forces the coefficients to be positive. Only ‘lbfgs’ solver is supported in this case.

**Default Value**

`false`

• **opts.random\_state?**: `number`

Used when `solver` == ‘sag’ or ‘saga’ to shuffle the data. See Glossary for details.

• **opts.solver?**: `"auto"` \| `"svd"` \| `"lsqr"` \| `"lbfgs"` \| `"sag"` \| `"saga"` \| `"cholesky"` \| `"sparse_cg"`

Solver to use in the computational routines:

**Default Value**

`'auto'`

• **opts.tol?**: `number`

The precision of the solution (`coef\_`) is determined by `tol` which specifies a different convergence criterion for each solver:

**Default Value**

`0.0001`

#### Returns

[`Ridge`](Ridge.md)

#### Defined in

[generated/linear\_model/Ridge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/Ridge.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/Ridge.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/Ridge.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/Ridge.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/Ridge.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L17)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`\>

Weight vector(s).

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Ridge.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L383)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Ridge.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L473)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number` \| `ArrayLike`\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

##### Returns

`Promise`\<`number` \| `ArrayLike`\>

#### Defined in

[generated/linear\_model/Ridge.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L405)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/Ridge.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L450)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`ArrayLike`\>

Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Ridge.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L428)

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

[generated/linear\_model/Ridge.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L92)

***

### solver\_

#### Get Signature

> **get** **solver\_**(): `Promise`\<`string`\>

The solver that was used at fit time by the computational routines.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/linear\_model/Ridge.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L498)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/Ridge.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L143)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit Ridge regression model.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `number` \| `ArrayLike`

Individual weights for each sample. If given a float, every sample will have the same weight.

• **opts.X?**: `ArrayLike`

Training data.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Ridge.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L160)

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

[generated/linear\_model/Ridge.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L204)

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

[generated/linear\_model/Ridge.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L105)

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

[generated/linear\_model/Ridge.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L236)

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

[generated/linear\_model/Ridge.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L269)

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

[generated/linear\_model/Ridge.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L315)

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

[generated/linear\_model/Ridge.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/linear_model/Ridge.ts#L351)
