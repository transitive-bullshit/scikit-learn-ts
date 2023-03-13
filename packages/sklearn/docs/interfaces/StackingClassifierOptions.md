# StackingClassifierOptions

## Properties

### cv?

> `number` \| `"prefit"`

Determines the cross-validation splitting strategy used in `cross\_val\_predict` to train `final\_estimator`. Possible inputs for cv are:

Defined in:  [generated/ensemble/StackingClassifier.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L598)

### estimators?

> `any`

Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to ‘drop’ using `set\_params`.

The type of estimator is generally expected to be a classifier. However, one can pass a regressor for some use case (e.g. ordinal regression).

Defined in:  [generated/ensemble/StackingClassifier.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L588)

### final\_estimator?

> `any`

A classifier which will be used to combine the base estimators. The default classifier is a [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression").

Defined in:  [generated/ensemble/StackingClassifier.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L593)

### n\_jobs?

> `number`

The number of jobs to run in parallel all `estimators` `fit`. `undefined` means 1 unless in a `joblib.parallel\_backend` context. -1 means using all processors. See Glossary for more details.

Defined in:  [generated/ensemble/StackingClassifier.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L610)

### passthrough?

> `boolean`

When `false`, only the predictions of estimators will be used as training data for `final\_estimator`. When `true`, the `final\_estimator` is trained on the predictions as well as the original training data.

#### Default Value

`false`

Defined in:  [generated/ensemble/StackingClassifier.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L617)

### stack\_method?

> `"auto"` \| `"predict_proba"` \| `"decision_function"` \| `"predict"`

Methods called for each base estimator. It can be:

#### Default Value

`'auto'`

Defined in:  [generated/ensemble/StackingClassifier.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L605)

### verbose?

> `number`

Verbosity level.

#### Default Value

`0`

Defined in:  [generated/ensemble/StackingClassifier.ts:624](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L624)
