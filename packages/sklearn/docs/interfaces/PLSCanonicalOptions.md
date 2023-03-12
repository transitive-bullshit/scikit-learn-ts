[sklearn](../readme.md) / [Exports](../modules.md) / PLSCanonicalOptions

# Interface: PLSCanonicalOptions

## Table of contents

### Properties

- [algorithm](PLSCanonicalOptions.md#algorithm)
- [copy](PLSCanonicalOptions.md#copy)
- [max\_iter](PLSCanonicalOptions.md#max_iter)
- [n\_components](PLSCanonicalOptions.md#n_components)
- [scale](PLSCanonicalOptions.md#scale)
- [tol](PLSCanonicalOptions.md#tol)

## Properties

### algorithm

• `Optional` **algorithm**: ``"nipals"`` \| ``"svd"``

The algorithm used to estimate the first singular vectors of the cross-covariance matrix. ‘nipals’ uses the power method while ‘svd’ will compute the whole SVD.

**`Default Value`**

`'nipals'`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L625)

___

### copy

• `Optional` **copy**: `boolean`

Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L646)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations of the power method when `algorithm='nipals'`. Ignored otherwise.

**`Default Value`**

`500`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L632)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

**`Default Value`**

`2`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L611)

___

### scale

• `Optional` **scale**: `boolean`

Whether to scale `X` and `Y`.

**`Default Value`**

`true`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L618)

___

### tol

• `Optional` **tol**: `number`

The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.

**`Default Value`**

`0.000001`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L639)
