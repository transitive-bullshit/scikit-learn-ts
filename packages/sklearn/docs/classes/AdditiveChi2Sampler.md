[sklearn](../readme.md) / [Exports](../modules.md) / AdditiveChi2Sampler

# Class: AdditiveChi2Sampler

Approximate feature map for additive chi2 kernel.

Uses sampling the fourier transform of the kernel characteristic at regular intervals.

Since the kernel that is to be approximated is additive, the components of the input vectors can be treated separately. Each entry in the original space is transformed into 2\*sample\_steps-1 features, where sample\_steps is a parameter of the method. Typical values of sample\_steps include 1, 2 and 3.

Optimal choices for the sampling interval for certain data ranges can be computed (see the reference). The default values should be reasonable.

Read more in the [User Guide](../kernel_approximation.html#additive-chi-kernel-approx).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.AdditiveChi2Sampler.html

## Table of contents

### Constructors

- [constructor](AdditiveChi2Sampler.md#constructor)

### Properties

- [\_isDisposed](AdditiveChi2Sampler.md#_isdisposed)
- [\_isInitialized](AdditiveChi2Sampler.md#_isinitialized)
- [\_py](AdditiveChi2Sampler.md#_py)
- [id](AdditiveChi2Sampler.md#id)
- [opts](AdditiveChi2Sampler.md#opts)

### Accessors

- [feature\_names\_in\_](AdditiveChi2Sampler.md#feature_names_in_)
- [n\_features\_in\_](AdditiveChi2Sampler.md#n_features_in_)
- [py](AdditiveChi2Sampler.md#py)
- [sample\_interval\_](AdditiveChi2Sampler.md#sample_interval_)

### Methods

- [dispose](AdditiveChi2Sampler.md#dispose)
- [fit](AdditiveChi2Sampler.md#fit)
- [fit\_transform](AdditiveChi2Sampler.md#fit_transform)
- [get\_feature\_names\_out](AdditiveChi2Sampler.md#get_feature_names_out)
- [init](AdditiveChi2Sampler.md#init)
- [set\_output](AdditiveChi2Sampler.md#set_output)
- [transform](AdditiveChi2Sampler.md#transform)

## Constructors

### constructor

• **new AdditiveChi2Sampler**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AdditiveChi2SamplerOptions`](../interfaces/AdditiveChi2SamplerOptions.md) |

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L23)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L333)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L306)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L38)

___

### sample\_interval\_

• `get` **sample_interval_**(): `Promise`<`number`\>

Stored sampling interval. Specified as a parameter if `sample\_steps` not in {1,2,3}.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L279)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Set the parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdditiveChi2SamplerFitOptions`](../interfaces/AdditiveChi2SamplerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdditiveChi2SamplerFitTransformOptions`](../interfaces/AdditiveChi2SamplerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L140)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdditiveChi2SamplerGetFeatureNamesOutOptions`](../interfaces/AdditiveChi2SamplerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L178)

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

[generated/kernel_approximation/AdditiveChi2Sampler.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L47)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdditiveChi2SamplerSetOutputOptions`](../interfaces/AdditiveChi2SamplerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L215)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Apply approximate feature map to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdditiveChi2SamplerTransformOptions`](../interfaces/AdditiveChi2SamplerTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/AdditiveChi2Sampler.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L247)
