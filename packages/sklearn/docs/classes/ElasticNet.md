[**sklearn**](../README.md) • **Docs**

***

Linear regression with combined L1 and L2 priors as regularizer.

Minimizes the objective function:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html)

## Constructors

### new ElasticNet()

> **new ElasticNet**(`opts`?): [`ElasticNet`](ElasticNet.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Constant that multiplies the penalty terms. Defaults to 1.0. See the notes for the exact mathematical meaning of this parameter. `alpha \= 0` is equivalent to an ordinary least square, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Lasso` object is not advised. Given this, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.

**Default Value**

`1`

• **opts.copy\_X?**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**Default Value**

`true`

• **opts.fit\_intercept?**: `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

**Default Value**

`true`

• **opts.l1\_ratio?**: `number`

The ElasticNet mixing parameter, with `0 <= l1\_ratio <= 1`. For `l1\_ratio \= 0` the penalty is an L2 penalty. `For l1\_ratio \= 1` it is an L1 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1 and L2.

**Default Value**

`0.5`

• **opts.max\_iter?**: `number`

The maximum number of iterations.

**Default Value**

`1000`

• **opts.positive?**: `boolean`

When set to `true`, forces the coefficients to be positive.

**Default Value**

`false`

• **opts.precompute?**: `boolean` \| [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Whether to use a precomputed Gram matrix to speed up calculations. The Gram matrix can also be passed as argument. For sparse input this option is always `false` to preserve sparsity. Check [an example on how to use a precomputed Gram Matrix in ElasticNet](../../auto_examples/linear_model/plot_elastic_net_precomputed_gram_matrix_with_weighted_samples.html#sphx-glr-auto-examples-linear-model-plot-elastic-net-precomputed-gram-matrix-with-weighted-samples-py) for details.

**Default Value**

`false`

• **opts.random\_state?**: `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.selection?**: `"random"` \| `"cyclic"`

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

**Default Value**

`'cyclic'`

• **opts.tol?**: `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`, see Notes below.

**Default Value**

`0.0001`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

**Default Value**

`false`

#### Returns

[`ElasticNet`](ElasticNet.md)

#### Defined in

[generated/linear\_model/ElasticNet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/ElasticNet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/ElasticNet.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/ElasticNet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/ElasticNet.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/ElasticNet.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L17)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Parameter vector (w in the cost function formula).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L535)

***

### dual\_gap\_

#### Get Signature

> **get** **dual\_gap\_**(): `Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

Given param alpha, the dual gaps at the end of the optimization, same shape as each observation of y.

##### Returns

`Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L604)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L652)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

Independent term in decision function.

##### Returns

`Promise`\<`number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L558)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L627)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`any`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L581)

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

[generated/linear\_model/ElasticNet.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L103)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L155)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit model with coordinate descent.

#### Parameters

• **opts**

• **opts.check\_input?**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you do.

**Default Value**

`true`

• **opts.sample\_weight?**: `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights. Internally, the `sample\_weight` vector will be rescaled to sum to `n\_samples`.

• **opts.X?**: `any`

Data.

Note that large sparse matrices and arrays requiring `int64` indices are not accepted.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target. Will be cast to X’s dtype if necessary.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L172)

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

[generated/linear\_model/ElasticNet.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L225)

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

[generated/linear\_model/ElasticNet.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L116)

***

### path()

> **path**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

• **opts**

• **opts.alphas?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

• **opts.check\_input?**: `boolean`

If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

**Default Value**

`true`

• **opts.coef\_init?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

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

• **opts.precompute?**: `boolean` \| [`ArrayLike`](../type-aliases/ArrayLike.md)[] \| `"auto"`

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

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.

• **opts.Xy?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.

• **opts.y?**: `any`

Target values.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/linear\_model/ElasticNet.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L263)

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

[generated/linear\_model/ElasticNet.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L383)

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

[generated/linear\_model/ElasticNet.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L416)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

[generated/linear\_model/ElasticNet.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L462)

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

[generated/linear\_model/ElasticNet.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L503)
