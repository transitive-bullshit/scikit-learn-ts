[sklearn](../readme.md) / [Exports](../modules.md) / PatchExtractorOptions

# Interface: PatchExtractorOptions

## Table of contents

### Properties

- [max\_patches](PatchExtractorOptions.md#max_patches)
- [patch\_size](PatchExtractorOptions.md#patch_size)
- [random\_state](PatchExtractorOptions.md#random_state)

## Properties

### max\_patches

• `Optional` **max\_patches**: `number`

The maximum number of patches per image to extract. If `max\_patches` is a float in (0, 1), it is taken to mean a proportion of the total number of patches.

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L165)

___

### patch\_size

• `Optional` **patch\_size**: `any`

The dimensions of one patch.

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L160)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines the random number generator used for random sampling when `max\_patches is not None`. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/feature_extraction/image/PatchExtractor.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L170)
