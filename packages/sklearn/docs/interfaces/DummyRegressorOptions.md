# DummyRegressorOptions

## Properties

### constant?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy.

Defined in:  [generated/dummy/DummyRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L257)

### quantile?

> `number`

The quantile to predict using the “quantile” strategy. A quantile of 0.5 corresponds to the median, while 0.0 to the minimum and 1.0 to the maximum.

Defined in:  [generated/dummy/DummyRegressor.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L262)

### strategy?

> `"quantile"` \| `"constant"` \| `"mean"` \| `"median"`

Strategy to use to generate predictions.

#### Default Value

`'mean'`

Defined in:  [generated/dummy/DummyRegressor.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L252)
