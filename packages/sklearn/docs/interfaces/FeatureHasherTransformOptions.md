[sklearn](../readme.md) / [Exports](../modules.md) / FeatureHasherTransformOptions

# Interface: FeatureHasherTransformOptions

## Table of contents

### Properties

- [raw\_X](FeatureHasherTransformOptions.md#raw_x)

## Properties

### raw\_X

• `Optional` **raw\_X**: `any`

Samples. Each sample must be iterable an (e.g., a list or tuple) containing/generating feature names (and optionally values, see the input\_type constructor argument) which will be hashed. raw\_X need not support the len function, so it can be the result of a generator; n\_samples is determined on the fly.

#### Defined in

[generated/feature_extraction/FeatureHasher.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L296)
