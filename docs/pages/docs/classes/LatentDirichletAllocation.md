**sklearn** • **Docs**

***

Latent Dirichlet Allocation with online variational Bayes algorithm.

The implementation is based on [\[1\]](#re25e5648fc37-1) and [\[2\]](#re25e5648fc37-2).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html)

## Constructors

### new LatentDirichletAllocation()

> **new LatentDirichletAllocation**(`opts`?): [`LatentDirichletAllocation`](LatentDirichletAllocation.md)

#### Parameters

• **opts?**

• **opts.batch\_size?**: `number`

Number of documents to use in each EM iteration. Only used in online learning.

**Default Value**

`128`

• **opts.doc\_topic\_prior?**: `number`

Prior of document topic distribution `theta`. If the value is `undefined`, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `alpha`.

• **opts.evaluate\_every?**: `number`

How often to evaluate perplexity. Only used in `fit` method. set it to 0 or negative number to not evaluate perplexity in training at all. Evaluating perplexity can help you check convergence in training process, but it will also increase total training time. Evaluating perplexity in every iteration might increase training time up to two-fold.

**Default Value**

`-1`

• **opts.learning\_decay?**: `number`

It is a parameter that control learning rate in the online learning method. The value should be set between (0.5, 1.0\] to guarantee asymptotic convergence. When the value is 0.0 and batch\_size is `n\_samples`, the update method is same as batch learning. In the literature, this is called kappa.

**Default Value**

`0.7`

• **opts.learning\_method?**: `"batch"` \| `"online"`

Method used to update `\_component`. Only used in [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method. In general, if the data size is large, the online update will be much faster than the batch update.

Valid options:

**Default Value**

`'batch'`

• **opts.learning\_offset?**: `number`

A (positive) parameter that downweights early iterations in online learning. It should be greater than 1.0. In the literature, this is called tau\_0.

**Default Value**

`10`

• **opts.max\_doc\_update\_iter?**: `number`

Max number of iterations for updating document topic distribution in the E-step.

**Default Value**

`100`

• **opts.max\_iter?**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method, and not the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

**Default Value**

`10`

• **opts.mean\_change\_tol?**: `number`

Stopping tolerance for updating document topic distribution in E-step.

**Default Value**

`0.001`

• **opts.n\_components?**: `number`

Number of topics.

**Default Value**

`10`

• **opts.n\_jobs?**: `number`

The number of jobs to use in the E-step. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.perp\_tol?**: `number`

Perplexity tolerance. Only used when `evaluate\_every` is greater than 0.

**Default Value**

`0.1`

• **opts.random\_state?**: `number`

Pass an int for reproducible results across multiple function calls. See Glossary.

• **opts.topic\_word\_prior?**: `number`

Prior of topic word distribution `beta`. If the value is `undefined`, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `eta`.

• **opts.total\_samples?**: `number`

Total number of documents. Only used in the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

**Default Value**

`1000000`

• **opts.verbose?**: `number`

Verbosity level.

**Default Value**

`0`

#### Returns

[`LatentDirichletAllocation`](LatentDirichletAllocation.md)

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L17)

## Accessors

### bound\_

#### Get Signature

> **get** **bound\_**(): `Promise`\<`number`\>

Final perplexity score on training set.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:733](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L733)

***

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Variational parameters for topic word distribution. Since the complete conditional for topic word distribution is a Dirichlet, `components\_\[i, j\]` can be viewed as pseudocount that represents the number of times word `j` was assigned to topic `i`. It can also be viewed as distribution over the words for each topic after normalization: `model.components\_ / model.components\_.sum(axis=1)\[:, np.newaxis\]`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L571)

***

### doc\_topic\_prior\_

#### Get Signature

> **get** **doc\_topic\_prior\_**(): `Promise`\<`number`\>

Prior of document topic distribution `theta`. If the value is `undefined`, it is `1 / n\_components`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:760](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L760)

***

### exp\_dirichlet\_component\_

#### Get Signature

> **get** **exp\_dirichlet\_component\_**(): `Promise`\<`ArrayLike`[]\>

Exponential value of expectation of log topic word distribution. In the literature, this is `exp(E\[log(beta)\])`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L598)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L679)

***

### n\_batch\_iter\_

#### Get Signature

> **get** **n\_batch\_iter\_**(): `Promise`\<`number`\>

Number of iterations of the EM step.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L625)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L652)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of passes over the dataset.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L706)

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

[generated/decomposition/LatentDirichletAllocation.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L134)

***

### random\_state\_

#### Get Signature

> **get** **random\_state\_**(): `Promise`\<`any`\>

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:787](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L787)

***

### topic\_word\_prior\_

#### Get Signature

> **get** **topic\_word\_prior\_**(): `Promise`\<`number`\>

Prior of topic word distribution `beta`. If the value is `undefined`, it is `1 / n\_components`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:814](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L814)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L190)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn model for the data X with variational Bayes method.

When `learning\_method` is ‘online’, use mini-batch update. Otherwise, use batch update.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Document word matrix.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L209)

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

[generated/decomposition/LatentDirichletAllocation.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L250)

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

[generated/decomposition/LatentDirichletAllocation.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L298)

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

[generated/decomposition/LatentDirichletAllocation.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L336)

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

[generated/decomposition/LatentDirichletAllocation.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L147)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Online VB with Mini-Batch update.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Document word matrix.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L372)

***

### perplexity()

> **perplexity**(`opts`): `Promise`\<`number`\>

Calculate approximate perplexity for data X.

Perplexity is defined as exp(-1. \* log-likelihood per word)

#### Parameters

• **opts**

• **opts.sub\_sampling?**: `boolean`

Do sub-sampling or not.

• **opts.X?**: `ArrayLike`

Document word matrix.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L415)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Calculate approximate log-likelihood as score.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Document word matrix.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L456)

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

[generated/decomposition/LatentDirichletAllocation.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L499)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform data X according to the fitted model.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Document word matrix.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L535)
