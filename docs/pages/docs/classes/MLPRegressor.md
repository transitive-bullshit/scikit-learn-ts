# MLPRegressor

Multi-layer Perceptron regressor.

This model optimizes the squared error using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new MLPRegressor(opts?: MLPRegressorOptions): MLPRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MLPRegressorOptions` |

### Returns

[`MLPRegressor`](MLPRegressor.md)

Defined in:  [generated/neural\_network/MLPRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neural\_network/MLPRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L19)

### id

> `string`

Defined in:  [generated/neural\_network/MLPRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L16)

### opts

> `any`

Defined in:  [generated/neural\_network/MLPRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L17)

## Accessors

### best\_loss\_

The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set to `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
best_loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L273)

### best\_validation\_score\_

The best validation score (i.e. R2 score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
best_validation_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L348)

### coefs\_

The ith element in the list represents the weight matrix corresponding to layer i.

#### Signature

```ts
coefs_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L396)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L469)

### intercepts\_

The ith element in the list represents the bias vector corresponding to layer i + 1.

#### Signature

```ts
intercepts_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L419)

### loss\_

The current loss computed with the loss function.

#### Signature

```ts
loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L250)

### loss\_curve\_

Loss value evaluated at the end of each training step. The ith element in the list represents the loss at the ith iteration. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
loss_curve_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L298)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L444)

### n\_iter\_

The number of iterations the solver has run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L494)

### n\_layers\_

Number of layers.

#### Signature

```ts
n_layers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L517)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L542)

### out\_activation\_

Name of the output activation function.

#### Signature

```ts
out_activation_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L567)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neural\_network/MLPRegressor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L28)

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

Defined in: [generated/neural\_network/MLPRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L32)

### t\_

The number of training samples seen by the solver during fitting. Mathematically equals `n\_iters \* X.shape\[0\]`, it means `time\_step` and it is used by optimizer’s learning rate scheduler.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L373)

### validation\_scores\_

The score at each iteration on a held-out validation set. The score reported is the R2 score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
validation_scores_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L323)

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

Defined in:  [generated/neural\_network/MLPRegressor.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L111)

### fit()

Fit the model to data matrix X and target(s) y.

#### Signature

```ts
fit(opts: MLPRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPRegressorFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L128)

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

Defined in:  [generated/neural\_network/MLPRegressor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L41)

### partial\_fit()

Update the model with a single iteration over the given data.

#### Signature

```ts
partial_fit(opts: MLPRegressorPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPRegressorPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L158)

### predict()

Predict using the multi-layer perceptron model.

#### Signature

```ts
predict(opts: MLPRegressorPredictOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPRegressorPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L188)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: MLPRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MLPRegressorScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L218)
