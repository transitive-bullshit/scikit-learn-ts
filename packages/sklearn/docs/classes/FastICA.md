[sklearn](../readme.md) / [Exports](../modules.md) / FastICA

# Class: FastICA

FastICA: a fast algorithm for Independent Component Analysis.

The implementation is based on [\[1\]](#r44c805292efc-1).

Read more in the [User Guide](../decomposition.html#ica).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FastICA.html

## Table of contents

### Constructors

- [constructor](FastICA.md#constructor)

### Properties

- [\_isDisposed](FastICA.md#_isdisposed)
- [\_isInitialized](FastICA.md#_isinitialized)
- [\_py](FastICA.md#_py)
- [id](FastICA.md#id)
- [opts](FastICA.md#opts)

### Accessors

- [components\_](FastICA.md#components_)
- [feature\_names\_in\_](FastICA.md#feature_names_in_)
- [mean\_](FastICA.md#mean_)
- [mixing\_](FastICA.md#mixing_)
- [n\_features\_in\_](FastICA.md#n_features_in_)
- [n\_iter\_](FastICA.md#n_iter_)
- [py](FastICA.md#py)
- [whitening\_](FastICA.md#whitening_)

### Methods

- [dispose](FastICA.md#dispose)
- [fit](FastICA.md#fit)
- [fit\_transform](FastICA.md#fit_transform)
- [get\_feature\_names\_out](FastICA.md#get_feature_names_out)
- [init](FastICA.md#init)
- [inverse\_transform](FastICA.md#inverse_transform)
- [set\_output](FastICA.md#set_output)
- [transform](FastICA.md#transform)

## Constructors

### constructor

• **new FastICA**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FastICAOptions`](../interfaces/FastICAOptions.md) |

#### Defined in

[generated/decomposition/FastICA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/FastICA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/FastICA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/FastICA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/FastICA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/FastICA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The linear operator to apply to the data to get the independent sources. This is equal to the unmixing matrix when `whiten` is `false`, and equal to `np.dot(unmixing\_matrix, self.whitening\_)` when `whiten` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FastICA.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L289)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/FastICA.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L382)

___

### mean\_

• `get` **mean_**(): `Promise`<`any`\>

The mean over features. Only set if `self.whiten` is `true`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L335)

___

### mixing\_

• `get` **mixing_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The pseudo-inverse of `components\_`. It is the linear operator that maps independent sources to the data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FastICA.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L312)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/FastICA.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L357)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

If the algorithm is “deflation”, n\_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/FastICA.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L407)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/FastICA.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/FastICA.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L34)

___

### whitening\_

• `get` **whitening_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Only set if whiten is ‘`true`’. This is the pre-whitening matrix that projects data onto the first `n\_components` principal components.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FastICA.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L430)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/FastICA.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L92)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAFitOptions`](../interfaces/FastICAFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L109)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit the model and recover the sources from X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAFitTransformOptions`](../interfaces/FastICAFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FastICA.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L137)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAGetFeatureNamesOutOptions`](../interfaces/FastICAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L167)

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

[generated/decomposition/FastICA.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform the sources back to the mixed data (apply mixing matrix).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAInverseTransformOptions`](../interfaces/FastICAInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FastICA.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L197)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICASetOutputOptions`](../interfaces/FastICASetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L231)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Recover the sources from X (apply the unmixing matrix).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICATransformOptions`](../interfaces/FastICATransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/FastICA.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/FastICA.ts#L259)
