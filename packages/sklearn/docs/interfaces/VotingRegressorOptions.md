[sklearn](../readme.md) / [Exports](../modules.md) / VotingRegressorOptions

# Interface: VotingRegressorOptions

## Table of contents

### Properties

- [estimators](VotingRegressorOptions.md#estimators)
- [n\_jobs](VotingRegressorOptions.md#n_jobs)
- [verbose](VotingRegressorOptions.md#verbose)
- [weights](VotingRegressorOptions.md#weights)

## Properties

### estimators

• `Optional` **estimators**: `any`

Invoking the `fit` method on the `VotingRegressor` will fit clones of those original estimators that will be stored in the class attribute `self.estimators\_`. An estimator can be set to `'drop'` using [`set\_params`](#sklearn.ensemble.VotingRegressor.set_params "sklearn.ensemble.VotingRegressor.set_params").

#### Defined in

[generated/ensemble/VotingRegressor.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L404)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/ensemble/VotingRegressor.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L414)

___

### verbose

• `Optional` **verbose**: `boolean`

If `true`, the time elapsed while fitting will be printed as it is completed.

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/VotingRegressor.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L421)

___

### weights

• `Optional` **weights**: [`ArrayLike`](../modules.md#arraylike)

Sequence of weights (`float` or `int`) to weight the occurrences of predicted values before averaging. Uses uniform weights if `undefined`.

#### Defined in

[generated/ensemble/VotingRegressor.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L409)
