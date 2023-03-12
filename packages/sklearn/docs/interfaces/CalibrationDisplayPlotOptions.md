[sklearn](../readme.md) / [Exports](../modules.md) / CalibrationDisplayPlotOptions

# Interface: CalibrationDisplayPlotOptions

## Table of contents

### Properties

- [ax](CalibrationDisplayPlotOptions.md#ax)
- [kwargs](CalibrationDisplayPlotOptions.md#kwargs)
- [name](CalibrationDisplayPlotOptions.md#name)
- [ref\_line](CalibrationDisplayPlotOptions.md#ref_line)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L470)

___

### kwargs

• `Optional` **kwargs**: `any`

Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

#### Defined in

[generated/calibration/CalibrationDisplay.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L487)

___

### name

• `Optional` **name**: `string`

Name for labeling curve. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L475)

___

### ref\_line

• `Optional` **ref\_line**: `boolean`

If `true`, plots a reference line representing a perfectly calibrated classifier.

**`Default Value`**

`true`

#### Defined in

[generated/calibration/CalibrationDisplay.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L482)
