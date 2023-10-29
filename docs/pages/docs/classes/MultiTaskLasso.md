# MultiTaskLasso

Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLasso.html)

## Constructors

## constructor()

### Signature

```ts
new MultiTaskLasso(opts?: object): MultiTaskLasso;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the L1/L2 term. Defaults to 1.0.  `Default Value`  `1` |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.max_iter?` | `number` | The maximum number of iterations.  `Default Value`  `1000` |
| `opts.random_state?` | `number` | The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.selection?` | `"random"` \| `"cyclic"` | If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.  `Default Value`  `'cyclic'` |
| `opts.tol?` | `number` | The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.  `Default Value`  `0.0001` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See the Glossary.  `Default Value`  `false` |

### Returns

[`MultiTaskLasso`](MultiTaskLasso.md)

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L23)

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L141)

### fit()

Fit MultiTaskElasticNet model with coordinate descent.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Data. |
| `opts.y?` | `ArrayLike`[] | Target. Will be cast to X’s dtype if necessary. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L158)

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L200)

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L95)

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L239)

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L380)

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L415)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L466)

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

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L510)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L17)

## Accessors

### coef\_

Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/MultiTaskLasso.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L546)

### dual\_gap\_

The dual gaps at the end of the optimization for each alpha.

#### Signature

```ts
dual_gap_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/MultiTaskLasso.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L619)

### eps\_

The tolerance scaled scaled by the variance of the target `y`.

#### Signature

```ts
eps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/MultiTaskLasso.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L644)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/MultiTaskLasso.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L692)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/MultiTaskLasso.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L569)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/MultiTaskLasso.ts:667](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L667)

### n\_iter\_

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/MultiTaskLasso.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L594)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/MultiTaskLasso.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L82)

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

Defined in: [generated/linear\_model/MultiTaskLasso.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L86)
