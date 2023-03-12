# RadiusNeighborsClassifier

Classifier implementing a vote among neighbors within a given radius.

Read more in the [User Guide](../neighbors.html#classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new RadiusNeighborsClassifier(opts?: RadiusNeighborsClassifierOptions): RadiusNeighborsClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RadiusNeighborsClassifierOptions`](../interfaces/RadiusNeighborsClassifierOptions.md) |

### Returns

[`RadiusNeighborsClassifier`](RadiusNeighborsClassifier.md)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L17)

## Accessors

### classes\_

Class labels known to the classifier.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L330)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L330)

### effective\_metric\_

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L357)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L357)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L384)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L384)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L438)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L438)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L411)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L411)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L465)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L465)

### outlier\_label\_

Label which is given for outlier samples (samples with no neighbors on given radius).

#### Signature

```ts
outlier_label_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L492)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L492)

### outputs\_2d\_

False when `y`’s shape is (n\_samples, ) or (n\_samples, 1) during fit otherwise `true`.

#### Signature

```ts
outputs_2d_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L519)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L519)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L28)

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

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L32)

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L28) [generated/neighbors/RadiusNeighborsClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L32)

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

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L93)

### fit()

Fit the radius neighbors classifier from the training dataset.

#### Signature

```ts
fit(opts: RadiusNeighborsClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierFitOptions`](../interfaces/RadiusNeighborsClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L110)

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

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L41)

### predict()

Predict the class labels for the provided data.

#### Signature

```ts
predict(opts: RadiusNeighborsClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierPredictOptions`](../interfaces/RadiusNeighborsClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L142)

### predict\_proba()

Return probability estimates for the test data X.

#### Signature

```ts
predict_proba(opts: RadiusNeighborsClassifierPredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierPredictProbaOptions`](../interfaces/RadiusNeighborsClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L176)

### radius\_neighbors()

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Signature

```ts
radius_neighbors(opts: RadiusNeighborsClassifierRadiusNeighborsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierRadiusNeighborsOptions`](../interfaces/RadiusNeighborsClassifierRadiusNeighborsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L215)

### radius\_neighbors\_graph()

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Signature

```ts
radius_neighbors_graph(opts: RadiusNeighborsClassifierRadiusNeighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierRadiusNeighborsGraphOptions`](../interfaces/RadiusNeighborsClassifierRadiusNeighborsGraphOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L253)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: RadiusNeighborsClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierScoreOptions`](../interfaces/RadiusNeighborsClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/RadiusNeighborsClassifier.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L294)
