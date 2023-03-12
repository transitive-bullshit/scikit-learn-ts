[sklearn](../readme.md) / [Exports](../modules.md) / RocCurveDisplayFromEstimatorOptions

# Interface: RocCurveDisplayFromEstimatorOptions

## Table of contents

### Properties

- [X](RocCurveDisplayFromEstimatorOptions.md#x)
- [ax](RocCurveDisplayFromEstimatorOptions.md#ax)
- [drop\_intermediate](RocCurveDisplayFromEstimatorOptions.md#drop_intermediate)
- [estimator](RocCurveDisplayFromEstimatorOptions.md#estimator)
- [kwargs](RocCurveDisplayFromEstimatorOptions.md#kwargs)
- [name](RocCurveDisplayFromEstimatorOptions.md#name)
- [pos\_label](RocCurveDisplayFromEstimatorOptions.md#pos_label)
- [response\_method](RocCurveDisplayFromEstimatorOptions.md#response_method)
- [sample\_weight](RocCurveDisplayFromEstimatorOptions.md#sample_weight)
- [y](RocCurveDisplayFromEstimatorOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Input values.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L340)

___

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L377)

___

### drop\_intermediate

• `Optional` **drop\_intermediate**: `boolean`

Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

**`Default Value`**

`true`

#### Defined in

[generated/metrics/RocCurveDisplay.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L357)

___

### estimator

• `Optional` **estimator**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L335)

___

### kwargs

• `Optional` **kwargs**: `any`

Keyword arguments to be passed to matplotlib’s `plot`.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L382)

___

### name

• `Optional` **name**: `string`

Name of ROC Curve for labeling. If `undefined`, use the name of the estimator.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L372)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L367)

___

### response\_method

• `Optional` **response\_method**: ``"decision_function"`` \| ``"auto’} default=’auto"``

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L362)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L350)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L345)
