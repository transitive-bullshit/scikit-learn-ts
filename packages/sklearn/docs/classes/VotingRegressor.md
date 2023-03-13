# VotingRegressor

Prediction voting regressor for unfitted estimators.

A voting regressor is an ensemble meta-estimator that fits several base regressors, each on the whole dataset. Then it averages the individual predictions to form a final prediction.

Read more in the [User Guide](../ensemble.html#voting-regressor).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new VotingRegressor(opts?: VotingRegressorOptions): VotingRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`VotingRegressorOptions`](../interfaces/VotingRegressorOptions.md) |

### Returns

[`VotingRegressor`](VotingRegressor.md)

Defined in:  [generated/ensemble/VotingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/VotingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/ensemble/VotingRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/ensemble/VotingRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L19)

## Accessors

### estimators\_

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L327)

Defined in:  [generated/ensemble/VotingRegressor.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L327)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingRegressor.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L377)

Defined in:  [generated/ensemble/VotingRegressor.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L377)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L352)

Defined in:  [generated/ensemble/VotingRegressor.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L352)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/VotingRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L30)

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

Defined in:  [generated/ensemble/VotingRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L34)

Defined in:  [generated/ensemble/VotingRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L30) [generated/ensemble/VotingRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L34)

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

Defined in:  [generated/ensemble/VotingRegressor.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L87)

### fit()

Fit the estimators.

#### Signature

```ts
fit(opts: VotingRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorFitOptions`](../interfaces/VotingRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L104)

### fit\_transform()

Return class labels or probabilities for each estimator.

Return predictions for X for each estimator.

#### Signature

```ts
fit_transform(opts: VotingRegressorFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorFitTransformOptions`](../interfaces/VotingRegressorFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/VotingRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L138)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: VotingRegressorGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorGetFeatureNamesOutOptions`](../interfaces/VotingRegressorGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L172)

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

Defined in:  [generated/ensemble/VotingRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L43)

### predict()

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Signature

```ts
predict(opts: VotingRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorPredictOptions`](../interfaces/VotingRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingRegressor.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L207)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: VotingRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorScoreOptions`](../interfaces/VotingRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L237)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: VotingRegressorSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorSetOutputOptions`](../interfaces/VotingRegressorSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingRegressor.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L271)

### transform()

Return predictions for X for each estimator.

#### Signature

```ts
transform(opts: VotingRegressorTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingRegressorTransformOptions`](../interfaces/VotingRegressorTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/VotingRegressor.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L299)
