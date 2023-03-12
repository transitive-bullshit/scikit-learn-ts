[sklearn](../readme.md) / [Exports](../modules.md) / PrecisionRecallDisplayFromEstimatorOptions

# Interface: PrecisionRecallDisplayFromEstimatorOptions

## Table of contents

### Properties

- [X](PrecisionRecallDisplayFromEstimatorOptions.md#x)
- [ax](PrecisionRecallDisplayFromEstimatorOptions.md#ax)
- [estimator](PrecisionRecallDisplayFromEstimatorOptions.md#estimator)
- [kwargs](PrecisionRecallDisplayFromEstimatorOptions.md#kwargs)
- [name](PrecisionRecallDisplayFromEstimatorOptions.md#name)
- [pos\_label](PrecisionRecallDisplayFromEstimatorOptions.md#pos_label)
- [response\_method](PrecisionRecallDisplayFromEstimatorOptions.md#response_method)
- [sample\_weight](PrecisionRecallDisplayFromEstimatorOptions.md#sample_weight)
- [y](PrecisionRecallDisplayFromEstimatorOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Input values.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L353)

___

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L385)

___

### estimator

• `Optional` **estimator**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L348)

___

### kwargs

• `Optional` **kwargs**: `any`

Keyword arguments to be passed to matplotlib’s `plot`.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L390)

___

### name

• `Optional` **name**: `string`

Name for labeling curve. If `undefined`, no name is used.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L380)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L368)

___

### response\_method

• `Optional` **response\_method**: ``"auto"`` \| ``"predict_proba"`` \| ``"decision_function"``

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

**`Default Value`**

`'auto'`

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L375)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L363)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L358)
