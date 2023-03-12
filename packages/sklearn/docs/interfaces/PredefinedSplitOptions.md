[sklearn](../readme.md) / [Exports](../modules.md) / PredefinedSplitOptions

# Interface: PredefinedSplitOptions

## Table of contents

### Properties

- [test\_fold](PredefinedSplitOptions.md#test_fold)

## Properties

### test\_fold

• `Optional` **test\_fold**: [`ArrayLike`](../modules.md#arraylike)

The entry `test\_fold\[i\]` represents the index of the test set that sample `i` belongs to. It is possible to exclude sample `i` from any test set (i.e. include sample `i` in every training set) by setting `test\_fold\[i\]` equal to -1.

#### Defined in

[generated/model_selection/PredefinedSplit.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L158)
