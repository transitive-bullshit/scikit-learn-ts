# KernelDensity

Kernel Density Estimation.

Read more in the [User Guide](../density.html#kernel-density).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KernelDensity.html)

## Constructors

## constructor()

### Signature

```ts
new KernelDensity(opts?: object): KernelDensity;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` | The tree algorithm to use.  `Default Value`  `'auto'` |
| `opts.atol?` | `number` | The desired absolute tolerance of the result. A larger tolerance will generally lead to faster execution.  `Default Value`  `0` |
| `opts.bandwidth?` | `number` \| `"scott"` \| `"silverman"` | The bandwidth of the kernel. If bandwidth is a float, it defines the bandwidth of the kernel. If bandwidth is a string, one of the estimation methods is implemented.  `Default Value`  `1` |
| `opts.breadth_first?` | `boolean` | If true (default), use a breadth-first approach to the problem. Otherwise use a depth-first approach.  `Default Value`  `true` |
| `opts.kernel?` | `"linear"` \| `"cosine"` \| `"exponential"` \| `"gaussian"` \| `"tophat"` \| `"epanechnikov"` | The kernel to use.  `Default Value`  `'gaussian'` |
| `opts.leaf_size?` | `number` | Specify the leaf size of the underlying tree. See [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") for details.  `Default Value`  `40` |
| `opts.metric?` | `string` | Metric to use for distance computation. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.  Not all metrics are valid with all algorithms: refer to the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") and [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). Note that the normalization of the density output is correct only for the Euclidean distance metric.  `Default Value`  `'euclidean'` |
| `opts.metric_params?` | `any` | Additional parameters to be passed to the tree for use with the metric. For more information, see the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). |
| `opts.rtol?` | `number` | The desired relative tolerance of the result. A larger tolerance will generally lead to faster execution.  `Default Value`  `0` |

### Returns

[`KernelDensity`](KernelDensity.md)

Defined in:  [generated/neighbors/KernelDensity.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L23)

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

Defined in:  [generated/neighbors/KernelDensity.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L158)

### fit()

Fit the Kernel Density model on the data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | List of sample weights attached to the data X. |
| `opts.y?` | `any` | Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KernelDensity.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L175)

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

Defined in:  [generated/neighbors/KernelDensity.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L224)

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

Defined in:  [generated/neighbors/KernelDensity.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L110)

### sample()

Generate random samples from the model.

Currently, this is implemented only for gaussian and tophat kernels.

#### Signature

```ts
sample(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.n_samples?` | `number` | Number of samples to generate.  `Default Value`  `1` |
| `opts.random_state?` | `number` | Determines random number generation used to generate random samples. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/KernelDensity.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L261)

### score()

Compute the total log-likelihood under the model.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.y?` | `any` | Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline"). |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KernelDensity.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L301)

### score\_samples()

Compute the log-likelihood of each sample under the model.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | An array of points to query. Last dimension should match dimension of training data (n\_features). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KernelDensity.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L339)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KernelDensity.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L376)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KernelDensity.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KernelDensity.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KernelDensity.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/KernelDensity.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/KernelDensity.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L17)

## Accessors

### bandwidth\_

Value of the bandwidth, given directly by the bandwidth parameter or estimated using the ‘scott’ or ‘silverman’ method.

#### Signature

```ts
bandwidth_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KernelDensity.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L482)

Defined in:  [generated/neighbors/KernelDensity.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L482)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KernelDensity.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L457)

Defined in:  [generated/neighbors/KernelDensity.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L457)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KernelDensity.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L409)

Defined in:  [generated/neighbors/KernelDensity.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L409)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KernelDensity.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L97)

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

Defined in:  [generated/neighbors/KernelDensity.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L101)

Defined in:  [generated/neighbors/KernelDensity.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L97) [generated/neighbors/KernelDensity.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L101)

### tree\_

The tree algorithm for fast generalized N-point problems.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KernelDensity.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L434)

Defined in:  [generated/neighbors/KernelDensity.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L434)
