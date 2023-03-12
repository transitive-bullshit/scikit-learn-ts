[sklearn](../readme.md) / [Exports](../modules.md) / EmpiricalCovarianceOptions

# Interface: EmpiricalCovarianceOptions

## Table of contents

### Properties

- [assume\_centered](EmpiricalCovarianceOptions.md#assume_centered)
- [store\_precision](EmpiricalCovarianceOptions.md#store_precision)

## Properties

### assume\_centered

• `Optional` **assume\_centered**: `boolean`

If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data are centered before computation.

**`Default Value`**

`false`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L418)

___

### store\_precision

• `Optional` **store\_precision**: `boolean`

Specifies if the estimated precision is stored.

**`Default Value`**

`true`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L411)
