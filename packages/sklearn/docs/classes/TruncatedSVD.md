# TruncatedSVD

Dimensionality reduction using truncated SVD (aka LSA).

This transformer performs linear dimensionality reduction by means of truncated singular value decomposition (SVD). Contrary to PCA, this estimator does not center the data before computing the singular value decomposition. This means it can work with sparse matrices efficiently.

In particular, truncated SVD works on term count/tf-idf matrices as returned by the vectorizers in [`sklearn.feature\_extraction.text`](../classes.html#module-sklearn.feature_extraction.text "sklearn.feature_extraction.text"). In that context, it is known as latent semantic analysis (LSA).

This estimator supports two algorithms: a fast randomized SVD solver, and a “naive” algorithm that uses ARPACK as an eigensolver on `X \* X.T` or `X.T \* X`, whichever is more efficient.

Read more in the [User Guide](../decomposition.html#lsa).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html)

## Constructors

## constructor()

### Signature

```ts
new TruncatedSVD(opts?: object): TruncatedSVD;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"randomized"` \| `"arpack"` | SVD solver to use. Either “arpack” for the ARPACK wrapper in SciPy (scipy.sparse.linalg.svds), or “randomized” for the randomized algorithm due to Halko (2009).  `Default Value`  `'randomized'` |
| `opts.n_components?` | `number` | Desired dimensionality of output data. If algorithm=’arpack’, must be strictly less than the number of features. If algorithm=’randomized’, must be less than or equal to the number of features. The default value is useful for visualisation. For LSA, a value of 100 is recommended.  `Default Value`  `2` |
| `opts.n_iter?` | `number` | Number of iterations for randomized SVD solver. Not used by ARPACK. The default is larger than the default in [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") to handle sparse matrices that may have large slowly decaying spectrum.  `Default Value`  `5` |
| `opts.n_oversamples?` | `number` | Number of oversamples for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for a complete description.  `Default Value`  `10` |
| `opts.power_iteration_normalizer?` | `"auto"` \| `"QR"` \| `"LU"` \| `"none"` | Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Used during randomized svd. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.tol?` | `number` | Tolerance for ARPACK. 0 means machine precision. Ignored by randomized SVD solver.  `Default Value`  `0` |

### Returns

[`TruncatedSVD`](TruncatedSVD.md)

Defined in:  [generated/decomposition/TruncatedSVD.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L29)

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

Defined in:  [generated/decomposition/TruncatedSVD.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L142)

### fit()

Fit model on training data X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L159)

### fit\_transform()

Fit model to X and perform dimensionality reduction on X.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L197)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.TruncatedSVD.fit "sklearn.decomposition.TruncatedSVD.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L237)

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

Defined in:  [generated/decomposition/TruncatedSVD.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L94)

### inverse\_transform()

Transform X back to its original space.

Returns an array X\_original whose transform would be X.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | New data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L275)

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

Defined in:  [generated/decomposition/TruncatedSVD.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L312)

### transform()

Perform dimensionality reduction on X.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L345)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/TruncatedSVD.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/TruncatedSVD.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/TruncatedSVD.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L25)

### id

> `string`

Defined in:  [generated/decomposition/TruncatedSVD.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L22)

### opts

> `any`

Defined in:  [generated/decomposition/TruncatedSVD.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L23)

## Accessors

### components\_

The right singular vectors of the input data.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L378)

Defined in:  [generated/decomposition/TruncatedSVD.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L378)

### explained\_variance\_

The variance of the training samples transformed by a projection to each component.

#### Signature

```ts
explained_variance_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L403)

Defined in:  [generated/decomposition/TruncatedSVD.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L403)

### explained\_variance\_ratio\_

Percentage of variance explained by each of the selected components.

#### Signature

```ts
explained_variance_ratio_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L428)

Defined in:  [generated/decomposition/TruncatedSVD.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L428)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L503)

Defined in:  [generated/decomposition/TruncatedSVD.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L503)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L478)

Defined in:  [generated/decomposition/TruncatedSVD.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L478)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/TruncatedSVD.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L81)

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

Defined in:  [generated/decomposition/TruncatedSVD.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L85)

Defined in:  [generated/decomposition/TruncatedSVD.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L81) [generated/decomposition/TruncatedSVD.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L85)

### singular\_values\_

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Signature

```ts
singular_values_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L453)

Defined in:  [generated/decomposition/TruncatedSVD.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L453)
