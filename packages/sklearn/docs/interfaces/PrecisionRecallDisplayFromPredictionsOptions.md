[sklearn](../readme.md) / [Exports](../modules.md) / PrecisionRecallDisplayFromPredictionsOptions

# Interface: PrecisionRecallDisplayFromPredictionsOptions

## Table of contents

### Properties

- [ax](PrecisionRecallDisplayFromPredictionsOptions.md#ax)
- [kwargs](PrecisionRecallDisplayFromPredictionsOptions.md#kwargs)
- [name](PrecisionRecallDisplayFromPredictionsOptions.md#name)
- [pos\_label](PrecisionRecallDisplayFromPredictionsOptions.md#pos_label)
- [sample\_weight](PrecisionRecallDisplayFromPredictionsOptions.md#sample_weight)
- [y\_pred](PrecisionRecallDisplayFromPredictionsOptions.md#y_pred)
- [y\_true](PrecisionRecallDisplayFromPredictionsOptions.md#y_true)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L422)

___

### kwargs

• `Optional` **kwargs**: `any`

Keyword arguments to be passed to matplotlib’s `plot`.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L427)

___

### name

• `Optional` **name**: `string`

Name for labeling curve. If `undefined`, name will be set to `"Classifier"`.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L417)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The class considered as the positive class when computing the precision and recall metrics.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L412)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L407)

___

### y\_pred

• `Optional` **y\_pred**: [`ArrayLike`](../modules.md#arraylike)

Estimated probabilities or output of decision function.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L402)

___

### y\_true

• `Optional` **y\_true**: [`ArrayLike`](../modules.md#arraylike)

True binary labels.

#### Defined in

[generated/metrics/PrecisionRecallDisplay.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L397)
