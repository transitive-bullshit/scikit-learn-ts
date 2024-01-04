# DictVectorizer

Transforms lists of feature-value mappings to vectors.

This transformer turns lists of mappings (dict-like objects) of feature names to feature values into Numpy arrays or scipy.sparse matrices for use with scikit-learn estimators.

When feature values are strings, this transformer will do a binary one-hot (aka one-of-K) coding: one boolean-valued feature is constructed for each of the possible string values that the feature can take on. For instance, a feature “f” that can take on the values “ham” and “spam” will become two features in the output, one signifying “f=ham”, the other “f=spam”.

If a feature value is a sequence or set of strings, this transformer will iterate over the values and will count the occurrences of each string value.

However, note that this transformer will only do a binary one-hot encoding when feature values are of type string. If categorical features are represented as numeric values such as int or iterables of strings, the DictVectorizer can be followed by [`OneHotEncoder`](sklearn.preprocessing.OneHotEncoder.html#sklearn.preprocessing.OneHotEncoder "sklearn.preprocessing.OneHotEncoder") to complete binary one-hot encoding.

Features that do not occur in a sample (mapping) will have a zero value in the resulting array/matrix.

For an efficiency comparision of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

Read more in the [User Guide](../feature_extraction.html#dict-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.DictVectorizer.html)

## Constructors

## constructor()

### Signature

```ts
new DictVectorizer(opts?: object): DictVectorizer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.dtype?` | `any` | The type of feature values. Passed to Numpy array/scipy.sparse matrix constructors as the dtype argument. |
| `opts.separator?` | `string` | Separator string used when constructing new features for one-hot coding.  `Default Value`  `'='` |
| `opts.sort?` | `boolean` | Whether `feature\_names\_` and `vocabulary\_` should be sorted when fitting.  `Default Value`  `true` |
| `opts.sparse?` | `boolean` | Whether transform should produce scipy.sparse matrices.  `Default Value`  `true` |

### Returns

[`DictVectorizer`](DictVectorizer.md)

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L35)

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

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L121)

### fit()

Learn a list of feature name -> indices mappings.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype). |
| `opts.y?` | `any` | Ignored parameter. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L138)

### fit\_transform()

Learn a list of feature name -> indices mappings and transform X.

Like fit(X) followed by transform(X), but does not require materializing X in memory.

#### Signature

```ts
fit_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype). |
| `opts.y?` | `any` | Ignored parameter. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L178)

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

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L216)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L254)

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

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L79)

### inverse\_transform()

Transform array or sparse matrix X back to feature mappings.

X must have been produced by this DictVectorizer’s transform or fit\_transform method; it may only have passed through transformers that preserve the number of features and their order.

In the case of one-hot/one-of-K coding, the constructed feature names and values are returned rather than the original ones.

#### Signature

```ts
inverse_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Sample matrix. |
| `opts.dict_type?` | `any` | Constructor for feature mappings. Must conform to the collections.Mapping API. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L293)

### restrict()

Restrict the features to those in support using feature selection.

This function modifies the estimator in-place.

#### Signature

```ts
restrict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.indices?` | `boolean` | Whether support is a list of indices.  `Default Value`  `false` |
| `opts.support?` | [`ArrayLike`](../types/ArrayLike.md) | Boolean mask or list of indices (as returned by the get\_support member of feature selectors). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L337)

### set\_inverse\_transform\_request()

Request metadata passed to the `inverse\_transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_inverse_transform_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.dict_type?` | `string` \| `boolean` | Metadata routing for `dict\_type` parameter in `inverse\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L381)

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

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L419)

### transform()

Transform feature->value dicts to array or sparse matrix.

Named features not encountered during fit or fit\_transform will be silently ignored.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L454)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L33)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L32)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L31)

### id

> `string`

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L28)

### opts

> `any`

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L29)

## Accessors

### feature\_names\_

A list of length n\_features containing the feature names (e.g., “f=ham” and “f=spam”).

#### Signature

```ts
feature_names_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L512)

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L512)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L66)

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

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L70)

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L66) [generated/feature\_extraction/DictVectorizer.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L70)

### vocabulary\_

A dictionary mapping feature names to feature indices.

#### Signature

```ts
vocabulary_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L487)

Defined in:  [generated/feature\_extraction/DictVectorizer.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_extraction/DictVectorizer.ts#L487)
