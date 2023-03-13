# OneClassSVM

Unsupervised Outlier Detection.

Estimate the support of a high-dimensional distribution.

The implementation is based on libsvm.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html)

## Constructors

## constructor()

### Signature

```ts
new OneClassSVM(opts?: OneClassSVMOptions): OneClassSVM;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `OneClassSVMOptions` |

### Returns

[`OneClassSVM`](OneClassSVM.md)

Defined in:  [generated/svm/OneClassSVM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/OneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/OneClassSVM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/OneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L23)

### id

> `string`

Defined in:  [generated/svm/OneClassSVM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L20)

### opts

> `any`

Defined in:  [generated/svm/OneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L21)

## Accessors

### class\_weight\_

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Signature

```ts
class_weight_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/OneClassSVM.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L262)

### dual\_coef\_

Coefficients of the support vectors in the decision function.

#### Signature

```ts
dual_coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/svm/OneClassSVM.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L287)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/OneClassSVM.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L387)

### fit\_status\_

0 if correctly fitted, 1 otherwise (will raise warning)

#### Signature

```ts
fit_status_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/OneClassSVM.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L312)

### intercept\_

Constant in the decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/OneClassSVM.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L337)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/OneClassSVM.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L362)

### n\_iter\_

Number of iterations run by the optimization routine to fit the model.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/OneClassSVM.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L412)

### offset\_

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - `offset\_`. The offset is the opposite of `intercept\_` and is provided for consistency with other outlier detection algorithms.

#### Signature

```ts
offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/OneClassSVM.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L435)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/OneClassSVM.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L32)

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

Defined in: [generated/svm/OneClassSVM.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L36)

### shape\_fit\_

Array dimensions of training vector `X`.

#### Signature

```ts
shape_fit_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/svm/OneClassSVM.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L458)

### support\_

Indices of support vectors.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/OneClassSVM.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L483)

### support\_vectors\_

Support vectors.

#### Signature

```ts
support_vectors_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/svm/OneClassSVM.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L506)

## Methods

### decision\_function()

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Signature

```ts
decision_function(opts: OneClassSVMDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OneClassSVMDecisionFunctionOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/svm/OneClassSVM.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L112)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/svm/OneClassSVM.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L93)

### fit()

Detect the soft boundary of the set of samples X.

#### Signature

```ts
fit(opts: OneClassSVMFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OneClassSVMFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/OneClassSVM.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L142)

### fit\_predict()

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Signature

```ts
fit_predict(opts: OneClassSVMFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OneClassSVMFitPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/svm/OneClassSVM.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L176)

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

Defined in:  [generated/svm/OneClassSVM.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L45)

### predict()

Perform classification on samples in X.

For a one-class model, +1 or -1 is returned.

#### Signature

```ts
predict(opts: OneClassSVMPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OneClassSVMPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/svm/OneClassSVM.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L206)

### score\_samples()

Raw scoring function of the samples.

#### Signature

```ts
score_samples(opts: OneClassSVMScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OneClassSVMScoreSamplesOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/svm/OneClassSVM.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/OneClassSVM.ts#L234)
