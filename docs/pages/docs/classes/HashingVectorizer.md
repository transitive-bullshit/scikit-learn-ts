# HashingVectorizer

Convert a collection of text documents to a matrix of token occurrences.

It turns a collection of text documents into a scipy.sparse matrix holding token occurrence counts (or binary occurrence information), possibly normalized as token frequencies if norm=’l1’ or projected on the euclidean unit sphere if norm=’l2’.

This text vectorizer implementation uses the hashing trick to find the token string name to feature integer index mapping.

This strategy has several advantages:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.HashingVectorizer.html)

## Constructors

## constructor()

### Signature

```ts
new HashingVectorizer(opts?: HashingVectorizerOptions): HashingVectorizer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `HashingVectorizerOptions` |

### Returns

[`HashingVectorizer`](HashingVectorizer.md)

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L23)

### id

> `string`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L20)

### opts

> `any`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L32)

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

Defined in: [generated/feature\_extraction/text/HashingVectorizer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L36)

## Methods

### build\_analyzer()

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Signature

```ts
build_analyzer(opts: HashingVectorizerBuildAnalyzerOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerBuildAnalyzerOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L122)

### build\_preprocessor()

Return a function to preprocess the text before tokenization.

#### Signature

```ts
build_preprocessor(opts: HashingVectorizerBuildPreprocessorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerBuildPreprocessorOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L154)

### build\_tokenizer()

Return a function that splits a string into a sequence of tokens.

#### Signature

```ts
build_tokenizer(opts: HashingVectorizerBuildTokenizerOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerBuildTokenizerOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L186)

### decode()

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Signature

```ts
decode(opts: HashingVectorizerDecodeOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerDecodeOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L220)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L103)

### fit()

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
fit(opts: HashingVectorizerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L252)

### fit\_transform()

Transform a sequence of documents to a document-term matrix.

#### Signature

```ts
fit_transform(opts: HashingVectorizerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L282)

### get\_stop\_words()

Build or fetch the effective stop words list.

#### Signature

```ts
get_stop_words(opts: HashingVectorizerGetStopWordsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerGetStopWordsOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L316)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L45)

### partial\_fit()

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
partial_fit(opts: HashingVectorizerPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L350)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: HashingVectorizerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L382)

### transform()

Transform a sequence of documents to a document-term matrix.

#### Signature

```ts
transform(opts: HashingVectorizerTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `HashingVectorizerTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L412)
