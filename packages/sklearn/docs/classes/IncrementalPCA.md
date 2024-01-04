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
new IncrementalPCA(opts?: object): IncrementalPCA;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.batch_size?` | `number` | The number of samples to use for each batch. Only used when calling `fit`. If `batch\_size` is `undefined`, then `batch\_size` is inferred from the data and set to `5 \* n\_features`, to provide a balance between approximation accuracy and memory consumption. |
| `opts.copy?` | `boolean` | If `false`, X will be overwritten. `copy=False` can be used to save memory but is unsafe for general use.  `Default Value`  `true` |
| `opts.n_components?` | `number` | Number of components to keep. If `n\_components` is `undefined`, then `n\_components` is set to `min(n\_samples, n\_features)`. |
| `opts.whiten?` | `boolean` | When `true` (`false` by default) the `components\_` vectors are divided by `n\_samples` times `components\_` to ensure uncorrelated outputs with unit component-wise variances.  Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometimes improve the predictive accuracy of the downstream estimators by making data respect some hard-wired assumptions.  `Default Value`  `false` |

### Returns

[`IncrementalPCA`](IncrementalPCA.md)

Defined in:  [generated/decomposition/IncrementalPCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L31)

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

Defined in:  [generated/decomposition/IncrementalPCA.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L117)

### fit()

Fit the model with X, using minibatches of size batch\_size.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L134)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L174)

### get\_covariance()

Compute data covariance with the generative model.

`cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.

#### Signature

```ts
get_covariance(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.cov?` | `any` | Estimated covariance of data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L223)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L258)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/decomposition/IncrementalPCA.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L296)

### get\_precision()

Compute data precision matrix with the generative model.

Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.

#### Signature

```ts
get_precision(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.precision?` | `any` | Estimated precision of data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L333)

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

Defined in:  [generated/decomposition/IncrementalPCA.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L75)

### inverse\_transform()

Transform data back to its original space.

In other words, return an input `X\_original` whose transform would be X.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | New data, where `n\_samples` is the number of samples and `n\_components` is the number of components. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L368)

### partial\_fit()

Incremental fit with X. All of X is processed as a single batch.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.check_input?` | `boolean` | Run check\_array on X.  `Default Value`  `true` |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L403)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L452)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_partial_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.check_input?` | `string` \| `boolean` | Metadata routing for `check\_input` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L489)

### transform()

Apply dimensionality reduction to X.

X is projected on the first principal components previously extracted from a training set, using minibatches of size batch\_size if X is sparse.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L527)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/IncrementalPCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/IncrementalPCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/IncrementalPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L27)

### id

> `string`

Defined in:  [generated/decomposition/IncrementalPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L24)

### opts

> `any`

Defined in:  [generated/decomposition/IncrementalPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L25)

## Accessors

### batch\_size\_

Inferred batch size from `batch\_size`.

#### Signature

```ts
batch_size_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L781)

Defined in:  [generated/decomposition/IncrementalPCA.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L781)

### components\_

Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L560)

Defined in:  [generated/decomposition/IncrementalPCA.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L560)

### explained\_variance\_

Variance explained by each of the selected components.

#### Signature

```ts
explained_variance_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L585)

Defined in:  [generated/decomposition/IncrementalPCA.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L585)

### explained\_variance\_ratio\_

Percentage of variance explained by each of the selected components. If all components are stored, the sum of explained variances is equal to 1.0.

#### Signature

```ts
explained_variance_ratio_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L610)

Defined in:  [generated/decomposition/IncrementalPCA.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L610)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:831](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L831)

Defined in:  [generated/decomposition/IncrementalPCA.ts:831](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L831)

### mean\_

Per-feature empirical mean, aggregate over calls to `partial\_fit`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L660)

Defined in:  [generated/decomposition/IncrementalPCA.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L660)

### n\_components\_

The estimated number of components. Relevant when `n\_components=None`.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L731)

Defined in:  [generated/decomposition/IncrementalPCA.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L731)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:806](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L806)

Defined in:  [generated/decomposition/IncrementalPCA.ts:806](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L806)

### n\_samples\_seen\_

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:756](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L756)

Defined in:  [generated/decomposition/IncrementalPCA.ts:756](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L756)

### noise\_variance\_

The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf).

#### Signature

```ts
noise_variance_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L706)

Defined in:  [generated/decomposition/IncrementalPCA.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L706)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/IncrementalPCA.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L62)

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

Defined in:  [generated/decomposition/IncrementalPCA.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L66)

Defined in:  [generated/decomposition/IncrementalPCA.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L62) [generated/decomposition/IncrementalPCA.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L66)

### singular\_values\_

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Signature

```ts
singular_values_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L635)

Defined in:  [generated/decomposition/IncrementalPCA.ts:635](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L635)

### var\_

Per-feature empirical variance, aggregate over calls to `partial\_fit`.

#### Signature

```ts
var_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/IncrementalPCA.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L683)

Defined in:  [generated/decomposition/IncrementalPCA.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L683)
