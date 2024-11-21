[**sklearn**](../README.md) • **Docs**

***

Nearest centroid classifier.

Each class is represented by its centroid, with test samples classified to the class with the nearest centroid.

Read more in the [User Guide](../neighbors.html#nearest-centroid-classifier).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestCentroid.html)

## Constructors

### new NearestCentroid()

> **new NearestCentroid**(`opts`?): [`NearestCentroid`](NearestCentroid.md)

#### Parameters

• **opts?**

• **opts.metric?**: `"euclidean"` \| `"manhattan"`

Metric to use for distance computation.

If `metric="euclidean"`, the centroid for the samples corresponding to each class is the arithmetic mean, which minimizes the sum of squared L1 distances. If `metric="manhattan"`, the centroid is the feature-wise median, which minimizes the sum of L1 distances.

**Default Value**

`'euclidean'`

• **opts.shrink\_threshold?**: `number`

Threshold for shrinking centroids to remove features.

#### Returns

[`NearestCentroid`](NearestCentroid.md)

#### Defined in

[generated/neighbors/NearestCentroid.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/NearestCentroid.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/NearestCentroid.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/NearestCentroid.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/neighbors/NearestCentroid.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/neighbors/NearestCentroid.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L19)

## Accessors

### centroids\_

#### Get Signature

> **get** **centroids\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Centroid of each class.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L302)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`any`[]\>

The unique classes labels.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L327)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L377)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L352)

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

[generated/neighbors/NearestCentroid.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L44)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L96)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the NearestCentroid model according to the given training data.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. Note that centroid shrinking cannot be used with sparse matrices.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L113)

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

[generated/neighbors/NearestCentroid.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L152)

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

[generated/neighbors/NearestCentroid.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L57)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform classification on an array of test vectors `X`.

The predicted class `C` for each sample in `X` is returned.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Test samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/NearestCentroid.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L188)

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

[generated/neighbors/NearestCentroid.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L222)

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

[generated/neighbors/NearestCentroid.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L268)
