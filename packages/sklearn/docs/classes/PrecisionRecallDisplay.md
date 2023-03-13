# PrecisionRecallDisplay

Precision Recall visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a `PredictionRecallDisplay`. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new PrecisionRecallDisplay(opts?: PrecisionRecallDisplayOptions): PrecisionRecallDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PrecisionRecallDisplayOptions`](../interfaces/PrecisionRecallDisplayOptions.md) |

### Returns

[`PrecisionRecallDisplay`](PrecisionRecallDisplay.md)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L19)

## Accessors

### ax\_

Axes with precision recall curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L265)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L265)

### figure\_

Figure containing the curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L292)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L292)

### line\_

Precision recall curve.

#### Signature

```ts
line_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L238)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L238)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L30)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L34)

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L30) [generated/metrics/PrecisionRecallDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L34)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L95)

### from\_estimator()

Plot precision-recall curve given an estimator and some data.

#### Signature

```ts
from_estimator(opts: PrecisionRecallDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PrecisionRecallDisplayFromEstimatorOptions`](../interfaces/PrecisionRecallDisplayFromEstimatorOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L112)

### from\_predictions()

Plot precision-recall curve given binary class predictions.

#### Signature

```ts
from_predictions(opts: PrecisionRecallDisplayFromPredictionsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PrecisionRecallDisplayFromPredictionsOptions`](../interfaces/PrecisionRecallDisplayFromPredictionsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L159)

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

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L43)

### plot()

Plot visualization.

Extra keyword arguments will be passed to matplotlib’s `plot`.

#### Signature

```ts
plot(opts: PrecisionRecallDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PrecisionRecallDisplayPlotOptions`](../interfaces/PrecisionRecallDisplayPlotOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/PrecisionRecallDisplay.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/PrecisionRecallDisplay.ts#L206)
