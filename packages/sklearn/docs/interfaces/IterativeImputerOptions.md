[sklearn](../readme.md) / [Exports](../modules.md) / IterativeImputerOptions

# Interface: IterativeImputerOptions

## Table of contents

### Properties

- [add\_indicator](IterativeImputerOptions.md#add_indicator)
- [estimator](IterativeImputerOptions.md#estimator)
- [imputation\_order](IterativeImputerOptions.md#imputation_order)
- [initial\_strategy](IterativeImputerOptions.md#initial_strategy)
- [keep\_empty\_features](IterativeImputerOptions.md#keep_empty_features)
- [max\_iter](IterativeImputerOptions.md#max_iter)
- [max\_value](IterativeImputerOptions.md#max_value)
- [min\_value](IterativeImputerOptions.md#min_value)
- [missing\_values](IterativeImputerOptions.md#missing_values)
- [n\_nearest\_features](IterativeImputerOptions.md#n_nearest_features)
- [random\_state](IterativeImputerOptions.md#random_state)
- [sample\_posterior](IterativeImputerOptions.md#sample_posterior)
- [skip\_complete](IterativeImputerOptions.md#skip_complete)
- [tol](IterativeImputerOptions.md#tol)
- [verbose](IterativeImputerOptions.md#verbose)

## Properties

### add\_indicator

• `Optional` **add\_indicator**: `boolean`

If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

**`Default Value`**

`false`

#### Defined in

[generated/impute/IterativeImputer.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L588)

___

### estimator

• `Optional` **estimator**: `any`

The estimator to use at each step of the round-robin imputation. If `sample\_posterior=True`, the estimator must support `return\_std` in its `predict` method.

#### Defined in

[generated/impute/IterativeImputer.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L507)

___

### imputation\_order

• `Optional` **imputation\_order**: ``"random"`` \| ``"ascending"`` \| ``"descending"`` \| ``"roman"`` \| ``"arabic"``

The order in which the features will be imputed. Possible values:

**`Default Value`**

`'ascending'`

#### Defined in

[generated/impute/IterativeImputer.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L552)

___

### initial\_strategy

• `Optional` **initial\_strategy**: ``"most_frequent"`` \| ``"constant"`` \| ``"mean"`` \| ``"median"``

Which strategy to use to initialize the missing values. Same as the `strategy` parameter in [`SimpleImputer`](sklearn.impute.SimpleImputer.html#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer").

**`Default Value`**

`'mean'`

#### Defined in

[generated/impute/IterativeImputer.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L545)

___

### keep\_empty\_features

• `Optional` **keep\_empty\_features**: `boolean`

If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `initial\_strategy="constant"` in which case `fill\_value` will be used instead.

**`Default Value`**

`false`

#### Defined in

[generated/impute/IterativeImputer.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L595)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of imputation rounds to perform before returning the imputations computed during the final round. A round is a single imputation of each feature with missing values. The stopping criterion is met once `max(abs(X\_t \- X\_{t-1}))/max(abs(X\[known\_vals\])) < tol`, where `X\_t` is `X` at iteration `t`. Note that early stopping is only applied if `sample\_posterior=False`.

**`Default Value`**

`10`

#### Defined in

[generated/impute/IterativeImputer.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L526)

___

### max\_value

• `Optional` **max\_value**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Maximum possible imputed value. Broadcast to shape `(n\_features,)` if scalar. If array-like, expects shape `(n\_features,)`, one max value for each feature. The default is `np.inf`.

#### Defined in

[generated/impute/IterativeImputer.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L569)

___

### min\_value

• `Optional` **min\_value**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Minimum possible imputed value. Broadcast to shape `(n\_features,)` if scalar. If array-like, expects shape `(n\_features,)`, one min value for each feature. The default is `\-np.inf`.

#### Defined in

[generated/impute/IterativeImputer.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L564)

___

### missing\_values

• `Optional` **missing\_values**: `number`

The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`.

#### Defined in

[generated/impute/IterativeImputer.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L512)

___

### n\_nearest\_features

• `Optional` **n\_nearest\_features**: `number`

Number of other features to use to estimate the missing values of each feature column. Nearness between features is measured using the absolute correlation coefficient between each feature pair (after initial imputation). To ensure coverage of features throughout the imputation process, the neighbor features are not necessarily nearest, but are drawn with probability proportional to correlation for each imputed target feature. Can provide significant speed-up when the number of features is huge. If `undefined`, all features will be used.

#### Defined in

[generated/impute/IterativeImputer.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L538)

___

### random\_state

• `Optional` **random\_state**: `number`

The seed of the pseudo random number generator to use. Randomizes selection of estimator features if `n\_nearest\_features` is not `undefined`, the `imputation\_order` if `random`, and the sampling from posterior if `sample\_posterior=True`. Use an integer for determinism. See [the Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/impute/IterativeImputer.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L581)

___

### sample\_posterior

• `Optional` **sample\_posterior**: `boolean`

Whether to sample from the (Gaussian) predictive posterior of the fitted estimator for each imputation. Estimator must support `return\_std` in its `predict` method if set to `true`. Set to `true` if using `IterativeImputer` for multiple imputations.

**`Default Value`**

`false`

#### Defined in

[generated/impute/IterativeImputer.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L519)

___

### skip\_complete

• `Optional` **skip\_complete**: `boolean`

If `true` then features with missing values during [`transform`](#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") which did not have any missing values during [`fit`](#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") will be imputed with the initial imputation method only. Set to `true` if you have many features with no missing values at both [`fit`](#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") and [`transform`](#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") time to save compute.

**`Default Value`**

`false`

#### Defined in

[generated/impute/IterativeImputer.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L559)

___

### tol

• `Optional` **tol**: `number`

Tolerance of the stopping condition.

**`Default Value`**

`0.001`

#### Defined in

[generated/impute/IterativeImputer.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L533)

___

### verbose

• `Optional` **verbose**: `number`

Verbosity flag, controls the debug messages that are issued as functions are evaluated. The higher, the more verbose. Can be 0, 1, or 2.

**`Default Value`**

`0`

#### Defined in

[generated/impute/IterativeImputer.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L576)
