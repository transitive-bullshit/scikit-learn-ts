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
new SGDRegressor(opts?: SGDRegressorOptions): SGDRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SGDRegressorOptions`](../interfaces/SGDRegressorOptions.md) |

### Returns

[`SGDRegressor`](SGDRegressor.md)

Defined in:  [generated/linear\_model/SGDRegressor.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDRegressor.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/SGDRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L25)

### id

> `string`

Defined in:  [generated/linear\_model/SGDRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L22)

### opts

> `any`

Defined in:  [generated/linear\_model/SGDRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L23)

## Accessors

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L312)

Defined in:  [generated/linear\_model/SGDRegressor.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L312)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L431)

Defined in:  [generated/linear\_model/SGDRegressor.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L431)

### intercept\_

The intercept term.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L335)

Defined in:  [generated/linear\_model/SGDRegressor.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L335)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L406)

Defined in:  [generated/linear\_model/SGDRegressor.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L406)

### n\_iter\_

The actual number of iterations before reaching the stopping criterion.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L360)

Defined in:  [generated/linear\_model/SGDRegressor.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L360)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/SGDRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L34)

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

Defined in:  [generated/linear\_model/SGDRegressor.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L38)

Defined in:  [generated/linear\_model/SGDRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L34) [generated/linear\_model/SGDRegressor.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L38)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L383)

Defined in:  [generated/linear\_model/SGDRegressor.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L383)

## Methods

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: SGDRegressorDensifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorDensifyOptions`](../interfaces/SGDRegressorDensifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L126)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L107)

### fit()

Fit linear model with Stochastic Gradient Descent.

#### Signature

```ts
fit(opts: SGDRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorFitOptions`](../interfaces/SGDRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L152)

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

Defined in:  [generated/linear\_model/SGDRegressor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L47)

### partial\_fit()

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence and early stopping should be handled by the user.

#### Signature

```ts
partial_fit(opts: SGDRegressorPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorPartialFitOptions`](../interfaces/SGDRegressorPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L190)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: SGDRegressorPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorPredictOptions`](../interfaces/SGDRegressorPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L220)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: SGDRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorScoreOptions`](../interfaces/SGDRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L250)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: SGDRegressorSparsifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDRegressorSparsifyOptions`](../interfaces/SGDRegressorSparsifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDRegressor.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L286)
