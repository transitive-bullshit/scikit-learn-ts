[sklearn](../readme.md) / [Exports](../modules.md) / BinarizerOptions

# Interface: BinarizerOptions

## Table of contents

### Properties

- [copy](BinarizerOptions.md#copy)
- [threshold](BinarizerOptions.md#threshold)

## Properties

### copy

• `Optional` **copy**: `boolean`

Set to `false` to perform inplace binarization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/Binarizer.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L323)

___

### threshold

• `Optional` **threshold**: `number`

Feature values below or equal to this are replaced by 0, above it by 1. Threshold may not be less than 0 for operations on sparse matrices.

**`Default Value`**

`0`

#### Defined in

[generated/preprocessing/Binarizer.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L316)
