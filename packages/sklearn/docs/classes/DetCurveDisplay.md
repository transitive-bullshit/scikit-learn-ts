# DetCurveDisplay

DET curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new DetCurveDisplay(opts?: DetCurveDisplayOptions): DetCurveDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DetCurveDisplayOptions`](../interfaces/DetCurveDisplayOptions.md) |

### Returns

[`DetCurveDisplay`](DetCurveDisplay.md)

Defined in:  [generated/metrics/DetCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/DetCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/DetCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/DetCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/DetCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/DetCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L19)

## Accessors

### ax\_

Axes with DET Curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L250)

Defined in:  [generated/metrics/DetCurveDisplay.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L250)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L273)

Defined in:  [generated/metrics/DetCurveDisplay.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L273)

### line\_

DET Curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L227)

Defined in:  [generated/metrics/DetCurveDisplay.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L227)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/DetCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L30)

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

Defined in:  [generated/metrics/DetCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L34)

Defined in:  [generated/metrics/DetCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L30) [generated/metrics/DetCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L34)

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

Defined in:  [generated/metrics/DetCurveDisplay.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L87)

### from\_estimator()

Plot DET curve given an estimator and data.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Signature

```ts
from_estimator(opts: DetCurveDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DetCurveDisplayFromEstimatorOptions`](../interfaces/DetCurveDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L106)

### from\_predictions()

Plot the DET curve given the true and predicted labels.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Signature

```ts
from_predictions(opts: DetCurveDisplayFromPredictionsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DetCurveDisplayFromPredictionsOptions`](../interfaces/DetCurveDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L154)

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

Defined in:  [generated/metrics/DetCurveDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L43)

### plot()

Plot visualization.

#### Signature

```ts
plot(opts: DetCurveDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DetCurveDisplayPlotOptions`](../interfaces/DetCurveDisplayPlotOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DetCurveDisplay.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/metrics/DetCurveDisplay.ts#L197)
