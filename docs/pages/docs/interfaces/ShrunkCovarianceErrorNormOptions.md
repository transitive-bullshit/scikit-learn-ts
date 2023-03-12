# ShrunkCovarianceErrorNormOptions

## Properties

### comp\_cov?

> [`ArrayLike`](../types/ArrayLike.md)[]

The covariance to compare with.

Defined in:  [generated/covariance/ShrunkCovariance.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L425)

### norm?

> `"frobenius"` \| `"spectral"`

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

#### Default Value

`'frobenius'`

Defined in:  [generated/covariance/ShrunkCovariance.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L432)

### scaling?

> `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

#### Default Value

`true`

Defined in:  [generated/covariance/ShrunkCovariance.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L439)

### squared?

> `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

#### Default Value

`true`

Defined in:  [generated/covariance/ShrunkCovariance.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L446)
