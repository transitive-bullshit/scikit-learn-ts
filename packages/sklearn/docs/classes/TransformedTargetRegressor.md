# Class: TransformedTargetRegressor

Meta-estimator to regress on a transformed target.

Useful for applying a non-linear transformation to the target `y` in regression problems. This transformation can be given as a Transformer such as the [`QuantileTransformer`](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html#sklearn.preprocessing.QuantileTransformer "sklearn.preprocessing.QuantileTransformer") or as a function and its inverse such as `np.log` and `np.exp`.

The computation during [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.compose.TransformedTargetRegressor.html)

## Constructors

### new TransformedTargetRegressor()

> **new TransformedTargetRegressor**(`opts`?): [`TransformedTargetRegressor`](TransformedTargetRegressor.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.check_inverse`? | `boolean` | Whether to check that `transform` followed by `inverse_transform` or `func` followed by `inverse_func` leads to the original targets. |
| `opts.func`? | `any` | Function to apply to `y` before passing to [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit"). Cannot be set at the same time as `transformer`. If `func is None`, the function used will be the identity function. If `func` is set, `inverse_func` also needs to be provided. The function needs to return a 2-dimensional array. |
| `opts.inverse_func`? | `any` | Function to apply to the prediction of the regressor. Cannot be set at the same time as `transformer`. The inverse function is used to return predictions to the same space of the original training labels. If `inverse_func` is set, `func` also needs to be provided. The inverse function needs to return a 2-dimensional array. |
| `opts.regressor`? | `any` | Regressor object such as derived from [`RegressorMixin`](https://scikit-learn.org/stable/modules/generated/sklearn.base.RegressorMixin.html#sklearn.base.RegressorMixin "sklearn.base.RegressorMixin"). This regressor will automatically be cloned each time prior to fitting. If `regressor is None`, [`LinearRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is created and used. |
| `opts.transformer`? | `any` | Estimator object such as derived from [`TransformerMixin`](https://scikit-learn.org/stable/modules/generated/sklearn.base.TransformerMixin.html#sklearn.base.TransformerMixin "sklearn.base.TransformerMixin"). Cannot be set at the same time as `func` and `inverse_func`. If `transformer is None` as well as `func` and `inverse_func`, the transformer will be an identity transformer. Note that the transformer will be cloned during fitting. Also, the transformer is restricting `y` to be a numpy array. |

#### Returns

[`TransformedTargetRegressor`](TransformedTargetRegressor.md)

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/compose/TransformedTargetRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/compose/TransformedTargetRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/compose/TransformedTargetRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L21) |
| `id` | `string` | `undefined` | [generated/compose/TransformedTargetRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L18) |
| `opts` | `any` | `undefined` | [generated/compose/TransformedTargetRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L19) |

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L393)

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

[generated/compose/TransformedTargetRegressor.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L57)

***

### regressor\_

#### Get Signature

> **get** **regressor\_**(): `Promise`\<`any`\>

Fitted regressor.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L339)

***

### transformer\_

#### Get Signature

> **get** **transformer\_**(): `Promise`\<`any`\>

Transformer used in [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") and [`predict`](https://scikit-learn.org/stable/modules/generated/#sklearn.compose.TransformedTargetRegressor.predict "sklearn.compose.TransformedTargetRegressor.predict").

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L366)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L113)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model according to the given training data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Parameters passed to the `fit` method of the underlying regressor. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L130)

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

[generated/compose/TransformedTargetRegressor.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L178)

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

[generated/compose/TransformedTargetRegressor.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L70)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict using the base regressor, applying inverse.

The regressor is used to predict and the `inverse_func` or `inverse_transform` is applied before returning the prediction.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.predict_params`? | `any` | Parameters passed to the `predict` method of the underlying regressor. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Samples. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L210)

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

[generated/compose/TransformedTargetRegressor.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L253)

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

[generated/compose/TransformedTargetRegressor.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L303)
