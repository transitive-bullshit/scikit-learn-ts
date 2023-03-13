# VotingRegressor

Prediction voting regressor for unfitted estimators.

A voting regressor is an ensemble meta-estimator that fits several base regressors, each on the whole dataset. Then it averages the individual predictions to form a final prediction.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new VotingRegressor(opts?: object): VotingRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimators?` | `any` | Invoking the `fit` method on the `VotingRegressor` will fit clones of those original estimators that will be stored in the class attribute `self.estimators\_`. An estimator can be set to `'drop'` using [`set\_params`](#sklearn.ensemble.VotingRegressor.set_params "sklearn.ensemble.VotingRegressor.set_params"). |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.verbose?` | `boolean` | If `true`, the time elapsed while fitting will be printed as it is completed.  `Default Value`  `false` |
| `opts.weights?` | `ArrayLike` | Sequence of weights (`float` or `int`) to weight the occurrences of predicted values before averaging. Uses uniform weights if `undefined`. |

### Returns

[`VotingRegressor`](VotingRegressor.md)

Defined in:  [generated/ensemble/VotingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/VotingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/ensemble/VotingRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/ensemble/VotingRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L19)

## Accessors

### estimators\_

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/VotingRegressor.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L410)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/VotingRegressor.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L460)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/VotingRegressor.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L435)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/VotingRegressor.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L52)

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

Defined in: [generated/ensemble/VotingRegressor.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L56)

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

Defined in:  [generated/ensemble/VotingRegressor.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L109)

### fit()

Fit the estimators.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L126)

### fit\_transform()

Return class labels or probabilities for each estimator.

Return predictions for X for each estimator.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/VotingRegressor.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L175)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L222)

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

Defined in:  [generated/ensemble/VotingRegressor.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L65)

### predict()

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L260)

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

Defined in:  [generated/ensemble/VotingRegressor.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L295)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L344)

### transform()

Return predictions for X for each estimator.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/VotingRegressor.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L377)
