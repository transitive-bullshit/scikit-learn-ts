[**sklearn**](../README.md) • **Docs**

***

Encode categorical features as a one-hot numeric array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are encoded using a one-hot (aka ‘one-of-K’ or ‘dummy’) encoding scheme. This creates a binary column for each category and returns a sparse matrix or dense array (depending on the `sparse\_output` parameter).

By default, the encoder derives the categories based on the unique values in each feature. Alternatively, you can also specify the `categories` manually.

This encoding is needed for feeding categorical data to many scikit-learn estimators, notably linear models and SVMs with the standard kernels.

Note: a one-hot encoding of y labels should use a LabelBinarizer instead.

Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features). For a comparison of different encoders, refer to: [Comparing Target Encoder with Other Encoders](../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html)

## Constructors

### new OneHotEncoder()

> **new OneHotEncoder**(`opts`?): [`OneHotEncoder`](OneHotEncoder.md)

#### Parameters

• **opts?**

• **opts.categories?**: `"auto"`

Categories (unique values) per feature:

**Default Value**

`'auto'`

• **opts.drop?**: `any`[] \| `"first"` \| `"if_binary"`

Specifies a methodology to use to drop one of the categories per feature. This is useful in situations where perfectly collinear features cause problems, such as when feeding the resulting data into an unregularized linear regression model.

However, dropping one category breaks the symmetry of the original representation and can therefore induce a bias in downstream models, for instance for penalized linear classification or regression models.

• **opts.dtype?**: `any`

Desired dtype of output.

• **opts.feature\_name\_combiner?**: `"concat"`

Callable with signature `def callable(input\_feature, category)` that returns a string. This is used to create feature names to be returned by [`get\_feature\_names\_out`](#sklearn.preprocessing.OneHotEncoder.get_feature_names_out "sklearn.preprocessing.OneHotEncoder.get_feature_names_out").

`"concat"` concatenates encoded feature name and category with `feature + "\_" + str(category)`.E.g. feature X with values 1, 6, 7 create feature names `X\_1, X\_6, X\_7`.

**Default Value**

`'concat'`

• **opts.handle\_unknown?**: `"ignore"` \| `"error"` \| `"infrequent_if_exist"`

Specifies the way unknown categories are handled during [`transform`](#sklearn.preprocessing.OneHotEncoder.transform "sklearn.preprocessing.OneHotEncoder.transform").

**Default Value**

`'error'`

• **opts.max\_categories?**: `number`

Specifies an upper limit to the number of output features for each input feature when considering infrequent categories. If there are infrequent categories, `max\_categories` includes the category representing the infrequent categories along with the frequent categories. If `undefined`, there is no limit to the number of output features.

• **opts.min\_frequency?**: `number`

Specifies the minimum frequency below which a category will be considered infrequent.

• **opts.sparse\_output?**: `boolean`

When `true`, it returns a [`scipy.sparse.csr\_matrix`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix "(in SciPy v1.14.1)"), i.e. a sparse matrix in “Compressed Sparse Row” (CSR) format.

**Default Value**

`true`

#### Returns

[`OneHotEncoder`](OneHotEncoder.md)

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L25)

## Accessors

### categories\_

#### Get Signature

> **get** **categories\_**(): `Promise`\<`any`\>

The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of `transform`). This includes the category specified in `drop` (if any).

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L416)

***

### drop\_idx\_

#### Get Signature

> **get** **drop\_idx\_**(): `Promise`\<`any`[]\>

`drop\_idx\_\[i\]` is the index in `categories\_\[i\]` of the category to be dropped for each feature.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L441)

***

### feature\_name\_combiner

#### Get Signature

> **get** **feature\_name\_combiner**(): `Promise`\<`any`\>

Callable with signature `def callable(input\_feature, category)` that returns a string. This is used to create feature names to be returned by [`get\_feature\_names\_out`](#sklearn.preprocessing.OneHotEncoder.get_feature_names_out "sklearn.preprocessing.OneHotEncoder.get_feature_names_out").

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L516)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L491)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L466)

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

[generated/preprocessing/OneHotEncoder.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L88)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L140)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit OneHotEncoder to X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data to determine the categories of each feature.

• **opts.y?**: `any`

Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L157)

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

[generated/preprocessing/OneHotEncoder.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L196)

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

[generated/preprocessing/OneHotEncoder.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L238)

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

[generated/preprocessing/OneHotEncoder.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L274)

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

[generated/preprocessing/OneHotEncoder.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L101)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Convert the data back to the original representation.

When unknown categories are encountered (all zeros in the one-hot encoding), `undefined` is used to represent this category. If the feature with the unknown category has a dropped category, the dropped category will be its inverse.

For a given input feature, if there is an infrequent category, ‘infrequent\_sklearn’ will be used to represent the infrequent category.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The transformed data.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L312)

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

[generated/preprocessing/OneHotEncoder.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L348)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Transform X using one-hot encoding.

If `sparse\_output=True` (default), it returns an instance of [`scipy.sparse.\_csr.csr\_matrix`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix "(in SciPy v1.14.1)") (CSR format).

If there are infrequent categories for a feature, set by specifying `max\_categories` or `min\_frequency`, the infrequent categories are grouped into a single category.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The data to encode.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/OneHotEncoder.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L384)
