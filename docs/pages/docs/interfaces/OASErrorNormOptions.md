# OASErrorNormOptions

## Properties

### comp\_cov?

> [`ArrayLike`](../types/ArrayLike.md)[]

The covariance to compare with.

Defined in:  [generated/covariance/OAS.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/OAS.ts#L397)

### norm?

> `"frobenius"` \| `"spectral"`

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

#### Default Value

`'frobenius'`

Defined in:  [generated/covariance/OAS.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/OAS.ts#L404)

### scaling?

> `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

#### Default Value

`true`

Defined in:  [generated/covariance/OAS.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/OAS.ts#L411)

### squared?

> `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

#### Default Value

`true`

Defined in:  [generated/covariance/OAS.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/OAS.ts#L418)
