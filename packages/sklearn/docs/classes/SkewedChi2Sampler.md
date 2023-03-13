# SkewedChi2Sampler

Approximate feature map for “skewed chi-squared” kernel.

Read more in the [User Guide](../kernel_approximation.html#skewed-chi-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.SkewedChi2Sampler.html)

## Constructors

## constructor()

### Signature

```ts
new SkewedChi2Sampler(opts?: SkewedChi2SamplerOptions): SkewedChi2Sampler;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SkewedChi2SamplerOptions`](../interfaces/SkewedChi2SamplerOptions.md) |

### Returns

[`SkewedChi2Sampler`](SkewedChi2Sampler.md)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L19)

### id

> `string`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L16)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L354)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L354)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L327)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L327)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L28)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L32)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L28) [generated/kernel\_approximation/SkewedChi2Sampler.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L32)

### random\_offset\_

Bias term, which will be added to the data. It is uniformly distributed between 0 and 2\*pi.

#### Signature

```ts
random_offset_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L300)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L300)

### random\_weights\_

Weight array, sampled from a secant hyperbolic distribution, which will be used to linearly transform the log of the data.

#### Signature

```ts
random_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L273)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L273)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L85)

### fit()

Fit the model with X.

Samples random projection according to n\_features.

#### Signature

```ts
fit(opts: SkewedChi2SamplerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerFitOptions`](../interfaces/SkewedChi2SamplerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L104)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SkewedChi2SamplerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerFitTransformOptions`](../interfaces/SkewedChi2SamplerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L136)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: SkewedChi2SamplerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerGetFeatureNamesOutOptions`](../interfaces/SkewedChi2SamplerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L176)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L41)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: SkewedChi2SamplerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerSetOutputOptions`](../interfaces/SkewedChi2SamplerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L213)

### transform()

Apply the approximate feature map to X.

#### Signature

```ts
transform(opts: SkewedChi2SamplerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerTransformOptions`](../interfaces/SkewedChi2SamplerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L243)
