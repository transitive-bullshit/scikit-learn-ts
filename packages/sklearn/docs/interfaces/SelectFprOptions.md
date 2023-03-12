[sklearn](../readme.md) / [Exports](../modules.md) / SelectFprOptions

# Interface: SelectFprOptions

## Table of contents

### Properties

- [alpha](SelectFprOptions.md#alpha)
- [score\_func](SelectFprOptions.md#score_func)

## Properties

### alpha

• `Optional` **alpha**: `number`

Features with p-values less than `alpha` are selected.

**`Default Value`**

`0.05`

#### Defined in

[generated/feature_selection/SelectFpr.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L417)

___

### score\_func

• `Optional` **score\_func**: `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). Default is f\_classif (see below “See Also”). The default function only works with classification tasks.

#### Defined in

[generated/feature_selection/SelectFpr.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L410)
