# SGDRegressor

Linear model fitted by minimizing a regularized empirical loss with SGD.

SGD stands for Stochastic Gradient Descent: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate).

The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

This implementation works with data represented as dense numpy arrays of floating point values for the features.

Read more in the [User Guide](../sgd.html#sgd).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new SGDRegressor(opts?: object): SGDRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the regularization term. The higher the value, the stronger the regularization. Also used to compute the learning rate when set to `learning\_rate` is set to ‘optimal’.  `Default Value`  `0.0001` |
| `opts.average?` | `number` \| `boolean` | When set to `true`, computes the averaged SGD weights across all updates and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches `average`. So `average=10` will begin averaging after seeing 10 samples.  `Default Value`  `false` |
| `opts.early_stopping?` | `boolean` | Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside a fraction of training data as validation and terminate training when validation score returned by the `score` method is not improving by at least `tol` for `n\_iter\_no\_change` consecutive epochs.  `Default Value`  `false` |
| `opts.epsilon?` | `number` | Epsilon in the epsilon-insensitive loss functions; only if `loss` is ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’. For ‘huber’, determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold.  `Default Value`  `0.1` |
| `opts.eta0?` | `number` | The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.01.  `Default Value`  `0.01` |
| `opts.fit_intercept?` | `boolean` | Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.  `Default Value`  `true` |
| `opts.l1_ratio?` | `number` | The Elastic Net mixing parameter, with 0 <= l1\_ratio <= 1. l1\_ratio=0 corresponds to L2 penalty, l1\_ratio=1 to L1. Only used if `penalty` is ‘elasticnet’.  `Default Value`  `0.15` |
| `opts.learning_rate?` | `string` | The learning rate schedule:  `Default Value`  `'invscaling'` |
| `opts.loss?` | `string` | The loss function to be used. The possible values are ‘squared\_error’, ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’  The ‘squared\_error’ refers to the ordinary least squares fit. ‘huber’ modifies ‘squared\_error’ to focus less on getting outliers correct by switching from squared to linear loss past a distance of epsilon. ‘epsilon\_insensitive’ ignores errors less than epsilon and is linear past that; this is the loss function used in SVR. ‘squared\_epsilon\_insensitive’ is the same but becomes squared loss past a tolerance of epsilon.  More details about the losses formulas can be found in the [User Guide](../sgd.html#sgd-mathematical-formulation).  `Default Value`  `'squared_error'` |
| `opts.max_iter?` | `number` | The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.SGDRegressor.partial_fit "sklearn.linear_model.SGDRegressor.partial_fit") method.  `Default Value`  `1000` |
| `opts.n_iter_no_change?` | `number` | Number of iterations with no improvement to wait before stopping fitting. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter.  `Default Value`  `5` |
| `opts.penalty?` | `"l1"` \| `"l2"` \| `"elasticnet"` | The penalty (aka regularization term) to be used. Defaults to ‘l2’ which is the standard regularizer for linear SVM models. ‘l1’ and ‘elasticnet’ might bring sparsity to the model (feature selection) not achievable with ‘l2’. No penalty is added when set to `undefined`.  `Default Value`  `'l2'` |
| `opts.power_t?` | `number` | The exponent for inverse scaling learning rate.  `Default Value`  `0.25` |
| `opts.random_state?` | `number` | Used for shuffling the data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.shuffle?` | `boolean` | Whether or not the training data should be shuffled after each epoch.  `Default Value`  `true` |
| `opts.tol?` | `number` | The stopping criterion. If it is not `undefined`, training will stop when (loss > best\_loss - tol) for `n\_iter\_no\_change` consecutive epochs. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter.  `Default Value`  `0.001` |
| `opts.validation_fraction?` | `number` | The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if `early\_stopping` is `true`.  `Default Value`  `0.1` |
| `opts.verbose?` | `number` | The verbosity level.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).  Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.  `Default Value`  `false` |

### Returns

[`SGDRegressor`](SGDRegressor.md)

Defined in:  [generated/linear\_model/SGDRegressor.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDRegressor.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/SGDRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L25)

### id

> `string`

Defined in:  [generated/linear\_model/SGDRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L22)

### opts

> `any`

Defined in:  [generated/linear\_model/SGDRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L23)

## Accessors

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L509)

Defined in:  [generated/linear\_model/SGDRegressor.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L509)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L628)

Defined in:  [generated/linear\_model/SGDRegressor.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L628)

### intercept\_

The intercept term.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L532)

Defined in:  [generated/linear\_model/SGDRegressor.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L532)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L603)

Defined in:  [generated/linear\_model/SGDRegressor.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L603)

### n\_iter\_

The actual number of iterations before reaching the stopping criterion.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L557)

Defined in:  [generated/linear\_model/SGDRegressor.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L557)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/SGDRegressor.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L171)

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

Defined in:  [generated/linear\_model/SGDRegressor.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L175)

Defined in:  [generated/linear\_model/SGDRegressor.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L171) [generated/linear\_model/SGDRegressor.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L175)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L580)

Defined in:  [generated/linear\_model/SGDRegressor.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L580)

## Methods

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

Defined in:  [generated/linear\_model/SGDRegressor.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L263)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L244)

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
| `opts.coef_init?` | [`ArrayLike`](../types/ArrayLike.md) | The initial coefficients to warm-start the optimization. |
| `opts.intercept_init?` | [`ArrayLike`](../types/ArrayLike.md) | The initial intercept to warm-start the optimization. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples (1. for unweighted). |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L289)

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

Defined in:  [generated/linear\_model/SGDRegressor.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L184)

### partial\_fit()

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence and early stopping should be handled by the user.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Subset of training data. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples. If not provided, uniform weights are assumed. |
| `opts.y?` | `any`[] | Subset of target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L352)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Input data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L397)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L432)

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

Defined in:  [generated/linear\_model/SGDRegressor.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L483)
