# SkewedChi2Sampler

Approximate feature map for “skewed chi-squared” kernel.

Read more in the [User Guide](../kernel_approximation.html#skewed-chi-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.SkewedChi2Sampler.html)

## Constructors

## constructor()

### Signature

```ts
new SkewedChi2Sampler(opts?: object): SkewedChi2Sampler;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_components?` | `number` | Number of Monte Carlo samples per original feature. Equals the dimensionality of the computed feature space.  `Default Value`  `100` |
| `opts.random_state?` | `number` | Pseudo-random number generator to control the generation of the random weights and random offset when fitting the training data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.skewedness?` | `number` | “skewedness” parameter of the kernel. Needs to be cross-validated.  `Default Value`  `1` |

### Returns

[`SkewedChi2Sampler`](SkewedChi2Sampler.md)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L23)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L104)

### fit()

Fit the model with X.

Samples random projection according to n\_features.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L123)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L165)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.SkewedChi2Sampler.fit "sklearn.kernel_approximation.SkewedChi2Sampler.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L218)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L60)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L258)

### transform()

Apply the approximate feature map to X.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | New data, where `n\_samples` is the number of samples and `n\_features` is the number of features. All values of X must be strictly greater than “-skewedness”. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L293)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L19)

### id

> `string`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L16)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L409)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L409)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L382)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L382)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L47)

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

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L51)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L47) [generated/kernel\_approximation/SkewedChi2Sampler.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L51)

### random\_offset\_

Bias term, which will be added to the data. It is uniformly distributed between 0 and 2\*pi.

#### Signature

```ts
random_offset_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L355)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L355)

### random\_weights\_

Weight array, sampled from a secant hyperbolic distribution, which will be used to linearly transform the log of the data.

#### Signature

```ts
random_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L328)

Defined in:  [generated/kernel\_approximation/SkewedChi2Sampler.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L328)
