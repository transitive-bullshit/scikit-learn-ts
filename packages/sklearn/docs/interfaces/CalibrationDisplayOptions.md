[sklearn](../readme.md) / [Exports](../modules.md) / CalibrationDisplayOptions

# Interface: CalibrationDisplayOptions

## Table of contents

### Properties

- [estimator\_name](CalibrationDisplayOptions.md#estimator_name)
- [pos\_label](CalibrationDisplayOptions.md#pos_label)
- [prob\_pred](CalibrationDisplayOptions.md#prob_pred)
- [prob\_true](CalibrationDisplayOptions.md#prob_true)
- [y\_prob](CalibrationDisplayOptions.md#y_prob)

## Properties

### estimator\_name

• `Optional` **estimator\_name**: `string`

Name of estimator. If `undefined`, the estimator name is not shown.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L347)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L352)

___

### prob\_pred

• `Optional` **prob\_pred**: [`ArrayLike`](../modules.md#arraylike)

The mean predicted probability in each bin.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L337)

___

### prob\_true

• `Optional` **prob\_true**: [`ArrayLike`](../modules.md#arraylike)

The proportion of samples whose class is the positive class (fraction of positives), in each bin.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L332)

___

### y\_prob

• `Optional` **y\_prob**: [`ArrayLike`](../modules.md#arraylike)

Probability estimates for the positive class, for each sample.

#### Defined in

[generated/calibration/CalibrationDisplay.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L342)
