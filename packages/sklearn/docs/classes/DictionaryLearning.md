[sklearn](../readme.md) / [Exports](../modules.md) / DictionaryLearning

# Class: DictionaryLearning

Dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.DictionaryLearning.html

## Table of contents

### Constructors

- [constructor](DictionaryLearning.md#constructor)

### Properties

- [\_isDisposed](DictionaryLearning.md#_isdisposed)
- [\_isInitialized](DictionaryLearning.md#_isinitialized)
- [\_py](DictionaryLearning.md#_py)
- [id](DictionaryLearning.md#id)
- [opts](DictionaryLearning.md#opts)

### Accessors

- [components\_](DictionaryLearning.md#components_)
- [error\_](DictionaryLearning.md#error_)
- [feature\_names\_in\_](DictionaryLearning.md#feature_names_in_)
- [n\_features\_in\_](DictionaryLearning.md#n_features_in_)
- [n\_iter\_](DictionaryLearning.md#n_iter_)
- [py](DictionaryLearning.md#py)

### Methods

- [dispose](DictionaryLearning.md#dispose)
- [fit](DictionaryLearning.md#fit)
- [fit\_transform](DictionaryLearning.md#fit_transform)
- [get\_feature\_names\_out](DictionaryLearning.md#get_feature_names_out)
- [init](DictionaryLearning.md#init)
- [set\_output](DictionaryLearning.md#set_output)
- [transform](DictionaryLearning.md#transform)

## Constructors

### constructor

• **new DictionaryLearning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DictionaryLearningOptions`](../interfaces/DictionaryLearningOptions.md) |

#### Defined in

[generated/decomposition/DictionaryLearning.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

dictionary atoms extracted from the data

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L301)

___

### error\_

• `get` **error_**(): `Promise`<`any`\>

vector of errors at each iteration

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L328)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L382)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L355)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L409)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L111)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model from data in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningFitOptions`](../interfaces/DictionaryLearningFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L128)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningFitTransformOptions`](../interfaces/DictionaryLearningFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L160)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningGetFeatureNamesOutOptions`](../interfaces/DictionaryLearningGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L200)

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

[generated/decomposition/DictionaryLearning.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningSetOutputOptions`](../interfaces/DictionaryLearningSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L237)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningTransformOptions`](../interfaces/DictionaryLearningTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L269)
