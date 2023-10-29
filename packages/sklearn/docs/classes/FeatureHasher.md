# FeatureHasher

Implements feature hashing, aka the hashing trick.

This class turns sequences of symbolic feature names (strings) into scipy.sparse matrices, using a hash function to compute the matrix column corresponding to a name. The hash function employed is the signed 32-bit version of Murmurhash3.

Feature names of type byte string are used as-is. Unicode strings are converted to UTF-8 first, but no Unicode normalization is done. Feature values must be (finite) numbers.

This class is a low-memory alternative to DictVectorizer and CountVectorizer, intended for large-scale (online) learning and situations where memory is tight, e.g. when running prediction code on embedded devices.

For an efficiency comparision of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

Read more in the [User Guide](../feature_extraction.html#feature-hashing).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.FeatureHasher.html)

## Constructors

## constructor()

### Signature

```ts
new FeatureHasher(opts?: object): FeatureHasher;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alternate_sign?` | `boolean` | When `true`, an alternating sign is added to the features as to approximately conserve the inner product in the hashed space even for small n\_features. This approach is similar to sparse random projection.  `Default Value`  `true` |
| `opts.dtype?` | `any` | The type of feature values. Passed to scipy.sparse matrix constructors as the dtype argument. Do not set this to bool, np.boolean or any unsigned integer type. |
| `opts.input_type?` | `string` | Choose a string from {‘dict’, ‘pair’, ‘string’}. Either “dict” (the default) to accept dictionaries over (feature\_name, value); “pair” to accept pairs of (feature\_name, value); or “string” to accept single strings. feature\_name should be a string, while value should be a number. In the case of “string”, a value of 1 is implied. The feature\_name is hashed to find the appropriate column for the feature. The value’s sign might be flipped in the output (but see non\_negative, below).  `Default Value`  `'dict'` |
| `opts.n_features?` | `number` | The number of features (columns) in the output matrices. Small numbers of features are likely to cause hash collisions, but large numbers will cause larger coefficient dimensions in linear learners.  `Default Value`  `2` |

### Returns

[`FeatureHasher`](FeatureHasher.md)

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L31)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L117)

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
| `opts.X?` | `any` | Not used, present here for API consistency by convention. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L136)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L176)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L225)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L75)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L262)

### set\_transform\_request()

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_transform_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.raw_X?` | `string` \| `boolean` | Metadata routing for `raw\_X` parameter in `transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L299)

### transform()

Transform a sequence of instances to a scipy.sparse matrix.

#### Signature

```ts
transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.raw_X?` | `any` | Samples. Each sample must be iterable an (e.g., a list or tuple) containing/generating feature names (and optionally values, see the input\_type constructor argument) which will be hashed. raw\_X need not support the len function, so it can be the result of a generator; n\_samples is determined on the fly. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L334)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L27)

### id

> `string`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L24)

### opts

> `any`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L25)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L62)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L66)

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L62) [generated/feature\_extraction/FeatureHasher.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L66)
