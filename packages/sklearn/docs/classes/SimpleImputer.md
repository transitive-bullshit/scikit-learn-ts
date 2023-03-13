# SimpleImputer

Univariate imputer for completing missing values with simple strategies.

Replace missing values using a descriptive statistic (e.g. mean, median, or most frequent) along each column, or using a constant value.

Read more in the [User Guide](../impute.html#impute).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html)

## Constructors

## constructor()

### Signature

```ts
new SimpleImputer(opts?: object): SimpleImputer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.add_indicator?` | `boolean` | If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.  `Default Value`  `false` |
| `opts.copy?` | `boolean` | If `true`, a copy of X will be created. If `false`, imputation will be done in-place whenever possible. Note that, in the following cases, a new copy will always be made, even if `copy=False`:  `Default Value`  `true` |
| `opts.fill_value?` | `string` | When strategy == “constant”, `fill\_value` is used to replace all occurrences of missing\_values. For string or object data types, `fill\_value` must be a string. If `undefined`, `fill\_value` will be 0 when imputing numerical data and “missing\_value” for strings or object data types. |
| `opts.keep_empty_features?` | `boolean` | If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `strategy="constant"` in which case `fill\_value` will be used instead.  `Default Value`  `false` |
| `opts.missing_values?` | `string` \| `number` | The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` can be set to either `np.nan` or `pd.NA`. |
| `opts.strategy?` | `string` | The imputation strategy.  `Default Value`  `'mean'` |
| `opts.verbose?` | `number` | Controls the verbosity of the imputer.  `Default Value`  `0` |

### Returns

[`SimpleImputer`](SimpleImputer.md)

Defined in:  [generated/impute/SimpleImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/impute/SimpleImputer.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L134)

### fit()

Fit the imputer on `X`.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/SimpleImputer.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L151)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/impute/SimpleImputer.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L191)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/SimpleImputer.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L238)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/impute/SimpleImputer.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L88)

### inverse\_transform()

Convert the data back to the original representation.

Inverts the `transform` operation performed on an array. This operation can only be performed after [`SimpleImputer`](#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer") is instantiated with `add\_indicator=True`.

Note that `inverse\_transform` can only invert the transform in features that have binary indicators for missing values. If a feature has no missing values at `fit` time, the feature won’t have a binary indicator, and the imputation done at `transform` time won’t be inverted.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The imputed data to be reverted to original data. It has to be an augmented array of imputed data and the missing indicator mask. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/impute/SimpleImputer.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L278)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/SimpleImputer.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L315)

### transform()

Impute all missing values in `X`.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input data to complete. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/impute/SimpleImputer.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L348)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/impute/SimpleImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/impute/SimpleImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/impute/SimpleImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L21)

### id

> `string`

Defined in:  [generated/impute/SimpleImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L18)

### opts

> `any`

Defined in:  [generated/impute/SimpleImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/impute/SimpleImputer.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L456)

Defined in:  [generated/impute/SimpleImputer.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L456)

### indicator\_

Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.

#### Signature

```ts
indicator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/SimpleImputer.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L406)

Defined in:  [generated/impute/SimpleImputer.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L406)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/impute/SimpleImputer.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L431)

Defined in:  [generated/impute/SimpleImputer.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L431)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/impute/SimpleImputer.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L75)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/impute/SimpleImputer.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L79)

Defined in:  [generated/impute/SimpleImputer.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L75) [generated/impute/SimpleImputer.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L79)

### statistics\_

The imputation fill value for each feature. Computing statistics can result in `np.nan` values. During [`transform`](#sklearn.impute.SimpleImputer.transform "sklearn.impute.SimpleImputer.transform"), features corresponding to `np.nan` statistics will be discarded.

#### Signature

```ts
statistics_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/impute/SimpleImputer.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L381)

Defined in:  [generated/impute/SimpleImputer.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/impute/SimpleImputer.ts#L381)
