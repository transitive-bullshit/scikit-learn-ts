# HuberRegressor

L2-regularized linear regression model that is robust to outliers.

The Huber Regressor optimizes the squared loss for the samples where `|(y \- Xw \- c) / sigma| < epsilon` and the absolute loss for the samples where `|(y \- Xw \- c) / sigma| > epsilon`, where the model coefficients `w`, the intercept `c` and the scale `sigma` are parameters to be optimized. The parameter sigma makes sure that if y is scaled up or down by a certain factor, one does not need to rescale epsilon to achieve the same robustness. Note that this does not take into account the fact that the different features of X may be of different scales.

The Huber loss function has the advantage of not being heavily influenced by the outliers while not completely ignoring their effect.

Read more in the [User Guide](../linear_model.html#huber-regression)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.HuberRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new HuberRegressor(opts?: object): HuberRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Strength of the squared L2 regularization. Note that the penalty is equal to `alpha \* \|\|w\|\|^2`. Must be in the range `\[0, inf)`.  `Default Value`  `0.0001` |
| `opts.epsilon?` | `number` | The parameter epsilon controls the number of samples that should be classified as outliers. The smaller the epsilon, the more robust it is to outliers. Epsilon must be in the range `\[1, inf)`.  `Default Value`  `1.35` |
| `opts.fit_intercept?` | `boolean` | Whether or not to fit the intercept. This can be set to `false` if the data is already centered around the origin.  `Default Value`  `true` |
| `opts.max_iter?` | `number` | Maximum number of iterations that `scipy.optimize.minimize(method="L-BFGS-B")` should run for.  `Default Value`  `100` |
| `opts.tol?` | `number` | The iteration will stop when `max{\|proj g\_i \| i \= 1, ..., n}` <= `tol` where pg\_i is the i-th component of the projected gradient.  `Default Value`  `0.00001` |
| `opts.warm_start?` | `boolean` | This is useful if the stored attributes of a previously used model has to be reused. If set to `false`, then the coefficients will be rewritten for every call to fit. See [the Glossary](../../glossary.html#term-warm_start).  `Default Value`  `false` |

### Returns

[`HuberRegressor`](HuberRegressor.md)

Defined in:  [generated/linear\_model/HuberRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/HuberRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/HuberRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/HuberRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/linear\_model/HuberRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/linear\_model/HuberRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L21)

## Accessors

### coef\_

Features got by optimizing the L2-regularized Huber loss.

#### Signature

```ts
coef_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L277)

Defined in:  [generated/linear\_model/HuberRegressor.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L277)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L373)

Defined in:  [generated/linear\_model/HuberRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L373)

### intercept\_

Bias.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L300)

Defined in:  [generated/linear\_model/HuberRegressor.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L300)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L348)

Defined in:  [generated/linear\_model/HuberRegressor.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L348)

### n\_iter\_

Number of iterations that `scipy.optimize.minimize(method="L-BFGS-B")` has run for.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L398)

Defined in:  [generated/linear\_model/HuberRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L398)

### outliers\_

A boolean mask which is set to `true` where the samples are identified as outliers.

#### Signature

```ts
outliers_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L423)

Defined in:  [generated/linear\_model/HuberRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L423)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/HuberRegressor.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L74)

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

Defined in:  [generated/linear\_model/HuberRegressor.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L78)

Defined in:  [generated/linear\_model/HuberRegressor.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L74) [generated/linear\_model/HuberRegressor.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L78)

### scale\_

The value by which `|y \- Xw \- c|` is scaled down.

#### Signature

```ts
scale_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L325)

Defined in:  [generated/linear\_model/HuberRegressor.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L325)

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

Defined in:  [generated/linear\_model/HuberRegressor.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L133)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weight given to each sample. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target vector relative to X. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L150)

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

Defined in:  [generated/linear\_model/HuberRegressor.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L87)

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
| `opts.X?` | `any` | Samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/HuberRegressor.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L195)

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

Defined in:  [generated/linear\_model/HuberRegressor.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L230)
