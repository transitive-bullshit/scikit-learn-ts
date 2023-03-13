# TfidfTransformer

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

## constructor()

### Signature

```ts
new TfidfTransformer(opts?: object): TfidfTransformer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.norm?` | `"l1"` \| `"l2"` | Each output row will have unit norm, either:  `Default Value`  `'l2'` |
| `opts.smooth_idf?` | `boolean` | Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.  `Default Value`  `true` |
| `opts.sublinear_tf?` | `boolean` | Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).  `Default Value`  `false` |
| `opts.use_idf?` | `boolean` | Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.  `Default Value`  `true` |

### Returns

[`TfidfTransformer`](TfidfTransformer.md)

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L35)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L33)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L32)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L31)

### id

> `string`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L28)

### opts

> `any`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L29)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L379)

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L379)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L352)

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L352)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L68)

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

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L72)

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L68) [generated/feature\_extraction/text/TfidfTransformer.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L72)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L125)

### fit()

Learn the idf vector (global term weights).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | A matrix of term/token counts. |
| `opts.y?` | `any` | This parameter is not needed to compute tf-idf. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L142)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L184)

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
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L235)

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

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L81)

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

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L275)

### transform()

Transform a count matrix to a tf or tf-idf representation.

#### Signature

```ts
transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | A matrix of term/token counts. |
| `opts.copy?` | `boolean` | Whether to copy X and operate on the copy or perform in-place operations.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L310)
