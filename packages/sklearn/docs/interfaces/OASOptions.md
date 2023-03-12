[sklearn](../readme.md) / [Exports](../modules.md) / OASOptions

# Interface: OASOptions

## Table of contents

### Properties

- [assume\_centered](OASOptions.md#assume_centered)
- [store\_precision](OASOptions.md#store_precision)

## Properties

### assume\_centered

• `Optional` **assume\_centered**: `boolean`

If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data will be centered before computation.

**`Default Value`**

`false`

#### Defined in

[generated/covariance/OAS.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L390)

___

### store\_precision

• `Optional` **store\_precision**: `boolean`

Specify if the estimated precision is stored.

**`Default Value`**

`true`

#### Defined in

[generated/covariance/OAS.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/OAS.ts#L383)
