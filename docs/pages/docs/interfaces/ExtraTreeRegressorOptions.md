# ExtraTreeRegressorOptions

## Properties

### ccp\_alpha?

> `any`

Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

#### Default Value

`0`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L602)

### criterion?

> `"squared_error"` \| `"absolute_error"` \| `"friedman_mse"` \| `"poisson"`

The function to measure the quality of a split. Supported criteria are “squared\_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman\_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute\_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits.

#### Default Value

`'squared_error'`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L536)

### max\_depth?

> `number`

The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

Defined in:  [generated/tree/ExtraTreeRegressor.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L548)

### max\_features?

> `number` \| `"sqrt"`

The number of features to consider when looking for the best split:

#### Default Value

`1`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L576)

### max\_leaf\_nodes?

> `number`

Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

Defined in:  [generated/tree/ExtraTreeRegressor.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L595)

### min\_impurity\_decrease?

> `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

The weighted impurity decrease equation is the following:

#### Default Value

`0`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L590)

### min\_samples\_leaf?

> `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

#### Default Value

`1`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L562)

### min\_samples\_split?

> `number`

The minimum number of samples required to split an internal node:

#### Default Value

`2`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L555)

### min\_weight\_fraction\_leaf?

> `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

#### Default Value

`0`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L569)

### random\_state?

> `number`

Used to pick randomly the `max\_features` used at each split. See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/tree/ExtraTreeRegressor.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L581)

### splitter?

> `"random"` \| `"best"`

The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.

#### Default Value

`'random'`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L543)
