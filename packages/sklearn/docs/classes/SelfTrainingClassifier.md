# SelfTrainingClassifier

Self-training classifier.

This [metaestimator](../../glossary.html#term-metaestimator) allows a given supervised classifier to function as a semi-supervised classifier, allowing it to learn from unlabeled data. It does this by iteratively predicting pseudo-labels for the unlabeled data and adding them to the training set.

The classifier will continue iterating until either max\_iter is reached, or no pseudo-labels were added to the training set in the previous iteration.

Read more in the [User Guide](../semi_supervised.html#self-training).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.SelfTrainingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new SelfTrainingClassifier(opts?: object): SelfTrainingClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | An estimator object implementing `fit` and `predict\_proba`. Invoking the `fit` method will fit a clone of the passed estimator, which will be stored in the `base\_estimator\_` attribute. |
| `opts.criterion?` | `"threshold"` \| `"k_best"` | The selection criterion used to select which labels to add to the training set. If `'threshold'`, pseudo-labels with prediction probabilities above `threshold` are added to the dataset. If `'k\_best'`, the `k\_best` pseudo-labels with highest prediction probabilities are added to the dataset. When using the ‘threshold’ criterion, a [well calibrated classifier](../calibration.html#calibration) should be used.  `Default Value`  `'threshold'` |
| `opts.k_best?` | `number` | The amount of samples to add in each iteration. Only used when `criterion='k\_best'`.  `Default Value`  `10` |
| `opts.max_iter?` | `number` | Maximum number of iterations allowed. Should be greater than or equal to 0. If it is `undefined`, the classifier will continue to predict labels until no new pseudo-labels are added, or all unlabeled samples have been labeled.  `Default Value`  `10` |
| `opts.threshold?` | `number` | The decision threshold for use with `criterion='threshold'`. Should be in \[0, 1). When using the `'threshold'` criterion, a [well calibrated classifier](../calibration.html#calibration) should be used.  `Default Value`  `0.75` |
| `opts.verbose?` | `boolean` | Enable verbose output.  `Default Value`  `false` |

### Returns

[`SelfTrainingClassifier`](SelfTrainingClassifier.md)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L27)

## Methods

### decision\_function()

Call decision function of the `base\_estimator`.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Array representing the data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L150)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L133)

### fit()

Fit self-training classifier using `X`, `y` as training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Array representing the data. |
| `opts.y?` | `any` | Array representing the labels. Unlabeled samples should have the label -1. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L188)

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

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L232)

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

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L85)

### predict()

Predict the classes of `X`.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Array representing the data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L270)

### predict\_log\_proba()

Predict log probability for each possible outcome.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Array representing the data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L307)

### predict\_proba()

Predict probability for each possible outcome.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Array representing the data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L345)

### score()

Call score on the `base\_estimator`.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Array representing the data. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Array representing the labels. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L383)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L21)

## Accessors

### base\_estimator\_

The fitted estimator.

#### Signature

```ts
base_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L425)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L425)

### classes\_

Class labels for each output. (Taken from the trained `base\_estimator\_`).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L452)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L452)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L560)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L560)

### labeled\_iter\_

The iteration in which each sample was labeled. When a sample has iteration 0, the sample was already labeled in the original dataset. When a sample has iteration -1, the sample was not labeled in any iteration.

#### Signature

```ts
labeled_iter_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L506)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L506)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L533)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L533)

### n\_iter\_

The number of rounds of self-training, that is the number of times the base estimator is fitted on relabeled variants of the training set.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L587)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L587)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L72)

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

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L76)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L72) [generated/semi\_supervised/SelfTrainingClassifier.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L76)

### termination\_condition\_

The reason that fitting was stopped.

#### Signature

```ts
termination_condition_(): Promise<"max_iter" | "no_change" | "all_labeled">;
```

#### Returns

`Promise`\<`"max_iter"` \| `"no_change"` \| `"all_labeled"`\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L614)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L614)

### transduction\_

The labels used for the final fit of the classifier, including pseudo-labels added during fit.

#### Signature

```ts
transduction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L479)

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L479)
