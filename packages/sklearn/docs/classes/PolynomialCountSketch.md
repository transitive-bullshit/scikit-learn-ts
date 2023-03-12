# PolynomialCountSketch

Polynomial kernel approximation via Tensor Sketch.

Implements Tensor Sketch, which approximates the feature map of the polynomial kernel:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.PolynomialCountSketch.html)

## Constructors

## constructor()

### Signature

```ts
new PolynomialCountSketch(opts?: PolynomialCountSketchOptions): PolynomialCountSketch;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PolynomialCountSketchOptions`](../interfaces/PolynomialCountSketchOptions.md) |

### Returns

[`PolynomialCountSketch`](PolynomialCountSketch.md)

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L19)

### id

> `string`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L16)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L17)

## Accessors

### bitHash\_

Array with random entries in {+1, -1}, used to represent the 2-wise independent hash functions for Count Sketch computation.

#### Signature

```ts
bitHash_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L313)

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L313)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L367)

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L367)

### indexHash\_

Array of indexes in range \[0, n\_components) used to represent the 2-wise independent hash functions for Count Sketch computation.

#### Signature

```ts
indexHash_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L286)

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L286)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L340)

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L340)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L28)

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

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L32)

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L28) [generated/kernel\_approximation/PolynomialCountSketch.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L32)

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

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L89)

### fit()

Fit the model with X.

Initializes the internal variables. The method needs no information about the distribution of data, so we only care about n\_features in X.

#### Signature

```ts
fit(opts: PolynomialCountSketchFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchFitOptions`](../interfaces/PolynomialCountSketchFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L108)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: PolynomialCountSketchFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchFitTransformOptions`](../interfaces/PolynomialCountSketchFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L142)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: PolynomialCountSketchGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchGetFeatureNamesOutOptions`](../interfaces/PolynomialCountSketchGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L183)

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

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L41)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: PolynomialCountSketchSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchSetOutputOptions`](../interfaces/PolynomialCountSketchSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L220)

### transform()

Generate the feature map approximation for X.

#### Signature

```ts
transform(opts: PolynomialCountSketchTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchTransformOptions`](../interfaces/PolynomialCountSketchTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L252)
