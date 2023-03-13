# KernelRidge

Kernel ridge regression.

Kernel ridge regression (KRR) combines ridge regression (linear least squares with l2-norm regularization) with the kernel trick. It thus learns a linear function in the space induced by the respective kernel and the data. For non-linear kernels, this corresponds to a non-linear function in the original space.

The form of the model learned by KRR is identical to support vector regression (SVR). However, different loss functions are used: KRR uses squared error loss while support vector regression uses epsilon-insensitive loss, both combined with l2 regularization. In contrast to SVR, fitting a KRR model can be done in closed-form and is typically faster for medium-sized datasets. On the other hand, the learned model is non-sparse and thus slower than SVR, which learns a sparse model for epsilon > 0, at prediction-time.

This estimator has built-in support for multi-variate regression (i.e., when y is a 2d-array of shape \[n\_samples, n\_targets\]).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_ridge.KernelRidge.html)

## Constructors

## constructor()

### Signature

```ts
new KernelRidge(opts?: object): KernelRidge;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` \| `ArrayLike` | Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number. See Ridge regression and classification for formula.  `Default Value`  `1` |
| `opts.coef0?` | `number` | Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.  `Default Value`  `1` |
| `opts.degree?` | `number` | Degree of the polynomial kernel. Ignored by other kernels.  `Default Value`  `3` |
| `opts.gamma?` | `number` | Gamma parameter for the RBF, laplacian, polynomial, exponential chi2 and sigmoid kernels. Interpretation of the default value is left to the kernel; see the documentation for sklearn.metrics.pairwise. Ignored by other kernels. |
| `opts.kernel?` | `string` | Kernel mapping used internally. This parameter is directly passed to `pairwise\_kernel`. If `kernel` is a string, it must be one of the metrics in `pairwise.PAIRWISE\_KERNEL\_FUNCTIONS` or “precomputed”. If `kernel` is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if `kernel` is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two rows from X as input and return the corresponding kernel value as a single number. This means that callables from `sklearn.metrics.pairwise` are not allowed, as they operate on matrices, not single samples. Use the string identifying the kernel instead.  `Default Value`  `'linear'` |
| `opts.kernel_params?` | `any` | Additional parameters (keyword arguments) for kernel function passed as callable object. |

### Returns

[`KernelRidge`](KernelRidge.md)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L25)

### id

> `string`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L22)

### opts

> `any`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L23)

## Accessors

### X\_fit\_

Training data, which is also required for prediction. If kernel == “precomputed” this is instead the precomputed training matrix, of shape (n\_samples, n\_samples).

#### Signature

```ts
X_fit_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L302)

### dual\_coef\_

Representation of weight vector(s) in kernel space

#### Signature

```ts
dual_coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L277)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L350)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L325)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L72)

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

Defined in: [generated/kernel\_ridge/KernelRidge.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L76)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L131)

### fit()

Fit Kernel Ridge regression model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. If kernel == “precomputed” this is instead a precomputed kernel matrix, of shape (n\_samples, n\_samples). |
| `opts.sample_weight?` | `number` \| `ArrayLike` | Individual weights for each sample, ignored if `undefined` is passed. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L148)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L85)

### predict()

Predict using the kernel ridge model.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Samples. If kernel == “precomputed” this is instead a precomputed kernel matrix, shape = \[n\_samples, n\_samples\_fitted\], where n\_samples\_fitted is the number of samples used in the fitting for this estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L195)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L230)
