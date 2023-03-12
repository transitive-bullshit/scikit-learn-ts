[sklearn](../readme.md) / [Exports](../modules.md) / PartialDependenceDisplayOptions

# Interface: PartialDependenceDisplayOptions

## Table of contents

### Properties

- [deciles](PartialDependenceDisplayOptions.md#deciles)
- [feature\_names](PartialDependenceDisplayOptions.md#feature_names)
- [features](PartialDependenceDisplayOptions.md#features)
- [is\_categorical](PartialDependenceDisplayOptions.md#is_categorical)
- [kind](PartialDependenceDisplayOptions.md#kind)
- [pd\_results](PartialDependenceDisplayOptions.md#pd_results)
- [pdp\_lim](PartialDependenceDisplayOptions.md#pdp_lim)
- [random\_state](PartialDependenceDisplayOptions.md#random_state)
- [subsample](PartialDependenceDisplayOptions.md#subsample)
- [target\_idx](PartialDependenceDisplayOptions.md#target_idx)

## Properties

### deciles

• `Optional` **deciles**: `any`

Deciles for feature indices in `features`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L484)

___

### feature\_names

• `Optional` **feature\_names**: `any`

Feature names corresponding to the indices in `features`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L474)

___

### features

• `Optional` **features**: `any`

Indices of features for a given plot. A tuple of one integer will plot a partial dependence curve of one feature. A tuple of two integers will plot a two-way partial dependence curve as a contour plot.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L469)

___

### is\_categorical

• `Optional` **is\_categorical**: `any`

Whether each target feature in `features` is categorical or not. The list should be same size as `features`. If `undefined`, all features are assumed to be continuous.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L515)

___

### kind

• `Optional` **kind**: ``"average"`` \| ``"individual"`` \| ``"both"``

Whether to plot the partial dependence averaged across all the samples in the dataset or one line per sample or both.

**`Default Value`**

`'average'`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L496)

___

### pd\_results

• `Optional` **pd\_results**: `any`

Results of [`partial\_dependence`](sklearn.inspection.partial_dependence.html#sklearn.inspection.partial_dependence "sklearn.inspection.partial_dependence") for `features`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L464)

___

### pdp\_lim

• `Optional` **pdp\_lim**: `any`

Global min and max average predictions, such that all plots will have the same scale and y limits. `pdp\_lim\[1\]` is the global min and max for single partial dependence curves. `pdp\_lim\[2\]` is the global min and max for two-way partial dependence curves. If `undefined`, the limit will be inferred from the global minimum and maximum of all predictions.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L489)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the randomness of the selected samples when subsamples is not `undefined`. See [Glossary](../../glossary.html#term-random_state) for details.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L510)

___

### subsample

• `Optional` **subsample**: `number`

Sampling for ICE curves when `kind` is ‘individual’ or ‘both’. If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to be used to plot ICE curves. If int, represents the maximum absolute number of samples to use.

Note that the full dataset is still used to calculate partial dependence when `kind='both'`.

**`Default Value`**

`1000`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L505)

___

### target\_idx

• `Optional` **target\_idx**: `number`

In a multiclass setting, specifies the class for which the PDPs should be computed. Note that for binary classification, the positive class (index 1) is always used.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L479)