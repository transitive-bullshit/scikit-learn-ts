# SelectKBestOptions

## Properties

### k?

> `number` \| `"all"`

Number of top features to select. The “all” option bypasses selection, for use in a parameter search.

#### Default Value

`10`

Defined in:  [generated/feature\_selection/SelectKBest.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L416)

### score\_func?

> `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues) or a single array with scores. Default is f\_classif (see below “See Also”). The default function only works with classification tasks.

Defined in:  [generated/feature\_selection/SelectKBest.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L409)
