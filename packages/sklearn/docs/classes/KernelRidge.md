# KernelRidge

Kernel ridge regression.

Kernel ridge regression (KRR) combines ridge regression (linear least squares with l2-norm regularization) with the kernel trick. It thus learns a linear function in the space induced by the respective kernel and the data. For non-linear kernels, this corresponds to a non-linear function in the original space.

The form of the model learned by KRR is identical to support vector regression (SVR). However, different loss functions are used: KRR uses squared error loss while support vector regression uses epsilon-insensitive loss, both combined with l2 regularization. In contrast to SVR, fitting a KRR model can be done in closed-form and is typically faster for medium-sized datasets. On the other hand, the learned model is non-sparse and thus slower than SVR, which learns a sparse model for epsilon > 0, at prediction-time.

This estimator has built-in support for multi-variate regression (i.e., when y is a 2d-array of shape \[n\_samples, n\_targets\]).

Read more in the [User Guide](../kernel_ridge.html#kernel-ridge).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_ridge.KernelRidge.html)

## Constructors

## constructor()

### Signature

```ts
new KernelRidge(opts?: KernelRidgeOptions): KernelRidge;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KernelRidgeOptions`](../interfaces/KernelRidgeOptions.md) |

### Returns

[`KernelRidge`](KernelRidge.md)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L25)

### id

> `string`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L22)

### opts

> `any`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L23)

## Accessors

### X\_fit\_

Training data, which is also required for prediction. If kernel == “precomputed” this is instead the precomputed training matrix, of shape (n\_samples, n\_samples).

#### Signature

```ts
X_fit_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L229)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L229)

### dual\_coef\_

Representation of weight vector(s) in kernel space

#### Signature

```ts
dual_coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L204)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L204)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L277)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L277)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L252)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L252)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L34)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L38)

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L34) [generated/kernel\_ridge/KernelRidge.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L38)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L93)

### fit()

Fit Kernel Ridge regression model.

#### Signature

```ts
fit(opts: KernelRidgeFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelRidgeFitOptions`](../interfaces/KernelRidgeFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L110)

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

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L47)

### predict()

Predict using the kernel ridge model.

#### Signature

```ts
predict(opts: KernelRidgePredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelRidgePredictOptions`](../interfaces/KernelRidgePredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L142)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: KernelRidgeScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelRidgeScoreOptions`](../interfaces/KernelRidgeScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L172)
