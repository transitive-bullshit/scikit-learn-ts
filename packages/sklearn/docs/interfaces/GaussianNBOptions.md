[sklearn](../readme.md) / [Exports](../modules.md) / GaussianNBOptions

# Interface: GaussianNBOptions

## Table of contents

### Properties

- [priors](GaussianNBOptions.md#priors)
- [var\_smoothing](GaussianNBOptions.md#var_smoothing)

## Properties

### priors

• `Optional` **priors**: [`ArrayLike`](../modules.md#arraylike)

Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.

#### Defined in

[generated/naive_bayes/GaussianNB.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L524)

___

### var\_smoothing

• `Optional` **var\_smoothing**: `number`

Portion of the largest variance of all features that is added to variances for calculation stability.

**`Default Value`**

`1e-9`

#### Defined in

[generated/naive_bayes/GaussianNB.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L531)
