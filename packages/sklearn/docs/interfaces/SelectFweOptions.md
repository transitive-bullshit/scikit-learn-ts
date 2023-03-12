[sklearn](../readme.md) / [Exports](../modules.md) / SelectFweOptions

# Interface: SelectFweOptions

## Table of contents

### Properties

- [alpha](SelectFweOptions.md#alpha)
- [score\_func](SelectFweOptions.md#score_func)

## Properties

### alpha

• `Optional` **alpha**: `number`

The highest uncorrected p-value for features to keep.

**`Default Value`**

`0.05`

#### Defined in

[generated/feature_selection/SelectFwe.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L415)

___

### score\_func

• `Optional` **score\_func**: `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). Default is f\_classif (see below “See Also”). The default function only works with classification tasks.

#### Defined in

[generated/feature_selection/SelectFwe.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L408)
