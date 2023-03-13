# IsolationForest

Isolation Forest Algorithm.

Return the anomaly score of each sample using the IsolationForest algorithm

The IsolationForest ‘isolates’ observations by randomly selecting a feature and then randomly selecting a split value between the maximum and minimum values of the selected feature.

Since recursive partitioning can be represented by a tree structure, the number of splittings required to isolate a sample is equivalent to the path length from the root node to the terminating node.

This path length, averaged over a forest of such random trees, is a measure of normality and our decision function.

Random partitioning produces noticeably shorter paths for anomalies. Hence, when a forest of random trees collectively produce shorter path lengths for particular samples, they are highly likely to be anomalies.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html)

## Constructors

## constructor()

### Signature

```ts
new IsolationForest(opts?: object): IsolationForest;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.bootstrap?` | `boolean` | If `true`, individual trees are fit on random subsets of the training data sampled with replacement. If `false`, sampling without replacement is performed.  `Default Value`  `false` |
| `opts.contamination?` | `number` \| `"auto"` | The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Used when fitting to define the threshold on the scores of the samples.  `Default Value`  `'auto'` |
| `opts.max_features?` | `number` | The number of features to draw from X to train each base estimator.  `Default Value`  `1` |
| `opts.max_samples?` | `number` \| `"auto"` | If int, then draw `max\_samples` samples.  `Default Value`  `'auto'` |
| `opts.n_estimators?` | `number` | The number of base estimators in the ensemble.  `Default Value`  `100` |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.IsolationForest.fit "sklearn.ensemble.IsolationForest.fit") and [`predict`](#sklearn.ensemble.IsolationForest.predict "sklearn.ensemble.IsolationForest.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.random_state?` | `number` | Controls the pseudo-randomness of the selection of the feature and split values for each branching step and each tree in the forest.  Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.verbose?` | `number` | Controls the verbosity of the tree building process.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See the Glossary.  `Default Value`  `false` |

### Returns

[`IsolationForest`](IsolationForest.md)

Defined in:  [generated/ensemble/IsolationForest.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L33)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/IsolationForest.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L31)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/IsolationForest.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L30)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/IsolationForest.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L29)

### id

> `string`

Defined in:  [generated/ensemble/IsolationForest.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L26)

### opts

> `any`

Defined in:  [generated/ensemble/IsolationForest.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L27)

## Accessors

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/IsolationForest.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L375)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/IsolationForest.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L400)

### estimators\_features\_

The subset of drawn features for each base estimator.

#### Signature

```ts
estimators_features_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/IsolationForest.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L425)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/IsolationForest.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L525)

### max\_samples\_

The actual number of samples.

#### Signature

```ts
max_samples_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/IsolationForest.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L450)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/IsolationForest.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L500)

### offset\_

Offset used to define the decision function from the raw scores. We have the relation: `decision\_function \= score\_samples \- offset\_`. `offset\_` is defined as follows. When the contamination parameter is set to “auto”, the offset is equal to -0.5 as the scores of inliers are close to 0 and the scores of outliers are close to -1. When a contamination parameter different than “auto” is provided, the offset is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.

#### Signature

```ts
offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/IsolationForest.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L475)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/IsolationForest.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L99)

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

Defined in: [generated/ensemble/IsolationForest.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L103)

## Methods

### decision\_function()

Average anomaly score of X of the base classifiers.

The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/IsolationForest.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L183)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/IsolationForest.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L162)

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
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/IsolationForest.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L218)

### fit\_predict()

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/IsolationForest.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L267)

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

Defined in:  [generated/ensemble/IsolationForest.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L112)

### predict()

Predict if a particular sample is an outlier or not.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/IsolationForest.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L305)

### score\_samples()

Opposite of the anomaly score defined in the original paper.

The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/IsolationForest.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L342)
