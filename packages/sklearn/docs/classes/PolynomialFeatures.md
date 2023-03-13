# PolynomialFeatures

Generate polynomial and interaction features.

Generate a new feature matrix consisting of all polynomial combinations of the features with degree less than or equal to the specified degree. For example, if an input sample is two dimensional and of the form \[a, b\], the degree-2 polynomial features are \[1, a, b, a^2, ab, b^2\].

Read more in the [User Guide](../preprocessing.html#polynomial-features).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html)

## Constructors

## constructor()

### Signature

```ts
new PolynomialFeatures(opts?: PolynomialFeaturesOptions): PolynomialFeatures;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PolynomialFeaturesOptions`](../interfaces/PolynomialFeaturesOptions.md) |

### Returns

[`PolynomialFeatures`](PolynomialFeatures.md)

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L304)

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L304)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L277)

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L277)

### n\_output\_features\_

The total number of polynomial output features. The number of output features is computed by iterating over all suitably sized combinations of input features.

#### Signature

```ts
n_output_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L331)

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L331)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L30)

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

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L34)

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L30) [generated/preprocessing/PolynomialFeatures.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L34)

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

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L91)

### fit()

Compute number of output features.

#### Signature

```ts
fit(opts: PolynomialFeaturesFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesFitOptions`](../interfaces/PolynomialFeaturesFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L108)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: PolynomialFeaturesFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesFitTransformOptions`](../interfaces/PolynomialFeaturesFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L140)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: PolynomialFeaturesGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesGetFeatureNamesOutOptions`](../interfaces/PolynomialFeaturesGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L178)

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

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L43)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: PolynomialFeaturesSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesSetOutputOptions`](../interfaces/PolynomialFeaturesSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L215)

### transform()

Transform data to polynomial features.

#### Signature

```ts
transform(opts: PolynomialFeaturesTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialFeaturesTransformOptions`](../interfaces/PolynomialFeaturesTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L245)
