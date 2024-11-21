**sklearn** • **Docs**

***

Passive Aggressive Regressor.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveRegressor.html)

## Constructors

### new PassiveAggressiveRegressor()

> **new PassiveAggressiveRegressor**(`opts`?): [`PassiveAggressiveRegressor`](PassiveAggressiveRegressor.md)

#### Parameters

• **opts?**

• **opts.average?**: `number` \| `boolean`

When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So average=10 will begin averaging after seeing 10 samples.

**Default Value**

`false`

• **opts.C?**: `number`

Maximum step size (regularization). Defaults to 1.0.

**Default Value**

`1`

• **opts.early\_stopping?**: `boolean`

Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a fraction of training data as validation and terminate training when validation score is not improving by at least tol for n\_iter\_no\_change consecutive epochs.

**Default Value**

`false`

• **opts.epsilon?**: `number`

If the difference between the current prediction and the correct label is below this threshold, the model is not updated.

**Default Value**

`0.1`

• **opts.fit\_intercept?**: `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered. Defaults to `true`.

**Default Value**

`true`

• **opts.loss?**: `string`

The loss function to be used: epsilon\_insensitive: equivalent to PA-I in the reference paper. squared\_epsilon\_insensitive: equivalent to PA-II in the reference paper.

**Default Value**

`'epsilon_insensitive'`

• **opts.max\_iter?**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.PassiveAggressiveRegressor.partial_fit "sklearn.linear_model.PassiveAggressiveRegressor.partial_fit") method.

**Default Value**

`1000`

• **opts.n\_iter\_no\_change?**: `number`

Number of iterations with no improvement to wait before early stopping.

**Default Value**

`5`

• **opts.random\_state?**: `number`

Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.shuffle?**: `boolean`

Whether or not the training data should be shuffled after each epoch.

**Default Value**

`true`

• **opts.tol?**: `number`

The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).

**Default Value**

`0.001`

• **opts.validation\_fraction?**: `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

**Default Value**

`0.1`

• **opts.verbose?**: `number`

The verbosity level.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See the Glossary.

Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled.

**Default Value**

`false`

#### Returns

[`PassiveAggressiveRegressor`](PassiveAggressiveRegressor.md)

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L17)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`any`\>

Weights assigned to the features.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L604)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L685)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`any`\>

Constants in decision function.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L631)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L658)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The actual number of iterations to reach the stopping criterion.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L712)

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

[generated/linear\_model/PassiveAggressiveRegressor.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L126)

***

### t\_

#### Get Signature

> **get** **t\_**(): `Promise`\<`number`\>

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L739)

## Methods

### densify()

> **densify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L201)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L182)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit linear model with Passive Aggressive algorithm.

#### Parameters

• **opts**

• **opts.coef\_init?**: `any`

The initial coefficients to warm-start the optimization.

• **opts.intercept\_init?**: `any`

The initial intercept to warm-start the optimization.

• **opts.X?**: `ArrayLike`

Training data.

• **opts.y?**: `any`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L231)

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

[generated/linear\_model/PassiveAggressiveRegressor.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L284)

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

[generated/linear\_model/PassiveAggressiveRegressor.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L139)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Fit linear model with Passive Aggressive algorithm.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Subset of training data.

• **opts.y?**: `any`

Subset of target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L320)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict using the linear model.

#### Parameters

• **opts**

• **opts.X?**: `any`

Input data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L361)

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

[generated/linear\_model/PassiveAggressiveRegressor.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L399)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.coef\_init?**: `string` \| `boolean`

Metadata routing for `coef\_init` parameter in `fit`.

• **opts.intercept\_init?**: `string` \| `boolean`

Metadata routing for `intercept\_init` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L449)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L494)

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

[generated/linear\_model/PassiveAggressiveRegressor.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L534)

***

### sparsify()

> **sparsify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/PassiveAggressiveRegressor.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/linear_model/PassiveAggressiveRegressor.ts#L574)
