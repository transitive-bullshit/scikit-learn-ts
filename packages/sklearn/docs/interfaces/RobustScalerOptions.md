[sklearn](../readme.md) / [Exports](../modules.md) / RobustScalerOptions

# Interface: RobustScalerOptions

## Table of contents

### Properties

- [copy](RobustScalerOptions.md#copy)
- [quantile\_range](RobustScalerOptions.md#quantile_range)
- [unit\_variance](RobustScalerOptions.md#unit_variance)
- [with\_centering](RobustScalerOptions.md#with_centering)
- [with\_scaling](RobustScalerOptions.md#with_scaling)

## Properties

### copy

• `Optional` **copy**: `boolean`

If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/RobustScaler.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L412)

___

### quantile\_range

• `Optional` **quantile\_range**: `any`

Quantile range used to calculate `scale\_`. By default this is equal to the IQR, i.e., `q\_min` is the first quantile and `q\_max` is the third quantile.

#### Defined in

[generated/preprocessing/RobustScaler.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L405)

___

### unit\_variance

• `Optional` **unit\_variance**: `boolean`

If `true`, scale data so that normally distributed features have a variance of 1. In general, if the difference between the x-values of `q\_max` and `q\_min` for a standard normal distribution is greater than 1, the dataset will be scaled down. If less than 1, the dataset will be scaled up.

**`Default Value`**

`false`

#### Defined in

[generated/preprocessing/RobustScaler.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L419)

___

### with\_centering

• `Optional` **with\_centering**: `boolean`

If `true`, center the data before scaling. This will cause [`transform`](#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") to raise an exception when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/RobustScaler.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L393)

___

### with\_scaling

• `Optional` **with\_scaling**: `boolean`

If `true`, scale the data to interquartile range.

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/RobustScaler.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/RobustScaler.ts#L400)