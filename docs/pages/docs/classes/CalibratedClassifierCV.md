# Class: CalibratedClassifierCV

Probability calibration with isotonic regression or logistic regression.

This class uses cross-validation to both estimate the parameters of a classifier and subsequently calibrate a classifier. With default `ensemble=True`, for each cv split it fits a copy of the base estimator to the training subset, and calibrates it using the testing subset. For prediction, predicted probabilities are averaged across these individual calibrated classifiers. When `ensemble=False`, cross-validation is used to obtain unbiased predictions, via [`cross_val_predict`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. For prediction, the base estimator, trained using all the data, is used. This is the prediction method implemented when `probabilities=True` for [`SVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html#sklearn.svm.SVC "sklearn.svm.SVC") and [`NuSVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC "sklearn.svm.NuSVC") estimators (see [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#scores-probabilities) for details).

Already fitted classifiers can be calibrated via the parameter `cv="prefit"`. In this case, no cross-validation is used and all provided data is used for calibration. The user has to take care manually that data for model fitting and calibration are disjoint.

The calibration is based on the [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) method of the `estimator` if it exists, else on [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration). In order to learn more on the CalibratedClassifierCV class, see the following calibration examples: [Probability calibration of classifiers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration.html#sphx-glr-auto-examples-calibration-plot-calibration-py), [Probability Calibration curves](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_curve.html#sphx-glr-auto-examples-calibration-plot-calibration-curve-py), and [Probability Calibration for 3-class classification](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_multiclass.html#sphx-glr-auto-examples-calibration-plot-calibration-multiclass-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html)

## Constructors

### new CalibratedClassifierCV()

> **new CalibratedClassifierCV**(`opts`?): [`CalibratedClassifierCV`](CalibratedClassifierCV.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.cv`? | `number` \| `"prefit"` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.ensemble`? | `boolean` | Determines how the calibrator is fitted when `cv` is not `'prefit'`. Ignored if `cv='prefit'`. If `true`, the `estimator` is fitted using training data, and calibrated using testing data, for each `cv` fold. The final estimator is an ensemble of `n_cv` fitted classifier and calibrator pairs, where `n_cv` is the number of cross-validation folds. The output is the average predicted probabilities of all pairs. If `false`, `cv` is used to compute unbiased predictions, via [`cross_val_predict`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. At prediction time, the classifier used is the `estimator` trained on all the data. Note that this method is also internally implemented in [`sklearn.svm`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.svm.html#module-sklearn.svm "sklearn.svm") estimators with the `probabilities=True` parameter. |
| `opts.estimator`? | `any` | The classifier whose output need to be calibrated to provide more accurate `predict_proba` outputs. The default classifier is a [`LinearSVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). |
| `opts.method`? | `"sigmoid"` \| `"isotonic"` | The method to use for calibration. Can be ‘sigmoid’ which corresponds to Platt’s method (i.e. a logistic regression model) or ‘isotonic’ which is a non-parametric approach. It is not advised to use isotonic calibration with too few calibration samples `(<<1000)` since it tends to overfit. |
| `opts.n_jobs`? | `number` | Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. Base estimator clones are fitted in parallel across cross-validation iterations. Therefore parallelism happens only when `cv != "prefit"`. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |

**Returns** [`CalibratedClassifierCV`](CalibratedClassifierCV.md)

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/calibration/CalibratedClassifierCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/calibration/CalibratedClassifierCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/calibration/CalibratedClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L25) |
| `id` | `string` | `undefined` | [generated/calibration/CalibratedClassifierCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L22) |
| `opts` | `any` | `undefined` | [generated/calibration/CalibratedClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L23) |

## Accessors

### calibrated\_classifiers\_

**Get Signature**

> **get** **calibrated\_classifiers\_**(): `Promise`\<`number`\>

The list of classifier and calibrator pairs.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L514)

***

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The class labels.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L433)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L487)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L460)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L71)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L127)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the calibrated model.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Parameters to pass to the `fit` method of the underlying classifier. |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. |
| `opts.X`? | `ArrayLike`[] | Training data. |
| `opts.y`? | `ArrayLike` | Target values. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L144)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L195)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L84)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict the target of new samples.

The predicted class is the class that has the highest probability, and can thus be different from the prediction of the uncalibrated classifier.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The samples, as accepted by `estimator.predict`. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L233)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Calibrated probabilities of classification.

This function returns calibrated probabilities of classification according to each class on an array of test vectors X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The samples, as accepted by `estimator.predict_proba`. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L271)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. |
| `opts.y`? | `ArrayLike` | True labels for `X`. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L309)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L357)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/calibration/CalibratedClassifierCV.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L397)
