# RidgeCV

Ridge regression with built-in cross-validation.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

By default, it performs efficient Leave-One-Out Cross-Validation.

Read more in the [User Guide](../linear_model.html#ridge-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeCV.html)

## Constructors

## constructor()

### Signature

```ts
new RidgeCV(opts?: object): RidgeCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha_per_target?` | `boolean` | Flag indicating whether to optimize the alpha value (picked from the `alphas` parameter list) for each target separately (for multi-output settings: multiple prediction targets). When set to `true`, after fitting, the `alpha\_` attribute will contain a value for each target. When set to `false`, a single alpha is used for all targets.  `Default Value`  `false` |
| `opts.alphas?` | [`ArrayLike`](../types/ArrayLike.md) | Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). If using Leave-One-Out cross-validation, alphas must be positive. |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).  `Default Value`  `true` |
| `opts.gcv_mode?` | `"auto"` \| `"svd"` \| `"eigen"` | Flag indicating which strategy to use when performing Leave-One-Out Cross-Validation. Options are:  `Default Value`  `'auto'` |
| `opts.scoring?` | `string` | A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`. If `undefined`, the negative mean squared error if cv is ‘auto’ or `undefined` (i.e. when using leave-one-out cross-validation), and r2 score otherwise. |
| `opts.store_cv_values?` | `boolean` | Flag indicating if the cross-validation values corresponding to each alpha should be stored in the `cv\_values\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).  `Default Value`  `false` |

### Returns

[`RidgeCV`](RidgeCV.md)

Defined in:  [generated/linear\_model/RidgeCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L27)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L133)

### fit()

Fit Ridge regression model with cv.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. If using GCV, will be cast to float64 if necessary. |
| `opts.sample_weight?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | Individual weights for each sample. If given a float, every sample will have the same weight. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. Will be cast to X’s dtype if necessary. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RidgeCV.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L150)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L88)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L197)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L230)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RidgeCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L23)

### id

> `string`

Defined in:  [generated/linear\_model/RidgeCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L20)

### opts

> `any`

Defined in:  [generated/linear\_model/RidgeCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L21)

## Accessors

### alpha\_

Estimated regularization parameter, or, if `alpha\_per\_target=True`, the estimated regularization parameter for each target.

#### Signature

```ts
alpha_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L345)

Defined in:  [generated/linear\_model/RidgeCV.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L345)

### best\_score\_

Score of base estimator with best alpha, or, if `alpha\_per\_target=True`, a score for each target.

#### Signature

```ts
best_score_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L367)

Defined in:  [generated/linear\_model/RidgeCV.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L367)

### coef\_

Weight vector(s).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L300)

Defined in:  [generated/linear\_model/RidgeCV.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L300)

### cv\_values\_

Cross-validation values for each alpha (only available if `store\_cv\_values=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.

#### Signature

```ts
cv_values_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/RidgeCV.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L277)

Defined in:  [generated/linear\_model/RidgeCV.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L277)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L415)

Defined in:  [generated/linear\_model/RidgeCV.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L415)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeCV.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L322)

Defined in:  [generated/linear\_model/RidgeCV.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L322)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeCV.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L390)

Defined in:  [generated/linear\_model/RidgeCV.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L390)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RidgeCV.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L75)

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

Defined in:  [generated/linear\_model/RidgeCV.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L79)

Defined in:  [generated/linear\_model/RidgeCV.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L75) [generated/linear\_model/RidgeCV.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L79)
