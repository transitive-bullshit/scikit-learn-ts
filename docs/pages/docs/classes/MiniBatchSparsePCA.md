**sklearn** • **Docs**

***

Mini-batch Sparse Principal Components Analysis.

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

For an example comparing sparse PCA to PCA, see Faces dataset decompositions

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchSparsePCA.html)

## Constructors

### new MiniBatchSparsePCA()

> **new MiniBatchSparsePCA**(`opts`?): [`MiniBatchSparsePCA`](MiniBatchSparsePCA.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Sparsity controlling parameter. Higher values lead to sparser components.

**Default Value**

`1`

• **opts.batch\_size?**: `number`

The number of features to take in each mini batch.

**Default Value**

`3`

• **opts.callback?**: `any`

Callable that gets invoked every five iterations.

• **opts.max\_iter?**: `number`

Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics.

**Default Value**

`1`

• **opts.max\_no\_improvement?**: `number`

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function.

To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.

**Default Value**

`10`

• **opts.method?**: `"cd"` \| `"lars"`

Method to be used for optimization. lars: uses the least angle regression method to solve the lasso problem (linear\_model.lars\_path) cd: uses the coordinate descent method to compute the Lasso solution (linear\_model.Lasso). Lars will be faster if the estimated components are sparse.

**Default Value**

`'lars'`

• **opts.n\_components?**: `number`

Number of sparse atoms to extract. If `undefined`, then `n\_components` is set to `n\_features`.

• **opts.n\_jobs?**: `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.random\_state?**: `number`

Used for random shuffling when `shuffle` is set to `true`, during online dictionary learning. Pass an int for reproducible results across multiple function calls. See Glossary.

• **opts.ridge\_alpha?**: `number`

Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.

**Default Value**

`0.01`

• **opts.shuffle?**: `boolean`

Whether to shuffle the data before splitting it in batches.

**Default Value**

`true`

• **opts.tol?**: `number`

Control early stopping based on the norm of the differences in the dictionary between 2 steps.

To disable early stopping based on changes in the dictionary, set `tol` to 0.0.

**Default Value**

`0.001`

• **opts.verbose?**: `number` \| `boolean`

Controls the verbosity; the higher, the more messages. Defaults to 0.

**Default Value**

`false`

#### Returns

[`MiniBatchSparsePCA`](MiniBatchSparsePCA.md)

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L21)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Sparse components extracted from the data.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L467)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L602)

***

### mean\_

#### Get Signature

> **get** **mean\_**(): `Promise`\<`ArrayLike`\>

Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L548)

***

### n\_components\_

#### Get Signature

> **get** **n\_components\_**(): `Promise`\<`number`\>

Estimated number of components.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L494)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L575)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L521)

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

[generated/decomposition/MiniBatchSparsePCA.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L119)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L175)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model from data in X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L192)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: `ArrayLike`[]

Input samples.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L233)

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

[generated/decomposition/MiniBatchSparsePCA.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L281)

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

[generated/decomposition/MiniBatchSparsePCA.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L319)

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

[generated/decomposition/MiniBatchSparsePCA.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L132)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform data from the latent space to the original space.

This inversion is an approximation due to the loss of information induced by the forward decomposition.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Data in the latent space.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L357)

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

[generated/decomposition/MiniBatchSparsePCA.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L395)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Least Squares projection of the data onto the sparse components.

To avoid instability issues in case the system is under-determined, regularization can be applied (Ridge regression) via the `ridge\_alpha` parameter.

Note that Sparse PCA components orthogonality is not enforced as in PCA hence one cannot use a simple linear projection.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Test data to be transformed, must have the same number of features as the data used to train the model.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L433)
