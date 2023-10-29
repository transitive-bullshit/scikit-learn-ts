# SparsePCA

Sparse Principal Components Analysis (SparsePCA).

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

Read more in the [User Guide](../decomposition.html#sparsepca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparsePCA.html)

## Constructors

## constructor()

### Signature

```ts
new SparsePCA(opts?: object): SparsePCA;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.U_init?` | [`ArrayLike`](../types/ArrayLike.md)[] | Initial values for the loadings for warm restart scenarios. Only used if `U\_init` and `V\_init` are not `undefined`. |
| `opts.V_init?` | [`ArrayLike`](../types/ArrayLike.md)[] | Initial values for the components for warm restart scenarios. Only used if `U\_init` and `V\_init` are not `undefined`. |
| `opts.alpha?` | `number` | Sparsity controlling parameter. Higher values lead to sparser components.  `Default Value`  `1` |
| `opts.max_iter?` | `number` | Maximum number of iterations to perform.  `Default Value`  `1000` |
| `opts.method?` | `"cd"` \| `"lars"` | Method to be used for optimization. lars: uses the least angle regression method to solve the lasso problem (linear\_model.lars\_path) cd: uses the coordinate descent method to compute the Lasso solution (linear\_model.Lasso). Lars will be faster if the estimated components are sparse.  `Default Value`  `'lars'` |
| `opts.n_components?` | `number` | Number of sparse atoms to extract. If `undefined`, then `n\_components` is set to `n\_features`. |
| `opts.n_jobs?` | `number` | Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.random_state?` | `number` | Used during dictionary learning. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.ridge_alpha?` | `number` | Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.  `Default Value`  `0.01` |
| `opts.tol?` | `number` | Tolerance for the stopping condition.  `Default Value`  `1e-8` |
| `opts.verbose?` | `number` \| `boolean` | Controls the verbosity; the higher, the more messages. Defaults to 0.  `Default Value`  `false` |

### Returns

[`SparsePCA`](SparsePCA.md)

Defined in:  [generated/decomposition/SparsePCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L25)

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

Defined in:  [generated/decomposition/SparsePCA.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L161)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/SparsePCA.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L178)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/SparsePCA.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L218)

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

Defined in:  [generated/decomposition/SparsePCA.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L267)

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

Defined in:  [generated/decomposition/SparsePCA.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L305)

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

Defined in:  [generated/decomposition/SparsePCA.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L110)

### inverse\_transform()

Transform data from the latent space to the original space.

This inversion is an approximation due to the loss of information induced by the forward decomposition.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Data in the latent space. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/SparsePCA.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L342)

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

Defined in:  [generated/decomposition/SparsePCA.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L377)

### transform()

Least Squares projection of the data onto the sparse components.

To avoid instability issues in case the system is under-determined, regularization can be applied (Ridge regression) via the `ridge\_alpha` parameter.

Note that Sparse PCA components orthogonality is not enforced as in PCA hence one cannot use a simple linear projection.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test data to be transformed, must have the same number of features as the data used to train the model. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/SparsePCA.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L414)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/SparsePCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/SparsePCA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/SparsePCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/SparsePCA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/SparsePCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L19)

## Accessors

### components\_

Sparse components extracted from the data.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/SparsePCA.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L447)

Defined in:  [generated/decomposition/SparsePCA.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L447)

### error\_

Vector of errors at each iteration.

#### Signature

```ts
error_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/SparsePCA.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L470)

Defined in:  [generated/decomposition/SparsePCA.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L470)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/SparsePCA.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L589)

Defined in:  [generated/decomposition/SparsePCA.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L589)

### mean\_

Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/SparsePCA.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L541)

Defined in:  [generated/decomposition/SparsePCA.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L541)

### n\_components\_

Estimated number of components.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/SparsePCA.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L493)

Defined in:  [generated/decomposition/SparsePCA.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L493)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/SparsePCA.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L564)

Defined in:  [generated/decomposition/SparsePCA.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L564)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/SparsePCA.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L518)

Defined in:  [generated/decomposition/SparsePCA.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L518)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/SparsePCA.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L97)

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

Defined in:  [generated/decomposition/SparsePCA.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L101)

Defined in:  [generated/decomposition/SparsePCA.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L97) [generated/decomposition/SparsePCA.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L101)
