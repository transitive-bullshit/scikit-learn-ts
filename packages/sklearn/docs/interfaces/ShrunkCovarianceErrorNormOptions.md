[sklearn](../readme.md) / [Exports](../modules.md) / ShrunkCovarianceErrorNormOptions

# Interface: ShrunkCovarianceErrorNormOptions

## Table of contents

### Properties

- [comp\_cov](ShrunkCovarianceErrorNormOptions.md#comp_cov)
- [norm](ShrunkCovarianceErrorNormOptions.md#norm)
- [scaling](ShrunkCovarianceErrorNormOptions.md#scaling)
- [squared](ShrunkCovarianceErrorNormOptions.md#squared)

## Properties

### comp\_cov

• `Optional` **comp\_cov**: [`ArrayLike`](../modules.md#arraylike)[]

The covariance to compare with.

#### Defined in

[generated/covariance/ShrunkCovariance.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L425)

___

### norm

• `Optional` **norm**: ``"frobenius"`` \| ``"spectral"``

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

**`Default Value`**

`'frobenius'`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L432)

___

### scaling

• `Optional` **scaling**: `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

**`Default Value`**

`true`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L439)

___

### squared

• `Optional` **squared**: `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

**`Default Value`**

`true`

#### Defined in

[generated/covariance/ShrunkCovariance.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L446)
