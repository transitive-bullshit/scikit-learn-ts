# MiniBatchSparsePCA

Mini-batch Sparse Principal Components Analysis.

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchSparsePCA.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchSparsePCA(opts?: object): MiniBatchSparsePCA;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Sparsity controlling parameter. Higher values lead to sparser components.  `Default Value`  `1` |
| `opts.batch_size?` | `number` | The number of features to take in each mini batch.  `Default Value`  `3` |
| `opts.callback?` | `any` | Callable that gets invoked every five iterations. |
| `opts.max_iter?` | `number` | Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics. If `max\_iter` is not `undefined`, `n\_iter` is ignored. |
| `opts.max_no_improvement?` | `number` | Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. Used only if `max\_iter` is not `undefined`.  To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.  `Default Value`  `10` |
| `opts.method?` | `"cd"` \| `"lars"` | Method to be used for optimization. lars: uses the least angle regression method to solve the lasso problem (linear\_model.lars\_path) cd: uses the coordinate descent method to compute the Lasso solution (linear\_model.Lasso). Lars will be faster if the estimated components are sparse.  `Default Value`  `'lars'` |
| `opts.n_components?` | `number` | Number of sparse atoms to extract. If `undefined`, then `n\_components` is set to `n\_features`. |
| `opts.n_iter?` | `number` | Number of iterations to perform for each mini batch.  `Default Value`  `100` |
| `opts.n_jobs?` | `number` | Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.random_state?` | `number` | Used for random shuffling when `shuffle` is set to `true`, during online dictionary learning. Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.ridge_alpha?` | `number` | Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.  `Default Value`  `0.01` |
| `opts.shuffle?` | `boolean` | Whether to shuffle the data before splitting it in batches.  `Default Value`  `true` |
| `opts.tol?` | `number` | Control early stopping based on the norm of the differences in the dictionary between 2 steps. Used only if `max\_iter` is not `undefined`.  To disable early stopping based on changes in the dictionary, set `tol` to 0.0.  `Default Value`  `0.001` |
| `opts.verbose?` | `number` \| `boolean` | Controls the verbosity; the higher, the more messages. Defaults to 0.  `Default Value`  `false` |

### Returns

[`MiniBatchSparsePCA`](MiniBatchSparsePCA.md)

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L19)

## Accessors

### components\_

Sparse components extracted from the data.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L457)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:592](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L592)

### mean\_

Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L538)

### n\_components\_

Estimated number of components.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L484)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L565)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L511)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L122)

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

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L126)

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

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L191)

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
| `opts.X?` | `ArrayLike`[] | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L208)

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
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L250)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.MiniBatchSparsePCA.fit "sklearn.decomposition.MiniBatchSparsePCA.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L303)

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

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L135)

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
| `opts.X?` | `ArrayLike`[] | Data in the latent space. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L343)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

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

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L383)

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
| `opts.X?` | `ArrayLike`[] | Test data to be transformed, must have the same number of features as the data used to train the model. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L422)
