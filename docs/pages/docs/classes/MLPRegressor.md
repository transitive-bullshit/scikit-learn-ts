# Class: MLPRegressor

Multi-layer Perceptron regressor.

This model optimizes the squared error using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html)

## Constructors

### new MLPRegressor()

> **new MLPRegressor**(`opts`?): [`MLPRegressor`](MLPRegressor.md)

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.activation`?

</td>
<td>

`"identity"` \| `"logistic"` \| `"tanh"` \| `"relu"`

</td>
<td>

Activation function for the hidden layer.

</td>
</tr>
<tr>
<td>

`opts.alpha`?

</td>
<td>

`number`

</td>
<td>

Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss.

</td>
</tr>
<tr>
<td>

`opts.batch_size`?

</td>
<td>

`number`

</td>
<td>

Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the regressor will not use minibatch. When set to “auto”, `batch_size=min(200, n_samples)`.

</td>
</tr>
<tr>
<td>

`opts.beta_1`?

</td>
<td>

`number`

</td>
<td>

Exponential decay rate for estimates of first moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

</td>
</tr>
<tr>
<td>

`opts.beta_2`?

</td>
<td>

`number`

</td>
<td>

Exponential decay rate for estimates of second moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

</td>
</tr>
<tr>
<td>

`opts.early_stopping`?

</td>
<td>

`boolean`

</td>
<td>

Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside `validation_fraction` of training data as validation and terminate training when validation score is not improving by at least `tol` for `n_iter_no_change` consecutive epochs. Only effective when solver=’sgd’ or ‘adam’.

</td>
</tr>
<tr>
<td>

`opts.epsilon`?

</td>
<td>

`number`

</td>
<td>

Value for numerical stability in adam. Only used when solver=’adam’.

</td>
</tr>
<tr>
<td>

`opts.hidden_layer_sizes`?

</td>
<td>

`any`

</td>
<td>

The ith element represents the number of neurons in the ith hidden layer.

</td>
</tr>
<tr>
<td>

`opts.learning_rate`?

</td>
<td>

`"constant"` \| `"invscaling"` \| `"adaptive"`

</td>
<td>

Learning rate schedule for weight updates.

</td>
</tr>
<tr>
<td>

`opts.learning_rate_init`?

</td>
<td>

`number`

</td>
<td>

The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=’sgd’ or ‘adam’.

</td>
</tr>
<tr>
<td>

`opts.max_fun`?

</td>
<td>

`number`

</td>
<td>

Only used when solver=’lbfgs’. Maximum number of function calls. The solver iterates until convergence (determined by `tol`), number of iterations reaches max_iter, or this number of function calls. Note that number of function calls will be greater than or equal to the number of iterations for the MLPRegressor.

</td>
</tr>
<tr>
<td>

`opts.max_iter`?

</td>
<td>

`number`

</td>
<td>

Maximum number of iterations. The solver iterates until convergence (determined by ‘tol’) or this number of iterations. For stochastic solvers (‘sgd’, ‘adam’), note that this determines the number of epochs (how many times each data point will be used), not the number of gradient steps.

</td>
</tr>
<tr>
<td>

`opts.momentum`?

</td>
<td>

`number`

</td>
<td>

Momentum for gradient descent update. Should be between 0 and 1. Only used when solver=’sgd’.

</td>
</tr>
<tr>
<td>

`opts.n_iter_no_change`?

</td>
<td>

`number`

</td>
<td>

Maximum number of epochs to not meet `tol` improvement. Only effective when solver=’sgd’ or ‘adam’.

</td>
</tr>
<tr>
<td>

`opts.nesterovs_momentum`?

</td>
<td>

`boolean`

</td>
<td>

Whether to use Nesterov’s momentum. Only used when solver=’sgd’ and momentum > 0.

</td>
</tr>
<tr>
<td>

`opts.power_t`?

</td>
<td>

`number`

</td>
<td>

The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning_rate is set to ‘invscaling’. Only used when solver=’sgd’.

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

Determines random number generation for weights and bias initialization, train-test split if early stopping is used, and batch sampling when solver=’sgd’ or ‘adam’. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.shuffle`?

</td>
<td>

`boolean`

</td>
<td>

Whether to shuffle samples in each iteration. Only used when solver=’sgd’ or ‘adam’.

</td>
</tr>
<tr>
<td>

`opts.solver`?

</td>
<td>

`"lbfgs"` \| `"sgd"` \| `"adam"`

</td>
<td>

The solver for weight optimization.

</td>
</tr>
<tr>
<td>

`opts.tol`?

</td>
<td>

`number`

</td>
<td>

Tolerance for the optimization. When the loss or score is not improving by at least `tol` for `n_iter_no_change` consecutive iterations, unless `learning_rate` is set to ‘adaptive’, convergence is considered to be reached and training stops.

</td>
</tr>
<tr>
<td>

`opts.validation_fraction`?

</td>
<td>

`number`

</td>
<td>

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is `true`.

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`boolean`

</td>
<td>

Whether to print progress messages to stdout.

</td>
</tr>
<tr>
<td>

`opts.warm_start`?

</td>
<td>

`boolean`

</td>
<td>

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start).

</td>
</tr>
</tbody>
</table>

**Returns** [`MLPRegressor`](MLPRegressor.md)

**Defined in** [generated/neural\_network/MLPRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/neural\_network/MLPRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/neural\_network/MLPRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/neural\_network/MLPRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L19) |
| `id` | `string` | `undefined` | [generated/neural\_network/MLPRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L16) |
| `opts` | `any` | `undefined` | [generated/neural\_network/MLPRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L17) |

## Accessors

### best\_loss\_

**Get Signature**

> **get** **best\_loss\_**(): `Promise`\<`number`\>

The minimum loss reached by the solver throughout fitting. If `early_stopping=True`, this attribute is set to `undefined`. Refer to the `best_validation_score_` fitted attribute instead. Only accessible when solver=’sgd’ or ‘adam’.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L501)

***

### best\_validation\_score\_

**Get Signature**

> **get** **best\_validation\_score\_**(): `Promise`\<`number`\>

The best validation score (i.e. R2 score) that triggered the early stopping. Only available if `early_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L576)

***

### coefs\_

**Get Signature**

> **get** **coefs\_**(): `Promise`\<`any`[]\>

The ith element in the list represents the weight matrix corresponding to layer i.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:624](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L624)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L697)

***

### intercepts\_

**Get Signature**

> **get** **intercepts\_**(): `Promise`\<`any`[]\>

The ith element in the list represents the bias vector corresponding to layer i + 1.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:647](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L647)

***

### loss\_

**Get Signature**

> **get** **loss\_**(): `Promise`\<`number`\>

The current loss computed with the loss function.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L478)

***

### loss\_curve\_

**Get Signature**

> **get** **loss\_curve\_**(): `Promise`\<`any`[]\>

Loss value evaluated at the end of each training step. The ith element in the list represents the loss at the ith iteration. Only accessible when solver=’sgd’ or ‘adam’.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L526)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:672](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L672)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The number of iterations the solver has run.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:722](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L722)

***

### n\_layers\_

**Get Signature**

> **get** **n\_layers\_**(): `Promise`\<`number`\>

Number of layers.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:745](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L745)

***

### n\_outputs\_

**Get Signature**

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

Number of outputs.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:770](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L770)

***

### out\_activation\_

**Get Signature**

> **get** **out\_activation\_**(): `Promise`\<`string`\>

Name of the output activation function.

**Returns** `Promise`\<`string`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:795](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L795)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `void`

**Defined in** [generated/neural\_network/MLPRegressor.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L185)

***

### t\_

**Get Signature**

> **get** **t\_**(): `Promise`\<`number`\>

The number of training samples seen by the solver during fitting. Mathematically equals `n_iters \* X.shape\[0\]`, it means `time_step` and it is used by optimizer’s learning rate scheduler.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L601)

***

### validation\_scores\_

**Get Signature**

> **get** **validation\_scores\_**(): `Promise`\<`any`[]\>

The score at each iteration on a held-out validation set. The score reported is the R2 score. Only available if `early_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L551)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L237)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model to data matrix X and target(s) y.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`

</td>
<td>

The input data.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

The target values (class labels in classification, real numbers in regression).

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L254)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L293)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`void`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L198)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Update the model with a single iteration over the given data.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`

</td>
<td>

The input data.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

The target values.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L327)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict using the multi-layer perceptron model.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`

</td>
<td>

The input data.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L364)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

</td>
<td>

Sample weights.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

True values for `X`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`number`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L398)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `sample_weight` parameter in `score`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neural\_network/MLPRegressor.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L444)
