[sklearn](../readme.md) / [Exports](../modules.md) / MultinomialNBOptions

# Interface: MultinomialNBOptions

## Table of contents

### Properties

- [alpha](MultinomialNBOptions.md#alpha)
- [class\_prior](MultinomialNBOptions.md#class_prior)
- [fit\_prior](MultinomialNBOptions.md#fit_prior)
- [force\_alpha](MultinomialNBOptions.md#force_alpha)

## Properties

### alpha

• `Optional` **alpha**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

**`Default Value`**

`1`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L518)

___

### class\_prior

• `Optional` **class\_prior**: [`ArrayLike`](../modules.md#arraylike)

Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L537)

___

### fit\_prior

• `Optional` **fit\_prior**: `boolean`

Whether to learn class prior probabilities or not. If false, a uniform prior will be used.

**`Default Value`**

`true`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L532)

___

### force\_alpha

• `Optional` **force\_alpha**: `boolean`

If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

**`Default Value`**

`false`

#### Defined in

[generated/naive_bayes/MultinomialNB.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L525)
