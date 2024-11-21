**sklearn** • **Docs**

***

Incremental principal components analysis (IPCA).

Linear dimensionality reduction using Singular Value Decomposition of the data, keeping only the most significant singular vectors to project the data to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

Depending on the size of the input data, this algorithm can be much more memory efficient than a PCA, and allows sparse input.

This algorithm has constant memory complexity, on the order of `batch\_size \* n\_features`, enabling use of np.memmap files without loading the entire file into memory. For sparse matrices, the input is converted to dense in batches (in order to be able to subtract the mean) which avoids storing the entire dense matrix at any one time.

The computational overhead of each SVD is `O(batch\_size \* n\_features \*\* 2)`, but only 2 \* batch\_size samples remain in memory at a time. There will be `n\_samples / batch\_size` SVD computations to get the principal components, versus 1 large SVD of complexity `O(n\_samples \* n\_features \*\* 2)` for PCA.

For a usage example, see Incremental PCA.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.IncrementalPCA.html)

## Constructors

### new IncrementalPCA()

> **new IncrementalPCA**(`opts`?): [`IncrementalPCA`](IncrementalPCA.md)

#### Parameters

• **opts?**

• **opts.batch\_size?**: `number`

The number of samples to use for each batch. Only used when calling `fit`. If `batch\_size` is `undefined`, then `batch\_size` is inferred from the data and set to `5 \* n\_features`, to provide a balance between approximation accuracy and memory consumption.

• **opts.copy?**: `boolean`

If `false`, X will be overwritten. `copy=False` can be used to save memory but is unsafe for general use.

**Default Value**

`true`

• **opts.n\_components?**: `number`

Number of components to keep. If `n\_components` is `undefined`, then `n\_components` is set to `min(n\_samples, n\_features)`.

• **opts.whiten?**: `boolean`

When `true` (`false` by default) the `components\_` vectors are divided by `n\_samples` times `components\_` to ensure uncorrelated outputs with unit component-wise variances.

Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometimes improve the predictive accuracy of the downstream estimators by making data respect some hard-wired assumptions.

**Default Value**

`false`

#### Returns

[`IncrementalPCA`](IncrementalPCA.md)

#### Defined in

[generated/decomposition/IncrementalPCA.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L33)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L31)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L30)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L29)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L26)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L27)

## Accessors

### batch\_size\_

#### Get Signature

> **get** **batch\_size\_**(): `Promise`\<`number`\>

Inferred batch size from `batch\_size`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:761](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L761)

***

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L540)

***

### explained\_variance\_

#### Get Signature

> **get** **explained\_variance\_**(): `Promise`\<`ArrayLike`\>

Variance explained by each of the selected components.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L565)

***

### explained\_variance\_ratio\_

#### Get Signature

> **get** **explained\_variance\_ratio\_**(): `Promise`\<`ArrayLike`\>

Percentage of variance explained by each of the selected components. If all components are stored, the sum of explained variances is equal to 1.0.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L590)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:811](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L811)

***

### mean\_

#### Get Signature

> **get** **mean\_**(): `Promise`\<`ArrayLike`\>

Per-feature empirical mean, aggregate over calls to `partial\_fit`.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L640)

***

### n\_components\_

#### Get Signature

> **get** **n\_components\_**(): `Promise`\<`number`\>

The estimated number of components. Relevant when `n\_components=None`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:711](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L711)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:786](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L786)

***

### n\_samples\_seen\_

#### Get Signature

> **get** **n\_samples\_seen\_**(): `Promise`\<`number`\>

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:736](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L736)

***

### noise\_variance\_

#### Get Signature

> **get** **noise\_variance\_**(): `Promise`\<`number`\>

The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:686](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L686)

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

[generated/decomposition/IncrementalPCA.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L64)

***

### singular\_values\_

#### Get Signature

> **get** **singular\_values\_**(): `Promise`\<`ArrayLike`\>

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L615)

***

### var\_

#### Get Signature

> **get** **var\_**(): `Promise`\<`ArrayLike`\>

Per-feature empirical variance, aggregate over calls to `partial\_fit`.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L663)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L116)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model with X, using minibatches of size batch\_size.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L133)

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

[generated/decomposition/IncrementalPCA.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L172)

***

### get\_covariance()

> **get\_covariance**(`opts`): `Promise`\<`any`\>

Compute data covariance with the generative model.

`cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.

#### Parameters

• **opts**

• **opts.cov?**: `any`

Estimated covariance of data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L216)

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

[generated/decomposition/IncrementalPCA.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L250)

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

[generated/decomposition/IncrementalPCA.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L286)

***

### get\_precision()

> **get\_precision**(`opts`): `Promise`\<`any`\>

Compute data precision matrix with the generative model.

Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.

#### Parameters

• **opts**

• **opts.precision?**: `any`

Estimated precision of data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L322)

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

[generated/decomposition/IncrementalPCA.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L77)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Transform data back to its original space.

In other words, return an input `X\_original` whose transform would be X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

New data, where `n\_samples` is the number of samples and `n\_components` is the number of components.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L356)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Incremental fit with X. All of X is processed as a single batch.

#### Parameters

• **opts**

• **opts.check\_input?**: `boolean`

Run check\_array on X.

**Default Value**

`true`

• **opts.X?**: `ArrayLike`[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L390)

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

[generated/decomposition/IncrementalPCA.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L436)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.check\_input?**: `string` \| `boolean`

Metadata routing for `check\_input` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L472)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply dimensionality reduction to X.

X is projected on the first principal components previously extracted from a training set, using minibatches of size batch\_size if X is sparse.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

New data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/IncrementalPCA.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L508)
