[sklearn](../readme.md) / [Exports](../modules.md) / QuadraticDiscriminantAnalysisOptions

# Interface: QuadraticDiscriminantAnalysisOptions

## Table of contents

### Properties

- [priors](QuadraticDiscriminantAnalysisOptions.md#priors)
- [reg\_param](QuadraticDiscriminantAnalysisOptions.md#reg_param)
- [store\_covariance](QuadraticDiscriminantAnalysisOptions.md#store_covariance)
- [tol](QuadraticDiscriminantAnalysisOptions.md#tol)

## Properties

### priors

• `Optional` **priors**: [`ArrayLike`](../modules.md#arraylike)

Class priors. By default, the class proportions are inferred from the training data.

#### Defined in

[generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts#L548)

___

### reg\_param

• `Optional` **reg\_param**: `number`

Regularizes the per-class covariance estimates by transforming S2 as `S2 \= (1 \- reg\_param) \* S2 + reg\_param \* np.eye(n\_features)`, where S2 corresponds to the `scaling\_` attribute of a given class.

**`Default Value`**

`0`

#### Defined in

[generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts#L555)

___

### store\_covariance

• `Optional` **store\_covariance**: `boolean`

If `true`, the class covariance matrices are explicitly computed and stored in the `self.covariance\_` attribute.

**`Default Value`**

`false`

#### Defined in

[generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts#L562)

___

### tol

• `Optional` **tol**: `number`

Absolute threshold for a singular value to be considered significant, used to estimate the rank of `Xk` where `Xk` is the centered matrix of samples in class k. This parameter does not affect the predictions. It only controls a warning that is raised when features are considered to be colinear.

**`Default Value`**

`0.0001`

#### Defined in

[generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/QuadraticDiscriminantAnalysis.ts#L569)