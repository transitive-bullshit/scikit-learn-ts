# RidgeClassifier

Classifier using Ridge regression.

This classifier first converts the target values into `{-1, 1}` and then treats the problem as a regression task (multi-output regression in the multiclass case).

Read more in the [User Guide](../linear_model.html#ridge-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new RidgeClassifier(opts?: RidgeClassifierOptions): RidgeClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RidgeClassifierOptions`](../interfaces/RidgeClassifierOptions.md) |

### Returns

[`RidgeClassifier`](RidgeClassifier.md)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L19)

## Accessors

### coef\_

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L238)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L238)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L336)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L336)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L261)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L261)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L311)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L311)

### n\_iter\_

Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.

#### Signature

```ts
n_iter_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L286)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L286)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L30)

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

Defined in:  [generated/linear\_model/RidgeClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L34)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L30) [generated/linear\_model/RidgeClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L34)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: RidgeClassifierDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierDecisionFunctionOptions`](../interfaces/RidgeClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L110)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L91)

### fit()

Fit Ridge classifier model.

#### Signature

```ts
fit(opts: RidgeClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierFitOptions`](../interfaces/RidgeClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L142)

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

Defined in:  [generated/linear\_model/RidgeClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L43)

### predict()

Predict class labels for samples in `X`.

#### Signature

```ts
predict(opts: RidgeClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierPredictOptions`](../interfaces/RidgeClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L174)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: RidgeClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierScoreOptions`](../interfaces/RidgeClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L204)
