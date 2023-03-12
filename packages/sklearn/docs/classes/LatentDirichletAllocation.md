[sklearn](../readme.md) / [Exports](../modules.md) / LatentDirichletAllocation

# Class: LatentDirichletAllocation

Latent Dirichlet Allocation with online variational Bayes algorithm.

The implementation is based on [\[1\]](#re25e5648fc37-1) and [\[2\]](#re25e5648fc37-2).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html

## Table of contents

### Constructors

- [constructor](LatentDirichletAllocation.md#constructor)

### Properties

- [\_isDisposed](LatentDirichletAllocation.md#_isdisposed)
- [\_isInitialized](LatentDirichletAllocation.md#_isinitialized)
- [\_py](LatentDirichletAllocation.md#_py)
- [id](LatentDirichletAllocation.md#id)
- [opts](LatentDirichletAllocation.md#opts)

### Accessors

- [bound\_](LatentDirichletAllocation.md#bound_)
- [components\_](LatentDirichletAllocation.md#components_)
- [doc\_topic\_prior\_](LatentDirichletAllocation.md#doc_topic_prior_)
- [exp\_dirichlet\_component\_](LatentDirichletAllocation.md#exp_dirichlet_component_)
- [feature\_names\_in\_](LatentDirichletAllocation.md#feature_names_in_)
- [n\_batch\_iter\_](LatentDirichletAllocation.md#n_batch_iter_)
- [n\_features\_in\_](LatentDirichletAllocation.md#n_features_in_)
- [n\_iter\_](LatentDirichletAllocation.md#n_iter_)
- [py](LatentDirichletAllocation.md#py)
- [random\_state\_](LatentDirichletAllocation.md#random_state_)
- [topic\_word\_prior\_](LatentDirichletAllocation.md#topic_word_prior_)

### Methods

- [dispose](LatentDirichletAllocation.md#dispose)
- [fit](LatentDirichletAllocation.md#fit)
- [fit\_transform](LatentDirichletAllocation.md#fit_transform)
- [get\_feature\_names\_out](LatentDirichletAllocation.md#get_feature_names_out)
- [init](LatentDirichletAllocation.md#init)
- [partial\_fit](LatentDirichletAllocation.md#partial_fit)
- [perplexity](LatentDirichletAllocation.md#perplexity)
- [score](LatentDirichletAllocation.md#score)
- [set\_output](LatentDirichletAllocation.md#set_output)
- [transform](LatentDirichletAllocation.md#transform)

## Constructors

### constructor

• **new LatentDirichletAllocation**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LatentDirichletAllocationOptions`](../interfaces/LatentDirichletAllocationOptions.md) |

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L17)

## Accessors

### bound\_

• `get` **bound_**(): `Promise`<`number`\>

Final perplexity score on training set.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L574)

___

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Variational parameters for topic word distribution. Since the complete conditional for topic word distribution is a Dirichlet, `components\_\[i, j\]` can be viewed as pseudocount that represents the number of times word `j` was assigned to topic `i`. It can also be viewed as distribution over the words for each topic after normalization: `model.components\_ / model.components\_.sum(axis=1)\[:, np.newaxis\]`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L412)

___

### doc\_topic\_prior\_

• `get` **doc_topic_prior_**(): `Promise`<`number`\>

Prior of document topic distribution `theta`. If the value is `undefined`, it is `1 / n\_components`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L601)

___

### exp\_dirichlet\_component\_

• `get` **exp_dirichlet_component_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Exponential value of expectation of log topic word distribution. In the literature, this is `exp(E\[log(beta)\])`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L439)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L520)

___

### n\_batch\_iter\_

• `get` **n_batch_iter_**(): `Promise`<`number`\>

Number of iterations of the EM step.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L466)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L493)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of passes over the dataset.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L547)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L32)

___

### random\_state\_

• `get` **random_state_**(): `Promise`<`any`\>

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L628)

___

### topic\_word\_prior\_

• `get` **topic_word_prior_**(): `Promise`<`number`\>

Prior of topic word distribution `beta`. If the value is `undefined`, it is `1 / n\_components`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L655)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L107)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Learn model for the data X with variational Bayes method.

When `learning\_method` is ‘online’, use mini-batch update. Otherwise, use batch update.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationFitOptions`](../interfaces/LatentDirichletAllocationFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L126)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationFitTransformOptions`](../interfaces/LatentDirichletAllocationFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L158)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationGetFeatureNamesOutOptions`](../interfaces/LatentDirichletAllocationGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L199)

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

[generated/decomposition/LatentDirichletAllocation.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Online VB with Mini-Batch update.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationPartialFitOptions`](../interfaces/LatentDirichletAllocationPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L234)

___

### perplexity

▸ **perplexity**(`opts`): `Promise`<`number`\>

Calculate approximate perplexity for data X.

Perplexity is defined as exp(-1. \* log-likelihood per word)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationPerplexityOptions`](../interfaces/LatentDirichletAllocationPerplexityOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L271)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Calculate approximate log-likelihood as score.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationScoreOptions`](../interfaces/LatentDirichletAllocationScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L308)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationSetOutputOptions`](../interfaces/LatentDirichletAllocationSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L342)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform data X according to the fitted model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationTransformOptions`](../interfaces/LatentDirichletAllocationTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L377)
