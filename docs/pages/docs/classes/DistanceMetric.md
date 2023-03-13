# DistanceMetric

DistanceMetric class

This class provides a uniform interface to fast distance metric functions. The various metrics can be accessed via the [`get\_metric`](#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") class method and the metric string identifier (see below).

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DistanceMetric.html)

## Constructors

## constructor()

### Signature

```ts
new DistanceMetric(opts?: DistanceMetricOptions): DistanceMetric;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `DistanceMetricOptions` |

### Returns

[`DistanceMetric`](DistanceMetric.md)

Defined in:  [generated/metrics/DistanceMetric.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/DistanceMetric.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/DistanceMetric.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/DistanceMetric.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L21)

### id

> `string`

Defined in:  [generated/metrics/DistanceMetric.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L18)

### opts

> `any`

Defined in:  [generated/metrics/DistanceMetric.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/DistanceMetric.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L30)

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

Defined in: [generated/metrics/DistanceMetric.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L34)

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

Defined in:  [generated/metrics/DistanceMetric.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L83)

### dist\_to\_rdist()

Convert the true distance to the rank-preserving surrogate distance.

The surrogate distance is any measure that yields the same rank as the distance, but is more efficient to compute. For example, the rank-preserving surrogate distance of the Euclidean metric is the squared-euclidean distance.

#### Signature

```ts
dist_to_rdist(opts: DistanceMetricDistToRdistOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DistanceMetricDistToRdistOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DistanceMetric.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L102)

### get\_metric()

Get the given distance metric from the string identifier.

See the docstring of DistanceMetric for a list of available metrics.

#### Signature

```ts
get_metric(opts: DistanceMetricGetMetricOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DistanceMetricGetMetricOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DistanceMetric.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L132)

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

Defined in:  [generated/metrics/DistanceMetric.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L43)

### pairwise()

Compute the pairwise distances between X and Y

This is a convenience routine for the sake of testing. For many metrics, the utilities in scipy.spatial.distance.cdist and scipy.spatial.distance.pdist will be faster.

#### Signature

```ts
pairwise(opts: DistanceMetricPairwiseOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DistanceMetricPairwiseOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/metrics/DistanceMetric.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L162)

### rdist\_to\_dist()

Convert the rank-preserving surrogate distance to the distance.

The surrogate distance is any measure that yields the same rank as the distance, but is more efficient to compute. For example, the rank-preserving surrogate distance of the Euclidean metric is the squared-euclidean distance.

#### Signature

```ts
rdist_to_dist(opts: DistanceMetricRdistToDistOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DistanceMetricRdistToDistOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DistanceMetric.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L194)
