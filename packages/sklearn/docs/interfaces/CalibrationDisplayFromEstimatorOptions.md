[sklearn](../readme.md) / [Exports](../modules.md) / CalibrationDisplayFromEstimatorOptions

# Interface: CalibrationDisplayFromEstimatorOptions

## Table of contents

### Properties

- [X](CalibrationDisplayFromEstimatorOptions.md#x)
- [ax](CalibrationDisplayFromEstimatorOptions.md#ax)
- [estimator](CalibrationDisplayFromEstimatorOptions.md#estimator)
- [kwargs](CalibrationDisplayFromEstimatorOptions.md#kwargs)
- [n\_bins](CalibrationDisplayFromEstimatorOptions.md#n_bins)
- [name](CalibrationDisplayFromEstimatorOptions.md#name)
- [pos\_label](CalibrationDisplayFromEstimatorOptions.md#pos_label)
- [ref\_line](CalibrationDisplayFromEstimatorOptions.md#ref_line)
- [strategy](CalibrationDisplayFromEstimatorOptions.md#strategy)
- [y](CalibrationDisplayFromEstimatorOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Input values.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L364)

___

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L405)

___

### estimator

• `Optional` **estimator**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. The classifier must have a [predict\_proba](../../glossary.html#term-predict_proba) method.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L359)

___

### kwargs

• `Optional` **kwargs**: `any`

Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

#### Defined in

[generated/calibration/CalibrationDisplay.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L410)

___

### n\_bins

• `Optional` **n\_bins**: `number`

Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.

**`Default Value`**

`5`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L376)

___

### name

• `Optional` **name**: `string`

Name for labeling curve. If `undefined`, the name of the estimator is used.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L393)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L388)

___

### ref\_line

• `Optional` **ref\_line**: `boolean`

If `true`, plots a reference line representing a perfectly calibrated classifier.

**`Default Value`**

`true`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L400)

___

### strategy

• `Optional` **strategy**: ``"uniform"`` \| ``"quantile"``

Strategy used to define the widths of the bins.

**`Default Value`**

`'uniform'`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L383)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Binary target values.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L369)
