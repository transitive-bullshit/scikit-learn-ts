# MiniBatchDictionaryLearning

Mini-batch dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchDictionaryLearning.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchDictionaryLearning(opts?: object): MiniBatchDictionaryLearning;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Sparsity controlling parameter.  `Default Value`  `1` |
| `opts.batch_size?` | `number` | Number of samples in each mini-batch.  `Default Value`  `256` |
| `opts.callback?` | `any` | A callable that gets invoked at the end of each iteration. |
| `opts.dict_init?` | `ArrayLike`[] | Initial value of the dictionary for warm restart scenarios. |
| `opts.fit_algorithm?` | `"cd"` \| `"lars"` | The algorithm used:  `Default Value`  `'lars'` |
| `opts.max_iter?` | `number` | Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics. If `max\_iter` is not `undefined`, `n\_iter` is ignored. |
| `opts.max_no_improvement?` | `number` | Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. Used only if `max\_iter` is not `undefined`.  To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.  `Default Value`  `10` |
| `opts.n_components?` | `number` | Number of dictionary elements to extract. |
| `opts.n_iter?` | `number` | Total number of iterations over data batches to perform.  `Default Value`  `1000` |
| `opts.n_jobs?` | `number` | Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.positive_code?` | `boolean` | Whether to enforce positivity when finding the code.  `Default Value`  `false` |
| `opts.positive_dict?` | `boolean` | Whether to enforce positivity when finding the dictionary.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Used for initializing the dictionary when `dict\_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.shuffle?` | `boolean` | Whether to shuffle the samples before forming batches.  `Default Value`  `true` |
| `opts.split_sign?` | `boolean` | Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.  `Default Value`  `false` |
| `opts.tol?` | `number` | Control early stopping based on the norm of the differences in the dictionary between 2 steps. Used only if `max\_iter` is not `undefined`.  To disable early stopping based on changes in the dictionary, set `tol` to 0.0.  `Default Value`  `0.001` |
| `opts.transform_algorithm?` | `"threshold"` \| `"lars"` \| `"lasso_lars"` \| `"lasso_cd"` \| `"omp"` | Algorithm used to transform the data:  `Default Value`  `'omp'` |
| `opts.transform_alpha?` | `number` | If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`. |
| `opts.transform_max_iter?` | `number` | Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `'lasso\_lars'`.  `Default Value`  `1000` |
| `opts.transform_n_nonzero_coefs?` | `number` | Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`. |
| `opts.verbose?` | `number` \| `boolean` | To control the verbosity of the procedure.  `Default Value`  `false` |

### Returns

[`MiniBatchDictionaryLearning`](MiniBatchDictionaryLearning.md)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L25)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L255)

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
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L272)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L316)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L370)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L410)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L183)

### partial\_fit()

Update the model using the data in X as a mini-batch.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L448)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L493)

### transform()

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L533)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L19)

## Accessors

### components\_

Components extracted from the data.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/MiniBatchDictionaryLearning.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L571)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/MiniBatchDictionaryLearning.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L625)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchDictionaryLearning.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L598)

### n\_iter\_

Number of iterations over the full dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchDictionaryLearning.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L652)

### n\_steps\_

Number of mini-batches processed.

#### Signature

```ts
n_steps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchDictionaryLearning.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L679)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L170)

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

Defined in: [generated/decomposition/MiniBatchDictionaryLearning.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L174)
