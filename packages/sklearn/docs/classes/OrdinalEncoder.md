# OrdinalEncoder

Encode categorical features as an integer array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are converted to ordinal integers. This results in a single column of integers (0 to n\_categories - 1) per feature.

Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features). For a comparison of different encoders, refer to: [Comparing Target Encoder with Other Encoders](../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OrdinalEncoder.html)

## Constructors

## constructor()

### Signature

```ts
new OrdinalEncoder(opts?: object): OrdinalEncoder;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.categories?` | `"auto"` | Categories (unique values) per feature:  `Default Value`  `'auto'` |
| `opts.dtype?` | `any` | Desired dtype of output. |
| `opts.encoded_missing_value?` | `number` | Encoded value of missing categories. If set to `np.nan`, then the `dtype` parameter must be a float dtype. |
| `opts.handle_unknown?` | `"error"` \| `"use_encoded_value"` | When set to ‘error’ an error will be raised in case an unknown categorical feature is present during transform. When set to ‘use\_encoded\_value’, the encoded value of unknown categories will be set to the value given for the parameter `unknown\_value`. In [`inverse\_transform`](#sklearn.preprocessing.OrdinalEncoder.inverse_transform "sklearn.preprocessing.OrdinalEncoder.inverse_transform"), an unknown category will be denoted as `undefined`.  `Default Value`  `'error'` |
| `opts.max_categories?` | `number` | Specifies an upper limit to the number of output categories for each input feature when considering infrequent categories. If there are infrequent categories, `max\_categories` includes the category representing the infrequent categories along with the frequent categories. If `undefined`, there is no limit to the number of output features.  `max\_categories` do **not** take into account missing or unknown categories. Setting `unknown\_value` or `encoded\_missing\_value` to an integer will increase the number of unique integer codes by one each. This can result in up to `max\_categories + 2` integer codes. |
| `opts.min_frequency?` | `number` | Specifies the minimum frequency below which a category will be considered infrequent. |
| `opts.unknown_value?` | `number` | When the parameter handle\_unknown is set to ‘use\_encoded\_value’, this parameter is required and will set the encoded value of unknown categories. It has to be distinct from the values used to encode any of the categories in `fit`. If set to np.nan, the `dtype` parameter must be a float dtype. |

### Returns

[`OrdinalEncoder`](OrdinalEncoder.md)

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L25)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L132)

### fit()

Fit the OrdinalEncoder to X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data to determine the categories of each feature. |
| `opts.y?` | `any` | Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L149)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L189)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L236)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L274)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L84)

### inverse\_transform()

Convert the data back to the original representation.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The transformed data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L309)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L346)

### transform()

Transform X to ordinal codes.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data to encode. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L379)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L19)

## Accessors

### categories\_

The categories of each feature determined during `fit` (in order of the features in X and corresponding with the output of `transform`). This does not include categories that weren’t seen during `fit`.

#### Signature

```ts
categories_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L412)

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L412)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L462)

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L462)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L437)

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L437)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L71)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L75)

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L71) [generated/preprocessing/OrdinalEncoder.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L75)
