# Class: SGDOneClassSVM

Solves linear One-Class SVM using Stochastic Gradient Descent.

This implementation is meant to be used with a kernel approximation technique (e.g. `sklearn.kernel_approximation.Nystroem`) to obtain results similar to `sklearn.svm.OneClassSVM` which uses a Gaussian kernel by default.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../sgd.html#sgd-online-one-class-svm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDOneClassSVM.html)

## Constructors

### new SGDOneClassSVM()

> **new SGDOneClassSVM**(`opts`?): [`SGDOneClassSVM`](SGDOneClassSVM.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.average`? | `number` \| `boolean` | When set to `true`, computes the averaged SGD weights and stores the result in the `coef_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So `average=10` will begin averaging after seeing 10 samples. |
| `opts.eta0`? | `number` | The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’. Values must be in the range `\[0.0, inf)`. |
| `opts.fit_intercept`? | `boolean` | Whether the intercept should be estimated or not. Defaults to `true`. |
| `opts.learning_rate`? | `"constant"` \| `"optimal"` \| `"invscaling"` \| `"adaptive"` | The learning rate schedule to use with `fit`. (If using `partial_fit`, learning rate must be controlled directly). |
| `opts.max_iter`? | `number` | The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the `partial_fit`. Defaults to 1000. Values must be in the range `\[1, inf)`. |
| `opts.nu`? | `number` | The nu parameter of the One Class SVM: an upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken. |
| `opts.power_t`? | `number` | The exponent for inverse scaling learning rate. Values must be in the range `(-inf, inf)`. |
| `opts.random_state`? | `number` | The seed of the pseudo random number generator to use when shuffling the data. If int, random_state is the seed used by the random number generator; If RandomState instance, random_state is the random number generator; If `undefined`, the random number generator is the RandomState instance used by `np.random`. |
| `opts.shuffle`? | `boolean` | Whether or not the training data should be shuffled after each epoch. Defaults to `true`. |
| `opts.tol`? | `number` | The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous_loss - tol). Defaults to 1e-3. Values must be in the range `\[0.0, inf)`. |
| `opts.verbose`? | `number` | The verbosity level. |
| `opts.warm_start`? | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start). Repeatedly calling fit or partial_fit when warm_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial_fit` will result in increasing the existing counter. |

**Returns** [`SGDOneClassSVM`](SGDOneClassSVM.md)

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/linear\_model/SGDOneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/linear\_model/SGDOneClassSVM.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/linear\_model/SGDOneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L21) |
| `id` | `string` | `undefined` | [generated/linear\_model/SGDOneClassSVM.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L18) |
| `opts` | `any` | `undefined` | [generated/linear\_model/SGDOneClassSVM.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L19) |

## Accessors

### coef\_

**Get Signature**

> **get** **coef\_**(): `Promise`\<`ArrayLike`[]\>

Weights assigned to the features.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L603)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:749](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L749)

***

### loss\_function\_

**Get Signature**

> **get** **loss\_function\_**(): `Promise`\<`any`\>

Deprecated since version 1.4: `loss_function_` was deprecated in version 1.4 and will be removed in 1.6.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L699)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:724](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L724)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The actual number of iterations to reach the stopping criterion.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L651)

***

### offset\_

**Get Signature**

> **get** **offset\_**(): `Promise`\<`ArrayLike`\>

Offset used to define the decision function from the raw scores. We have the relation: decision_function = score_samples - offset.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L626)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L114)

***

### t\_

**Get Signature**

> **get** **t\_**(): `Promise`\<`number`\>

Number of weight updates performed during training. Same as `(n_iter_ \* n_samples + 1)`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L676)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Testing data. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L185)

***

### densify()

> **densify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef_` member (back) to a numpy.ndarray. This is the default format of `coef_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L221)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L166)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit linear One-Class SVM with Stochastic Gradient Descent.

This solves an equivalent optimization problem of the One-Class SVM primal optimization problem and returns a weight vector w and an offset rho such that the decision function is given by <w, x> - rho.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.coef_init`? | `any` | The initial coefficients to warm-start the optimization. |
| `opts.offset_init`? | `any` | The initial offset to warm-start the optimization. |
| `opts.sample_weight`? | `ArrayLike` | Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class_weight (passed through the constructor) if class_weight is specified. |
| `opts.X`? | `any` | Training data. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L249)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.kwargs`? | `any` | Arguments to be passed to `fit`. |
| `opts.X`? | `ArrayLike` | The input samples. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L303)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L347)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L127)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Fit linear One-Class SVM with Stochastic Gradient Descent.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Weights applied to individual samples. If not provided, uniform weights are assumed. |
| `opts.X`? | `any` | Subset of the training data. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L381)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Return labels (1 inlier, -1 outlier) of the samples.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Testing data. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L423)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Raw scoring function of the samples.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Testing data. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L455)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.coef_init`? | `string` \| `boolean` | Metadata routing for `coef_init` parameter in `fit`. |
| `opts.offset_init`? | `string` \| `boolean` | Metadata routing for `offset_init` parameter in `fit`. |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L491)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial_fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `partial_fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L539)

***

### sparsify()

> **sparsify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept_` member is not converted.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/SGDOneClassSVM.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L577)
