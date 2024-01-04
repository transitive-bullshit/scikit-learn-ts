# TSNE

T-distributed Stochastic Neighbor Embedding.

t-SNE \[1\] is a tool to visualize high-dimensional data. It converts similarities between data points to joint probabilities and tries to minimize the Kullback-Leibler divergence between the joint probabilities of the low-dimensional embedding and the high-dimensional data. t-SNE has a cost function that is not convex, i.e. with different initializations we can get different results.

It is highly recommended to use another dimensionality reduction method (e.g. PCA for dense data or TruncatedSVD for sparse data) to reduce the number of dimensions to a reasonable amount (e.g. 50) if the number of features is very high. This will suppress some noise and speed up the computation of pairwise distances between samples. For more tips see Laurens van der Maaten’s FAQ \[2\].

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html)

## Constructors

## constructor()

### Signature

```ts
new TSNE(opts?: object): TSNE;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.angle?` | `number` | Only used if method=’barnes\_hut’ This is the trade-off between speed and accuracy for Barnes-Hut T-SNE. ‘angle’ is the angular size (referred to as theta in \[3\]) of a distant node as measured from a point. If this size is below ‘angle’ then it is used as a summary node of all points contained within it. This method is not very sensitive to changes in this parameter in the range of 0.2 - 0.8. Angle less than 0.2 has quickly increasing computation time and angle greater 0.8 has quickly increasing error.  `Default Value`  `0.5` |
| `opts.early_exaggeration?` | `number` | Controls how tight natural clusters in the original space are in the embedded space and how much space will be between them. For larger values, the space between natural clusters will be larger in the embedded space. Again, the choice of this parameter is not very critical. If the cost function increases during initial optimization, the early exaggeration factor or the learning rate might be too high.  `Default Value`  `12` |
| `opts.init?` | `ArrayLike`[] \| `"random"` \| `"pca"` | Initialization of embedding. PCA initialization cannot be used with precomputed distances and is usually more globally stable than random initialization.  `Default Value`  `'pca'` |
| `opts.learning_rate?` | `number` \| `"auto"` | The learning rate for t-SNE is usually in the range \[10.0, 1000.0\]. If the learning rate is too high, the data may look like a ‘ball’ with any point approximately equidistant from its nearest neighbours. If the learning rate is too low, most points may look compressed in a dense cloud with few outliers. If the cost function gets stuck in a bad local minimum increasing the learning rate may help. Note that many other t-SNE implementations (bhtsne, FIt-SNE, openTSNE, etc.) use a definition of learning\_rate that is 4 times smaller than ours. So our learning\_rate=200 corresponds to learning\_rate=800 in those other implementations. The ‘auto’ option sets the learning\_rate to `max(N / early\_exaggeration / 4, 50)` where N is the sample size, following \[4\] and \[5\].  `Default Value`  `'auto'` |
| `opts.method?` | `"barnes_hut"` \| `"exact"` | By default the gradient calculation algorithm uses Barnes-Hut approximation running in O(NlogN) time. method=’exact’ will run on the slower, but exact, algorithm in O(N^2) time. The exact algorithm should be used when nearest-neighbor errors need to be better than 3%. However, the exact method cannot scale to millions of examples.  `Default Value`  `'barnes_hut'` |
| `opts.metric?` | `string` | The metric to use when calculating distance between instances in a feature array. If metric is a string, it must be one of the options allowed by scipy.spatial.distance.pdist for its metric parameter, or a metric listed in pairwise.PAIRWISE\_DISTANCE\_FUNCTIONS. If metric is “precomputed”, X is assumed to be a distance matrix. Alternatively, if metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays from X as input and return a value indicating the distance between them. The default is “euclidean” which is interpreted as squared euclidean distance.  `Default Value`  `'euclidean'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.min_grad_norm?` | `number` | If the gradient norm is below this threshold, the optimization will be stopped.  `Default Value`  `1e-7` |
| `opts.n_components?` | `number` | Dimension of the embedded space.  `Default Value`  `2` |
| `opts.n_iter?` | `number` | Maximum number of iterations for the optimization. Should be at least 250.  `Default Value`  `1000` |
| `opts.n_iter_without_progress?` | `number` | Maximum number of iterations without progress before we abort the optimization, used after 250 initial iterations with early exaggeration. Note that progress is only checked every 50 iterations so this value is rounded to the next multiple of 50.  `Default Value`  `300` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run for neighbors search. This parameter has no impact when `metric="precomputed"` or (`metric="euclidean"` and `method="exact"`). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.perplexity?` | `number` | The perplexity is related to the number of nearest neighbors that is used in other manifold learning algorithms. Larger datasets usually require a larger perplexity. Consider selecting a value between 5 and 50. Different values can result in significantly different results. The perplexity must be less than the number of samples.  `Default Value`  `30` |
| `opts.random_state?` | `number` | Determines the random number generator. Pass an int for reproducible results across multiple function calls. Note that different initializations might result in different local minima of the cost function. See Glossary. |
| `opts.verbose?` | `number` | Verbosity level.  `Default Value`  `0` |

### Returns

[`TSNE`](TSNE.md)

Defined in:  [generated/manifold/TSNE.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L27)

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

Defined in:  [generated/manifold/TSNE.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L203)

### fit()

Fit X into an embedded space.

#### Signature

```ts
fit(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | If the metric is ‘precomputed’ X must be a square distance matrix. Otherwise it contains a sample per row. If the method is ‘exact’, X may be a sparse matrix of type ‘csr’, ‘csc’ or ‘coo’. If the method is ‘barnes\_hut’ and the metric is ‘precomputed’, X may be a precomputed sparse graph. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/manifold/TSNE.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L220)

### fit\_transform()

Fit X into an embedded space and return that transformed output.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | If the metric is ‘precomputed’ X must be a square distance matrix. Otherwise it contains a sample per row. If the method is ‘exact’, X may be a sparse matrix of type ‘csr’, ‘csc’ or ‘coo’. If the method is ‘barnes\_hut’ and the metric is ‘precomputed’, X may be a precomputed sparse graph. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/manifold/TSNE.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L257)

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

Defined in:  [generated/manifold/TSNE.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L297)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

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

Defined in:  [generated/manifold/TSNE.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L332)

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

Defined in:  [generated/manifold/TSNE.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L144)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

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

Defined in:  [generated/manifold/TSNE.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L367)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/TSNE.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/TSNE.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/TSNE.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L23)

### id

> `string`

Defined in:  [generated/manifold/TSNE.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L20)

### opts

> `any`

Defined in:  [generated/manifold/TSNE.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L21)

## Accessors

### embedding\_

Stores the embedding vectors.

#### Signature

```ts
embedding_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/manifold/TSNE.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L400)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/TSNE.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L469)

### kl\_divergence\_

Kullback-Leibler divergence after optimization.

#### Signature

```ts
kl_divergence_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L423)

### learning\_rate\_

Effective learning rate.

#### Signature

```ts
learning_rate_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L494)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L446)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L517)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/TSNE.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L131)

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

Defined in: [generated/manifold/TSNE.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/TSNE.ts#L135)
