[sklearn](../readme.md) / [Exports](../modules.md) / RepeatedKFoldOptions

# Interface: RepeatedKFoldOptions

## Table of contents

### Properties

- [n\_repeats](RepeatedKFoldOptions.md#n_repeats)
- [n\_splits](RepeatedKFoldOptions.md#n_splits)
- [random\_state](RepeatedKFoldOptions.md#random_state)

## Properties

### n\_repeats

• `Optional` **n\_repeats**: `number`

Number of times cross-validator needs to be repeated.

**`Default Value`**

`10`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L175)

___

### n\_splits

• `Optional` **n\_splits**: `number`

Number of folds. Must be at least 2.

**`Default Value`**

`5`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L168)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the randomness of each repeated cross-validation instance. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/RepeatedKFold.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L180)
