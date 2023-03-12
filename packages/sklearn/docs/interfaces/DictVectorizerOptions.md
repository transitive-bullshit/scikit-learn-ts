[sklearn](../readme.md) / [Exports](../modules.md) / DictVectorizerOptions

# Interface: DictVectorizerOptions

## Table of contents

### Properties

- [dtype](DictVectorizerOptions.md#dtype)
- [separator](DictVectorizerOptions.md#separator)
- [sort](DictVectorizerOptions.md#sort)
- [sparse](DictVectorizerOptions.md#sparse)

## Properties

### dtype

• `Optional` **dtype**: `any`

The type of feature values. Passed to Numpy array/scipy.sparse matrix constructors as the dtype argument.

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L383)

___

### separator

• `Optional` **separator**: `string`

Separator string used when constructing new features for one-hot coding.

**`Default Value`**

`'='`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L390)

___

### sort

• `Optional` **sort**: `boolean`

Whether `feature\_names\_` and `vocabulary\_` should be sorted when fitting.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L404)

___

### sparse

• `Optional` **sparse**: `boolean`

Whether transform should produce scipy.sparse matrices.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L397)
