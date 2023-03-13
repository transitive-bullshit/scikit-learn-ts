# OneClassSVM

Unsupervised Outlier Detection.

Estimate the support of a high-dimensional distribution.

The implementation is based on libsvm.

Read more in the [User Guide](../outlier_detection.html#outlier-detection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html)

## Constructors

## constructor()

### Signature

```ts
new OneClassSVM(opts?: object): OneClassSVM;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.cache_size?` | `number` | Specify the size of the kernel cache (in MB).  `Default Value`  `200` |
| `opts.coef0?` | `number` | Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.  `Default Value`  `0` |
| `opts.degree?` | `number` | Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.  `Default Value`  `3` |
| `opts.gamma?` | `number` \| `"auto"` \| `"scale"` | Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.  `Default Value`  `'scale'` |
| `opts.kernel?` | `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"` | Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.  `Default Value`  `'rbf'` |
| `opts.max_iter?` | `number` | Hard limit on iterations within solver, or -1 for no limit.  `Default Value`  `-1` |
| `opts.nu?` | `number` | An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.  `Default Value`  `0.5` |
| `opts.shrinking?` | `boolean` | Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).  `Default Value`  `true` |
| `opts.tol?` | `number` | Tolerance for stopping criterion.  `Default Value`  `0.001` |
| `opts.verbose?` | `boolean` | Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.  `Default Value`  `false` |

### Returns

[`OneClassSVM`](OneClassSVM.md)

Defined in:  [generated/svm/OneClassSVM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/OneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/OneClassSVM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/OneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L23)

### id

> `string`

Defined in:  [generated/svm/OneClassSVM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L20)

### opts

> `any`

Defined in:  [generated/svm/OneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L21)

## Accessors

### class\_weight\_

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Signature

```ts
class_weight_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L370)

Defined in:  [generated/svm/OneClassSVM.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L370)

### dual\_coef\_

Coefficients of the support vectors in the decision function.

#### Signature

```ts
dual_coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/OneClassSVM.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L395)

Defined in:  [generated/svm/OneClassSVM.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L395)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L495)

Defined in:  [generated/svm/OneClassSVM.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L495)

### fit\_status\_

0 if correctly fitted, 1 otherwise (will raise warning)

#### Signature

```ts
fit_status_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/OneClassSVM.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L420)

Defined in:  [generated/svm/OneClassSVM.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L420)

### intercept\_

Constant in the decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L445)

Defined in:  [generated/svm/OneClassSVM.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L445)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/OneClassSVM.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L470)

Defined in:  [generated/svm/OneClassSVM.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L470)

### n\_iter\_

Number of iterations run by the optimization routine to fit the model.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/OneClassSVM.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L520)

Defined in:  [generated/svm/OneClassSVM.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L520)

### offset\_

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - `offset\_`. The offset is the opposite of `intercept\_` and is provided for consistency with other outlier detection algorithms.

#### Signature

```ts
offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/OneClassSVM.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L543)

Defined in:  [generated/svm/OneClassSVM.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L543)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/OneClassSVM.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L102)

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

Defined in:  [generated/svm/OneClassSVM.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L106)

Defined in:  [generated/svm/OneClassSVM.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L102) [generated/svm/OneClassSVM.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L106)

### shape\_fit\_

Array dimensions of training vector `X`.

#### Signature

```ts
shape_fit_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/svm/OneClassSVM.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L566)

Defined in:  [generated/svm/OneClassSVM.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L566)

### support\_

Indices of support vectors.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L591)

Defined in:  [generated/svm/OneClassSVM.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L591)

### support\_vectors\_

Support vectors.

#### Signature

```ts
support_vectors_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/OneClassSVM.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L614)

Defined in:  [generated/svm/OneClassSVM.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L614)

## Methods

### decision\_function()

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data matrix. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L182)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/svm/OneClassSVM.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L163)

### fit()

Detect the soft boundary of the set of samples X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Set of samples, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/OneClassSVM.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L215)

### fit\_predict()

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L264)

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

Defined in:  [generated/svm/OneClassSVM.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L115)

### predict()

Perform classification on samples in X.

For a one-class model, +1 or -1 is returned.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L304)

### score\_samples()

Raw scoring function of the samples.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data matrix. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/OneClassSVM.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/OneClassSVM.ts#L337)
