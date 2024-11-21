# Class: MDS

Multidimensional scaling.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#multidimensional-scaling).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.MDS.html)

## Constructors

### new MDS()

> **new MDS**(`opts`?): [`MDS`](MDS.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.dissimilarity`? | `"euclidean"` \| `"precomputed"` | Dissimilarity measure to use: |
| `opts.eps`? | `number` | Relative tolerance with respect to stress at which to declare convergence. The value of `eps` should be tuned separately depending on whether or not `normalized_stress` is being used. |
| `opts.max_iter`? | `number` | Maximum number of iterations of the SMACOF algorithm for a single run. |
| `opts.metric`? | `boolean` | If `true`, perform metric MDS; otherwise, perform nonmetric MDS. When `false` (i.e. non-metric MDS), dissimilarities with 0 are considered as missing values. |
| `opts.n_components`? | `number` | Number of dimensions in which to immerse the dissimilarities. |
| `opts.n_init`? | `number` | Number of times the SMACOF algorithm will be run with different initializations. The final results will be the best output of the runs, determined by the run with the smallest final stress. |
| `opts.n_jobs`? | `number` | The number of jobs to use for the computation. If multiple initializations are used (`n_init`), each run of the algorithm is computed in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.normalized_stress`? | `boolean` \| `"auto” default=”auto"` | Whether use and return normed stress value (Stress-1) instead of raw stress calculated by default. Only supported in non-metric MDS. |
| `opts.random_state`? | `number` | Determines the random number generator used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.verbose`? | `number` | Level of verbosity. |

**Returns** [`MDS`](MDS.md)

**Defined in** [generated/manifold/MDS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/manifold/MDS.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/manifold/MDS.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/manifold/MDS.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L19) |
| `id` | `string` | `undefined` | [generated/manifold/MDS.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L16) |
| `opts` | `any` | `undefined` | [generated/manifold/MDS.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L17) |

## Accessors

### dissimilarity\_matrix\_

**Get Signature**

> **get** **dissimilarity\_matrix\_**(): `Promise`\<`ArrayLike`[]\>

Pairwise dissimilarities between the points. Symmetric matrix that:

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/manifold/MDS.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L359)

***

### embedding\_

**Get Signature**

> **get** **embedding\_**(): `Promise`\<`ArrayLike`[]\>

Stores the position of the dataset in the embedding space.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/manifold/MDS.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L315)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/MDS.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L407)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/manifold/MDS.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L384)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The number of iterations corresponding to the best stress.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/manifold/MDS.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L430)

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

**Defined in** [generated/manifold/MDS.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L94)

***

### stress\_

**Get Signature**

> **get** **stress\_**(): `Promise`\<`number`\>

The final value of the stress (sum of squared distance of the disparities and the distances for all constrained points). If `normalized_stress=True`, and `metric=False` returns Stress-1. A value of 0 indicates “perfect” fit, 0.025 excellent, 0.05 good, 0.1 fair, and 0.2 poor [\[1\]](https://scikit-learn.org/stable/modules/generated/#r77760563872b-1).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/manifold/MDS.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L337)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/manifold/MDS.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L145)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the position of the points in the embedding space.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.init`? | `ArrayLike`[] | Starting configuration of the embedding to initialize the SMACOF algorithm. By default, the algorithm is initialized with a randomly chosen array. |
| `opts.X`? | `ArrayLike`[] | Input data. If `dissimilarity=='precomputed'`, the input should be the dissimilarity matrix. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/MDS.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L162)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit the data from `X`, and returns the embedded coordinates.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.init`? | `ArrayLike`[] | Starting configuration of the embedding to initialize the SMACOF algorithm. By default, the algorithm is initialized with a randomly chosen array. |
| `opts.X`? | `ArrayLike`[] | Input data. If `dissimilarity=='precomputed'`, the input should be the dissimilarity matrix. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/manifold/MDS.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L203)

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

**Defined in** [generated/manifold/MDS.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L247)

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

**Defined in** [generated/manifold/MDS.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L107)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.init`? | `string` \| `boolean` | Metadata routing for `init` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/MDS.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/MDS.ts#L283)
