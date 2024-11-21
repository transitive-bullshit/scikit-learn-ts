**sklearn** • **Docs**

***

An extremely randomized tree classifier.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeClassifier.html)

## Constructors

### new ExtraTreeClassifier()

> **new ExtraTreeClassifier**(`opts`?): [`ExtraTreeClassifier`](ExtraTreeClassifier.md)

#### Parameters

• **opts?**

• **opts.ccp\_alpha?**: `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See Minimal Cost-Complexity Pruning for details.

**Default Value**

`0`

• **opts.class\_weight?**: `any`

Weights associated with classes in the form `{class\_label: weight}`. If `undefined`, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.

Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`

For multi-output, the weights of each column of y will be multiplied.

Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.

• **opts.criterion?**: `"gini"` \| `"entropy"` \| `"log_loss"`

The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see Mathematical formulation.

**Default Value**

`'gini'`

• **opts.max\_depth?**: `number`

The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

• **opts.max\_features?**: `number`

The number of features to consider when looking for the best split:

**Default Value**

`'sqrt'`

• **opts.max\_leaf\_nodes?**: `number`

Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

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

• **opts.random\_state?**: `number`

Used to pick randomly the `max\_features` used at each split. See Glossary for details.

• **opts.splitter?**: `"random"` \| `"best"`

The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.

**Default Value**

`'random'`

#### Returns

[`ExtraTreeClassifier`](ExtraTreeClassifier.md)

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L21)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:812](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L812)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:920](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L920)

***

### max\_features\_

#### Get Signature

> **get** **max\_features\_**(): `Promise`\<`number`\>

The inferred value of max\_features.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:839](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L839)

***

### n\_classes\_

#### Get Signature

> **get** **n\_classes\_**(): `Promise`\<`number`\>

The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:866](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L866)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:893](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L893)

***

### n\_outputs\_

#### Get Signature

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

The number of outputs when `fit` is performed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:947](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L947)

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

[generated/tree/ExtraTreeClassifier.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L123)

***

### tree\_

#### Get Signature

> **get** **tree\_**(): `Promise`\<`any`\>

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and Understanding the decision tree structure for basic usage of these attributes.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:974](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L974)

## Methods

### apply()

> **apply**(`opts`): `Promise`\<`ArrayLike`\>

Return the index of the leaf that each sample is predicted as.

#### Parameters

• **opts**

• **opts.check\_input?**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**Default Value**

`true`

• **opts.X?**: `ArrayLike`

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L196)

***

### cost\_complexity\_pruning\_path()

> **cost\_complexity\_pruning\_path**(`opts`): `Promise`\<`any`\>

Compute the pruning path during Minimal Cost-Complexity Pruning.

See Minimal Cost-Complexity Pruning for details on the pruning process.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

• **opts.X?**: `ArrayLike`

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

• **opts.y?**: `ArrayLike`

The target values (class labels) as integers or strings.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L239)

***

### decision\_path()

> **decision\_path**(`opts`): `Promise`\<`any`[]\>

Return the decision path in the tree.

#### Parameters

• **opts**

• **opts.check\_input?**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**Default Value**

`true`

• **opts.X?**: `ArrayLike`

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L285)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L179)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a decision tree classifier from the training set (X, y).

#### Parameters

• **opts**

• **opts.check\_input?**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**Default Value**

`true`

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

• **opts.X?**: `ArrayLike`

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

• **opts.y?**: `ArrayLike`

The target values (class labels) as integers or strings.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L328)

***

### get\_depth()

> **get\_depth**(`opts`): `Promise`\<`any`\>

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L381)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L411)

***

### get\_n\_leaves()

> **get\_n\_leaves**(`opts`): `Promise`\<`any`\>

Return the number of leaves of the decision tree.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L447)

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

[generated/tree/ExtraTreeClassifier.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L136)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Parameters

• **opts**

• **opts.check\_input?**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**Default Value**

`true`

• **opts.X?**: `ArrayLike`

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L479)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict class log-probabilities of the input samples X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L520)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict class probabilities of the input samples X.

The predicted class probability is the fraction of samples of the same class in a leaf.

#### Parameters

• **opts**

• **opts.check\_input?**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**Default Value**

`true`

• **opts.X?**: `ArrayLike`

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L558)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Test samples.

• **opts.y?**: `ArrayLike`

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L603)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.check\_input?**: `string` \| `boolean`

Metadata routing for `check\_input` parameter in `fit`.

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L651)

***

### set\_predict\_proba\_request()

> **set\_predict\_proba\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict\_proba` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.check\_input?**: `string` \| `boolean`

Metadata routing for `check\_input` parameter in `predict\_proba`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L696)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.check\_input?**: `string` \| `boolean`

Metadata routing for `check\_input` parameter in `predict`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:736](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L736)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:776](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L776)
