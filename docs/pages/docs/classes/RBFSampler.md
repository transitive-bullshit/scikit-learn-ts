# RBFSampler

Approximate a RBF kernel feature map using random Fourier features.

It implements a variant of Random Kitchen Sinks.\[1\]

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.RBFSampler.html)

## Constructors

## constructor()

### Signature

```ts
new RBFSampler(opts?: object): RBFSampler;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.gamma?` | `number` \| `"scale"` | Parameter of RBF kernel: exp(-gamma \* x^2). If `gamma='scale'` is passed then it uses 1 / (n\_features \* X.var()) as value of gamma.  `Default Value`  `1` |
| `opts.n_components?` | `number` | Number of Monte Carlo samples per original feature. Equals the dimensionality of the computed feature space.  `Default Value`  `100` |
| `opts.random_state?` | `number` | Pseudo-random number generator to control the generation of the random weights and random offset when fitting the training data. Pass an int for reproducible output across multiple function calls. See Glossary. |

### Returns

[`RBFSampler`](RBFSampler.md)

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L25)

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

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L104)

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
| `opts.X?` | `any` | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L123)

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
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L163)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.RBFSampler.fit "sklearn.kernel_approximation.RBFSampler.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L212)

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

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L62)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

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

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L250)

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
| `opts.X?` | `any` | New data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L283)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L21)

### id

> `string`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L18)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L391)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L366)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/RBFSampler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L49)

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

Defined in: [generated/kernel\_approximation/RBFSampler.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L53)

### random\_offset\_

Random offset used to compute the projection in the `n\_components` dimensions of the feature space.

#### Signature

```ts
random_offset_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L316)

### random\_weights\_

Random projection directions drawn from the Fourier transform of the RBF kernel.

#### Signature

```ts
random_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/kernel\_approximation/RBFSampler.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L341)
