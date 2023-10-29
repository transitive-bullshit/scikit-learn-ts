# TransformedTargetRegressor

Meta-estimator to regress on a transformed target.

Useful for applying a non-linear transformation to the target `y` in regression problems. This transformation can be given as a Transformer such as the [`QuantileTransformer`](sklearn.preprocessing.QuantileTransformer.html#sklearn.preprocessing.QuantileTransformer "sklearn.preprocessing.QuantileTransformer") or as a function and its inverse such as `np.log` and `np.exp`.

The computation during [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.compose.TransformedTargetRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new TransformedTargetRegressor(opts?: object): TransformedTargetRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.check_inverse?` | `boolean` | Whether to check that `transform` followed by `inverse\_transform` or `func` followed by `inverse\_func` leads to the original targets.  `Default Value`  `true` |
| `opts.func?` | `any` | Function to apply to `y` before passing to [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit"). Cannot be set at the same time as `transformer`. The function needs to return a 2-dimensional array. If `func is None`, the function used will be the identity function. |
| `opts.inverse_func?` | `any` | Function to apply to the prediction of the regressor. Cannot be set at the same time as `transformer`. The function needs to return a 2-dimensional array. The inverse function is used to return predictions to the same space of the original training labels. |
| `opts.regressor?` | `any` | Regressor object such as derived from [`RegressorMixin`](sklearn.base.RegressorMixin.html#sklearn.base.RegressorMixin "sklearn.base.RegressorMixin"). This regressor will automatically be cloned each time prior to fitting. If `regressor is None`, [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is created and used. |
| `opts.transformer?` | `any` | Estimator object such as derived from [`TransformerMixin`](sklearn.base.TransformerMixin.html#sklearn.base.TransformerMixin "sklearn.base.TransformerMixin"). Cannot be set at the same time as `func` and `inverse\_func`. If `transformer is None` as well as `func` and `inverse\_func`, the transformer will be an identity transformer. Note that the transformer will be cloned during fitting. Also, the transformer is restricting `y` to be a numpy array. |

### Returns

[`TransformedTargetRegressor`](TransformedTargetRegressor.md)

Defined in:  [generated/compose/TransformedTargetRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L118)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method of the underlying regressor. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L135)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L188)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L70)

### predict()

Predict using the base regressor, applying inverse.

The regressor is used to predict and the `inverse\_func` or `inverse\_transform` is applied before returning the prediction.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Samples. |
| `opts.predict_params?` | `any` | Parameters passed to the `predict` method of the underlying regressor. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L228)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L274)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L329)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/compose/TransformedTargetRegressor.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L421)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L57)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/compose/TransformedTargetRegressor.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L61)

### regressor\_

Fitted regressor.

#### Signature

```ts
regressor_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/compose/TransformedTargetRegressor.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L367)

### transformer\_

Transformer used in [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") and [`predict`](#sklearn.compose.TransformedTargetRegressor.predict "sklearn.compose.TransformedTargetRegressor.predict").

#### Signature

```ts
transformer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/compose/TransformedTargetRegressor.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L394)
