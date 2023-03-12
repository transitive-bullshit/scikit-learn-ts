[sklearn](../readme.md) / [Exports](../modules.md) / LabelPropagationFitOptions

# Interface: LabelPropagationFitOptions

## Table of contents

### Properties

- [X](LabelPropagationFitOptions.md#x)
- [y](LabelPropagationFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L467)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction\_`.

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L472)
