**sklearn** • **Docs**

***

Unsupervised Outlier Detection.

Estimate the support of a high-dimensional distribution.

The implementation is based on libsvm.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html)

## Constructors

### new OneClassSVM()

> **new OneClassSVM**(`opts`?): [`OneClassSVM`](OneClassSVM.md)

#### Parameters

• **opts?**

• **opts.cache\_size?**: `number`

Specify the size of the kernel cache (in MB).

**Default Value**

`200`

• **opts.coef0?**: `number`

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

**Default Value**

`0`

• **opts.degree?**: `number`

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

**Default Value**

`3`

• **opts.gamma?**: `number` \| `"auto"` \| `"scale"`

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

**Default Value**

`'scale'`

• **opts.kernel?**: `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"`

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.

**Default Value**

`'rbf'`

• **opts.max\_iter?**: `number`

Hard limit on iterations within solver, or -1 for no limit.

**Default Value**

`-1`

• **opts.nu?**: `number`

An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

**Default Value**

`0.5`

• **opts.shrinking?**: `boolean`

Whether to use the shrinking heuristic. See the User Guide.

**Default Value**

`true`

• **opts.tol?**: `number`

Tolerance for stopping criterion.

**Default Value**

`0.001`

• **opts.verbose?**: `boolean`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

**Default Value**

`false`

#### Returns

[`OneClassSVM`](OneClassSVM.md)

#### Defined in

[generated/svm/OneClassSVM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/OneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/OneClassSVM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/svm/OneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/svm/OneClassSVM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/svm/OneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L21)

## Accessors

### dual\_coef\_

#### Get Signature

> **get** **dual\_coef\_**(): `Promise`\<`ArrayLike`[]\>

Coefficients of the support vectors in the decision function.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/svm/OneClassSVM.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L429)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/OneClassSVM.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L529)

***

### fit\_status\_

#### Get Signature

> **get** **fit\_status\_**(): `Promise`\<`number`\>

0 if correctly fitted, 1 otherwise (will raise warning)

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L454)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`ArrayLike`\>

Constant in the decision function.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/OneClassSVM.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L479)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L504)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run by the optimization routine to fit the model.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L554)

***

### offset\_

#### Get Signature

> **get** **offset\_**(): `Promise`\<`number`\>

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - `offset\_`. The offset is the opposite of `intercept\_` and is provided for consistency with other outlier detection algorithms.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L577)

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

[generated/svm/OneClassSVM.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L102)

***

### shape\_fit\_

#### Get Signature

> **get** **shape\_fit\_**(): `Promise`\<`any`[]\>

Array dimensions of training vector `X`.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/svm/OneClassSVM.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L600)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<`ArrayLike`\>

Indices of support vectors.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/OneClassSVM.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L625)

***

### support\_vectors\_

#### Get Signature

> **get** **support\_vectors\_**(): `Promise`\<`ArrayLike`[]\>

Support vectors.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/svm/OneClassSVM.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L648)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data matrix.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/OneClassSVM.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L173)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/svm/OneClassSVM.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L154)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Detect the soft boundary of the set of samples X.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.

• **opts.X?**: `ArrayLike`

Set of samples, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/OneClassSVM.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L205)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Parameters

• **opts**

• **opts.kwargs?**: `any`

Arguments to be passed to `fit`.

• **opts.X?**: `ArrayLike`

The input samples.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/OneClassSVM.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L249)

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

[generated/svm/OneClassSVM.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L293)

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

[generated/svm/OneClassSVM.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L115)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform classification on samples in X.

For a one-class model, +1 or -1 is returned.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train).

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/OneClassSVM.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L329)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Raw scoring function of the samples.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data matrix.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/OneClassSVM.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L361)

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

[generated/svm/OneClassSVM.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/OneClassSVM.ts#L397)
