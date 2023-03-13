# BaggingClassifier

A Bagging classifier.

A Bagging classifier is an ensemble meta-estimator that fits base classifiers each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#rb1846455d0e5-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#rb1846455d0e5-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#rb1846455d0e5-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#rb1846455d0e5-4).

Read more in the [User Guide](../ensemble.html#bagging).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new BaggingClassifier(opts?: object): BaggingClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | Use `estimator` instead.  `Default Value`  `'deprecated'` |
| `opts.bootstrap?` | `boolean` | Whether samples are drawn with replacement. If `false`, sampling without replacement is performed.  `Default Value`  `true` |
| `opts.bootstrap_features?` | `boolean` | Whether features are drawn with replacement.  `Default Value`  `false` |
| `opts.estimator?` | `any` | The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier"). |
| `opts.max_features?` | `number` | The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap\_features` for more details).  `Default Value`  `1` |
| `opts.max_samples?` | `number` | The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).  `Default Value`  `1` |
| `opts.n_estimators?` | `number` | The number of base estimators in the ensemble.  `Default Value`  `10` |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.BaggingClassifier.fit "sklearn.ensemble.BaggingClassifier.fit") and [`predict`](#sklearn.ensemble.BaggingClassifier.predict "sklearn.ensemble.BaggingClassifier.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.oob_score?` | `boolean` | Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random\_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.verbose?` | `number` | Controls the verbosity when fitting and predicting.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See [the Glossary](../../glossary.html#term-warm_start).  `Default Value`  `false` |

### Returns

[`BaggingClassifier`](BaggingClassifier.md)

Defined in:  [generated/ensemble/BaggingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L27)

## Methods

### decision\_function()

Average of the decision functions of the base classifiers.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrices are accepted only if they are supported by the base estimator. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L198)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L181)

### fit()

Build a Bagging ensemble of estimators from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrices are accepted only if they are supported by the base estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L236)

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

Defined in:  [generated/ensemble/BaggingClassifier.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L123)

### predict()

Predict class for X.

The predicted class of an input sample is computed as the class with the highest mean predicted probability. If base estimators do not implement a `predict\_proba` method, then it resorts to voting.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrices are accepted only if they are supported by the base estimator. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L287)

### predict\_log\_proba()

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the base estimators in the ensemble.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrices are accepted only if they are supported by the base estimator. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L324)

### predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the mean predicted class probabilities of the base estimators in the ensemble. If base estimators do not implement a `predict\_proba` method, then it resorts to voting and the predicted class probabilities of an input sample represents the proportion of estimators predicting each class.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrices are accepted only if they are supported by the base estimator. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L364)

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

Defined in:  [generated/ensemble/BaggingClassifier.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L403)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/BaggingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/BaggingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/BaggingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/BaggingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/BaggingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L21)

## Accessors

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L587)

Defined in:  [generated/ensemble/BaggingClassifier.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L587)

### estimator\_

The base estimator from which the ensemble is grown.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L452)

Defined in:  [generated/ensemble/BaggingClassifier.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L452)

### estimators\_

The collection of fitted base estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L533)

Defined in:  [generated/ensemble/BaggingClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L533)

### estimators\_features\_

The subset of drawn features for each base estimator.

#### Signature

```ts
estimators_features_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L560)

Defined in:  [generated/ensemble/BaggingClassifier.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L560)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L506)

Defined in:  [generated/ensemble/BaggingClassifier.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L506)

### n\_classes\_

The number of classes.

#### Signature

```ts
n_classes_(): Promise<number | any[]>;
```

#### Returns

`Promise`\<`number` \| `any`[]\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L614)

Defined in:  [generated/ensemble/BaggingClassifier.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L614)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L479)

Defined in:  [generated/ensemble/BaggingClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L479)

### oob\_decision\_function\_

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_decision_function_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L668)

Defined in:  [generated/ensemble/BaggingClassifier.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L668)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/BaggingClassifier.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L641)

Defined in:  [generated/ensemble/BaggingClassifier.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L641)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/BaggingClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L110)

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

Defined in:  [generated/ensemble/BaggingClassifier.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L114)

Defined in:  [generated/ensemble/BaggingClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L110) [generated/ensemble/BaggingClassifier.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L114)
