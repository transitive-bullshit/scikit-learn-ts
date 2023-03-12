[sklearn](../readme.md) / [Exports](../modules.md) / HashingVectorizer

# Class: HashingVectorizer

Convert a collection of text documents to a matrix of token occurrences.

It turns a collection of text documents into a scipy.sparse matrix holding token occurrence counts (or binary occurrence information), possibly normalized as token frequencies if norm=’l1’ or projected on the euclidean unit sphere if norm=’l2’.

This text vectorizer implementation uses the hashing trick to find the token string name to feature integer index mapping.

This strategy has several advantages:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.HashingVectorizer.html

## Table of contents

### Constructors

- [constructor](HashingVectorizer.md#constructor)

### Properties

- [\_isDisposed](HashingVectorizer.md#_isdisposed)
- [\_isInitialized](HashingVectorizer.md#_isinitialized)
- [\_py](HashingVectorizer.md#_py)
- [id](HashingVectorizer.md#id)
- [opts](HashingVectorizer.md#opts)

### Accessors

- [py](HashingVectorizer.md#py)

### Methods

- [build\_analyzer](HashingVectorizer.md#build_analyzer)
- [build\_preprocessor](HashingVectorizer.md#build_preprocessor)
- [build\_tokenizer](HashingVectorizer.md#build_tokenizer)
- [decode](HashingVectorizer.md#decode)
- [dispose](HashingVectorizer.md#dispose)
- [fit](HashingVectorizer.md#fit)
- [fit\_transform](HashingVectorizer.md#fit_transform)
- [get\_stop\_words](HashingVectorizer.md#get_stop_words)
- [init](HashingVectorizer.md#init)
- [partial\_fit](HashingVectorizer.md#partial_fit)
- [set\_output](HashingVectorizer.md#set_output)
- [transform](HashingVectorizer.md#transform)

## Constructors

### constructor

• **new HashingVectorizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HashingVectorizerOptions`](../interfaces/HashingVectorizerOptions.md) |

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L21)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L36)

## Methods

### build\_analyzer

▸ **build_analyzer**(`opts`): `Promise`<`any`\>

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerBuildAnalyzerOptions`](../interfaces/HashingVectorizerBuildAnalyzerOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L122)

___

### build\_preprocessor

▸ **build_preprocessor**(`opts`): `Promise`<`any`\>

Return a function to preprocess the text before tokenization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerBuildPreprocessorOptions`](../interfaces/HashingVectorizerBuildPreprocessorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L154)

___

### build\_tokenizer

▸ **build_tokenizer**(`opts`): `Promise`<`any`\>

Return a function that splits a string into a sequence of tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerBuildTokenizerOptions`](../interfaces/HashingVectorizerBuildTokenizerOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L186)

___

### decode

▸ **decode**(`opts`): `Promise`<`any`\>

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerDecodeOptions`](../interfaces/HashingVectorizerDecodeOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L220)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerFitOptions`](../interfaces/HashingVectorizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L252)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Transform a sequence of documents to a document-term matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerFitTransformOptions`](../interfaces/HashingVectorizerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L282)

___

### get\_stop\_words

▸ **get_stop_words**(`opts`): `Promise`<`any`\>

Build or fetch the effective stop words list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerGetStopWordsOptions`](../interfaces/HashingVectorizerGetStopWordsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L316)

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

[generated/feature_extraction/text/HashingVectorizer.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L45)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerPartialFitOptions`](../interfaces/HashingVectorizerPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L350)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerSetOutputOptions`](../interfaces/HashingVectorizerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L382)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Transform a sequence of documents to a document-term matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HashingVectorizerTransformOptions`](../interfaces/HashingVectorizerTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/HashingVectorizer.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L412)
