# IncrementalPCA

Incremental principal components analysis (IPCA).

Linear dimensionality reduction using Singular Value Decomposition of the data, keeping only the most significant singular vectors to project the data to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

Depending on the size of the input data, this algorithm can be much more memory efficient than a PCA, and allows sparse input.

This algorithm has constant memory complexity, on the order of `batch\_size \* n\_features`, enabling use of np.memmap files without loading the entire file into memory. For sparse matrices, the input is converted to dense in batches (in order to be able to subtract the mean) which avoids storing the entire dense matrix at any one time.

The computational overhead of each SVD is `O(batch\_size \* n\_features \*\* 2)`, but only 2 \* batch\_size samples remain in memory at a time. There will be `n\_samples / batch\_size` SVD computations to get the principal components, versus 1 large SVD of complexity `O(n\_samples \* n\_features \*\* 2)` for PCA.

Read more in the [User Guide](../decomposition.html#incrementalpca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.IncrementalPCA.html)

## Constructors

## constructor()

### Signature

```ts
new IncrementalPCA(opts?: IncrementalPCAOptions): IncrementalPCA;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`IncrementalPCAOptions`](../interfaces/IncrementalPCAOptions.md) |

### Returns

[`IncrementalPCA`](IncrementalPCA.md)

Defined in:  [generated/decomposition/IncrementalPCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/IncrementalPCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/IncrementalPCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/IncrementalPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L27)

### id

> `string`

Defined in:  [generated/decomposition/IncrementalPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L24)

### opts

> `any`

Defined in:  [generated/decomposition/IncrementalPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L25)

## Accessors

### batch\_size\_

Inferred batch size from `batch\_size`.

#### Signature

```ts
batch_size_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L610)

Defined in:  [generated/decomposition/IncrementalPCA.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L610)

### components\_

Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L389)

Defined in:  [generated/decomposition/IncrementalPCA.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L389)

### explained\_variance\_

Variance explained by each of the selected components.

#### Signature

```ts
explained_variance_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L414)

Defined in:  [generated/decomposition/IncrementalPCA.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L414)

### explained\_variance\_ratio\_

Percentage of variance explained by each of the selected components. If all components are stored, the sum of explained variances is equal to 1.0.

#### Signature

```ts
explained_variance_ratio_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L439)

Defined in:  [generated/decomposition/IncrementalPCA.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L439)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L660)

Defined in:  [generated/decomposition/IncrementalPCA.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L660)

### mean\_

Per-feature empirical mean, aggregate over calls to `partial\_fit`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L489)

Defined in:  [generated/decomposition/IncrementalPCA.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L489)

### n\_components\_

The estimated number of components. Relevant when `n\_components=None`.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L560)

Defined in:  [generated/decomposition/IncrementalPCA.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L560)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L635)

Defined in:  [generated/decomposition/IncrementalPCA.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L635)

### n\_samples\_seen\_

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L585)

Defined in:  [generated/decomposition/IncrementalPCA.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L585)

### noise\_variance\_

The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf).

#### Signature

```ts
noise_variance_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L535)

Defined in:  [generated/decomposition/IncrementalPCA.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L535)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/IncrementalPCA.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L36)

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

Defined in:  [generated/decomposition/IncrementalPCA.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L40)

Defined in:  [generated/decomposition/IncrementalPCA.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L36) [generated/decomposition/IncrementalPCA.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L40)

### singular\_values\_

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Signature

```ts
singular_values_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L464)

Defined in:  [generated/decomposition/IncrementalPCA.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L464)

### var\_

Per-feature empirical variance, aggregate over calls to `partial\_fit`.

#### Signature

```ts
var_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L512)

Defined in:  [generated/decomposition/IncrementalPCA.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L512)

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

Defined in:  [generated/decomposition/IncrementalPCA.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L91)

### fit()

Fit the model with X, using minibatches of size batch\_size.

#### Signature

```ts
fit(opts: IncrementalPCAFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAFitOptions`](../interfaces/IncrementalPCAFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L108)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: IncrementalPCAFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAFitTransformOptions`](../interfaces/IncrementalPCAFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L138)

### get\_covariance()

Compute data covariance with the generative model.

`cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.

#### Signature

```ts
get_covariance(opts: IncrementalPCAGetCovarianceOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAGetCovarianceOptions`](../interfaces/IncrementalPCAGetCovarianceOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L172)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: IncrementalPCAGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAGetFeatureNamesOutOptions`](../interfaces/IncrementalPCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L202)

### get\_precision()

Compute data precision matrix with the generative model.

Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.

#### Signature

```ts
get_precision(opts: IncrementalPCAGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAGetPrecisionOptions`](../interfaces/IncrementalPCAGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L237)

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

Defined in:  [generated/decomposition/IncrementalPCA.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L49)

### inverse\_transform()

Transform data back to its original space.

In other words, return an input `X\_original` whose transform would be X.

#### Signature

```ts
inverse_transform(opts: IncrementalPCAInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAInverseTransformOptions`](../interfaces/IncrementalPCAInverseTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L267)

### partial\_fit()

Incremental fit with X. All of X is processed as a single batch.

#### Signature

```ts
partial_fit(opts: IncrementalPCAPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCAPartialFitOptions`](../interfaces/IncrementalPCAPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L299)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: IncrementalPCASetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCASetOutputOptions`](../interfaces/IncrementalPCASetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L331)

### transform()

Apply dimensionality reduction to X.

X is projected on the first principal components previously extracted from a training set, using minibatches of size batch\_size if X is sparse.

#### Signature

```ts
transform(opts: IncrementalPCATransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IncrementalPCATransformOptions`](../interfaces/IncrementalPCATransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L361)
