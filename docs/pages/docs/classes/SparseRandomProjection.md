# Class: SparseRandomProjection

Reduce dimensionality through sparse random projection.

Sparse random matrix is an alternative to dense random projection matrix that guarantees similar embedding quality while being much more memory efficient and allowing faster computation of the projected data.

If we note `s \= 1 / density` the components of the random matrix are drawn from:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.SparseRandomProjection.html)

## Constructors

### new SparseRandomProjection()

> **new SparseRandomProjection**(`opts`?): [`SparseRandomProjection`](SparseRandomProjection.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.compute_inverse_components`? | `boolean` | Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that the pseudo-inverse is always a dense array, even if the training data was sparse. This means that it might be necessary to call `inverse_transform` on a small batch of samples at a time to avoid exhausting the available memory on the host. Moreover, computing the pseudo-inverse does not scale well to large matrices. |
| `opts.dense_output`? | `boolean` | If `true`, ensure that the output of the random projection is a dense numpy array even if the input and random projection matrix are both sparse. In practice, if the number of components is small the number of zero components in the projected data will be very small and it will be more CPU and memory efficient to use a dense representation. If `false`, the projected data uses a sparse representation if the input is sparse. |
| `opts.density`? | `number` \| `"auto"` | Ratio in the range (0, 1\] of non-zero component in the random projection matrix. If density = ‘auto’, the value is set to the minimum density as recommended by Ping Li et al.: 1 / sqrt(n_features). Use density = 1 / 3.0 if you want to reproduce the results from Achlioptas, 2001. |
| `opts.eps`? | `number` | Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when n_components is set to ‘auto’. This value should be strictly positive. Smaller values lead to better embedding and higher number of dimensions (n_components) in the target projection space. |
| `opts.n_components`? | `number` \| `"auto"` | Dimensionality of the target projection space. n_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter. It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset. |
| `opts.random_state`? | `number` | Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |

**Returns** [`SparseRandomProjection`](SparseRandomProjection.md)

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/random\_projection/SparseRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/random\_projection/SparseRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/random\_projection/SparseRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L21) |
| `id` | `string` | `undefined` | [generated/random\_projection/SparseRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L18) |
| `opts` | `any` | `undefined` | [generated/random\_projection/SparseRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L19) |

## Accessors

### components\_

**Get Signature**

> **get** **components\_**(): `Promise`\<`any`[]\>

Random matrix used for the projection. Sparse matrix will be of CSR format.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L459)

***

### density\_

**Get Signature**

> **get** **density\_**(): `Promise`\<`any`\>

Concrete density computed from when density = “auto”.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L513)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L567)

***

### inverse\_components\_

**Get Signature**

> **get** **inverse\_components\_**(): `Promise`\<`ArrayLike`[]\>

Pseudo-inverse of the components, only computed if `compute_inverse_components` is `true`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L486)

***

### n\_components\_

**Get Signature**

> **get** **n\_components\_**(): `Promise`\<`number`\>

Concrete number of components computed when n_components=”auto”.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L432)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L540)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L82)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L138)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Generate a sparse random projection matrix.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Training set: only the shape is used to find optimal random matrix dimensions based on the theory referenced in the afore mentioned papers. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L155)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Additional fit parameters. |
| `opts.X`? | `ArrayLike`[] | Input samples. |
| `opts.y`? | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L196)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L244)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L282)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L95)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Project data back to its original space.

Returns an array X_original whose transform would be X. Note that even if X is sparse, X_original is dense: this may use a lot of RAM.

If `compute_inverse_components` is `false`, the inverse of the components is computed during each call to `inverse_transform` which can be costly.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Data to be transformed back. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L322)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L360)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Project the data by using matrix product with the random matrix.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | The input data to project into a smaller dimensional space. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/random\_projection/SparseRandomProjection.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L396)
