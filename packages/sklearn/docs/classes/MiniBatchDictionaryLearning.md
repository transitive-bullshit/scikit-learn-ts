# Class: MiniBatchDictionaryLearning

Mini-batch dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchDictionaryLearning.html)

## Constructors

### new MiniBatchDictionaryLearning()

> **new MiniBatchDictionaryLearning**(`opts`?): [`MiniBatchDictionaryLearning`](MiniBatchDictionaryLearning.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.alpha`? | `number` | Sparsity controlling parameter. |
| `opts.batch_size`? | `number` | Number of samples in each mini-batch. |
| `opts.callback`? | `any` | A callable that gets invoked at the end of each iteration. |
| `opts.dict_init`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Initial value of the dictionary for warm restart scenarios. |
| `opts.fit_algorithm`? | `"cd"` \| `"lars"` | The algorithm used: |
| `opts.max_iter`? | `number` | Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics. |
| `opts.max_no_improvement`? | `number` | Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. To disable convergence detection based on cost function, set `max_no_improvement` to `undefined`. |
| `opts.n_components`? | `number` | Number of dictionary elements to extract. |
| `opts.n_jobs`? | `number` | Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.positive_code`? | `boolean` | Whether to enforce positivity when finding the code. |
| `opts.positive_dict`? | `boolean` | Whether to enforce positivity when finding the dictionary. |
| `opts.random_state`? | `number` | Used for initializing the dictionary when `dict_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.shuffle`? | `boolean` | Whether to shuffle the samples before forming batches. |
| `opts.split_sign`? | `boolean` | Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers. |
| `opts.tol`? | `number` | Control early stopping based on the norm of the differences in the dictionary between 2 steps. To disable early stopping based on changes in the dictionary, set `tol` to 0.0. |
| `opts.transform_algorithm`? | `"threshold"` \| `"lars"` \| `"lasso_lars"` \| `"lasso_cd"` \| `"omp"` | Algorithm used to transform the data: |
| `opts.transform_alpha`? | `number` | If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`. |
| `opts.transform_max_iter`? | `number` | Maximum number of iterations to perform if `algorithm='lasso_cd'` or `'lasso_lars'`. |
| `opts.transform_n_nonzero_coefs`? | `number` | Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform_n_nonzero_coefs=int(n_features / 10)`. |
| `opts.verbose`? | `number` \| `boolean` | To control the verbosity of the procedure. |

#### Returns

[`MiniBatchDictionaryLearning`](MiniBatchDictionaryLearning.md)

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/decomposition/MiniBatchDictionaryLearning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/decomposition/MiniBatchDictionaryLearning.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/decomposition/MiniBatchDictionaryLearning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L21) |
| `id` | `string` | `undefined` | [generated/decomposition/MiniBatchDictionaryLearning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L18) |
| `opts` | `any` | `undefined` | [generated/decomposition/MiniBatchDictionaryLearning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L19) |

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Components extracted from the data.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L520)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L574)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L547)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations over the full dataset.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L601)

***

### n\_steps\_

#### Get Signature

> **get** **n\_steps\_**(): `Promise`\<`number`\>

Number of mini-batches processed.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L628)

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

[generated/decomposition/MiniBatchDictionaryLearning.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L165)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L221)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model from data in X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L238)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Additional fit parameters. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Input samples. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L281)

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

[generated/decomposition/MiniBatchDictionaryLearning.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L329)

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

[generated/decomposition/MiniBatchDictionaryLearning.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L367)

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

[generated/decomposition/MiniBatchDictionaryLearning.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L178)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Update the model using the data in X as a mini-batch.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L403)

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

[generated/decomposition/MiniBatchDictionaryLearning.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L446)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform_algorithm`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Test data to be transformed, must have the same number of features as the data used to train the model. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L484)
