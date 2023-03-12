[sklearn](../readme.md) / [Exports](../modules.md) / PolynomialCountSketch

# Class: PolynomialCountSketch

Polynomial kernel approximation via Tensor Sketch.

Implements Tensor Sketch, which approximates the feature map of the polynomial kernel:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.PolynomialCountSketch.html

## Table of contents

### Constructors

- [constructor](PolynomialCountSketch.md#constructor)

### Properties

- [\_isDisposed](PolynomialCountSketch.md#_isdisposed)
- [\_isInitialized](PolynomialCountSketch.md#_isinitialized)
- [\_py](PolynomialCountSketch.md#_py)
- [id](PolynomialCountSketch.md#id)
- [opts](PolynomialCountSketch.md#opts)

### Accessors

- [bitHash\_](PolynomialCountSketch.md#bithash_)
- [feature\_names\_in\_](PolynomialCountSketch.md#feature_names_in_)
- [indexHash\_](PolynomialCountSketch.md#indexhash_)
- [n\_features\_in\_](PolynomialCountSketch.md#n_features_in_)
- [py](PolynomialCountSketch.md#py)

### Methods

- [dispose](PolynomialCountSketch.md#dispose)
- [fit](PolynomialCountSketch.md#fit)
- [fit\_transform](PolynomialCountSketch.md#fit_transform)
- [get\_feature\_names\_out](PolynomialCountSketch.md#get_feature_names_out)
- [init](PolynomialCountSketch.md#init)
- [set\_output](PolynomialCountSketch.md#set_output)
- [transform](PolynomialCountSketch.md#transform)

## Constructors

### constructor

• **new PolynomialCountSketch**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PolynomialCountSketchOptions`](../interfaces/PolynomialCountSketchOptions.md) |

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L17)

## Accessors

### bitHash\_

• `get` **bitHash_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Array with random entries in {+1, -1}, used to represent the 2-wise independent hash functions for Count Sketch computation.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L313)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L367)

___

### indexHash\_

• `get` **indexHash_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Array of indexes in range \[0, n\_components) used to represent the 2-wise independent hash functions for Count Sketch computation.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L286)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L340)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model with X.

Initializes the internal variables. The method needs no information about the distribution of data, so we only care about n\_features in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchFitOptions`](../interfaces/PolynomialCountSketchFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchFitTransformOptions`](../interfaces/PolynomialCountSketchFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L142)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchGetFeatureNamesOutOptions`](../interfaces/PolynomialCountSketchGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L183)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L41)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchSetOutputOptions`](../interfaces/PolynomialCountSketchSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L220)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate the feature map approximation for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PolynomialCountSketchTransformOptions`](../interfaces/PolynomialCountSketchTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L252)
