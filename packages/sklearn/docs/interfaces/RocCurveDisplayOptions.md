[sklearn](../readme.md) / [Exports](../modules.md) / RocCurveDisplayOptions

# Interface: RocCurveDisplayOptions

## Table of contents

### Properties

- [estimator\_name](RocCurveDisplayOptions.md#estimator_name)
- [fpr](RocCurveDisplayOptions.md#fpr)
- [pos\_label](RocCurveDisplayOptions.md#pos_label)
- [roc\_auc](RocCurveDisplayOptions.md#roc_auc)
- [tpr](RocCurveDisplayOptions.md#tpr)

## Properties

### estimator\_name

• `Optional` **estimator\_name**: `string`

Name of estimator. If `undefined`, the estimator name is not shown.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L323)

___

### fpr

• `Optional` **fpr**: [`ArrayLike`](../modules.md#arraylike)

False positive rate.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L308)

___

### pos\_label

• `Optional` **pos\_label**: `string` \| `number`

The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L328)

___

### roc\_auc

• `Optional` **roc\_auc**: `number`

Area under ROC curve. If `undefined`, the roc\_auc score is not shown.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L318)

___

### tpr

• `Optional` **tpr**: [`ArrayLike`](../modules.md#arraylike)

True positive rate.

#### Defined in

[generated/metrics/RocCurveDisplay.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L313)
