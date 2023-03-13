# ARDRegression

Bayesian ARD regression.

Fit the weights of a regression model, using an ARD prior. The weights of the regression model are assumed to be in Gaussian distributions. Also estimate the parameters lambda (precisions of the distributions of the weights) and alpha (precision of the distribution of the noise). The estimation is done by an iterative procedures (Evidence Maximization)

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ARDRegression.html)

## Constructors

## constructor()

### Signature

```ts
new ARDRegression(opts?: object): ARDRegression;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha_1?` | `number` | Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.  `Default Value`  `0.000001` |
| `opts.alpha_2?` | `number` | Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.  `Default Value`  `0.000001` |
| `opts.compute_score?` | `boolean` | If `true`, compute the objective function at each step of the model.  `Default Value`  `false` |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.lambda_1?` | `number` | Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.  `Default Value`  `0.000001` |
| `opts.lambda_2?` | `number` | Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.  `Default Value`  `0.000001` |
| `opts.n_iter?` | `number` | Maximum number of iterations.  `Default Value`  `300` |
| `opts.threshold_lambda?` | `number` | Threshold for removing (pruning) weights with high precision from the computation.  `Default Value`  `10` |
| `opts.tol?` | `number` | Stop the algorithm if w has converged.  `Default Value`  `0.001` |
| `opts.verbose?` | `boolean` | Verbose mode when fitting the model.  `Default Value`  `false` |

### Returns

[`ARDRegression`](ARDRegression.md)

Defined in:  [generated/linear\_model/ARDRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/ARDRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/ARDRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/ARDRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/ARDRegression.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/ARDRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L19)

## Accessors

### X\_offset\_

If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.

#### Signature

```ts
X_offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L462)

### X\_scale\_

Set to np.ones(n\_features).

#### Signature

```ts
X_scale_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L487)

### alpha\_

estimated precision of the noise.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L345)

### coef\_

Coefficients of the regression model (mean of distribution)

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ARDRegression.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L322)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ARDRegression.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L537)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L437)

### lambda\_

estimated precisions of the weights.

#### Signature

```ts
lambda_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ARDRegression.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L368)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L512)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/ARDRegression.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L107)

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

Defined in: [generated/linear\_model/ARDRegression.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L111)

### scores\_

if computed, value of the objective function (to be maximized)

#### Signature

```ts
scores_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L414)

### sigma\_

estimated variance-covariance matrix of the weights

#### Signature

```ts
sigma_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/ARDRegression.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L391)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L170)

### fit()

Fit the model according to the given training data and parameters.

Iterative procedure to maximize the evidence

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `ArrayLike` | Target values (integers). Will be cast to X’s dtype if necessary. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/ARDRegression.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L189)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L120)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L231)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L275)
