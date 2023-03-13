# StackingClassifier

Stack of estimators with a final classifier.

Stacked generalization consists in stacking the output of individual estimator and use a classifier to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new StackingClassifier(opts?: object): StackingClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.cv?` | `number` \| `"prefit"` | Determines the cross-validation splitting strategy used in `cross\_val\_predict` to train `final\_estimator`. Possible inputs for cv are: |
| `opts.estimators?` | `any` | Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to ‘drop’ using `set\_params`.  The type of estimator is generally expected to be a classifier. However, one can pass a regressor for some use case (e.g. ordinal regression). |
| `opts.final_estimator?` | `any` | A classifier which will be used to combine the base estimators. The default classifier is a [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression"). |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel all `estimators` `fit`. `undefined` means 1 unless in a `joblib.parallel\_backend` context. -1 means using all processors. See Glossary for more details. |
| `opts.passthrough?` | `boolean` | When `false`, only the predictions of estimators will be used as training data for `final\_estimator`. When `true`, the `final\_estimator` is trained on the predictions as well as the original training data.  `Default Value`  `false` |
| `opts.stack_method?` | `"auto"` \| `"predict_proba"` \| `"decision_function"` \| `"predict"` | Methods called for each base estimator. It can be:  `Default Value`  `'auto'` |
| `opts.verbose?` | `number` | Verbosity level.  `Default Value`  `0` |

### Returns

[`StackingClassifier`](StackingClassifier.md)

Defined in:  [generated/ensemble/StackingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L27)

## Methods

### decision\_function()

Decision function for samples in `X` using the final estimator.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L155)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L138)

### fit()

Fit the estimators.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights. |
| `opts.y?` | `ArrayLike` | Target values. Note that `y` will be internally encoded in numerically increasing order or lexicographic order. If the order matter (e.g. for ordinal regression), one should numerically encode the target `y` before calling fit. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L193)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/StackingClassifier.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L244)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. The input feature names are only used when `passthrough` is `true`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L295)

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

Defined in:  [generated/ensemble/StackingClassifier.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L88)

### predict()

Predict target for X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.predict_params?` | `any` | Parameters to the `predict` called by the `final\_estimator`. Note that this may be used to return uncertainties from some estimators with `return\_std` or `return\_cov`. Be aware that it will only accounts for uncertainty in the final estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L333)

### predict\_proba()

Predict class probabilities for `X` using the final estimator.

#### Signature

```ts
predict_proba(opts: object): Promise<any[] | ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`any`[] \| `ArrayLike`[]\>

Defined in:  [generated/ensemble/StackingClassifier.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L375)

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

Defined in:  [generated/ensemble/StackingClassifier.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L414)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L465)

### transform()

Return class labels or probabilities for X for each estimator.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/StackingClassifier.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L500)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/StackingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/StackingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/StackingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/StackingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/StackingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L21)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/StackingClassifier.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L535)

### estimators\_

The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingClassifier.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L562)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/StackingClassifier.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L616)

### final\_estimator\_

The classifier which predicts given the output of `estimators\_`.

#### Signature

```ts
final_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingClassifier.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L643)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingClassifier.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L589)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/StackingClassifier.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L75)

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

Defined in: [generated/ensemble/StackingClassifier.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L79)

### stack\_method\_

The method used by each base estimator.

#### Signature

```ts
stack_method_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingClassifier.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L670)
