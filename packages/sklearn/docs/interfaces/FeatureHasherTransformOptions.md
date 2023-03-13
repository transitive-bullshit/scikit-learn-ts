# FeatureHasherTransformOptions

## Properties

### raw\_X?

> `any`

Samples. Each sample must be iterable an (e.g., a list or tuple) containing/generating feature names (and optionally values, see the input\_type constructor argument) which will be hashed. raw\_X need not support the len function, so it can be the result of a generator; n\_samples is determined on the fly.

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L296)
