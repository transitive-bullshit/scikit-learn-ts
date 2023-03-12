# MultiTaskElasticNet

Multi-task ElasticNet model trained with L1/L2 mixed-norm as regularizer.

The optimization objective for MultiTaskElasticNet is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNet.html)

## Constructors

## constructor()

### Signature

```ts
new MultiTaskElasticNet(opts?: MultiTaskElasticNetOptions): MultiTaskElasticNet;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiTaskElasticNetOptions`](../interfaces/MultiTaskElasticNetOptions.md) |

### Returns

[`MultiTaskElasticNet`](MultiTaskElasticNet.md)

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L17)

## Accessors

### coef\_

Parameter vector (W in the cost function formula). If a 1D y is passed in at fit (non multi-task usage), `coef\_` is then a 1D array. Note that `coef\_` stores the transpose of `W`, `W.T`.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L289)

### dual\_gap\_

The dual gaps at the end of the optimization.

#### Signature

```ts
dual_gap_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L343)

### eps\_

The tolerance scaled scaled by the variance of the target `y`.

#### Signature

```ts
eps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L370)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L424)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L262)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L397)

### n\_iter\_

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L316)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L28)

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

Defined in: [generated/linear\_model/MultiTaskElasticNet.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L32)

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

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L93)

### fit()

Fit MultiTaskElasticNet model with coordinate descent.

#### Signature

```ts
fit(opts: MultiTaskElasticNetFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetFitOptions`](../interfaces/MultiTaskElasticNetFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L110)

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

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L41)

### path()

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Signature

```ts
path(opts: MultiTaskElasticNetPathOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetPathOptions`](../interfaces/MultiTaskElasticNetPathOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L146)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: MultiTaskElasticNetPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetPredictOptions`](../interfaces/MultiTaskElasticNetPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L196)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: MultiTaskElasticNetScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetScoreOptions`](../interfaces/MultiTaskElasticNetScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L228)
