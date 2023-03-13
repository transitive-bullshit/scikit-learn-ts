# Lars

Least Angle Regression model a.k.a. LAR.

Read more in the [User Guide](../linear_model.html#least-angle-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lars.html)

## Constructors

## constructor()

### Signature

```ts
new Lars(opts?: object): Lars;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.eps?` | `number` | The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization. |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.fit_path?` | `boolean` | If `true` the full path is stored in the `coef\_path\_` attribute. If you compute the solution for a large problem or many targets, setting `fit\_path` to `false` will lead to a speedup, especially with a small alpha.  `Default Value`  `true` |
| `opts.jitter?` | `number` | Upper bound on a uniform noise parameter to be added to the `y` values, to satisfy the model’s assumption of one-at-a-time computations. Might help with stability. |
| `opts.n_nonzero_coefs?` | `number` | Target number of non-zero coefficients. Use `np.inf` for no limit.  `Default Value`  `500` |
| `opts.normalize?` | `boolean` | This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.  `Default Value`  `false` |
| `opts.precompute?` | `boolean` \| [`ArrayLike`](../types/ArrayLike.md) \| `"auto"` | Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Determines random number generation for jittering. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Ignored if `jitter` is `undefined`. |
| `opts.verbose?` | `number` \| `boolean` | Sets the verbosity amount.  `Default Value`  `false` |

### Returns

[`Lars`](Lars.md)

Defined in:  [generated/linear\_model/Lars.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L23)

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

Defined in:  [generated/linear\_model/Lars.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L154)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. |
| `opts.Xy?` | [`ArrayLike`](../types/ArrayLike.md) | Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Lars.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L171)

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

Defined in:  [generated/linear\_model/Lars.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L105)

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

Defined in:  [generated/linear\_model/Lars.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L217)

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

Defined in:  [generated/linear\_model/Lars.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L250)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Lars.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Lars.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/Lars.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/Lars.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/Lars.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L17)

## Accessors

### active\_

Indices of active variables at the end of the path. If this is a list of list, the length of the outer list is `n\_targets`.

#### Signature

```ts
active_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/linear\_model/Lars.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L319)

Defined in:  [generated/linear\_model/Lars.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L319)

### alphas\_

Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Signature

```ts
alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lars.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L297)

Defined in:  [generated/linear\_model/Lars.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L297)

### coef\_

Parameter vector (w in the formulation formula).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lars.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L364)

Defined in:  [generated/linear\_model/Lars.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L364)

### coef\_path\_

The varying values of the coefficients along the path. It is not present if the `fit\_path` parameter is `false`. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Signature

```ts
coef_path_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/Lars.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L341)

Defined in:  [generated/linear\_model/Lars.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L341)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lars.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L454)

Defined in:  [generated/linear\_model/Lars.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L454)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lars.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L386)

Defined in:  [generated/linear\_model/Lars.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L386)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/Lars.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L431)

Defined in:  [generated/linear\_model/Lars.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L431)

### n\_iter\_

The number of iterations taken by lars\_path to find the grid of alphas for each target.

#### Signature

```ts
n_iter_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lars.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L409)

Defined in:  [generated/linear\_model/Lars.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L409)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/Lars.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L92)

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

Defined in:  [generated/linear\_model/Lars.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L96)

Defined in:  [generated/linear\_model/Lars.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L92) [generated/linear\_model/Lars.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/Lars.ts#L96)
