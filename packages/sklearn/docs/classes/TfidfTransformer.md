[sklearn](../readme.md) / [Exports](../modules.md) / TfidfTransformer

# Class: TfidfTransformer

Transform a count matrix to a normalized tf or tf-idf representation.

Tf means term-frequency while tf-idf means term-frequency times inverse document-frequency. This is a common term weighting scheme in information retrieval, that has also found good use in document classification.

The goal of using tf-idf instead of the raw frequencies of occurrence of a token in a given document is to scale down the impact of tokens that occur very frequently in a given corpus and that are hence empirically less informative than features that occur in a small fraction of the training corpus.

The formula that is used to compute the tf-idf for a term t of a document d in a document set is tf-idf(t, d) = tf(t, d) \* idf(t), and the idf is computed as idf(t) = log \[ n / df(t) \] + 1 (if `smooth\_idf=False`), where n is the total number of documents in the document set and df(t) is the document frequency of t; the document frequency is the number of documents in the document set that contain the term t. The effect of adding “1” to the idf in the equation above is that terms with zero idf, i.e., terms that occur in all documents in a training set, will not be entirely ignored. (Note that the idf formula above differs from the standard textbook notation that defines the idf as idf(t) = log \[ n / (df(t) + 1) \]).

If `smooth\_idf=True` (the default), the constant “1” is added to the numerator and denominator of the idf as if an extra document was seen containing every term in the collection exactly once, which prevents zero divisions: idf(t) = log \[ (1 + n) / (1 + df(t)) \] + 1.

Furthermore, the formulas used to compute tf and idf depend on parameter settings that correspond to the SMART notation used in IR as follows:

Tf is “n” (natural) by default, “l” (logarithmic) when `sublinear\_tf=True`. Idf is “t” when use\_idf is given, “n” (none) otherwise. Normalization is “c” (cosine) when `norm='l2'`, “n” (none) when `norm=None`.

Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfTransformer.html

## Table of contents

### Constructors

- [constructor](TfidfTransformer.md#constructor)

### Properties

- [\_isDisposed](TfidfTransformer.md#_isdisposed)
- [\_isInitialized](TfidfTransformer.md#_isinitialized)
- [\_py](TfidfTransformer.md#_py)
- [id](TfidfTransformer.md#id)
- [opts](TfidfTransformer.md#opts)

### Accessors

- [feature\_names\_in\_](TfidfTransformer.md#feature_names_in_)
- [n\_features\_in\_](TfidfTransformer.md#n_features_in_)
- [py](TfidfTransformer.md#py)

### Methods

- [dispose](TfidfTransformer.md#dispose)
- [fit](TfidfTransformer.md#fit)
- [fit\_transform](TfidfTransformer.md#fit_transform)
- [get\_feature\_names\_out](TfidfTransformer.md#get_feature_names_out)
- [init](TfidfTransformer.md#init)
- [set\_output](TfidfTransformer.md#set_output)
- [transform](TfidfTransformer.md#transform)

## Constructors

### constructor

• **new TfidfTransformer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TfidfTransformerOptions`](../interfaces/TfidfTransformerOptions.md) |

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L35)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L33)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L32)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L31)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L28)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L29)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L310)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L283)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L40)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L44)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn the idf vector (global term weights).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfTransformerFitOptions`](../interfaces/TfidfTransformerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L114)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfTransformerFitTransformOptions`](../interfaces/TfidfTransformerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L146)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfTransformerGetFeatureNamesOutOptions`](../interfaces/TfidfTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L184)

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

[generated/feature_extraction/text/TfidfTransformer.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L53)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfTransformerSetOutputOptions`](../interfaces/TfidfTransformerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L221)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Transform a count matrix to a tf or tf-idf representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfTransformerTransformOptions`](../interfaces/TfidfTransformerTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L251)
