[sklearn](../readme.md) / [Exports](../modules.md) / DetCurveDisplayFromPredictionsOptions

# Interface: DetCurveDisplayFromPredictionsOptions

## Table of contents

### Properties

- [ax](DetCurveDisplayFromPredictionsOptions.md#ax)
- [kwargs](DetCurveDisplayFromPredictionsOptions.md#kwargs)
- [name](DetCurveDisplayFromPredictionsOptions.md#name)
- [pos\_label](DetCurveDisplayFromPredictionsOptions.md#pos_label)
- [sample\_weight](DetCurveDisplayFromPredictionsOptions.md#sample_weight)
- [y\_pred](DetCurveDisplayFromPredictionsOptions.md#y_pred)
- [y\_true](DetCurveDisplayFromPredictionsOptions.md#y_true)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L394)

___

### kwargs

• `Optional` **kwargs**: `any`

Additional keywords arguments passed to matplotlib `plot` function.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L399)

___

### name

• `Optional` **name**: `string`

Name of DET curve for labeling. If `undefined`, name will be set to `"Classifier"`.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L389)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L384)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L379)

___

### y\_pred

• `Optional` **y\_pred**: [`ArrayLike`](../modules.md#arraylike)

Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by `decision\_function` on some classifiers).

#### Defined in

[generated/metrics/DetCurveDisplay.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L374)

___

### y\_true

• `Optional` **y\_true**: [`ArrayLike`](../modules.md#arraylike)

True labels.

#### Defined in

[generated/metrics/DetCurveDisplay.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L369)
