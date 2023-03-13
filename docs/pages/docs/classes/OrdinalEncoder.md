# OrdinalEncoder

Encode categorical features as an integer array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are converted to ordinal integers. This results in a single column of integers (0 to n\_categories - 1) per feature.

Read more in the User Guide.

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
| `opts.unknown_value?` | `number` | When the parameter handle\_unknown is set to ‘use\_encoded\_value’, this parameter is required and will set the encoded value of unknown categories. It has to be distinct from the values used to encode any of the categories in `fit`. If set to np.nan, the `dtype` parameter must be a float dtype. |

### Returns

[`OrdinalEncoder`](OrdinalEncoder.md)

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L25)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L118)

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
| `opts.X?` | `ArrayLike`[] | The data to determine the categories of each feature. |
| `opts.y?` | `any` | Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L135)

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
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L175)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L222)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L72)

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
| `opts.X?` | `ArrayLike`[] | The transformed data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L258)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L295)

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
| `opts.X?` | `ArrayLike`[] | The data to encode. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L328)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L19)

## Accessors

### categories\_

The categories of each feature determined during `fit` (in order of the features in X and corresponding with the output of `transform`). This does not include categories that weren’t seen during `fit`.

#### Signature

```ts
categories_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/OrdinalEncoder.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L361)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/OrdinalEncoder.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L411)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/OrdinalEncoder.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L386)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L59)

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

Defined in: [generated/preprocessing/OrdinalEncoder.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L63)
