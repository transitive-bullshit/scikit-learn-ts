# DistanceMetric

Uniform interface for fast distance metric functions.

The `DistanceMetric` class provides a convenient way to compute pairwise distances between samples. It supports various distance metrics, such as Euclidean distance, Manhattan distance, and more.

The `pairwise` method can be used to compute pairwise distances between samples in the input arrays. It returns a distance matrix representing the distances between all pairs of samples.

The [`get\_metric`](#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") method allows you to retrieve a specific metric using its string identifier.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DistanceMetric.html)

## Constructors

## constructor()

### Signature

```ts
new DistanceMetric(opts?: object): DistanceMetric;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.dtype?` | `any` | The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`. |
| `opts.kwargs?` | `any` | Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric. |
| `opts.metric?` | `string` | The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics. |

### Returns

[`DistanceMetric`](DistanceMetric.md)

Defined in:  [generated/metrics/DistanceMetric.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L29)

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

Defined in:  [generated/metrics/DistanceMetric.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L104)

### get\_metric()

Get the given distance metric from the string identifier.

See the docstring of DistanceMetric for a list of available metrics.

#### Signature

```ts
get_metric(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.dtype?` | `any` | The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`. |
| `opts.kwargs?` | `any` | Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric. |
| `opts.metric?` | `string` | The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/metrics/DistanceMetric.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L123)

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

Defined in:  [generated/metrics/DistanceMetric.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L62)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/metrics/DistanceMetric.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/metrics/DistanceMetric.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/metrics/DistanceMetric.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L25)

### id

> `string`

Defined in:  [generated/metrics/DistanceMetric.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L22)

### opts

> `any`

Defined in:  [generated/metrics/DistanceMetric.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L23)

## Accessors

### metric\_obj

An instance of the requested distance metric class.

#### Signature

```ts
metric_obj(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/metrics/DistanceMetric.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L168)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/metrics/DistanceMetric.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L49)

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

Defined in: [generated/metrics/DistanceMetric.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/metrics/DistanceMetric.ts#L53)
