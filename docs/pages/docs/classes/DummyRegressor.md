# DummyRegressor

Regressor that makes predictions using simple rules.

This regressor is useful as a simple baseline to compare with other (real) regressors. Do not use it for real problems.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new DummyRegressor(opts?: DummyRegressorOptions): DummyRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `DummyRegressorOptions` |

### Returns

[`DummyRegressor`](DummyRegressor.md)

Defined in:  [generated/dummy/DummyRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/dummy/DummyRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/dummy/DummyRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/dummy/DummyRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L19)

## Accessors

### constant\_

Mean or median or quantile of the training targets or constant value given by the user.

#### Signature

```ts
constant_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/dummy/DummyRegressor.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L198)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/dummy/DummyRegressor.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L223)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/dummy/DummyRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L30)

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

Defined in: [generated/dummy/DummyRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L34)

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

Defined in:  [generated/dummy/DummyRegressor.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L85)

### fit()

Fit the random regressor.

#### Signature

```ts
fit(opts: DummyRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyRegressorFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/dummy/DummyRegressor.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L102)

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

Defined in:  [generated/dummy/DummyRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L43)

### predict()

Perform classification on test vectors X.

#### Signature

```ts
predict(opts: DummyRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyRegressorPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/dummy/DummyRegressor.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L134)

### score()

Return the coefficient of determination R^2 of the prediction.

The coefficient R^2 is defined as `(1 \- u/v)`, where `u` is the residual sum of squares `((y\_true \- y\_pred) \*\* 2).sum()` and `v` is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a R^2 score of 0.0.

#### Signature

```ts
score(opts: DummyRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyRegressorScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/dummy/DummyRegressor.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L166)
