[sklearn](../readme.md) / [Exports](../modules.md) / TfidfVectorizerOptions

# Interface: TfidfVectorizerOptions

## Table of contents

### Properties

- [analyzer](TfidfVectorizerOptions.md#analyzer)
- [binary](TfidfVectorizerOptions.md#binary)
- [decode\_error](TfidfVectorizerOptions.md#decode_error)
- [dtype](TfidfVectorizerOptions.md#dtype)
- [encoding](TfidfVectorizerOptions.md#encoding)
- [input](TfidfVectorizerOptions.md#input)
- [lowercase](TfidfVectorizerOptions.md#lowercase)
- [max\_df](TfidfVectorizerOptions.md#max_df)
- [max\_features](TfidfVectorizerOptions.md#max_features)
- [min\_df](TfidfVectorizerOptions.md#min_df)
- [ngram\_range](TfidfVectorizerOptions.md#ngram_range)
- [norm](TfidfVectorizerOptions.md#norm)
- [preprocessor](TfidfVectorizerOptions.md#preprocessor)
- [smooth\_idf](TfidfVectorizerOptions.md#smooth_idf)
- [stop\_words](TfidfVectorizerOptions.md#stop_words)
- [strip\_accents](TfidfVectorizerOptions.md#strip_accents)
- [sublinear\_tf](TfidfVectorizerOptions.md#sublinear_tf)
- [token\_pattern](TfidfVectorizerOptions.md#token_pattern)
- [tokenizer](TfidfVectorizerOptions.md#tokenizer)
- [use\_idf](TfidfVectorizerOptions.md#use_idf)
- [vocabulary](TfidfVectorizerOptions.md#vocabulary)

## Properties

### analyzer

• `Optional` **analyzer**: ``"word"`` \| ``"char"`` \| ``"char_wb"``

Whether the feature should be made of word or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.

If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.

**`Default Value`**

`'word'`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L551)

___

### binary

• `Optional` **binary**: `boolean`

If `true`, all non-zero term counts are set to 1. This does not mean outputs will have only 0/1 values, only that the tf term in tf-idf is binary. (Set idf and normalization to `false` to get 0/1 outputs).

**`Default Value`**

`false`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L605)

___

### decode\_error

• `Optional` **decode\_error**: ``"ignore"`` \| ``"strict"`` \| ``"replace"``

Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.

**`Default Value`**

`'strict'`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L518)

___

### dtype

• `Optional` **dtype**: `any`

Type of the matrix returned by fit\_transform() or transform().

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L610)

___

### encoding

• `Optional` **encoding**: `string`

If bytes or files are given to analyze, this encoding is used to decode.

**`Default Value`**

`'utf-8'`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L511)

___

### input

• `Optional` **input**: ``"filename"`` \| ``"file"`` \| ``"content"``

If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.

**`Default Value`**

`'content'`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L504)

___

### lowercase

• `Optional` **lowercase**: `boolean`

Convert all characters to lowercase before tokenizing.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L532)

___

### max\_df

• `Optional` **max\_df**: `number`

When building the vocabulary ignore terms that have a document frequency strictly higher than the given threshold (corpus-specific stop words). If float in range \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

**`Default Value`**

`1`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L579)

___

### max\_features

• `Optional` **max\_features**: `number`

If not `undefined`, build a vocabulary that only consider the top `max\_features` ordered by term frequency across the corpus. Otherwise, all features are used.

This parameter is ignored if vocabulary is not `undefined`.

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L593)

___

### min\_df

• `Optional` **min\_df**: `number`

When building the vocabulary ignore terms that have a document frequency strictly lower than the given threshold. This value is also called cut-off in the literature. If float in range of \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

**`Default Value`**

`1`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L586)

___

### ngram\_range

• `Optional` **ngram\_range**: `any`

The lower and upper boundary of the range of n-values for different n-grams to be extracted. All values of n such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable.

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L572)

___

### norm

• `Optional` **norm**: ``"l1"`` \| ``"l2"``

Each output row will have unit norm, either:

**`Default Value`**

`'l2'`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L617)

___

### preprocessor

• `Optional` **preprocessor**: `any`

Override the preprocessing (string transformation) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable.

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L537)

___

### smooth\_idf

• `Optional` **smooth\_idf**: `boolean`

Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L631)

___

### stop\_words

• `Optional` **stop\_words**: `any`[] \| ``"english"``

If a string, it is passed to \_check\_stop\_list and the appropriate stop list is returned. ‘english’ is currently the only supported string value. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).

If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.

If `undefined`, no stop words will be used. In this case, setting `max\_df` to a higher value, such as in the range (0.7, 1.0), can automatically detect and filter stop words based on intra corpus document frequency of terms.

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L560)

___

### strip\_accents

• `Optional` **strip\_accents**: ``"ascii"`` \| ``"unicode"``

Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any characters. `undefined` (default) does nothing.

Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.11)").

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L525)

___

### sublinear\_tf

• `Optional` **sublinear\_tf**: `boolean`

Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).

**`Default Value`**

`false`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L638)

___

### token\_pattern

• `Optional` **token\_pattern**: `string`

Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp selects tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).

If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted.

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L567)

___

### tokenizer

• `Optional` **tokenizer**: `any`

Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`.

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L542)

___

### use\_idf

• `Optional` **use\_idf**: `boolean`

Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:624](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L624)

___

### vocabulary

• `Optional` **vocabulary**: `any`

Either a Mapping (e.g., a dict) where keys are terms and values are indices in the feature matrix, or an iterable over terms. If not given, a vocabulary is determined from the input documents.

#### Defined in

[generated/feature_extraction/text/TfidfVectorizer.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L598)