# AdditiveChi2Sampler

Approximate feature map for additive chi2 kernel.

Uses sampling the fourier transform of the kernel characteristic at regular intervals.

Since the kernel that is to be approximated is additive, the components of the input vectors can be treated separately. Each entry in the original space is transformed into 2\*sample\_steps-1 features, where sample\_steps is a parameter of the method. Typical values of sample\_steps include 1, 2 and 3.

Optimal choices for the sampling interval for certain data ranges can be computed (see the reference). The default values should be reasonable.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.AdditiveChi2Sampler.html)

## Constructors

## constructor()

### Signature

```ts
new AdditiveChi2Sampler(opts?: AdditiveChi2SamplerOptions): AdditiveChi2Sampler;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `AdditiveChi2SamplerOptions` |

### Returns

[`AdditiveChi2Sampler`](AdditiveChi2Sampler.md)

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L25)

### id

> `string`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L22)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L23)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_approximation/AdditiveChi2Sampler.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L333)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/kernel\_approximation/AdditiveChi2Sampler.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L306)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L34)

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

Defined in: [generated/kernel\_approximation/AdditiveChi2Sampler.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L38)

### sample\_interval\_

Stored sampling interval. Specified as a parameter if `sample\_steps` not in {1,2,3}.

#### Signature

```ts
sample_interval_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/kernel\_approximation/AdditiveChi2Sampler.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L279)

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L91)

### fit()

Set the parameters.

#### Signature

```ts
fit(opts: AdditiveChi2SamplerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdditiveChi2SamplerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L108)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: AdditiveChi2SamplerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdditiveChi2SamplerFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L140)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: AdditiveChi2SamplerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdditiveChi2SamplerGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L178)

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

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L47)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: AdditiveChi2SamplerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdditiveChi2SamplerSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L215)

### transform()

Apply approximate feature map to X.

#### Signature

```ts
transform(opts: AdditiveChi2SamplerTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdditiveChi2SamplerTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/AdditiveChi2Sampler.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L247)
