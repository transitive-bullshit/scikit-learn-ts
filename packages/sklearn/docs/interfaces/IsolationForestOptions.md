[sklearn](../readme.md) / [Exports](../modules.md) / IsolationForestOptions

# Interface: IsolationForestOptions

## Table of contents

### Properties

- [bootstrap](IsolationForestOptions.md#bootstrap)
- [contamination](IsolationForestOptions.md#contamination)
- [max\_features](IsolationForestOptions.md#max_features)
- [max\_samples](IsolationForestOptions.md#max_samples)
- [n\_estimators](IsolationForestOptions.md#n_estimators)
- [n\_jobs](IsolationForestOptions.md#n_jobs)
- [random\_state](IsolationForestOptions.md#random_state)
- [verbose](IsolationForestOptions.md#verbose)
- [warm\_start](IsolationForestOptions.md#warm_start)

## Properties

### bootstrap

• `Optional` **bootstrap**: `boolean`

If `true`, individual trees are fit on random subsets of the training data sampled with replacement. If `false`, sampling without replacement is performed.

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/IsolationForest.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L485)

___

### contamination

• `Optional` **contamination**: `number` \| ``"auto"``

The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Used when fitting to define the threshold on the scores of the samples.

**`Default Value`**

`'auto'`

#### Defined in

[generated/ensemble/IsolationForest.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L471)

___

### max\_features

• `Optional` **max\_features**: `number`

The number of features to draw from X to train each base estimator.

**`Default Value`**

`1`

#### Defined in

[generated/ensemble/IsolationForest.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L478)

___

### max\_samples

• `Optional` **max\_samples**: `number` \| ``"auto"``

If int, then draw `max\_samples` samples.

**`Default Value`**

`'auto'`

#### Defined in

[generated/ensemble/IsolationForest.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L464)

___

### n\_estimators

• `Optional` **n\_estimators**: `number`

The number of base estimators in the ensemble.

**`Default Value`**

`100`

#### Defined in

[generated/ensemble/IsolationForest.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L457)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.IsolationForest.fit "sklearn.ensemble.IsolationForest.fit") and [`predict`](#sklearn.ensemble.IsolationForest.predict "sklearn.ensemble.IsolationForest.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/ensemble/IsolationForest.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L490)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the pseudo-randomness of the selection of the feature and split values for each branching step and each tree in the forest.

Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/ensemble/IsolationForest.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L497)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity of the tree building process.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/IsolationForest.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L504)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/IsolationForest.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L511)
