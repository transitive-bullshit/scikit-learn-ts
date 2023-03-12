[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchDictionaryLearning

# Class: MiniBatchDictionaryLearning

Mini-batch dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchDictionaryLearning.html

## Table of contents

### Constructors

- [constructor](MiniBatchDictionaryLearning.md#constructor)

### Properties

- [\_isDisposed](MiniBatchDictionaryLearning.md#_isdisposed)
- [\_isInitialized](MiniBatchDictionaryLearning.md#_isinitialized)
- [\_py](MiniBatchDictionaryLearning.md#_py)
- [id](MiniBatchDictionaryLearning.md#id)
- [opts](MiniBatchDictionaryLearning.md#opts)

### Accessors

- [components\_](MiniBatchDictionaryLearning.md#components_)
- [feature\_names\_in\_](MiniBatchDictionaryLearning.md#feature_names_in_)
- [inner\_stats\_](MiniBatchDictionaryLearning.md#inner_stats_)
- [iter\_offset\_](MiniBatchDictionaryLearning.md#iter_offset_)
- [n\_features\_in\_](MiniBatchDictionaryLearning.md#n_features_in_)
- [n\_iter\_](MiniBatchDictionaryLearning.md#n_iter_)
- [n\_steps\_](MiniBatchDictionaryLearning.md#n_steps_)
- [py](MiniBatchDictionaryLearning.md#py)
- [random\_state\_](MiniBatchDictionaryLearning.md#random_state_)

### Methods

- [dispose](MiniBatchDictionaryLearning.md#dispose)
- [fit](MiniBatchDictionaryLearning.md#fit)
- [fit\_transform](MiniBatchDictionaryLearning.md#fit_transform)
- [get\_feature\_names\_out](MiniBatchDictionaryLearning.md#get_feature_names_out)
- [init](MiniBatchDictionaryLearning.md#init)
- [partial\_fit](MiniBatchDictionaryLearning.md#partial_fit)
- [set\_output](MiniBatchDictionaryLearning.md#set_output)
- [transform](MiniBatchDictionaryLearning.md#transform)

## Constructors

### constructor

• **new MiniBatchDictionaryLearning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MiniBatchDictionaryLearningOptions`](../interfaces/MiniBatchDictionaryLearningOptions.md) |

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Components extracted from the data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L353)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L434)

___

### inner\_stats\_

• `get` **inner_stats_**(): `Promise`<`any`\>

Internal sufficient statistics that are kept by the algorithm. Keeping them is useful in online settings, to avoid losing the history of the evolution, but they shouldn’t have any use for the end user. `A` `(n\_components, n\_components)` is the dictionary covariance matrix. `B` `(n\_features, n\_components)` is the data approximation matrix.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L380)

___

### iter\_offset\_

• `get` **iter_offset_**(): `Promise`<`number`\>

The number of iteration on data batches that has been performed before.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L488)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L407)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations over the full dataset.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L461)

___

### n\_steps\_

• `get` **n_steps_**(): `Promise`<`number`\>

Number of mini-batches processed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L542)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L34)

___

### random\_state\_

• `get` **random_state_**(): `Promise`<`any`\>

RandomState instance that is generated either from a seed, the random number generattor or by `np.random`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L515)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L115)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model from data in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningFitOptions`](../interfaces/MiniBatchDictionaryLearningFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L132)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningFitTransformOptions`](../interfaces/MiniBatchDictionaryLearningFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L166)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningGetFeatureNamesOutOptions`](../interfaces/MiniBatchDictionaryLearningGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L207)

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

[generated/decomposition/MiniBatchDictionaryLearning.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L43)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Update the model using the data in X as a mini-batch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningPartialFitOptions`](../interfaces/MiniBatchDictionaryLearningPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L242)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningSetOutputOptions`](../interfaces/MiniBatchDictionaryLearningSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L281)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningTransformOptions`](../interfaces/MiniBatchDictionaryLearningTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L318)
