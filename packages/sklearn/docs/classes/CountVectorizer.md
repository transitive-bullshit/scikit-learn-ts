[sklearn](../readme.md) / [Exports](../modules.md) / CountVectorizer

# Class: CountVectorizer

Convert a collection of text documents to a matrix of token counts.

This implementation produces a sparse representation of the counts using scipy.sparse.csr\_matrix.

If you do not provide an a-priori dictionary and you do not use an analyzer that does some kind of feature selection then the number of features will be equal to the vocabulary size found by analyzing the data.

Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html

## Table of contents

### Constructors

- [constructor](CountVectorizer.md#constructor)

### Properties

- [\_isDisposed](CountVectorizer.md#_isdisposed)
- [\_isInitialized](CountVectorizer.md#_isinitialized)
- [\_py](CountVectorizer.md#_py)
- [id](CountVectorizer.md#id)
- [opts](CountVectorizer.md#opts)

### Accessors

- [fixed\_vocabulary\_](CountVectorizer.md#fixed_vocabulary_)
- [py](CountVectorizer.md#py)
- [stop\_words\_](CountVectorizer.md#stop_words_)
- [vocabulary\_](CountVectorizer.md#vocabulary_)

### Methods

- [build\_analyzer](CountVectorizer.md#build_analyzer)
- [build\_preprocessor](CountVectorizer.md#build_preprocessor)
- [build\_tokenizer](CountVectorizer.md#build_tokenizer)
- [decode](CountVectorizer.md#decode)
- [dispose](CountVectorizer.md#dispose)
- [fit](CountVectorizer.md#fit)
- [fit\_transform](CountVectorizer.md#fit_transform)
- [get\_feature\_names\_out](CountVectorizer.md#get_feature_names_out)
- [get\_stop\_words](CountVectorizer.md#get_stop_words)
- [init](CountVectorizer.md#init)
- [inverse\_transform](CountVectorizer.md#inverse_transform)
- [transform](CountVectorizer.md#transform)

## Constructors

### constructor

• **new CountVectorizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CountVectorizerOptions`](../interfaces/CountVectorizerOptions.md) |

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L21)

## Accessors

### fixed\_vocabulary\_

• `get` **fixed_vocabulary_**(): `Promise`<`boolean`\>

True if a fixed vocabulary of term to indices mapping is provided by the user.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L452)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L36)

___

### stop\_words\_

• `get` **stop_words_**(): `Promise`<`any`\>

Terms that were ignored because they either:

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L477)

___

### vocabulary\_

• `get` **vocabulary_**(): `Promise`<`any`\>

A mapping of terms to feature indices.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L427)

## Methods

### build\_analyzer

▸ **build_analyzer**(`opts`): `Promise`<`any`\>

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerBuildAnalyzerOptions`](../interfaces/CountVectorizerBuildAnalyzerOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L122)

___

### build\_preprocessor

▸ **build_preprocessor**(`opts`): `Promise`<`any`\>

Return a function to preprocess the text before tokenization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerBuildPreprocessorOptions`](../interfaces/CountVectorizerBuildPreprocessorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L152)

___

### build\_tokenizer

▸ **build_tokenizer**(`opts`): `Promise`<`any`\>

Return a function that splits a string into a sequence of tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerBuildTokenizerOptions`](../interfaces/CountVectorizerBuildTokenizerOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L182)

___

### decode

▸ **decode**(`opts`): `Promise`<`any`\>

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerDecodeOptions`](../interfaces/CountVectorizerDecodeOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L214)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn a vocabulary dictionary of all tokens in the raw documents.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerFitOptions`](../interfaces/CountVectorizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L242)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Learn the vocabulary dictionary and return document-term matrix.

This is equivalent to fit followed by transform, but more efficiently implemented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerFitTransformOptions`](../interfaces/CountVectorizerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L272)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerGetFeatureNamesOutOptions`](../interfaces/CountVectorizerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L302)

___

### get\_stop\_words

▸ **get_stop_words**(`opts`): `Promise`<`any`\>

Build or fetch the effective stop words list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerGetStopWordsOptions`](../interfaces/CountVectorizerGetStopWordsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L335)

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

[generated/feature_extraction/text/CountVectorizer.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L45)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`[]\>

Return terms per document with nonzero entries in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerInverseTransformOptions`](../interfaces/CountVectorizerInverseTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L363)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Transform documents to document-term matrix.

Extract token counts out of raw text documents using the vocabulary fitted with fit or the one provided to the constructor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CountVectorizerTransformOptions`](../interfaces/CountVectorizerTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L397)
