**sklearn** • **Docs**

***

Naive Bayes classifier for multinomial models.

The multinomial Naive Bayes classifier is suitable for classification with discrete features (e.g., word counts for text classification). The multinomial distribution normally requires integer feature counts. However, in practice, fractional counts such as tf-idf may also work.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.MultinomialNB.html)

## Constructors

### new MultinomialNB()

> **new MultinomialNB**(`opts`?): [`MultinomialNB`](MultinomialNB.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number` \| `ArrayLike`

Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

**Default Value**

`1`

• **opts.class\_prior?**: `ArrayLike`

Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.

• **opts.fit\_prior?**: `boolean`

Whether to learn class prior probabilities or not. If false, a uniform prior will be used.

**Default Value**

`true`

• **opts.force\_alpha?**: `boolean`

If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

**Default Value**

`true`

#### Returns

[`MultinomialNB`](MultinomialNB.md)

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L19)

## Accessors

### class\_count\_

#### Get Signature

> **get** **class\_count\_**(): `Promise`\<`ArrayLike`\>

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L553)

***

### class\_log\_prior\_

#### Get Signature

> **get** **class\_log\_prior\_**(): `Promise`\<`ArrayLike`\>

Smoothed empirical log probability for each class.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L578)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

Class labels known to the classifier

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L603)

***

### feature\_count\_

#### Get Signature

> **get** **feature\_count\_**(): `Promise`\<`ArrayLike`[]\>

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L628)

***

### feature\_log\_prob\_

#### Get Signature

> **get** **feature\_log\_prob\_**(): `Promise`\<`ArrayLike`[]\>

Empirical log probability of features given a class, `P(x\_i|y)`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L653)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L703)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L678)

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

[generated/naive\_bayes/MultinomialNB.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L56)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L108)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit Naive Bayes classifier according to X, y.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples (1. for unweighted).

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L125)

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

[generated/naive\_bayes/MultinomialNB.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L169)

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

[generated/naive\_bayes/MultinomialNB.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L69)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Parameters

• **opts**

• **opts.classes?**: `ArrayLike`

List of all the classes that can possibly appear in the y vector.

Must be provided at the first call to partial\_fit, can be omitted in subsequent calls.

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples (1. for unweighted).

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/MultinomialNB.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L209)

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

[generated/naive\_bayes/MultinomialNB.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L258)

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

[generated/naive\_bayes/MultinomialNB.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L292)

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

[generated/naive\_bayes/MultinomialNB.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L326)

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

[generated/naive\_bayes/MultinomialNB.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L360)

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

[generated/naive\_bayes/MultinomialNB.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L394)

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

[generated/naive\_bayes/MultinomialNB.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L440)

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

[generated/naive\_bayes/MultinomialNB.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L476)

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

[generated/naive\_bayes/MultinomialNB.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L519)
