# SVR

Epsilon-Support Vector Regression.

The free parameters in the model are C and epsilon.

The implementation is based on libsvm. The fit time complexity is more than quadratic with the number of samples which makes it hard to scale to datasets with more than a couple of 10000 samples. For large datasets consider using [`LinearSVR`](sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") or [`SGDRegressor`](sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor "sklearn.linear_model.SGDRegressor") instead, possibly after a [`Nystroem`](sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other Kernel Approximation.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html)

## Constructors

## constructor()

### Signature

```ts
new SVR(opts?: object): SVR;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.C?` | `number` | Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. The penalty is a squared l2 penalty.  `Default Value`  `1` |
| `opts.cache_size?` | `number` | Specify the size of the kernel cache (in MB).  `Default Value`  `200` |
| `opts.coef0?` | `number` | Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.  `Default Value`  `0` |
| `opts.degree?` | `number` | Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.  `Default Value`  `3` |
| `opts.epsilon?` | `number` | Epsilon in the epsilon-SVR model. It specifies the epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value. Must be non-negative.  `Default Value`  `0.1` |
| `opts.gamma?` | `number` \| `"auto"` \| `"scale"` | Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.  `Default Value`  `'scale'` |
| `opts.kernel?` | `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"` | Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.  `Default Value`  `'rbf'` |
| `opts.max_iter?` | `number` | Hard limit on iterations within solver, or -1 for no limit.  `Default Value`  `-1` |
| `opts.shrinking?` | `boolean` | Whether to use the shrinking heuristic. See the User Guide.  `Default Value`  `true` |
| `opts.tol?` | `number` | Tolerance for stopping criterion.  `Default Value`  `0.001` |
| `opts.verbose?` | `boolean` | Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.  `Default Value`  `false` |

### Returns

[`SVR`](SVR.md)

Defined in:  [generated/svm/SVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/SVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/SVR.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/SVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L23)

### id

> `string`

Defined in:  [generated/svm/SVR.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L20)

### opts

> `any`

Defined in:  [generated/svm/SVR.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L21)

## Accessors

### class\_weight\_

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Signature

```ts
class_weight_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/SVR.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L318)

### dual\_coef\_

Coefficients of the support vector in the decision function.

#### Signature

```ts
dual_coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/svm/SVR.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L341)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/SVR.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L431)

### fit\_status\_

0 if correctly fitted, 1 otherwise (will raise warning)

#### Signature

```ts
fit_status_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/SVR.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L363)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/SVR.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L386)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/SVR.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L408)

### n\_iter\_

Number of iterations run by the optimization routine to fit the model.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/SVR.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L454)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/SVR.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L109)

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

Defined in: [generated/svm/SVR.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L113)

### shape\_fit\_

Array dimensions of training vector `X`.

#### Signature

```ts
shape_fit_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/svm/SVR.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L476)

### support\_

Indices of support vectors.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/SVR.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L498)

### support\_vectors\_

Support vectors.

#### Signature

```ts
support_vectors_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/svm/SVR.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L520)

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

Defined in:  [generated/svm/SVR.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L171)

### fit()

Fit the SVM model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n\_samples, n\_samples). |
| `opts.sample_weight?` | `ArrayLike` | Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points. |
| `opts.y?` | `ArrayLike` | Target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/SVR.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L188)

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

Defined in:  [generated/svm/SVR.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L122)

### predict()

Perform regression on samples in X.

For an one-class model, +1 (inlier) or -1 (outlier) is returned.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train). |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/svm/SVR.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L236)

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

Defined in:  [generated/svm/SVR.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/svm/SVR.ts#L271)
