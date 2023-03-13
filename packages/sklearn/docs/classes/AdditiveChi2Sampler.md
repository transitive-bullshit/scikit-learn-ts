# AdditiveChi2Sampler

Approximate feature map for additive chi2 kernel.

Uses sampling the fourier transform of the kernel characteristic at regular intervals.

Since the kernel that is to be approximated is additive, the components of the input vectors can be treated separately. Each entry in the original space is transformed into 2\*sample\_steps-1 features, where sample\_steps is a parameter of the method. Typical values of sample\_steps include 1, 2 and 3.

Optimal choices for the sampling interval for certain data ranges can be computed (see the reference). The default values should be reasonable.

Read more in the [User Guide](../kernel_approximation.html#additive-chi-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.AdditiveChi2Sampler.html)

## Constructors

## constructor()

### Signature

```ts
new AdditiveChi2Sampler(opts?: object): AdditiveChi2Sampler;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.sample_interval?` | `number` | Sampling interval. Must be specified when sample\_steps not in {1,2,3}. |
| `opts.sample_steps?` | `number` | Gives the number of (complex) sampling points.  `Default Value`  `2` |

### Returns

[`AdditiveChi2Sampler`](AdditiveChi2Sampler.md)

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L25)

### id

> `string`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L22)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L23)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L379)

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L379)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L352)

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L352)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L46)

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L50)

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L46) [generated/kernel\_approximation/AdditiveChi2Sampler.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L50)

### sample\_interval\_

Stored sampling interval. Specified as a parameter if `sample\_steps` not in {1,2,3}.

#### Signature

```ts
sample_interval_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L325)

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L325)

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L103)

### fit()

Set the parameters.

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L120)

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L162)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.AdditiveChi2Sampler.fit "sklearn.kernel_approximation.AdditiveChi2Sampler.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L213)

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L59)

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L253)

### transform()

Apply approximate feature map to X.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L290)
