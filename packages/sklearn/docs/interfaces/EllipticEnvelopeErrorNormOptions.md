# EllipticEnvelopeErrorNormOptions

## Properties

### comp\_cov?

> [`ArrayLike`](../types/ArrayLike.md)[]

The covariance to compare with.

Defined in:  [generated/covariance/EllipticEnvelope.ts:821](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L821)

### norm?

> `"frobenius"` \| `"spectral"`

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

#### Default Value

`'frobenius'`

Defined in:  [generated/covariance/EllipticEnvelope.ts:828](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L828)

### scaling?

> `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

#### Default Value

`true`

Defined in:  [generated/covariance/EllipticEnvelope.ts:835](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L835)

### squared?

> `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

#### Default Value

`true`

Defined in:  [generated/covariance/EllipticEnvelope.ts:842](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L842)
