# Class: MLPClassifier

Multi-layer Perceptron classifier.

This model optimizes the log-loss function using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html)

## Constructors

### new MLPClassifier()

> **new MLPClassifier**(`opts`?): [`MLPClassifier`](MLPClassifier.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.activation`? | `"identity"` \| `"logistic"` \| `"tanh"` \| `"relu"` | Activation function for the hidden layer. |
| `opts.alpha`? | `number` | Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss. For an example usage and visualization of varying regularization, see [Varying regularization in Multi-layer Perceptron](https://scikit-learn.org/stable/modules/generated/../../auto_examples/neural_networks/plot_mlp_alpha.html#sphx-glr-auto-examples-neural-networks-plot-mlp-alpha-py). |
| `opts.batch_size`? | `number` | Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the classifier will not use minibatch. When set to “auto”, `batch_size=min(200, n_samples)`. |
| `opts.beta_1`? | `number` | Exponential decay rate for estimates of first moment vector in adam, should be in \[0, 1). Only used when solver=’adam’. |
| `opts.beta_2`? | `number` | Exponential decay rate for estimates of second moment vector in adam, should be in \[0, 1). Only used when solver=’adam’. |
| `opts.early_stopping`? | `boolean` | Whether to use early stopping to terminate training when validation score is not improving. If set to true, it will automatically set aside 10% of training data as validation and terminate training when validation score is not improving by at least `tol` for `n_iter_no_change` consecutive epochs. The split is stratified, except in a multilabel setting. If early stopping is `false`, then the training stops when the training loss does not improve by more than tol for n_iter_no_change consecutive passes over the training set. Only effective when solver=’sgd’ or ‘adam’. |
| `opts.epsilon`? | `number` | Value for numerical stability in adam. Only used when solver=’adam’. |
| `opts.hidden_layer_sizes`? | `any` | The ith element represents the number of neurons in the ith hidden layer. |
| `opts.learning_rate`? | `"constant"` \| `"invscaling"` \| `"adaptive"` | Learning rate schedule for weight updates. |
| `opts.learning_rate_init`? | `number` | The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=’sgd’ or ‘adam’. |
| `opts.max_fun`? | `number` | Only used when solver=’lbfgs’. Maximum number of loss function calls. The solver iterates until convergence (determined by ‘tol’), number of iterations reaches max_iter, or this number of loss function calls. Note that number of loss function calls will be greater than or equal to the number of iterations for the `MLPClassifier`. |
| `opts.max_iter`? | `number` | Maximum number of iterations. The solver iterates until convergence (determined by ‘tol’) or this number of iterations. For stochastic solvers (‘sgd’, ‘adam’), note that this determines the number of epochs (how many times each data point will be used), not the number of gradient steps. |
| `opts.momentum`? | `number` | Momentum for gradient descent update. Should be between 0 and 1. Only used when solver=’sgd’. |
| `opts.n_iter_no_change`? | `number` | Maximum number of epochs to not meet `tol` improvement. Only effective when solver=’sgd’ or ‘adam’. |
| `opts.nesterovs_momentum`? | `boolean` | Whether to use Nesterov’s momentum. Only used when solver=’sgd’ and momentum > 0. |
| `opts.power_t`? | `number` | The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning_rate is set to ‘invscaling’. Only used when solver=’sgd’. |
| `opts.random_state`? | `number` | Determines random number generation for weights and bias initialization, train-test split if early stopping is used, and batch sampling when solver=’sgd’ or ‘adam’. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.shuffle`? | `boolean` | Whether to shuffle samples in each iteration. Only used when solver=’sgd’ or ‘adam’. |
| `opts.solver`? | `"lbfgs"` \| `"sgd"` \| `"adam"` | The solver for weight optimization. |
| `opts.tol`? | `number` | Tolerance for the optimization. When the loss or score is not improving by at least `tol` for `n_iter_no_change` consecutive iterations, unless `learning_rate` is set to ‘adaptive’, convergence is considered to be reached and training stops. |
| `opts.validation_fraction`? | `number` | The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is `true`. |
| `opts.verbose`? | `boolean` | Whether to print progress messages to stdout. |
| `opts.warm_start`? | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start). |

#### Returns

[`MLPClassifier`](MLPClassifier.md)

#### Defined in

[generated/neural\_network/MLPClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/neural\_network/MLPClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/neural\_network/MLPClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/neural\_network/MLPClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L19) |
| `id` | `string` | `undefined` | [generated/neural\_network/MLPClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L16) |
| `opts` | `any` | `undefined` | [generated/neural\_network/MLPClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L17) |

## Accessors

### best\_loss\_

#### Get Signature

> **get** **best\_loss\_**(): `Promise`\<`number`\>

The minimum loss reached by the solver throughout fitting. If `early_stopping=True`, this attribute is set to `undefined`. Refer to the `best_validation_score_` fitted attribute instead.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L637)

***

### best\_validation\_score\_

#### Get Signature

> **get** **best\_validation\_score\_**(): `Promise`\<`number`\>

The best validation score (i.e. accuracy score) that triggered the early stopping. Only available if `early_stopping=True`, otherwise the attribute is set to `undefined`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L712)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Class labels for each output.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L589)

***

### coefs\_

#### Get Signature

> **get** **coefs\_**(): `Promise`\<`any`[]\>

The ith element in the list represents the weight matrix corresponding to layer i.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:760](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L760)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:833](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L833)

***

### intercepts\_

#### Get Signature

> **get** **intercepts\_**(): `Promise`\<`any`[]\>

The ith element in the list represents the bias vector corresponding to layer i + 1.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:783](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L783)

***

### loss\_

#### Get Signature

> **get** **loss\_**(): `Promise`\<`number`\>

The current loss computed with the loss function.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L614)

***

### loss\_curve\_

#### Get Signature

> **get** **loss\_curve\_**(): `Promise`\<`any`[]\>

The ith element in the list represents the loss at the ith iteration.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L662)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:808](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L808)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The number of iterations the solver has run.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:858](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L858)

***

### n\_layers\_

#### Get Signature

> **get** **n\_layers\_**(): `Promise`\<`number`\>

Number of layers.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:881](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L881)

***

### n\_outputs\_

#### Get Signature

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

Number of outputs.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:906](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L906)

***

### out\_activation\_

#### Get Signature

> **get** **out\_activation\_**(): `Promise`\<`string`\>

Name of the output activation function.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:931](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L931)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/neural\_network/MLPClassifier.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L187)

***

### t\_

#### Get Signature

> **get** **t\_**(): `Promise`\<`number`\>

The number of training samples seen by the solver during fitting.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L737)

***

### validation\_scores\_

#### Get Signature

> **get** **validation\_scores\_**(): `Promise`\<`any`[]\>

The score at each iteration on a held-out validation set. The score reported is the accuracy score. Only available if `early_stopping=True`, otherwise the attribute is set to `undefined`.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L687)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L239)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model to data matrix X and target(s) y.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The input data. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L256)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L295)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L200)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Update the model with a single iteration over the given data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.classes`? | `any`[] | Classes across all calls to partial_fit. Can be obtained via `np.unique(y_all)`, where y_all is the target vector of the entire dataset. This argument is required for the first call to partial_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The input data. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L329)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict using the multi-layer perceptron classifier.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L371)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return the log of probability estimates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L403)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Probability estimates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L437)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Test samples. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L471)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial_fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.classes`? | `string` \| `boolean` | Metadata routing for `classes` parameter in `partial_fit`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L517)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neural\_network/MLPClassifier.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L555)
