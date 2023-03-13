# Birch

Implements the BIRCH clustering algorithm.

It is a memory-efficient, online-learning algorithm provided as an alternative to [`MiniBatchKMeans`](sklearn.cluster.MiniBatchKMeans.html#sklearn.cluster.MiniBatchKMeans "sklearn.cluster.MiniBatchKMeans"). It constructs a tree data structure with the cluster centroids being read off the leaf. These can be either the final cluster centroids or can be provided as input to another clustering algorithm such as [`AgglomerativeClustering`](sklearn.cluster.AgglomerativeClustering.html#sklearn.cluster.AgglomerativeClustering "sklearn.cluster.AgglomerativeClustering").

Read more in the [User Guide](../clustering.html#birch).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html)

## Constructors

## constructor()

### Signature

```ts
new Birch(opts?: object): Birch;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.branching_factor?` | `number` | Maximum number of CF subclusters in each node. If a new samples enters such that the number of subclusters exceed the branching\_factor then that node is split into two nodes with the subclusters redistributed in each. The parent subcluster of that node is removed and two new subclusters are added as parents of the 2 split nodes.  `Default Value`  `50` |
| `opts.compute_labels?` | `boolean` | Whether or not to compute labels for each fit.  `Default Value`  `true` |
| `opts.copy?` | `boolean` | Whether or not to make a copy of the given data. If set to `false`, the initial data will be overwritten.  `Default Value`  `true` |
| `opts.n_clusters?` | `number` | Number of clusters after the final clustering step, which treats the subclusters from the leaves as new samples.  `Default Value`  `3` |
| `opts.threshold?` | `number` | The radius of the subcluster obtained by merging a new sample and the closest subcluster should be lesser than the threshold. Otherwise a new subcluster is started. Setting this value to be very low promotes splitting and vice-versa.  `Default Value`  `0.5` |

### Returns

[`Birch`](Birch.md)

Defined in:  [generated/cluster/Birch.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L25)

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

Defined in:  [generated/cluster/Birch.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L123)

### fit()

Build a CF Tree for the input data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L140)

### fit\_predict()

Perform clustering on `X` and returns cluster labels.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L178)

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

Defined in:  [generated/cluster/Birch.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L218)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.Birch.fit "sklearn.cluster.Birch.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L267)

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

Defined in:  [generated/cluster/Birch.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L78)

### partial\_fit()

Online learning. Prevents rebuilding of CFTree from scratch.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data. If X is not provided, only the global clustering step is done. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L300)

### predict()

Predict data using the `centroids\_` of subclusters.

Avoid computation of the row norms of X.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L340)

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

Defined in:  [generated/cluster/Birch.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L375)

### transform()

Transform X into subcluster centroids dimension.

Each dimension represents the distance from the sample point to each cluster centroid.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L410)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/Birch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/Birch.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/Birch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/Birch.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/Birch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L19)

## Accessors

### dummy\_leaf\_

Start pointer to all the leaves.

#### Signature

```ts
dummy_leaf_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L465)

Defined in:  [generated/cluster/Birch.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L465)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L583)

Defined in:  [generated/cluster/Birch.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L583)

### labels\_

Array of labels assigned to the input data. if partial\_fit is used instead of fit, they are assigned to the last batch of data.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L538)

Defined in:  [generated/cluster/Birch.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L538)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/Birch.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L560)

Defined in:  [generated/cluster/Birch.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L560)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/Birch.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L65)

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

Defined in:  [generated/cluster/Birch.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L69)

Defined in:  [generated/cluster/Birch.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L65) [generated/cluster/Birch.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L69)

### root\_

Root of the CFTree.

#### Signature

```ts
root_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L443)

Defined in:  [generated/cluster/Birch.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L443)

### subcluster\_centers\_

Centroids of all subclusters read directly from the leaves.

#### Signature

```ts
subcluster_centers_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L488)

Defined in:  [generated/cluster/Birch.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L488)

### subcluster\_labels\_

Labels assigned to the centroids of the subclusters after they are clustered globally.

#### Signature

```ts
subcluster_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L513)

Defined in:  [generated/cluster/Birch.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/Birch.ts#L513)
