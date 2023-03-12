[sklearn](../readme.md) / [Exports](../modules.md) / DummyRegressorOptions

# Interface: DummyRegressorOptions

## Table of contents

### Properties

- [constant](DummyRegressorOptions.md#constant)
- [quantile](DummyRegressorOptions.md#quantile)
- [strategy](DummyRegressorOptions.md#strategy)

## Properties

### constant

• `Optional` **constant**: `number` \| [`ArrayLike`](../modules.md#arraylike)

The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy.

#### Defined in

[generated/dummy/DummyRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L257)

___

### quantile

• `Optional` **quantile**: `number`

The quantile to predict using the “quantile” strategy. A quantile of 0.5 corresponds to the median, while 0.0 to the minimum and 1.0 to the maximum.

#### Defined in

[generated/dummy/DummyRegressor.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L262)

___

### strategy

• `Optional` **strategy**: ``"quantile"`` \| ``"constant"`` \| ``"mean"`` \| ``"median"``

Strategy to use to generate predictions.

**`Default Value`**

`'mean'`

#### Defined in

[generated/dummy/DummyRegressor.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L252)
