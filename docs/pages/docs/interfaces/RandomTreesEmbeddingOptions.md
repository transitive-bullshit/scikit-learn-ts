# RandomTreesEmbeddingOptions

## Properties

### max\_depth?

> `number`

The maximum depth of each tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

#### Default Value

`5`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L534)

### max\_leaf\_nodes?

> `number`

Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L560)

### min\_impurity\_decrease?

> `number`

A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

The weighted impurity decrease equation is the following:

#### Default Value

`0`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L569)

### min\_samples\_leaf?

> `number`

The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

#### Default Value

`1`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L548)

### min\_samples\_split?

> `number`

The minimum number of samples required to split an internal node:

#### Default Value

`2`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L541)

### min\_weight\_fraction\_leaf?

> `number`

The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

#### Default Value

`0`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L555)

### n\_estimators?

> `number`

Number of trees in the forest.

#### Default Value

`100`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L527)

### n\_jobs?

> `number`

The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomTreesEmbedding.fit "sklearn.ensemble.RandomTreesEmbedding.fit"), [`transform`](#sklearn.ensemble.RandomTreesEmbedding.transform "sklearn.ensemble.RandomTreesEmbedding.transform"), [`decision\_path`](#sklearn.ensemble.RandomTreesEmbedding.decision_path "sklearn.ensemble.RandomTreesEmbedding.decision_path") and [`apply`](#sklearn.ensemble.RandomTreesEmbedding.apply "sklearn.ensemble.RandomTreesEmbedding.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L581)

### random\_state?

> `number`

Controls the generation of the random `y` used to fit the trees and the draw of the splits for each feature at the trees’ nodes. See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L586)

### sparse\_output?

> `boolean`

Whether or not to return a sparse CSR matrix, as default behavior, or to return a dense array compatible with dense pipeline operators.

#### Default Value

`true`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L576)

### verbose?

> `number`

Controls the verbosity when fitting and predicting.

#### Default Value

`0`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L593)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [Glossary](../../glossary.html#term-warm_start) and [Fitting additional weak-learners](../ensemble.html#gradient-boosting-warm-start) for details.

#### Default Value

`false`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L600)
