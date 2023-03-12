[sklearn](../readme.md) / [Exports](../modules.md) / CategoricalNBOptions

# Interface: CategoricalNBOptions

## Table of contents

### Properties

- [alpha](CategoricalNBOptions.md#alpha)
- [class\_prior](CategoricalNBOptions.md#class_prior)
- [fit\_prior](CategoricalNBOptions.md#fit_prior)
- [force\_alpha](CategoricalNBOptions.md#force_alpha)
- [min\_categories](CategoricalNBOptions.md#min_categories)

## Properties

### alpha

• `Optional` **alpha**: `number`

Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

**`Default Value`**

`1`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L543)

___

### class\_prior

• `Optional` **class\_prior**: [`ArrayLike`](../modules.md#arraylike)

Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L562)

___

### fit\_prior

• `Optional` **fit\_prior**: `boolean`

Whether to learn class prior probabilities or not. If false, a uniform prior will be used.

**`Default Value`**

`true`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L557)

___

### force\_alpha

• `Optional` **force\_alpha**: `boolean`

If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

**`Default Value`**

`false`

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L550)

___

### min\_categories

• `Optional` **min\_categories**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Minimum number of categories per feature.

#### Defined in

[generated/naive_bayes/CategoricalNB.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/naive_bayes/CategoricalNB.ts#L567)
