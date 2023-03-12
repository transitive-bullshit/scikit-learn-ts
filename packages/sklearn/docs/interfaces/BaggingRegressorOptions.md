[sklearn](../readme.md) / [Exports](../modules.md) / BaggingRegressorOptions

# Interface: BaggingRegressorOptions

## Table of contents

### Properties

- [base\_estimator](BaggingRegressorOptions.md#base_estimator)
- [bootstrap](BaggingRegressorOptions.md#bootstrap)
- [bootstrap\_features](BaggingRegressorOptions.md#bootstrap_features)
- [estimator](BaggingRegressorOptions.md#estimator)
- [max\_features](BaggingRegressorOptions.md#max_features)
- [max\_samples](BaggingRegressorOptions.md#max_samples)
- [n\_estimators](BaggingRegressorOptions.md#n_estimators)
- [n\_jobs](BaggingRegressorOptions.md#n_jobs)
- [oob\_score](BaggingRegressorOptions.md#oob_score)
- [random\_state](BaggingRegressorOptions.md#random_state)
- [verbose](BaggingRegressorOptions.md#verbose)
- [warm\_start](BaggingRegressorOptions.md#warm_start)

## Properties

### base\_estimator

• `Optional` **base\_estimator**: `any`

Use `estimator` instead.

**`Default Value`**

`'deprecated'`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L486)

___

### bootstrap

• `Optional` **bootstrap**: `boolean`

Whether samples are drawn with replacement. If `false`, sampling without replacement is performed.

**`Default Value`**

`true`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L441)

___

### bootstrap\_features

• `Optional` **bootstrap\_features**: `boolean`

Whether features are drawn with replacement.

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L448)

___

### estimator

• `Optional` **estimator**: `any`

The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor").

#### Defined in

[generated/ensemble/BaggingRegressor.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L413)

___

### max\_features

• `Optional` **max\_features**: `number`

The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap\_features` for more details).

**`Default Value`**

`1`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L434)

___

### max\_samples

• `Optional` **max\_samples**: `number`

The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).

**`Default Value`**

`1`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L427)

___

### n\_estimators

• `Optional` **n\_estimators**: `number`

The number of base estimators in the ensemble.

**`Default Value`**

`10`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L420)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.BaggingRegressor.fit "sklearn.ensemble.BaggingRegressor.fit") and [`predict`](#sklearn.ensemble.BaggingRegressor.predict "sklearn.ensemble.BaggingRegressor.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/ensemble/BaggingRegressor.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L467)

___

### oob\_score

• `Optional` **oob\_score**: `boolean`

Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L455)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random\_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/ensemble/BaggingRegressor.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L472)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity when fitting and predicting.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L479)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L462)
