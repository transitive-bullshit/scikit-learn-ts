# SelfTrainingClassifierOptions

## Properties

### base\_estimator?

> `any`

An estimator object implementing `fit` and `predict\_proba`. Invoking the `fit` method will fit a clone of the passed estimator, which will be stored in the `base\_estimator\_` attribute.

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L531)

### criterion?

> `"threshold"` \| `"k_best"`

The selection criterion used to select which labels to add to the training set. If `'threshold'`, pseudo-labels with prediction probabilities above `threshold` are added to the dataset. If `'k\_best'`, the `k\_best` pseudo-labels with highest prediction probabilities are added to the dataset. When using the ‘threshold’ criterion, a [well calibrated classifier](../calibration.html#calibration) should be used.

#### Default Value

`'threshold'`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L545)

### k\_best?

> `number`

The amount of samples to add in each iteration. Only used when `criterion='k\_best'`.

#### Default Value

`10`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L552)

### max\_iter?

> `number`

Maximum number of iterations allowed. Should be greater than or equal to 0. If it is `undefined`, the classifier will continue to predict labels until no new pseudo-labels are added, or all unlabeled samples have been labeled.

#### Default Value

`10`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L559)

### threshold?

> `number`

The decision threshold for use with `criterion='threshold'`. Should be in \[0, 1). When using the `'threshold'` criterion, a [well calibrated classifier](../calibration.html#calibration) should be used.

#### Default Value

`0.75`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L538)

### verbose?

> `boolean`

Enable verbose output.

#### Default Value

`false`

Defined in:  [generated/semi\_supervised/SelfTrainingClassifier.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L566)
