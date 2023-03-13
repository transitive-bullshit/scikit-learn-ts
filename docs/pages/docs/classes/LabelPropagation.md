# LabelPropagation

Label Propagation classifier.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelPropagation.html)

## Constructors

## constructor()

### Signature

```ts
new LabelPropagation(opts?: object): LabelPropagation;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.gamma?` | `number` | Parameter for rbf kernel.  `Default Value`  `20` |
| `opts.kernel?` | `"rbf"` \| `"knn"` | String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n\_samples, n\_features), and return a (n\_samples, n\_samples) shaped weight matrix.  `Default Value`  `'rbf'` |
| `opts.max_iter?` | `number` | Change maximum number of iterations allowed.  `Default Value`  `1000` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.n_neighbors?` | `number` | Parameter for knn kernel which need to be strictly positive.  `Default Value`  `7` |
| `opts.tol?` | `number` | Convergence tolerance: threshold to consider the system at steady state. |

### Returns

[`LabelPropagation`](LabelPropagation.md)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L19)

### id

> `string`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L16)

### opts

> `any`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L17)

## Accessors

### X\_

Input array.

#### Signature

```ts
X_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/semi\_supervised/LabelPropagation.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L309)

### classes\_

The distinct labels used in classifying instances.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelPropagation.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L334)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelPropagation.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L442)

### label\_distributions\_

Categorical distribution for each item.

#### Signature

```ts
label_distributions_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/semi\_supervised/LabelPropagation.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L361)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/semi\_supervised/LabelPropagation.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L415)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/semi\_supervised/LabelPropagation.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L469)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L66)

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

Defined in: [generated/semi\_supervised/LabelPropagation.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L70)

### transduction\_

Label assigned to each item during fit.

#### Signature

```ts
transduction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelPropagation.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L388)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L125)

### fit()

Fit a semi-supervised label propagation model to X.

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L142)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L79)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L184)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L221)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L260)
