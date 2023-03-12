[sklearn](../readme.md) / [Exports](../modules.md) / MultiOutputClassifierOptions

# Interface: MultiOutputClassifierOptions

## Table of contents

### Properties

- [estimator](MultiOutputClassifierOptions.md#estimator)
- [n\_jobs](MultiOutputClassifierOptions.md#n_jobs)

## Properties

### estimator

• `Optional` **estimator**: `any`

An estimator object implementing [fit](../../glossary.html#term-fit) and [predict](../../glossary.html#term-predict). A [predict\_proba](../../glossary.html#term-predict_proba) method will be exposed only if `estimator` implements it.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L391)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to run in parallel. [`fit`](#sklearn.multioutput.MultiOutputClassifier.fit "sklearn.multioutput.MultiOutputClassifier.fit"), [`predict`](#sklearn.multioutput.MultiOutputClassifier.predict "sklearn.multioutput.MultiOutputClassifier.predict") and [`partial\_fit`](#sklearn.multioutput.MultiOutputClassifier.partial_fit "sklearn.multioutput.MultiOutputClassifier.partial_fit") (if supported by the passed estimator) will be parallelized for each target.

When individual estimators are fast to train or predict, using `n\_jobs > 1` can result in slower performance due to the parallelism overhead.

`undefined` means `1` unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all available processes / threads. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L400)
