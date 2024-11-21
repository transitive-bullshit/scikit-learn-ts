[**sklearn**](../README.md) • **Docs**

***

Transform a count matrix to a normalized tf or tf-idf representation.

Tf means term-frequency while tf-idf means term-frequency times inverse document-frequency. This is a common term weighting scheme in information retrieval, that has also found good use in document classification.

The goal of using tf-idf instead of the raw frequencies of occurrence of a token in a given document is to scale down the impact of tokens that occur very frequently in a given corpus and that are hence empirically less informative than features that occur in a small fraction of the training corpus.

The formula that is used to compute the tf-idf for a term t of a document d in a document set is tf-idf(t, d) = tf(t, d) \* idf(t), and the idf is computed as idf(t) = log \[ n / df(t) \] + 1 (if `smooth\_idf=False`), where n is the total number of documents in the document set and df(t) is the document frequency of t; the document frequency is the number of documents in the document set that contain the term t. The effect of adding “1” to the idf in the equation above is that terms with zero idf, i.e., terms that occur in all documents in a training set, will not be entirely ignored. (Note that the idf formula above differs from the standard textbook notation that defines the idf as idf(t) = log \[ n / (df(t) + 1) \]).

If `smooth\_idf=True` (the default), the constant “1” is added to the numerator and denominator of the idf as if an extra document was seen containing every term in the collection exactly once, which prevents zero divisions: idf(t) = log \[ (1 + n) / (1 + df(t)) \] + 1.

Furthermore, the formulas used to compute tf and idf depend on parameter settings that correspond to the SMART notation used in IR as follows:

Tf is “n” (natural) by default, “l” (logarithmic) when `sublinear\_tf=True`. Idf is “t” when use\_idf is given, “n” (none) otherwise. Normalization is “c” (cosine) when `norm='l2'`, “n” (none) when `norm=None`.

Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfTransformer.html)

## Constructors

### new TfidfTransformer()

> **new TfidfTransformer**(`opts`?): [`TfidfTransformer`](TfidfTransformer.md)

#### Parameters

• **opts?**

• **opts.norm?**: `"l1"` \| `"l2"`

Each output row will have unit norm, either:

**Default Value**

`'l2'`

• **opts.smooth\_idf?**: `boolean`

Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.

**Default Value**

`true`

• **opts.sublinear\_tf?**: `boolean`

Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).

**Default Value**

`false`

• **opts.use\_idf?**: `boolean`

Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.

**Default Value**

`true`

#### Returns

[`TfidfTransformer`](TfidfTransformer.md)

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L35)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L33)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L32)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L31)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L28)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L29)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L469)

***

### idf\_

#### Get Signature

> **get** **idf\_**(): `Promise`\<`any`[]\>

The inverse document frequency (IDF) vector; only defined if `use\_idf` is `true`.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L417)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L442)

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

[generated/feature\_extraction/text/TfidfTransformer.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L68)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L122)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn the idf vector (global term weights).

#### Parameters

• **opts**

• **opts.X?**: `any`[]

A matrix of term/token counts.

• **opts.y?**: `any`

This parameter is not needed to compute tf-idf.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L139)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L180)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L226)

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

[generated/feature\_extraction/text/TfidfTransformer.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L264)

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

[generated/feature\_extraction/text/TfidfTransformer.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L81)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L302)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L340)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`[]\>

Transform a count matrix to a tf or tf-idf representation.

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

Whether to copy X and operate on the copy or perform in-place operations. `copy=False` will only be effective with CSR sparse matrix.

**Default Value**

`true`

• **opts.X?**: `any`

A matrix of term/token counts.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/text/TfidfTransformer.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L376)
