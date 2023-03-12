[sklearn](../readme.md) / [Exports](../modules.md) / SelectPercentileOptions

# Interface: SelectPercentileOptions

## Table of contents

### Properties

- [percentile](SelectPercentileOptions.md#percentile)
- [score\_func](SelectPercentileOptions.md#score_func)

## Properties

### percentile

• `Optional` **percentile**: `number`

Percent of features to keep.

**`Default Value`**

`10`

#### Defined in

[generated/feature_selection/SelectPercentile.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L450)

___

### score\_func

• `Optional` **score\_func**: `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues) or a single array with scores. Default is f\_classif (see below “See Also”). The default function only works with classification tasks.

#### Defined in

[generated/feature_selection/SelectPercentile.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L443)
