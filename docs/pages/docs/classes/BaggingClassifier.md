# Class: BaggingClassifier

A Bagging classifier.

A Bagging classifier is an ensemble meta-estimator that fits base classifiers each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-4).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#bagging).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html)

## Constructors

### new BaggingClassifier()

> **new BaggingClassifier**(`opts`?): [`BaggingClassifier`](BaggingClassifier.md)

**Parameters**

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

`opts.bootstrap`?

</td>
<td>

`boolean`

</td>
<td>

Whether samples are drawn with replacement. If `false`, sampling without replacement is performed.

</td>
</tr>
<tr>
<td>

`opts.bootstrap_features`?

</td>
<td>

`boolean`

</td>
<td>

Whether features are drawn with replacement.

</td>
</tr>
<tr>
<td>

`opts.estimator`?

</td>
<td>

`any`

</td>
<td>

The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier").

</td>
</tr>
<tr>
<td>

`opts.max_features`?

</td>
<td>

`number`

</td>
<td>

The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap_features` for more details).

</td>
</tr>
<tr>
<td>

`opts.max_samples`?

</td>
<td>

`number`

</td>
<td>

The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).

</td>
</tr>
<tr>
<td>

`opts.n_estimators`?

</td>
<td>

`number`

</td>
<td>

The number of base estimators in the ensemble.

</td>
</tr>
<tr>
<td>

`opts.n_jobs`?

</td>
<td>

`number`

</td>
<td>

The number of jobs to run in parallel for both [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.BaggingClassifier.fit "sklearn.ensemble.BaggingClassifier.fit") and [`predict`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.BaggingClassifier.predict "sklearn.ensemble.BaggingClassifier.predict"). `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.oob_score`?

</td>
<td>

`boolean`

</td>
<td>

Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.

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

Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`number`

</td>
<td>

Controls the verbosity when fitting and predicting.

</td>
</tr>
<tr>
<td>

`opts.warm_start`?

</td>
<td>

`boolean`

</td>
<td>

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start).

</td>
</tr>
</tbody>
</table>

**Returns** [`BaggingClassifier`](BaggingClassifier.md)

**Defined in** [generated/ensemble/BaggingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/ensemble/BaggingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/ensemble/BaggingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/ensemble/BaggingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L23) |
| `id` | `string` | `undefined` | [generated/ensemble/BaggingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L20) |
| `opts` | `any` | `undefined` | [generated/ensemble/BaggingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L21) |

## Accessors

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The classes labels.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L670)

***

### estimator\_

**Get Signature**

> **get** **estimator\_**(): `Promise`\<`any`\>

The base estimator from which the ensemble is grown.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L535)

***

### estimators\_

**Get Signature**

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted base estimators.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L616)

***

### estimators\_features\_

**Get Signature**

> **get** **estimators\_features\_**(): `Promise`\<`any`\>

The subset of drawn features for each base estimator.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L643)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L589)

***

### n\_classes\_

**Get Signature**

> **get** **n\_classes\_**(): `Promise`\<`number` \| `any`[]\>

The number of classes.

**Returns** `Promise`\<`number` \| `any`[]\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L697)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L562)

***

### oob\_decision\_function\_

**Get Signature**

> **get** **oob\_decision\_function\_**(): `Promise`\<`ArrayLike`[]\>

Decision function computed with out-of-bag estimate on the training set. If n_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob_decision_function_` might contain NaN. This attribute exists only when `oob_score` is `true`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:751](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L751)

***

### oob\_score\_

**Get Signature**

> **get** **oob\_score\_**(): `Promise`\<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob_score` is `true`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:724](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L724)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

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

**Returns** `void`

**Defined in** [generated/ensemble/BaggingClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L103)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`[]\>

Average of the decision functions of the base classifiers.

**Parameters**

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

`ArrayLike`

</td>
<td>

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L174)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L157)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a Bagging ensemble of estimators from the training set (X, y).

**Parameters**

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

`opts.fit_params`?

</td>
<td>

`any`

</td>
<td>

Parameters to pass to the underlying estimators.

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

</td>
<td>

Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`

</td>
<td>

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

The target values (class labels in classification, real numbers in regression).

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L210)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

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

A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L261)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

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

**Returns** `Promise`\<`void`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L116)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class for X.

The predicted class of an input sample is computed as the class with the highest mean predicted probability. If base estimators do not implement a `predict_proba` method, then it resorts to voting.

**Parameters**

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

`ArrayLike`

</td>
<td>

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L299)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the base estimators in the ensemble.

**Parameters**

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

`ArrayLike`

</td>
<td>

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L335)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the mean predicted class probabilities of the base estimators in the ensemble. If base estimators do not implement a `predict_proba` method, then it resorts to voting and the predicted class probabilities of an input sample represents the proportion of estimators predicting each class.

**Parameters**

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

`ArrayLike`

</td>
<td>

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L373)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

**Parameters**

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

`ArrayLike`

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

`ArrayLike`[]

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

`ArrayLike`

</td>
<td>

True labels for `X`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`number`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L411)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L459)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/ensemble/BaggingClassifier.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L499)
