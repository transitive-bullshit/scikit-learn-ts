# GraphicalLassoErrorNormOptions

## Properties

### comp\_cov?

> [`ArrayLike`](../types/ArrayLike.md)[]

The covariance to compare with.

Defined in:  [generated/covariance/GraphicalLasso.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L456)

### norm?

> `"frobenius"` \| `"spectral"`

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

#### Default Value

`'frobenius'`

Defined in:  [generated/covariance/GraphicalLasso.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L463)

### scaling?

> `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

#### Default Value

`true`

Defined in:  [generated/covariance/GraphicalLasso.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L470)

### squared?

> `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

#### Default Value

`true`

Defined in:  [generated/covariance/GraphicalLasso.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L477)
