# Lasso

Linear Model trained with L1 prior as regularizer (aka the Lasso).

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html)

## Constructors

## constructor()

### Signature

```ts
new Lasso(opts?: object): Lasso;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the L1 term, controlling regularization strength. `alpha` must be a non-negative float i.e. in `\[0, inf)`.  When `alpha \= 0`, the objective is equivalent to ordinary least squares, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Lasso` object is not advised. Instead, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.  `Default Value`  `1` |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.max_iter?` | `number` | The maximum number of iterations.  `Default Value`  `1000` |
| `opts.positive?` | `boolean` | When set to `true`, forces the coefficients to be positive.  `Default Value`  `false` |
| `opts.precompute?` | `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] | Whether to use a precomputed Gram matrix to speed up calculations. The Gram matrix can also be passed as argument. For sparse input this option is always `false` to preserve sparsity.  `Default Value`  `false` |
| `opts.random_state?` | `number` | The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.selection?` | `"random"` \| `"cyclic"` | If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.  `Default Value`  `'cyclic'` |
| `opts.tol?` | `number` | The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`, see Notes below.  `Default Value`  `0.0001` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).  `Default Value`  `false` |

### Returns

[`Lasso`](Lasso.md)

Defined in:  [generated/linear\_model/Lasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L23)

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

Defined in:  [generated/linear\_model/Lasso.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L160)

### fit()

Fit model with coordinate descent.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you do.  `Default Value`  `true` |
| `opts.sample_weight?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | Sample weights. Internally, the `sample\_weight` vector will be rescaled to sum to `n\_samples`. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target. Will be cast to X’s dtype if necessary. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Lasso.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L177)

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

Defined in:  [generated/linear\_model/Lasso.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L235)

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

Defined in:  [generated/linear\_model/Lasso.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L111)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse. |
| `opts.Xy?` | [`ArrayLike`](../types/ArrayLike.md) | Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed. |
| `opts.alphas?` | [`ArrayLike`](../types/ArrayLike.md) | List of alphas where to compute the models. If `undefined` alphas are set automatically. |
| `opts.check_input?` | `boolean` | If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.  `Default Value`  `true` |
| `opts.coef_init?` | [`ArrayLike`](../types/ArrayLike.md) | The initial values of the coefficients. |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.eps?` | `number` | Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.  `Default Value`  `0.001` |
| `opts.l1_ratio?` | `number` | Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.  `Default Value`  `0.5` |
| `opts.n_alphas?` | `number` | Number of alphas along the regularization path.  `Default Value`  `100` |
| `opts.params?` | `any` | Keyword arguments passed to the coordinate descent solver. |
| `opts.positive?` | `boolean` | If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).  `Default Value`  `false` |
| `opts.precompute?` | `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"` | Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.  `Default Value`  `'auto'` |
| `opts.return_n_iter?` | `boolean` | Whether to return the number of iterations or not.  `Default Value`  `false` |
| `opts.verbose?` | `number` \| `boolean` | Amount of verbosity.  `Default Value`  `false` |
| `opts.y?` | `any` | Target values. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lasso.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L272)

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

Defined in:  [generated/linear\_model/Lasso.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L413)

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

Defined in:  [generated/linear\_model/Lasso.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L446)

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
| `opts.check_input?` | `string` \| `boolean` | Metadata routing for `check\_input` parameter in `fit`. |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Lasso.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L497)

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

Defined in:  [generated/linear\_model/Lasso.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L539)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Lasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Lasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/Lasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/Lasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/Lasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L17)

## Accessors

### coef\_

Parameter vector (w in the cost function formula).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lasso.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L572)

Defined in:  [generated/linear\_model/Lasso.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L572)

### dual\_gap\_

Given param alpha, the dual gaps at the end of the optimization, same shape as each observation of y.

#### Signature

```ts
dual_gap_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lasso.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L594)

Defined in:  [generated/linear\_model/Lasso.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L594)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lasso.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L685)

Defined in:  [generated/linear\_model/Lasso.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L685)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Lasso.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L617)

Defined in:  [generated/linear\_model/Lasso.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L617)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/Lasso.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L662)

Defined in:  [generated/linear\_model/Lasso.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L662)

### n\_iter\_

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/Lasso.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L640)

Defined in:  [generated/linear\_model/Lasso.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L640)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/Lasso.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L98)

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

Defined in:  [generated/linear\_model/Lasso.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L102)

Defined in:  [generated/linear\_model/Lasso.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L98) [generated/linear\_model/Lasso.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/linear_model/Lasso.ts#L102)
