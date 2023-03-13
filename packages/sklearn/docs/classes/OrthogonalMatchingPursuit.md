# OrthogonalMatchingPursuit

Orthogonal Matching Pursuit model (OMP).

Read more in the [User Guide](../linear_model.html#omp).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuit.html)

## Constructors

## constructor()

### Signature

```ts
new OrthogonalMatchingPursuit(opts?: object): OrthogonalMatchingPursuit;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.n_nonzero_coefs?` | `number` | Desired number of non-zero entries in the solution. If `undefined` (by default) this value is set to 10% of n\_features. |
| `opts.normalize?` | `boolean` | This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.  `Default Value`  `false` |
| `opts.precompute?` | `boolean` \| `"auto"` | Whether to use a precomputed Gram and Xy matrix to speed up calculations. Improves performance when [n\_targets](../../glossary.html#term-n_targets) or [n\_samples](../../glossary.html#term-n_samples) is very large. Note that if you already have such matrices, you can pass them directly to the fit method.  `Default Value`  `'auto'` |
| `opts.tol?` | `number` | Maximum norm of the residual. If not `undefined`, overrides n\_nonzero\_coefs. |

### Returns

[`OrthogonalMatchingPursuit`](OrthogonalMatchingPursuit.md)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L17)

## Accessors

### coef\_

Parameter vector (w in the formula).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L269)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L269)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L404)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L404)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L296)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L296)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L377)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L377)

### n\_iter\_

Number of active features across every target.

#### Signature

```ts
n_iter_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L323)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L323)

### n\_nonzero\_coefs\_

The number of non-zero coefficients in the solution. If `n\_nonzero\_coefs` is `undefined` and `tol` is `undefined` this value is either set to 10% of `n\_features` or 1, whichever is greater.

#### Signature

```ts
n_nonzero_coefs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L350)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L350)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L59)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L63)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L59) [generated/linear\_model/OrthogonalMatchingPursuit.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L63)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L120)

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
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. Will be cast to X’s dtype if necessary. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L137)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L72)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L179)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L218)
