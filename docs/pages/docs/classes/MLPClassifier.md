# MLPClassifier

Multi-layer Perceptron classifier.

This model optimizes the log-loss function using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new MLPClassifier(opts?: MLPClassifierOptions): MLPClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MLPClassifierOptions` |

### Returns

[`MLPClassifier`](MLPClassifier.md)

Defined in:  [generated/neural\_network/MLPClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neural\_network/MLPClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/neural\_network/MLPClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/neural\_network/MLPClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L17)

## Accessors

### best\_loss\_

The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set ot `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead.

#### Signature

```ts
best_loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L362)

### best\_validation\_score\_

The best validation score (i.e. accuracy score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.

#### Signature

```ts
best_validation_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L437)

### classes\_

Class labels for each output.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L314)

### coefs\_

The ith element in the list represents the weight matrix corresponding to layer i.

#### Signature

```ts
coefs_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L485)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L558)

### intercepts\_

The ith element in the list represents the bias vector corresponding to layer i + 1.

#### Signature

```ts
intercepts_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L508)

### loss\_

The current loss computed with the loss function.

#### Signature

```ts
loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L339)

### loss\_curve\_

The ith element in the list represents the loss at the ith iteration.

#### Signature

```ts
loss_curve_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L387)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L533)

### n\_iter\_

The number of iterations the solver has run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L583)

### n\_layers\_

Number of layers.

#### Signature

```ts
n_layers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L606)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L631)

### out\_activation\_

Name of the output activation function.

#### Signature

```ts
out_activation_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L656)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neural\_network/MLPClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L28)

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

Defined in: [generated/neural\_network/MLPClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L32)

### t\_

The number of training samples seen by the solver during fitting.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L462)

### validation\_scores\_

The score at each iteration on a held-out validation set. The score reported is the accuracy score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.

#### Signature

```ts
validation_scores_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L412)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L111)

### fit()

Fit the model to data matrix X and target(s) y.

#### Signature

```ts
fit(opts: MLPClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPClassifierFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L128)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L41)

### partial\_fit()

Update the model with a single iteration over the given data.

#### Signature

```ts
partial_fit(opts: MLPClassifierPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPClassifierPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L158)

### predict()

Predict using the multi-layer perceptron classifier.

#### Signature

```ts
predict(opts: MLPClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPClassifierPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L190)

### predict\_log\_proba()

Return the log of probability estimates.

#### Signature

```ts
predict_log_proba(opts: MLPClassifierPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPClassifierPredictLogProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L218)

### predict\_proba()

Probability estimates.

#### Signature

```ts
predict_proba(opts: MLPClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPClassifierPredictProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L250)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: MLPClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPClassifierScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L282)
