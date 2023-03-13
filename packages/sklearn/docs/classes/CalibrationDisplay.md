# CalibrationDisplay

Calibration curve (also known as reliability diagram) visualization.

It is recommended to use [`from\_estimator`](#sklearn.calibration.CalibrationDisplay.from_estimator "sklearn.calibration.CalibrationDisplay.from_estimator") or [`from\_predictions`](#sklearn.calibration.CalibrationDisplay.from_predictions "sklearn.calibration.CalibrationDisplay.from_predictions") to create a `CalibrationDisplay`. All parameters are stored as attributes.

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibrationDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new CalibrationDisplay(opts?: CalibrationDisplayOptions): CalibrationDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CalibrationDisplayOptions`](../interfaces/CalibrationDisplayOptions.md) |

### Returns

[`CalibrationDisplay`](CalibrationDisplay.md)

Defined in:  [generated/calibration/CalibrationDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibrationDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibrationDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/calibration/CalibrationDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/calibration/CalibrationDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/calibration/CalibrationDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L19)

## Accessors

### ax\_

Axes with calibration curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L276)

Defined in:  [generated/calibration/CalibrationDisplay.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L276)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L303)

Defined in:  [generated/calibration/CalibrationDisplay.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L303)

### line\_

Calibration curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L249)

Defined in:  [generated/calibration/CalibrationDisplay.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L249)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/calibration/CalibrationDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L30)

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

Defined in:  [generated/calibration/CalibrationDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L34)

Defined in:  [generated/calibration/CalibrationDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L30) [generated/calibration/CalibrationDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L34)

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

Defined in:  [generated/calibration/CalibrationDisplay.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L97)

### from\_estimator()

Plot calibration curve using a binary classifier and data.

A calibration curve, also known as a reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

#### Signature

```ts
from_estimator(opts: CalibrationDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibrationDisplayFromEstimatorOptions`](../interfaces/CalibrationDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L120)

### from\_predictions()

Plot calibration curve using true labels and predicted probabilities.

Calibration curve, also known as reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

#### Signature

```ts
from_predictions(opts: CalibrationDisplayFromPredictionsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibrationDisplayFromPredictionsOptions`](../interfaces/CalibrationDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L170)

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

Defined in:  [generated/calibration/CalibrationDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L43)

### plot()

Plot visualization.

Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.7.1)").

#### Signature

```ts
plot(opts: CalibrationDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibrationDisplayPlotOptions`](../interfaces/CalibrationDisplayPlotOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibrationDisplay.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/calibration/CalibrationDisplay.ts#L217)
