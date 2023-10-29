# MiniBatchNMF

Mini-Batch Non-Negative Matrix Factorization (NMF).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchNMF(opts?: object): MiniBatchNMF;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha_H?` | `number` \| `"same"` | Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha\_W`.  `Default Value`  `'same'` |
| `opts.alpha_W?` | `number` | Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.  `Default Value`  `0` |
| `opts.batch_size?` | `number` | Number of samples in each mini-batch. Large batch sizes give better long-term convergence at the cost of a slower start.  `Default Value`  `1024` |
| `opts.beta_loss?` | `number` \| `"frobenius"` \| `"kullback-leibler"` \| `"itakura-saito"` | Beta divergence to be minimized, measuring the distance between `X` and the dot product `WH`. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for `beta\_loss <= 0` (or ‘itakura-saito’), the input matrix `X` cannot contain zeros.  `Default Value`  `'frobenius'` |
| `opts.forget_factor?` | `number` | Amount of rescaling of past information. Its value could be 1 with finite datasets. Choosing values < 1 is recommended with online learning as more recent batches will weight more than past batches.  `Default Value`  `0.7` |
| `opts.fresh_restarts?` | `boolean` | Whether to completely solve for W at each step. Doing fresh restarts will likely lead to a better solution for a same number of iterations but it is much slower.  `Default Value`  `false` |
| `opts.fresh_restarts_max_iter?` | `number` | Maximum number of iterations when solving for W at each step. Only used when doing fresh restarts. These iterations may be stopped early based on a small change of W controlled by `tol`.  `Default Value`  `30` |
| `opts.init?` | `"random"` \| `"nndsvd"` \| `"nndsvda"` \| `"nndsvdar"` \| `"custom"` | Method used to initialize the procedure. Valid options: |
| `opts.l1_ratio?` | `number` | The regularization mixing parameter, with 0 <= l1\_ratio <= 1. For l1\_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1\_ratio = 1 it is an elementwise L1 penalty. For 0 < l1\_ratio < 1, the penalty is a combination of L1 and L2.  `Default Value`  `0` |
| `opts.max_iter?` | `number` | Maximum number of iterations over the complete dataset before timing out.  `Default Value`  `200` |
| `opts.max_no_improvement?` | `number` | Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.  `Default Value`  `10` |
| `opts.n_components?` | `number` | Number of components, if `n\_components` is not set all features are kept. |
| `opts.random_state?` | `number` | Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.tol?` | `number` | Control early stopping based on the norm of the differences in `H` between 2 steps. To disable early stopping based on changes in `H`, set `tol` to 0.0.  `Default Value`  `0.0001` |
| `opts.transform_max_iter?` | `number` | Maximum number of iterations when solving for W at transform time. If `undefined`, it defaults to `max\_iter`. |
| `opts.verbose?` | `boolean` | Whether to be verbose.  `Default Value`  `false` |

### Returns

[`MiniBatchNMF`](MiniBatchNMF.md)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L21)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L203)

### fit()

Learn a NMF model for the data X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.params?` | `any` | Parameters (keyword arguments) and values passed to the fit\_transform instance. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L220)

### fit\_transform()

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.H?` | [`ArrayLike`](../types/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`. |
| `opts.W?` | [`ArrayLike`](../types/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`. |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Data matrix to be decomposed. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L267)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L323)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L361)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L143)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.W?` | `any` | Use `Xt` instead. |
| `opts.Xt?` | [`ArrayLike`](../types/ArrayLike.md) | Transformed data matrix. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L396)

### partial\_fit()

Update the model using the data in `X` as a mini-batch.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once (see [Strategies to scale computationally: bigger data](../../computing/scaling_strategies.html#scaling-strategies)).

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.H?` | [`ArrayLike`](../types/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial\_fit`. |
| `opts.W?` | [`ArrayLike`](../types/ArrayLike.md)[] | If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial\_fit`. |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Data matrix to be decomposed. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L440)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L496)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_partial_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.H?` | `string` \| `boolean` | Metadata routing for `H` parameter in `partial\_fit`. |
| `opts.W?` | `string` \| `boolean` | Metadata routing for `W` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L533)

### transform()

Transform the data X according to the fitted MiniBatchNMF model.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Data matrix to be transformed by the model. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L573)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L17)

### id

> `string`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L14)

### opts

> `any`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L15)

## Accessors

### components\_

Factorization matrix, sometimes called ‘dictionary’.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L606)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L606)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:752](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L752)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:752](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L752)

### n\_components\_

The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L631)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L631)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L727)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L727)

### n\_iter\_

Actual number of started iterations over the whole dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L681)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L681)

### n\_steps\_

Number of mini-batches processed.

#### Signature

```ts
n_steps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L704)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L704)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L130)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L134)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L130) [generated/decomposition/MiniBatchNMF.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L134)

### reconstruction\_err\_

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

#### Signature

```ts
reconstruction_err_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L656)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L656)
