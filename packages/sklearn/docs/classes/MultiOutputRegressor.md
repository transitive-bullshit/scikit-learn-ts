# MultiOutputRegressor

Multi target regression.

This strategy consists of fitting one regressor per target. This is a simple strategy for extending regressors that do not natively support multi-target regression.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new MultiOutputRegressor(opts?: object): MultiOutputRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator?` | `any` | An estimator object implementing [fit](../../glossary.html#term-fit) and [predict](../../glossary.html#term-predict). |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel. [`fit`](#sklearn.multioutput.MultiOutputRegressor.fit "sklearn.multioutput.MultiOutputRegressor.fit"), [`predict`](#sklearn.multioutput.MultiOutputRegressor.predict "sklearn.multioutput.MultiOutputRegressor.predict") and [`partial\_fit`](#sklearn.multioutput.MultiOutputRegressor.partial_fit "sklearn.multioutput.MultiOutputRegressor.partial_fit") (if supported by the passed estimator) will be parallelized for each target.  When individual estimators are fast to train or predict, using `n\_jobs > 1` can result in slower performance due to the parallelism overhead.  `undefined` means `1` unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all available processes / threads. See [Glossary](../../glossary.html#term-n_jobs) for more details. |

### Returns

[`MultiOutputRegressor`](MultiOutputRegressor.md)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L23)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L99)

### fit()

Fit the model to data, separately for each output variable.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |
| `opts.fit_params?` | `any` | Parameters passed to the `estimator.fit` method of each step. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Multi-output targets. An indicator matrix turns on multilabel estimation. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L116)

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
| `opts.routing?` | `any` | A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L174)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L55)

### partial\_fit()

Incrementally fit the model to data, for each output variable.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |
| `opts.partial_fit_params?` | `any` | Parameters passed to the `estimator.partial\_fit` method of each sub-estimator.  Only available if `enable\_metadata\_routing=True`. See the [User Guide](../../metadata_routing.html#metadata-routing). |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Multi-output targets. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L212)

### predict()

Predict multi-output variable using model for each target variable.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L274)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L311)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L364)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_partial_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L406)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L448)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L19)

### id

> `string`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L16)

### opts

> `any`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L17)

## Accessors

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L486)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L486)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L540)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L540)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L513)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L513)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L42)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L46)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L42) [generated/multioutput/MultiOutputRegressor.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L46)
