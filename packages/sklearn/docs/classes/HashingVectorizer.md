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
new HashingVectorizer(opts?: object): HashingVectorizer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alternate_sign?` | `boolean` | When `true`, an alternating sign is added to the features as to approximately conserve the inner product in the hashed space even for small n\_features. This approach is similar to sparse random projection.  `Default Value`  `true` |
| `opts.analyzer?` | `"word"` \| `"char"` \| `"char_wb"` | Whether the feature should be made of word or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.  If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.  `Default Value`  `'word'` |
| `opts.binary?` | `boolean` | If `true`, all non zero counts are set to 1. This is useful for discrete probabilistic models that model binary events rather than integer counts.  `Default Value`  `false` |
| `opts.decode_error?` | `"ignore"` \| `"strict"` \| `"replace"` | Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.  `Default Value`  `'strict'` |
| `opts.dtype?` | `any` | Type of the matrix returned by fit\_transform() or transform(). |
| `opts.encoding?` | `string` | If bytes or files are given to analyze, this encoding is used to decode.  `Default Value`  `'utf-8'` |
| `opts.input?` | `"filename"` \| `"file"` \| `"content"` | If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.  `Default Value`  `'content'` |
| `opts.lowercase?` | `boolean` | Convert all characters to lowercase before tokenizing.  `Default Value`  `true` |
| `opts.n_features?` | `number` | The number of features (columns) in the output matrices. Small numbers of features are likely to cause hash collisions, but large numbers will cause larger coefficient dimensions in linear learners. |
| `opts.ngram_range?` | `any` | The lower and upper boundary of the range of n-values for different n-grams to be extracted. All values of n such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable. |
| `opts.norm?` | `"l1"` \| `"l2"` | Norm used to normalize term vectors. `undefined` for no normalization.  `Default Value`  `'l2'` |
| `opts.preprocessor?` | `any` | Override the preprocessing (string transformation) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable. |
| `opts.stop_words?` | `any`[] \| `"english"` | If ‘english’, a built-in stop word list for English is used. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).  If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`. |
| `opts.strip_accents?` | `"ascii"` \| `"unicode"` | Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any character. `undefined` (default) does nothing.  Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.11)"). |
| `opts.token_pattern?` | `string` | Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp selects tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).  If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted. |
| `opts.tokenizer?` | `any` | Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`. |

### Returns

[`HashingVectorizer`](HashingVectorizer.md)

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L23)

### id

> `string`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L20)

### opts

> `any`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L21)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L136)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L140)

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L136) [generated/feature\_extraction/text/HashingVectorizer.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L140)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L226)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L256)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L286)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L318)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L207)

### fit()

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L355)

### fit\_transform()

Transform a sequence of documents to a document-term matrix.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Samples. Each sample must be a text document (either bytes or unicode strings, file name or file object depending on the constructor argument) which will be tokenized and hashed. |
| `opts.y?` | `any` | Ignored. This parameter exists only for compatibility with sklearn.pipeline.Pipeline. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L395)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L437)

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

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L149)

### partial\_fit()

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L469)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L511)

### transform()

Transform a sequence of documents to a document-term matrix.

#### Signature

```ts
transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Samples. Each sample must be a text document (either bytes or unicode strings, file name or file object depending on the constructor argument) which will be tokenized and hashed. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L546)
