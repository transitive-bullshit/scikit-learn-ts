**sklearn** • **Docs**

***

Gaussian Naive Bayes (GaussianNB).

Can perform online updates to model parameters via [`partial\_fit`](#sklearn.naive_bayes.GaussianNB.partial_fit "sklearn.naive_bayes.GaussianNB.partial_fit"). For details on algorithm used to update feature means and variance online, see Stanford CS tech report STAN-CS-79-773 by Chan, Golub, and LeVeque:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html)

## Constructors

### new GaussianNB()

> **new GaussianNB**(`opts`?): [`GaussianNB`](GaussianNB.md)

#### Parameters

• **opts?**

• **opts.priors?**: `ArrayLike`

Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.

• **opts.var\_smoothing?**: `number`

Portion of the largest variance of all features that is added to variances for calculation stability.

**Default Value**

`1e-9`

#### Returns

[`GaussianNB`](GaussianNB.md)

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L17)

## Accessors

### class\_count\_

#### Get Signature

> **get** **class\_count\_**(): `Promise`\<`ArrayLike`\>

number of training samples observed in each class.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L533)

***

### class\_prior\_

#### Get Signature

> **get** **class\_prior\_**(): `Promise`\<`ArrayLike`\>

probability of each class.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L558)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

class labels known to the classifier.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L583)

***

### epsilon\_

#### Get Signature

> **get** **epsilon\_**(): `Promise`\<`number`\>

absolute additive value to variances.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L606)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L654)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L629)

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

[generated/naive\_bayes/GaussianNB.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L40)

***

### theta\_

#### Get Signature

> **get** **theta\_**(): `Promise`\<`ArrayLike`[]\>

mean of each feature per class.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:702](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L702)

***

### var\_

#### Get Signature

> **get** **var\_**(): `Promise`\<`ArrayLike`[]\>

Variance of each feature per class.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L679)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L92)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit Gaussian Naive Bayes according to X, y.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples (1. for unweighted).

• **opts.X?**: `ArrayLike`[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L109)

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

[generated/naive\_bayes/GaussianNB.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L153)

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

[generated/naive\_bayes/GaussianNB.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L53)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance and numerical stability overhead, hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Parameters

• **opts**

• **opts.classes?**: `ArrayLike`

List of all the classes that can possibly appear in the y vector.

Must be provided at the first call to partial\_fit, can be omitted in subsequent calls.

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples (1. for unweighted).

• **opts.X?**: `ArrayLike`[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L193)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform classification on an array of test vectors X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The input samples.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L242)

***

### predict\_joint\_log\_proba()

> **predict\_joint\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The input samples.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L276)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Return log-probability estimates for the test vector X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The input samples.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L310)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Return probability estimates for the test vector X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The input samples.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L342)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Test samples.

• **opts.y?**: `ArrayLike`

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L376)

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

[generated/naive\_bayes/GaussianNB.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L422)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.classes?**: `string` \| `boolean`

Metadata routing for `classes` parameter in `partial\_fit`.

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L458)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/GaussianNB.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L501)
