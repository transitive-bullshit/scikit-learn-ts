[sklearn](../readme.md) / [Exports](../modules.md) / KNNImputerOptions

# Interface: KNNImputerOptions

## Table of contents

### Properties

- [add\_indicator](KNNImputerOptions.md#add_indicator)
- [copy](KNNImputerOptions.md#copy)
- [keep\_empty\_features](KNNImputerOptions.md#keep_empty_features)
- [metric](KNNImputerOptions.md#metric)
- [missing\_values](KNNImputerOptions.md#missing_values)
- [n\_neighbors](KNNImputerOptions.md#n_neighbors)
- [weights](KNNImputerOptions.md#weights)

## Properties

### add\_indicator

• `Optional` **add\_indicator**: `boolean`

If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto the output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

**`Default Value`**

`false`

#### Defined in

[generated/impute/KNNImputer.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L369)

___

### copy

• `Optional` **copy**: `boolean`

If `true`, a copy of X will be created. If `false`, imputation will be done in-place whenever possible.

**`Default Value`**

`true`

#### Defined in

[generated/impute/KNNImputer.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L362)

___

### keep\_empty\_features

• `Optional` **keep\_empty\_features**: `boolean`

If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0`.

**`Default Value`**

`false`

#### Defined in

[generated/impute/KNNImputer.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L376)

___

### metric

• `Optional` **metric**: ``"nan_euclidean"``

Distance metric for searching neighbors. Possible values:

**`Default Value`**

`'nan_euclidean'`

#### Defined in

[generated/impute/KNNImputer.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L355)

___

### missing\_values

• `Optional` **missing\_values**: `string` \| `number`

The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to np.nan, since `pd.NA` will be converted to np.nan.

#### Defined in

[generated/impute/KNNImputer.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L334)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Number of neighboring samples to use for imputation.

**`Default Value`**

`5`

#### Defined in

[generated/impute/KNNImputer.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L341)

___

### weights

• `Optional` **weights**: ``"uniform"`` \| ``"distance"``

Weight function used in prediction. Possible values:

**`Default Value`**

`'uniform'`

#### Defined in

[generated/impute/KNNImputer.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/KNNImputer.ts#L348)
