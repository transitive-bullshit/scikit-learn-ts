# KNeighborsClassifier

Classifier implementing the k-nearest neighbors vote.

Read more in the [User Guide](../neighbors.html#classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new KNeighborsClassifier(opts?: KNeighborsClassifierOptions): KNeighborsClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNeighborsClassifierOptions`](../interfaces/KNeighborsClassifierOptions.md) |

### Returns

[`KNeighborsClassifier`](KNeighborsClassifier.md)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L17)

## Accessors

### classes\_

Class labels known to the classifier

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L315)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L315)

### effective\_metric\_

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L342)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L342)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L369)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L369)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L423)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L423)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L396)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L396)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L450)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L450)

### outputs\_2d\_

False when `y`’s shape is (n\_samples, ) or (n\_samples, 1) during fit otherwise `true`.

#### Signature

```ts
outputs_2d_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L477)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L477)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L28)

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

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L32)

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L28) [generated/neighbors/KNeighborsClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L32)

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

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L91)

### fit()

Fit the k-nearest neighbors classifier from the training dataset.

#### Signature

```ts
fit(opts: KNeighborsClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierFitOptions`](../interfaces/KNeighborsClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L108)

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

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L41)

### kneighbors()

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Signature

```ts
kneighbors(opts: KNeighborsClassifierKneighborsOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierKneighborsOptions`](../interfaces/KNeighborsClassifierKneighborsOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L142)

### kneighbors\_graph()

Compute the (weighted) graph of k-Neighbors for points in X.

#### Signature

```ts
kneighbors_graph(opts: KNeighborsClassifierKneighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierKneighborsGraphOptions`](../interfaces/KNeighborsClassifierKneighborsGraphOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L178)

### predict()

Predict the class labels for the provided data.

#### Signature

```ts
predict(opts: KNeighborsClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierPredictOptions`](../interfaces/KNeighborsClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L215)

### predict\_proba()

Return probability estimates for the test data X.

#### Signature

```ts
predict_proba(opts: KNeighborsClassifierPredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierPredictProbaOptions`](../interfaces/KNeighborsClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L245)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: KNeighborsClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsClassifierScoreOptions`](../interfaces/KNeighborsClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L281)
