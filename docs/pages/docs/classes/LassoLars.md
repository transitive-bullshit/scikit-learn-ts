# LassoLars

Lasso model fit with Least Angle Regression a.k.a. Lars.

It is a Linear Model trained with an L1 prior as regularizer.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLars.html)

## Constructors

## constructor()

### Signature

```ts
new LassoLars(opts?: object): LassoLars;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the penalty term. Defaults to 1.0. `alpha \= 0` is equivalent to an ordinary least square, solved by [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression"). For numerical reasons, using `alpha \= 0` with the LassoLars object is not advised and you should prefer the LinearRegression object.  `Default Value`  `1` |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.eps?` | `number` | The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization. |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.fit_path?` | `boolean` | If `true` the full path is stored in the `coef\_path\_` attribute. If you compute the solution for a large problem or many targets, setting `fit\_path` to `false` will lead to a speedup, especially with a small alpha.  `Default Value`  `true` |
| `opts.jitter?` | `number` | Upper bound on a uniform noise parameter to be added to the `y` values, to satisfy the model’s assumption of one-at-a-time computations. Might help with stability. |
| `opts.max_iter?` | `number` | Maximum number of iterations to perform.  `Default Value`  `500` |
| `opts.normalize?` | `boolean` | This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.  `Default Value`  `false` |
| `opts.positive?` | `boolean` | Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set `true` by default. Under the positive restriction the model coefficients will not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=`true`) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator.  `Default Value`  `false` |
| `opts.precompute?` | `boolean` \| `ArrayLike` \| `"auto"` | Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Determines random number generation for jittering. Pass an int for reproducible output across multiple function calls. See Glossary. Ignored if `jitter` is `undefined`. |
| `opts.verbose?` | `number` \| `boolean` | Sets the verbosity amount.  `Default Value`  `false` |

### Returns

[`LassoLars`](LassoLars.md)

Defined in:  [generated/linear\_model/LassoLars.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L25)

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

Defined in:  [generated/linear\_model/LassoLars.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L172)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data. |
| `opts.Xy?` | `ArrayLike` | Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LassoLars.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L189)

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

Defined in:  [generated/linear\_model/LassoLars.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L121)

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

Defined in:  [generated/linear\_model/LassoLars.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L236)

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

Defined in:  [generated/linear\_model/LassoLars.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L269)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLars.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LassoLars.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/LassoLars.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/LassoLars.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/LassoLars.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L19)

## Accessors

### active\_

Indices of active variables at the end of the path. If this is a list of list, the length of the outer list is `n\_targets`.

#### Signature

```ts
active_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/LassoLars.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L339)

### alphas\_

Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Signature

```ts
alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/LassoLars.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L316)

### coef\_

Parameter vector (w in the formulation formula).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/LassoLars.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L385)

### coef\_path\_

If a list is passed it’s expected to be one of n\_targets such arrays. The varying values of the coefficients along the path. It is not present if the `fit\_path` parameter is `false`. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Signature

```ts
coef_path_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/LassoLars.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L362)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/LassoLars.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L479)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/linear\_model/LassoLars.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L408)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/LassoLars.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L454)

### n\_iter\_

The number of iterations taken by lars\_path to find the grid of alphas for each target.

#### Signature

```ts
n_iter_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/linear\_model/LassoLars.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L431)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/LassoLars.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L108)

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

Defined in: [generated/linear\_model/LassoLars.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LassoLars.ts#L112)
