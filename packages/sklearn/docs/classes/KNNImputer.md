[**sklearn**](../README.md) • **Docs**

***

Imputation for completing missing values using k-Nearest Neighbors.

Each sample’s missing values are imputed using the mean value from `n\_neighbors` nearest neighbors found in the training set. Two samples are close if the features that neither is missing are close.

Read more in the [User Guide](../impute.html#knnimpute).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.KNNImputer.html)

## Constructors

### new KNNImputer()

> **new KNNImputer**(`opts`?): [`KNNImputer`](KNNImputer.md)

#### Parameters

• **opts?**

• **opts.add\_indicator?**: `boolean`

If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto the output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

**Default Value**

`false`

• **opts.copy?**: `boolean`

If `true`, a copy of X will be created. If `false`, imputation will be done in-place whenever possible.

**Default Value**

`true`

• **opts.keep\_empty\_features?**: `boolean`

If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0`.

**Default Value**

`false`

• **opts.metric?**: `"nan_euclidean"`

Distance metric for searching neighbors. Possible values:

**Default Value**

`'nan_euclidean'`

• **opts.missing\_values?**: `string` \| `number`

The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to np.nan, since `pd.NA` will be converted to np.nan.

• **opts.n\_neighbors?**: `number`

Number of neighboring samples to use for imputation.

**Default Value**

`5`

• **opts.weights?**: `"uniform"` \| `"distance"`

Weight function used in prediction. Possible values:

**Default Value**

`'uniform'`

#### Returns

[`KNNImputer`](KNNImputer.md)

#### Defined in

[generated/impute/KNNImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/impute/KNNImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/impute/KNNImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/impute/KNNImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/impute/KNNImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/impute/KNNImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L19)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/impute/KNNImputer.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L411)

***

### indicator\_

#### Get Signature

> **get** **indicator\_**(): `Promise`\<`any`\>

Indicator used to add binary indicators for missing values. `undefined` if add\_indicator is `false`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/KNNImputer.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L363)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/impute/KNNImputer.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L386)

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

[generated/impute/KNNImputer.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L77)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/impute/KNNImputer.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L129)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the imputer on X.

#### Parameters

• **opts**

• **opts.X?**: `any`

Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/KNNImputer.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L146)

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

[generated/impute/KNNImputer.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L185)

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

[generated/impute/KNNImputer.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L227)

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

[generated/impute/KNNImputer.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L263)

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

[generated/impute/KNNImputer.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L90)

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

[generated/impute/KNNImputer.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L299)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Impute all missing values in X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The input data to complete.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/impute/KNNImputer.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/impute/KNNImputer.ts#L331)
