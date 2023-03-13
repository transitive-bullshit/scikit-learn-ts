# KNeighborsRegressor

Regression based on k-nearest neighbors.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the [User Guide](../neighbors.html#regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new KNeighborsRegressor(opts?: KNeighborsRegressorOptions): KNeighborsRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNeighborsRegressorOptions`](../interfaces/KNeighborsRegressorOptions.md) |

### Returns

[`KNeighborsRegressor`](KNeighborsRegressor.md)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L19)

## Accessors

### effective\_metric\_

The distance metric to use. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L283)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L283)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L310)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L310)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L364)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L364)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L337)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L337)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L391)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L391)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L30)

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L34)

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L30) [generated/neighbors/KNeighborsRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L34)

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L93)

### fit()

Fit the k-nearest neighbors regressor from the training dataset.

#### Signature

```ts
fit(opts: KNeighborsRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorFitOptions`](../interfaces/KNeighborsRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L110)

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

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L43)

### kneighbors()

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Signature

```ts
kneighbors(opts: KNeighborsRegressorKneighborsOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorKneighborsOptions`](../interfaces/KNeighborsRegressorKneighborsOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L144)

### kneighbors\_graph()

Compute the (weighted) graph of k-Neighbors for points in X.

#### Signature

```ts
kneighbors_graph(opts: KNeighborsRegressorKneighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorKneighborsGraphOptions`](../interfaces/KNeighborsRegressorKneighborsGraphOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L180)

### predict()

Predict the target for the provided data.

#### Signature

```ts
predict(opts: KNeighborsRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorPredictOptions`](../interfaces/KNeighborsRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L217)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: KNeighborsRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsRegressorScoreOptions`](../interfaces/KNeighborsRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsRegressor.ts#L249)
