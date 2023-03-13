# QuantileTransformer

Transform features using quantiles information.

This method transforms the features to follow a uniform or a normal distribution. Therefore, for a given feature, this transformation tends to spread out the most frequent values. It also reduces the impact of (marginal) outliers: this is therefore a robust preprocessing scheme.

The transformation is applied on each feature independently. First an estimate of the cumulative distribution function of a feature is used to map the original values to a uniform distribution. The obtained values are then mapped to the desired output distribution using the associated quantile function. Features values of new/unseen data that fall below or above the fitted range will be mapped to the bounds of the output distribution. Note that this transform is non-linear. It may distort linear correlations between variables measured at the same scale but renders variables measured at different scales more directly comparable.

Read more in the [User Guide](../preprocessing.html#preprocessing-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new QuantileTransformer(opts?: QuantileTransformerOptions): QuantileTransformer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`QuantileTransformerOptions`](../interfaces/QuantileTransformerOptions.md) |

### Returns

[`QuantileTransformer`](QuantileTransformer.md)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L23)

### id

> `string`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L20)

### opts

> `any`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L21)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L426)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L426)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L399)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L399)

### n\_quantiles\_

The actual number of quantiles used to discretize the cumulative distribution function.

#### Signature

```ts
n_quantiles_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L318)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L318)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/QuantileTransformer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L32)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L36)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L32) [generated/preprocessing/QuantileTransformer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L36)

### quantiles\_

The values corresponding the quantiles of reference.

#### Signature

```ts
quantiles_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L345)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L345)

### references\_

Quantiles of references.

#### Signature

```ts
references_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L372)

Defined in:  [generated/preprocessing/QuantileTransformer.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L372)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L95)

### fit()

Compute the quantiles used for transforming.

#### Signature

```ts
fit(opts: QuantileTransformerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerFitOptions`](../interfaces/QuantileTransformerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L112)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: QuantileTransformerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerFitTransformOptions`](../interfaces/QuantileTransformerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L144)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: QuantileTransformerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerGetFeatureNamesOutOptions`](../interfaces/QuantileTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L182)

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

Defined in:  [generated/preprocessing/QuantileTransformer.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L45)

### inverse\_transform()

Back-projection to the original space.

#### Signature

```ts
inverse_transform(opts: QuantileTransformerInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerInverseTransformOptions`](../interfaces/QuantileTransformerInverseTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L217)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: QuantileTransformerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerSetOutputOptions`](../interfaces/QuantileTransformerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L254)

### transform()

Feature-wise transformation of the data.

#### Signature

```ts
transform(opts: QuantileTransformerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileTransformerTransformOptions`](../interfaces/QuantileTransformerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/QuantileTransformer.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L286)
