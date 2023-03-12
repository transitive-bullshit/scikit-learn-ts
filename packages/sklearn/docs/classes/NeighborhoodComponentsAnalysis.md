[sklearn](../readme.md) / [Exports](../modules.md) / NeighborhoodComponentsAnalysis

# Class: NeighborhoodComponentsAnalysis

Neighborhood Components Analysis.

Neighborhood Component Analysis (NCA) is a machine learning algorithm for metric learning. It learns a linear transformation in a supervised fashion to improve the classification accuracy of a stochastic nearest neighbors rule in the transformed space.

Read more in the [User Guide](../neighbors.html#nca).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html

## Table of contents

### Constructors

- [constructor](NeighborhoodComponentsAnalysis.md#constructor)

### Properties

- [\_isDisposed](NeighborhoodComponentsAnalysis.md#_isdisposed)
- [\_isInitialized](NeighborhoodComponentsAnalysis.md#_isinitialized)
- [\_py](NeighborhoodComponentsAnalysis.md#_py)
- [id](NeighborhoodComponentsAnalysis.md#id)
- [opts](NeighborhoodComponentsAnalysis.md#opts)

### Accessors

- [components\_](NeighborhoodComponentsAnalysis.md#components_)
- [feature\_names\_in\_](NeighborhoodComponentsAnalysis.md#feature_names_in_)
- [n\_features\_in\_](NeighborhoodComponentsAnalysis.md#n_features_in_)
- [n\_iter\_](NeighborhoodComponentsAnalysis.md#n_iter_)
- [py](NeighborhoodComponentsAnalysis.md#py)
- [random\_state\_](NeighborhoodComponentsAnalysis.md#random_state_)

### Methods

- [dispose](NeighborhoodComponentsAnalysis.md#dispose)
- [fit](NeighborhoodComponentsAnalysis.md#fit)
- [fit\_transform](NeighborhoodComponentsAnalysis.md#fit_transform)
- [get\_feature\_names\_out](NeighborhoodComponentsAnalysis.md#get_feature_names_out)
- [init](NeighborhoodComponentsAnalysis.md#init)
- [set\_output](NeighborhoodComponentsAnalysis.md#set_output)
- [transform](NeighborhoodComponentsAnalysis.md#transform)

## Constructors

### constructor

• **new NeighborhoodComponentsAnalysis**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NeighborhoodComponentsAnalysisOptions`](../interfaces/NeighborhoodComponentsAnalysisOptions.md) |

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The linear transformation learned during fitting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L298)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L406)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L325)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Counts the number of iterations performed by the optimizer.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L352)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L36)

___

### random\_state\_

• `get` **random_state_**(): `Promise`<`any`\>

Pseudo random number generator object used during initialization.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L379)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisFitOptions`](../interfaces/NeighborhoodComponentsAnalysisFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L114)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisFitTransformOptions`](../interfaces/NeighborhoodComponentsAnalysisFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L150)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisGetFeatureNamesOutOptions`](../interfaces/NeighborhoodComponentsAnalysisGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L191)

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

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L45)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisSetOutputOptions`](../interfaces/NeighborhoodComponentsAnalysisSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L228)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Apply the learned transformation to the given data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisTransformOptions`](../interfaces/NeighborhoodComponentsAnalysisTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L263)
