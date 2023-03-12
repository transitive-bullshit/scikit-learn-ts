# OneHotEncoder

Encode categorical features as a one-hot numeric array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are encoded using a one-hot (aka ‘one-of-K’ or ‘dummy’) encoding scheme. This creates a binary column for each category and returns a sparse matrix or dense array (depending on the `sparse\_output` parameter)

By default, the encoder derives the categories based on the unique values in each feature. Alternatively, you can also specify the `categories` manually.

This encoding is needed for feeding categorical data to many scikit-learn estimators, notably linear models and SVMs with the standard kernels.

Note: a one-hot encoding of y labels should use a LabelBinarizer instead.

Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html)

## Constructors

## constructor()

### Signature

```ts
new OneHotEncoder(opts?: OneHotEncoderOptions): OneHotEncoder;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OneHotEncoderOptions`](../interfaces/OneHotEncoderOptions.md) |

### Returns

[`OneHotEncoder`](OneHotEncoder.md)

Defined in:  [generated/preprocessing/OneHotEncoder.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L27)

### id

> `string`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L24)

### opts

> `any`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L25)

## Accessors

### categories\_

The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of `transform`). This includes the category specified in `drop` (if any).

#### Signature

```ts
categories_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/OneHotEncoder.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L309)

### drop\_idx\_

`drop\_idx\_\[i\]` is the index in `categories\_\[i\]` of the category to be dropped for each feature.

#### Signature

```ts
drop_idx_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/preprocessing/OneHotEncoder.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L334)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/OneHotEncoder.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L384)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/OneHotEncoder.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L359)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L36)

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

Defined in: [generated/preprocessing/OneHotEncoder.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L40)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L99)

### fit()

Fit OneHotEncoder to X.

#### Signature

```ts
fit(opts: OneHotEncoderFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderFitOptions`](../interfaces/OneHotEncoderFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L116)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: OneHotEncoderFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderFitTransformOptions`](../interfaces/OneHotEncoderFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L146)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: OneHotEncoderGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderGetFeatureNamesOutOptions`](../interfaces/OneHotEncoderGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L178)

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

Defined in:  [generated/preprocessing/OneHotEncoder.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L49)

### inverse\_transform()

Convert the data back to the original representation.

When unknown categories are encountered (all zeros in the one-hot encoding), `undefined` is used to represent this category. If the feature with the unknown category has a dropped category, the dropped category will be its inverse.

For a given input feature, if there is an infrequent category, ‘infrequent\_sklearn’ will be used to represent the infrequent category.

#### Signature

```ts
inverse_transform(opts: OneHotEncoderInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderInverseTransformOptions`](../interfaces/OneHotEncoderInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L215)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: OneHotEncoderSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderSetOutputOptions`](../interfaces/OneHotEncoderSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L249)

### transform()

Transform X using one-hot encoding.

If there are infrequent categories for a feature, the infrequent categories will be grouped into a single category.

#### Signature

```ts
transform(opts: OneHotEncoderTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneHotEncoderTransformOptions`](../interfaces/OneHotEncoderTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/OneHotEncoder.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L279)
