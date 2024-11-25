# Class: MiniBatchNMF

Mini-Batch Non-Negative Matrix Factorization (NMF).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html)

## Constructors

### new MiniBatchNMF()

> **new MiniBatchNMF**(`opts`?): [`MiniBatchNMF`](MiniBatchNMF.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.alpha_H`? | `number` \| `"same"` | Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha_W`. |
| `opts.alpha_W`? | `number` | Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`. |
| `opts.batch_size`? | `number` | Number of samples in each mini-batch. Large batch sizes give better long-term convergence at the cost of a slower start. |
| `opts.beta_loss`? | `number` \| `"frobenius"` \| `"kullback-leibler"` \| `"itakura-saito"` | Beta divergence to be minimized, measuring the distance between `X` and the dot product `WH`. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for `beta_loss <= 0` (or ‘itakura-saito’), the input matrix `X` cannot contain zeros. |
| `opts.forget_factor`? | `number` | Amount of rescaling of past information. Its value could be 1 with finite datasets. Choosing values < 1 is recommended with online learning as more recent batches will weight more than past batches. |
| `opts.fresh_restarts`? | `boolean` | Whether to completely solve for W at each step. Doing fresh restarts will likely lead to a better solution for a same number of iterations but it is much slower. |
| `opts.fresh_restarts_max_iter`? | `number` | Maximum number of iterations when solving for W at each step. Only used when doing fresh restarts. These iterations may be stopped early based on a small change of W controlled by `tol`. |
| `opts.init`? | `"random"` \| `"nndsvd"` \| `"nndsvda"` \| `"nndsvdar"` \| `"custom"` | Method used to initialize the procedure. Valid options: |
| `opts.l1_ratio`? | `number` | The regularization mixing parameter, with 0 <= l1_ratio <= 1. For l1_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1_ratio = 1 it is an elementwise L1 penalty. For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2. |
| `opts.max_iter`? | `number` | Maximum number of iterations over the complete dataset before timing out. |
| `opts.max_no_improvement`? | `number` | Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. To disable convergence detection based on cost function, set `max_no_improvement` to `undefined`. |
| `opts.n_components`? | `number` \| `"auto"` | Number of components, if `n_components` is not set all features are kept. If `n_components='auto'`, the number of components is automatically inferred from W or H shapes. |
| `opts.random_state`? | `number` | Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.tol`? | `number` | Control early stopping based on the norm of the differences in `H` between 2 steps. To disable early stopping based on changes in `H`, set `tol` to 0.0. |
| `opts.transform_max_iter`? | `number` | Maximum number of iterations when solving for W at transform time. If `undefined`, it defaults to `max_iter`. |
| `opts.verbose`? | `boolean` | Whether to be verbose. |

#### Returns

[`MiniBatchNMF`](MiniBatchNMF.md)

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L21)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/decomposition/MiniBatchNMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L19) |
| `_isInitialized` | `boolean` | `false` | [generated/decomposition/MiniBatchNMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L18) |
| `_py` | `PythonBridge` | `undefined` | [generated/decomposition/MiniBatchNMF.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L17) |
| `id` | `string` | `undefined` | [generated/decomposition/MiniBatchNMF.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L14) |
| `opts` | `any` | `undefined` | [generated/decomposition/MiniBatchNMF.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L15) |

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Factorization matrix, sometimes called ‘dictionary’.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L518)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L664)

***

### n\_components\_

#### Get Signature

> **get** **n\_components\_**(): `Promise`\<`number`\>

The number of components. It is same as the `n_components` parameter if it was given. Otherwise, it will be same as the number of features.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L543)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L639)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Actual number of started iterations over the whole dataset.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L593)

***

### n\_steps\_

#### Get Signature

> **get** **n\_steps\_**(): `Promise`\<`number`\>

Number of mini-batches processed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L616)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L130)

***

### reconstruction\_err\_

#### Get Signature

> **get** **reconstruction\_err\_**(): `Promise`\<`number`\>

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L568)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L182)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn a NMF model for the data X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.params`? | `any` | Parameters (keyword arguments) and values passed to the fit_transform instance. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L199)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.H`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`. |
| `opts.W`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Data matrix to be decomposed. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L243)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L292)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L328)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L143)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform data back to its original space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Transformed data matrix. |
| `opts.Xt`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Transformed data matrix. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L362)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Update the model using the data in `X` as a mini-batch.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once (see [Strategies to scale computationally: bigger data](https://scikit-learn.org/stable/modules/generated/../../computing/scaling_strategies.html#scaling-strategies)).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.H`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial_fit`. |
| `opts.W`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial_fit`. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Data matrix to be decomposed. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L405)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L454)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform the data X according to the fitted MiniBatchNMF model.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Data matrix to be transformed by the model. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/MiniBatchNMF.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L486)
