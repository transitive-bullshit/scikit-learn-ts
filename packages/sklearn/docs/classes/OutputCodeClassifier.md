# OutputCodeClassifier

(Error-Correcting) Output-Code multiclass strategy.

Output-code based strategies consist in representing each class with a binary code (an array of 0s and 1s). At fitting time, one binary classifier per bit in the code book is fitted. At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen. The main advantage of these strategies is that the number of classifiers used can be controlled by the user, either for compressing the model (0 < `code\_size` < 1) or for making the model more robust to errors (`code\_size` > 1). See the documentation for more details.

Read more in the [User Guide](../multiclass.html#ecoc).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OutputCodeClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new OutputCodeClassifier(opts?: object): OutputCodeClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.code_size?` | `number` | Percentage of the number of classes to be used to create the code book. A number between 0 and 1 will require fewer classifiers than one-vs-the-rest. A number greater than 1 will require more classifiers than one-vs-the-rest.  `Default Value`  `1.5` |
| `opts.estimator?` | `any` | An estimator object implementing [fit](../../glossary.html#term-fit) and one of [decision\_function](../../glossary.html#term-decision_function) or [predict\_proba](../../glossary.html#term-predict_proba). |
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation: the multiclass problems are computed in parallel.  `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.random_state?` | `number` | The generator used to initialize the codebook. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |

### Returns

[`OutputCodeClassifier`](OutputCodeClassifier.md)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L25)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L113)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L130)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L174)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L67)

### predict()

Predict multi-class targets using underlying estimators.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L212)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L249)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L302)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L19)

## Accessors

### classes\_

Array containing labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L367)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L367)

### code\_book\_

Binary array containing the code of each class.

#### Signature

```ts
code_book_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L394)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L394)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L340)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L340)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L448)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L448)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L421)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L421)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L54)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L58)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L54) [generated/multiclass/OutputCodeClassifier.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L58)
