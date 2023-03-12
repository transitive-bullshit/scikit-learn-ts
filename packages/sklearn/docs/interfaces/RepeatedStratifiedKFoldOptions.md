[sklearn](../readme.md) / [Exports](../modules.md) / RepeatedStratifiedKFoldOptions

# Interface: RepeatedStratifiedKFoldOptions

## Table of contents

### Properties

- [n\_repeats](RepeatedStratifiedKFoldOptions.md#n_repeats)
- [n\_splits](RepeatedStratifiedKFoldOptions.md#n_splits)
- [random\_state](RepeatedStratifiedKFoldOptions.md#random_state)

## Properties

### n\_repeats

• `Optional` **n\_repeats**: `number`

Number of times cross-validator needs to be repeated.

**`Default Value`**

`10`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L187)

___

### n\_splits

• `Optional` **n\_splits**: `number`

Number of folds. Must be at least 2.

**`Default Value`**

`5`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L180)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the generation of the random states for each repetition. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L192)
