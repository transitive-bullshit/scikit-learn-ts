[sklearn](../readme.md) / [Exports](../modules.md) / EllipticEnvelopeErrorNormOptions

# Interface: EllipticEnvelopeErrorNormOptions

## Table of contents

### Properties

- [comp\_cov](EllipticEnvelopeErrorNormOptions.md#comp_cov)
- [norm](EllipticEnvelopeErrorNormOptions.md#norm)
- [scaling](EllipticEnvelopeErrorNormOptions.md#scaling)
- [squared](EllipticEnvelopeErrorNormOptions.md#squared)

## Properties

### comp\_cov

• `Optional` **comp\_cov**: [`ArrayLike`](../modules.md#arraylike)[]

The covariance to compare with.

#### Defined in

[generated/covariance/EllipticEnvelope.ts:821](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L821)

___

### norm

• `Optional` **norm**: ``"frobenius"`` \| ``"spectral"``

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

**`Default Value`**

`'frobenius'`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:828](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L828)

___

### scaling

• `Optional` **scaling**: `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

**`Default Value`**

`true`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:835](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L835)

___

### squared

• `Optional` **squared**: `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

**`Default Value`**

`true`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:842](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L842)
