[sklearn](../readme.md) / [Exports](../modules.md) / ParameterSamplerOptions

# Interface: ParameterSamplerOptions

## Table of contents

### Properties

- [n\_iter](ParameterSamplerOptions.md#n_iter)
- [param\_distributions](ParameterSamplerOptions.md#param_distributions)
- [random\_state](ParameterSamplerOptions.md#random_state)

## Properties

### n\_iter

• `Optional` **n\_iter**: `number`

Number of parameter settings that are produced.

#### Defined in

[generated/model_selection/ParameterSampler.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L138)

___

### param\_distributions

• `Optional` **param\_distributions**: `any`

Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.

#### Defined in

[generated/model_selection/ParameterSampler.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L133)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/ParameterSampler.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L143)
