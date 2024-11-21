[**sklearn**](../README.md) • **Docs**

***

A random forest classifier.

A random forest is a meta estimator that fits a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. Trees in the forest use the best split strategy, i.e. equivalent to passing `splitter="best"` to the underlying [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor"). The sub-sample size is controlled with the `max\_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

For a comparison between tree-based ensemble models see the example [Comparing Random Forests and Histogram Gradient Boosting models](../../auto_examples/ensemble/plot_forest_hist_grad_boosting_comparison.html#sphx-glr-auto-examples-ensemble-plot-forest-hist-grad-boosting-comparison-py).

Read more in the [User Guide](../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)

## Constructors

### new RandomForestClassifier()

> **new RandomForestClassifier**(`opts`?): [`RandomForestClassifier`](RandomForestClassifier.md)

#### Parameters

• **opts?**

• **opts.bootstrap?**: `boolean`

Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree.

**Default Value**

`true`

• **opts.ccp\_alpha?**: `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

**Default Value**

`0`

• **opts.class\_weight?**: `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.

Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`

The “balanced\_subsample” mode is the same as “balanced” except that weights are computed based on the bootstrap sample for every tree grown.

For multi-output, the weights of each column of y will be multiplied.

Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.

• **opts.criterion?**: `"gini"` \| `"entropy"` \| `"log_loss"`

The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see [Mathematical formulation](../tree.html#tree-mathematical-formulation). Note: This parameter is tree-specific.

**Default Value**

`'gini'`

• **opts.max\_depth?**: `number`

The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

• **opts.max\_features?**: `number` \| `"sqrt"` \| `"log2"`

The number of features to consider when looking for the best split:

**Default Value**

`'sqrt'`

• **opts.max\_leaf\_nodes?**: `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

• **opts.max\_samples?**: `number`

If bootstrap is `true`, the number of samples to draw from X to train each base estimator.

• **opts.min\_impurity\_decrease?**: `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

The weighted impurity decrease equation is the following:

**Default Value**

`0`

• **opts.min\_samples\_leaf?**: `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

**Default Value**

`1`

• **opts.min\_samples\_split?**: `number`

The minimum number of samples required to split an internal node:

**Default Value**

`2`

• **opts.min\_weight\_fraction\_leaf?**: `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

**Default Value**

`0`

• **opts.monotonic\_cst?**: `any`[]

1: monotonic increase

• **opts.n\_estimators?**: `number`

The number of trees in the forest.

**Default Value**

`100`

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomForestClassifier.fit "sklearn.ensemble.RandomForestClassifier.fit"), [`predict`](#sklearn.ensemble.RandomForestClassifier.predict "sklearn.ensemble.RandomForestClassifier.predict"), [`decision\_path`](#sklearn.ensemble.RandomForestClassifier.decision_path "sklearn.ensemble.RandomForestClassifier.decision_path") and [`apply`](#sklearn.ensemble.RandomForestClassifier.apply "sklearn.ensemble.RandomForestClassifier.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.oob\_score?**: `boolean`

Whether to use out-of-bag samples to estimate the generalization score. By default, [`accuracy\_score`](sklearn.metrics.accuracy_score.html#sklearn.metrics.accuracy_score "sklearn.metrics.accuracy_score") is used. Provide a callable with signature `metric(y\_true, y\_pred)` to use a custom metric. Only available if `bootstrap=True`.

**Default Value**

`false`

• **opts.random\_state?**: `number`

Controls both the randomness of the bootstrapping of the samples used when building trees (if `bootstrap=True`) and the sampling of the features to consider when looking for the best split at each node (if `max\_features < n\_features`). See [Glossary](../../glossary.html#term-random_state) for details.

• **opts.verbose?**: `number`

Controls the verbosity when fitting and predicting.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [Glossary](../../glossary.html#term-warm_start) and [Fitting additional trees](../ensemble.html#tree-ensemble-warm-start) for details.

**Default Value**

`false`

#### Returns

[`RandomForestClassifier`](RandomForestClassifier.md)

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L21)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L682)

***

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L628)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L655)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:763](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L763)

***

### n\_classes\_

#### Get Signature

> **get** **n\_classes\_**(): `Promise`\<`number` \| `any`[]\>

The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).

##### Returns

`Promise`\<`number` \| `any`[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L709)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:736](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L736)

***

### n\_outputs\_

#### Get Signature

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

The number of outputs when `fit` is performed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:790](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L790)

***

### oob\_decision\_function\_

#### Get Signature

> **get** **oob\_decision\_function\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:844](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L844)

***

### oob\_score\_

#### Get Signature

> **get** **oob\_score\_**(): `Promise`\<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:817](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L817)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L163)

## Methods

### apply()

> **apply**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L236)

***

### decision\_path()

> **decision\_path**(`opts`): `Promise`\<`any`[]\>

Return the decision path in the forest.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L270)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L219)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a forest of trees from the training set (X, y).

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target values (class labels in classification, real numbers in regression).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L306)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L352)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L176)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict class for X.

The predicted class of an input sample is a vote by the trees in the forest, weighted by their probability estimates. That is, the predicted class is the one with highest mean probability estimate across the trees.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L390)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`any`\>

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the trees in the forest.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L428)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Predict class probabilities for X.

The predicted class probabilities of an input sample are computed as the mean predicted class probabilities of the trees in the forest. The class probability of a single tree is the fraction of samples of the same class in a leaf.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L466)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Test samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L504)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L552)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:592](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L592)
