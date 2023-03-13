# CalibratedClassifierCV

Probability calibration with isotonic regression or logistic regression.

This class uses cross-validation to both estimate the parameters of a classifier and subsequently calibrate a classifier. With default `ensemble=True`, for each cv split it fits a copy of the base estimator to the training subset, and calibrates it using the testing subset. For prediction, predicted probabilities are averaged across these individual calibrated classifiers. When `ensemble=False`, cross-validation is used to obtain unbiased predictions, via [`cross\_val\_predict`](sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. For prediction, the base estimator, trained using all the data, is used. This is the method implemented when `probabilities=True` for [`sklearn.svm`](../classes.html#module-sklearn.svm "sklearn.svm") estimators.

Already fitted classifiers can be calibrated via the parameter `cv="prefit"`. In this case, no cross-validation is used and all provided data is used for calibration. The user has to take care manually that data for model fitting and calibration are disjoint.

The calibration is based on the [decision\_function](../../glossary.html#term-decision_function) method of the `estimator` if it exists, else on [predict\_proba](../../glossary.html#term-predict_proba).

Read more in the [User Guide](../calibration.html#calibration).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html)

## Constructors

## constructor()

### Signature

```ts
new CalibratedClassifierCV(opts?: CalibratedClassifierCVOptions): CalibratedClassifierCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CalibratedClassifierCVOptions`](../interfaces/CalibratedClassifierCVOptions.md) |

### Returns

[`CalibratedClassifierCV`](CalibratedClassifierCV.md)

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L25)

### id

> `string`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L22)

### opts

> `any`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L23)

## Accessors

### calibrated\_classifiers\_

The list of classifier and calibrator pairs.

#### Signature

```ts
calibrated_classifiers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L336)

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L336)

### classes\_

The class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L255)

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L255)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L309)

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L309)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L282)

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L282)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L34)

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

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L38)

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L34) [generated/calibration/CalibratedClassifierCV.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L38)

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

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L95)

### fit()

Fit the calibrated model.

#### Signature

```ts
fit(opts: CalibratedClassifierCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVFitOptions`](../interfaces/CalibratedClassifierCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L112)

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

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L47)

### predict()

Predict the target of new samples.

The predicted class is the class that has the highest probability, and can thus be different from the prediction of the uncalibrated classifier.

#### Signature

```ts
predict(opts: CalibratedClassifierCVPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVPredictOptions`](../interfaces/CalibratedClassifierCVPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L150)

### predict\_proba()

Calibrated probabilities of classification.

This function returns calibrated probabilities of classification according to each class on an array of test vectors X.

#### Signature

```ts
predict_proba(opts: CalibratedClassifierCVPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVPredictProbaOptions`](../interfaces/CalibratedClassifierCVPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L184)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: CalibratedClassifierCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVScoreOptions`](../interfaces/CalibratedClassifierCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L221)
