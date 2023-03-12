[sklearn](../readme.md) / [Exports](../modules.md) / TSNEOptions

# Interface: TSNEOptions

## Table of contents

### Properties

- [angle](TSNEOptions.md#angle)
- [early\_exaggeration](TSNEOptions.md#early_exaggeration)
- [init](TSNEOptions.md#init)
- [learning\_rate](TSNEOptions.md#learning_rate)
- [method](TSNEOptions.md#method)
- [metric](TSNEOptions.md#metric)
- [metric\_params](TSNEOptions.md#metric_params)
- [min\_grad\_norm](TSNEOptions.md#min_grad_norm)
- [n\_components](TSNEOptions.md#n_components)
- [n\_iter](TSNEOptions.md#n_iter)
- [n\_iter\_without\_progress](TSNEOptions.md#n_iter_without_progress)
- [n\_jobs](TSNEOptions.md#n_jobs)
- [perplexity](TSNEOptions.md#perplexity)
- [random\_state](TSNEOptions.md#random_state)
- [square\_distances](TSNEOptions.md#square_distances)
- [verbose](TSNEOptions.md#verbose)

## Properties

### angle

• `Optional` **angle**: `number`

Only used if method=’barnes\_hut’ This is the trade-off between speed and accuracy for Barnes-Hut T-SNE. ‘angle’ is the angular size (referred to as theta in \[3\]) of a distant node as measured from a point. If this size is below ‘angle’ then it is used as a summary node of all points contained within it. This method is not very sensitive to changes in this parameter in the range of 0.2 - 0.8. Angle less than 0.2 has quickly increasing computation time and angle greater 0.8 has quickly increasing error.

**`Default Value`**

`0.5`

#### Defined in

[generated/manifold/TSNE.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L406)

___

### early\_exaggeration

• `Optional` **early\_exaggeration**: `number`

Controls how tight natural clusters in the original space are in the embedded space and how much space will be between them. For larger values, the space between natural clusters will be larger in the embedded space. Again, the choice of this parameter is not very critical. If the cost function increases during initial optimization, the early exaggeration factor or the learning rate might be too high.

**`Default Value`**

`12`

#### Defined in

[generated/manifold/TSNE.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L333)

___

### init

• `Optional` **init**: [`ArrayLike`](../modules.md#arraylike)[] \| ``"random"`` \| ``"pca"``

Initialization of embedding. PCA initialization cannot be used with precomputed distances and is usually more globally stable than random initialization.

**`Default Value`**

`'pca'`

#### Defined in

[generated/manifold/TSNE.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L380)

___

### learning\_rate

• `Optional` **learning\_rate**: `number` \| ``"auto"``

The learning rate for t-SNE is usually in the range \[10.0, 1000.0\]. If the learning rate is too high, the data may look like a ‘ball’ with any point approximately equidistant from its nearest neighbours. If the learning rate is too low, most points may look compressed in a dense cloud with few outliers. If the cost function gets stuck in a bad local minimum increasing the learning rate may help. Note that many other t-SNE implementations (bhtsne, FIt-SNE, openTSNE, etc.) use a definition of learning\_rate that is 4 times smaller than ours. So our learning\_rate=200 corresponds to learning\_rate=800 in those other implementations. The ‘auto’ option sets the learning\_rate to `max(N / early\_exaggeration / 4, 50)` where N is the sample size, following \[4\] and \[5\].

**`Default Value`**

`'auto'`

#### Defined in

[generated/manifold/TSNE.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L340)

___

### method

• `Optional` **method**: ``"barnes_hut"`` \| ``"exact"``

By default the gradient calculation algorithm uses Barnes-Hut approximation running in O(NlogN) time. method=’exact’ will run on the slower, but exact, algorithm in O(N^2) time. The exact algorithm should be used when nearest-neighbor errors need to be better than 3%. However, the exact method cannot scale to millions of examples.

**`Default Value`**

`'barnes_hut'`

#### Defined in

[generated/manifold/TSNE.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L399)

___

### metric

• `Optional` **metric**: `string`

The metric to use when calculating distance between instances in a feature array. If metric is a string, it must be one of the options allowed by scipy.spatial.distance.pdist for its metric parameter, or a metric listed in pairwise.PAIRWISE\_DISTANCE\_FUNCTIONS. If metric is “precomputed”, X is assumed to be a distance matrix. Alternatively, if metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays from X as input and return a value indicating the distance between them. The default is “euclidean” which is interpreted as squared euclidean distance.

**`Default Value`**

`'euclidean'`

#### Defined in

[generated/manifold/TSNE.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L368)

___

### metric\_params

• `Optional` **metric\_params**: `any`

Additional keyword arguments for the metric function.

#### Defined in

[generated/manifold/TSNE.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L373)

___

### min\_grad\_norm

• `Optional` **min\_grad\_norm**: `number`

If the gradient norm is below this threshold, the optimization will be stopped.

**`Default Value`**

`1e-7`

#### Defined in

[generated/manifold/TSNE.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L361)

___

### n\_components

• `Optional` **n\_components**: `number`

Dimension of the embedded space.

**`Default Value`**

`2`

#### Defined in

[generated/manifold/TSNE.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L319)

___

### n\_iter

• `Optional` **n\_iter**: `number`

Maximum number of iterations for the optimization. Should be at least 250.

**`Default Value`**

`1000`

#### Defined in

[generated/manifold/TSNE.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L347)

___

### n\_iter\_without\_progress

• `Optional` **n\_iter\_without\_progress**: `number`

Maximum number of iterations without progress before we abort the optimization, used after 250 initial iterations with early exaggeration. Note that progress is only checked every 50 iterations so this value is rounded to the next multiple of 50.

**`Default Value`**

`300`

#### Defined in

[generated/manifold/TSNE.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L354)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run for neighbors search. This parameter has no impact when `metric="precomputed"` or (`metric="euclidean"` and `method="exact"`). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/manifold/TSNE.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L411)

___

### perplexity

• `Optional` **perplexity**: `number`

The perplexity is related to the number of nearest neighbors that is used in other manifold learning algorithms. Larger datasets usually require a larger perplexity. Consider selecting a value between 5 and 50. Different values can result in significantly different results. The perplexity must be less than the number of samples.

**`Default Value`**

`30`

#### Defined in

[generated/manifold/TSNE.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L326)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines the random number generator. Pass an int for reproducible results across multiple function calls. Note that different initializations might result in different local minima of the cost function. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/manifold/TSNE.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L392)

___

### square\_distances

• `Optional` **square\_distances**: `boolean`

This parameter has no effect since distance values are always squared since 1.1.

**`Default Value`**

`'deprecated'`

#### Defined in

[generated/manifold/TSNE.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L418)

___

### verbose

• `Optional` **verbose**: `number`

Verbosity level.

**`Default Value`**

`0`

#### Defined in

[generated/manifold/TSNE.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L387)
