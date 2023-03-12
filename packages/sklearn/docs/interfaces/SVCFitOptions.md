[sklearn](../readme.md) / [Exports](../modules.md) / SVCFitOptions

# Interface: SVCFitOptions

## Table of contents

### Properties

- [X](SVCFitOptions.md#x)
- [sample\_weight](SVCFitOptions.md#sample_weight)
- [y](SVCFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n\_samples, n\_samples).

#### Defined in

[generated/svm/SVC.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L663)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.

#### Defined in

[generated/svm/SVC.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L673)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values (class labels in classification, real numbers in regression).

#### Defined in

[generated/svm/SVC.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L668)
