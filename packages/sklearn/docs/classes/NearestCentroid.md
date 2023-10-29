# NearestCentroid

Nearest centroid classifier.

Each class is represented by its centroid, with test samples classified to the class with the nearest centroid.

Read more in the [User Guide](../neighbors.html#nearest-centroid-classifier).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestCentroid.html)

## Constructors

## constructor()

### Signature

```ts
new NearestCentroid(opts?: object): NearestCentroid;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.metric?` | `string` | Metric to use for distance computation. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values. Note that “wminkowski”, “seuclidean” and “mahalanobis” are not supported.  The centroids for the samples corresponding to each class is the point from which the sum of the distances (according to the metric) of all samples that belong to that particular class are minimized. If the `"manhattan"` metric is provided, this centroid is the median and for all other metrics, the centroid is now set to be the mean.  `Default Value`  `'euclidean'` |
| `opts.shrink_threshold?` | `number` | Threshold for shrinking centroids to remove features. |

### Returns

[`NearestCentroid`](NearestCentroid.md)

Defined in:  [generated/neighbors/NearestCentroid.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L97)

### fit()

Fit the NearestCentroid model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. Note that centroid shrinking cannot be used with sparse matrices. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L114)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L156)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L57)

### predict()

Perform classification on an array of test vectors `X`.

The predicted class `C` for each sample in `X` is returned.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Test samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/NearestCentroid.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L193)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L228)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L279)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/NearestCentroid.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/NearestCentroid.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/NearestCentroid.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/NearestCentroid.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/NearestCentroid.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L19)

## Accessors

### centroids\_

Centroid of each class.

#### Signature

```ts
centroids_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/NearestCentroid.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L315)

Defined in:  [generated/neighbors/NearestCentroid.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L315)

### classes\_

The unique classes labels.

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/NearestCentroid.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L340)

Defined in:  [generated/neighbors/NearestCentroid.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L340)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/NearestCentroid.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L390)

Defined in:  [generated/neighbors/NearestCentroid.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L390)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L365)

Defined in:  [generated/neighbors/NearestCentroid.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L365)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/NearestCentroid.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L44)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/neighbors/NearestCentroid.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L48)

Defined in:  [generated/neighbors/NearestCentroid.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L44) [generated/neighbors/NearestCentroid.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L48)
