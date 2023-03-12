[sklearn](../readme.md) / [Exports](../modules.md) / VarianceThresholdOptions

# Interface: VarianceThresholdOptions

## Table of contents

### Properties

- [threshold](VarianceThresholdOptions.md#threshold)

## Properties

### threshold

• `Optional` **threshold**: `number`

Features with a training-set variance lower than this threshold will be removed. The default is to keep all features with non-zero variance, i.e. remove the features that have the same value in all samples.

**`Default Value`**

`0`

#### Defined in

[generated/feature_selection/VarianceThreshold.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/VarianceThreshold.ts#L419)
