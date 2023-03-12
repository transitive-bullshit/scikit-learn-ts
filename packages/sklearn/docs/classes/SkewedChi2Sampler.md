[sklearn](../readme.md) / [Exports](../modules.md) / SkewedChi2Sampler

# Class: SkewedChi2Sampler

Approximate feature map for “skewed chi-squared” kernel.

Read more in the [User Guide](../kernel_approximation.html#skewed-chi-kernel-approx).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.SkewedChi2Sampler.html

## Table of contents

### Constructors

- [constructor](SkewedChi2Sampler.md#constructor)

### Properties

- [\_isDisposed](SkewedChi2Sampler.md#_isdisposed)
- [\_isInitialized](SkewedChi2Sampler.md#_isinitialized)
- [\_py](SkewedChi2Sampler.md#_py)
- [id](SkewedChi2Sampler.md#id)
- [opts](SkewedChi2Sampler.md#opts)

### Accessors

- [feature\_names\_in\_](SkewedChi2Sampler.md#feature_names_in_)
- [n\_features\_in\_](SkewedChi2Sampler.md#n_features_in_)
- [py](SkewedChi2Sampler.md#py)
- [random\_offset\_](SkewedChi2Sampler.md#random_offset_)
- [random\_weights\_](SkewedChi2Sampler.md#random_weights_)

### Methods

- [dispose](SkewedChi2Sampler.md#dispose)
- [fit](SkewedChi2Sampler.md#fit)
- [fit\_transform](SkewedChi2Sampler.md#fit_transform)
- [get\_feature\_names\_out](SkewedChi2Sampler.md#get_feature_names_out)
- [init](SkewedChi2Sampler.md#init)
- [set\_output](SkewedChi2Sampler.md#set_output)
- [transform](SkewedChi2Sampler.md#transform)

## Constructors

### constructor

• **new SkewedChi2Sampler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SkewedChi2SamplerOptions`](../interfaces/SkewedChi2SamplerOptions.md) |

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L354)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L327)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L32)

___

### random\_offset\_

• `get` **random_offset_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Bias term, which will be added to the data. It is uniformly distributed between 0 and 2\*pi.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L300)

___

### random\_weights\_

• `get` **random_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Weight array, sampled from a secant hyperbolic distribution, which will be used to linearly transform the log of the data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L273)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model with X.

Samples random projection according to n\_features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerFitOptions`](../interfaces/SkewedChi2SamplerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerFitTransformOptions`](../interfaces/SkewedChi2SamplerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L136)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerGetFeatureNamesOutOptions`](../interfaces/SkewedChi2SamplerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L176)

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

[generated/kernel_approximation/SkewedChi2Sampler.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L41)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerSetOutputOptions`](../interfaces/SkewedChi2SamplerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L213)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Apply the approximate feature map to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SkewedChi2SamplerTransformOptions`](../interfaces/SkewedChi2SamplerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L243)
