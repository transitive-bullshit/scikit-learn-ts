# SparseRandomProjection

Reduce dimensionality through sparse random projection.

Sparse random matrix is an alternative to dense random projection matrix that guarantees similar embedding quality while being much more memory efficient and allowing faster computation of the projected data.

If we note `s \= 1 / density` the components of the random matrix are drawn from:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.SparseRandomProjection.html)

## Constructors

## constructor()

### Signature

```ts
new SparseRandomProjection(opts?: object): SparseRandomProjection;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.compute_inverse_components?` | `boolean` | Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that the pseudo-inverse is always a dense array, even if the training data was sparse. This means that it might be necessary to call `inverse\_transform` on a small batch of samples at a time to avoid exhausting the available memory on the host. Moreover, computing the pseudo-inverse does not scale well to large matrices.  `Default Value`  `false` |
| `opts.dense_output?` | `boolean` | If `true`, ensure that the output of the random projection is a dense numpy array even if the input and random projection matrix are both sparse. In practice, if the number of components is small the number of zero components in the projected data will be very small and it will be more CPU and memory efficient to use a dense representation.  If `false`, the projected data uses a sparse representation if the input is sparse.  `Default Value`  `false` |
| `opts.density?` | `number` \| `"auto"` | Ratio in the range (0, 1\] of non-zero component in the random projection matrix.  If density = ‘auto’, the value is set to the minimum density as recommended by Ping Li et al.: 1 / sqrt(n\_features).  Use density = 1 / 3.0 if you want to reproduce the results from Achlioptas, 2001.  `Default Value`  `'auto'` |
| `opts.eps?` | `number` | Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when n\_components is set to ‘auto’. This value should be strictly positive.  Smaller values lead to better embedding and higher number of dimensions (n\_components) in the target projection space.  `Default Value`  `0.1` |
| `opts.n_components?` | `number` \| `"auto"` | Dimensionality of the target projection space.  n\_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter.  It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |

### Returns

[`SparseRandomProjection`](SparseRandomProjection.md)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L25)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L145)

### fit()

Generate a sparse random projection matrix.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training set: only the shape is used to find optimal random matrix dimensions based on the theory referenced in the afore mentioned papers. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L162)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L204)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L258)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L298)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L95)

### inverse\_transform()

Project data back to its original space.

Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Data to be transformed back. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L340)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L380)

### transform()

Project the data by using matrix product with the random matrix.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data to project into a smaller dimensional space. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L417)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L21)

### id

> `string`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L18)

### opts

> `any`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L19)

## Accessors

### components\_

Random matrix used for the projection. Sparse matrix will be of CSR format.

#### Signature

```ts
components_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L481)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L481)

### density\_

Concrete density computed from when density = “auto”.

#### Signature

```ts
density_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L535)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L535)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L589)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L589)

### inverse\_components\_

Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.

#### Signature

```ts
inverse_components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L508)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L508)

### n\_components\_

Concrete number of components computed when n\_components=”auto”.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L454)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L454)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L562)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L562)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L82)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L86)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L82) [generated/random\_projection/SparseRandomProjection.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L86)
