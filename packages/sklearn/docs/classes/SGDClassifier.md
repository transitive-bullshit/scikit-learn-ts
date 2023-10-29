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
new SGDClassifier(opts?: object): SGDClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the regularization term. The higher the value, the stronger the regularization. Also used to compute the learning rate when `learning\_rate` is set to ‘optimal’. Values must be in the range `\[0.0, inf)`.  `Default Value`  `0.0001` |
| `opts.average?` | `number` \| `boolean` | When set to `true`, computes the averaged SGD weights across all updates and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches `average`. So `average=10` will begin averaging after seeing 10 samples. Integer values must be in the range `\[1, n\_samples\]`.  `Default Value`  `false` |
| `opts.class_weight?` | `any` | Preset for the class\_weight fit parameter.  Weights associated with classes. If not given, all classes are supposed to have weight one.  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. |
| `opts.early_stopping?` | `boolean` | Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score returned by the `score` method is not improving by at least tol for n\_iter\_no\_change consecutive epochs.  `Default Value`  `false` |
| `opts.epsilon?` | `number` | Epsilon in the epsilon-insensitive loss functions; only if `loss` is ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’. For ‘huber’, determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold. Values must be in the range `\[0.0, inf)`.  `Default Value`  `0.1` |
| `opts.eta0?` | `number` | The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’. Values must be in the range `(0.0, inf)`.  `Default Value`  `0` |
| `opts.fit_intercept?` | `boolean` | Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.  `Default Value`  `true` |
| `opts.l1_ratio?` | `number` | The Elastic Net mixing parameter, with 0 <= l1\_ratio <= 1. l1\_ratio=0 corresponds to L2 penalty, l1\_ratio=1 to L1. Only used if `penalty` is ‘elasticnet’. Values must be in the range `\[0.0, 1.0\]`.  `Default Value`  `0.15` |
| `opts.learning_rate?` | `string` | The learning rate schedule:  `Default Value`  `'optimal'` |
| `opts.loss?` | `"log_loss"` \| `"squared_error"` \| `"huber"` \| `"hinge"` \| `"modified_huber"` \| `"squared_hinge"` \| `"perceptron"` \| `"epsilon_insensitive"` \| `"squared_epsilon_insensitive"` | The loss function to be used.  `Default Value`  `'hinge'` |
| `opts.max_iter?` | `number` | The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.SGDClassifier.partial_fit "sklearn.linear_model.SGDClassifier.partial_fit") method. Values must be in the range `\[1, inf)`.  `Default Value`  `1000` |
| `opts.n_iter_no_change?` | `number` | Number of iterations with no improvement to wait before stopping fitting. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter. Integer values must be in the range `\[1, max\_iter)`.  `Default Value`  `5` |
| `opts.n_jobs?` | `number` | The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.penalty?` | `"l1"` \| `"l2"` \| `"elasticnet"` | The penalty (aka regularization term) to be used. Defaults to ‘l2’ which is the standard regularizer for linear SVM models. ‘l1’ and ‘elasticnet’ might bring sparsity to the model (feature selection) not achievable with ‘l2’. No penalty is added when set to `undefined`.  `Default Value`  `'l2'` |
| `opts.power_t?` | `number` | The exponent for inverse scaling learning rate \[default 0.5\]. Values must be in the range `(-inf, inf)`.  `Default Value`  `0.5` |
| `opts.random_state?` | `number` | Used for shuffling the data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Integer values must be in the range `\[0, 2\*\*32 \- 1\]`. |
| `opts.shuffle?` | `boolean` | Whether or not the training data should be shuffled after each epoch.  `Default Value`  `true` |
| `opts.tol?` | `number` | The stopping criterion. If it is not `undefined`, training will stop when (loss > best\_loss - tol) for `n\_iter\_no\_change` consecutive epochs. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter. Values must be in the range `\[0.0, inf)`.  `Default Value`  `0.001` |
| `opts.validation_fraction?` | `number` | The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if `early\_stopping` is `true`. Values must be in the range `(0.0, 1.0)`.  `Default Value`  `0.1` |
| `opts.verbose?` | `number` | The verbosity level. Values must be in the range `\[0, inf)`.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).  Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.  `Default Value`  `false` |

### Returns

[`SGDClassifier`](SGDClassifier.md)

Defined in:  [generated/linear\_model/SGDClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L29)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the confidence scores. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L286)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L323)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L267)

### fit()

Fit linear model with Stochastic Gradient Descent.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. |
| `opts.coef_init?` | [`ArrayLike`](../types/ArrayLike.md)[] | The initial coefficients to warm-start the optimization. |
| `opts.intercept_init?` | [`ArrayLike`](../types/ArrayLike.md) | The initial intercept to warm-start the optimization. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L349)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/linear\_model/SGDClassifier.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L412)

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

Defined in:  [generated/linear\_model/SGDClassifier.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L203)

### partial\_fit()

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Subset of the training data. |
| `opts.classes?` | [`ArrayLike`](../types/ArrayLike.md) | Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples. If not provided, uniform weights are assumed. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Subset of the target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L449)

### predict()

Predict class labels for samples in X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the predictions. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L501)

### predict\_log\_proba()

Log of probability estimates.

This method is only available for log loss and modified Huber loss.

When loss=”modified\_huber”, probability estimates may be hard zeros and ones, so taking the logarithm is not possible.

See `predict\_proba` for details.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data for prediction. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L540)

### predict\_proba()

Probability estimates.

This method is only available for log loss and modified Huber loss.

Multiclass probability estimates are derived from binary (one-vs.-rest) estimates by simple normalization, as recommended by Zadrozny and Elkan.

Binary probability estimates for loss=”modified\_huber” are given by (clip(decision\_function(X), -1, 1) + 1) / 2. For other loss functions it is necessary to perform proper probability calibration by wrapping the classifier with [`CalibratedClassifierCV`](sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV "sklearn.calibration.CalibratedClassifierCV") instead.

#### Signature

```ts
predict_proba(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Input data for prediction. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L581)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L616)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.coef_init?` | `string` \| `boolean` | Metadata routing for `coef\_init` parameter in `fit`. |
| `opts.intercept_init?` | `string` \| `boolean` | Metadata routing for `intercept\_init` parameter in `fit`. |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:667](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L667)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:716](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L716)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/linear\_model/SGDClassifier.ts:760](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L760)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:799](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L799)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/SGDClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L25)

### id

> `string`

Defined in:  [generated/linear\_model/SGDClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L22)

### opts

> `any`

Defined in:  [generated/linear\_model/SGDClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L23)

## Accessors

### classes\_

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:915](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L915)

Defined in:  [generated/linear\_model/SGDClassifier.ts:915](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L915)

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:825](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L825)

Defined in:  [generated/linear\_model/SGDClassifier.ts:825](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L825)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:988](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L988)

Defined in:  [generated/linear\_model/SGDClassifier.ts:988](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L988)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:848](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L848)

Defined in:  [generated/linear\_model/SGDClassifier.ts:848](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L848)

### loss\_function\_

#### Signature

```ts
loss_function_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:893](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L893)

Defined in:  [generated/linear\_model/SGDClassifier.ts:893](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L893)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:963](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L963)

Defined in:  [generated/linear\_model/SGDClassifier.ts:963](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L963)

### n\_iter\_

The actual number of iterations before reaching the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:873](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L873)

Defined in:  [generated/linear\_model/SGDClassifier.ts:873](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L873)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/SGDClassifier.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L190)

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

Defined in:  [generated/linear\_model/SGDClassifier.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L194)

Defined in:  [generated/linear\_model/SGDClassifier.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L190) [generated/linear\_model/SGDClassifier.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L194)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDClassifier.ts:940](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L940)

Defined in:  [generated/linear\_model/SGDClassifier.ts:940](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L940)
