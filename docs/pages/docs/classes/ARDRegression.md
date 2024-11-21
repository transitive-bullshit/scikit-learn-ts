# Class: ARDRegression

Bayesian ARD regression.

Fit the weights of a regression model, using an ARD prior. The weights of the regression model are assumed to be in Gaussian distributions. Also estimate the parameters lambda (precisions of the distributions of the weights) and alpha (precision of the distribution of the noise). The estimation is done by an iterative procedures (Evidence Maximization)

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#bayesian-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ARDRegression.html)

## Constructors

### new ARDRegression()

> **new ARDRegression**(`opts`?): [`ARDRegression`](ARDRegression.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.alpha_1`? | `number` | Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter. |
| `opts.alpha_2`? | `number` | Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter. |
| `opts.compute_score`? | `boolean` | If `true`, compute the objective function at each step of the model. |
| `opts.copy_X`? | `boolean` | If `true`, X will be copied; else, it may be overwritten. |
| `opts.fit_intercept`? | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered). |
| `opts.lambda_1`? | `number` | Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter. |
| `opts.lambda_2`? | `number` | Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter. |
| `opts.max_iter`? | `number` | Maximum number of iterations. |
| `opts.threshold_lambda`? | `number` | Threshold for removing (pruning) weights with high precision from the computation. |
| `opts.tol`? | `number` | Stop the algorithm if w has converged. |
| `opts.verbose`? | `boolean` | Verbose mode when fitting the model. |

**Returns** [`ARDRegression`](ARDRegression.md)

**Defined in** [generated/linear\_model/ARDRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/linear\_model/ARDRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/linear\_model/ARDRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/linear\_model/ARDRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L21) |
| `id` | `string` | `undefined` | [generated/linear\_model/ARDRegression.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L18) |
| `opts` | `any` | `undefined` | [generated/linear\_model/ARDRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L19) |

## Accessors

### alpha\_

**Get Signature**

> **get** **alpha\_**(): `Promise`\<`number`\>

estimated precision of the noise.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L435)

***

### coef\_

**Get Signature**

> **get** **coef\_**(): `Promise`\<`ArrayLike`\>

Coefficients of the regression model (mean of distribution)

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L412)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L650)

***

### intercept\_

**Get Signature**

> **get** **intercept\_**(): `Promise`\<`number`\>

Independent term in decision function. Set to 0.0 if `fit_intercept \= False`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L550)

***

### lambda\_

**Get Signature**

> **get** **lambda\_**(): `Promise`\<`ArrayLike`\>

estimated precisions of the weights.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L458)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L625)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The actual number of iterations to reach the stopping criterion.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L527)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/linear\_model/ARDRegression.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L107)

***

### scores\_

**Get Signature**

> **get** **scores\_**(): `Promise`\<`number`\>

if computed, value of the objective function (to be maximized)

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L504)

***

### sigma\_

**Get Signature**

> **get** **sigma\_**(): `Promise`\<`ArrayLike`[]\>

estimated variance-covariance matrix of the weights

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/ARDRegression.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L481)

***

### X\_offset\_

**Get Signature**

> **get** **X\_offset\_**(): `Promise`\<`number`\>

If `fit_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n_features) otherwise.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L575)

***

### X\_scale\_

**Get Signature**

> **get** **X\_scale\_**(): `Promise`\<`number`\>

Set to np.ones(n_features).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L600)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L159)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model according to the given training data and parameters.

Iterative procedure to maximize the evidence

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `ArrayLike` | Target values (integers). Will be cast to X’s dtype if necessary. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L178)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L217)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L120)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict using the linear model.

In addition to the mean of the predictive distribution, also its standard deviation can be returned.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.return_std`? | `boolean` | Whether to return the standard deviation of posterior prediction. |
| `opts.X`? | `ArrayLike` | Samples. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L253)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.y`? | `ArrayLike` | True values for `X`. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L294)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.return_std`? | `string` \| `boolean` | Metadata routing for `return_std` parameter in `predict`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L340)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/ARDRegression.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L378)
