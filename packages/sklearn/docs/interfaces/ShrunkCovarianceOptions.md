# ShrunkCovarianceOptions

## Properties

### assume\_centered?

> `boolean`

If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data will be centered before computation.

#### Default Value

`false`

Defined in:  [generated/covariance/ShrunkCovariance.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L411)

### shrinkage?

> `number`

Coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].

#### Default Value

`0.1`

Defined in:  [generated/covariance/ShrunkCovariance.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L418)

### store\_precision?

> `boolean`

Specify if the estimated precision is stored.

#### Default Value

`true`

Defined in:  [generated/covariance/ShrunkCovariance.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/ShrunkCovariance.ts#L404)
