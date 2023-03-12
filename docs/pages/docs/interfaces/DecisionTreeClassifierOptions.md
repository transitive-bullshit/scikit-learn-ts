# DecisionTreeClassifierOptions

## Properties

### ccp\_alpha?

> `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

#### Default Value

`0`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:748](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L748)

### class\_weight?

> `any`

Weights associated with classes in the form `{class\_label: weight}`. If `undefined`, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.

Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`

For multi-output, the weights of each column of y will be multiplied.

Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.

Defined in:  [generated/tree/DecisionTreeClassifier.ts:741](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L741)

### criterion?

> `"gini"` \| `"entropy"` \| `"log_loss"`

The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see [Mathematical formulation](../tree.html#tree-mathematical-formulation).

#### Default Value

`'gini'`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:671](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L671)

### max\_depth?

> `number`

The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

Defined in:  [generated/tree/DecisionTreeClassifier.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L683)

### max\_features?

> `number` \| `"auto"` \| `"sqrt"` \| `"log2"`

The number of features to consider when looking for the best split:

Defined in:  [generated/tree/DecisionTreeClassifier.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L709)

### max\_leaf\_nodes?

> `number`

Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

Defined in:  [generated/tree/DecisionTreeClassifier.ts:719](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L719)

### min\_impurity\_decrease?

> `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

The weighted impurity decrease equation is the following:

#### Default Value

`0`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:728](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L728)

### min\_samples\_leaf?

> `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

#### Default Value

`1`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L697)

### min\_samples\_split?

> `number`

The minimum number of samples required to split an internal node:

#### Default Value

`2`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:690](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L690)

### min\_weight\_fraction\_leaf?

> `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

#### Default Value

`0`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L704)

### random\_state?

> `number`

Controls the randomness of the estimator. The features are always randomly permuted at each split, even if `splitter` is set to `"best"`. When `max\_features < n\_features`, the algorithm will select `max\_features` at random at each split before finding the best split among them. But the best found split may vary across different runs, even if `max\_features=n\_features`. That is the case, if the improvement of the criterion is identical for several splits and one split has to be selected at random. To obtain a deterministic behaviour during fitting, `random\_state` has to be fixed to an integer. See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/tree/DecisionTreeClassifier.ts:714](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L714)

### splitter?

> `"random"` \| `"best"`

The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.

#### Default Value

`'best'`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L678)
