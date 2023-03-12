[sklearn](../readme.md) / [Exports](../modules.md) / BernoulliRBM

# Class: BernoulliRBM

Bernoulli Restricted Boltzmann Machine (RBM).

A Restricted Boltzmann Machine with binary visible units and binary hidden units. Parameters are estimated using Stochastic Maximum Likelihood (SML), also known as Persistent Contrastive Divergence (PCD) \[2\].

The time complexity of this implementation is `O(d \*\* 2)` assuming d ~ n\_features ~ n\_components.

Read more in the [User Guide](../neural_networks_unsupervised.html#rbm).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM.html

## Table of contents

### Constructors

- [constructor](BernoulliRBM.md#constructor)

### Properties

- [\_isDisposed](BernoulliRBM.md#_isdisposed)
- [\_isInitialized](BernoulliRBM.md#_isinitialized)
- [\_py](BernoulliRBM.md#_py)
- [id](BernoulliRBM.md#id)
- [opts](BernoulliRBM.md#opts)

### Accessors

- [components\_](BernoulliRBM.md#components_)
- [feature\_names\_in\_](BernoulliRBM.md#feature_names_in_)
- [h\_samples\_](BernoulliRBM.md#h_samples_)
- [intercept\_hidden\_](BernoulliRBM.md#intercept_hidden_)
- [intercept\_visible\_](BernoulliRBM.md#intercept_visible_)
- [n\_features\_in\_](BernoulliRBM.md#n_features_in_)
- [py](BernoulliRBM.md#py)

### Methods

- [dispose](BernoulliRBM.md#dispose)
- [fit](BernoulliRBM.md#fit)
- [fit\_transform](BernoulliRBM.md#fit_transform)
- [get\_feature\_names\_out](BernoulliRBM.md#get_feature_names_out)
- [gibbs](BernoulliRBM.md#gibbs)
- [init](BernoulliRBM.md#init)
- [partial\_fit](BernoulliRBM.md#partial_fit)
- [score\_samples](BernoulliRBM.md#score_samples)
- [set\_output](BernoulliRBM.md#set_output)
- [transform](BernoulliRBM.md#transform)

## Constructors

### constructor

• **new BernoulliRBM**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BernoulliRBMOptions`](../interfaces/BernoulliRBMOptions.md) |

#### Defined in

[generated/neural_network/BernoulliRBM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L21)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Weight matrix, where `n\_features` is the number of visible units and `n\_components` is the number of hidden units.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L401)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L476)

___

### h\_samples\_

• `get` **h_samples_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Hidden Activation sampled from the model distribution, where `batch\_size` is the number of examples per minibatch and `n\_components` is the number of hidden units.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L426)

___

### intercept\_hidden\_

• `get` **intercept_hidden_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Biases of the hidden units.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L351)

___

### intercept\_visible\_

• `get` **intercept_visible_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Biases of the visible units.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L376)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L451)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to the data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMFitOptions`](../interfaces/BernoulliRBMFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L108)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMFitTransformOptions`](../interfaces/BernoulliRBMFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L140)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMGetFeatureNamesOutOptions`](../interfaces/BernoulliRBMGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L174)

___

### gibbs

▸ **gibbs**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Perform one Gibbs sampling step.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMGibbsOptions`](../interfaces/BernoulliRBMGibbsOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L207)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L45)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Fit the model to the partial segment of the data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMPartialFitOptions`](../interfaces/BernoulliRBMPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L235)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the pseudo-likelihood of X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMScoreSamplesOptions`](../interfaces/BernoulliRBMScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L265)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMSetOutputOptions`](../interfaces/BernoulliRBMSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L295)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute the hidden layer activation probabilities, P(h=1|v=X).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMTransformOptions`](../interfaces/BernoulliRBMTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neural_network/BernoulliRBM.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L323)
