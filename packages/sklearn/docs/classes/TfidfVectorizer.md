[sklearn](../readme.md) / [Exports](../modules.md) / TfidfVectorizer

# Class: TfidfVectorizer

Convert a collection of raw documents to a matrix of TF-IDF features.

Equivalent to [`CountVectorizer`](sklearn.feature_extraction.text.CountVectorizer.html#sklearn.feature_extraction.text.CountVectorizer "sklearn.feature_extraction.text.CountVectorizer") followed by [`TfidfTransformer`](sklearn.feature_extraction.text.TfidfTransformer.html#sklearn.feature_extraction.text.TfidfTransformer "sklearn.feature_extraction.text.TfidfTransformer").

Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html

## Table of contents

### Constructors

- [constructor](TfidfVectorizer.md#constructor)

### Properties

- [\_isDisposed](TfidfVectorizer.md#_isdisposed)
- [\_isInitialized](TfidfVectorizer.md#_isinitialized)
- [\_py](TfidfVectorizer.md#_py)
- [id](TfidfVectorizer.md#id)
- [opts](TfidfVectorizer.md#opts)

### Accessors

- [fixed\_vocabulary\_](TfidfVectorizer.md#fixed_vocabulary_)
- [py](TfidfVectorizer.md#py)
- [stop\_words\_](TfidfVectorizer.md#stop_words_)
- [vocabulary\_](TfidfVectorizer.md#vocabulary_)

### Methods

- [build\_analyzer](TfidfVectorizer.md#build_analyzer)
- [build\_preprocessor](TfidfVectorizer.md#build_preprocessor)
- [build\_tokenizer](TfidfVectorizer.md#build_tokenizer)
- [decode](TfidfVectorizer.md#decode)
- [dispose](TfidfVectorizer.md#dispose)
- [fit](TfidfVectorizer.md#fit)
- [fit\_transform](TfidfVectorizer.md#fit_transform)
- [get\_feature\_names\_out](TfidfVectorizer.md#get_feature_names_out)
- [get\_stop\_words](TfidfVectorizer.md#get_stop_words)
- [init](TfidfVectorizer.md#init)
- [inverse\_transform](TfidfVectorizer.md#inverse_transform)
- [transform](TfidfVectorizer.md#transform)

## Constructors

### constructor

• **new TfidfVectorizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TfidfVectorizerOptions`](../interfaces/TfidfVectorizerOptions.md) |

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L19)

## Accessors

### fixed\_vocabulary\_

• `get` **fixed_vocabulary_**(): `Promise`<`boolean`\>

True if a fixed vocabulary of term to indices mapping is provided by the user.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L450)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L34)

___

### stop\_words\_

• `get` **stop_words_**(): `Promise`<`any`\>

Terms that were ignored because they either:

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L475)

___

### vocabulary\_

• `get` **vocabulary_**(): `Promise`<`any`\>

A mapping of terms to feature indices.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L425)

## Methods

### build\_analyzer

▸ **build_analyzer**(`opts`): `Promise`<`any`\>

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerBuildAnalyzerOptions`](../interfaces/TfidfVectorizerBuildAnalyzerOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L124)

___

### build\_preprocessor

▸ **build_preprocessor**(`opts`): `Promise`<`any`\>

Return a function to preprocess the text before tokenization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerBuildPreprocessorOptions`](../interfaces/TfidfVectorizerBuildPreprocessorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L154)

___

### build\_tokenizer

▸ **build_tokenizer**(`opts`): `Promise`<`any`\>

Return a function that splits a string into a sequence of tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerBuildTokenizerOptions`](../interfaces/TfidfVectorizerBuildTokenizerOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L184)

___

### decode

▸ **decode**(`opts`): `Promise`<`any`\>

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerDecodeOptions`](../interfaces/TfidfVectorizerDecodeOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L216)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L105)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn vocabulary and idf from training set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerFitOptions`](../interfaces/TfidfVectorizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L244)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`\>

Learn vocabulary and idf, return document-term matrix.

This is equivalent to fit followed by transform, but more efficiently implemented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerFitTransformOptions`](../interfaces/TfidfVectorizerFitTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L274)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerGetFeatureNamesOutOptions`](../interfaces/TfidfVectorizerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L302)

___

### get\_stop\_words

▸ **get_stop_words**(`opts`): `Promise`<`any`\>

Build or fetch the effective stop words list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerGetStopWordsOptions`](../interfaces/TfidfVectorizerGetStopWordsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L335)

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

[generated/feature_extraction/text/TfidfVectorizer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<`any`[]\>

Return terms per document with nonzero entries in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerInverseTransformOptions`](../interfaces/TfidfVectorizerInverseTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L363)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Transform documents to document-term matrix.

Uses the vocabulary and document frequencies (df) learned by fit (or fit\_transform).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerTransformOptions`](../interfaces/TfidfVectorizerTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L397)
