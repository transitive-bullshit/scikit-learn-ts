# KFoldOptions

## Properties

### n\_splits?

> `number`

Number of folds. Must be at least 2.

#### Default Value

`5`

Defined in:  [generated/model\_selection/KFold.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/KFold.ts#L167)

### random\_state?

> `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/model\_selection/KFold.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/KFold.ts#L179)

### shuffle?

> `boolean`

Whether to shuffle the data before splitting into batches. Note that the samples within each split will not be shuffled.

#### Default Value

`false`

Defined in:  [generated/model\_selection/KFold.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/KFold.ts#L174)
