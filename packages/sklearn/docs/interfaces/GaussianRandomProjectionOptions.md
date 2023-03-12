[sklearn](../readme.md) / [Exports](../modules.md) / GaussianRandomProjectionOptions

# Interface: GaussianRandomProjectionOptions

## Table of contents

### Properties

- [compute\_inverse\_components](GaussianRandomProjectionOptions.md#compute_inverse_components)
- [eps](GaussianRandomProjectionOptions.md#eps)
- [n\_components](GaussianRandomProjectionOptions.md#n_components)
- [random\_state](GaussianRandomProjectionOptions.md#random_state)

## Properties

### compute\_inverse\_components

• `Optional` **compute\_inverse\_components**: `boolean`

Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that computing the pseudo-inverse does not scale well to large matrices.

**`Default Value`**

`false`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L482)

___

### eps

• `Optional` **eps**: `number`

Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when `n\_components` is set to ‘auto’. The value should be strictly positive.

Smaller values lead to better embedding and higher number of dimensions (n\_components) in the target projection space.

**`Default Value`**

`0.1`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L475)

___

### n\_components

• `Optional` **n\_components**: `number` \| ``"auto"``

Dimensionality of the target projection space.

n\_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter.

It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset.

**`Default Value`**

`'auto'`

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L466)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/random_projection/GaussianRandomProjection.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L487)