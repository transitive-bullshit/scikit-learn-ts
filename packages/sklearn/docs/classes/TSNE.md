[sklearn](../readme.md) / [Exports](../modules.md) / TSNE

# Class: TSNE

T-distributed Stochastic Neighbor Embedding.

t-SNE \[1\] is a tool to visualize high-dimensional data. It converts similarities between data points to joint probabilities and tries to minimize the Kullback-Leibler divergence between the joint probabilities of the low-dimensional embedding and the high-dimensional data. t-SNE has a cost function that is not convex, i.e. with different initializations we can get different results.

It is highly recommended to use another dimensionality reduction method (e.g. PCA for dense data or TruncatedSVD for sparse data) to reduce the number of dimensions to a reasonable amount (e.g. 50) if the number of features is very high. This will suppress some noise and speed up the computation of pairwise distances between samples. For more tips see Laurens van der Maaten’s FAQ \[2\].

Read more in the [User Guide](../manifold.html#t-sne).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html

## Table of contents

### Constructors

- [constructor](TSNE.md#constructor)

### Properties

- [\_isDisposed](TSNE.md#_isdisposed)
- [\_isInitialized](TSNE.md#_isinitialized)
- [\_py](TSNE.md#_py)
- [id](TSNE.md#id)
- [opts](TSNE.md#opts)

### Accessors

- [embedding\_](TSNE.md#embedding_)
- [feature\_names\_in\_](TSNE.md#feature_names_in_)
- [kl\_divergence\_](TSNE.md#kl_divergence_)
- [learning\_rate\_](TSNE.md#learning_rate_)
- [n\_features\_in\_](TSNE.md#n_features_in_)
- [n\_iter\_](TSNE.md#n_iter_)
- [py](TSNE.md#py)

### Methods

- [dispose](TSNE.md#dispose)
- [fit](TSNE.md#fit)
- [fit\_transform](TSNE.md#fit_transform)
- [init](TSNE.md#init)

## Constructors

### constructor

• **new TSNE**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TSNEOptions`](../interfaces/TSNEOptions.md) |

#### Defined in

[generated/manifold/TSNE.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/TSNE.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/TSNE.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/TSNE.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/manifold/TSNE.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/manifold/TSNE.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L21)

## Accessors

### embedding\_

• `get` **embedding_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Stores the embedding vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/TSNE.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L176)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/manifold/TSNE.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L245)

___

### kl\_divergence\_

• `get` **kl_divergence_**(): `Promise`<`number`\>

Kullback-Leibler divergence after optimization.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/TSNE.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L199)

___

### learning\_rate\_

• `get` **learning_rate_**(): `Promise`<`number`\>

Effective learning rate.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/TSNE.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L270)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/TSNE.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L222)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/manifold/TSNE.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L293)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/manifold/TSNE.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/manifold/TSNE.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/manifold/TSNE.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L104)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`[]\>

Fit X into an embedded space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TSNEFitOptions`](../interfaces/TSNEFitOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/manifold/TSNE.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L121)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Fit X into an embedded space and return that transformed output.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TSNEFitTransformOptions`](../interfaces/TSNEFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/manifold/TSNE.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L148)

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

[generated/manifold/TSNE.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/TSNE.ts#L45)
