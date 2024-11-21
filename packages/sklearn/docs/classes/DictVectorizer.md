[**sklearn**](../README.md) • **Docs**

***

Transforms lists of feature-value mappings to vectors.

This transformer turns lists of mappings (dict-like objects) of feature names to feature values into Numpy arrays or scipy.sparse matrices for use with scikit-learn estimators.

When feature values are strings, this transformer will do a binary one-hot (aka one-of-K) coding: one boolean-valued feature is constructed for each of the possible string values that the feature can take on. For instance, a feature “f” that can take on the values “ham” and “spam” will become two features in the output, one signifying “f=ham”, the other “f=spam”.

If a feature value is a sequence or set of strings, this transformer will iterate over the values and will count the occurrences of each string value.

However, note that this transformer will only do a binary one-hot encoding when feature values are of type string. If categorical features are represented as numeric values such as int or iterables of strings, the DictVectorizer can be followed by [`OneHotEncoder`](sklearn.preprocessing.OneHotEncoder.html#sklearn.preprocessing.OneHotEncoder "sklearn.preprocessing.OneHotEncoder") to complete binary one-hot encoding.

Features that do not occur in a sample (mapping) will have a zero value in the resulting array/matrix.

For an efficiency comparison of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

Read more in the [User Guide](../feature_extraction.html#dict-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.DictVectorizer.html)

## Constructors

### new DictVectorizer()

> **new DictVectorizer**(`opts`?): [`DictVectorizer`](DictVectorizer.md)

#### Parameters

• **opts?**

• **opts.dtype?**: `any`

The type of feature values. Passed to Numpy array/scipy.sparse matrix constructors as the dtype argument.

• **opts.separator?**: `string`

Separator string used when constructing new features for one-hot coding.

**Default Value**

`'='`

• **opts.sort?**: `boolean`

Whether `feature\_names\_` and `vocabulary\_` should be sorted when fitting.

**Default Value**

`true`

• **opts.sparse?**: `boolean`

Whether transform should produce scipy.sparse matrices.

**Default Value**

`true`

#### Returns

[`DictVectorizer`](DictVectorizer.md)

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L35)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L33)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L32)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L31)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L28)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L29)

## Accessors

### feature\_names\_

#### Get Signature

> **get** **feature\_names\_**(): `Promise`\<`any`[]\>

A list of length n\_features containing the feature names (e.g., “f=ham” and “f=spam”).

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L496)

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

[generated/feature\_extraction/DictVectorizer.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L66)

***

### vocabulary\_

#### Get Signature

> **get** **vocabulary\_**(): `Promise`\<`any`\>

A dictionary mapping feature names to feature indices.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L471)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L118)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn a list of feature name -> indices mappings.

#### Parameters

• **opts**

• **opts.X?**: `any`

Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype).

• **opts.y?**: `any`

Ignored parameter.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L135)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`\>

Learn a list of feature name -> indices mappings and transform X.

Like fit(X) followed by transform(X), but does not require materializing X in memory.

#### Parameters

• **opts**

• **opts.X?**: `any`

Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype).

• **opts.y?**: `any`

Ignored parameter.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L174)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L211)

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

[generated/feature\_extraction/DictVectorizer.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L247)

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

[generated/feature\_extraction/DictVectorizer.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L79)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`[]\>

Transform array or sparse matrix X back to feature mappings.

X must have been produced by this DictVectorizer’s transform or fit\_transform method; it may only have passed through transformers that preserve the number of features and their order.

In the case of one-hot/one-of-K coding, the constructed feature names and values are returned rather than the original ones.

#### Parameters

• **opts**

• **opts.dict\_type?**: `any`

Constructor for feature mappings. Must conform to the collections.Mapping API.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample matrix.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L285)

***

### restrict()

> **restrict**(`opts`): `Promise`\<`any`\>

Restrict the features to those in support using feature selection.

This function modifies the estimator in-place.

#### Parameters

• **opts**

• **opts.indices?**: `boolean`

Whether support is a list of indices.

**Default Value**

`false`

• **opts.support?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Boolean mask or list of indices (as returned by the get\_support member of feature selectors).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L326)

***

### set\_inverse\_transform\_request()

> **set\_inverse\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `inverse\_transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.dict\_type?**: `string` \| `boolean`

Metadata routing for `dict\_type` parameter in `inverse\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L369)

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

[generated/feature\_extraction/DictVectorizer.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L405)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Transform feature->value dicts to array or sparse matrix.

Named features not encountered during fit or fit\_transform will be silently ignored.

#### Parameters

• **opts**

• **opts.X?**: `any`[]

Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/DictVectorizer.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L439)
