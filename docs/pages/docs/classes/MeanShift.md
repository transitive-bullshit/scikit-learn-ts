# MeanShift

Mean shift clustering using a flat kernel.

Mean shift clustering aims to discover “blobs” in a smooth density of samples. It is a centroid-based algorithm, which works by updating candidates for centroids to be the mean of the points within a given region. These candidates are then filtered in a post-processing stage to eliminate near-duplicates to form the final set of centroids.

Seeding is performed using a binning technique for scalability.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html)

## Constructors

## constructor()

### Signature

```ts
new MeanShift(opts?: object): MeanShift;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.bandwidth?` | `number` | Bandwidth used in the flat kernel.  If not given, the bandwidth is estimated using sklearn.cluster.estimate\_bandwidth; see the documentation for that function for hints on scalability (see also the Notes, below). |
| `opts.bin_seeding?` | `boolean` | If true, initial kernel locations are not locations of all points, but rather the location of the discretized version of points, where points are binned onto a grid whose coarseness corresponds to the bandwidth. Setting this option to `true` will speed up the algorithm because fewer seeds will be initialized. The default value is `false`. Ignored if seeds argument is not `undefined`.  `Default Value`  `false` |
| `opts.cluster_all?` | `boolean` | If true, then all points are clustered, even those orphans that are not within any kernel. Orphans are assigned to the nearest kernel. If false, then orphans are given cluster label -1.  `Default Value`  `true` |
| `opts.max_iter?` | `number` | Maximum number of iterations, per seed point before the clustering operation terminates (for that seed point), if has not converged yet.  `Default Value`  `300` |
| `opts.min_bin_freq?` | `number` | To speed up the algorithm, accept only those bins with at least min\_bin\_freq points as seeds.  `Default Value`  `1` |
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation. The following tasks benefit from the parallelization: |
| `opts.seeds?` | `ArrayLike`[] | Seeds used to initialize kernels. If not set, the seeds are calculated by clustering.get\_bin\_seeds with bandwidth as the grid size and default values for other parameters. |

### Returns

[`MeanShift`](MeanShift.md)

Defined in:  [generated/cluster/MeanShift.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L27)

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

Defined in:  [generated/cluster/MeanShift.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L137)

### fit()

Perform clustering.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Samples to cluster. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/MeanShift.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L154)

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
| `opts.X?` | `ArrayLike`[] | Input data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/MeanShift.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L192)

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

Defined in:  [generated/cluster/MeanShift.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L90)

### predict()

Predict the closest cluster each sample in X belongs to.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | New data to predict. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/MeanShift.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L230)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/MeanShift.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/MeanShift.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/MeanShift.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L23)

### id

> `string`

Defined in:  [generated/cluster/MeanShift.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L20)

### opts

> `any`

Defined in:  [generated/cluster/MeanShift.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L21)

## Accessors

### cluster\_centers\_

Coordinates of cluster centers.

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/MeanShift.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L263)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/MeanShift.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L359)

### labels\_

Labels of each point.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/MeanShift.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L288)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/MeanShift.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L334)

### n\_iter\_

Maximum number of iterations performed on each seed.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/MeanShift.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L311)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/MeanShift.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L77)

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

Defined in: [generated/cluster/MeanShift.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/MeanShift.ts#L81)
