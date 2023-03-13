# MDS

Multidimensional scaling.

Read more in the [User Guide](../manifold.html#multidimensional-scaling).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.MDS.html)

## Constructors

## constructor()

### Signature

```ts
new MDS(opts?: object): MDS;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.dissimilarity?` | `"euclidean"` \| `"precomputed"` | Dissimilarity measure to use:  `Default Value`  `'euclidean'` |
| `opts.eps?` | `number` | Relative tolerance with respect to stress at which to declare convergence. The value of `eps` should be tuned separately depending on whether or not `normalized\_stress` is being used.  `Default Value`  `0.001` |
| `opts.max_iter?` | `number` | Maximum number of iterations of the SMACOF algorithm for a single run.  `Default Value`  `300` |
| `opts.metric?` | `boolean` | If `true`, perform metric MDS; otherwise, perform nonmetric MDS. When `false` (i.e. non-metric MDS), dissimilarities with 0 are considered as missing values.  `Default Value`  `true` |
| `opts.n_components?` | `number` | Number of dimensions in which to immerse the dissimilarities.  `Default Value`  `2` |
| `opts.n_init?` | `number` | Number of times the SMACOF algorithm will be run with different initializations. The final results will be the best output of the runs, determined by the run with the smallest final stress.  `Default Value`  `4` |
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation. If multiple initializations are used (`n\_init`), each run of the algorithm is computed in parallel.  `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.normalized_stress?` | `boolean` | Whether use and return normed stress value (Stress-1) instead of raw stress calculated by default. Only supported in non-metric MDS. |
| `opts.random_state?` | `number` | Determines the random number generator used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.verbose?` | `number` | Level of verbosity.  `Default Value`  `0` |

### Returns

[`MDS`](MDS.md)

Defined in:  [generated/manifold/MDS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L23)

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

Defined in:  [generated/manifold/MDS.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L156)

### fit()

Compute the position of the points in the embedding space.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input data. If `dissimilarity=='precomputed'`, the input should be the dissimilarity matrix. |
| `opts.init?` | [`ArrayLike`](../types/ArrayLike.md)[] | Starting configuration of the embedding to initialize the SMACOF algorithm. By default, the algorithm is initialized with a randomly chosen array. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/MDS.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L173)

### fit\_transform()

Fit the data from `X`, and returns the embedded coordinates.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input data. If `dissimilarity=='precomputed'`, the input should be the dissimilarity matrix. |
| `opts.init?` | [`ArrayLike`](../types/ArrayLike.md)[] | Starting configuration of the embedding to initialize the SMACOF algorithm. By default, the algorithm is initialized with a randomly chosen array. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/MDS.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L219)

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

Defined in:  [generated/manifold/MDS.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L107)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/MDS.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/MDS.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/MDS.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L19)

### id

> `string`

Defined in:  [generated/manifold/MDS.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L16)

### opts

> `any`

Defined in:  [generated/manifold/MDS.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L17)

## Accessors

### dissimilarity\_matrix\_

Pairwise dissimilarities between the points. Symmetric matrix that:

#### Signature

```ts
dissimilarity_matrix_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/MDS.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L310)

Defined in:  [generated/manifold/MDS.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L310)

### embedding\_

Stores the position of the dataset in the embedding space.

#### Signature

```ts
embedding_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/MDS.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L266)

Defined in:  [generated/manifold/MDS.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L266)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/MDS.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L358)

Defined in:  [generated/manifold/MDS.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L358)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/MDS.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L335)

Defined in:  [generated/manifold/MDS.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L335)

### n\_iter\_

The number of iterations corresponding to the best stress.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/MDS.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L381)

Defined in:  [generated/manifold/MDS.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L381)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/MDS.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L94)

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

Defined in:  [generated/manifold/MDS.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L98)

Defined in:  [generated/manifold/MDS.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L94) [generated/manifold/MDS.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L98)

### stress\_

The final value of the stress (sum of squared distance of the disparities and the distances for all constrained points). If `normalized\_stress=True`, and `metric=False` returns Stress-1. A value of 0 indicates “perfect” fit, 0.025 excellent, 0.05 good, 0.1 fair, and 0.2 poor [\[1\]](#r77760563872b-1).

#### Signature

```ts
stress_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/MDS.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L288)

Defined in:  [generated/manifold/MDS.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/manifold/MDS.ts#L288)
