[sklearn](../readme.md) / [Exports](../modules.md) / PLSSVDOptions

# Interface: PLSSVDOptions

## Table of contents

### Properties

- [copy](PLSSVDOptions.md#copy)
- [n\_components](PLSSVDOptions.md#n_components)
- [scale](PLSSVDOptions.md#scale)

## Properties

### copy

• `Optional` **copy**: `boolean`

Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L365)

___

### n\_components

• `Optional` **n\_components**: `number`

The number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

**`Default Value`**

`2`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L351)

___

### scale

• `Optional` **scale**: `boolean`

Whether to scale `X` and `Y`.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/PLSSVD.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L358)
