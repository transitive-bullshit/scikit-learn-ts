# ShuffleSplitOptions

## Properties

### n\_splits?

> `number`

Number of re-shuffling & splitting iterations.

#### Default Value

`10`

Defined in:  [generated/model\_selection/ShuffleSplit.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L168)

### random\_state?

> `number`

Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/model\_selection/ShuffleSplit.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L183)

### test\_size?

> `number`

If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If `undefined`, the value is set to the complement of the train size. If `train\_size` is also `undefined`, it will be set to 0.1.

Defined in:  [generated/model\_selection/ShuffleSplit.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L173)

### train\_size?

> `number`

If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If `undefined`, the value is automatically set to the complement of the test size.

Defined in:  [generated/model\_selection/ShuffleSplit.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L178)
