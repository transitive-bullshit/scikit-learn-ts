# RidgeClassifierCV

Ridge classifier with built-in cross-validation.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

By default, it performs Leave-One-Out Cross-Validation. Currently, only the n\_features > n\_samples case is handled efficiently.

Read more in the [User Guide](../linear_model.html#ridge-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifierCV.html)

## Constructors

## constructor()

### Signature

```ts
new RidgeClassifierCV(opts?: RidgeClassifierCVOptions): RidgeClassifierCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RidgeClassifierCVOptions`](../interfaces/RidgeClassifierCVOptions.md) |

### Returns

[`RidgeClassifierCV`](RidgeClassifierCV.md)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L23)

### id

> `string`

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L20)

### opts

> `any`

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L21)

## Accessors

### alpha\_

Estimated regularization parameter.

#### Signature

```ts
alpha_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L330)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L330)

### best\_score\_

Score of base estimator with best alpha.

#### Signature

```ts
best_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L357)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L357)

### coef\_

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L276)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L276)

### cv\_values\_

Cross-validation values for each alpha (only if `store\_cv\_values=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.

#### Signature

```ts
cv_values_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L247)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L247)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L411)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L411)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L303)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L303)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L384)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L384)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L32)

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

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L36)

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L32) [generated/linear\_model/RidgeClassifierCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L36)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: RidgeClassifierCVDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVDecisionFunctionOptions`](../interfaces/RidgeClassifierCVDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L112)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L93)

### fit()

Fit Ridge classifier with cv.

#### Signature

```ts
fit(opts: RidgeClassifierCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVFitOptions`](../interfaces/RidgeClassifierCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L147)

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

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L45)

### predict()

Predict class labels for samples in `X`.

#### Signature

```ts
predict(opts: RidgeClassifierCVPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVPredictOptions`](../interfaces/RidgeClassifierCVPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L181)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: RidgeClassifierCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVScoreOptions`](../interfaces/RidgeClassifierCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeClassifierCV.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L213)
