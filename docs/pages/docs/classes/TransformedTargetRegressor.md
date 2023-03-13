# TransformedTargetRegressor

Meta-estimator to regress on a transformed target.

Useful for applying a non-linear transformation to the target `y` in regression problems. This transformation can be given as a Transformer such as the [`QuantileTransformer`](sklearn.preprocessing.QuantileTransformer.html#sklearn.preprocessing.QuantileTransformer "sklearn.preprocessing.QuantileTransformer") or as a function and its inverse such as `np.log` and `np.exp`.

The computation during [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.compose.TransformedTargetRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new TransformedTargetRegressor(opts?: TransformedTargetRegressorOptions): TransformedTargetRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `TransformedTargetRegressorOptions` |

### Returns

[`TransformedTargetRegressor`](TransformedTargetRegressor.md)

Defined in:  [generated/compose/TransformedTargetRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/compose/TransformedTargetRegressor.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L274)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L30)

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

Defined in: [generated/compose/TransformedTargetRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L34)

### regressor\_

Fitted regressor.

#### Signature

```ts
regressor_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/compose/TransformedTargetRegressor.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L220)

### transformer\_

Transformer used in [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") and [`predict`](#sklearn.compose.TransformedTargetRegressor.predict "sklearn.compose.TransformedTargetRegressor.predict").

#### Signature

```ts
transformer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/compose/TransformedTargetRegressor.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L247)

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

Defined in:  [generated/compose/TransformedTargetRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L91)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: TransformedTargetRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TransformedTargetRegressorFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L108)

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

Defined in:  [generated/compose/TransformedTargetRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L43)

### predict()

Predict using the base regressor, applying inverse.

The regressor is used to predict and the `inverse\_func` or `inverse\_transform` is applied before returning the prediction.

#### Signature

```ts
predict(opts: TransformedTargetRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TransformedTargetRegressorPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L146)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: TransformedTargetRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TransformedTargetRegressorScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/compose/TransformedTargetRegressor.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L184)
