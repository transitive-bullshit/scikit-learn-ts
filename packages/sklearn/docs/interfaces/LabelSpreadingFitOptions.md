[sklearn](../readme.md) / [Exports](../modules.md) / LabelSpreadingFitOptions

# Interface: LabelSpreadingFitOptions

## Table of contents

### Properties

- [X](LabelSpreadingFitOptions.md#x)
- [y](LabelSpreadingFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L456)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction\_`.

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L461)
