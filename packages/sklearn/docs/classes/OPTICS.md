# OPTICS

Estimate clustering structure from vector array.

OPTICS (Ordering Points To Identify the Clustering Structure), closely related to DBSCAN, finds core sample of high density and expands clusters from them [\[1\]](#r2c55e37003fe-1). Unlike DBSCAN, keeps cluster hierarchy for a variable neighborhood radius. Better suited for usage on large datasets than the current sklearn implementation of DBSCAN.

Clusters are then extracted using a DBSCAN-like method (cluster\_method = ‘dbscan’) or an automatic technique proposed in [\[1\]](#r2c55e37003fe-1) (cluster\_method = ‘xi’).

This implementation deviates from the original OPTICS by first performing k-nearest-neighborhood searches on all points to identify core sizes, then computing only the distances to unprocessed points when constructing the cluster order. Note that we do not employ a heap to manage the expansion candidates, so the time complexity will be O(n^2).

Read more in the [User Guide](../clustering.html#optics).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html)

## Constructors

## constructor()

### Signature

```ts
new OPTICS(opts?: OPTICSOptions): OPTICS;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OPTICSOptions`](../interfaces/OPTICSOptions.md) |

### Returns

[`OPTICS`](OPTICS.md)

Defined in:  [generated/cluster/OPTICS.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/OPTICS.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/OPTICS.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/OPTICS.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L25)

### id

> `string`

Defined in:  [generated/cluster/OPTICS.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L22)

### opts

> `any`

Defined in:  [generated/cluster/OPTICS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L23)

## Accessors

### cluster\_hierarchy\_

The list of clusters in the form of `\[start, end\]` in each row, with all indices inclusive. The clusters are ordered according to `(end, \-start)` (ascending) so that larger clusters encompassing smaller clusters come after those smaller ones. Since `labels\_` does not reflect the hierarchy, usually `len(cluster\_hierarchy\_) > np.unique(optics.labels\_)`. Please also note that these indices are of the `ordering\_`, i.e. `X\[ordering\_\]\[start:end + 1\]` form a cluster. Only available when `cluster\_method='xi'`.

#### Signature

```ts
cluster_hierarchy_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/OPTICS.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L291)

Defined in:  [generated/cluster/OPTICS.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L291)

### core\_distances\_

Distance at which each sample becomes a core point, indexed by object order. Points which will never be core have a distance of inf. Use `clust.core\_distances\_\[clust.ordering\_\]` to access in cluster order.

#### Signature

```ts
core_distances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/OPTICS.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L243)

Defined in:  [generated/cluster/OPTICS.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L243)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/OPTICS.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L339)

Defined in:  [generated/cluster/OPTICS.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L339)

### labels\_

Cluster labels for each point in the dataset given to fit(). Noisy samples and points which are not included in a leaf cluster of `cluster\_hierarchy\_` are labeled as -1.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/OPTICS.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L175)

Defined in:  [generated/cluster/OPTICS.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L175)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/OPTICS.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L316)

Defined in:  [generated/cluster/OPTICS.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L316)

### ordering\_

The cluster ordered list of sample indices.

#### Signature

```ts
ordering_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/OPTICS.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L220)

Defined in:  [generated/cluster/OPTICS.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L220)

### predecessor\_

Point that a sample was reached from, indexed by object order. Seed points have a predecessor of -1.

#### Signature

```ts
predecessor_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/OPTICS.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L268)

Defined in:  [generated/cluster/OPTICS.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L268)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/OPTICS.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L34)

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

Defined in:  [generated/cluster/OPTICS.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L38)

Defined in:  [generated/cluster/OPTICS.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L34) [generated/cluster/OPTICS.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L38)

### reachability\_

Reachability distances per sample, indexed by object order. Use `clust.reachability\_\[clust.ordering\_\]` to access in cluster order.

#### Signature

```ts
reachability_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/OPTICS.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L197)

Defined in:  [generated/cluster/OPTICS.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L197)

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

Defined in:  [generated/cluster/OPTICS.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L100)

### fit()

Perform OPTICS clustering.

Extracts an ordered list of points and reachability distances, and performs initial clustering using `max\_eps` distance specified at OPTICS object instantiation.

#### Signature

```ts
fit(opts: OPTICSFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OPTICSFitOptions`](../interfaces/OPTICSFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/OPTICS.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L119)

### fit\_predict()

Perform clustering on `X` and returns cluster labels.

#### Signature

```ts
fit_predict(opts: OPTICSFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OPTICSFitPredictOptions`](../interfaces/OPTICSFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/OPTICS.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L147)

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

Defined in:  [generated/cluster/OPTICS.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/OPTICS.ts#L47)
