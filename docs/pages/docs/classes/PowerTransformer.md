# PowerTransformer

Apply a power transform featurewise to make data more Gaussian-like.

Power transforms are a family of parametric, monotonic transformations that are applied to make data more Gaussian-like. This is useful for modeling issues related to heteroscedasticity (non-constant variance), or other situations where normality is desired.

Currently, PowerTransformer supports the Box-Cox transform and the Yeo-Johnson transform. The optimal parameter for stabilizing variance and minimizing skewness is estimated through maximum likelihood.

Box-Cox requires input data to be strictly positive, while Yeo-Johnson supports both positive or negative data.

By default, zero-mean, unit-variance normalization is applied to the transformed data.

Read more in the [User Guide](../preprocessing.html#preprocessing-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PowerTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new PowerTransformer(opts?: PowerTransformerOptions): PowerTransformer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PowerTransformerOptions`](../interfaces/PowerTransformerOptions.md) |

### Returns

[`PowerTransformer`](PowerTransformer.md)

Defined in:  [generated/preprocessing/PowerTransformer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PowerTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PowerTransformer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/PowerTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L27)

### id

> `string`

Defined in:  [generated/preprocessing/PowerTransformer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L24)

### opts

> `any`

Defined in:  [generated/preprocessing/PowerTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L25)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/PowerTransformer.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L363)

### lambdas\_

The parameters of the power transformation for the selected features.

#### Signature

```ts
lambdas_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/preprocessing/PowerTransformer.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L309)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/PowerTransformer.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L336)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/PowerTransformer.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L36)

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

Defined in: [generated/preprocessing/PowerTransformer.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L40)

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

Defined in:  [generated/preprocessing/PowerTransformer.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L93)

### fit()

Estimate the optimal parameter lambda for each feature.

The optimal lambda parameter for minimizing skewness is estimated on each feature independently using maximum likelihood.

#### Signature

```ts
fit(opts: PowerTransformerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerFitOptions`](../interfaces/PowerTransformerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L112)

### fit\_transform()

Fit `PowerTransformer` to `X`, then transform `X`.

#### Signature

```ts
fit_transform(opts: PowerTransformerFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerFitTransformOptions`](../interfaces/PowerTransformerFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L142)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: PowerTransformerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerGetFeatureNamesOutOptions`](../interfaces/PowerTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L176)

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

Defined in:  [generated/preprocessing/PowerTransformer.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L49)

### inverse\_transform()

Apply the inverse power transformation using the fitted lambdas.

The inverse of the Box-Cox transformation is given by:

#### Signature

```ts
inverse_transform(opts: PowerTransformerInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerInverseTransformOptions`](../interfaces/PowerTransformerInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L213)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: PowerTransformerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerSetOutputOptions`](../interfaces/PowerTransformerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L249)

### transform()

Apply the power transform to each feature using the fitted lambdas.

#### Signature

```ts
transform(opts: PowerTransformerTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PowerTransformerTransformOptions`](../interfaces/PowerTransformerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L279)
