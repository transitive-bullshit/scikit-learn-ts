# MLPClassifier

Multi-layer Perceptron classifier.

This model optimizes the log-loss function using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new MLPClassifier(opts?: object): MLPClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.activation?` | `"identity"` \| `"logistic"` \| `"tanh"` \| `"relu"` | Activation function for the hidden layer.  `Default Value`  `'relu'` |
| `opts.alpha?` | `number` | Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss.  `Default Value`  `0.0001` |
| `opts.batch_size?` | `number` | Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the classifier will not use minibatch. When set to “auto”, `batch\_size=min(200, n\_samples)`.  `Default Value`  `'auto'` |
| `opts.beta_1?` | `number` | Exponential decay rate for estimates of first moment vector in adam, should be in \0, 1). Only used when solver=’adam’.  `Default Value`  `0.9` |
| `opts.beta_2?` | `number` | Exponential decay rate for estimates of second moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.  `Default Value`  `0.999` |
| `opts.early_stopping?` | `boolean` | Whether to use early stopping to terminate training when validation score is not improving. If set to true, it will automatically set aside 10% of training data as validation and terminate training when validation score is not improving by at least tol for `n\_iter\_no\_change` consecutive epochs. The split is stratified, except in a multilabel setting. If early stopping is `false`, then the training stops when the training loss does not improve by more than tol for n\_iter\_no\_change consecutive passes over the training set. Only effective when solver=’sgd’ or ‘adam’.  `Default Value`  `false` |
| `opts.epsilon?` | `number` | Value for numerical stability in adam. Only used when solver=’adam’.  `Default Value`  `1e-8` |
| `opts.hidden_layer_sizes?` | `any` | The ith element represents the number of neurons in the ith hidden layer. |
| `opts.learning_rate?` | `"constant"` \| `"invscaling"` \| `"adaptive"` | Learning rate schedule for weight updates.  `Default Value`  `'constant'` |
| `opts.learning_rate_init?` | `number` | The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=’sgd’ or ‘adam’.  `Default Value`  `0.001` |
| `opts.max_fun?` | `number` | Only used when solver=’lbfgs’. Maximum number of loss function calls. The solver iterates until convergence (determined by ‘tol’), number of iterations reaches max\_iter, or this number of loss function calls. Note that number of loss function calls will be greater than or equal to the number of iterations for the `MLPClassifier`.  `Default Value`  `15000` |
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

[`MLPClassifier`](MLPClassifier.md)

Defined in:  [generated/neural\_network/MLPClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L23)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L268)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L285)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L327)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L198)

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
| `opts.classes?` | `any`[] | Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`. |
| `opts.y?` | `ArrayLike` | The target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L362)

### predict()

Predict using the multi-layer perceptron classifier.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L409)

### predict\_log\_proba()

Return the log of probability estimates.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L442)

### predict\_proba()

Probability estimates.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/MLPClassifier.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L477)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L512)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L563)

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

Defined in:  [generated/neural\_network/MLPClassifier.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L602)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neural\_network/MLPClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neural\_network/MLPClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/neural\_network/MLPClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/neural\_network/MLPClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L17)

## Accessors

### best\_loss\_

The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set to `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead.

#### Signature

```ts
best_loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L685)

### best\_validation\_score\_

The best validation score (i.e. accuracy score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.

#### Signature

```ts
best_validation_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:760](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L760)

### classes\_

Class labels for each output.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L637)

### coefs\_

The ith element in the list represents the weight matrix corresponding to layer i.

#### Signature

```ts
coefs_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:808](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L808)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:881](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L881)

### intercepts\_

The ith element in the list represents the bias vector corresponding to layer i + 1.

#### Signature

```ts
intercepts_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:831](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L831)

### loss\_

The current loss computed with the loss function.

#### Signature

```ts
loss_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L662)

### loss\_curve\_

The ith element in the list represents the loss at the ith iteration.

#### Signature

```ts
loss_curve_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L710)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:856](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L856)

### n\_iter\_

The number of iterations the solver has run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:906](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L906)

### n\_layers\_

Number of layers.

#### Signature

```ts
n_layers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:929](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L929)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:954](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L954)

### out\_activation\_

Name of the output activation function.

#### Signature

```ts
out_activation_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:979](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L979)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neural\_network/MLPClassifier.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L185)

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

Defined in: [generated/neural\_network/MLPClassifier.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L189)

### t\_

The number of training samples seen by the solver during fitting.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/MLPClassifier.ts:785](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L785)

### validation\_scores\_

The score at each iteration on a held-out validation set. The score reported is the accuracy score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.

#### Signature

```ts
validation_scores_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neural\_network/MLPClassifier.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L735)
