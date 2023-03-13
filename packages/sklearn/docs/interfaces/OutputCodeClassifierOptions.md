# OutputCodeClassifierOptions

## Properties

### code\_size?

> `number`

Percentage of the number of classes to be used to create the code book. A number between 0 and 1 will require fewer classifiers than one-vs-the-rest. A number greater than 1 will require more classifiers than one-vs-the-rest.

#### Default Value

`1.5`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L348)

### estimator?

> `any`

An estimator object implementing [fit](../../glossary.html#term-fit) and one of [decision\_function](../../glossary.html#term-decision_function) or [predict\_proba](../../glossary.html#term-predict_proba).

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L341)

### n\_jobs?

> `number`

The number of jobs to use for the computation: the multiclass problems are computed in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L360)

### random\_state?

> `number`

The generator used to initialize the codebook. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L353)
