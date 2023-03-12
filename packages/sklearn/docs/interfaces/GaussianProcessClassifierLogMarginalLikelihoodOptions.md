[sklearn](../readme.md) / [Exports](../modules.md) / GaussianProcessClassifierLogMarginalLikelihoodOptions

# Interface: GaussianProcessClassifierLogMarginalLikelihoodOptions

## Table of contents

### Properties

- [clone\_kernel](GaussianProcessClassifierLogMarginalLikelihoodOptions.md#clone_kernel)
- [eval\_gradient](GaussianProcessClassifierLogMarginalLikelihoodOptions.md#eval_gradient)
- [theta](GaussianProcessClassifierLogMarginalLikelihoodOptions.md#theta)

## Properties

### clone\_kernel

• `Optional` **clone\_kernel**: `boolean`

If `true`, the kernel attribute is copied. If `false`, the kernel attribute is modified, but may result in a performance improvement.

**`Default Value`**

`true`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L547)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

If `true`, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. Note that gradient computation is not supported for non-binary classification. If `true`, theta must not be `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L540)

___

### theta

• `Optional` **theta**: [`ArrayLike`](../modules.md#arraylike)

Kernel hyperparameters for which the log-marginal likelihood is evaluated. In the case of multi-class classification, theta may be the hyperparameters of the compound kernel or of an individual kernel. In the latter case, all individual kernel get assigned the same theta values. If `undefined`, the precomputed log\_marginal\_likelihood of `self.kernel\_.theta` is returned.

#### Defined in

[generated/gaussian_process/GaussianProcessClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L533)
