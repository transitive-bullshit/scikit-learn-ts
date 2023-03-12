[sklearn](../readme.md) / [Exports](../modules.md) / SelectFdrOptions

# Interface: SelectFdrOptions

## Table of contents

### Properties

- [alpha](SelectFdrOptions.md#alpha)
- [score\_func](SelectFdrOptions.md#score_func)

## Properties

### alpha

• `Optional` **alpha**: `number`

The highest uncorrected p-value for features to keep.

**`Default Value`**

`0.05`

#### Defined in

[generated/feature_selection/SelectFdr.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L417)

___

### score\_func

• `Optional` **score\_func**: `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). Default is f\_classif (see below “See Also”). The default function only works with classification tasks.

#### Defined in

[generated/feature_selection/SelectFdr.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L410)
