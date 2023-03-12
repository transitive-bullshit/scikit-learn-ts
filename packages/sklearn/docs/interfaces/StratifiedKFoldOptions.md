[sklearn](../readme.md) / [Exports](../modules.md) / StratifiedKFoldOptions

# Interface: StratifiedKFoldOptions

## Table of contents

### Properties

- [n\_splits](StratifiedKFoldOptions.md#n_splits)
- [random\_state](StratifiedKFoldOptions.md#random_state)
- [shuffle](StratifiedKFoldOptions.md#shuffle)

## Properties

### n\_splits

• `Optional` **n\_splits**: `number`

Number of folds. Must be at least 2.

**`Default Value`**

`5`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L168)

___

### random\_state

• `Optional` **random\_state**: `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/StratifiedKFold.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L180)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L175)
