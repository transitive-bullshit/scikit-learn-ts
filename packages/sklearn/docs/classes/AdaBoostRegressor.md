# AdaBoostRegressor

An AdaBoost regressor.

An AdaBoost \[1\] regressor is a meta-estimator that begins by fitting a regressor on the original dataset and then fits additional copies of the regressor on the same dataset but where the weights of instances are adjusted according to the error of the current prediction. As such, subsequent regressors focus more on difficult cases.

This class implements the algorithm known as AdaBoost.R2 \[2\].

Read more in the [User Guide](../ensemble.html#adaboost).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new AdaBoostRegressor(opts?: object): AdaBoostRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | The base estimator from which the boosted ensemble is built. If `undefined`, then the base estimator is [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor") initialized with `max\_depth=3`. |
| `opts.estimator?` | `any` | The base estimator from which the boosted ensemble is built. If `undefined`, then the base estimator is [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor") initialized with `max\_depth=3`. |
| `opts.learning_rate?` | `number` | Weight applied to each regressor at each boosting iteration. A higher learning rate increases the contribution of each regressor. There is a trade-off between the `learning\_rate` and `n\_estimators` parameters. Values must be in the range `(0.0, inf)`.  `Default Value`  `1` |
| `opts.loss?` | `"linear"` \| `"square"` \| `"exponential"` | The loss function to use when updating the weights after each boosting iteration.  `Default Value`  `'linear'` |
| `opts.n_estimators?` | `number` | The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early. Values must be in the range `\[1, inf)`.  `Default Value`  `50` |
| `opts.random_state?` | `number` | Controls the random seed given at each `estimator` at each boosting iteration. Thus, it is only used when `estimator` exposes a `random\_state`. In addition, it controls the bootstrap of the weights used to train the `estimator` at each boosting iteration. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |

### Returns

[`AdaBoostRegressor`](AdaBoostRegressor.md)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L27)

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L129)

### fit()

Build a boosted classifier/regressor from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, the sample weights are initialized to 1 / n\_samples. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L146)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L197)

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L81)

### predict()

Predict regression value for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L237)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L274)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L327)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L369)

### staged\_predict()

Return staged predictions for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.

#### Signature

```ts
staged_predict(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L411)

### staged\_score()

Return staged scores for X, y.

This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.

#### Signature

```ts
staged_score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Labels for X. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L450)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L21)

## Accessors

### estimator\_

The base estimator from which the ensemble is grown.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L501)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L501)

### estimator\_errors\_

Regression error for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_errors_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L582)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L582)

### estimator\_weights\_

Weights for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_weights_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L555)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L555)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L528)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L528)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L636)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L636)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L609)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L609)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L68)

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L72)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L68) [generated/ensemble/AdaBoostRegressor.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L72)
