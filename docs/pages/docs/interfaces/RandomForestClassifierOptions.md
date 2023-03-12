# RandomForestClassifierOptions

## Properties

### bootstrap?

> `boolean`

Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree.

#### Default Value

`true`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L679)

### ccp\_alpha?

> `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

#### Default Value

`0`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L732)

### class\_weight?

> `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.

Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`

The “balanced\_subsample” mode is the same as “balanced” except that weights are computed based on the bootstrap sample for every tree grown.

For multi-output, the weights of each column of y will be multiplied.

Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.

Defined in:  [generated/ensemble/RandomForestClassifier.ts:725](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L725)

### criterion?

> `"gini"` \| `"entropy"` \| `"log_loss"`

The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see [Mathematical formulation](../tree.html#tree-mathematical-formulation). Note: This parameter is tree-specific.

#### Default Value

`'gini'`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L625)

### max\_depth?

> `number`

The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

Defined in:  [generated/ensemble/RandomForestClassifier.ts:630](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L630)

### max\_features?

> `number` \| `"sqrt"` \| `"log2"`

The number of features to consider when looking for the best split:

#### Default Value

`'sqrt'`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L658)

### max\_leaf\_nodes?

> `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

Defined in:  [generated/ensemble/RandomForestClassifier.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L663)

### max\_samples?

> `number`

If bootstrap is `true`, the number of samples to draw from X to train each base estimator.

Defined in:  [generated/ensemble/RandomForestClassifier.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L737)

### min\_impurity\_decrease?

> `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

The weighted impurity decrease equation is the following:

#### Default Value

`0`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:672](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L672)

### min\_samples\_leaf?

> `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

#### Default Value

`1`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L644)

### min\_samples\_split?

> `number`

The minimum number of samples required to split an internal node:

#### Default Value

`2`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L637)

### min\_weight\_fraction\_leaf?

> `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

#### Default Value

`0`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L651)

### n\_estimators?

> `number`

The number of trees in the forest.

#### Default Value

`100`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L618)

### n\_jobs?

> `number`

The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomForestClassifier.fit "sklearn.ensemble.RandomForestClassifier.fit"), [`predict`](#sklearn.ensemble.RandomForestClassifier.predict "sklearn.ensemble.RandomForestClassifier.predict"), [`decision\_path`](#sklearn.ensemble.RandomForestClassifier.decision_path "sklearn.ensemble.RandomForestClassifier.decision_path") and [`apply`](#sklearn.ensemble.RandomForestClassifier.apply "sklearn.ensemble.RandomForestClassifier.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/ensemble/RandomForestClassifier.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L691)

### oob\_score?

> `boolean`

Whether to use out-of-bag samples to estimate the generalization score. Only available if bootstrap=`true`.

#### Default Value

`false`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:686](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L686)

### random\_state?

> `number`

Controls both the randomness of the bootstrapping of the samples used when building trees (if `bootstrap=True`) and the sampling of the features to consider when looking for the best split at each node (if `max\_features < n\_features`). See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/ensemble/RandomForestClassifier.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L696)

### verbose?

> `number`

Controls the verbosity when fitting and predicting.

#### Default Value

`0`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L703)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [Glossary](../../glossary.html#term-warm_start) and [Fitting additional weak-learners](../ensemble.html#gradient-boosting-warm-start) for details.

#### Default Value

`false`

Defined in:  [generated/ensemble/RandomForestClassifier.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L710)
