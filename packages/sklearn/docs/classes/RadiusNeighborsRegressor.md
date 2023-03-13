# RadiusNeighborsRegressor

Regression based on neighbors within a fixed radius.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the [User Guide](../neighbors.html#regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new RadiusNeighborsRegressor(opts?: RadiusNeighborsRegressorOptions): RadiusNeighborsRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RadiusNeighborsRegressorOptions`](../interfaces/RadiusNeighborsRegressorOptions.md) |

### Returns

[`RadiusNeighborsRegressor`](RadiusNeighborsRegressor.md)

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L19)

## Accessors

### effective\_metric\_

The distance metric to use. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L295)

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L295)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L322)

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L322)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L376)

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L376)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L349)

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L349)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L403)

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L403)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L30)

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

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L34)

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L30) [generated/neighbors/RadiusNeighborsRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L34)

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

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L93)

### fit()

Fit the radius neighbors regressor from the training dataset.

#### Signature

```ts
fit(opts: RadiusNeighborsRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorFitOptions`](../interfaces/RadiusNeighborsRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L110)

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

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L43)

### predict()

Predict the target for the provided data.

#### Signature

```ts
predict(opts: RadiusNeighborsRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorPredictOptions`](../interfaces/RadiusNeighborsRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L142)

### radius\_neighbors()

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Signature

```ts
radius_neighbors(opts: RadiusNeighborsRegressorRadiusNeighborsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorRadiusNeighborsOptions`](../interfaces/RadiusNeighborsRegressorRadiusNeighborsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L180)

### radius\_neighbors\_graph()

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Signature

```ts
radius_neighbors_graph(opts: RadiusNeighborsRegressorRadiusNeighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorRadiusNeighborsGraphOptions`](../interfaces/RadiusNeighborsRegressorRadiusNeighborsGraphOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L218)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: RadiusNeighborsRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsRegressorScoreOptions`](../interfaces/RadiusNeighborsRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/RadiusNeighborsRegressor.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/RadiusNeighborsRegressor.ts#L259)
