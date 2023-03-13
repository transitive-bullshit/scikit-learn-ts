# CountVectorizer

Convert a collection of text documents to a matrix of token counts.

This implementation produces a sparse representation of the counts using scipy.sparse.csr\_matrix.

If you do not provide an a-priori dictionary and you do not use an analyzer that does some kind of feature selection then the number of features will be equal to the vocabulary size found by analyzing the data.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html)

## Constructors

## constructor()

### Signature

```ts
new CountVectorizer(opts?: CountVectorizerOptions): CountVectorizer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `CountVectorizerOptions` |

### Returns

[`CountVectorizer`](CountVectorizer.md)

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L23)

### id

> `string`

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L20)

### opts

> `any`

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L21)

## Accessors

### fixed\_vocabulary\_

True if a fixed vocabulary of term to indices mapping is provided by the user.

#### Signature

```ts
fixed_vocabulary_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/feature\_extraction/text/CountVectorizer.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L452)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L32)

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

Defined in: [generated/feature\_extraction/text/CountVectorizer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L36)

### stop\_words\_

Terms that were ignored because they either:

#### Signature

```ts
stop_words_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_extraction/text/CountVectorizer.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L477)

### vocabulary\_

A mapping of terms to feature indices.

#### Signature

```ts
vocabulary_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_extraction/text/CountVectorizer.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L427)

## Methods

### build\_analyzer()

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Signature

```ts
build_analyzer(opts: CountVectorizerBuildAnalyzerOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerBuildAnalyzerOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L122)

### build\_preprocessor()

Return a function to preprocess the text before tokenization.

#### Signature

```ts
build_preprocessor(opts: CountVectorizerBuildPreprocessorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerBuildPreprocessorOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L152)

### build\_tokenizer()

Return a function that splits a string into a sequence of tokens.

#### Signature

```ts
build_tokenizer(opts: CountVectorizerBuildTokenizerOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerBuildTokenizerOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L182)

### decode()

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Signature

```ts
decode(opts: CountVectorizerDecodeOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerDecodeOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L214)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L103)

### fit()

Learn a vocabulary dictionary of all tokens in the raw documents.

#### Signature

```ts
fit(opts: CountVectorizerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L242)

### fit\_transform()

Learn the vocabulary dictionary and return document-term matrix.

This is equivalent to fit followed by transform, but more efficiently implemented.

#### Signature

```ts
fit_transform(opts: CountVectorizerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L272)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: CountVectorizerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L302)

### get\_stop\_words()

Build or fetch the effective stop words list.

#### Signature

```ts
get_stop_words(opts: CountVectorizerGetStopWordsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerGetStopWordsOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L335)

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

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L45)

### inverse\_transform()

Return terms per document with nonzero entries in X.

#### Signature

```ts
inverse_transform(opts: CountVectorizerInverseTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerInverseTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L363)

### transform()

Transform documents to document-term matrix.

Extract token counts out of raw text documents using the vocabulary fitted with fit or the one provided to the constructor.

#### Signature

```ts
transform(opts: CountVectorizerTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `CountVectorizerTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/CountVectorizer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L397)
