[sklearn](../readme.md) / [Exports](../modules.md) / CalibratedClassifierCVOptions

# Interface: CalibratedClassifierCVOptions

## Table of contents

### Properties

- [base\_estimator](CalibratedClassifierCVOptions.md#base_estimator)
- [cv](CalibratedClassifierCVOptions.md#cv)
- [ensemble](CalibratedClassifierCVOptions.md#ensemble)
- [estimator](CalibratedClassifierCVOptions.md#estimator)
- [method](CalibratedClassifierCVOptions.md#method)
- [n\_jobs](CalibratedClassifierCVOptions.md#n_jobs)

## Properties

### base\_estimator

• `Optional` **base\_estimator**: `any`

This parameter is deprecated. Use `estimator` instead.

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L402)

___

### cv

• `Optional` **cv**: `number` \| ``"prefit"``

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L377)

___

### ensemble

• `Optional` **ensemble**: `boolean`

Determines how the calibrator is fitted when `cv` is not `'prefit'`. Ignored if `cv='prefit'`.

If `true`, the `estimator` is fitted using training data, and calibrated using testing data, for each `cv` fold. The final estimator is an ensemble of `n\_cv` fitted classifier and calibrator pairs, where `n\_cv` is the number of cross-validation folds. The output is the average predicted probabilities of all pairs.

If `false`, `cv` is used to compute unbiased predictions, via [`cross\_val\_predict`](sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. At prediction time, the classifier used is the `estimator` trained on all the data. Note that this method is also internally implemented in [`sklearn.svm`](../classes.html#module-sklearn.svm "sklearn.svm") estimators with the `probabilities=True` parameter.

**`Default Value`**

`true`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L397)

___

### estimator

• `Optional` **estimator**: `any`

The classifier whose output need to be calibrated to provide more accurate `predict\_proba` outputs. The default classifier is a [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L365)

___

### method

• `Optional` **method**: ``"sigmoid"`` \| ``"isotonic"``

The method to use for calibration. Can be ‘sigmoid’ which corresponds to Platt’s method (i.e. a logistic regression model) or ‘isotonic’ which is a non-parametric approach. It is not advised to use isotonic calibration with too few calibration samples `(<<1000)` since it tends to overfit.

**`Default Value`**

`'sigmoid'`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L372)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors.

Base estimator clones are fitted in parallel across cross-validation iterations. Therefore parallelism happens only when `cv != "prefit"`.

See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L386)
