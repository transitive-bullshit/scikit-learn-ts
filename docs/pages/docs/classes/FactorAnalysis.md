**sklearn** • **Docs**

***

Factor Analysis (FA).

A simple linear generative model with Gaussian latent variables.

The observations are assumed to be caused by a linear transformation of lower dimensional latent factors and added Gaussian noise. Without loss of generality the factors are distributed according to a Gaussian with zero mean and unit covariance. The noise is also zero mean and has an arbitrary diagonal covariance matrix.

If we would restrict the model further, by assuming that the Gaussian noise is even isotropic (all diagonal entries are the same) we would obtain [`PCA`](sklearn.decomposition.PCA.html#sklearn.decomposition.PCA "sklearn.decomposition.PCA").

FactorAnalysis performs a maximum likelihood estimate of the so-called `loading` matrix, the transformation of the latent variables to the observed ones, using SVD based approach.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FactorAnalysis.html)

## Constructors

### new FactorAnalysis()

> **new FactorAnalysis**(`opts`?): [`FactorAnalysis`](FactorAnalysis.md)

#### Parameters

• **opts?**

• **opts.copy?**: `boolean`

Whether to make a copy of X. If `false`, the input X gets overwritten during fitting.

**Default Value**

`true`

• **opts.iterated\_power?**: `number`

Number of iterations for the power method. 3 by default. Only used if `svd\_method` equals ‘randomized’.

**Default Value**

`3`

• **opts.max\_iter?**: `number`

Maximum number of iterations.

**Default Value**

`1000`

• **opts.n\_components?**: `number`

Dimensionality of latent space, the number of components of `X` that are obtained after `transform`. If `undefined`, n\_components is set to the number of features.

• **opts.noise\_variance\_init?**: `ArrayLike`

The initial guess of the noise variance for each feature. If `undefined`, it defaults to np.ones(n\_features).

• **opts.random\_state?**: `number`

Only used when `svd\_method` equals ‘randomized’. Pass an int for reproducible results across multiple function calls. See Glossary.

**Default Value**

`0`

• **opts.rotation?**: `"varimax"` \| `"quartimax"`

If not `undefined`, apply the indicated rotation. Currently, varimax and quartimax are implemented. See [“The varimax criterion for analytic rotation in factor analysis”](https://link.springer.com/article/10.1007%2FBF02289233) H. F. Kaiser, 1958.

• **opts.svd\_method?**: `"randomized"` \| `"lapack"`

Which SVD method to use. If ‘lapack’ use standard SVD from scipy.linalg, if ‘randomized’ use fast `randomized\_svd` function. Defaults to ‘randomized’. For most applications ‘randomized’ will be sufficiently precise while providing significant speed gains. Accuracy can also be improved by setting higher values for `iterated\_power`. If this is not sufficient, for maximum precision you should choose ‘lapack’.

**Default Value**

`'randomized'`

• **opts.tol?**: `number`

Stopping tolerance for log-likelihood increase.

**Default Value**

`0.01`

#### Returns

[`FactorAnalysis`](FactorAnalysis.md)

#### Defined in

[generated/decomposition/FactorAnalysis.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/FactorAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L25)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Components with maximum variance.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L518)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:666](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L666)

***

### loglike\_

#### Get Signature

> **get** **loglike\_**(): `Promise`\<`any`[]\>

The log likelihood at each iteration.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L543)

***

### mean\_

#### Get Signature

> **get** **mean\_**(): `Promise`\<`ArrayLike`\>

Per-feature empirical mean, estimated from the training set.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L618)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L641)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L593)

***

### noise\_variance\_

#### Get Signature

> **get** **noise\_variance\_**(): `Promise`\<`ArrayLike`\>

The estimated noise variance for each feature.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L568)

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

[generated/decomposition/FactorAnalysis.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L93)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L145)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the FactorAnalysis model to X using SVD based approach.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data.

• **opts.y?**: `any`

Ignored parameter.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L162)

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

[generated/decomposition/FactorAnalysis.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L201)

***

### get\_covariance()

> **get\_covariance**(`opts`): `Promise`\<`any`\>

Compute data covariance with the FactorAnalysis model.

`cov \= components\_.T \* components\_ + diag(noise\_variance)`

#### Parameters

• **opts**

• **opts.cov?**: `ArrayLike`[]

Estimated covariance of data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L245)

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

[generated/decomposition/FactorAnalysis.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L279)

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

[generated/decomposition/FactorAnalysis.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L315)

***

### get\_precision()

> **get\_precision**(`opts`): `Promise`\<`any`\>

Compute data precision matrix with the FactorAnalysis model.

#### Parameters

• **opts**

• **opts.precision?**: `ArrayLike`[]

Estimated precision of data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L349)

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

[generated/decomposition/FactorAnalysis.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L106)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the average log-likelihood of the samples.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data.

• **opts.y?**: `any`

Ignored parameter.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L381)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Compute the log-likelihood of each sample.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L418)

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

[generated/decomposition/FactorAnalysis.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L452)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply dimensionality reduction to X using the model.

Compute the expected mean of the latent variables. See Barber, 21.2.33 (or Bishop, 12.66).

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FactorAnalysis.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L486)
