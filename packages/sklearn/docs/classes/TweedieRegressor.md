# TweedieRegressor

Generalized Linear Model with a Tweedie distribution.

This estimator can be used to model different GLMs depending on the `power` parameter, which determines the underlying distribution.

Read more in the [User Guide](../linear_model.html#generalized-linear-models).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TweedieRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new TweedieRegressor(opts?: object): TweedieRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.  `Default Value`  `1` |
| `opts.fit_intercept?` | `boolean` | Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor (`X @ coef + intercept`).  `Default Value`  `true` |
| `opts.link?` | `"auto"` \| `"log"` \| `"identity"` | The link function of the GLM, i.e. mapping from linear predictor `X @ coeff + intercept` to prediction `y\_pred`. Option ‘auto’ sets the link depending on the chosen `power` parameter as follows:  `Default Value`  `'auto'` |
| `opts.max_iter?` | `number` | The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.  `Default Value`  `100` |
| `opts.power?` | `number` | The power determines the underlying target distribution according to the following table:  `Default Value`  `0` |
| `opts.solver?` | `"lbfgs"` \| `"newton-cholesky"` | Algorithm to use in the optimization problem:  `Default Value`  `'lbfgs'` |
| `opts.tol?` | `number` | Stopping criterion. For the lbfgs solver, the iteration will stop when `max{\|g\_j\|, j \= 1, ..., d} <= tol` where `g\_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef\_` and `intercept\_` .  `Default Value`  `false` |

### Returns

[`TweedieRegressor`](TweedieRegressor.md)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L25)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L156)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L173)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L224)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L106)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L261)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L300)

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
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L353)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L395)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L19)

## Accessors

### coef\_

Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.

#### Signature

```ts
coef_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L433)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L433)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L541)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L541)

### intercept\_

Intercept (a.k.a. bias) added to linear predictor.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L460)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L460)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L514)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L514)

### n\_iter\_

Actual number of iterations used in the solver.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L487)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L487)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L93)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L97)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L93) [generated/linear\_model/TweedieRegressor.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L97)
