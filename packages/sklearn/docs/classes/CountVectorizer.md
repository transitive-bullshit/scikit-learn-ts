[**sklearn**](../README.md) • **Docs**

***

Convert a collection of text documents to a matrix of token counts.

This implementation produces a sparse representation of the counts using scipy.sparse.csr\_matrix.

If you do not provide an a-priori dictionary and you do not use an analyzer that does some kind of feature selection then the number of features will be equal to the vocabulary size found by analyzing the data.

For an efficiency comparison of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html)

## Constructors

### new CountVectorizer()

> **new CountVectorizer**(`opts`?): [`CountVectorizer`](CountVectorizer.md)

#### Parameters

• **opts?**

• **opts.analyzer?**: `"word"` \| `"char"` \| `"char_wb"`

Whether the feature should be made of word n-gram or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.

If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.

**Default Value**

`'word'`

• **opts.binary?**: `boolean`

If `true`, all non zero counts are set to 1. This is useful for discrete probabilistic models that model binary events rather than integer counts.

**Default Value**

`false`

• **opts.decode\_error?**: `"strict"` \| `"ignore"` \| `"replace"`

Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.

**Default Value**

`'strict'`

• **opts.dtype?**: `any`

Type of the matrix returned by fit\_transform() or transform().

• **opts.encoding?**: `string`

If bytes or files are given to analyze, this encoding is used to decode.

**Default Value**

`'utf-8'`

• **opts.input?**: `"filename"` \| `"file"` \| `"content"`

If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.

**Default Value**

`'content'`

• **opts.lowercase?**: `boolean`

Convert all characters to lowercase before tokenizing.

**Default Value**

`true`

• **opts.max\_df?**: `number`

When building the vocabulary ignore terms that have a document frequency strictly higher than the given threshold (corpus-specific stop words). If float, the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

**Default Value**

`1`

• **opts.max\_features?**: `number`

If not `undefined`, build a vocabulary that only consider the top `max\_features` ordered by term frequency across the corpus. Otherwise, all features are used.

This parameter is ignored if vocabulary is not `undefined`.

• **opts.min\_df?**: `number`

When building the vocabulary ignore terms that have a document frequency strictly lower than the given threshold. This value is also called cut-off in the literature. If float, the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

**Default Value**

`1`

• **opts.ngram\_range?**: `any`

The lower and upper boundary of the range of n-values for different word n-grams or char n-grams to be extracted. All values of n such such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable.

• **opts.preprocessor?**: `any`

Override the preprocessing (strip\_accents and lowercase) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable.

• **opts.stop\_words?**: `any`[] \| `"english"`

If ‘english’, a built-in stop word list for English is used. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).

If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.

If `undefined`, no stop words will be used. In this case, setting `max\_df` to a higher value, such as in the range (0.7, 1.0), can automatically detect and filter stop words based on intra corpus document frequency of terms.

• **opts.strip\_accents?**: `"ascii"` \| `"unicode"`

Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any characters. `undefined` (default) means no character normalization is performed.

Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.13)").

• **opts.token\_pattern?**: `string`

Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp select tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).

If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted.

• **opts.tokenizer?**: `any`

Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`.

• **opts.vocabulary?**: `any`

Either a Mapping (e.g., a dict) where keys are terms and values are indices in the feature matrix, or an iterable over terms. If not given, a vocabulary is determined from the input documents. Indices in the mapping should not be repeated and should not have any gap between 0 and the largest index.

#### Returns

[`CountVectorizer`](CountVectorizer.md)

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L23)

## Accessors

### fixed\_vocabulary\_

#### Get Signature

> **get** **fixed\_vocabulary\_**(): `Promise`\<`boolean`\>

True if a fixed vocabulary of term to indices mapping is provided by the user.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L679)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L147)

***

### vocabulary\_

#### Get Signature

> **get** **vocabulary\_**(): `Promise`\<`any`\>

A mapping of terms to feature indices.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L654)

## Methods

### build\_analyzer()

> **build\_analyzer**(`opts`): `Promise`\<`any`\>

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L218)

***

### build\_preprocessor()

> **build\_preprocessor**(`opts`): `Promise`\<`any`\>

Return a function to preprocess the text before tokenization.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L246)

***

### build\_tokenizer()

> **build\_tokenizer**(`opts`): `Promise`\<`any`\>

Return a function that splits a string into a sequence of tokens.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L274)

***

### decode()

> **decode**(`opts`): `Promise`\<`any`\>

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Parameters

• **opts**

• **opts.doc?**: `string`

The string to decode.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L304)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L199)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn a vocabulary dictionary of all tokens in the raw documents.

#### Parameters

• **opts**

• **opts.raw\_documents?**: `any`

An iterable which generates either str, unicode or file objects.

• **opts.y?**: `any`

This parameter is ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L336)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Learn the vocabulary dictionary and return document-term matrix.

This is equivalent to fit followed by transform, but more efficiently implemented.

#### Parameters

• **opts**

• **opts.raw\_documents?**: `any`

An iterable which generates either str, unicode or file objects.

• **opts.y?**: `any`

This parameter is ignored.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L375)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L412)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L448)

***

### get\_stop\_words()

> **get\_stop\_words**(`opts`): `Promise`\<`any`\>

Build or fetch the effective stop words list.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L482)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L160)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`[]\>

Return terms per document with nonzero entries in X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Document-term matrix.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L510)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.raw\_documents?**: `string` \| `boolean`

Metadata routing for `raw\_documents` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L548)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.raw\_documents?**: `string` \| `boolean`

Metadata routing for `raw\_documents` parameter in `transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L586)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`[]\>

Transform documents to document-term matrix.

Extract token counts out of raw text documents using the vocabulary fitted with fit or the one provided to the constructor.

#### Parameters

• **opts**

• **opts.raw\_documents?**: `any`

An iterable which generates either str, unicode or file objects.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/text/CountVectorizer.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_extraction/text/CountVectorizer.ts#L622)
