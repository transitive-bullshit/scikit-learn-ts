# TfidfVectorizer

Convert a collection of raw documents to a matrix of TF-IDF features.

Equivalent to [`CountVectorizer`](sklearn.feature_extraction.text.CountVectorizer.html#sklearn.feature_extraction.text.CountVectorizer "sklearn.feature_extraction.text.CountVectorizer") followed by [`TfidfTransformer`](sklearn.feature_extraction.text.TfidfTransformer.html#sklearn.feature_extraction.text.TfidfTransformer "sklearn.feature_extraction.text.TfidfTransformer").

Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)

## Constructors

## constructor()

### Signature

```ts
new TfidfVectorizer(opts?: TfidfVectorizerOptions): TfidfVectorizer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TfidfVectorizerOptions`](../interfaces/TfidfVectorizerOptions.md) |

### Returns

[`TfidfVectorizer`](TfidfVectorizer.md)

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L19)

## Accessors

### fixed\_vocabulary\_

True if a fixed vocabulary of term to indices mapping is provided by the user.

#### Signature

```ts
fixed_vocabulary_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/feature\_extraction/text/TfidfVectorizer.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L450)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L30)

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

Defined in: [generated/feature\_extraction/text/TfidfVectorizer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L34)

### stop\_words\_

Terms that were ignored because they either:

#### Signature

```ts
stop_words_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_extraction/text/TfidfVectorizer.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L475)

### vocabulary\_

A mapping of terms to feature indices.

#### Signature

```ts
vocabulary_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_extraction/text/TfidfVectorizer.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L425)

## Methods

### build\_analyzer()

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Signature

```ts
build_analyzer(opts: TfidfVectorizerBuildAnalyzerOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerBuildAnalyzerOptions`](../interfaces/TfidfVectorizerBuildAnalyzerOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L124)

### build\_preprocessor()

Return a function to preprocess the text before tokenization.

#### Signature

```ts
build_preprocessor(opts: TfidfVectorizerBuildPreprocessorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerBuildPreprocessorOptions`](../interfaces/TfidfVectorizerBuildPreprocessorOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L154)

### build\_tokenizer()

Return a function that splits a string into a sequence of tokens.

#### Signature

```ts
build_tokenizer(opts: TfidfVectorizerBuildTokenizerOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerBuildTokenizerOptions`](../interfaces/TfidfVectorizerBuildTokenizerOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L184)

### decode()

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Signature

```ts
decode(opts: TfidfVectorizerDecodeOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerDecodeOptions`](../interfaces/TfidfVectorizerDecodeOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L216)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L105)

### fit()

Learn vocabulary and idf from training set.

#### Signature

```ts
fit(opts: TfidfVectorizerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerFitOptions`](../interfaces/TfidfVectorizerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L244)

### fit\_transform()

Learn vocabulary and idf, return document-term matrix.

This is equivalent to fit followed by transform, but more efficiently implemented.

#### Signature

```ts
fit_transform(opts: TfidfVectorizerFitTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerFitTransformOptions`](../interfaces/TfidfVectorizerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L274)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: TfidfVectorizerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerGetFeatureNamesOutOptions`](../interfaces/TfidfVectorizerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L302)

### get\_stop\_words()

Build or fetch the effective stop words list.

#### Signature

```ts
get_stop_words(opts: TfidfVectorizerGetStopWordsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerGetStopWordsOptions`](../interfaces/TfidfVectorizerGetStopWordsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L335)

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

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L43)

### inverse\_transform()

Return terms per document with nonzero entries in X.

#### Signature

```ts
inverse_transform(opts: TfidfVectorizerInverseTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerInverseTransformOptions`](../interfaces/TfidfVectorizerInverseTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L363)

### transform()

Transform documents to document-term matrix.

Uses the vocabulary and document frequencies (df) learned by fit (or fit\_transform).

#### Signature

```ts
transform(opts: TfidfVectorizerTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TfidfVectorizerTransformOptions`](../interfaces/TfidfVectorizerTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L397)
