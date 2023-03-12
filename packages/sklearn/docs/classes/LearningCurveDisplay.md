[sklearn](../readme.md) / [Exports](../modules.md) / LearningCurveDisplay

# Class: LearningCurveDisplay

Learning Curve visualization.

It is recommended to use [`from\_estimator`](#sklearn.model_selection.LearningCurveDisplay.from_estimator "sklearn.model_selection.LearningCurveDisplay.from_estimator") to create a [`LearningCurveDisplay`](#sklearn.model_selection.LearningCurveDisplay "sklearn.model_selection.LearningCurveDisplay") instance. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LearningCurveDisplay.html

## Table of contents

### Constructors

- [constructor](LearningCurveDisplay.md#constructor)

### Properties

- [\_isDisposed](LearningCurveDisplay.md#_isdisposed)
- [\_isInitialized](LearningCurveDisplay.md#_isinitialized)
- [\_py](LearningCurveDisplay.md#_py)
- [id](LearningCurveDisplay.md#id)
- [opts](LearningCurveDisplay.md#opts)

### Accessors

- [ax\_](LearningCurveDisplay.md#ax_)
- [errorbar\_](LearningCurveDisplay.md#errorbar_)
- [figure\_](LearningCurveDisplay.md#figure_)
- [fill\_between\_](LearningCurveDisplay.md#fill_between_)
- [lines\_](LearningCurveDisplay.md#lines_)
- [py](LearningCurveDisplay.md#py)

### Methods

- [dispose](LearningCurveDisplay.md#dispose)
- [from\_estimator](LearningCurveDisplay.md#from_estimator)
- [init](LearningCurveDisplay.md#init)
- [plot](LearningCurveDisplay.md#plot)

## Constructors

### constructor

• **new LearningCurveDisplay**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LearningCurveDisplayOptions`](../interfaces/LearningCurveDisplayOptions.md) |

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L19)

## Accessors

### ax\_

• `get` **ax_**(): `Promise`<`any`\>

Axes with the learning curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L216)

___

### errorbar\_

• `get` **errorbar_**(): `Promise`<`any`\>

When the `std\_display\_style` is `"errorbar"`, this is a list of `matplotlib.container.ErrorbarContainer` objects. If another style is used, `errorbar\_` is `undefined`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L270)

___

### figure\_

• `get` **figure_**(): `Promise`<`any`\>

Figure containing the learning curve.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L243)

___

### fill\_between\_

• `get` **fill_between_**(): `Promise`<`any`\>

When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.collections.PolyCollection` objects. If another style is used, `fill\_between\_` is `undefined`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L324)

___

### lines\_

• `get` **lines_**(): `Promise`<`any`\>

When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.lines.Line2D` objects corresponding to the mean train and test scores. If another style is used, `line\_` is `undefined`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L297)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L97)

___

### from\_estimator

▸ **from_estimator**(`opts`): `Promise`<`any`\>

Create a learning curve display from an estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LearningCurveDisplayFromEstimatorOptions`](../interfaces/LearningCurveDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L114)

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

[generated/model_selection/LearningCurveDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L43)

___

### plot

▸ **plot**(`opts`): `Promise`<`any`\>

Plot visualization.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LearningCurveDisplayPlotOptions`](../interfaces/LearningCurveDisplayPlotOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L178)
