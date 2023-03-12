# TweedieRegressor

Generalized Linear Model with a Tweedie distribution.

This estimator can be used to model different GLMs depending on the `power` parameter, which determines the underlying distribution.

Read more in the [User Guide](../linear_model.html#generalized-linear-models).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TweedieRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new TweedieRegressor(opts?: TweedieRegressorOptions): TweedieRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TweedieRegressorOptions`](../interfaces/TweedieRegressorOptions.md) |

### Returns

[`TweedieRegressor`](TweedieRegressor.md)

Defined in:  [generated/linear\_model/TweedieRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L19)

## Accessors

### coef\_

Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.

#### Signature

```ts
coef_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/linear\_model/TweedieRegressor.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L212)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/TweedieRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L320)

### intercept\_

Intercept (a.k.a. bias) added to linear predictor.

#### Signature

```ts
intercept_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/TweedieRegressor.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L239)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/TweedieRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L293)

### n\_iter\_

Actual number of iterations used in the solver.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/TweedieRegressor.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L266)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/TweedieRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L30)

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

Defined in: [generated/linear\_model/TweedieRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L34)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L93)

### fit()

Fit a Generalized Linear Model.

#### Signature

```ts
fit(opts: TweedieRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TweedieRegressorFitOptions`](../interfaces/TweedieRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L110)

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

Defined in:  [generated/linear\_model/TweedieRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L43)

### predict()

Predict using GLM with feature matrix X.

#### Signature

```ts
predict(opts: TweedieRegressorPredictOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TweedieRegressorPredictOptions`](../interfaces/TweedieRegressorPredictOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L144)

### score()

Compute D^2, the percentage of deviance explained.

D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](../model_evaluation.html#regression-metrics).

D^2 is defined as \\(D^2 = 1-\\frac{D(y\_{true},y\_{pred})}{D\_{null}}\\), \\(D\_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y\_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample\_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).

#### Signature

```ts
score(opts: TweedieRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TweedieRegressorScoreOptions`](../interfaces/TweedieRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/TweedieRegressor.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L178)
