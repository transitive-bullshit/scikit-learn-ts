[sklearn](../readme.md) / [Exports](../modules.md) / StandardScalerOptions

# Interface: StandardScalerOptions

## Table of contents

### Properties

- [copy](StandardScalerOptions.md#copy)
- [with\_mean](StandardScalerOptions.md#with_mean)
- [with\_std](StandardScalerOptions.md#with_std)

## Properties

### copy

• `Optional` **copy**: `boolean`

If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/StandardScaler.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L479)

___

### with\_mean

• `Optional` **with\_mean**: `boolean`

If `true`, center the data before scaling. This does not work (and will raise an exception) when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/StandardScaler.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L486)

___

### with\_std

• `Optional` **with\_std**: `boolean`

If `true`, scale the data to unit variance (or equivalently, unit standard deviation).

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/StandardScaler.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L493)
