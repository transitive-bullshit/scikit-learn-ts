[sklearn](../readme.md) / [Exports](../modules.md) / SkewedChi2SamplerOptions

# Interface: SkewedChi2SamplerOptions

## Table of contents

### Properties

- [n\_components](SkewedChi2SamplerOptions.md#n_components)
- [random\_state](SkewedChi2SamplerOptions.md#random_state)
- [skewedness](SkewedChi2SamplerOptions.md#skewedness)

## Properties

### n\_components

• `Optional` **n\_components**: `number`

Number of Monte Carlo samples per original feature. Equals the dimensionality of the computed feature space.

**`Default Value`**

`100`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L392)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo-random number generator to control the generation of the random weights and random offset when fitting the training data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L397)

___

### skewedness

• `Optional` **skewedness**: `number`

“skewedness” parameter of the kernel. Needs to be cross-validated.

**`Default Value`**

`1`

#### Defined in

[generated/kernel_approximation/SkewedChi2Sampler.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L385)
