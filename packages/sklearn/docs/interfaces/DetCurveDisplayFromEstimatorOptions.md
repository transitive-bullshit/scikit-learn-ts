[sklearn](../readme.md) / [Exports](../modules.md) / DetCurveDisplayFromEstimatorOptions

# Interface: DetCurveDisplayFromEstimatorOptions

## Table of contents

### Properties

- [X](DetCurveDisplayFromEstimatorOptions.md#x)
- [ax](DetCurveDisplayFromEstimatorOptions.md#ax)
- [estimator](DetCurveDisplayFromEstimatorOptions.md#estimator)
- [kwargs](DetCurveDisplayFromEstimatorOptions.md#kwargs)
- [name](DetCurveDisplayFromEstimatorOptions.md#name)
- [pos\_label](DetCurveDisplayFromEstimatorOptions.md#pos_label)
- [response\_method](DetCurveDisplayFromEstimatorOptions.md#response_method)
- [sample\_weight](DetCurveDisplayFromEstimatorOptions.md#sample_weight)
- [y](DetCurveDisplayFromEstimatorOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Input values.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L327)

___

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L357)

___

### estimator

• `Optional` **estimator**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L322)

___

### kwargs

• `Optional` **kwargs**: `any`

Additional keywords arguments passed to matplotlib `plot` function.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L362)

___

### name

• `Optional` **name**: `string`

Name of DET curve for labeling. If `undefined`, use the name of the estimator.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L352)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L347)

___

### response\_method

• `Optional` **response\_method**: ``"decision_function"`` \| ``"auto’} default=’auto"``

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the predicted target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L342)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L337)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L332)
