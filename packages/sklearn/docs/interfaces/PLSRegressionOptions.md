[sklearn](../readme.md) / [Exports](../modules.md) / PLSRegressionOptions

# Interface: PLSRegressionOptions

## Table of contents

### Properties

- [copy](PLSRegressionOptions.md#copy)
- [max\_iter](PLSRegressionOptions.md#max_iter)
- [n\_components](PLSRegressionOptions.md#n_components)
- [scale](PLSRegressionOptions.md#scale)
- [tol](PLSRegressionOptions.md#tol)

## Properties

### copy

• `Optional` **copy**: `boolean`

Whether to copy `X` and `Y` in [fit](../../glossary.html#term-fit) before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L691)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations of the power method when `algorithm='nipals'`. Ignored otherwise.

**`Default Value`**

`500`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L677)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

**`Default Value`**

`2`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L663)

___

### scale

• `Optional` **scale**: `boolean`

Whether to scale `X` and `Y`.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L670)

___

### tol

• `Optional` **tol**: `number`

The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.

**`Default Value`**

`0.000001`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L684)
