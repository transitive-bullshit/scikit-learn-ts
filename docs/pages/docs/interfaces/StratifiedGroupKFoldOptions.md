# StratifiedGroupKFoldOptions

## Properties

### n\_splits?

> `number`

Number of folds. Must be at least 2.

#### Default Value

`5`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L182)

### random\_state?

> `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L194)

### shuffle?

> `boolean`

Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled. This implementation can only shuffle groups that have approximately the same y distribution, no global shuffle will be performed.

#### Default Value

`false`

Defined in:  [generated/model\_selection/StratifiedGroupKFold.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L189)
