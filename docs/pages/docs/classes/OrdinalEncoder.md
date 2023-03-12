# OrdinalEncoder

Encode categorical features as an integer array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are converted to ordinal integers. This results in a single column of integers (0 to n\_categories - 1) per feature.

Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OrdinalEncoder.html)

## Constructors

## constructor()

### Signature

```ts
new OrdinalEncoder(opts?: OrdinalEncoderOptions): OrdinalEncoder;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OrdinalEncoderOptions`](../interfaces/OrdinalEncoderOptions.md) |

### Returns

[`OrdinalEncoder`](OrdinalEncoder.md)

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L19)

## Accessors

### categories\_

The categories of each feature determined during `fit` (in order of the features in X and corresponding with the output of `transform`). This does not include categories that weren’t seen during `fit`.

#### Signature

```ts
categories_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/preprocessing/OrdinalEncoder.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L291)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/OrdinalEncoder.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L341)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/OrdinalEncoder.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L316)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L30)

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

Defined in: [generated/preprocessing/OrdinalEncoder.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L34)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L89)

### fit()

Fit the OrdinalEncoder to X.

#### Signature

```ts
fit(opts: OrdinalEncoderFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderFitOptions`](../interfaces/OrdinalEncoderFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L106)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: OrdinalEncoderFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderFitTransformOptions`](../interfaces/OrdinalEncoderFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L136)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: OrdinalEncoderGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderGetFeatureNamesOutOptions`](../interfaces/OrdinalEncoderGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L168)

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

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L43)

### inverse\_transform()

Convert the data back to the original representation.

#### Signature

```ts
inverse_transform(opts: OrdinalEncoderInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderInverseTransformOptions`](../interfaces/OrdinalEncoderInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L201)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: OrdinalEncoderSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderSetOutputOptions`](../interfaces/OrdinalEncoderSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L235)

### transform()

Transform X to ordinal codes.

#### Signature

```ts
transform(opts: OrdinalEncoderTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrdinalEncoderTransformOptions`](../interfaces/OrdinalEncoderTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L263)
