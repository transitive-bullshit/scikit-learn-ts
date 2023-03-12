# SGDClassifier

Linear classifiers (SVM, logistic regression, etc.) with SGD training.

This estimator implements regularized linear models with stochastic gradient descent (SGD) learning: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate). SGD allows minibatch (online/out-of-core) learning via the `partial\_fit` method. For best results using the default learning rate schedule, the data should have zero mean and unit variance.

This implementation works with data represented as dense or sparse arrays of floating point values for the features. The model it fits can be controlled with the loss parameter; by default, it fits a linear support vector machine (SVM).

The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

Read more in the [User Guide](../sgd.html#sgd).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new SGDClassifier(opts?: SGDClassifierOptions): SGDClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SGDClassifierOptions`](../interfaces/SGDClassifierOptions.md) |

### Returns

[`SGDClassifier`](SGDClassifier.md)

Defined in:  [generated/linear\_model/SGDClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/SGDClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L25)

### id

> `string`

Defined in:  [generated/linear\_model/SGDClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L22)

### opts

> `any`

Defined in:  [generated/linear\_model/SGDClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L23)

## Accessors

### classes\_

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/linear\_model/SGDClassifier.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L514)

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in: [generated/linear\_model/SGDClassifier.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L424)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/SGDClassifier.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L587)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/linear\_model/SGDClassifier.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L447)

### loss\_function\_

#### Signature

```ts
loss_function_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/SGDClassifier.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L492)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/SGDClassifier.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L562)

### n\_iter\_

The actual number of iterations before reaching the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/SGDClassifier.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L472)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/SGDClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L34)

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

Defined in: [generated/linear\_model/SGDClassifier.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L38)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/SGDClassifier.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L539)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: SGDClassifierDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierDecisionFunctionOptions`](../interfaces/SGDClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L130)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: SGDClassifierDensifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierDensifyOptions`](../interfaces/SGDClassifierDensifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L164)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L111)

### fit()

Fit linear model with Stochastic Gradient Descent.

#### Signature

```ts
fit(opts: SGDClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierFitOptions`](../interfaces/SGDClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L190)

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

Defined in:  [generated/linear\_model/SGDClassifier.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L47)

### partial\_fit()

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.

#### Signature

```ts
partial_fit(opts: SGDClassifierPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierPartialFitOptions`](../interfaces/SGDClassifierPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L228)

### predict()

Predict class labels for samples in X.

#### Signature

```ts
predict(opts: SGDClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierPredictOptions`](../interfaces/SGDClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L260)

### predict\_log\_proba()

Log of probability estimates.

This method is only available for log loss and modified Huber loss.

When loss=”modified\_huber”, probability estimates may be hard zeros and ones, so taking the logarithm is not possible.

See `predict\_proba` for details.

#### Signature

```ts
predict_log_proba(opts: SGDClassifierPredictLogProbaOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierPredictLogProbaOptions`](../interfaces/SGDClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L294)

### predict\_proba()

Probability estimates.

This method is only available for log loss and modified Huber loss.

Multiclass probability estimates are derived from binary (one-vs.-rest) estimates by simple normalization, as recommended by Zadrozny and Elkan.

Binary probability estimates for loss=”modified\_huber” are given by (clip(decision\_function(X), -1, 1) + 1) / 2. For other loss functions it is necessary to perform proper probability calibration by wrapping the classifier with [`CalibratedClassifierCV`](sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV "sklearn.calibration.CalibratedClassifierCV") instead.

#### Signature

```ts
predict_proba(opts: SGDClassifierPredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierPredictProbaOptions`](../interfaces/SGDClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L332)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: SGDClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierScoreOptions`](../interfaces/SGDClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L362)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: SGDClassifierSparsifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDClassifierSparsifyOptions`](../interfaces/SGDClassifierSparsifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L398)
