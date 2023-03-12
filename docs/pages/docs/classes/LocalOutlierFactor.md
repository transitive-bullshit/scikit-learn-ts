# LocalOutlierFactor

Unsupervised Outlier Detection using the Local Outlier Factor (LOF).

The anomaly score of each sample is called the Local Outlier Factor. It measures the local deviation of the density of a given sample with respect to its neighbors. It is local in that the anomaly score depends on how isolated the object is with respect to the surrounding neighborhood. More precisely, locality is given by k-nearest neighbors, whose distance is used to estimate the local density. By comparing the local density of a sample to the local densities of its neighbors, one can identify samples that have a substantially lower density than their neighbors. These are considered outliers.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html)

## Constructors

## constructor()

### Signature

```ts
new LocalOutlierFactor(opts?: LocalOutlierFactorOptions): LocalOutlierFactor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LocalOutlierFactorOptions`](../interfaces/LocalOutlierFactorOptions.md) |

### Returns

[`LocalOutlierFactor`](LocalOutlierFactor.md)

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L17)

## Accessors

### effective\_metric\_

The effective metric used for the distance computation.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L443)

### effective\_metric\_params\_

The effective additional keyword arguments for the metric function.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L470)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L524)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L497)

### n\_neighbors\_

The actual number of neighbors used for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries.

#### Signature

```ts
n_neighbors_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L389)

### n\_samples\_fit\_

It is the number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L551)

### negative\_outlier\_factor\_

The opposite LOF of the training samples. The higher, the more normal. Inliers tend to have a LOF score close to 1 (`negative\_outlier\_factor\_` close to -1), while outliers tend to have a larger LOF score.

The local outlier factor (LOF) of a sample captures its supposed ‘degree of abnormality’. It is the average of the ratio of the local reachability density of a sample and those of its k-nearest neighbors.

#### Signature

```ts
negative_outlier_factor_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L362)

### offset\_

Offset used to obtain binary labels from the raw scores. Observations having a negative\_outlier\_factor smaller than `offset\_` are detected as abnormal. The offset is set to -1.5 (inliers score around -1), except when a contamination parameter different than “auto” is provided. In that case, the offset is defined in such a way we obtain the expected number of outliers in training.

#### Signature

```ts
offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/LocalOutlierFactor.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L416)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L28)

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

Defined in: [generated/neighbors/LocalOutlierFactor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L32)

## Methods

### decision\_function()

Shifted opposite of the Local Outlier Factor of X.

Bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The shift offset allows a zero threshold for being an outlier. The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point.

#### Signature

```ts
decision_function(opts: LocalOutlierFactorDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorDecisionFunctionOptions`](../interfaces/LocalOutlierFactorDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L116)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L95)

### fit()

Fit the local outlier factor detector from the training dataset.

#### Signature

```ts
fit(opts: LocalOutlierFactorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorFitOptions`](../interfaces/LocalOutlierFactorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L151)

### fit\_predict()

Fit the model to the training set X and return the labels.

**Not available for novelty detection (when novelty is set to `true`).** Label is 1 for an inlier and -1 for an outlier according to the LOF score and the contamination parameter.

#### Signature

```ts
fit_predict(opts: LocalOutlierFactorFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorFitPredictOptions`](../interfaces/LocalOutlierFactorFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L183)

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

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L41)

### kneighbors()

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Signature

```ts
kneighbors(opts: LocalOutlierFactorKneighborsOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorKneighborsOptions`](../interfaces/LocalOutlierFactorKneighborsOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L219)

### kneighbors\_graph()

Compute the (weighted) graph of k-Neighbors for points in X.

#### Signature

```ts
kneighbors_graph(opts: LocalOutlierFactorKneighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorKneighborsGraphOptions`](../interfaces/LocalOutlierFactorKneighborsGraphOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L253)

### predict()

Predict the labels (1 inlier, -1 outlier) of X according to LOF.

**Only available for novelty detection (when novelty is set to `true`).** This method allows to generalize prediction to *new observations* (not in the training set). Note that the result of `clf.fit(X)` then `clf.predict(X)` with `novelty=True` may differ from the result obtained by `clf.fit\_predict(X)` with `novelty=False`.

#### Signature

```ts
predict(opts: LocalOutlierFactorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorPredictOptions`](../interfaces/LocalOutlierFactorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L292)

### score\_samples()

Opposite of the Local Outlier Factor of X.

It is the opposite as bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point. Because of this, the scores obtained via `score\_samples` may differ from the standard LOF scores. The standard LOF scores for the training data is available via the `negative\_outlier\_factor\_` attribute.

#### Signature

```ts
score_samples(opts: LocalOutlierFactorScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorScoreSamplesOptions`](../interfaces/LocalOutlierFactorScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L326)
