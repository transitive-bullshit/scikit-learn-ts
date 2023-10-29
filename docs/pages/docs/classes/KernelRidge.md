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
| `opts.kernel?` | `string` | Kernel mapping used internally. This parameter is directly passed to [`pairwise\_kernels`](sklearn.metrics.pairwise.pairwise_kernels.html#sklearn.metrics.pairwise.pairwise_kernels "sklearn.metrics.pairwise.pairwise_kernels"). If `kernel` is a string, it must be one of the metrics in `pairwise.PAIRWISE\_KERNEL\_FUNCTIONS` or “precomputed”. If `kernel` is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if `kernel` is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two rows from X as input and return the corresponding kernel value as a single number. This means that callables from `sklearn.metrics.pairwise` are not allowed, as they operate on matrices, not single samples. Use the string identifying the kernel instead.  `Default Value`  `'linear'` |
| `opts.kernel_params?` | `any` | Additional parameters (keyword arguments) for kernel function passed as callable object. |

### Returns

[`KernelRidge`](KernelRidge.md)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L29)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L131)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L148)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L197)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L85)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L232)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L267)

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
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L318)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L355)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L25)

### id

> `string`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L22)

### opts

> `any`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L23)

## Accessors

### X\_fit\_

Training data, which is also required for prediction. If kernel == “precomputed” this is instead the precomputed training matrix, of shape (n\_samples, n\_samples).

#### Signature

```ts
X_fit_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L413)

### dual\_coef\_

Representation of weight vector(s) in kernel space

#### Signature

```ts
dual_coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L388)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L461)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/kernel\_ridge/KernelRidge.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L436)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L72)

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

Defined in: [generated/kernel\_ridge/KernelRidge.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L76)
