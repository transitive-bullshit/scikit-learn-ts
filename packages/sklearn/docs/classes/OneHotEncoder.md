# OneHotEncoder

Encode categorical features as a one-hot numeric array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are encoded using a one-hot (aka ‘one-of-K’ or ‘dummy’) encoding scheme. This creates a binary column for each category and returns a sparse matrix or dense array (depending on the `sparse\_output` parameter)

By default, the encoder derives the categories based on the unique values in each feature. Alternatively, you can also specify the `categories` manually.

This encoding is needed for feeding categorical data to many scikit-learn estimators, notably linear models and SVMs with the standard kernels.

Note: a one-hot encoding of y labels should use a LabelBinarizer instead.

Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features). For a comparison of different encoders, refer to: [Comparing Target Encoder with Other Encoders](../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html)

## Constructors

## constructor()

### Signature

```ts
new OneHotEncoder(opts?: object): OneHotEncoder;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.categories?` | `"auto"` | Categories (unique values) per feature:  `Default Value`  `'auto'` |
| `opts.drop?` | `any`[] \| `"first"` \| `"if_binary"` | Specifies a methodology to use to drop one of the categories per feature. This is useful in situations where perfectly collinear features cause problems, such as when feeding the resulting data into an unregularized linear regression model.  However, dropping one category breaks the symmetry of the original representation and can therefore induce a bias in downstream models, for instance for penalized linear classification or regression models. |
| `opts.dtype?` | `any` | Desired dtype of output. |
| `opts.feature_name_combiner?` | `"concat"` | Callable with signature `def callable(input\_feature, category)` that returns a string. This is used to create feature names to be returned by [`get\_feature\_names\_out`](#sklearn.preprocessing.OneHotEncoder.get_feature_names_out "sklearn.preprocessing.OneHotEncoder.get_feature_names_out").  `"concat"` concatenates encoded feature name and category with `feature + "\_" + str(category)`.E.g. feature X with values 1, 6, 7 create feature names `X\_1, X\_6, X\_7`.  `Default Value`  `'concat'` |
| `opts.handle_unknown?` | `"ignore"` \| `"error"` \| `"infrequent_if_exist"` | Specifies the way unknown categories are handled during [`transform`](#sklearn.preprocessing.OneHotEncoder.transform "sklearn.preprocessing.OneHotEncoder.transform").  `Default Value`  `'error'` |
| `opts.max_categories?` | `number` | Specifies an upper limit to the number of output features for each input feature when considering infrequent categories. If there are infrequent categories, `max\_categories` includes the category representing the infrequent categories along with the frequent categories. If `undefined`, there is no limit to the number of output features. |
| `opts.min_frequency?` | `number` | Specifies the minimum frequency below which a category will be considered infrequent. |
| `opts.sparse?` | `boolean` | Will return sparse matrix if set `true` else will return an array.  `Default Value`  `true` |
| `opts.sparse_output?` | `boolean` | Will return sparse matrix if set `true` else will return an array.  `Default Value`  `true` |

### Returns

[`OneHotEncoder`](OneHotEncoder.md)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L31)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L162)

### fit()

Fit OneHotEncoder to X.

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L179)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L219)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L266)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L304)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L108)

### inverse\_transform()

Convert the data back to the original representation.

When unknown categories are encountered (all zeros in the one-hot encoding), `undefined` is used to represent this category. If the feature with the unknown category has a dropped category, the dropped category will be its inverse.

For a given input feature, if there is an infrequent category, ‘infrequent\_sklearn’ will be used to represent the infrequent category.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The transformed data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L343)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L380)

### transform()

Transform X using one-hot encoding.

If there are infrequent categories for a feature, the infrequent categories will be grouped into a single category.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data to encode. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L415)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L27)

### id

> `string`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L24)

### opts

> `any`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L25)

## Accessors

### categories\_

The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of `transform`). This includes the category specified in `drop` (if any).

#### Signature

```ts
categories_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L448)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L448)

### drop\_idx\_

`drop\_idx\_\[i\]` is the index in `categories\_\[i\]` of the category to be dropped for each feature.

#### Signature

```ts
drop_idx_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L473)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L473)

### feature\_name\_combiner

Callable with signature `def callable(input\_feature, category)` that returns a string. This is used to create feature names to be returned by [`get\_feature\_names\_out`](#sklearn.preprocessing.OneHotEncoder.get_feature_names_out "sklearn.preprocessing.OneHotEncoder.get_feature_names_out").

#### Signature

```ts
feature_name_combiner(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L548)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L548)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L523)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L523)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L498)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L498)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L95)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L99)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L95) [generated/preprocessing/OneHotEncoder.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L99)
