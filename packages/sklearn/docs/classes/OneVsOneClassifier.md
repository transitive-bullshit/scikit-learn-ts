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
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation: the `n\_classes \* ( n\_classes \- 1) / 2` OVO problems are computed in parallel.  `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |

### Returns

[`OneVsOneClassifier`](OneVsOneClassifier.md)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L19)

## Accessors

### classes\_

Array containing labels.

#### Signature

```ts
classes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L366)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L366)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L339)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L339)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L447)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L447)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L420)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L420)

### pairwise\_indices\_

Indices of samples used when training the estimators. `undefined` when `estimator`’s `pairwise` tag is `false`.

#### Signature

```ts
pairwise_indices_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L393)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L393)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L42)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L46)

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L42) [generated/multiclass/OneVsOneClassifier.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L46)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L118)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L99)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L156)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L55)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L200)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L253)

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

Defined in:  [generated/multiclass/OneVsOneClassifier.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L290)
