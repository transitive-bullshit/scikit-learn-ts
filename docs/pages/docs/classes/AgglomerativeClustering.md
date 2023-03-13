# AgglomerativeClustering

Agglomerative Clustering.

Recursively merges pair of clusters of sample data; uses linkage distance.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html)

## Constructors

## constructor()

### Signature

```ts
new AgglomerativeClustering(opts?: AgglomerativeClusteringOptions): AgglomerativeClustering;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `AgglomerativeClusteringOptions` |

### Returns

[`AgglomerativeClustering`](AgglomerativeClustering.md)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L19)

## Accessors

### children\_

The children of each non-leaf node. Values less than `n\_samples` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_samples` is a non-leaf node and has children `children\_\[i \- n\_samples\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_samples + i`.

#### Signature

```ts
children_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L341)

### distances\_

Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.

#### Signature

```ts
distances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L368)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L314)

### labels\_

Cluster labels for each point.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L206)

### n\_clusters\_

The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.

#### Signature

```ts
n_clusters_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L179)

### n\_connected\_components\_

The estimated number of connected components in the graph.

#### Signature

```ts
n_connected_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L260)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L287)

### n\_leaves\_

Number of leaves in the hierarchical tree.

#### Signature

```ts
n_leaves_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AgglomerativeClustering.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L233)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L30)

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

Defined in: [generated/cluster/AgglomerativeClustering.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L34)

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

Defined in:  [generated/cluster/AgglomerativeClustering.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L95)

### fit()

Fit the hierarchical clustering from features, or distance matrix.

#### Signature

```ts
fit(opts: AgglomerativeClusteringFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AgglomerativeClusteringFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L112)

### fit\_predict()

Fit and return the result of each sample’s clustering assignment.

In addition to fitting, this method also return the result of the clustering assignment for each sample in the training set.

#### Signature

```ts
fit_predict(opts: AgglomerativeClusteringFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AgglomerativeClusteringFitPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L144)

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

Defined in:  [generated/cluster/AgglomerativeClustering.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L43)
