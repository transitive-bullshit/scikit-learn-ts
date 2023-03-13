# AdaBoostClassifier

An AdaBoost classifier.

An AdaBoost \[1\] classifier is a meta-estimator that begins by fitting a classifier on the original dataset and then fits additional copies of the classifier on the same dataset but where the weights of incorrectly classified instances are adjusted such that subsequent classifiers focus more on difficult cases.

This class implements the algorithm known as AdaBoost-SAMME \[2\].

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new AdaBoostClassifier(opts?: object): AdaBoostClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"SAMME"` \| `"SAMME.R"` | If ‘SAMME.R’ then use the SAMME.R real boosting algorithm. `estimator` must support calculation of class probabilities. If ‘SAMME’ then use the SAMME discrete boosting algorithm. The SAMME.R algorithm typically converges faster than SAMME, achieving a lower test error with fewer boosting iterations.  `Default Value`  `'SAMME.R'` |
| `opts.base_estimator?` | `any` | The base estimator from which the boosted ensemble is built. Support for sample weighting is required, as well as proper `classes\_` and `n\_classes\_` attributes. If `undefined`, then the base estimator is [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier") initialized with `max\_depth=1`. |
| `opts.estimator?` | `any` | The base estimator from which the boosted ensemble is built. Support for sample weighting is required, as well as proper `classes\_` and `n\_classes\_` attributes. If `undefined`, then the base estimator is [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier") initialized with `max\_depth=1`. |
| `opts.learning_rate?` | `number` | Weight applied to each classifier at each boosting iteration. A higher learning rate increases the contribution of each classifier. There is a trade-off between the `learning\_rate` and `n\_estimators` parameters. Values must be in the range `(0.0, inf)`.  `Default Value`  `1` |
| `opts.n_estimators?` | `number` | The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early. Values must be in the range `\1, inf)`.  `Default Value`  `50` |
| `opts.random_state?` | `number` | Controls the random seed given at each `estimator` at each boosting iteration. Thus, it is only used when `estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary. |

### Returns

[`AdaBoostClassifier`](AdaBoostClassifier.md)

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L21)

## Accessors

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L632)

### estimator\_

The base estimator from which the ensemble is grown.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L578)

### estimator\_errors\_

Classification error for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_errors_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:713](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L713)

### estimator\_weights\_

Weights for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_weights_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:686](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L686)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L605)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:767](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L767)

### n\_classes\_

The number of classes.

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:659](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L659)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/AdaBoostClassifier.ts:740](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L740)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L68)

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

Defined in: [generated/ensemble/AdaBoostClassifier.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L72)

## Methods

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L148)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L131)

### fit()

Build a boosted classifier/regressor from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, the sample weights are initialized to 1 / n\_samples. |
| `opts.y?` | `ArrayLike` | The target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L186)

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

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L81)

### predict()

Predict classes for X.

The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L237)

### predict\_log\_proba()

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the weighted mean predicted class log-probabilities of the classifiers in the ensemble.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L274)

### predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L314)

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

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L353)

### staged\_decision\_function()

Compute decision function of `X` for each boosting iteration.

This method allows monitoring (i.e. determine error on testing set) after each boosting iteration.

#### Signature

```ts
staged_decision_function(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L404)

### staged\_predict()

Return staged predictions for X.

The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.

This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.

#### Signature

```ts
staged_predict(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L446)

### staged\_predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.

This generator method yields the ensemble predicted class probabilities after each iteration of boosting and therefore allows monitoring, such as to determine the predicted class probabilities on a test set after each boost.

#### Signature

```ts
staged_predict_proba(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L487)

### staged\_score()

Return staged scores for X, y.

This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.

#### Signature

```ts
staged_score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | Labels for X. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L527)
