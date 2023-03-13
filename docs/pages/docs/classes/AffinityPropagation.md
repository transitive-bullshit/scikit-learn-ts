# AffinityPropagation

Perform Affinity Propagation Clustering of data.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html)

## Constructors

## constructor()

### Signature

```ts
new AffinityPropagation(opts?: object): AffinityPropagation;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.affinity?` | `"euclidean"` \| `"precomputed"` | Which affinity to use. At the moment ‘precomputed’ and `euclidean` are supported. ‘euclidean’ uses the negative squared euclidean distance between points.  `Default Value`  `'euclidean'` |
| `opts.convergence_iter?` | `number` | Number of iterations with no change in the number of estimated clusters that stops the convergence.  `Default Value`  `15` |
| `opts.copy?` | `boolean` | Make a copy of input data.  `Default Value`  `true` |
| `opts.damping?` | `number` | Damping factor in the range `\0.5, 1.0)` is the extent to which the current value is maintained relative to incoming values (weighted 1 - damping). This in order to avoid numerical oscillations when updating these values (messages).  `Default Value`  `0.5` |
| `opts.max_iter?` | `number` | Maximum number of iterations.  `Default Value`  `200` |
| `opts.preference?` | `number` \| [`ArrayLike` | Preferences for each point - points with larger values of preferences are more likely to be chosen as exemplars. The number of exemplars, ie of clusters, is influenced by the input preferences value. If the preferences are not passed as arguments, they will be set to the median of the input similarities. |
| `opts.random_state?` | `number` | Pseudo-random number generator to control the starting state. Use an int for reproducible results across function calls. See the Glossary. |
| `opts.verbose?` | `boolean` | Whether to be verbose.  `Default Value`  `false` |

### Returns

[`AffinityPropagation`](AffinityPropagation.md)

Defined in:  [generated/cluster/AffinityPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/AffinityPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/AffinityPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/AffinityPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/AffinityPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/AffinityPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L17)

## Accessors

### affinity\_matrix\_

Stores the affinity matrix used in `fit`.

#### Signature

```ts
affinity_matrix_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/AffinityPropagation.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L360)

### cluster\_centers\_

Cluster centers (if affinity != `precomputed`).

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/AffinityPropagation.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L306)

### cluster\_centers\_indices\_

Indices of cluster centers.

#### Signature

```ts
cluster_centers_indices_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AffinityPropagation.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L279)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AffinityPropagation.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L441)

### labels\_

Labels of each point.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AffinityPropagation.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L333)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AffinityPropagation.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L414)

### n\_iter\_

Number of iterations taken to converge.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AffinityPropagation.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L387)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/AffinityPropagation.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L80)

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

Defined in: [generated/cluster/AffinityPropagation.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L84)

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

Defined in:  [generated/cluster/AffinityPropagation.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L145)

### fit()

Fit the clustering from features, or affinity matrix.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr\_matrix`. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/AffinityPropagation.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L162)

### fit\_predict()

Fit clustering from features/affinity matrix; return cluster labels.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr\_matrix`. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/AffinityPropagation.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L202)

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

Defined in:  [generated/cluster/AffinityPropagation.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L93)

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
| `opts.X?` | `ArrayLike` | New data to predict. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/AffinityPropagation.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L244)
