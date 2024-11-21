# Class: SGDClassifier

Linear classifiers (SVM, logistic regression, etc.) with SGD training.

This estimator implements regularized linear models with stochastic gradient descent (SGD) learning: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate). SGD allows minibatch (online/out-of-core) learning via the `partial_fit` method. For best results using the default learning rate schedule, the data should have zero mean and unit variance.

This implementation works with data represented as dense or sparse arrays of floating point values for the features. The model it fits can be controlled with the loss parameter; by default, it fits a linear support vector machine (SVM).

The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../sgd.html#sgd).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html)

## Constructors

### new SGDClassifier()

> **new SGDClassifier**(`opts`?): [`SGDClassifier`](SGDClassifier.md)

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

`opts.alpha`?

</td>
<td>

`number`

</td>
<td>

Constant that multiplies the regularization term. The higher the value, the stronger the regularization. Also used to compute the learning rate when `learning_rate` is set to ‘optimal’. Values must be in the range `\[0.0, inf)`.

</td>
</tr>
<tr>
<td>

`opts.average`?

</td>
<td>

`number` \| `boolean`

</td>
<td>

When set to `true`, computes the averaged SGD weights across all updates and stores the result in the `coef_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches `average`. So `average=10` will begin averaging after seeing 10 samples. Integer values must be in the range `\[1, n_samples\]`.

</td>
</tr>
<tr>
<td>

`opts.class_weight`?

</td>
<td>

`any`

</td>
<td>

Preset for the class_weight fit parameter.

Weights associated with classes. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n_samples / (n_classes \* np.bincount(y))`.

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

Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score returned by the `score` method is not improving by at least tol for n_iter_no_change consecutive epochs.

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

Epsilon in the epsilon-insensitive loss functions; only if `loss` is ‘huber’, ‘epsilon_insensitive’, or ‘squared_epsilon_insensitive’. For ‘huber’, determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold. Values must be in the range `\[0.0, inf)`.

</td>
</tr>
<tr>
<td>

`opts.eta0`?

</td>
<td>

`number`

</td>
<td>

The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’. Values must be in the range `\[0.0, inf)`.

</td>
</tr>
<tr>
<td>

`opts.fit_intercept`?

</td>
<td>

`boolean`

</td>
<td>

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

</td>
</tr>
<tr>
<td>

`opts.l1_ratio`?

</td>
<td>

`number`

</td>
<td>

The Elastic Net mixing parameter, with 0 <= l1_ratio <= 1. l1_ratio=0 corresponds to L2 penalty, l1_ratio=1 to L1. Only used if `penalty` is ‘elasticnet’. Values must be in the range `\[0.0, 1.0\]`.

</td>
</tr>
<tr>
<td>

`opts.learning_rate`?

</td>
<td>

`string`

</td>
<td>

The learning rate schedule:

</td>
</tr>
<tr>
<td>

`opts.loss`?

</td>
<td>

`"log_loss"` \| `"squared_error"` \| `"huber"` \| `"hinge"` \| `"modified_huber"` \| `"squared_hinge"` \| `"perceptron"` \| `"epsilon_insensitive"` \| `"squared_epsilon_insensitive"`

</td>
<td>

The loss function to be used.

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

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial_fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.linear_model.SGDClassifier.partial_fit "sklearn.linear_model.SGDClassifier.partial_fit") method. Values must be in the range `\[1, inf)`.

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

Number of iterations with no improvement to wait before stopping fitting. Convergence is checked against the training loss or the validation loss depending on the `early_stopping` parameter. Integer values must be in the range `\[1, max_iter)`.

</td>
</tr>
<tr>
<td>

`opts.n_jobs`?

</td>
<td>

`number`

</td>
<td>

The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.penalty`?

</td>
<td>

`"l1"` \| `"l2"` \| `"elasticnet"`

</td>
<td>

The penalty (aka regularization term) to be used. Defaults to ‘l2’ which is the standard regularizer for linear SVM models. ‘l1’ and ‘elasticnet’ might bring sparsity to the model (feature selection) not achievable with ‘l2’. No penalty is added when set to `undefined`.

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

The exponent for inverse scaling learning rate. Values must be in the range `(-inf, inf)`.

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

Used for shuffling the data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). Integer values must be in the range `\[0, 2\*\*32 \- 1\]`.

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

Whether or not the training data should be shuffled after each epoch.

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

The stopping criterion. If it is not `undefined`, training will stop when (loss > best_loss - tol) for `n_iter_no_change` consecutive epochs. Convergence is checked against the training loss or the validation loss depending on the `early_stopping` parameter. Values must be in the range `\[0.0, inf)`.

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

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if `early_stopping` is `true`. Values must be in the range `(0.0, 1.0)`.

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`number`

</td>
<td>

The verbosity level. Values must be in the range `\[0, inf)`.

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

Repeatedly calling fit or partial_fit when warm_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial_fit` will result in increasing the existing counter.

</td>
</tr>
</tbody>
</table>

**Returns** [`SGDClassifier`](SGDClassifier.md)

**Defined in** [generated/linear\_model/SGDClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/linear\_model/SGDClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/linear\_model/SGDClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/linear\_model/SGDClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L25) |
| `id` | `string` | `undefined` | [generated/linear\_model/SGDClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L22) |
| `opts` | `any` | `undefined` | [generated/linear\_model/SGDClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L23) |

## Accessors

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`any`[]\>

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:864](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L864)

***

### coef\_

**Get Signature**

> **get** **coef\_**(): `Promise`\<`ArrayLike`[][]\>

Weights assigned to the features.

**Returns** `Promise`\<`ArrayLike`[][]\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:771](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L771)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:937](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L937)

***

### intercept\_

**Get Signature**

> **get** **intercept\_**(): `Promise`\<`ArrayLike`[]\>

Constants in decision function.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:794](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L794)

***

### loss\_function\_

**Get Signature**

> **get** **loss\_function\_**(): `Promise`\<`any`\>

Deprecated since version 1.4: Attribute `loss_function_` was deprecated in version 1.4 and will be removed in 1.6.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:842](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L842)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:912](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L912)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The actual number of iterations before reaching the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:819](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L819)

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

**Defined in** [generated/linear\_model/SGDClassifier.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L190)

***

### t\_

**Get Signature**

> **get** **t\_**(): `Promise`\<`number`\>

Number of weight updates performed during training. Same as `(n_iter_ \* n_samples + 1)`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:889](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L889)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

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

The data matrix for which we want to get the confidence scores.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L261)

***

### densify()

> **densify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef_` member (back) to a numpy.ndarray. This is the default format of `coef_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

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

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L297)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L242)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit linear model with Stochastic Gradient Descent.

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

`opts.coef_init`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

The initial coefficients to warm-start the optimization.

</td>
</tr>
<tr>
<td>

`opts.intercept_init`?

</td>
<td>

`ArrayLike`

</td>
<td>

The initial intercept to warm-start the optimization.

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

Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class_weight (passed through the constructor) if class_weight is specified.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Training data.

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

Target values.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L323)

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

**Defined in** [generated/linear\_model/SGDClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L377)

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

**Defined in** [generated/linear\_model/SGDClassifier.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L203)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.

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

`opts.classes`?

</td>
<td>

`ArrayLike`

</td>
<td>

Classes across all calls to partial_fit. Can be obtained by via `np.unique(y_all)`, where y_all is the target vector of the entire dataset. This argument is required for the first call to partial_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

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

Weights applied to individual samples. If not provided, uniform weights are assumed.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Subset of the training data.

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

Subset of the target values.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L413)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class labels for samples in X.

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

The data matrix for which we want to get the predictions.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L460)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`\>

Log of probability estimates.

This method is only available for log loss and modified Huber loss.

When loss=”modified_huber”, probability estimates may be hard zeros and ones, so taking the logarithm is not possible.

See `predict_proba` for details.

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

Input data for prediction.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L498)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Probability estimates.

This method is only available for log loss and modified Huber loss.

Multiclass probability estimates are derived from binary (one-vs.-rest) estimates by simple normalization, as recommended by Zadrozny and Elkan.

Binary probability estimates for loss=”modified_huber” are given by (clip(decision_function(X), -1, 1) + 1) / 2. For other loss functions it is necessary to perform proper probability calibration by wrapping the classifier with [`CalibratedClassifierCV`](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV "sklearn.calibration.CalibratedClassifierCV") instead.

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

`any`

</td>
<td>

Input data for prediction.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L538)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

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

Test samples.

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

True labels for `X`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L572)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

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

`opts.coef_init`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `coef_init` parameter in `fit`.

</td>
</tr>
<tr>
<td>

`opts.intercept_init`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `intercept_init` parameter in `fit`.

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

Metadata routing for `sample_weight` parameter in `fit`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L618)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial_fit` method.

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

`opts.classes`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `classes` parameter in `partial_fit`.

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

Metadata routing for `sample_weight` parameter in `partial_fit`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L664)

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

**Defined in** [generated/linear\_model/SGDClassifier.ts:707](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L707)

***

### sparsify()

> **sparsify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept_` member is not converted.

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

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDClassifier.ts:745](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L745)
