# MissingIndicatorOptions

## Properties

### error\_on\_new?

> `boolean`

If `true`, [`transform`](#sklearn.impute.MissingIndicator.transform "sklearn.impute.MissingIndicator.transform") will raise an error when there are features with missing values that have no missing values in [`fit`](#sklearn.impute.MissingIndicator.fit "sklearn.impute.MissingIndicator.fit"). This is applicable only when `features='missing-only'`.

#### Default Value

`true`

Defined in:  [generated/impute/MissingIndicator.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/MissingIndicator.ts#L371)

### features?

> `"all"` \| `"missing-only"`

Whether the imputer mask should represent all or a subset of features.

#### Default Value

`'missing-only'`

Defined in:  [generated/impute/MissingIndicator.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/MissingIndicator.ts#L357)

### missing\_values?

> `string` \| `number`

The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`.

Defined in:  [generated/impute/MissingIndicator.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/MissingIndicator.ts#L350)

### sparse?

> `boolean` \| `"auto"`

Whether the imputer mask format should be sparse or dense.

#### Default Value

`'auto'`

Defined in:  [generated/impute/MissingIndicator.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/MissingIndicator.ts#L364)
