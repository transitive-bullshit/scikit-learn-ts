# OneVsOneClassifier

One-vs-one multiclass strategy.

This strategy consists in fitting one classifier per class pair. At prediction time, the class which received the most votes is selected. Since it requires to fit `n\_classes \* (n\_classes \- 1) / 2` classifiers, this method is usually slower than one-vs-the-rest, due to its O(n\_classes^2) complexity. However, this method may be advantageous for algorithms such as kernel algorithms which don’t scale well with `n\_samples`. This is because each individual learning problem only involves a small subset of the data whereas, with one-vs-the-rest, the complete dataset is used `n\_classes` times.

Read more in the [User Guide](../multiclass.html#ovo-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsOneClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new OneVsOneClassifier(opts?: object): OneVsOneClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator?` | `any` | A regressor or a classifier that implements [fit](../../glossary.html#term-fit). When a classifier is passed, [decision\_function](../../glossary.html#term-decision_function) will be used in priority and it will fallback to [predict\_proba](../../glossary.html#term-predict_proba) if it is not available. When a regressor is passed, [predict](../../glossary.html#term-predict) is used. |
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation: the `n\_classes \* ( n\_classes \- 1) / 2` OVO problems are computed in parallel.  `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |

### Returns

[`OneVsOneClassifier`](OneVsOneClassifier.md)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L25)

## Methods

### decision\_function()

Decision function for the OneVsOneClassifier.

The decision values for the samples are computed by adding the normalized sum of pair-wise classification confidence levels to the votes in order to disambiguate between the decision values when the votes for all the classes are equal leading to a tie.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L118)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L99)

### fit()

Fit underlying estimators.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Data. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Multi-class targets. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L156)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L200)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L55)

### partial\_fit()

Partially fit underlying estimators.

Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration, where the first call should have an array of all target variables.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | Data. |
| `opts.classes?` | `any` | Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is only required in the first call of partial\_fit and can be omitted in the subsequent calls. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Multi-class targets. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L240)

### predict()

Estimate the best class label for each sample in X.

This is implemented as `argmax(decision\_function(X), axis=1)` which will return the label of the class with most votes by estimators predicting the outcome of a decision for each possible class pair.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L293)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L330)

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
| `opts.classes?` | `string` \| `boolean` | Metadata routing for `classes` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L383)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L425)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L19)

## Accessors

### classes\_

Array containing labels.

#### Signature

```ts
classes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L490)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L490)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L463)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L463)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L571)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L571)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L544)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L544)

### pairwise\_indices\_

Indices of samples used when training the estimators. `undefined` when `estimator`’s `pairwise` tag is `false`.

#### Signature

```ts
pairwise_indices_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L517)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L517)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L42)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L46)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L42) [generated/multiclass/OneVsOneClassifier.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L46)
