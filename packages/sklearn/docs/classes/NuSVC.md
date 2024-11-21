# Class: NuSVC

Nu-Support Vector Classification.

Similar to SVC but uses a parameter to control the number of support vectors.

The implementation is based on libsvm.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVC.html)

## Constructors

### new NuSVC()

> **new NuSVC**(`opts`?): [`NuSVC`](NuSVC.md)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.break_ties`?

</td>
<td>

`boolean`

</td>
<td>

If true, `decision_function_shape='ovr'`, and number of classes > 2, [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict) will break ties according to the confidence values of [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function); otherwise the first class among the tied classes is returned. Please note that breaking ties comes at a relatively high computational cost compared to a simple predict.

</td>
</tr>
<tr>
<td>

`opts.cache_size`?

</td>
<td>

`number`

</td>
<td>

Specify the size of the kernel cache (in MB).

</td>
</tr>
<tr>
<td>

`opts.class_weight`?

</td>
<td>

`any`

</td>
<td>

Set the parameter C of class i to class_weight\[i\]\*C for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies as `n_samples / (n_classes \* np.bincount(y))`.

</td>
</tr>
<tr>
<td>

`opts.coef0`?

</td>
<td>

`number`

</td>
<td>

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

</td>
</tr>
<tr>
<td>

`opts.decision_function_shape`?

</td>
<td>

`"ovr"` \| `"ovo"`

</td>
<td>

Whether to return a one-vs-rest (‘ovr’) decision function of shape (n_samples, n_classes) as all other classifiers, or the original one-vs-one (‘ovo’) decision function of libsvm which has shape (n_samples, n_classes \* (n_classes - 1) / 2). However, one-vs-one (‘ovo’) is always used as multi-class strategy. The parameter is ignored for binary classification.

</td>
</tr>
<tr>
<td>

`opts.degree`?

</td>
<td>

`number`

</td>
<td>

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

</td>
</tr>
<tr>
<td>

`opts.gamma`?

</td>
<td>

`number` \| `"auto"` \| `"scale"`

</td>
<td>

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

</td>
</tr>
<tr>
<td>

`opts.kernel`?

</td>
<td>

`"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"`

</td>
<td>

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix. For an intuitive visualization of different kernel types see [Plot classification boundaries with different SVM Kernels](https://scikit-learn.org/stable/modules/generated/../../auto_examples/svm/plot_svm_kernels.html#sphx-glr-auto-examples-svm-plot-svm-kernels-py).

</td>
</tr>
<tr>
<td>

`opts.max_iter`?

</td>
<td>

`number`

</td>
<td>

Hard limit on iterations within solver, or -1 for no limit.

</td>
</tr>
<tr>
<td>

`opts.nu`?

</td>
<td>

`number`

</td>
<td>

An upper bound on the fraction of margin errors (see [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#nu-svc)) and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\].

</td>
</tr>
<tr>
<td>

`opts.probability`?

</td>
<td>

`boolean`

</td>
<td>

Whether to enable probability estimates. This must be enabled prior to calling `fit`, will slow down that method as it internally uses 5-fold cross-validation, and `predict_proba` may be inconsistent with `predict`. Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#scores-probabilities).

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

Controls the pseudo random number generation for shuffling the data for probability estimates. Ignored when `probability` is `false`. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.shrinking`?

</td>
<td>

`boolean`

</td>
<td>

Whether to use the shrinking heuristic. See the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#shrinking-svm).

</td>
</tr>
<tr>
<td>

`opts.tol`?

</td>
<td>

`number`

</td>
<td>

Tolerance for stopping criterion.

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`boolean`

</td>
<td>

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

</td>
</tr>
</tbody>
</table>

#### Returns

[`NuSVC`](NuSVC.md)

#### Defined in

[generated/svm/NuSVC.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/svm/NuSVC.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/svm/NuSVC.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/svm/NuSVC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L23) |
| `id` | `string` | `undefined` | [generated/svm/NuSVC.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L20) |
| `opts` | `any` | `undefined` | [generated/svm/NuSVC.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L21) |

## Accessors

### class\_weight\_

#### Get Signature

> **get** **class\_weight\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Multipliers of parameter C of each class. Computed based on the `class_weight` parameter.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVC.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L527)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The unique classes labels.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVC.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L550)

***

### dual\_coef\_

#### Get Signature

> **get** **dual\_coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Dual coefficients of the support vector in the decision function (see [Mathematical formulation](https://scikit-learn.org/stable/modules/generated/../sgd.html#sgd-mathematical-formulation)), multiplied by their targets. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the [multi-class section of the User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-multi-class) for details.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/NuSVC.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L572)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVC.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L664)

***

### fit\_status\_

#### Get Signature

> **get** **fit\_status\_**(): `Promise`\<`number`\>

0 if correctly fitted, 1 if the algorithm did not converge.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/NuSVC.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L595)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Constants in decision function.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVC.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L618)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/NuSVC.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L641)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Number of iterations run by the optimization routine to fit the model. The shape of this attribute depends on the number of models optimized which in turn depends on the number of classes.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVC.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L689)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Defined in

[generated/svm/NuSVC.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L133)

***

### shape\_fit\_

#### Get Signature

> **get** **shape\_fit\_**(): `Promise`\<`any`[]\>

Array dimensions of training vector `X`.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/svm/NuSVC.ts:758](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L758)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Indices of support vectors.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVC.ts:711](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L711)

***

### support\_vectors\_

#### Get Signature

> **get** **support\_vectors\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Support vectors.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/NuSVC.ts:733](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L733)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Evaluate the decision function for the samples in X.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

The input samples.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/NuSVC.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L201)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/svm/NuSVC.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L184)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the SVM model according to the given training data.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n_samples, n_samples).

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Target values (class labels in classification, real numbers in regression).

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/NuSVC.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L233)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/NuSVC.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L277)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/svm/NuSVC.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L146)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform classification on samples in X.

For an one-class model, +1 or -1 is returned.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

For kernel=”precomputed”, the expected shape of X is (n_samples_test, n_samples_train).

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVC.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L311)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Compute log probabilities of possible outcomes for samples in X.

The model need to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

For kernel=”precomputed”, the expected shape of X is (n_samples_test, n_samples_train).

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/NuSVC.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L345)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Compute probabilities of possible outcomes for samples in X.

The model needs to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

For kernel=”precomputed”, the expected shape of X is (n_samples_test, n_samples_train).

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/NuSVC.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L379)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Sample weights.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Test samples.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

True labels for `X`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/NuSVC.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L413)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `sample_weight` parameter in `fit`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/NuSVC.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L459)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `sample_weight` parameter in `score`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/NuSVC.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/svm/NuSVC.ts#L495)
