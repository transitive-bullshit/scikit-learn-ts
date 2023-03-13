# LabelSpreading

LabelSpreading model for semi-supervised learning.

This model is similar to the basic Label Propagation algorithm, but uses affinity matrix based on the normalized graph Laplacian and soft clamping across the labels.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelSpreading.html)

## Constructors

## constructor()

### Signature

```ts
new LabelSpreading(opts?: object): LabelSpreading;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Clamping factor. A value in (0, 1) that specifies the relative amount that an instance should adopt the information from its neighbors as opposed to its initial label. alpha=0 means keeping the initial label information; alpha=1 means replacing all initial information.  `Default Value`  `0.2` |
| `opts.gamma?` | `number` | Parameter for rbf kernel.  `Default Value`  `20` |
| `opts.kernel?` | `"rbf"` \| `"knn"` | String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n\_samples, n\_features), and return a (n\_samples, n\_samples) shaped weight matrix.  `Default Value`  `'rbf'` |
| `opts.max_iter?` | `number` | Maximum number of iterations allowed.  `Default Value`  `30` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.n_neighbors?` | `number` | Parameter for knn kernel which is a strictly positive integer.  `Default Value`  `7` |
| `opts.tol?` | `number` | Convergence tolerance: threshold to consider the system at steady state.  `Default Value`  `0.001` |

### Returns

[`LabelSpreading`](LabelSpreading.md)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L21)

### id

> `string`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L18)

### opts

> `any`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L19)

## Accessors

### X\_

Input array.

#### Signature

```ts
X_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L312)

### classes\_

The distinct labels used in classifying instances.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L335)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L435)

### label\_distributions\_

Categorical distribution for each item.

#### Signature

```ts
label_distributions_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L360)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L410)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L460)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L77)

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

Defined in: [generated/semi\_supervised/LabelSpreading.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L81)

### transduction\_

Label assigned to each item during fit.

#### Signature

```ts
transduction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L385)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L136)

### fit()

Fit a semi-supervised label propagation model to X.

The input samples (labeled and unlabeled) are provided by matrix X, and target labels are provided by matrix y. We conventionally apply the label -1 to unlabeled samples in matrix y in a semi-supervised classification.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `ArrayLike` | Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction\_`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L155)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L90)

### predict()

Perform inductive inference across the model.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data matrix. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L195)

### predict\_proba()

Predict probability for each possible outcome.

Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data matrix. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L230)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L265)
