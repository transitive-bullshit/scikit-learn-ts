[sklearn](../readme.md) / [Exports](../modules.md) / DecisionBoundaryDisplay

# Class: DecisionBoundaryDisplay

Decisions boundary visualization.

It is recommended to use [`from\_estimator`](#sklearn.inspection.DecisionBoundaryDisplay.from_estimator "sklearn.inspection.DecisionBoundaryDisplay.from_estimator") to create a [`DecisionBoundaryDisplay`](#sklearn.inspection.DecisionBoundaryDisplay "sklearn.inspection.DecisionBoundaryDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.inspection.DecisionBoundaryDisplay.html

## Table of contents

### Constructors

- [constructor](DecisionBoundaryDisplay.md#constructor)

### Properties

- [\_isDisposed](DecisionBoundaryDisplay.md#_isdisposed)
- [\_isInitialized](DecisionBoundaryDisplay.md#_isinitialized)
- [\_py](DecisionBoundaryDisplay.md#_py)
- [id](DecisionBoundaryDisplay.md#id)
- [opts](DecisionBoundaryDisplay.md#opts)

### Accessors

- [ax\_](DecisionBoundaryDisplay.md#ax_)
- [figure\_](DecisionBoundaryDisplay.md#figure_)
- [py](DecisionBoundaryDisplay.md#py)
- [surface\_](DecisionBoundaryDisplay.md#surface_)

### Methods

- [dispose](DecisionBoundaryDisplay.md#dispose)
- [from\_estimator](DecisionBoundaryDisplay.md#from_estimator)
- [init](DecisionBoundaryDisplay.md#init)
- [plot](DecisionBoundaryDisplay.md#plot)

## Constructors

### constructor

• **new DecisionBoundaryDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DecisionBoundaryDisplayOptions`](../interfaces/DecisionBoundaryDisplayOptions.md) |

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L19)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with confusion matrix.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L218)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the confusion matrix.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L245)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L34)

___

### surface\_

• `get` **surface_**(): `Promise`<`any`\>

If `plot\_method` is ‘contour’ or ‘contourf’, `surface\_` is a [`QuadContourSet`](https://matplotlib.org/stable/api/contour_api.html#matplotlib.contour.QuadContourSet "(in Matplotlib v3.7.1)"). If `plot\_method` is ‘pcolormesh’, `surface\_` is a [`QuadMesh`](https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.QuadMesh "(in Matplotlib v3.7.1)").

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L191)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L93)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Plot decision boundary given an estimator.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionBoundaryDisplayFromEstimatorOptions`](../interfaces/DecisionBoundaryDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L112)

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

[generated/inspection/DecisionBoundaryDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L43)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionBoundaryDisplayPlotOptions`](../interfaces/DecisionBoundaryDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L157)
