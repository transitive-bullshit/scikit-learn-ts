# Class: AdaBoostRegressor

An AdaBoost regressor.

An AdaBoost \[1\] regressor is a meta-estimator that begins by fitting a regressor on the original dataset and then fits additional copies of the regressor on the same dataset but where the weights of instances are adjusted according to the error of the current prediction. As such, subsequent regressors focus more on difficult cases.

This class implements the algorithm known as AdaBoost.R2 \[2\].

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#adaboost).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostRegressor.html)

## Constructors

### new AdaBoostRegressor()

> **new AdaBoostRegressor**(`opts`?): [`AdaBoostRegressor`](AdaBoostRegressor.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.estimator`? | `any` | The base estimator from which the boosted ensemble is built. If `undefined`, then the base estimator is [`DecisionTreeRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor") initialized with `max_depth=3`. |
| `opts.learning_rate`? | `number` | Weight applied to each regressor at each boosting iteration. A higher learning rate increases the contribution of each regressor. There is a trade-off between the `learning_rate` and `n_estimators` parameters. Values must be in the range `(0.0, inf)`. |
| `opts.loss`? | `"linear"` \| `"square"` \| `"exponential"` | The loss function to use when updating the weights after each boosting iteration. |
| `opts.n_estimators`? | `number` | The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early. Values must be in the range `\[1, inf)`. |
| `opts.random_state`? | `number` | Controls the random seed given at each `estimator` at each boosting iteration. Thus, it is only used when `estimator` exposes a `random_state`. In addition, it controls the bootstrap of the weights used to train the `estimator` at each boosting iteration. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |

#### Returns

[`AdaBoostRegressor`](AdaBoostRegressor.md)

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/ensemble/AdaBoostRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/ensemble/AdaBoostRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/ensemble/AdaBoostRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L23) |
| `id` | `string` | `undefined` | [generated/ensemble/AdaBoostRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L20) |
| `opts` | `any` | `undefined` | [generated/ensemble/AdaBoostRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L21) |

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The base estimator from which the ensemble is grown.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L460)

***

### estimator\_errors\_

#### Get Signature

> **get** **estimator\_errors\_**(): `Promise`\<`any`\>

Regression error for each estimator in the boosted ensemble.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L541)

***

### estimator\_weights\_

#### Get Signature

> **get** **estimator\_weights\_**(): `Promise`\<`any`\>

Weights for each estimator in the boosted ensemble.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L514)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L487)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L595)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L568)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L63)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L117)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a boosted classifier/regressor from the training set (X, y).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. If `undefined`, the sample weights are initialized to 1 / n_samples. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L134)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Raise `NotImplementedError`.

This estimator does not support metadata routing yet.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L180)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L76)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict regression value for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L212)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L248)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L296)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L336)

***

### staged\_predict()

> **staged\_predict**(`opts`): `Promise`\<`any`[]\>

Return staged predictions for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The training input samples. |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L376)

***

### staged\_score()

> **staged\_score**(`opts`): `Promise`\<`number`\>

Return staged scores for X, y.

This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Labels for X. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L414)
