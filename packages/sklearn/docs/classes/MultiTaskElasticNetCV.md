# MultiTaskElasticNetCV

Multi-task L1/L2 ElasticNet with built-in cross-validation.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

The optimization objective for MultiTaskElasticNet is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNetCV.html)

## Constructors

## constructor()

### Signature

```ts
new MultiTaskElasticNetCV(opts?: MultiTaskElasticNetCVOptions): MultiTaskElasticNetCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiTaskElasticNetCVOptions`](../interfaces/MultiTaskElasticNetCVOptions.md) |

### Returns

[`MultiTaskElasticNetCV`](MultiTaskElasticNetCV.md)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L19)

## Accessors

### alpha\_

The amount of penalization chosen by cross validation.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L324)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L324)

### alphas\_

The grid of alphas used for fitting, for each l1\_ratio.

#### Signature

```ts
alphas_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L378)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L378)

### coef\_

Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L297)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L297)

### dual\_gap\_

The dual gap at the end of the optimization for the optimal alpha.

#### Signature

```ts
dual_gap_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L459)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L459)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L513)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L513)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L270)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L270)

### l1\_ratio\_

Best l1\_ratio obtained by cross-validation.

#### Signature

```ts
l1_ratio_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L405)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L405)

### mse\_path\_

Mean square error for the test set on each fold, varying alpha.

#### Signature

```ts
mse_path_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L351)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L351)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L486)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L486)

### n\_iter\_

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L432)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L432)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L30)

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

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L34)

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L30) [generated/linear\_model/MultiTaskElasticNetCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L34)

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

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L99)

### fit()

Fit MultiTaskElasticNet model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

#### Signature

```ts
fit(opts: MultiTaskElasticNetCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVFitOptions`](../interfaces/MultiTaskElasticNetCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L118)

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

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L43)

### path()

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Signature

```ts
path(opts: MultiTaskElasticNetCVPathOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVPathOptions`](../interfaces/MultiTaskElasticNetCVPathOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L154)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: MultiTaskElasticNetCVPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVPredictOptions`](../interfaces/MultiTaskElasticNetCVPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L204)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: MultiTaskElasticNetCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVScoreOptions`](../interfaces/MultiTaskElasticNetCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/MultiTaskElasticNetCV.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L236)
