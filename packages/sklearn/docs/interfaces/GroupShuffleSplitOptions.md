# GroupShuffleSplitOptions

## Properties

### n\_splits?

> `number`

Number of re-shuffling & splitting iterations.

#### Default Value

`5`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L184)

### random\_state?

> `number`

Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L201)

### test\_size?

> `number`

If float, should be between 0.0 and 1.0 and represent the proportion of groups to include in the test split (rounded up). If int, represents the absolute number of test groups. If `undefined`, the value is set to the complement of the train size. The default will change in version 0.21. It will remain 0.2 only if `train\_size` is unspecified, otherwise it will complement the specified `train\_size`.

#### Default Value

`0.2`

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L191)

### train\_size?

> `number`

If float, should be between 0.0 and 1.0 and represent the proportion of the groups to include in the train split. If int, represents the absolute number of train groups. If `undefined`, the value is automatically set to the complement of the test size.

Defined in:  [generated/model\_selection/GroupShuffleSplit.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GroupShuffleSplit.ts#L196)
