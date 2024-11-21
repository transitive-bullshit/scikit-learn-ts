**sklearn** • **Docs**

***

Dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.DictionaryLearning.html)

## Constructors

### new DictionaryLearning()

> **new DictionaryLearning**(`opts`?): [`DictionaryLearning`](DictionaryLearning.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Sparsity controlling parameter.

**Default Value**

`1`

• **opts.callback?**: `any`

Callable that gets invoked every five iterations.

• **opts.code\_init?**: `ArrayLike`[]

Initial value for the code, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.

• **opts.dict\_init?**: `ArrayLike`[]

Initial values for the dictionary, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.

• **opts.fit\_algorithm?**: `"cd"` \| `"lars"`

`'lars'`: uses the least angle regression method to solve the lasso problem ([`lars\_path`](sklearn.linear_model.lars_path.html#sklearn.linear_model.lars_path "sklearn.linear_model.lars_path"));

**Default Value**

`'lars'`

• **opts.max\_iter?**: `number`

Maximum number of iterations to perform.

**Default Value**

`1000`

• **opts.n\_components?**: `number`

Number of dictionary elements to extract. If `undefined`, then `n\_components` is set to `n\_features`.

• **opts.n\_jobs?**: `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.positive\_code?**: `boolean`

Whether to enforce positivity when finding the code.

**Default Value**

`false`

• **opts.positive\_dict?**: `boolean`

Whether to enforce positivity when finding the dictionary.

**Default Value**

`false`

• **opts.random\_state?**: `number`

Used for initializing the dictionary when `dict\_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See Glossary.

• **opts.split\_sign?**: `boolean`

Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

**Default Value**

`false`

• **opts.tol?**: `number`

Tolerance for numerical error.

**Default Value**

`1e-8`

• **opts.transform\_algorithm?**: `"threshold"` \| `"lars"` \| `"lasso_lars"` \| `"lasso_cd"` \| `"omp"`

Algorithm used to transform the data:

**Default Value**

`'omp'`

• **opts.transform\_alpha?**: `number`

If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`.

• **opts.transform\_max\_iter?**: `number`

Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `'lasso\_lars'`.

**Default Value**

`1000`

• **opts.transform\_n\_nonzero\_coefs?**: `number`

Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.

• **opts.verbose?**: `boolean`

To control the verbosity of the procedure.

**Default Value**

`false`

#### Returns

[`DictionaryLearning`](DictionaryLearning.md)

#### Defined in

[generated/decomposition/DictionaryLearning.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L19)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

dictionary atoms extracted from the data

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L446)

***

### error\_

#### Get Signature

> **get** **error\_**(): `Promise`\<`any`\>

vector of errors at each iteration

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L473)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L527)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L500)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L554)

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

[generated/decomposition/DictionaryLearning.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L145)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L201)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model from data in X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L218)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit the model from data in X and return the transformed data.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L257)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L300)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L338)

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

[generated/decomposition/DictionaryLearning.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L158)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L376)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Test data to be transformed, must have the same number of features as the data used to train the model.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/DictionaryLearning.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L412)
