[sklearn](../readme.md) / [Exports](../modules.md) / Nystroem

# Class: Nystroem

Approximate a kernel map using a subset of the training data.

Constructs an approximate feature map for an arbitrary kernel using a subset of the data as basis.

Read more in the [User Guide](../kernel_approximation.html#nystroem-kernel-approx).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html

## Table of contents

### Constructors

- [constructor](Nystroem.md#constructor)

### Properties

- [\_isDisposed](Nystroem.md#_isdisposed)
- [\_isInitialized](Nystroem.md#_isinitialized)
- [\_py](Nystroem.md#_py)
- [id](Nystroem.md#id)
- [opts](Nystroem.md#opts)

### Accessors

- [component\_indices\_](Nystroem.md#component_indices_)
- [components\_](Nystroem.md#components_)
- [feature\_names\_in\_](Nystroem.md#feature_names_in_)
- [n\_features\_in\_](Nystroem.md#n_features_in_)
- [normalization\_](Nystroem.md#normalization_)
- [py](Nystroem.md#py)

### Methods

- [dispose](Nystroem.md#dispose)
- [fit](Nystroem.md#fit)
- [fit\_transform](Nystroem.md#fit_transform)
- [get\_feature\_names\_out](Nystroem.md#get_feature_names_out)
- [init](Nystroem.md#init)
- [set\_output](Nystroem.md#set_output)
- [transform](Nystroem.md#transform)

## Constructors

### constructor

• **new Nystroem**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NystroemOptions`](../interfaces/NystroemOptions.md) |

#### Defined in

[generated/kernel_approximation/Nystroem.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L19)

## Accessors

### component\_indices\_

• `get` **component_indices_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of `components\_` in the training set.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L288)

___

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Subset of training points used to construct the feature map.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L265)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L363)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L338)

___

### normalization\_

• `get` **normalization_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Normalization matrix needed for embedding. Square root of the kernel matrix on `components\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L313)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L90)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit estimator to data.

Samples a subset of training points, computes kernel on these and computes normalization matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemFitOptions`](../interfaces/NystroemFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L109)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemFitTransformOptions`](../interfaces/NystroemFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L139)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemGetFeatureNamesOutOptions`](../interfaces/NystroemGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L173)

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

[generated/kernel_approximation/Nystroem.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemSetOutputOptions`](../interfaces/NystroemSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L207)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply feature map to X.

Computes an approximate feature map using the kernel between some training points and X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NystroemTransformOptions`](../interfaces/NystroemTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/kernel_approximation/Nystroem.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L237)
