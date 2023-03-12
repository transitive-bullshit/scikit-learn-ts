# LearningCurveDisplay

Learning Curve visualization.

It is recommended to use [`from\_estimator`](#sklearn.model_selection.LearningCurveDisplay.from_estimator "sklearn.model_selection.LearningCurveDisplay.from_estimator") to create a [`LearningCurveDisplay`](#sklearn.model_selection.LearningCurveDisplay "sklearn.model_selection.LearningCurveDisplay") instance. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LearningCurveDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new LearningCurveDisplay(opts?: LearningCurveDisplayOptions): LearningCurveDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LearningCurveDisplayOptions`](../interfaces/LearningCurveDisplayOptions.md) |

### Returns

[`LearningCurveDisplay`](LearningCurveDisplay.md)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L19)

## Accessors

### ax\_

Axes with the learning curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/LearningCurveDisplay.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L216)

### errorbar\_

When the `std\_display\_style` is `"errorbar"`, this is a list of `matplotlib.container.ErrorbarContainer` objects. If another style is used, `errorbar\_` is `undefined`.

#### Signature

```ts
errorbar_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/LearningCurveDisplay.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L270)

### figure\_

Figure containing the learning curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/LearningCurveDisplay.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L243)

### fill\_between\_

When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.collections.PolyCollection` objects. If another style is used, `fill\_between\_` is `undefined`.

#### Signature

```ts
fill_between_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/LearningCurveDisplay.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L324)

### lines\_

When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.lines.Line2D` objects corresponding to the mean train and test scores. If another style is used, `line\_` is `undefined`.

#### Signature

```ts
lines_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/LearningCurveDisplay.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L297)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L30)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/model\_selection/LearningCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L34)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L97)

### from\_estimator()

Create a learning curve display from an estimator.

#### Signature

```ts
from_estimator(opts: LearningCurveDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LearningCurveDisplayFromEstimatorOptions`](../interfaces/LearningCurveDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L114)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L43)

### plot()

Plot visualization.

#### Signature

```ts
plot(opts: LearningCurveDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LearningCurveDisplayPlotOptions`](../interfaces/LearningCurveDisplayPlotOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L178)
