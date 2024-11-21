**sklearn** • **Docs**

***

Kernel Density Estimation.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KernelDensity.html)

## Constructors

### new KernelDensity()

> **new KernelDensity**(`opts`?): [`KernelDensity`](KernelDensity.md)

#### Parameters

• **opts?**

• **opts.algorithm?**: `"auto"` \| `"ball_tree"` \| `"kd_tree"`

The tree algorithm to use.

**Default Value**

`'auto'`

• **opts.atol?**: `number`

The desired absolute tolerance of the result. A larger tolerance will generally lead to faster execution.

**Default Value**

`0`

• **opts.bandwidth?**: `number` \| `"scott"` \| `"silverman"`

The bandwidth of the kernel. If bandwidth is a float, it defines the bandwidth of the kernel. If bandwidth is a string, one of the estimation methods is implemented.

**Default Value**

`1`

• **opts.breadth\_first?**: `boolean`

If true (default), use a breadth-first approach to the problem. Otherwise use a depth-first approach.

**Default Value**

`true`

• **opts.kernel?**: `"linear"` \| `"cosine"` \| `"exponential"` \| `"gaussian"` \| `"tophat"` \| `"epanechnikov"`

The kernel to use.

**Default Value**

`'gaussian'`

• **opts.leaf\_size?**: `number`

Specify the leaf size of the underlying tree. See [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") for details.

**Default Value**

`40`

• **opts.metric?**: `string`

Metric to use for distance computation. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

Not all metrics are valid with all algorithms: refer to the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") and [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). Note that the normalization of the density output is correct only for the Euclidean distance metric.

**Default Value**

`'euclidean'`

• **opts.metric\_params?**: `any`

Additional parameters to be passed to the tree for use with the metric. For more information, see the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree").

• **opts.rtol?**: `number`

The desired relative tolerance of the result. A larger tolerance will generally lead to faster execution.

**Default Value**

`0`

#### Returns

[`KernelDensity`](KernelDensity.md)

#### Defined in

[generated/neighbors/KernelDensity.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/KernelDensity.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/KernelDensity.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/KernelDensity.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/neighbors/KernelDensity.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/neighbors/KernelDensity.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L17)

## Accessors

### bandwidth\_

#### Get Signature

> **get** **bandwidth\_**(): `Promise`\<`number`\>

Value of the bandwidth, given directly by the bandwidth parameter or estimated using the ‘scott’ or ‘silverman’ method.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L463)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L438)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L390)

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

[generated/neighbors/KernelDensity.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L97)

***

### tree\_

#### Get Signature

> **get** **tree\_**(): `Promise`\<`any`\>

The tree algorithm for fast generalized N-point problems.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L415)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L149)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the Kernel Density model on the data.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

List of sample weights attached to the data X.

• **opts.X?**: `ArrayLike`[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

• **opts.y?**: `any`

Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L166)

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

[generated/neighbors/KernelDensity.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L210)

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

[generated/neighbors/KernelDensity.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L110)

***

### sample()

> **sample**(`opts`): `Promise`\<`ArrayLike`[]\>

Generate random samples from the model.

Currently, this is implemented only for gaussian and tophat kernels.

#### Parameters

• **opts**

• **opts.n\_samples?**: `number`

Number of samples to generate.

**Default Value**

`1`

• **opts.random\_state?**: `number`

Determines random number generation used to generate random samples. Pass an int for reproducible results across multiple function calls. See Glossary.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/neighbors/KernelDensity.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L246)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the total log-likelihood under the model.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

List of n\_features-dimensional data points. Each row corresponds to a single data point.

• **opts.y?**: `any`

Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L285)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Compute the log-likelihood of each sample under the model.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

An array of points to query. Last dimension should match dimension of training data (n\_features).

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L322)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/KernelDensity.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L358)
