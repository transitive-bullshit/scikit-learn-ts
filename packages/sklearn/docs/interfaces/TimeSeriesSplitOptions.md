# TimeSeriesSplitOptions

## Properties

### gap?

> `number`

Number of samples to exclude from the end of each train set before the test set.

#### Default Value

`0`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L189)

### max\_train\_size?

> `number`

Maximum size for a single training set.

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L177)

### n\_splits?

> `number`

Number of splits. Must be at least 2.

#### Default Value

`5`

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L172)

### test\_size?

> `number`

Used to limit the size of the test set. Defaults to `n\_samples // (n\_splits + 1)`, which is the maximum allowed value with `gap=0`.

Defined in:  [generated/model\_selection/TimeSeriesSplit.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L182)
