# SequentialFeatureSelectorOptions

## Properties

### cv?

> `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L506)

### direction?

> `"forward"` \| `"backward"`

Whether to perform forward selection or backward selection.

#### Default Value

`'forward'`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L492)

### estimator?

> `any`

An unfitted estimator.

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L469)

### n\_features\_to\_select?

> `number` \| `"auto"`

If `"auto"`, the behaviour depends on the `tol` parameter:

#### Default Value

`'warn'`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L476)

### n\_jobs?

> `number`

Number of jobs to run in parallel. When evaluating a new feature to add or remove, the cross-validation procedure is parallel over the folds. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L511)

### scoring?

> `string`

A single str (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)) to evaluate the predictions on the test set.

NOTE that when using a custom scorer, it should return a single value.

If `undefined`, the estimator’s score method is used.

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L501)

### tol?

> `number`

If the score is not incremented by at least `tol` between two consecutive feature additions or removals, stop adding or removing.

`tol` can be negative when removing features using `direction="backward"`. It can be useful to reduce the number of features at the cost of a small decrease in the score.

`tol` is enabled only when `n\_features\_to\_select` is `"auto"`.

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L485)
