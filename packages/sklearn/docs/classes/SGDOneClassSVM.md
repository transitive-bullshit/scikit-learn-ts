# SGDOneClassSVM

Solves linear One-Class SVM using Stochastic Gradient Descent.

This implementation is meant to be used with a kernel approximation technique (e.g. `sklearn.kernel\_approximation.Nystroem`) to obtain results similar to `sklearn.svm.OneClassSVM` which uses a Gaussian kernel by default.

Read more in the [User Guide](../sgd.html#sgd-online-one-class-svm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDOneClassSVM.html)

## Constructors

## constructor()

### Signature

```ts
new SGDOneClassSVM(opts?: SGDOneClassSVMOptions): SGDOneClassSVM;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SGDOneClassSVMOptions`](../interfaces/SGDOneClassSVMOptions.md) |

### Returns

[`SGDOneClassSVM`](SGDOneClassSVM.md)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L19)

## Accessors

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L356)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L356)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L499)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L499)

### loss\_function\_

#### Signature

```ts
loss_function_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L449)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L449)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L474)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L474)

### n\_iter\_

The actual number of iterations to reach the stopping criterion.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L404)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L404)

### offset\_

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - offset.

#### Signature

```ts
offset_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L379)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L379)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L30)

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

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L34)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L30) [generated/linear\_model/SGDOneClassSVM.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L34)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L429)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L429)

## Methods

### decision\_function()

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Signature

```ts
decision_function(opts: SGDOneClassSVMDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMDecisionFunctionOptions`](../interfaces/SGDOneClassSVMDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L114)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: SGDOneClassSVMDensifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMDensifyOptions`](../interfaces/SGDOneClassSVMDensifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L148)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L95)

### fit()

Fit linear One-Class SVM with Stochastic Gradient Descent.

This solves an equivalent optimization problem of the One-Class SVM primal optimization problem and returns a weight vector w and an offset rho such that the decision function is given by <w, x> - rho.

#### Signature

```ts
fit(opts: SGDOneClassSVMFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMFitOptions`](../interfaces/SGDOneClassSVMFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L176)

### fit\_predict()

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Signature

```ts
fit_predict(opts: SGDOneClassSVMFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMFitPredictOptions`](../interfaces/SGDOneClassSVMFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L210)

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

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L43)

### partial\_fit()

Fit linear One-Class SVM with Stochastic Gradient Descent.

#### Signature

```ts
partial_fit(opts: SGDOneClassSVMPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMPartialFitOptions`](../interfaces/SGDOneClassSVMPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L238)

### predict()

Return labels (1 inlier, -1 outlier) of the samples.

#### Signature

```ts
predict(opts: SGDOneClassSVMPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMPredictOptions`](../interfaces/SGDOneClassSVMPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L268)

### score\_samples()

Raw scoring function of the samples.

#### Signature

```ts
score_samples(opts: SGDOneClassSVMScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMScoreSamplesOptions`](../interfaces/SGDOneClassSVMScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L296)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: SGDOneClassSVMSparsifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMSparsifyOptions`](../interfaces/SGDOneClassSVMSparsifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L330)
