[sklearn](../readme.md) / [Exports](../modules.md) / DictVectorizer

# Class: DictVectorizer

Transforms lists of feature-value mappings to vectors.

This transformer turns lists of mappings (dict-like objects) of feature names to feature values into Numpy arrays or scipy.sparse matrices for use with scikit-learn estimators.

When feature values are strings, this transformer will do a binary one-hot (aka one-of-K) coding: one boolean-valued feature is constructed for each of the possible string values that the feature can take on. For instance, a feature “f” that can take on the values “ham” and “spam” will become two features in the output, one signifying “f=ham”, the other “f=spam”.

If a feature value is a sequence or set of strings, this transformer will iterate over the values and will count the occurrences of each string value.

However, note that this transformer will only do a binary one-hot encoding when feature values are of type string. If categorical features are represented as numeric values such as int or iterables of strings, the DictVectorizer can be followed by [`OneHotEncoder`](sklearn.preprocessing.OneHotEncoder.html#sklearn.preprocessing.OneHotEncoder "sklearn.preprocessing.OneHotEncoder") to complete binary one-hot encoding.

Features that do not occur in a sample (mapping) will have a zero value in the resulting array/matrix.

Read more in the [User Guide](../feature_extraction.html#dict-feature-extraction).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.DictVectorizer.html

## Table of contents

### Constructors

- [constructor](DictVectorizer.md#constructor)

### Properties

- [\_isDisposed](DictVectorizer.md#_isdisposed)
- [\_isInitialized](DictVectorizer.md#_isinitialized)
- [\_py](DictVectorizer.md#_py)
- [id](DictVectorizer.md#id)
- [opts](DictVectorizer.md#opts)

### Accessors

- [feature\_names\_](DictVectorizer.md#feature_names_)
- [py](DictVectorizer.md#py)
- [vocabulary\_](DictVectorizer.md#vocabulary_)

### Methods

- [dispose](DictVectorizer.md#dispose)
- [fit](DictVectorizer.md#fit)
- [fit\_transform](DictVectorizer.md#fit_transform)
- [get\_feature\_names\_out](DictVectorizer.md#get_feature_names_out)
- [init](DictVectorizer.md#init)
- [inverse\_transform](DictVectorizer.md#inverse_transform)
- [restrict](DictVectorizer.md#restrict)
- [set\_output](DictVectorizer.md#set_output)
- [transform](DictVectorizer.md#transform)

## Constructors

### constructor

• **new DictVectorizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DictVectorizerOptions`](../interfaces/DictVectorizerOptions.md) |

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L33)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L31)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L30)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L29)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L26)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L27)

## Accessors

### feature\_names\_

• `get` **feature_names_**(): `Promise`<`any`[]\>

A list of length n\_features containing the feature names (e.g., “f=ham” and “f=spam”).

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L356)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L38)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L42)

___

### vocabulary\_

• `get` **vocabulary_**(): `Promise`<`any`\>

A dictionary mapping feature names to feature indices.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L331)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn a list of feature name -> indices mappings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictVectorizerFitOptions`](../interfaces/DictVectorizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L110)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`\>

Learn a list of feature name -> indices mappings and transform X.

Like fit(X) followed by transform(X), but does not require materializing X in memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictVectorizerFitTransformOptions`](../interfaces/DictVectorizerFitTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L140)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictVectorizerGetFeatureNamesOutOptions`](../interfaces/DictVectorizerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L170)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L51)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`[]\>

Transform array or sparse matrix X back to feature mappings.

X must have been produced by this DictVectorizer’s transform or fit\_transform method; it may only have passed through transformers that preserve the number of features and their order.

In the case of one-hot/one-of-K coding, the constructed feature names and values are returned rather than the original ones.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictVectorizerInverseTransformOptions`](../interfaces/DictVectorizerInverseTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L207)

___

### restrict

▸ **restrict**(`opts`): `Promise`<`any`\>

Restrict the features to those in support using feature selection.

This function modifies the estimator in-place.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictVectorizerRestrictOptions`](../interfaces/DictVectorizerRestrictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L243)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictVectorizerSetOutputOptions`](../interfaces/DictVectorizerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L273)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Transform feature->value dicts to array or sparse matrix.

Named features not encountered during fit or fit\_transform will be silently ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictVectorizerTransformOptions`](../interfaces/DictVectorizerTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/DictVectorizer.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L303)
