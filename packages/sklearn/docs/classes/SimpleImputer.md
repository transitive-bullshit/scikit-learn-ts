[**sklearn**](../README.md) • **Docs**

***

Univariate imputer for completing missing values with simple strategies.

Replace missing values using a descriptive statistic (e.g. mean, median, or most frequent) along each column, or using a constant value.

Read more in the [User Guide](../impute.html#impute).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html)

## Constructors

### new SimpleImputer()

> **new SimpleImputer**(`opts`?): [`SimpleImputer`](SimpleImputer.md)

#### Parameters

• **opts?**

• **opts.add\_indicator?**: `boolean`

If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

**Default Value**

`false`

• **opts.copy?**: `boolean`

If `true`, a copy of X will be created. If `false`, imputation will be done in-place whenever possible. Note that, in the following cases, a new copy will always be made, even if `copy=False`:

**Default Value**

`true`

• **opts.fill\_value?**: `string`

When strategy == “constant”, `fill\_value` is used to replace all occurrences of missing\_values. For string or object data types, `fill\_value` must be a string. If `undefined`, `fill\_value` will be 0 when imputing numerical data and “missing\_value” for strings or object data types.

• **opts.keep\_empty\_features?**: `boolean`

If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `strategy="constant"` in which case `fill\_value` will be used instead.

**Default Value**

`false`

• **opts.missing\_values?**: `string` \| `number`

The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` can be set to either `np.nan` or `pd.NA`.

• **opts.strategy?**: `string`

The imputation strategy.

**Default Value**

`'mean'`

#### Returns

[`SimpleImputer`](SimpleImputer.md)

#### Defined in

[generated/impute/SimpleImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/impute/SimpleImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/impute/SimpleImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/impute/SimpleImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/impute/SimpleImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/impute/SimpleImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L19)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/impute/SimpleImputer.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L467)

***

### indicator\_

#### Get Signature

> **get** **indicator\_**(): `Promise`\<`any`\>

Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L417)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/impute/SimpleImputer.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L442)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/impute/SimpleImputer.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L68)

***

### statistics\_

#### Get Signature

> **get** **statistics\_**(): `Promise`\<`any`[]\>

The imputation fill value for each feature. Computing statistics can result in `np.nan` values. During [`transform`](#sklearn.impute.SimpleImputer.transform "sklearn.impute.SimpleImputer.transform"), features corresponding to `np.nan` statistics will be discarded.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/impute/SimpleImputer.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L392)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/impute/SimpleImputer.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L120)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the imputer on `X`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L137)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/impute/SimpleImputer.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L176)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L218)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L254)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/impute/SimpleImputer.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L81)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Convert the data back to the original representation.

Inverts the `transform` operation performed on an array. This operation can only be performed after [`SimpleImputer`](#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer") is instantiated with `add\_indicator=True`.

Note that `inverse\_transform` can only invert the transform in features that have binary indicators for missing values. If a feature has no missing values at `fit` time, the feature won’t have a binary indicator, and the imputation done at `transform` time won’t be inverted.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The imputed data to be reverted to original data. It has to be an augmented array of imputed data and the missing indicator mask.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/impute/SimpleImputer.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L292)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/SimpleImputer.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L328)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Impute all missing values in `X`.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input data to complete.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/impute/SimpleImputer.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/impute/SimpleImputer.ts#L360)
