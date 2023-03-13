# AdaBoostRegressor

An AdaBoost regressor.

An AdaBoost \[1\] regressor is a meta-estimator that begins by fitting a regressor on the original dataset and then fits additional copies of the regressor on the same dataset but where the weights of instances are adjusted according to the error of the current prediction. As such, subsequent regressors focus more on difficult cases.

This class implements the algorithm known as AdaBoost.R2 \[2\].

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new AdaBoostRegressor(opts?: AdaBoostRegressorOptions): AdaBoostRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `AdaBoostRegressorOptions` |

### Returns

[`AdaBoostRegressor`](AdaBoostRegressor.md)

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L21)

## Accessors

### estimator\_

The base estimator from which the ensemble is grown.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostRegressor.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L290)

### estimator\_errors\_

Regression error for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_errors_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostRegressor.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L371)

### estimator\_weights\_

Weights for each estimator in the boosted ensemble.

#### Signature

```ts
estimator_weights_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostRegressor.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L344)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/AdaBoostRegressor.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L317)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/AdaBoostRegressor.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L425)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/AdaBoostRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L398)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L32)

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

Defined in: [generated/ensemble/AdaBoostRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L36)

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L93)

### fit()

Build a boosted classifier/regressor from the training set (X, y).

#### Signature

```ts
fit(opts: AdaBoostRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdaBoostRegressorFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L110)

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

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L45)

### predict()

Predict regression value for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

#### Signature

```ts
predict(opts: AdaBoostRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdaBoostRegressorPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L146)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: AdaBoostRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdaBoostRegressorScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L178)

### staged\_predict()

Return staged predictions for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.

#### Signature

```ts
staged_predict(opts: AdaBoostRegressorStagedPredictOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdaBoostRegressorStagedPredictOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L216)

### staged\_score()

Return staged scores for X, y.

This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.

#### Signature

```ts
staged_score(opts: AdaBoostRegressorStagedScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AdaBoostRegressorStagedScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/AdaBoostRegressor.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L252)
