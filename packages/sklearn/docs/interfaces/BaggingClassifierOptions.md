# BaggingClassifierOptions

## Properties

### base\_estimator?

> `any`

Use `estimator` instead.

#### Default Value

`'deprecated'`

Defined in:  [generated/ensemble/BaggingClassifier.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L648)

### bootstrap?

> `boolean`

Whether samples are drawn with replacement. If `false`, sampling without replacement is performed.

#### Default Value

`true`

Defined in:  [generated/ensemble/BaggingClassifier.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L603)

### bootstrap\_features?

> `boolean`

Whether features are drawn with replacement.

#### Default Value

`false`

Defined in:  [generated/ensemble/BaggingClassifier.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L610)

### estimator?

> `any`

The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier").

Defined in:  [generated/ensemble/BaggingClassifier.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L575)

### max\_features?

> `number`

The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap\_features` for more details).

#### Default Value

`1`

Defined in:  [generated/ensemble/BaggingClassifier.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L596)

### max\_samples?

> `number`

The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).

#### Default Value

`1`

Defined in:  [generated/ensemble/BaggingClassifier.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L589)

### n\_estimators?

> `number`

The number of base estimators in the ensemble.

#### Default Value

`10`

Defined in:  [generated/ensemble/BaggingClassifier.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L582)

### n\_jobs?

> `number`

The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.BaggingClassifier.fit "sklearn.ensemble.BaggingClassifier.fit") and [`predict`](#sklearn.ensemble.BaggingClassifier.predict "sklearn.ensemble.BaggingClassifier.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/ensemble/BaggingClassifier.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L629)

### oob\_score?

> `boolean`

Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.

#### Default Value

`false`

Defined in:  [generated/ensemble/BaggingClassifier.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L617)

### random\_state?

> `number`

Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random\_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/ensemble/BaggingClassifier.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L634)

### verbose?

> `number`

Controls the verbosity when fitting and predicting.

#### Default Value

`0`

Defined in:  [generated/ensemble/BaggingClassifier.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L641)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/ensemble/BaggingClassifier.ts:624](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L624)
