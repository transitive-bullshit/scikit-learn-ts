# DecisionBoundaryDisplay

Decisions boundary visualization.

It is recommended to use [`from\_estimator`](#sklearn.inspection.DecisionBoundaryDisplay.from_estimator "sklearn.inspection.DecisionBoundaryDisplay.from_estimator") to create a [`DecisionBoundaryDisplay`](#sklearn.inspection.DecisionBoundaryDisplay "sklearn.inspection.DecisionBoundaryDisplay"). All parameters are stored as attributes.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.DecisionBoundaryDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new DecisionBoundaryDisplay(opts?: DecisionBoundaryDisplayOptions): DecisionBoundaryDisplay;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `DecisionBoundaryDisplayOptions` |

### Returns

[`DecisionBoundaryDisplay`](DecisionBoundaryDisplay.md)

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L19)

## Accessors

### ax\_

Axes with confusion matrix.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/DecisionBoundaryDisplay.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L218)

### figure\_

Figure containing the confusion matrix.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/DecisionBoundaryDisplay.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L245)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L30)

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

Defined in: [generated/inspection/DecisionBoundaryDisplay.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L34)

### surface\_

If `plot\_method` is ‘contour’ or ‘contourf’, `surface\_` is a [`QuadContourSet`](https://matplotlib.org/stable/api/contour_api.html#matplotlib.contour.QuadContourSet "(in Matplotlib v3.7.1)"). If `plot\_method` is ‘pcolormesh’, `surface\_` is a [`QuadMesh`](https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.QuadMesh "(in Matplotlib v3.7.1)").

#### Signature

```ts
surface_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/inspection/DecisionBoundaryDisplay.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L191)

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

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L93)

### from\_estimator()

Plot decision boundary given an estimator.

Read more in the User Guide.

#### Signature

```ts
from_estimator(opts: DecisionBoundaryDisplayFromEstimatorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DecisionBoundaryDisplayFromEstimatorOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L112)

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

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L43)

### plot()

Plot visualization.

#### Signature

```ts
plot(opts: DecisionBoundaryDisplayPlotOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DecisionBoundaryDisplayPlotOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/inspection/DecisionBoundaryDisplay.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L157)
