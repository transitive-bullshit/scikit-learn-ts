# TargetEncoder

Target Encoder for regression and classification targets.

Each category is encoded based on a shrunk estimate of the average target values for observations belonging to the category. The encoding scheme mixes the global target mean with the target mean conditioned on the value of the category. [\[MIC\]](#rf862141e5a0c-mic)

[`TargetEncoder`](#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") considers missing values, such as `np.nan` or `undefined`, as another category and encodes them like any other category. Categories that are not seen during [`fit`](#sklearn.preprocessing.TargetEncoder.fit "sklearn.preprocessing.TargetEncoder.fit") are encoded with the target mean, i.e. `target\_mean\_`.

For a demo on the importance of the `TargetEncoder` internal cross-fitting, see ref:`sphx\_glr\_auto\_examples\_preprocessing\_plot\_target\_encoder\_cross\_val.py`. For a comparison of different encoders, refer to Comparing Target Encoder with Other Encoders. Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.TargetEncoder.html)

## Constructors

## constructor()

### Signature

```ts
new TargetEncoder(opts?: object): TargetEncoder;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.categories?` | `"auto"` | Categories (unique values) per feature:  `Default Value`  `'auto'` |
| `opts.cv?` | `number` | Determines the number of folds in the cross fitting strategy used in [`fit\_transform`](#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform"). For classification targets, `StratifiedKFold` is used and for continuous targets, `KFold` is used.  `Default Value`  `5` |
| `opts.random_state?` | `number` | When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.shuffle?` | `boolean` | Whether to shuffle the data in [`fit\_transform`](#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform") before splitting into folds. Note that the samples within each split will not be shuffled.  `Default Value`  `true` |
| `opts.smooth?` | `number` \| `"auto"` | The amount of mixing of the target mean conditioned on the value of the category with the global target mean. A larger `smooth` value will put more weight on the global target mean. If `"auto"`, then `smooth` is set to an empirical Bayes estimate.  `Default Value`  `'auto'` |
| `opts.target_type?` | `"auto"` \| `"binary"` \| `"continuous"` | Type of target.  `Default Value`  `'auto'` |

### Returns

[`TargetEncoder`](TargetEncoder.md)

Defined in:  [generated/preprocessing/TargetEncoder.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L27)

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

Defined in:  [generated/preprocessing/TargetEncoder.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L131)

### fit()

Fit the [`TargetEncoder`](#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") to X and y.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data to determine the categories of each feature. |
| `opts.y?` | `ArrayLike` | The target data used to encode the categories. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/TargetEncoder.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L148)

### fit\_transform()

Fit [`TargetEncoder`](#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") and transform X with the target encoding.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data to determine the categories of each feature. |
| `opts.y?` | `ArrayLike` | The target data used to encode the categories. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/preprocessing/TargetEncoder.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L188)

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

Defined in:  [generated/preprocessing/TargetEncoder.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L228)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

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

Defined in:  [generated/preprocessing/TargetEncoder.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L266)

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

Defined in:  [generated/preprocessing/TargetEncoder.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L85)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

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

Defined in:  [generated/preprocessing/TargetEncoder.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L303)

### transform()

Transform X with the target encoding.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data to determine the categories of each feature. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/preprocessing/TargetEncoder.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L336)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/TargetEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/TargetEncoder.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/TargetEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L23)

### id

> `string`

Defined in:  [generated/preprocessing/TargetEncoder.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L20)

### opts

> `any`

Defined in:  [generated/preprocessing/TargetEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L21)

## Accessors

### categories\_

The categories of each feature determined during fitting or specified in `categories` (in order of the features in `X` and corresponding with the output of [`transform`](#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform")).

#### Signature

```ts
categories_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/TargetEncoder.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L394)

### encodings\_

Encodings learnt on all of `X`. For feature `i`, `encodings\_\[i\]` are the encodings matching the categories listed in `categories\_\[i\]`.

#### Signature

```ts
encodings_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/TargetEncoder.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L369)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/TargetEncoder.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L494)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/TargetEncoder.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L469)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/TargetEncoder.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L72)

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

Defined in: [generated/preprocessing/TargetEncoder.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L76)

### target\_mean\_

The overall mean of the target. This value is only used in [`transform`](#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform") to encode categories.

#### Signature

```ts
target_mean_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/TargetEncoder.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L444)

### target\_type\_

Type of target.

#### Signature

```ts
target_type_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/preprocessing/TargetEncoder.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L419)
