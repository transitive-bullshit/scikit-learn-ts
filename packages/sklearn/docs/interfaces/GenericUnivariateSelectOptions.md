[sklearn](../readme.md) / [Exports](../modules.md) / GenericUnivariateSelectOptions

# Interface: GenericUnivariateSelectOptions

## Table of contents

### Properties

- [mode](GenericUnivariateSelectOptions.md#mode)
- [param](GenericUnivariateSelectOptions.md#param)
- [score\_func](GenericUnivariateSelectOptions.md#score_func)

## Properties

### mode

• `Optional` **mode**: ``"percentile"`` \| ``"k_best"`` \| ``"fpr"`` \| ``"fdr"`` \| ``"fwe"``

Feature selection mode.

**`Default Value`**

`'percentile'`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L466)

___

### param

• `Optional` **param**: `number` \| ``"all"``

Parameter of the corresponding mode.

**`Default Value`**

`0.00001`

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L473)

___

### score\_func

• `Optional` **score\_func**: `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). For modes ‘percentile’ or ‘kbest’ it can return a single array scores.

#### Defined in

[generated/feature_selection/GenericUnivariateSelect.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L459)
