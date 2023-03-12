# RocCurveDisplay

ROC Curve visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.RocCurveDisplay.from_estimator "sklearn.metrics.RocCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.RocCurveDisplay.from_predictions "sklearn.metrics.RocCurveDisplay.from_predictions") to create a [`RocCurveDisplay`](#sklearn.metrics.RocCurveDisplay "sklearn.metrics.RocCurveDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.RocCurveDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new RocCurveDisplay(opts?: RocCurveDisplayOptions): RocCurveDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RocCurveDisplayOptions`](../interfaces/RocCurveDisplayOptions.md) |

### Returns

[`RocCurveDisplay`](RocCurveDisplay.md)

Defined in:  [generated/metrics/RocCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/RocCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/RocCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/RocCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/RocCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/RocCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L19)

## Accessors

### ax\_

Axes with ROC Curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L258)

Defined in:  [generated/metrics/RocCurveDisplay.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L258)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L281)

Defined in:  [generated/metrics/RocCurveDisplay.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L281)

### line\_

ROC Curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L235)

Defined in:  [generated/metrics/RocCurveDisplay.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L235)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/RocCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L30)

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

Defined in:  [generated/metrics/RocCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L34)

Defined in:  [generated/metrics/RocCurveDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L30) [generated/metrics/RocCurveDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L34)

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

Defined in:  [generated/metrics/RocCurveDisplay.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L89)

### from\_estimator()

Create a ROC Curve display from an estimator.

#### Signature

```ts
from_estimator(opts: RocCurveDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RocCurveDisplayFromEstimatorOptions`](../interfaces/RocCurveDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L106)

### from\_predictions()

Plot ROC curve given the true and predicted values.

Read more in the [User Guide](../../visualizations.html#visualizations).

#### Signature

```ts
from_predictions(opts: RocCurveDisplayFromPredictionsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RocCurveDisplayFromPredictionsOptions`](../interfaces/RocCurveDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L156)

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

Defined in:  [generated/metrics/RocCurveDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L43)

### plot()

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Signature

```ts
plot(opts: RocCurveDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RocCurveDisplayPlotOptions`](../interfaces/RocCurveDisplayPlotOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/RocCurveDisplay.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/metrics/RocCurveDisplay.ts#L205)
