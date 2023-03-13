# HashingVectorizerOptions

## Properties

### alternate\_sign?

> `boolean`

When `true`, an alternating sign is added to the features as to approximately conserve the inner product in the hashed space even for small n\_features. This approach is similar to sparse random projection.

#### Default Value

`true`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L540)

### analyzer?

> `"word"` \| `"char"` \| `"char_wb"`

Whether the feature should be made of word or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.

If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.

#### Default Value

`'word'`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L514)

### binary?

> `boolean`

If `true`, all non zero counts are set to 1. This is useful for discrete probabilistic models that model binary events rather than integer counts.

#### Default Value

`false`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L526)

### decode\_error?

> `"ignore"` \| `"strict"` \| `"replace"`

Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.

#### Default Value

`'strict'`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L462)

### dtype?

> `any`

Type of the matrix returned by fit\_transform() or transform().

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L545)

### encoding?

> `string`

If bytes or files are given to analyze, this encoding is used to decode.

#### Default Value

`'utf-8'`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L455)

### input?

> `"filename"` \| `"file"` \| `"content"`

If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.

#### Default Value

`'content'`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L448)

### lowercase?

> `boolean`

Convert all characters to lowercase before tokenizing.

#### Default Value

`true`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L476)

### n\_features?

> `number`

The number of features (columns) in the output matrices. Small numbers of features are likely to cause hash collisions, but large numbers will cause larger coefficient dimensions in linear learners.

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L519)

### ngram\_range?

> `any`

The lower and upper boundary of the range of n-values for different n-grams to be extracted. All values of n such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable.

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L505)

### norm?

> `"l1"` \| `"l2"`

Norm used to normalize term vectors. `undefined` for no normalization.

#### Default Value

`'l2'`

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L533)

### preprocessor?

> `any`

Override the preprocessing (string transformation) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable.

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L481)

### stop\_words?

> `any`[] \| `"english"`

If ‘english’, a built-in stop word list for English is used. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).

If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L493)

### strip\_accents?

> `"ascii"` \| `"unicode"`

Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any character. `undefined` (default) does nothing.

Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.11)").

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L469)

### token\_pattern?

> `string`

Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp selects tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).

If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted.

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L500)

### tokenizer?

> `any`

Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`.

Defined in:  [generated/feature\_extraction/text/HashingVectorizer.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_extraction/text/HashingVectorizer.ts#L486)
