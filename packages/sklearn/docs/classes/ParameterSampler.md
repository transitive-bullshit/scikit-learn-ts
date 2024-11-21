[**sklearn**](../README.md) • **Docs**

***

Generator on parameters sampled from given distributions.

Non-deterministic iterable over random candidate combinations for hyper- parameter search. If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

Read more in the [User Guide](../grid_search.html#grid-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterSampler.html)

## Constructors

### new ParameterSampler()

> **new ParameterSampler**(`opts`?): [`ParameterSampler`](ParameterSampler.md)

#### Parameters

• **opts?**

• **opts.n\_iter?**: `number`

Number of parameter settings that are produced.

• **opts.param\_distributions?**: `any`

Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.

• **opts.random\_state?**: `number`

Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Returns

[`ParameterSampler`](ParameterSampler.md)

#### Defined in

[generated/model\_selection/ParameterSampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/ParameterSampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/ParameterSampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/ParameterSampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/ParameterSampler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/ParameterSampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L19)

## Accessors

### params

#### Get Signature

> **get** **params**(): `Promise`\<`any`\>

*Yields** dictionaries mapping each estimator parameter to as sampled value.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/ParameterSampler.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L116)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/model\_selection/ParameterSampler.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L45)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/ParameterSampler.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L99)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/ParameterSampler.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/ParameterSampler.ts#L58)
