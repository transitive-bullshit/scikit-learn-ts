[sklearn](../readme.md) / [Exports](../modules.md) / RBFSampler

# Class: RBFSampler

Approximate a RBF kernel feature map using random Fourier features.

It implements a variant of Random Kitchen Sinks.\[1\]

Read more in the [User Guide](../kernel_approximation.html#rbf-kernel-approx).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.RBFSampler.html

## Table of contents

### Constructors

- [constructor](RBFSampler.md#constructor)

### Properties

- [\_isDisposed](RBFSampler.md#_isdisposed)
- [\_isInitialized](RBFSampler.md#_isinitialized)
- [\_py](RBFSampler.md#_py)
- [id](RBFSampler.md#id)
- [opts](RBFSampler.md#opts)

### Accessors

- [feature\_names\_in\_](RBFSampler.md#feature_names_in_)
- [n\_features\_in\_](RBFSampler.md#n_features_in_)
- [py](RBFSampler.md#py)
- [random\_offset\_](RBFSampler.md#random_offset_)
- [random\_weights\_](RBFSampler.md#random_weights_)

### Methods

- [dispose](RBFSampler.md#dispose)
- [fit](RBFSampler.md#fit)
- [fit\_transform](RBFSampler.md#fit_transform)
- [get\_feature\_names\_out](RBFSampler.md#get_feature_names_out)
- [init](RBFSampler.md#init)
- [set\_output](RBFSampler.md#set_output)
- [transform](RBFSampler.md#transform)

## Constructors

### constructor

• **new RBFSampler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RBFSamplerOptions`](../interfaces/RBFSamplerOptions.md) |

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L334)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L309)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L34)

___

### random\_offset\_

• `get` **random_offset_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Random offset used to compute the projection in the `n\_components` dimensions of the feature space.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L259)

___

### random\_weights\_

• `get` **random_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Random projection directions drawn from the Fourier transform of the RBF kernel.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L284)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model with X.

Samples random projection according to n\_features.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFSamplerFitOptions`](../interfaces/RBFSamplerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFSamplerFitTransformOptions`](../interfaces/RBFSamplerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFSamplerGetFeatureNamesOutOptions`](../interfaces/RBFSamplerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L168)

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

[generated/kernel_approximation/RBFSampler.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFSamplerSetOutputOptions`](../interfaces/RBFSamplerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L203)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Apply the approximate feature map to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFSamplerTransformOptions`](../interfaces/RBFSamplerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L231)
