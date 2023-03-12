# MultiOutputRegressor

Multi target regression.

This strategy consists of fitting one regressor per target. This is a simple strategy for extending regressors that do not natively support multi-target regression.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new MultiOutputRegressor(opts?: MultiOutputRegressorOptions): MultiOutputRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiOutputRegressorOptions`](../interfaces/MultiOutputRegressorOptions.md) |

### Returns

[`MultiOutputRegressor`](MultiOutputRegressor.md)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L19)

### id

> `string`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L16)

### opts

> `any`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L17)

## Accessors

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L242)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L242)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L296)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L296)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L269)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L269)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L28)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L32)

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L28) [generated/multioutput/MultiOutputRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L32)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L85)

### fit()

Fit the model to data, separately for each output variable.

#### Signature

```ts
fit(opts: MultiOutputRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorFitOptions`](../interfaces/MultiOutputRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L102)

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

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L41)

### partial\_fit()

Incrementally fit the model to data, for each output variable.

#### Signature

```ts
partial_fit(opts: MultiOutputRegressorPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorPartialFitOptions`](../interfaces/MultiOutputRegressorPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L138)

### predict()

Predict multi-output variable using model for each target variable.

#### Signature

```ts
predict(opts: MultiOutputRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorPredictOptions`](../interfaces/MultiOutputRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L174)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: MultiOutputRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorScoreOptions`](../interfaces/MultiOutputRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/MultiOutputRegressor.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L208)
