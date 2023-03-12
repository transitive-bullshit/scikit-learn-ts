[sklearn](../readme.md) / [Exports](../modules.md) / NuSVRFitOptions

# Interface: NuSVRFitOptions

## Table of contents

### Properties

- [X](NuSVRFitOptions.md#x)
- [sample\_weight](NuSVRFitOptions.md#sample_weight)
- [y](NuSVRFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n\_samples, n\_samples).

#### Defined in

[generated/svm/NuSVR.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L520)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.

#### Defined in

[generated/svm/NuSVR.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L530)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values (class labels in classification, real numbers in regression).

#### Defined in

[generated/svm/NuSVR.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L525)
