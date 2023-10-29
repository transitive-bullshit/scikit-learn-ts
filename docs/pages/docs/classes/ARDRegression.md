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
| `opts.max_iter?` | `number` | Maximum number of iterations. If `undefined`, it corresponds to `max\_iter=300`. |
| `opts.n_iter?` | `number` | Maximum number of iterations. |
| `opts.threshold_lambda?` | `number` | Threshold for removing (pruning) weights with high precision from the computation.  `Default Value`  `10` |
| `opts.tol?` | `number` | Stop the algorithm if w has converged.  `Default Value`  `0.001` |
| `opts.verbose?` | `boolean` | Verbose mode when fitting the model.  `Default Value`  `false` |

### Returns

[`ARDRegression`](ARDRegression.md)

Defined in:  [generated/linear\_model/ARDRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L25)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L175)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L194)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L236)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L123)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L273)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L317)

### set\_predict\_request()

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_predict_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.return_std?` | `string` \| `boolean` | Metadata routing for `return\_std` parameter in `predict`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/ARDRegression.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L368)

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

Defined in:  [generated/linear\_model/ARDRegression.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L407)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/ARDRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/ARDRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/ARDRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/ARDRegression.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/ARDRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L19)

## Accessors

### X\_offset\_

If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.

#### Signature

```ts
X_offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L605)

### X\_scale\_

Set to np.ones(n\_features).

#### Signature

```ts
X_scale_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:630](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L630)

### alpha\_

estimated precision of the noise.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L465)

### coef\_

Coefficients of the regression model (mean of distribution)

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ARDRegression.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L442)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ARDRegression.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L680)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L580)

### lambda\_

estimated precisions of the weights.

#### Signature

```ts
lambda_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ARDRegression.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L488)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L655)

### n\_iter\_

The actual number of iterations to reach the stopping criterion.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L557)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/ARDRegression.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L110)

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

Defined in: [generated/linear\_model/ARDRegression.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L114)

### scores\_

if computed, value of the objective function (to be maximized)

#### Signature

```ts
scores_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ARDRegression.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L534)

### sigma\_

estimated variance-covariance matrix of the weights

#### Signature

```ts
sigma_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/ARDRegression.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L511)
