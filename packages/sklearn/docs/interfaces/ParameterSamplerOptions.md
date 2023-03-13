# ParameterSamplerOptions

## Properties

### n\_iter?

> `number`

Number of parameter settings that are produced.

Defined in:  [generated/model\_selection/ParameterSampler.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L138)

### param\_distributions?

> `any`

Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.

Defined in:  [generated/model\_selection/ParameterSampler.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L133)

### random\_state?

> `number`

Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/model\_selection/ParameterSampler.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L143)
