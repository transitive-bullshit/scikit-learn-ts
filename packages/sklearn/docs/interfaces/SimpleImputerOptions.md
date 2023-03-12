[sklearn](../readme.md) / [Exports](../modules.md) / SimpleImputerOptions

# Interface: SimpleImputerOptions

## Table of contents

### Properties

- [add\_indicator](SimpleImputerOptions.md#add_indicator)
- [copy](SimpleImputerOptions.md#copy)
- [fill\_value](SimpleImputerOptions.md#fill_value)
- [keep\_empty\_features](SimpleImputerOptions.md#keep_empty_features)
- [missing\_values](SimpleImputerOptions.md#missing_values)
- [strategy](SimpleImputerOptions.md#strategy)
- [verbose](SimpleImputerOptions.md#verbose)

## Properties

### add\_indicator

• `Optional` **add\_indicator**: `boolean`

If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

**`Default Value`**

`false`

#### Defined in

[generated/impute/SimpleImputer.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L432)

___

### copy

• `Optional` **copy**: `boolean`

If `true`, a copy of X will be created. If `false`, imputation will be done in-place whenever possible. Note that, in the following cases, a new copy will always be made, even if `copy=False`:

**`Default Value`**

`true`

#### Defined in

[generated/impute/SimpleImputer.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L425)

___

### fill\_value

• `Optional` **fill\_value**: `string`

When strategy == “constant”, `fill\_value` is used to replace all occurrences of missing\_values. For string or object data types, `fill\_value` must be a string. If `undefined`, `fill\_value` will be 0 when imputing numerical data and “missing\_value” for strings or object data types.

#### Defined in

[generated/impute/SimpleImputer.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L411)

___

### keep\_empty\_features

• `Optional` **keep\_empty\_features**: `boolean`

If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `strategy="constant"` in which case `fill\_value` will be used instead.

**`Default Value`**

`false`

#### Defined in

[generated/impute/SimpleImputer.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L439)

___

### missing\_values

• `Optional` **missing\_values**: `string` \| `number`

The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` can be set to either `np.nan` or `pd.NA`.

#### Defined in

[generated/impute/SimpleImputer.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L399)

___

### strategy

• `Optional` **strategy**: `string`

The imputation strategy.

**`Default Value`**

`'mean'`

#### Defined in

[generated/impute/SimpleImputer.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L406)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity of the imputer.

**`Default Value`**

`0`

#### Defined in

[generated/impute/SimpleImputer.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/SimpleImputer.ts#L418)