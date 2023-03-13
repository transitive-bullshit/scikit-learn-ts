# ElasticNetCV

Elastic Net model with iterative fitting along a regularization path.

See glossary entry for cross-validation estimator.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNetCV.html)

## Constructors

## constructor()

### Signature

```ts
new ElasticNetCV(opts?: object): ElasticNetCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alphas?` | `ArrayLike` | List of alphas where to compute the models. If `undefined` alphas are set automatically. |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.eps?` | `number` | Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.  `Default Value`  `0.001` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.l1_ratio?` | `number` | Float between 0 and 1 passed to ElasticNet (scaling between l1 and l2 penalties). For `l1\_ratio \= 0` the penalty is an L2 penalty. For `l1\_ratio \= 1` it is an L1 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1 and L2 This parameter can be a list, in which case the different values are tested by cross-validation and the one giving the best prediction score is used. Note that a good choice of list of values for l1\_ratio is often to put more values close to 1 (i.e. Lasso) and less close to 0 (i.e. Ridge), as in `\[.1, .5, .7, .9, .95, .99, 1\]`.  `Default Value`  `0.5` |
| `opts.max_iter?` | `number` | The maximum number of iterations.  `Default Value`  `1000` |
| `opts.n_alphas?` | `number` | Number of alphas along the regularization path, used for each l1\_ratio.  `Default Value`  `100` |
| `opts.n_jobs?` | `number` | Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.positive?` | `boolean` | When set to `true`, forces the coefficients to be positive.  `Default Value`  `false` |
| `opts.precompute?` | `boolean` \| `ArrayLike`[] \| `"auto"` | Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.selection?` | `"random"` \| `"cyclic"` | If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.  `Default Value`  `'cyclic'` |
| `opts.tol?` | `number` | The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` \| `boolean` | Amount of verbosity.  `Default Value`  `0` |

### Returns

[`ElasticNetCV`](ElasticNetCV.md)

Defined in:  [generated/linear\_model/ElasticNetCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L19)

## Accessors

### alpha\_

The amount of penalization chosen by cross validation.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L487)

### alphas\_

The grid of alphas used for fitting, for each l1\_ratio.

#### Signature

```ts
alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L608)

### coef\_

Parameter vector (w in the cost function formula).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L535)

### dual\_gap\_

The dual gaps at the end of the optimization for the optimal alpha.

#### Signature

```ts
dual_gap_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L631)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L704)

### intercept\_

Independent term in the decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike[]>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`[]\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L558)

### l1\_ratio\_

The compromise between l1 and l2 penalization chosen by cross validation.

#### Signature

```ts
l1_ratio_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L510)

### mse\_path\_

Mean square error for the test set on each fold, varying l1\_ratio and alpha.

#### Signature

```ts
mse_path_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<`ArrayLike`[][]\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L583)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L679)

### n\_iter\_

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/ElasticNetCV.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L656)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L127)

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

Defined in: [generated/linear\_model/ElasticNetCV.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L131)

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

Defined in:  [generated/linear\_model/ElasticNetCV.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L194)

### fit()

Fit linear model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse. |
| `opts.sample_weight?` | `number` \| `ArrayLike` | Sample weights used for fitting and evaluation of the weighted mean squared error of each cv-fold. Note that the cross validated MSE that is finally used to find the best model is the unweighted mean over the (weighted) MSEs of each test fold. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/ElasticNetCV.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L213)

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

Defined in:  [generated/linear\_model/ElasticNetCV.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L140)

### path()

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Signature

```ts
path(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse. |
| `opts.Xy?` | `ArrayLike` | Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed. |
| `opts.alphas?` | `ArrayLike` | List of alphas where to compute the models. If `undefined` alphas are set automatically. |
| `opts.check_input?` | `boolean` | If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.  `Default Value`  `true` |
| `opts.coef_init?` | `ArrayLike` | The initial values of the coefficients. |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.eps?` | `number` | Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.  `Default Value`  `0.001` |
| `opts.l1_ratio?` | `number` | Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.  `Default Value`  `0.5` |
| `opts.n_alphas?` | `number` | Number of alphas along the regularization path.  `Default Value`  `100` |
| `opts.params?` | `any` | Keyword arguments passed to the coordinate descent solver. |
| `opts.positive?` | `boolean` | If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).  `Default Value`  `false` |
| `opts.precompute?` | `boolean` \| `ArrayLike`[] \| `"auto"` | Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.  `Default Value`  `'auto'` |
| `opts.return_n_iter?` | `boolean` | Whether to return the number of iterations or not.  `Default Value`  `false` |
| `opts.verbose?` | `number` \| `boolean` | Amount of verbosity.  `Default Value`  `false` |
| `opts.y?` | `any` | Target values. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/ElasticNetCV.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L264)

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

Defined in:  [generated/linear\_model/ElasticNetCV.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L405)

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

Defined in:  [generated/linear\_model/ElasticNetCV.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L440)
