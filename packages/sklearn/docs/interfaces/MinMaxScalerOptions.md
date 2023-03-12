[sklearn](../readme.md) / [Exports](../modules.md) / MinMaxScalerOptions

# Interface: MinMaxScalerOptions

## Table of contents

### Properties

- [clip](MinMaxScalerOptions.md#clip)
- [copy](MinMaxScalerOptions.md#copy)
- [feature\_range](MinMaxScalerOptions.md#feature_range)

## Properties

### clip

• `Optional` **clip**: `boolean`

Set to `true` to clip transformed values of held-out data to provided `feature range`.

**`Default Value`**

`false`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L529)

___

### copy

• `Optional` **copy**: `boolean`

Set to `false` to perform inplace row normalization and avoid a copy (if the input is already a numpy array).

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L522)

___

### feature\_range

• `Optional` **feature\_range**: `any`

Desired range of transformed data.

#### Defined in

[generated/preprocessing/MinMaxScaler.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L515)
