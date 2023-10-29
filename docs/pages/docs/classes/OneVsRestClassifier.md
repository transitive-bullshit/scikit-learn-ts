# OneVsRestClassifier

One-vs-the-rest (OvR) multiclass strategy.

Also known as one-vs-all, this strategy consists in fitting one classifier per class. For each classifier, the class is fitted against all the other classes. In addition to its computational efficiency (only `n\_classes` classifiers are needed), one advantage of this approach is its interpretability. Since each class is represented by one and one classifier only, it is possible to gain knowledge about the class by inspecting its corresponding classifier. This is the most commonly used strategy for multiclass classification and is a fair default choice.

OneVsRestClassifier can also be used for multilabel classification. To use this feature, provide an indicator matrix for the target `y` when calling `.fit`. In other words, the target labels should be formatted as a 2D binary (0/1) matrix, where \[i, j\] == 1 indicates the presence of label j in sample i. This estimator uses the binary relevance method to perform multilabel classification, which involves training one binary classifier independently for each label.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new OneVsRestClassifier(opts?: object): OneVsRestClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator?` | `any` | A regressor or a classifier that implements fit. When a classifier is passed, decision\_function will be used in priority and it will fallback to predict\_proba if it is not available. When a regressor is passed, predict is used. |
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation: the `n\_classes` one-vs-rest problems are computed in parallel.  `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.verbose?` | `number` | The verbosity level, if non zero, progress messages are printed. Below 50, the output is sent to stderr. Otherwise, the output is sent to stdout. The frequency of the messages increases with the verbosity level, reporting all iterations at 10. See [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.4.dev0)") for more details.  `Default Value`  `0` |

### Returns

[`OneVsRestClassifier`](OneVsRestClassifier.md)

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L27)

## Methods

### decision\_function()

Decision function for the OneVsRestClassifier.

Return the distance of each sample from the decision boundary for each class. This can only be used with estimators which implement the `decision\_function` method.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L129)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L110)

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
| `opts.X?` | `ArrayLike` | Data. |
| `opts.y?` | `any` | Multi-class targets. An indicator matrix turns on multilabel classification. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L167)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

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

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L211)

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

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L64)

### partial\_fit()

Partially fit underlying estimators.

Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Data. |
| `opts.classes?` | `any` | Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is only required in the first call of partial\_fit and can be omitted in the subsequent calls. |
| `opts.y?` | `any` | Multi-class targets. An indicator matrix turns on multilabel classification. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L251)

### predict()

Predict multi-class targets using underlying estimators.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L302)

### predict\_proba()

Probability estimates.

The returned estimates for all classes are ordered by label of classes.

Note that in the multilabel case, each sample can have any number of labels. This returns the marginal probability that the given sample has the label in question. For example, it is entirely consistent that two labels both have a 90% probability of applying to a given sample.

In the single label multiclass case, the rows of the returned matrix sum to 1.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L343)

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
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L382)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

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

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L435)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

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

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L477)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L21)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L542)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L515)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L623)

### label\_binarizer\_

Object used to transform multiclass labels to binary labels and vice-versa.

#### Signature

```ts
label_binarizer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L569)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/multiclass/OneVsRestClassifier.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L596)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multiclass/OneVsRestClassifier.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L51)

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

Defined in: [generated/multiclass/OneVsRestClassifier.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L55)
