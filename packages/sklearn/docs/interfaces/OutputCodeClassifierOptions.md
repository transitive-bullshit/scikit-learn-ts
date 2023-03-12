[sklearn](../readme.md) / [Exports](../modules.md) / OutputCodeClassifierOptions

# Interface: OutputCodeClassifierOptions

## Table of contents

### Properties

- [code\_size](OutputCodeClassifierOptions.md#code_size)
- [estimator](OutputCodeClassifierOptions.md#estimator)
- [n\_jobs](OutputCodeClassifierOptions.md#n_jobs)
- [random\_state](OutputCodeClassifierOptions.md#random_state)

## Properties

### code\_size

• `Optional` **code\_size**: `number`

Percentage of the number of classes to be used to create the code book. A number between 0 and 1 will require fewer classifiers than one-vs-the-rest. A number greater than 1 will require more classifiers than one-vs-the-rest.

**`Default Value`**

`1.5`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L348)

___

### estimator

• `Optional` **estimator**: `any`

An estimator object implementing [fit](../../glossary.html#term-fit) and one of [decision\_function](../../glossary.html#term-decision_function) or [predict\_proba](../../glossary.html#term-predict_proba).

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L341)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use for the computation: the multiclass problems are computed in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L360)

___

### random\_state

• `Optional` **random\_state**: `number`

The generator used to initialize the codebook. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L353)
