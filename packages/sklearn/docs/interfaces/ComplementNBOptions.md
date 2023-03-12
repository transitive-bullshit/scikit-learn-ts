[sklearn](../readme.md) / [Exports](../modules.md) / ComplementNBOptions

# Interface: ComplementNBOptions

## Table of contents

### Properties

- [alpha](ComplementNBOptions.md#alpha)
- [class\_prior](ComplementNBOptions.md#class_prior)
- [fit\_prior](ComplementNBOptions.md#fit_prior)
- [force\_alpha](ComplementNBOptions.md#force_alpha)
- [norm](ComplementNBOptions.md#norm)

## Properties

### alpha

• `Optional` **alpha**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

**`Default Value`**

`1`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L541)

___

### class\_prior

• `Optional` **class\_prior**: [`ArrayLike`](../modules.md#arraylike)

Prior probabilities of the classes. Not used.

#### Defined in

[generated/naive_bayes/ComplementNB.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L560)

___

### fit\_prior

• `Optional` **fit\_prior**: `boolean`

Only used in edge case with a single class in the training set.

**`Default Value`**

`true`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L555)

___

### force\_alpha

• `Optional` **force\_alpha**: `boolean`

If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

**`Default Value`**

`false`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L548)

___

### norm

• `Optional` **norm**: `boolean`

Whether or not a second normalization of the weights is performed. The default behavior mirrors the implementations found in Mahout and Weka, which do not follow the full algorithm described in Table 9 of the paper.

**`Default Value`**

`false`

#### Defined in

[generated/naive_bayes/ComplementNB.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/ComplementNB.ts#L567)
