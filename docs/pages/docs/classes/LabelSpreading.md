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
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.n_neighbors?` | `number` | Parameter for knn kernel which is a strictly positive integer.  `Default Value`  `7` |
| `opts.tol?` | `number` | Convergence tolerance: threshold to consider the system at steady state.  `Default Value`  `0.001` |

### Returns

[`LabelSpreading`](LabelSpreading.md)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L25)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L136)

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
| `opts.X?` | `ArrayLike` | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `ArrayLike` | Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction\_`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L155)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L197)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L90)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L232)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L267)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L302)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L353)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L21)

### id

> `string`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L18)

### opts

> `any`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L19)

## Accessors

### X\_

Input array.

#### Signature

```ts
X_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L389)

### classes\_

The distinct labels used in classifying instances.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L412)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L512)

### label\_distributions\_

Categorical distribution for each item.

#### Signature

```ts
label_distributions_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L437)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L487)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L537)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L77)

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

Defined in: [generated/semi\_supervised/LabelSpreading.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L81)

### transduction\_

Label assigned to each item during fit.

#### Signature

```ts
transduction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/semi\_supervised/LabelSpreading.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L462)
