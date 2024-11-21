# Class: TfidfVectorizer

Convert a collection of raw documents to a matrix of TF-IDF features.

Equivalent to [`CountVectorizer`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html#sklearn.feature_extraction.text.CountVectorizer "sklearn.feature_extraction.text.CountVectorizer") followed by [`TfidfTransformer`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfTransformer.html#sklearn.feature_extraction.text.TfidfTransformer "sklearn.feature_extraction.text.TfidfTransformer").

For an example of usage, see [Classification of text documents using sparse features](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_document_classification_20newsgroups.html#sphx-glr-auto-examples-text-plot-document-classification-20newsgroups-py).

For an efficiency comparison of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

For an example of document clustering and comparison with [`HashingVectorizer`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.HashingVectorizer.html#sklearn.feature_extraction.text.HashingVectorizer "sklearn.feature_extraction.text.HashingVectorizer"), see [Clustering text documents using k-means](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_document_clustering.html#sphx-glr-auto-examples-text-plot-document-clustering-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)

## Constructors

### new TfidfVectorizer()

> **new TfidfVectorizer**(`opts`?): [`TfidfVectorizer`](TfidfVectorizer.md)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.analyzer`?

</td>
<td>

`"word"` \| `"char"` \| `"char_wb"`

</td>
<td>

Whether the feature should be made of word or character n-grams. Option ‘char_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.

If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.

</td>
</tr>
<tr>
<td>

`opts.binary`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, all non-zero term counts are set to 1. This does not mean outputs will have only 0/1 values, only that the tf term in tf-idf is binary. (Set `binary` to `true`, `use_idf` to `false` and `norm` to `undefined` to get 0/1 outputs).

</td>
</tr>
<tr>
<td>

`opts.decode_error`?

</td>
<td>

`"strict"` \| `"ignore"` \| `"replace"`

</td>
<td>

Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.

</td>
</tr>
<tr>
<td>

`opts.dtype`?

</td>
<td>

`any`

</td>
<td>

Type of the matrix returned by fit_transform() or transform().

</td>
</tr>
<tr>
<td>

`opts.encoding`?

</td>
<td>

`string`

</td>
<td>

If bytes or files are given to analyze, this encoding is used to decode.

</td>
</tr>
<tr>
<td>

`opts.input`?

</td>
<td>

`"filename"` \| `"file"` \| `"content"`

</td>
<td>

If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.

</td>
</tr>
<tr>
<td>

`opts.lowercase`?

</td>
<td>

`boolean`

</td>
<td>

Convert all characters to lowercase before tokenizing.

</td>
</tr>
<tr>
<td>

`opts.max_df`?

</td>
<td>

`number`

</td>
<td>

When building the vocabulary ignore terms that have a document frequency strictly higher than the given threshold (corpus-specific stop words). If float in range \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

</td>
</tr>
<tr>
<td>

`opts.max_features`?

</td>
<td>

`number`

</td>
<td>

If not `undefined`, build a vocabulary that only consider the top `max_features` ordered by term frequency across the corpus. Otherwise, all features are used.

This parameter is ignored if vocabulary is not `undefined`.

</td>
</tr>
<tr>
<td>

`opts.min_df`?

</td>
<td>

`number`

</td>
<td>

When building the vocabulary ignore terms that have a document frequency strictly lower than the given threshold. This value is also called cut-off in the literature. If float in range of \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

</td>
</tr>
<tr>
<td>

`opts.ngram_range`?

</td>
<td>

`any`

</td>
<td>

The lower and upper boundary of the range of n-values for different n-grams to be extracted. All values of n such that min_n <= n <= max_n will be used. For example an `ngram_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable.

</td>
</tr>
<tr>
<td>

`opts.norm`?

</td>
<td>

`"l1"` \| `"l2"`

</td>
<td>

Each output row will have unit norm, either:

</td>
</tr>
<tr>
<td>

`opts.preprocessor`?

</td>
<td>

`any`

</td>
<td>

Override the preprocessing (string transformation) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable.

</td>
</tr>
<tr>
<td>

`opts.smooth_idf`?

</td>
<td>

`boolean`

</td>
<td>

Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.

</td>
</tr>
<tr>
<td>

`opts.stop_words`?

</td>
<td>

`any`[] \| `"english"`

</td>
<td>

If a string, it is passed to _check_stop_list and the appropriate stop list is returned. ‘english’ is currently the only supported string value. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#stop-words)).

If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.

If `undefined`, no stop words will be used. In this case, setting `max_df` to a higher value, such as in the range (0.7, 1.0), can automatically detect and filter stop words based on intra corpus document frequency of terms.

</td>
</tr>
<tr>
<td>

`opts.strip_accents`?

</td>
<td>

`"ascii"` \| `"unicode"`

</td>
<td>

Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any characters. `undefined` (default) means no character normalization is performed.

Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.13)").

</td>
</tr>
<tr>
<td>

`opts.sublinear_tf`?

</td>
<td>

`boolean`

</td>
<td>

Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).

</td>
</tr>
<tr>
<td>

`opts.token_pattern`?

</td>
<td>

`string`

</td>
<td>

Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp selects tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).

If there is a capturing group in token_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted.

</td>
</tr>
<tr>
<td>

`opts.tokenizer`?

</td>
<td>

`any`

</td>
<td>

Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`.

</td>
</tr>
<tr>
<td>

`opts.use_idf`?

</td>
<td>

`boolean`

</td>
<td>

Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.

</td>
</tr>
<tr>
<td>

`opts.vocabulary`?

</td>
<td>

`any`

</td>
<td>

Either a Mapping (e.g., a dict) where keys are terms and values are indices in the feature matrix, or an iterable over terms. If not given, a vocabulary is determined from the input documents.

</td>
</tr>
</tbody>
</table>

#### Returns

[`TfidfVectorizer`](TfidfVectorizer.md)

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L31)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/feature\_extraction/text/TfidfVectorizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L29) |
| `_isInitialized` | `boolean` | `false` | [generated/feature\_extraction/text/TfidfVectorizer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L28) |
| `_py` | `PythonBridge` | `undefined` | [generated/feature\_extraction/text/TfidfVectorizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L27) |
| `id` | `string` | `undefined` | [generated/feature\_extraction/text/TfidfVectorizer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L24) |
| `opts` | `any` | `undefined` | [generated/feature\_extraction/text/TfidfVectorizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L25) |

## Accessors

### fixed\_vocabulary\_

#### Get Signature

> **get** **fixed\_vocabulary\_**(): `Promise`\<`boolean`\>

True if a fixed vocabulary of term to indices mapping is provided by the user.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L709)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L177)

***

### vocabulary\_

#### Get Signature

> **get** **vocabulary\_**(): `Promise`\<`any`\>

A mapping of terms to feature indices.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L684)

## Methods

### build\_analyzer()

> **build\_analyzer**(`opts`): `Promise`\<`any`\>

Return a callable to process input data.

The callable handles preprocessing, tokenization, and n-grams generation.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L248)

***

### build\_preprocessor()

> **build\_preprocessor**(`opts`): `Promise`\<`any`\>

Return a function to preprocess the text before tokenization.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L276)

***

### build\_tokenizer()

> **build\_tokenizer**(`opts`): `Promise`\<`any`\>

Return a function that splits a string into a sequence of tokens.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L304)

***

### decode()

> **decode**(`opts`): `Promise`\<`any`\>

Decode the input into a string of unicode symbols.

The decoding strategy depends on the vectorizer parameters.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.doc`?

</td>
<td>

`string`

</td>
<td>

The string to decode.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L334)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L229)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn vocabulary and idf from training set.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.raw_documents`?

</td>
<td>

`any`

</td>
<td>

An iterable which generates either str, unicode or file objects.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

This parameter is not needed to compute tfidf.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L366)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`\>

Learn vocabulary and idf, return document-term matrix.

This is equivalent to fit followed by transform, but more efficiently implemented.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.raw_documents`?

</td>
<td>

`any`

</td>
<td>

An iterable which generates either str, unicode or file objects.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

This parameter is ignored.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L405)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.input_features`?

</td>
<td>

`any`

</td>
<td>

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L442)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L478)

***

### get\_stop\_words()

> **get\_stop\_words**(`opts`): `Promise`\<`any`\>

Build or fetch the effective stop words list.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L512)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L190)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`[]\>

Return terms per document with nonzero entries in X.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Document-term matrix.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L540)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.raw_documents`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `raw_documents` parameter in `fit`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L578)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.raw_documents`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `raw_documents` parameter in `transform`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L616)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Transform documents to document-term matrix.

Uses the vocabulary and document frequencies (df) learned by fit (or fit_transform).

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.raw_documents`?

</td>
<td>

`any`

</td>
<td>

An iterable which generates either str, unicode or file objects.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfVectorizer.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/feature_extraction/text/TfidfVectorizer.ts#L652)
