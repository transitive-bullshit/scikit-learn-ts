[sklearn](../readme.md) / [Exports](../modules.md) / KFoldOptions

# Interface: KFoldOptions

## Table of contents

### Properties

- [n\_splits](KFoldOptions.md#n_splits)
- [random\_state](KFoldOptions.md#random_state)
- [shuffle](KFoldOptions.md#shuffle)

## Properties

### n\_splits

• `Optional` **n\_splits**: `number`

Number of folds. Must be at least 2.

**`Default Value`**

`5`

#### Defined in

[generated/model_selection/KFold.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/KFold.ts#L167)

___

### random\_state

• `Optional` **random\_state**: `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/KFold.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/KFold.ts#L179)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether to shuffle the data before splitting into batches. Note that the samples within each split will not be shuffled.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/KFold.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/KFold.ts#L174)
