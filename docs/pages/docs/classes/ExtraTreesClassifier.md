# ExtraTreesClassifier

An extra-trees classifier.

This class implements a meta estimator that fits a number of randomized decision trees (a.k.a. extra-trees) on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new ExtraTreesClassifier(opts?: object): ExtraTreesClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.bootstrap?` | `boolean` | Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree.  `Default Value`  `false` |
| `opts.ccp_alpha?` | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See Minimal Cost-Complexity Pruning for details.  `Default Value`  `0` |
| `opts.class_weight?` | `any` | Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.  Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`  The “balanced\_subsample” mode is the same as “balanced” except that weights are computed based on the bootstrap sample for every tree grown.  For multi-output, the weights of each column of y will be multiplied.  Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified. |
| `opts.criterion?` | `"gini"` \| `"entropy"` \| `"log_loss"` | The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see Mathematical formulation. Note: This parameter is tree-specific.  `Default Value`  `'gini'` |
| `opts.max_depth?` | `number` | The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. |
| `opts.max_features?` | `number` \| `"sqrt"` \| `"log2"` | The number of features to consider when looking for the best split:  `Default Value`  `'sqrt'` |
| `opts.max_leaf_nodes?` | `number` | Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes. |
| `opts.max_samples?` | `number` | If bootstrap is `true`, the number of samples to draw from X to train each base estimator. |
| `opts.min_impurity_decrease?` | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following:  `Default Value`  `0` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.  `Default Value`  `1` |
| `opts.min_samples_split?` | `number` | The minimum number of samples required to split an internal node:  `Default Value`  `2` |
| `opts.min_weight_fraction_leaf?` | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.  `Default Value`  `0` |
| `opts.n_estimators?` | `number` | The number of trees in the forest.  `Default Value`  `100` |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.ExtraTreesClassifier.fit "sklearn.ensemble.ExtraTreesClassifier.fit"), [`predict`](#sklearn.ensemble.ExtraTreesClassifier.predict "sklearn.ensemble.ExtraTreesClassifier.predict"), [`decision\_path`](#sklearn.ensemble.ExtraTreesClassifier.decision_path "sklearn.ensemble.ExtraTreesClassifier.decision_path") and [`apply`](#sklearn.ensemble.ExtraTreesClassifier.apply "sklearn.ensemble.ExtraTreesClassifier.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.oob_score?` | `boolean` | Whether to use out-of-bag samples to estimate the generalization score. Only available if bootstrap=`true`.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Controls 3 sources of randomness: |
| `opts.verbose?` | `number` | Controls the verbosity when fitting and predicting.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See Glossary and Fitting additional weak-learners for details.  `Default Value`  `false` |

### Returns

[`ExtraTreesClassifier`](ExtraTreesClassifier.md)

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L25)

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

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L254)

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

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L289)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L237)

### fit()

Build a forest of trees from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | `ArrayLike` | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L326)

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

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L169)

### predict()

Predict class for X.

The predicted class of an input sample is a vote by the trees in the forest, weighted by their probability estimates. That is, the predicted class is the one with highest mean probability estimate across the trees.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L377)

### predict\_log\_proba()

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the trees in the forest.

#### Signature

```ts
predict_log_proba(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L414)

### predict\_proba()

Predict class probabilities for X.

The predicted class probabilities of an input sample are computed as the mean predicted class probabilities of the trees in the forest. The class probability of a single tree is the fraction of samples of the same class in a leaf.

#### Signature

```ts
predict_proba(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L454)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L493)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L19)

## Accessors

### classes\_

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L596)

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L542)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L569)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L677)

### n\_classes\_

The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).

#### Signature

```ts
n_classes_(): Promise<number | any[]>;
```

#### Returns

`Promise`\<`number` \| `any`[]\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L623)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L650)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L704)

### oob\_decision\_function\_

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_decision_function_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:758](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L758)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L731)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/ExtraTreesClassifier.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L156)

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

Defined in: [generated/ensemble/ExtraTreesClassifier.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L160)
