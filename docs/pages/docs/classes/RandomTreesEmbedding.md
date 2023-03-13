# RandomTreesEmbedding

An ensemble of totally random trees.

An unsupervised transformation of a dataset to a high-dimensional sparse representation. A datapoint is coded according to which leaf of each tree it is sorted into. Using a one-hot encoding of the leaves, this leads to a binary coding with as many ones as there are trees in the forest.

The dimensionality of the resulting representation is `n\_out <= n\_estimators \* max\_leaf\_nodes`. If `max\_leaf\_nodes \== None`, the number of leaf nodes is at most `n\_estimators \* 2 \*\* max\_depth`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomTreesEmbedding.html)

## Constructors

## constructor()

### Signature

```ts
new RandomTreesEmbedding(opts?: object): RandomTreesEmbedding;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.max_depth?` | `number` | The maximum depth of each tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.  `Default Value`  `5` |
| `opts.max_leaf_nodes?` | `number` | Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes. |
| `opts.min_impurity_decrease?` | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following:  `Default Value`  `0` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.  `Default Value`  `1` |
| `opts.min_samples_split?` | `number` | The minimum number of samples required to split an internal node:  `Default Value`  `2` |
| `opts.min_weight_fraction_leaf?` | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.  `Default Value`  `0` |
| `opts.n_estimators?` | `number` | Number of trees in the forest.  `Default Value`  `100` |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomTreesEmbedding.fit "sklearn.ensemble.RandomTreesEmbedding.fit"), [`transform`](#sklearn.ensemble.RandomTreesEmbedding.transform "sklearn.ensemble.RandomTreesEmbedding.transform"), [`decision\_path`](#sklearn.ensemble.RandomTreesEmbedding.decision_path "sklearn.ensemble.RandomTreesEmbedding.decision_path") and [`apply`](#sklearn.ensemble.RandomTreesEmbedding.apply "sklearn.ensemble.RandomTreesEmbedding.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.random_state?` | `number` | Controls the generation of the random `y` used to fit the trees and the draw of the splits for each feature at the trees’ nodes. See Glossary for details. |
| `opts.sparse_output?` | `boolean` | Whether or not to return a sparse CSR matrix, as default behavior, or to return a dense array compatible with dense pipeline operators.  `Default Value`  `true` |
| `opts.verbose?` | `number` | Controls the verbosity when fitting and predicting.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See Glossary and Fitting additional weak-learners for details.  `Default Value`  `false` |

### Returns

[`RandomTreesEmbedding`](RandomTreesEmbedding.md)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L27)

## Methods

### apply()

Apply trees in the forest to X, return leaf indices.

#### Signature

```ts
apply(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L202)

### decision\_path()

Return the decision path in the forest.

#### Signature

```ts
decision_path(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L237)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L185)

### fit()

Fit estimator.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csc\_matrix` for maximum efficiency. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L274)

### fit\_transform()

Fit estimator and transform dataset.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input data used to build forests. Use `dtype=np.float32` for maximum efficiency. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L323)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.ensemble.RandomTreesEmbedding.fit "sklearn.ensemble.RandomTreesEmbedding.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L374)

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

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L125)

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

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L414)

### transform()

Transform dataset.

#### Signature

```ts
transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input data to be transformed. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csr\_matrix` for maximum efficiency. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L451)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L21)

## Accessors

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/RandomTreesEmbedding.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L488)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/RandomTreesEmbedding.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L515)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/RandomTreesEmbedding.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L569)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/RandomTreesEmbedding.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L542)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/RandomTreesEmbedding.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L596)

### one\_hot\_encoder\_

One-hot encoder used to create the sparse embedding.

#### Signature

```ts
one_hot_encoder_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/RandomTreesEmbedding.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L623)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L112)

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

Defined in: [generated/ensemble/RandomTreesEmbedding.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L116)
