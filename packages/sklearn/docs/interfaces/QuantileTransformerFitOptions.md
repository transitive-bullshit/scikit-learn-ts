[sklearn](../readme.md) / [Exports](../modules.md) / QuantileTransformerFitOptions

# Interface: QuantileTransformerFitOptions

## Table of contents

### Properties

- [X](QuantileTransformerFitOptions.md#x)
- [y](QuantileTransformerFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`. Additionally, the sparse matrix needs to be nonnegative if `ignore\_implicit\_zeros` is `false`.

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L497)

___

### y

• `Optional` **y**: `any`

Ignored.

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L502)
