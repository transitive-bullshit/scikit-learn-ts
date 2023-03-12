[sklearn](../readme.md) / [Exports](../modules.md) / CountVectorizerOptions

# Interface: CountVectorizerOptions

## Table of contents

### Properties

- [analyzer](CountVectorizerOptions.md#analyzer)
- [binary](CountVectorizerOptions.md#binary)
- [decode\_error](CountVectorizerOptions.md#decode_error)
- [dtype](CountVectorizerOptions.md#dtype)
- [encoding](CountVectorizerOptions.md#encoding)
- [input](CountVectorizerOptions.md#input)
- [lowercase](CountVectorizerOptions.md#lowercase)
- [max\_df](CountVectorizerOptions.md#max_df)
- [max\_features](CountVectorizerOptions.md#max_features)
- [min\_df](CountVectorizerOptions.md#min_df)
- [ngram\_range](CountVectorizerOptions.md#ngram_range)
- [preprocessor](CountVectorizerOptions.md#preprocessor)
- [stop\_words](CountVectorizerOptions.md#stop_words)
- [strip\_accents](CountVectorizerOptions.md#strip_accents)
- [token\_pattern](CountVectorizerOptions.md#token_pattern)
- [tokenizer](CountVectorizerOptions.md#tokenizer)
- [vocabulary](CountVectorizerOptions.md#vocabulary)

## Properties

### analyzer

• `Optional` **analyzer**: ``"word"`` \| ``"char"`` \| ``"char_wb"``

Whether the feature should be made of word n-gram or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.

If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.

**`Default Value`**

`'word'`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L574)

___

### binary

• `Optional` **binary**: `boolean`

If `true`, all non zero counts are set to 1. This is useful for discrete probabilistic models that model binary events rather than integer counts.

**`Default Value`**

`false`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L607)

___

### decode\_error

• `Optional` **decode\_error**: ``"ignore"`` \| ``"strict"`` \| ``"replace"``

Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.

**`Default Value`**

`'strict'`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L520)

___

### dtype

• `Optional` **dtype**: `any`

Type of the matrix returned by fit\_transform() or transform().

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L612)

___

### encoding

• `Optional` **encoding**: `string`

If bytes or files are given to analyze, this encoding is used to decode.

**`Default Value`**

`'utf-8'`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L513)

___

### input

• `Optional` **input**: ``"filename"`` \| ``"file"`` \| ``"content"``

If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.

**`Default Value`**

`'content'`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L506)

___

### lowercase

• `Optional` **lowercase**: `boolean`

Convert all characters to lowercase before tokenizing.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L534)

___

### max\_df

• `Optional` **max\_df**: `number`

When building the vocabulary ignore terms that have a document frequency strictly higher than the given threshold (corpus-specific stop words). If float, the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

**`Default Value`**

`1`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L581)

___

### max\_features

• `Optional` **max\_features**: `number`

If not `undefined`, build a vocabulary that only consider the top `max\_features` ordered by term frequency across the corpus. Otherwise, all features are used.

This parameter is ignored if vocabulary is not `undefined`.

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L595)

___

### min\_df

• `Optional` **min\_df**: `number`

When building the vocabulary ignore terms that have a document frequency strictly lower than the given threshold. This value is also called cut-off in the literature. If float, the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

**`Default Value`**

`1`

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L588)

___

### ngram\_range

• `Optional` **ngram\_range**: `any`

The lower and upper boundary of the range of n-values for different word n-grams or char n-grams to be extracted. All values of n such such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable.

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L565)

___

### preprocessor

• `Optional` **preprocessor**: `any`

Override the preprocessing (strip\_accents and lowercase) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable.

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L539)

___

### stop\_words

• `Optional` **stop\_words**: `any`[] \| ``"english"``

If ‘english’, a built-in stop word list for English is used. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).

If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.

If `undefined`, no stop words will be used. In this case, setting `max\_df` to a higher value, such as in the range (0.7, 1.0), can automatically detect and filter stop words based on intra corpus document frequency of terms.

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L553)

___

### strip\_accents

• `Optional` **strip\_accents**: ``"ascii"`` \| ``"unicode"``

Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any characters. `undefined` (default) does nothing.

Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.11)").

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L527)

___

### token\_pattern

• `Optional` **token\_pattern**: `string`

Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp select tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).

If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted.

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L560)

___

### tokenizer

• `Optional` **tokenizer**: `any`

Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`.

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L544)

___

### vocabulary

• `Optional` **vocabulary**: `any`

Either a Mapping (e.g., a dict) where keys are terms and values are indices in the feature matrix, or an iterable over terms. If not given, a vocabulary is determined from the input documents. Indices in the mapping should not be repeated and should not have any gap between 0 and the largest index.

#### Defined in

[generated/feature_extraction/text/CountVectorizer.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L600)
