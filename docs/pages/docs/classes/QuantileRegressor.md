# QuantileRegressor

Linear regression model that predicts conditional quantiles.

The linear [`QuantileRegressor`](#sklearn.linear_model.QuantileRegressor "sklearn.linear_model.QuantileRegressor") optimizes the pinball loss for a desired `quantile` and is robust to outliers.

This model uses an L1 regularization like [`Lasso`](sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso "sklearn.linear_model.Lasso").

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.QuantileRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new QuantileRegressor(opts?: object): QuantileRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Regularization constant that multiplies the L1 penalty term.  `Default Value`  `1` |
| `opts.fit_intercept?` | `boolean` | Whether or not to fit the intercept.  `Default Value`  `true` |
| `opts.quantile?` | `number` | The quantile that the model tries to predict. It must be strictly between 0 and 1. If 0.5 (default), the model predicts the 50% quantile, i.e. the median.  `Default Value`  `0.5` |
| `opts.solver?` | `"highs-ds"` \| `"highs-ipm"` \| `"highs"` \| `"interior-point"` \| `"revised simplex"` | Method used by [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.11.3)") to solve the linear programming formulation.  From `scipy>=1.6.0`, it is recommended to use the highs methods because they are the fastest ones. Solvers “highs-ds”, “highs-ipm” and “highs” support sparse input data and, in fact, always convert to sparse csc.  From `scipy>=1.11.0`, “interior-point” is not available anymore.  `Default Value`  `'interior-point'` |
| `opts.solver_options?` | `any` | Additional parameters passed to [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.11.3)") as options. If `undefined` and if `solver='interior-point'`, then `{"lstsq": `true`}` is passed to [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.11.3)") for the sake of stability. |

### Returns

[`QuantileRegressor`](QuantileRegressor.md)

Defined in:  [generated/linear\_model/QuantileRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L27)

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

Defined in:  [generated/linear\_model/QuantileRegressor.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L133)

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
| `opts.X?` | `ArrayLike` | Training data. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/QuantileRegressor.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L150)

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

Defined in:  [generated/linear\_model/QuantileRegressor.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L201)

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

Defined in:  [generated/linear\_model/QuantileRegressor.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L87)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/QuantileRegressor.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L239)

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

Defined in:  [generated/linear\_model/QuantileRegressor.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L276)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/QuantileRegressor.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L329)

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

Defined in:  [generated/linear\_model/QuantileRegressor.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L371)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L21)

## Accessors

### coef\_

Estimated coefficients for the features.

#### Signature

```ts
coef_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L409)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L490)

### intercept\_

The intercept of the model, aka bias term.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L436)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L463)

### n\_iter\_

The actual number of iterations performed by the solver.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/QuantileRegressor.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L517)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/QuantileRegressor.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L74)

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

Defined in: [generated/linear\_model/QuantileRegressor.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L78)
