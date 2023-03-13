# GammaRegressor

Generalized Linear Model with a Gamma distribution.

This regressor uses the ‘log’ link function.

Read more in the [User Guide](../linear_model.html#generalized-linear-models).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.GammaRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new GammaRegressor(opts?: object): GammaRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.  `Default Value`  `1` |
| `opts.fit_intercept?` | `boolean` | Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor `X @ coef\_ + intercept\_`.  `Default Value`  `true` |
| `opts.max_iter?` | `number` | The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.  `Default Value`  `100` |
| `opts.solver?` | `"lbfgs"` \| `"newton-cholesky"` | Algorithm to use in the optimization problem:  `Default Value`  `'lbfgs'` |
| `opts.tol?` | `number` | Stopping criterion. For the lbfgs solver, the iteration will stop when `max{\|g\_j\|, j \= 1, ..., d} <= tol` where `g\_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef\_` and `intercept\_`.  `Default Value`  `false` |

### Returns

[`GammaRegressor`](GammaRegressor.md)

Defined in:  [generated/linear\_model/GammaRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L25)

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

Defined in:  [generated/linear\_model/GammaRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L138)

### fit()

Fit a Generalized Linear Model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L155)

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

Defined in:  [generated/linear\_model/GammaRegressor.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L92)

### predict()

Predict using GLM with feature matrix X.

#### Signature

```ts
predict(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Samples. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L202)

### score()

Compute D^2, the percentage of deviance explained.

D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](../model_evaluation.html#regression-metrics).

D^2 is defined as \\(D^2 = 1-\\frac{D(y\_{true},y\_{pred})}{D\_{null}}\\), \\(D\_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y\_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample\_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values of target. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L239)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/GammaRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/GammaRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/GammaRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/GammaRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/GammaRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L19)

## Accessors

### coef\_

Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.

#### Signature

```ts
coef_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L286)

Defined in:  [generated/linear\_model/GammaRegressor.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L286)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L384)

Defined in:  [generated/linear\_model/GammaRegressor.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L384)

### intercept\_

Intercept (a.k.a. bias) added to linear predictor.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L309)

Defined in:  [generated/linear\_model/GammaRegressor.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L309)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L334)

Defined in:  [generated/linear\_model/GammaRegressor.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L334)

### n\_iter\_

Actual number of iterations used in the solver.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/GammaRegressor.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L359)

Defined in:  [generated/linear\_model/GammaRegressor.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L359)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/GammaRegressor.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L79)

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

Defined in:  [generated/linear\_model/GammaRegressor.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L83)

Defined in:  [generated/linear\_model/GammaRegressor.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L79) [generated/linear\_model/GammaRegressor.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L83)
