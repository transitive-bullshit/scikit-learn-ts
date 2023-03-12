[sklearn](../readme.md) / [Exports](../modules.md) / RBFSamplerOptions

# Interface: RBFSamplerOptions

## Table of contents

### Properties

- [gamma](RBFSamplerOptions.md#gamma)
- [n\_components](RBFSamplerOptions.md#n_components)
- [random\_state](RBFSamplerOptions.md#random_state)

## Properties

### gamma

• `Optional` **gamma**: `number` \| ``"scale"``

Parameter of RBF kernel: exp(-gamma \* x^2). If `gamma='scale'` is passed then it uses 1 / (n\_features \* X.var()) as value of gamma.

**`Default Value`**

`1`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L363)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of Monte Carlo samples per original feature. Equals the dimensionality of the computed feature space.

**`Default Value`**

`100`

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L370)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo-random number generator to control the generation of the random weights and random offset when fitting the training data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/kernel_approximation/RBFSampler.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/RBFSampler.ts#L375)
