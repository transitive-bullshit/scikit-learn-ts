# RBFSampler

Approximate a RBF kernel feature map using random Fourier features.

It implements a variant of Random Kitchen Sinks.\[1\]

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.RBFSampler.html)

## Constructors

## constructor()

### Signature

```ts
new RBFSampler(opts?: RBFSamplerOptions): RBFSampler;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `RBFSamplerOptions` |

### Returns

[`RBFSampler`](RBFSampler.md)

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L21)

### id

> `string`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L18)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L334)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L309)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L30)

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

Defined in: [generated/kernel\_approximation/RBFSampler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L34)

### random\_offset\_

Random offset used to compute the projection in the `n\_components` dimensions of the feature space.

#### Signature

```ts
random_offset_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L259)

### random\_weights\_

Random projection directions drawn from the Fourier transform of the RBF kernel.

#### Signature

```ts
random_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L284)

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

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L85)

### fit()

Fit the model with X.

Samples random projection according to n\_features.

#### Signature

```ts
fit(opts: RBFSamplerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RBFSamplerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L104)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: RBFSamplerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RBFSamplerFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L134)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: RBFSamplerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RBFSamplerGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L168)

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

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L43)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: RBFSamplerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RBFSamplerSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L203)

### transform()

Apply the approximate feature map to X.

#### Signature

```ts
transform(opts: RBFSamplerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RBFSamplerTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L231)
