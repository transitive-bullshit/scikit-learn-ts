# Class: TruncatedSVD

Dimensionality reduction using truncated SVD (aka LSA).

This transformer performs linear dimensionality reduction by means of truncated singular value decomposition (SVD). Contrary to PCA, this estimator does not center the data before computing the singular value decomposition. This means it can work with sparse matrices efficiently.

In particular, truncated SVD works on term count/tf-idf matrices as returned by the vectorizers in [`sklearn.feature_extraction.text`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.feature_extraction.html#module-sklearn.feature_extraction.text "sklearn.feature_extraction.text"). In that context, it is known as latent semantic analysis (LSA).

This estimator supports two algorithms: a fast randomized SVD solver, and a “naive” algorithm that uses ARPACK as an eigensolver on `X \* X.T` or `X.T \* X`, whichever is more efficient.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#lsa).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html)

## Constructors

### new TruncatedSVD()

> **new TruncatedSVD**(`opts`?): [`TruncatedSVD`](TruncatedSVD.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.algorithm`? | `"randomized"` \| `"arpack"` | SVD solver to use. Either “arpack” for the ARPACK wrapper in SciPy (scipy.sparse.linalg.svds), or “randomized” for the randomized algorithm due to Halko (2009). |
| `opts.n_components`? | `number` | Desired dimensionality of output data. If algorithm=’arpack’, must be strictly less than the number of features. If algorithm=’randomized’, must be less than or equal to the number of features. The default value is useful for visualisation. For LSA, a value of 100 is recommended. |
| `opts.n_iter`? | `number` | Number of iterations for randomized SVD solver. Not used by ARPACK. The default is larger than the default in [`randomized_svd`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") to handle sparse matrices that may have large slowly decaying spectrum. |
| `opts.n_oversamples`? | `number` | Number of oversamples for randomized SVD solver. Not used by ARPACK. See [`randomized_svd`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for a complete description. |
| `opts.power_iteration_normalizer`? | `"auto"` \| `"QR"` \| `"LU"` \| `"none"` | Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See [`randomized_svd`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details. |
| `opts.random_state`? | `number` | Used during randomized svd. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.tol`? | `number` | Tolerance for ARPACK. 0 means machine precision. Ignored by randomized SVD solver. |

#### Returns

[`TruncatedSVD`](TruncatedSVD.md)

#### Defined in

[generated/decomposition/TruncatedSVD.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/decomposition/TruncatedSVD.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/decomposition/TruncatedSVD.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/decomposition/TruncatedSVD.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L25) |
| `id` | `string` | `undefined` | [generated/decomposition/TruncatedSVD.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L22) |
| `opts` | `any` | `undefined` | [generated/decomposition/TruncatedSVD.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L23) |

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The right singular vectors of the input data.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L398)

***

### explained\_variance\_

#### Get Signature

> **get** **explained\_variance\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The variance of the training samples transformed by a projection to each component.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L423)

***

### explained\_variance\_ratio\_

#### Get Signature

> **get** **explained\_variance\_ratio\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Percentage of variance explained by each of the selected components.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L448)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L523)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L498)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/decomposition/TruncatedSVD.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L81)

***

### singular\_values\_

#### Get Signature

> **get** **singular\_values\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n_components` variables in the lower-dimensional space.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L473)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L133)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit model on training data X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Training data. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L150)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Fit model to X and perform dimensionality reduction on X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Training data. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L187)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L226)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L262)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L94)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform X back to its original space.

Returns an array X_original whose transform would be X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | New data. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L298)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L334)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Perform dimensionality reduction on X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | New data. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/TruncatedSVD.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L366)
