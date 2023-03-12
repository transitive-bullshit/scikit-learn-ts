[sklearn](../readme.md) / [Exports](../modules.md) / OneVsOneClassifierOptions

# Interface: OneVsOneClassifierOptions

## Table of contents

### Properties

- [estimator](OneVsOneClassifierOptions.md#estimator)
- [n\_jobs](OneVsOneClassifierOptions.md#n_jobs)

## Properties

### estimator

• `Optional` **estimator**: `any`

A regressor or a classifier that implements [fit](../../glossary.html#term-fit). When a classifier is passed, [decision\_function](../../glossary.html#term-decision_function) will be used in priority and it will fallback to [predict\_proba](../../glossary.html#term-predict_proba) if it is not available. When a regressor is passed, [predict](../../glossary.html#term-predict) is used.

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L416)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use for the computation: the `n\_classes \* ( n\_classes \- 1) / 2` OVO problems are computed in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L423)
