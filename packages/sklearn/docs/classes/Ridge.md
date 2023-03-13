# Ridge

Linear least squares with l2 regularization.

Minimizes the objective function:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html)

## Constructors

## constructor()

### Signature

```ts
new Ridge(opts?: object): Ridge;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the L2 term, controlling regularization strength. `alpha` must be a non-negative float i.e. in `\[0, inf)`.  When `alpha \= 0`, the objective is equivalent to ordinary least squares, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Ridge` object is not advised. Instead, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.  If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.  `Default Value`  `1` |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.fit_intercept?` | `boolean` | Whether to fit the intercept for this model. If set to false, no intercept will be used in calculations (i.e. `X` and `y` are expected to be centered).  `Default Value`  `true` |
| `opts.max_iter?` | `number` | Maximum number of iterations for conjugate gradient solver. For ‘sparse\_cg’ and ‘lsqr’ solvers, the default value is determined by scipy.sparse.linalg. For ‘sag’ solver, the default value is 1000. For ‘lbfgs’ solver, the default value is 15000. |
| `opts.positive?` | `boolean` | When set to `true`, forces the coefficients to be positive. Only ‘lbfgs’ solver is supported in this case.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Used when `solver` == ‘sag’ or ‘saga’ to shuffle the data. See [Glossary](../../glossary.html#term-random_state) for details. |
| `opts.solver?` | `"auto"` \| `"svd"` \| `"lsqr"` \| `"lbfgs"` \| `"sag"` \| `"saga"` \| `"cholesky"` \| `"sparse_cg"` | Solver to use in the computational routines:  `Default Value`  `'auto'` |
| `opts.tol?` | `number` | Precision of the solution. Note that `tol` has no effect for solvers ‘svd’ and ‘cholesky’.  `Default Value`  `0.0001` |

### Returns

[`Ridge`](Ridge.md)

Defined in:  [generated/linear\_model/Ridge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Ridge.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Ridge.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/Ridge.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/Ridge.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/Ridge.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L17)

## Accessors

### coef\_

Weight vector(s).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Ridge.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L296)

Defined in:  [generated/linear\_model/Ridge.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L296)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Ridge.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L386)

Defined in:  [generated/linear\_model/Ridge.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L386)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Ridge.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L318)

Defined in:  [generated/linear\_model/Ridge.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L318)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/Ridge.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L363)

Defined in:  [generated/linear\_model/Ridge.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L363)

### n\_iter\_

Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.

#### Signature

```ts
n_iter_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Ridge.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L341)

Defined in:  [generated/linear\_model/Ridge.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L341)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/Ridge.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L92)

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

Defined in:  [generated/linear\_model/Ridge.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L96)

Defined in:  [generated/linear\_model/Ridge.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L92) [generated/linear\_model/Ridge.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L96)

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

Defined in:  [generated/linear\_model/Ridge.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L152)

### fit()

Fit Ridge regression model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. |
| `opts.sample_weight?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | Individual weights for each sample. If given a float, every sample will have the same weight. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Ridge.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L169)

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

Defined in:  [generated/linear\_model/Ridge.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L105)

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

Defined in:  [generated/linear\_model/Ridge.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L216)

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

Defined in:  [generated/linear\_model/Ridge.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/Ridge.ts#L249)
