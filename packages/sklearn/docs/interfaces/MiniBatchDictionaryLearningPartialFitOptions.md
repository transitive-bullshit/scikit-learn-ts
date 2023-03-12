[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchDictionaryLearningPartialFitOptions

# Interface: MiniBatchDictionaryLearningPartialFitOptions

## Table of contents

### Properties

- [X](MiniBatchDictionaryLearningPartialFitOptions.md#x)
- [iter\_offset](MiniBatchDictionaryLearningPartialFitOptions.md#iter_offset)
- [y](MiniBatchDictionaryLearningPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:744](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L744)

___

### iter\_offset

• `Optional` **iter\_offset**: `number`

The number of iteration on data batches that has been performed before this call to `partial\_fit`. This is optional: if no number is passed, the memory of the object is used.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L754)

___

### y

• `Optional` **y**: `any`

Not used, present for API consistency by convention.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:749](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L749)
