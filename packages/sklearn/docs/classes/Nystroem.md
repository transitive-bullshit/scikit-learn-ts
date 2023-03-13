# Nystroem

Approximate a kernel map using a subset of the training data.

Constructs an approximate feature map for an arbitrary kernel using a subset of the data as basis.

Read more in the [User Guide](../kernel_approximation.html#nystroem-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html)

## Constructors

## constructor()

### Signature

```ts
new Nystroem(opts?: NystroemOptions): Nystroem;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NystroemOptions`](../interfaces/NystroemOptions.md) |

### Returns

[`Nystroem`](Nystroem.md)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L21)

### id

> `string`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L18)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L19)

## Accessors

### component\_indices\_

Indices of `components\_` in the training set.

#### Signature

```ts
component_indices_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L288)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L288)

### components\_

Subset of training points used to construct the feature map.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L265)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L265)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L363)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L363)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L338)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L338)

### normalization\_

Normalization matrix needed for embedding. Square root of the kernel matrix on `components\_`.

#### Signature

```ts
normalization_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L313)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L313)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L30)

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

Defined in:  [generated/kernel\_approximation/Nystroem.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L34)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L30) [generated/kernel\_approximation/Nystroem.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L34)

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

Defined in:  [generated/kernel\_approximation/Nystroem.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L90)

### fit()

Fit estimator to data.

Samples a subset of training points, computes kernel on these and computes normalization matrix.

#### Signature

```ts
fit(opts: NystroemFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemFitOptions`](../interfaces/NystroemFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L109)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: NystroemFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemFitTransformOptions`](../interfaces/NystroemFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L139)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: NystroemGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemGetFeatureNamesOutOptions`](../interfaces/NystroemGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L173)

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

Defined in:  [generated/kernel\_approximation/Nystroem.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L43)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: NystroemSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemSetOutputOptions`](../interfaces/NystroemSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L207)

### transform()

Apply feature map to X.

Computes an approximate feature map using the kernel between some training points and X.

#### Signature

```ts
transform(opts: NystroemTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemTransformOptions`](../interfaces/NystroemTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L237)
