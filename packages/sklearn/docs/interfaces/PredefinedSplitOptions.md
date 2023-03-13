# PredefinedSplitOptions

## Properties

### test\_fold?

> [`ArrayLike`](../types/ArrayLike.md)

The entry `test\_fold\[i\]` represents the index of the test set that sample `i` belongs to. It is possible to exclude sample `i` from any test set (i.e. include sample `i` in every training set) by setting `test\_fold\[i\]` equal to -1.

Defined in:  [generated/model\_selection/PredefinedSplit.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L158)
