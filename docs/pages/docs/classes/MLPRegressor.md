# MLPRegressor

Multi-layer Perceptron regressor.

This model optimizes the squared error using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new MLPRegressor(opts?: object): MLPRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.activation?` | `"identity"` \| `"logistic"` \| `"tanh"` \| `"relu"` | Activation function for the hidden layer.  `Default Value`  `'relu'` |
| `opts.alpha?` | `number` | Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss.  `Default Value`  `0.0001` |
| `opts.batch_size?` | `number` | Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the regressor will not use minibatch. When set to “auto”, `batch\_size=min(200, n\_samples)`.  `Default Value`  `'auto'` |
| `opts.beta_1?` | `number` | Exponential decay rate for estimates of first moment vector in adam, should be in \0, 1). Only used when solver=’adam’.  `Default Value`  `0.9` |
| `opts.beta_2?` | `number` | Exponential decay rate for estimates of second moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.  `Default Value`  `0.999` |
| `opts.early_stopping?` | `boolean` | Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside `validation\_fraction` of training data as validation and terminate training when validation score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive epochs. Only effective when solver=’sgd’ or ‘adam’.  `Default Value`  `false` |
| `opts.epsilon?` | `number` | Value for numerical stability in adam. Only used when solver=’adam’.  `Default Value`  `1e-8` |
| `opts.hidden_layer_sizes?` | `any` | The ith element represents the number of neurons in the ith hidden layer. |
| `opts.learning_rate?` | `"constant"` \| `"invscaling"` \| `"adaptive"` | Learning rate schedule for weight updates.  `Default Value`  `'constant'` |
| `opts.learning_rate_init?` | `number` | The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=’sgd’ or ‘adam’.  `Default Value`  `0.001` |
| `opts.max_fun?` | `number` | Only used when solver=’lbfgs’. Maximum number of function calls. The solver iterates until convergence (determined by `tol`), number of iterations reaches max\_iter, or this number of function calls. Note that number of function calls will be greater than or equal to the number of iterations for the MLPRegressor.  `Default Value`  `15000` |
| `opts.max_iter?` | `number` | Maximum number of iterations. The solver iterates until convergence (determined by ‘tol’) or this number of iterations. For stochastic solvers (‘sgd’, ‘adam’), note that this determines the number of epochs (how many times each data point will be used), not the number of gradient steps.  `Default Value`  `200` |
| `opts.momentum?` | `number` | Momentum for gradient descent update. Should be between 0 and 1. Only used when solver=’sgd’.  `Default Value`  `0.9` |
| `opts.n_iter_no_change?` | `number` | Maximum number of epochs to not meet `tol` improvement. Only effective when solver=’sgd’ or ‘adam’.  `Default Value`  `10` |
| `opts.nesterovs_momentum?` | `boolean` | Whether to use Nesterov’s momentum. Only used when solver=’sgd’ and momentum > 0.  `Default Value`  `true` |
| `opts.power_t?` | `number` | The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning\_rate is set to ‘invscaling’. Only used when solver=’sgd’.  `Default Value`  `0.5` |
| `opts.random_state?` | `number` | Determines random number generation for weights and bias initialization, train-test split if early stopping is used, and batch sampling when solver=’sgd’ or ‘adam’. Pass an int for reproducible results across multiple function calls. See [Glossary. |
| `opts.shuffle?` | `boolean` | Whether to shuffle samples in each iteration. Only used when solver=’sgd’ or ‘adam’.  `Default Value`  `true` |
| `opts.solver?` | `"lbfgs"` \| `"sgd"` \| `"adam"` | The solver for weight optimization.  `Default Value`  `'adam'` |
| `opts.tol?` | `number` | Tolerance for the optimization. When the loss or score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive iterations, unless `learning\_rate` is set to ‘adaptive’, convergence is considered to be reached and training stops.  `Default Value`  `0.0001` |
| `opts.validation_fraction?` | `number` | The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.  `Default Value`  `0.1` |
| `opts.verbose?` | `boolean` | Whether to print progress messages to stdout.  `Default Value`  `false` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See the Glossary.  `Default Value`  `false` |

### Returns

[`MLPRegressor`](MLPRegressor.md)

Defined in:  [generated/neural\_network/MLPRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neural\_network/MLPRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L19)

### id

> `string`

Defined in:  [generated/neural\_network/MLPRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L16)

### opts

> `any`

Defined in:  [generated/neural\_network/MLPRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L17)

## Accessors

### best\_loss\_

The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set to `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
best_loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L470)

### best\_validation\_score\_

The best validation score (i.e. R2 score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
best_validation_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L545)

### coefs\_

The ith element in the list represents the weight matrix corresponding to layer i.

#### Signature

```ts
coefs_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L593)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:666](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L666)

### intercepts\_

The ith element in the list represents the bias vector corresponding to layer i + 1.

#### Signature

```ts
intercepts_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L616)

### loss\_

The current loss computed with the loss function.

#### Signature

```ts
loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L447)

### loss\_curve\_

Loss value evaluated at the end of each training step. The ith element in the list represents the loss at the ith iteration. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
loss_curve_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L495)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L641)

### n\_iter\_

The number of iterations the solver has run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L691)

### n\_layers\_

Number of layers.

#### Signature

```ts
n_layers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:714](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L714)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L739)

### out\_activation\_

Name of the output activation function.

#### Signature

```ts
out_activation_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:764](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L764)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neural\_network/MLPRegressor.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L185)

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

Defined in: [generated/neural\_network/MLPRegressor.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L189)

### t\_

The number of training samples seen by the solver during fitting. Mathematically equals `n\_iters \* X.shape\[0\]`, it means `time\_step` and it is used by optimizer’s learning rate scheduler.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPRegressor.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L570)

### validation\_scores\_

The score at each iteration on a held-out validation set. The score reported is the R2 score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

#### Signature

```ts
validation_scores_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPRegressor.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L520)

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

Defined in:  [generated/neural\_network/MLPRegressor.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L268)

### fit()

Fit the model to data matrix X and target(s) y.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |
| `opts.y?` | `ArrayLike` | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L285)

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

Defined in:  [generated/neural\_network/MLPRegressor.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L198)

### partial\_fit()

Update the model with a single iteration over the given data.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |
| `opts.y?` | `ArrayLike` | The target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L325)

### predict()

Predict using the multi-layer perceptron model.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L365)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neural\_network/MLPRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L400)
