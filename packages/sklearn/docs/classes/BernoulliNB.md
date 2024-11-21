[**sklearn**](../README.md) • **Docs**

***

Naive Bayes classifier for multivariate Bernoulli models.

Like MultinomialNB, this classifier is suitable for discrete data. The difference is that while MultinomialNB works with occurrence counts, BernoulliNB is designed for binary/boolean features.

Read more in the [User Guide](../naive_bayes.html#bernoulli-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.BernoulliNB.html)

## Constructors

### new BernoulliNB()

> **new BernoulliNB**(`opts`?): [`BernoulliNB`](BernoulliNB.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)

Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

**Default Value**

`1`

• **opts.binarize?**: `number`

Threshold for binarizing (mapping to booleans) of sample features. If `undefined`, input is presumed to already consist of binary vectors.

**Default Value**

`0`

• **opts.class\_prior?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

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

[`BernoulliNB`](BernoulliNB.md)

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L19)

## Accessors

### class\_count\_

#### Get Signature

> **get** **class\_count\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L556)

***

### class\_log\_prior\_

#### Get Signature

> **get** **class\_log\_prior\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Log probability of each class (smoothed).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L581)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Class labels known to the classifier

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L606)

***

### feature\_count\_

#### Get Signature

> **get** **feature\_count\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L629)

***

### feature\_log\_prob\_

#### Get Signature

> **get** **feature\_log\_prob\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Empirical log probability of features given a class, P(x\_i|y).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L654)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L704)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L679)

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

[generated/naive\_bayes/BernoulliNB.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L63)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L115)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit Naive Bayes classifier according to X, y.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Weights applied to individual samples (1. for unweighted).

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L132)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L176)

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

[generated/naive\_bayes/BernoulliNB.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L76)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Parameters

• **opts**

• **opts.classes?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

List of all the classes that can possibly appear in the y vector.

Must be provided at the first call to partial\_fit, can be omitted in subsequent calls.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Weights applied to individual samples (1. for unweighted).

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L216)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform classification on an array of test vectors X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The input samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L265)

***

### predict\_joint\_log\_proba()

> **predict\_joint\_log\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The input samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L299)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return log-probability estimates for the test vector X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The input samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L333)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return probability estimates for the test vector X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The input samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L365)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Test samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L399)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L445)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

[generated/naive\_bayes/BernoulliNB.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L481)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/naive\_bayes/BernoulliNB.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/naive_bayes/BernoulliNB.ts#L524)
