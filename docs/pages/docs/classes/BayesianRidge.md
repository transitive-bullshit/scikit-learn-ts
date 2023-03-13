# BayesianRidge

Bayesian ridge regression.

Fit a Bayesian ridge model. See the Notes section for details on this implementation and the optimization of the regularization parameters lambda (precision of the weights) and alpha (precision of the noise).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.BayesianRidge.html)

## Constructors

## constructor()

### Signature

```ts
new BayesianRidge(opts?: object): BayesianRidge;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha_1?` | `number` | Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.  `Default Value`  `0.000001` |
| `opts.alpha_2?` | `number` | Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.  `Default Value`  `0.000001` |
| `opts.alpha_init?` | `number` | Initial value for alpha (precision of the noise). If not set, alpha\_init is 1/Var(y). |
| `opts.compute_score?` | `boolean` | If `true`, compute the log marginal likelihood at each iteration of the optimization.  `Default Value`  `false` |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. The intercept is not treated as a probabilistic parameter and thus has no associated variance. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.lambda_1?` | `number` | Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.  `Default Value`  `0.000001` |
| `opts.lambda_2?` | `number` | Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.  `Default Value`  `0.000001` |
| `opts.lambda_init?` | `number` | Initial value for lambda (precision of the weights). If not set, lambda\_init is 1. |
| `opts.n_iter?` | `number` | Maximum number of iterations. Should be greater than or equal to 1.  `Default Value`  `300` |
| `opts.tol?` | `number` | Stop the algorithm if w has converged.  `Default Value`  `0.001` |
| `opts.verbose?` | `boolean` | Verbose mode when fitting the model.  `Default Value`  `false` |

### Returns

[`BayesianRidge`](BayesianRidge.md)

Defined in:  [generated/linear\_model/BayesianRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L25)

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

Defined in:  [generated/linear\_model/BayesianRidge.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L175)

### fit()

Fit the model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data. |
| `opts.sample_weight?` | `ArrayLike` | Individual weights for each sample. |
| `opts.y?` | `ArrayLike` | Target values. Will be cast to X’s dtype if necessary. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/BayesianRidge.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L192)

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

Defined in:  [generated/linear\_model/BayesianRidge.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L123)

### predict()

Predict using the linear model.

In addition to the mean of the predictive distribution, also its standard deviation can be returned.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Samples. |
| `opts.return_std?` | `boolean` | Whether to return the standard deviation of posterior prediction.  `Default Value`  `false` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/BayesianRidge.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L241)

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

Defined in:  [generated/linear\_model/BayesianRidge.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L285)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/BayesianRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/BayesianRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/BayesianRidge.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/BayesianRidge.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/BayesianRidge.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L19)

## Accessors

### X\_offset\_

If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.

#### Signature

```ts
X_offset_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L495)

### X\_scale\_

Set to np.ones(n\_features).

#### Signature

```ts
X_scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L520)

### alpha\_

Estimated precision of the noise.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L380)

### coef\_

Coefficients of the regression model (mean of distribution)

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L332)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L570)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L355)

### lambda\_

Estimated precision of the weights.

#### Signature

```ts
lambda_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L403)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L545)

### n\_iter\_

The actual number of iterations to reach the stopping criterion.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L472)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/BayesianRidge.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L110)

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

Defined in: [generated/linear\_model/BayesianRidge.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L114)

### scores\_

If computed\_score is `true`, value of the log marginal likelihood (to be maximized) at each iteration of the optimization. The array starts with the value of the log marginal likelihood obtained for the initial values of alpha and lambda and ends with the value obtained for the estimated alpha and lambda.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/BayesianRidge.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L449)

### sigma\_

Estimated variance-covariance matrix of the weights

#### Signature

```ts
sigma_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/BayesianRidge.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L426)
