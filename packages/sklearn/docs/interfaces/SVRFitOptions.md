[sklearn](../readme.md) / [Exports](../modules.md) / SVRFitOptions

# Interface: SVRFitOptions

## Table of contents

### Properties

- [X](SVRFitOptions.md#x)
- [sample\_weight](SVRFitOptions.md#sample_weight)
- [y](SVRFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n\_samples, n\_samples).

#### Defined in

[generated/svm/SVR.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L512)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.

#### Defined in

[generated/svm/SVR.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L522)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values (class labels in classification, real numbers in regression).

#### Defined in

[generated/svm/SVR.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L517)
