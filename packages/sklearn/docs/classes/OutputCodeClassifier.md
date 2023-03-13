# OutputCodeClassifier

(Error-Correcting) Output-Code multiclass strategy.

Output-code based strategies consist in representing each class with a binary code (an array of 0s and 1s). At fitting time, one binary classifier per bit in the code book is fitted. At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen. The main advantage of these strategies is that the number of classifiers used can be controlled by the user, either for compressing the model (0 < code\_size < 1) or for making the model more robust to errors (code\_size > 1). See the documentation for more details.

Read more in the [User Guide](../multiclass.html#ecoc).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OutputCodeClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new OutputCodeClassifier(opts?: OutputCodeClassifierOptions): OutputCodeClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OutputCodeClassifierOptions`](../interfaces/OutputCodeClassifierOptions.md) |

### Returns

[`OutputCodeClassifier`](OutputCodeClassifier.md)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L19)

## Accessors

### classes\_

Array containing labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L231)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L231)

### code\_book\_

Binary array containing the code of each class.

#### Signature

```ts
code_book_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L258)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L258)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L204)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L204)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L312)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L312)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L285)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L285)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L30)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L34)

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L30) [generated/multiclass/OutputCodeClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L34)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L89)

### fit()

Fit underlying estimators.

#### Signature

```ts
fit(opts: OutputCodeClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OutputCodeClassifierFitOptions`](../interfaces/OutputCodeClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L106)

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

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L43)

### predict()

Predict multi-class targets using underlying estimators.

#### Signature

```ts
predict(opts: OutputCodeClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OutputCodeClassifierPredictOptions`](../interfaces/OutputCodeClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L138)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: OutputCodeClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OutputCodeClassifierScoreOptions`](../interfaces/OutputCodeClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multiclass/OutputCodeClassifier.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L170)
