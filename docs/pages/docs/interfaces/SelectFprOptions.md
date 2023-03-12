# SelectFprOptions

## Properties

### alpha?

> `number`

Features with p-values less than `alpha` are selected.

#### Default Value

`0.05`

Defined in:  [generated/feature\_selection/SelectFpr.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L417)

### score\_func?

> `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). Default is f\_classif (see below “See Also”). The default function only works with classification tasks.

Defined in:  [generated/feature\_selection/SelectFpr.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L410)
