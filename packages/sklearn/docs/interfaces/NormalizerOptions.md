[sklearn](../readme.md) / [Exports](../modules.md) / NormalizerOptions

# Interface: NormalizerOptions

## Table of contents

### Properties

- [copy](NormalizerOptions.md#copy)
- [norm](NormalizerOptions.md#norm)

## Properties

### copy

• `Optional` **copy**: `boolean`

Set to `false` to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/Normalizer.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Normalizer.ts#L324)

___

### norm

• `Optional` **norm**: ``"l1"`` \| ``"l2"`` \| ``"max"``

The norm to use to normalize each non zero sample. If norm=’max’ is used, values will be rescaled by the maximum of the absolute values.

**`Default Value`**

`'l2'`

#### Defined in

[generated/preprocessing/Normalizer.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Normalizer.ts#L317)
