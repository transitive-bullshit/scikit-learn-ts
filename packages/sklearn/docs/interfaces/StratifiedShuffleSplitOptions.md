[sklearn](../readme.md) / [Exports](../modules.md) / StratifiedShuffleSplitOptions

# Interface: StratifiedShuffleSplitOptions

## Table of contents

### Properties

- [n\_splits](StratifiedShuffleSplitOptions.md#n_splits)
- [random\_state](StratifiedShuffleSplitOptions.md#random_state)
- [test\_size](StratifiedShuffleSplitOptions.md#test_size)
- [train\_size](StratifiedShuffleSplitOptions.md#train_size)

## Properties

### n\_splits

• `Optional` **n\_splits**: `number`

Number of re-shuffling & splitting iterations.

**`Default Value`**

`10`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L182)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L197)

___

### test\_size

• `Optional` **test\_size**: `number`

If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If `undefined`, the value is set to the complement of the train size. If `train\_size` is also `undefined`, it will be set to 0.1.

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L187)

___

### train\_size

• `Optional` **train\_size**: `number`

If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If `undefined`, the value is automatically set to the complement of the test size.

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L192)
