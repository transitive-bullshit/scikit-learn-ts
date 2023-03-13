# DecisionTreeClassifier

A decision tree classifier.

Read more in the [User Guide](../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new DecisionTreeClassifier(opts?: object): DecisionTreeClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.ccp_alpha?` | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.  `Default Value`  `0` |
| `opts.class_weight?` | `any` | Weights associated with classes in the form `{class\_label: weight}`. If `undefined`, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.  Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`  For multi-output, the weights of each column of y will be multiplied.  Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified. |
| `opts.criterion?` | `"gini"` \| `"entropy"` \| `"log_loss"` | The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see [Mathematical formulation](../tree.html#tree-mathematical-formulation).  `Default Value`  `'gini'` |
| `opts.max_depth?` | `number` | The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. |
| `opts.max_features?` | `number` \| `"auto"` \| `"sqrt"` \| `"log2"` | The number of features to consider when looking for the best split: |
| `opts.max_leaf_nodes?` | `number` | Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes. |
| `opts.min_impurity_decrease?` | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value.  The weighted impurity decrease equation is the following:  `Default Value`  `0` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.  `Default Value`  `1` |
| `opts.min_samples_split?` | `number` | The minimum number of samples required to split an internal node:  `Default Value`  `2` |
| `opts.min_weight_fraction_leaf?` | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.  `Default Value`  `0` |
| `opts.random_state?` | `number` | Controls the randomness of the estimator. The features are always randomly permuted at each split, even if `splitter` is set to `"best"`. When `max\_features < n\_features`, the algorithm will select `max\_features` at random at each split before finding the best split among them. But the best found split may vary across different runs, even if `max\_features=n\_features`. That is the case, if the improvement of the criterion is identical for several splits and one split has to be selected at random. To obtain a deterministic behaviour during fitting, `random\_state` has to be fixed to an integer. See [Glossary](../../glossary.html#term-random_state) for details. |
| `opts.splitter?` | `"random"` \| `"best"` | The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.  `Default Value`  `'best'` |

### Returns

[`DecisionTreeClassifier`](DecisionTreeClassifier.md)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L17)

## Accessors

### classes\_

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L655)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L655)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:763](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L763)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:763](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L763)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L682)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L682)

### n\_classes\_

The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L709)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L709)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:736](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L736)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:736](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L736)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:790](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L790)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:790](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L790)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L112)

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

Defined in:  [generated/tree/DecisionTreeClassifier.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L116)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L112) [generated/tree/DecisionTreeClassifier.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L116)

### tree\_

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:817](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L817)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:817](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L817)

## Methods

### apply()

Return the index of the leaf that each sample is predicted as.

#### Signature

```ts
apply(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L204)

### cost\_complexity\_pruning\_path()

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Signature

```ts
cost_complexity_pruning_path(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target values (class labels) as integers or strings. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L250)

### decision\_path()

Return the decision path in the tree.

#### Signature

```ts
decision_path(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L302)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L187)

### fit()

Build a decision tree classifier from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target values (class labels) as integers or strings. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L349)

### get\_depth()

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Signature

```ts
get_depth(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L409)

### get\_n\_leaves()

Return the number of leaves of the decision tree.

#### Signature

```ts
get_n_leaves(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L439)

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

Defined in:  [generated/tree/DecisionTreeClassifier.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L125)

### predict()

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L471)

### predict\_log\_proba()

Predict class log-probabilities of the input samples X.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L517)

### predict\_proba()

Predict class probabilities of the input samples X.

The predicted class probability is the fraction of samples of the same class in a leaf.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.check_input?` | `boolean` | Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.  `Default Value`  `true` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L557)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L606)
