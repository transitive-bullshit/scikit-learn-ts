# MultiOutputClassifier

Multi target classification.

This strategy consists of fitting one classifier per target. This is a simple strategy for extending classifiers that do not natively support multi-target classification.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new MultiOutputClassifier(opts?: MultiOutputClassifierOptions): MultiOutputClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MultiOutputClassifierOptions` |

### Returns

[`MultiOutputClassifier`](MultiOutputClassifier.md)

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L17)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L281)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L308)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L362)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying `estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L335)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L28)

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

Defined in: [generated/multioutput/MultiOutputClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L32)

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

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L85)

### fit()

Fit the model to data matrix X and targets Y.

#### Signature

```ts
fit(opts: MultiOutputClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiOutputClassifierFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L102)

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

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L41)

### partial\_fit()

Incrementally fit a separate model for each class output.

#### Signature

```ts
partial_fit(opts: MultiOutputClassifierPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiOutputClassifierPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L138)

### predict()

Predict multi-output variable using model for each target variable.

#### Signature

```ts
predict(opts: MultiOutputClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiOutputClassifierPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L180)

### predict\_proba()

Return prediction probabilities for each class of each output.

This method will raise a `ValueError` if any of the estimators do not have `predict\_proba`.

#### Signature

```ts
predict_proba(opts: MultiOutputClassifierPredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiOutputClassifierPredictProbaOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L214)

### score()

Return the mean accuracy on the given test data and labels.

#### Signature

```ts
score(opts: MultiOutputClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiOutputClassifierScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L249)
