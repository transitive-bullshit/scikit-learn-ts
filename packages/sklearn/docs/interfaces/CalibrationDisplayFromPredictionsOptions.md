[sklearn](../readme.md) / [Exports](../modules.md) / CalibrationDisplayFromPredictionsOptions

# Interface: CalibrationDisplayFromPredictionsOptions

## Table of contents

### Properties

- [ax](CalibrationDisplayFromPredictionsOptions.md#ax)
- [kwargs](CalibrationDisplayFromPredictionsOptions.md#kwargs)
- [n\_bins](CalibrationDisplayFromPredictionsOptions.md#n_bins)
- [name](CalibrationDisplayFromPredictionsOptions.md#name)
- [pos\_label](CalibrationDisplayFromPredictionsOptions.md#pos_label)
- [ref\_line](CalibrationDisplayFromPredictionsOptions.md#ref_line)
- [strategy](CalibrationDisplayFromPredictionsOptions.md#strategy)
- [y\_prob](CalibrationDisplayFromPredictionsOptions.md#y_prob)
- [y\_true](CalibrationDisplayFromPredictionsOptions.md#y_true)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L458)

___

### kwargs

• `Optional` **kwargs**: `any`

Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

#### Defined in

[generated/calibration/CalibrationDisplay.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L463)

___

### n\_bins

• `Optional` **n\_bins**: `number`

Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.

**`Default Value`**

`5`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L429)

___

### name

• `Optional` **name**: `string`

Name for labeling curve.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L446)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L441)

___

### ref\_line

• `Optional` **ref\_line**: `boolean`

If `true`, plots a reference line representing a perfectly calibrated classifier.

**`Default Value`**

`true`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L453)

___

### strategy

• `Optional` **strategy**: ``"uniform"`` \| ``"quantile"``

Strategy used to define the widths of the bins.

**`Default Value`**

`'uniform'`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L436)

___

### y\_prob

• `Optional` **y\_prob**: [`ArrayLike`](../modules.md#arraylike)

The predicted probabilities of the positive class.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L422)

___

### y\_true

• `Optional` **y\_true**: [`ArrayLike`](../modules.md#arraylike)

True labels.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L417)
