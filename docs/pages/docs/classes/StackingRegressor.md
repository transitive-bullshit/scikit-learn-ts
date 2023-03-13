# StackingRegressor

Stack of estimators with a final regressor.

Stacked generalization consists in stacking the output of individual estimator and use a regressor to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new StackingRegressor(opts?: StackingRegressorOptions): StackingRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `StackingRegressorOptions` |

### Returns

[`StackingRegressor`](StackingRegressor.md)

Defined in:  [generated/ensemble/StackingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/StackingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/StackingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/StackingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/StackingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/StackingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L21)

## Accessors

### estimators\_

The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingRegressor.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L345)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/StackingRegressor.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L399)

### final\_estimator\_

The regressor to stacked the base estimators fitted.

#### Signature

```ts
final_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingRegressor.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L426)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingRegressor.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L372)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/StackingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L32)

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

Defined in: [generated/ensemble/StackingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L36)

### stack\_method\_

The method used by each base estimator.

#### Signature

```ts
stack_method_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/StackingRegressor.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L453)

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

Defined in:  [generated/ensemble/StackingRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L91)

### fit()

Fit the estimators.

#### Signature

```ts
fit(opts: StackingRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StackingRegressorFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L108)

### fit\_transform()

Fit the estimators and return the predictions for X for each estimator.

#### Signature

```ts
fit_transform(opts: StackingRegressorFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StackingRegressorFitTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/StackingRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L142)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: StackingRegressorGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StackingRegressorGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L180)

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

Defined in:  [generated/ensemble/StackingRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L45)

### predict()

Predict target for X.

#### Signature

```ts
predict(opts: StackingRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StackingRegressorPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/StackingRegressor.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L215)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: StackingRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StackingRegressorScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/StackingRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L249)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: StackingRegressorSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StackingRegressorSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingRegressor.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L285)

### transform()

Return the predictions for X for each estimator.

#### Signature

```ts
transform(opts: StackingRegressorTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StackingRegressorTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/StackingRegressor.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/StackingRegressor.ts#L315)
