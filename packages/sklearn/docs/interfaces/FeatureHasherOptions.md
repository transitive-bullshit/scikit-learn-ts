# FeatureHasherOptions

## Properties

### alternate\_sign?

> `boolean`

When `true`, an alternating sign is added to the features as to approximately conserve the inner product in the hashed space even for small n\_features. This approach is similar to sparse random projection.

#### Default Value

`true`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L253)

### dtype?

> `any`

The type of feature values. Passed to scipy.sparse matrix constructors as the dtype argument. Do not set this to bool, np.boolean or any unsigned integer type.

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L246)

### input\_type?

> `string`

Choose a string from {‘dict’, ‘pair’, ‘string’}. Either “dict” (the default) to accept dictionaries over (feature\_name, value); “pair” to accept pairs of (feature\_name, value); or “string” to accept single strings. feature\_name should be a string, while value should be a number. In the case of “string”, a value of 1 is implied. The feature\_name is hashed to find the appropriate column for the feature. The value’s sign might be flipped in the output (but see non\_negative, below).

#### Default Value

`'dict'`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L241)

### n\_features?

> `number`

The number of features (columns) in the output matrices. Small numbers of features are likely to cause hash collisions, but large numbers will cause larger coefficient dimensions in linear learners.

#### Default Value

`2`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L234)
