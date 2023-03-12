[sklearn](../readme.md) / [Exports](../modules.md) / CCAOptions

# Interface: CCAOptions

## Table of contents

### Properties

- [copy](CCAOptions.md#copy)
- [max\_iter](CCAOptions.md#max_iter)
- [n\_components](CCAOptions.md#n_components)
- [scale](CCAOptions.md#scale)
- [tol](CCAOptions.md#tol)

## Properties

### copy

• `Optional` **copy**: `boolean`

Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/CCA.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L608)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations of the power method.

**`Default Value`**

`500`

#### Defined in

[generated/cross_decomposition/CCA.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L594)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

**`Default Value`**

`2`

#### Defined in

[generated/cross_decomposition/CCA.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L580)

___

### scale

• `Optional` **scale**: `boolean`

Whether to scale `X` and `Y`.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/CCA.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L587)

___

### tol

• `Optional` **tol**: `number`

The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.

**`Default Value`**

`0.000001`

#### Defined in

[generated/cross_decomposition/CCA.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L601)
