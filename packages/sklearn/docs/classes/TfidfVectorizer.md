# TfidfVectorizer

Convert a collection of raw documents to a matrix of TF-IDF features.

Equivalent to [`CountVectorizer`](sklearn.feature_extraction.text.CountVectorizer.html#sklearn.feature_extraction.text.CountVectorizer "sklearn.feature_extraction.text.CountVectorizer") followed by [`TfidfTransformer`](sklearn.feature_extraction.text.TfidfTransformer.html#sklearn.feature_extraction.text.TfidfTransformer "sklearn.feature_extraction.text.TfidfTransformer").

Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)

## Constructors

## constructor()

### Signature

```ts
new TfidfVectorizer(opts?: object): TfidfVectorizer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.analyzer?` | `"word"` \| `"char"` \| `"char_wb"` | Whether the feature should be made of word or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.  If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.  `Default Value`  `'word'` |
| `opts.binary?` | `boolean` | If `true`, all non-zero term counts are set to 1. This does not mean outputs will have only 0/1 values, only that the tf term in tf-idf is binary. (Set idf and normalization to `false` to get 0/1 outputs).  `Default Value`  `false` |
| `opts.decode_error?` | `"ignore"` \| `"strict"` \| `"replace"` | Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.  `Default Value`  `'strict'` |
| `opts.dtype?` | `any` | Type of the matrix returned by fit\_transform() or transform(). |
| `opts.encoding?` | `string` | If bytes or files are given to analyze, this encoding is used to decode.  `Default Value`  `'utf-8'` |
| `opts.input?` | `"filename"` \| `"file"` \| `"content"` | If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.  `Default Value`  `'content'` |
| `opts.lowercase?` | `boolean` | Convert all characters to lowercase before tokenizing.  `Default Value`  `true` |
| `opts.max_df?` | `number` | When building the vocabulary ignore terms that have a document frequency strictly higher than the given threshold (corpus-specific stop words). If float in range \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.  `Default Value`  `1` |
| `opts.max_features?` | `number` | If not `undefined`, build a vocabulary that only consider the top `max\_features` ordered by term frequency across the corpus. Otherwise, all features are used.  This parameter is ignored if vocabulary is not `undefined`. |
| `opts.min_df?` | `number` | When building the vocabulary ignore terms that have a document frequency strictly lower than the given threshold. This value is also called cut-off in the literature. If float in range of \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.  `Default Value`  `1` |
| `opts.ngram_range?` | `any` | The lower and upper boundary of the range of n-values for different n-grams to be extracted. All values of n such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable. |
| `opts.norm?` | `"l1"` \| `"l2"` | Each output row will have unit norm, either:  `Default Value`  `'l2'` |
| `opts.preprocessor?` | `any` | Override the preprocessing (string transformation) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable. |
| `opts.smooth_idf?` | `boolean` | Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.  `Default Value`  `true` |
| `opts.stop_words?` | `any`[] \| `"english"` | If a string, it is passed to \_check\_stop\_list and the appropriate stop list is returned. ‘english’ is currently the only supported string value. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).  If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.  If `undefined`, no stop words will be used. In this case, setting `max\_df` to a higher value, such as in the range (0.7, 1.0), can automatically detect and filter stop words based on intra corpus document frequency of terms. |
| `opts.strip_accents?` | `"ascii"` \| `"unicode"` | Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any characters. `undefined` (default) does nothing.  Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.11)"). |
| `opts.sublinear_tf?` | `boolean` | Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).  `Default Value`  `false` |
| `opts.token_pattern?` | `string` | Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp selects tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).  If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted. |
| `opts.tokenizer?` | `any` | Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`. |
| `opts.use_idf?` | `boolean` | Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.  `Default Value`  `true` |
| `opts.vocabulary?` | `any` | Either a Mapping (e.g., a dict) where keys are terms and values are indices in the feature matrix, or an iterable over terms. If not given, a vocabulary is determined from the input documents. |

### Returns

[`TfidfVectorizer`](TfidfVectorizer.md)

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L19)

## Accessors

### fixed\_vocabulary\_

True if a fixed vocabulary of term to indices mapping is provided by the user.

#### Signature

```ts
fixed_vocabulary_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L621)

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L621)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L171)

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

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L175)

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L171) [generated/feature\_extraction/text/TfidfVectorizer.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L175)

### stop\_words\_

Terms that were ignored because they either:

#### Signature

```ts
stop_words_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L646)

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L646)

### vocabulary\_

A mapping of terms to feature indices.

#### Signature

```ts
vocabulary_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L596)

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L596)

## Methods

### build\_analyzer()

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Signature

```ts
build_analyzer(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L265)

### build\_preprocessor()

Return a function to preprocess the text before tokenization.

#### Signature

```ts
build_preprocessor(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L293)

### build\_tokenizer()

Return a function that splits a string into a sequence of tokens.

#### Signature

```ts
build_tokenizer(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L321)

### decode()

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Signature

```ts
decode(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.doc?` | `string` | The string to decode. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L351)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L246)

### fit()

Learn vocabulary and idf from training set.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.raw_documents?` | `any` | An iterable which generates either str, unicode or file objects. |
| `opts.y?` | `any` | This parameter is not needed to compute tfidf. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L384)

### fit\_transform()

Learn vocabulary and idf, return document-term matrix.

This is equivalent to fit followed by transform, but more efficiently implemented.

#### Signature

```ts
fit_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.raw_documents?` | `any` | An iterable which generates either str, unicode or file objects. |
| `opts.y?` | `any` | This parameter is ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L424)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L462)

### get\_stop\_words()

Build or fetch the effective stop words list.

#### Signature

```ts
get_stop_words(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L498)

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

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L184)

### inverse\_transform()

Return terms per document with nonzero entries in X.

#### Signature

```ts
inverse_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Document-term matrix. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L526)

### transform()

Transform documents to document-term matrix.

Uses the vocabulary and document frequencies (df) learned by fit (or fit\_transform).

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.raw_documents?` | `any` | An iterable which generates either str, unicode or file objects. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfVectorizer.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L563)
