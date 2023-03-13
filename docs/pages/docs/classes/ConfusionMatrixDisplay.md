# ConfusionMatrixDisplay

Confusion Matrix visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.ConfusionMatrixDisplay.from_estimator "sklearn.metrics.ConfusionMatrixDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.ConfusionMatrixDisplay.from_predictions "sklearn.metrics.ConfusionMatrixDisplay.from_predictions") to create a [`ConfusionMatrixDisplay`](#sklearn.metrics.ConfusionMatrixDisplay "sklearn.metrics.ConfusionMatrixDisplay"). All parameters are stored as attributes.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.ConfusionMatrixDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new ConfusionMatrixDisplay(opts?: ConfusionMatrixDisplayOptions): ConfusionMatrixDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ConfusionMatrixDisplayOptions` |

### Returns

[`ConfusionMatrixDisplay`](ConfusionMatrixDisplay.md)

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L19)

## Accessors

### ax\_

Axes with confusion matrix.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/ConfusionMatrixDisplay.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L317)

### figure\_

Figure containing the confusion matrix.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/ConfusionMatrixDisplay.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L344)

### im\_

Image representing the confusion matrix.

#### Signature

```ts
im_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/ConfusionMatrixDisplay.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L263)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L30)

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

Defined in: [generated/metrics/ConfusionMatrixDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L34)

### text\_

Array of matplotlib axes. `undefined` if `include\_values` is false.

#### Signature

```ts
text_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/metrics/ConfusionMatrixDisplay.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L290)

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

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L92)

### from\_estimator()

Plot Confusion Matrix given an estimator and some data.

Read more in the User Guide.

#### Signature

```ts
from_estimator(opts: ConfusionMatrixDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ConfusionMatrixDisplayFromEstimatorOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L111)

### from\_predictions()

Plot Confusion Matrix given true and predicted labels.

Read more in the User Guide.

#### Signature

```ts
from_predictions(opts: ConfusionMatrixDisplayFromPredictionsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ConfusionMatrixDisplayFromPredictionsOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L170)

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

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L43)

### plot()

Plot visualization.

#### Signature

```ts
plot(opts: ConfusionMatrixDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ConfusionMatrixDisplayPlotOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/ConfusionMatrixDisplay.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L227)
