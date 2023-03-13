# LedoitWolfErrorNormOptions

## Properties

### comp\_cov?

> [`ArrayLike`](../types/ArrayLike.md)[]

The covariance to compare with.

Defined in:  [generated/covariance/LedoitWolf.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L419)

### norm?

> `"frobenius"` \| `"spectral"`

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

#### Default Value

`'frobenius'`

Defined in:  [generated/covariance/LedoitWolf.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L426)

### scaling?

> `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

#### Default Value

`true`

Defined in:  [generated/covariance/LedoitWolf.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L433)

### squared?

> `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

#### Default Value

`true`

Defined in:  [generated/covariance/LedoitWolf.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L440)
