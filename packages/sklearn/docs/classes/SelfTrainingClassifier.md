# Class: SelfTrainingClassifier

Self-training classifier.

This [metaestimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-metaestimator) allows a given supervised classifier to function as a semi-supervised classifier, allowing it to learn from unlabeled data. It does this by iteratively predicting pseudo-labels for the unlabeled data and adding them to the training set.

The classifier will continue iterating until either max_iter is reached, or no pseudo-labels were added to the training set in the previous iteration.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../semi_supervised.html#self-training).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.SelfTrainingClassifier.html)

## Constructors

### new SelfTrainingClassifier()

> **new SelfTrainingClassifier**(`opts`?): [`SelfTrainingClassifier`](SelfTrainingClassifier.md)

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

`opts.base_estimator`?

</td>
<td>

`any`

</td>
<td>

An estimator object implementing `fit` and `predict_proba`. Invoking the `fit` method will fit a clone of the passed estimator, which will be stored in the `base_estimator_` attribute.

</td>
</tr>
<tr>
<td>

`opts.criterion`?

</td>
<td>

`"threshold"` \| `"k_best"`

</td>
<td>

The selection criterion used to select which labels to add to the training set. If `'threshold'`, pseudo-labels with prediction probabilities above `threshold` are added to the dataset. If `'k_best'`, the `k_best` pseudo-labels with highest prediction probabilities are added to the dataset. When using the ‘threshold’ criterion, a [well calibrated classifier](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) should be used.

</td>
</tr>
<tr>
<td>

`opts.k_best`?

</td>
<td>

`number`

</td>
<td>

The amount of samples to add in each iteration. Only used when `criterion='k_best'`.

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

Maximum number of iterations allowed. Should be greater than or equal to 0. If it is `undefined`, the classifier will continue to predict labels until no new pseudo-labels are added, or all unlabeled samples have been labeled.

</td>
</tr>
<tr>
<td>

`opts.threshold`?

</td>
<td>

`number`

</td>
<td>

The decision threshold for use with `criterion='threshold'`. Should be in \[0, 1). When using the `'threshold'` criterion, a [well calibrated classifier](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) should be used.

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

Enable verbose output.

</td>
</tr>
</tbody>
</table>

#### Returns

[`SelfTrainingClassifier`](SelfTrainingClassifier.md)

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/semi\_supervised/SelfTrainingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/semi\_supervised/SelfTrainingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/semi\_supervised/SelfTrainingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L23) |
| `id` | `string` | `undefined` | [generated/semi\_supervised/SelfTrainingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L20) |
| `opts` | `any` | `undefined` | [generated/semi\_supervised/SelfTrainingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L21) |

## Accessors

### base\_estimator\_

#### Get Signature

> **get** **base\_estimator\_**(): `Promise`\<`any`\>

The fitted estimator.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L399)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Class labels for each output. (Taken from the trained `base_estimator_`).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L426)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L534)

***

### labeled\_iter\_

#### Get Signature

> **get** **labeled\_iter\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The iteration in which each sample was labeled. When a sample has iteration 0, the sample was already labeled in the original dataset. When a sample has iteration -1, the sample was not labeled in any iteration.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L480)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L507)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The number of rounds of self-training, that is the number of times the base estimator is fitted on relabeled variants of the training set.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L561)

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

[generated/semi\_supervised/SelfTrainingClassifier.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L72)

***

### termination\_condition\_

#### Get Signature

> **get** **termination\_condition\_**(): `Promise`\<`"max_iter"` \| `"no_change"` \| `"all_labeled"`\>

The reason that fitting was stopped.

##### Returns

`Promise`\<`"max_iter"` \| `"no_change"` \| `"all_labeled"`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L588)

***

### transduction\_

#### Get Signature

> **get** **transduction\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The labels used for the final fit of the classifier, including pseudo-labels added during fit.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L453)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Call decision function of the `base_estimator`.

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

Array representing the data.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L145)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L128)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit self-training classifier using `X`, `y` as training data.

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

Array representing the data.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Array representing the labels. Unlabeled samples should have the label -1.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L181)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Raise `NotImplementedError`.

This estimator does not support metadata routing yet.

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

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L222)

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

[generated/semi\_supervised/SelfTrainingClassifier.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L85)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict the classes of `X`.

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

Array representing the data.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L252)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Predict log probability for each possible outcome.

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

Array representing the data.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L288)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Predict probability for each possible outcome.

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

Array representing the data.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L324)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Call score on the `base_estimator`.

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

Array representing the data.

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

Array representing the labels.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/semi\_supervised/SelfTrainingClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L360)
