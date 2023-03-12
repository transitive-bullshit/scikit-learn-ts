[sklearn](../readme.md) / [Exports](../modules.md) / MinCovDetOptions

# Interface: MinCovDetOptions

## Table of contents

### Properties

- [assume\_centered](MinCovDetOptions.md#assume_centered)
- [random\_state](MinCovDetOptions.md#random_state)
- [store\_precision](MinCovDetOptions.md#store_precision)
- [support\_fraction](MinCovDetOptions.md#support_fraction)

## Properties

### assume\_centered

• `Optional` **assume\_centered**: `boolean`

If `true`, the support of the robust location and the covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If `false`, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment.

**`Default Value`**

`false`

#### Defined in

[generated/covariance/MinCovDet.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L566)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/covariance/MinCovDet.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L576)

___

### store\_precision

• `Optional` **store\_precision**: `boolean`

Specify if the estimated precision is stored.

**`Default Value`**

`true`

#### Defined in

[generated/covariance/MinCovDet.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L559)

___

### support\_fraction

• `Optional` **support\_fraction**: `number`

The proportion of points to be included in the support of the raw MCD estimate. Default is `undefined`, which implies that the minimum value of support\_fraction will be used within the algorithm: `(n\_sample + n\_features + 1) / 2`. The parameter must be in the range (0, 1\].

#### Defined in

[generated/covariance/MinCovDet.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L571)
