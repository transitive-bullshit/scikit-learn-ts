# CalibratedClassifierCV

Probability calibration with isotonic regression or logistic regression.

This class uses cross-validation to both estimate the parameters of a classifier and subsequently calibrate a classifier. With default `ensemble=True`, for each cv split it fits a copy of the base estimator to the training subset, and calibrates it using the testing subset. For prediction, predicted probabilities are averaged across these individual calibrated classifiers. When `ensemble=False`, cross-validation is used to obtain unbiased predictions, via [`cross\_val\_predict`](sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. For prediction, the base estimator, trained using all the data, is used. This is the method implemented when `probabilities=True` for `sklearn.svm` estimators.

Already fitted classifiers can be calibrated via the parameter `cv="prefit"`. In this case, no cross-validation is used and all provided data is used for calibration. The user has to take care manually that data for model fitting and calibration are disjoint.

The calibration is based on the decision\_function method of the `estimator` if it exists, else on predict\_proba.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html)

## Constructors

## constructor()

### Signature

```ts
new CalibratedClassifierCV(opts?: object): CalibratedClassifierCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | This parameter is deprecated. Use `estimator` instead. |
| `opts.cv?` | `number` \| `"prefit"` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.ensemble?` | `boolean` | Determines how the calibrator is fitted when `cv` is not `'prefit'`. Ignored if `cv='prefit'`.  If `true`, the `estimator` is fitted using training data, and calibrated using testing data, for each `cv` fold. The final estimator is an ensemble of `n\_cv` fitted classifier and calibrator pairs, where `n\_cv` is the number of cross-validation folds. The output is the average predicted probabilities of all pairs.  If `false`, `cv` is used to compute unbiased predictions, via [`cross\_val\_predict`](sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. At prediction time, the classifier used is the `estimator` trained on all the data. Note that this method is also internally implemented in `sklearn.svm` estimators with the `probabilities=True` parameter.  `Default Value`  `true` |
| `opts.estimator?` | `any` | The classifier whose output need to be calibrated to provide more accurate `predict\_proba` outputs. The default classifier is a [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). |
| `opts.method?` | `"sigmoid"` \| `"isotonic"` | The method to use for calibration. Can be ‘sigmoid’ which corresponds to Platt’s method (i.e. a logistic regression model) or ‘isotonic’ which is a non-parametric approach. It is not advised to use isotonic calibration with too few calibration samples `(<<1000)` since it tends to overfit.  `Default Value`  `'sigmoid'` |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors.  Base estimator clones are fitted in parallel across cross-validation iterations. Therefore parallelism happens only when `cv != "prefit"`.  See Glossary for more details. |

### Returns

[`CalibratedClassifierCV`](CalibratedClassifierCV.md)

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L29)

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

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L137)

### fit()

Fit the calibrated model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data. |
| `opts.fit_params?` | `any` | Parameters to pass to the `fit` method of the underlying classifier. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L154)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L212)

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

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L89)

### predict()

Predict the target of new samples.

The predicted class is the class that has the highest probability, and can thus be different from the prediction of the uncalibrated classifier.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The samples, as accepted by `estimator.predict`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L252)

### predict\_proba()

Calibrated probabilities of classification.

This function returns calibrated probabilities of classification according to each class on an array of test vectors X.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The samples, as accepted by `estimator.predict\_proba`. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L291)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L331)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L384)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L426)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L25)

### id

> `string`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L22)

### opts

> `any`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L23)

## Accessors

### calibrated\_classifiers\_

The list of classifier and calibrator pairs.

#### Signature

```ts
calibrated_classifiers_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/calibration/CalibratedClassifierCV.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L545)

### classes\_

The class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/calibration/CalibratedClassifierCV.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L464)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/calibration/CalibratedClassifierCV.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L518)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/calibration/CalibratedClassifierCV.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L491)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/calibration/CalibratedClassifierCV.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L76)

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

Defined in: [generated/calibration/CalibratedClassifierCV.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L80)
