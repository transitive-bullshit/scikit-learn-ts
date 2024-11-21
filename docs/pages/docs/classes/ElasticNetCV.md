**sklearn** • **Docs**

***

Elastic Net model with iterative fitting along a regularization path.

See glossary entry for cross-validation estimator.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNetCV.html)

## Constructors

### new ElasticNetCV()

> **new ElasticNetCV**(`opts`?): [`ElasticNetCV`](ElasticNetCV.md)

#### Parameters

• **opts?**

• **opts.alphas?**: `ArrayLike`

List of alphas where to compute the models. If `undefined` alphas are set automatically.

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

• **opts.eps?**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**Default Value**

`0.001`

• **opts.fit\_intercept?**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**Default Value**

`true`

• **opts.l1\_ratio?**: `number`

Float between 0 and 1 passed to ElasticNet (scaling between l1 and l2 penalties). For `l1\_ratio \= 0` the penalty is an L2 penalty. For `l1\_ratio \= 1` it is an L1 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1 and L2 This parameter can be a list, in which case the different values are tested by cross-validation and the one giving the best prediction score is used. Note that a good choice of list of values for l1\_ratio is often to put more values close to 1 (i.e. Lasso) and less close to 0 (i.e. Ridge), as in `\[.1, .5, .7, .9, .95, .99, 1\]`.

**Default Value**

`0.5`

• **opts.max\_iter?**: `number`

The maximum number of iterations.

**Default Value**

`1000`

• **opts.n\_alphas?**: `number`

Number of alphas along the regularization path, used for each l1\_ratio.

**Default Value**

`100`

• **opts.n\_jobs?**: `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.positive?**: `boolean`

When set to `true`, forces the coefficients to be positive.

**Default Value**

`false`

• **opts.precompute?**: `boolean` \| `ArrayLike`[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**Default Value**

`'auto'`

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

• **opts.verbose?**: `number` \| `boolean`

Amount of verbosity.

**Default Value**

`0`

#### Returns

[`ElasticNetCV`](ElasticNetCV.md)

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L19)

## Accessors

### alpha\_

#### Get Signature

> **get** **alpha\_**(): `Promise`\<`number`\>

The amount of penalization chosen by cross validation.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L555)

***

### alphas\_

#### Get Signature

> **get** **alphas\_**(): `Promise`\<`ArrayLike`\>

The grid of alphas used for fitting, for each l1\_ratio.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L676)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`\>

Parameter vector (w in the cost function formula).

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L603)

***

### dual\_gap\_

#### Get Signature

> **get** **dual\_gap\_**(): `Promise`\<`number`\>

The dual gaps at the end of the optimization for the optimal alpha.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L699)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:772](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L772)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number` \| `ArrayLike`[]\>

Independent term in the decision function.

##### Returns

`Promise`\<`number` \| `ArrayLike`[]\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L626)

***

### l1\_ratio\_

#### Get Signature

> **get** **l1\_ratio\_**(): `Promise`\<`number`\>

The compromise between l1 and l2 penalization chosen by cross validation.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L578)

***

### mse\_path\_

#### Get Signature

> **get** **mse\_path\_**(): `Promise`\<`ArrayLike`[][]\>

Mean square error for the test set on each fold, varying l1\_ratio and alpha.

##### Returns

`Promise`\<`ArrayLike`[][]\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L651)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:747](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L747)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:724](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L724)

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

[generated/linear\_model/ElasticNetCV.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L127)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L179)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit ElasticNet model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to be passed to the CV splitter.

• **opts.sample\_weight?**: `number` \| `ArrayLike`

Sample weights used for fitting and evaluation of the weighted mean squared error of each cv-fold. Note that the cross validated MSE that is finally used to find the best model is the unweighted mean over the (weighted) MSEs of each test fold.

• **opts.X?**: `ArrayLike`

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse. Note that large sparse matrices and arrays requiring `int64` indices are not accepted.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/ElasticNetCV.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L198)

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

[generated/linear\_model/ElasticNetCV.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L247)

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

[generated/linear\_model/ElasticNetCV.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L140)

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

[generated/linear\_model/ElasticNetCV.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L285)

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

[generated/linear\_model/ElasticNetCV.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L405)

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

[generated/linear\_model/ElasticNetCV.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L439)

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

[generated/linear\_model/ElasticNetCV.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L485)

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

[generated/linear\_model/ElasticNetCV.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L521)
