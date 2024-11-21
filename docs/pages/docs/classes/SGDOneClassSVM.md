**sklearn** • **Docs**

***

Solves linear One-Class SVM using Stochastic Gradient Descent.

This implementation is meant to be used with a kernel approximation technique (e.g. `sklearn.kernel\_approximation.Nystroem`) to obtain results similar to `sklearn.svm.OneClassSVM` which uses a Gaussian kernel by default.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDOneClassSVM.html)

## Constructors

### new SGDOneClassSVM()

> **new SGDOneClassSVM**(`opts`?): [`SGDOneClassSVM`](SGDOneClassSVM.md)

#### Parameters

• **opts?**

• **opts.average?**: `number` \| `boolean`

When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So `average=10` will begin averaging after seeing 10 samples.

**Default Value**

`false`

• **opts.eta0?**: `number`

The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’. Values must be in the range `\[0.0, inf)`.

**Default Value**

`0`

• **opts.fit\_intercept?**: `boolean`

Whether the intercept should be estimated or not. Defaults to `true`.

**Default Value**

`true`

• **opts.learning\_rate?**: `"constant"` \| `"optimal"` \| `"invscaling"` \| `"adaptive"`

The learning rate schedule to use with `fit`. (If using `partial\_fit`, learning rate must be controlled directly).

**Default Value**

`'optimal'`

• **opts.max\_iter?**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the `partial\_fit`. Defaults to 1000. Values must be in the range `\[1, inf)`.

**Default Value**

`1000`

• **opts.nu?**: `number`

The nu parameter of the One Class SVM: an upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

**Default Value**

`0.5`

• **opts.power\_t?**: `number`

The exponent for inverse scaling learning rate. Values must be in the range `(-inf, inf)`.

**Default Value**

`0.5`

• **opts.random\_state?**: `number`

The seed of the pseudo random number generator to use when shuffling the data. If int, random\_state is the seed used by the random number generator; If RandomState instance, random\_state is the random number generator; If `undefined`, the random number generator is the RandomState instance used by `np.random`.

• **opts.shuffle?**: `boolean`

Whether or not the training data should be shuffled after each epoch. Defaults to `true`.

**Default Value**

`true`

• **opts.tol?**: `number`

The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol). Defaults to 1e-3. Values must be in the range `\0.0, inf)`.

**Default Value**

`0.001`

• **opts.verbose?**: `number`

The verbosity level.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary.

Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.

**Default Value**

`false`

#### Returns

[`SGDOneClassSVM`](SGDOneClassSVM.md)

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L19)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`[]\>

Weights assigned to the features.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L603)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:749](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L749)

***

### loss\_function\_

#### Get Signature

> **get** **loss\_function\_**(): `Promise`\<`any`\>

Deprecated since version 1.4: `loss\_function\_` was deprecated in version 1.4 and will be removed in 1.6.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L699)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:724](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L724)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The actual number of iterations to reach the stopping criterion.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L651)

***

### offset\_

#### Get Signature

> **get** **offset\_**(): `Promise`\<`ArrayLike`\>

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - offset.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L626)

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

[generated/linear\_model/SGDOneClassSVM.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L114)

***

### t\_

#### Get Signature

> **get** **t\_**(): `Promise`\<`number`\>

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L676)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Parameters

• **opts**

• **opts.X?**: `any`

Testing data.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L185)

***

### densify()

> **densify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L221)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L166)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit linear One-Class SVM with Stochastic Gradient Descent.

This solves an equivalent optimization problem of the One-Class SVM primal optimization problem and returns a weight vector w and an offset rho such that the decision function is given by <w, x> - rho.

#### Parameters

• **opts**

• **opts.coef\_init?**: `any`

The initial coefficients to warm-start the optimization.

• **opts.offset\_init?**: `any`

The initial offset to warm-start the optimization.

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified.

• **opts.X?**: `any`

Training data.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L249)

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

[generated/linear\_model/SGDOneClassSVM.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L303)

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

[generated/linear\_model/SGDOneClassSVM.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L347)

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

[generated/linear\_model/SGDOneClassSVM.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L127)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Fit linear One-Class SVM with Stochastic Gradient Descent.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples. If not provided, uniform weights are assumed.

• **opts.X?**: `any`

Subset of the training data.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L381)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Return labels (1 inlier, -1 outlier) of the samples.

#### Parameters

• **opts**

• **opts.X?**: `any`

Testing data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L423)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Raw scoring function of the samples.

#### Parameters

• **opts**

• **opts.X?**: `any`

Testing data.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L455)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.coef\_init?**: `string` \| `boolean`

Metadata routing for `coef\_init` parameter in `fit`.

• **opts.offset\_init?**: `string` \| `boolean`

Metadata routing for `offset\_init` parameter in `fit`.

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L491)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L539)

***

### sparsify()

> **sparsify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/SGDOneClassSVM.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L577)
