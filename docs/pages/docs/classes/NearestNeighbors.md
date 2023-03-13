# NearestNeighbors

Unsupervised learner for implementing neighbor searches.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html)

## Constructors

## constructor()

### Signature

```ts
new NearestNeighbors(opts?: NearestNeighborsOptions): NearestNeighbors;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `NearestNeighborsOptions` |

### Returns

[`NearestNeighbors`](NearestNeighbors.md)

Defined in:  [generated/neighbors/NearestNeighbors.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/NearestNeighbors.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/NearestNeighbors.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/NearestNeighbors.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/NearestNeighbors.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/NearestNeighbors.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L17)

## Accessors

### effective\_metric\_

Metric used to compute distances to neighbors.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neighbors/NearestNeighbors.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L289)

### effective\_metric\_params\_

Parameters for the metric used to compute distances to neighbors.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/NearestNeighbors.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L316)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/NearestNeighbors.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L370)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/NearestNeighbors.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L343)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/NearestNeighbors.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L397)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/NearestNeighbors.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L28)

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

Defined in: [generated/neighbors/NearestNeighbors.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L32)

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

Defined in:  [generated/neighbors/NearestNeighbors.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L89)

### fit()

Fit the nearest neighbors estimator from the training dataset.

#### Signature

```ts
fit(opts: NearestNeighborsFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestNeighborsFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NearestNeighbors.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L106)

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

Defined in:  [generated/neighbors/NearestNeighbors.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L41)

### kneighbors()

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Signature

```ts
kneighbors(opts: NearestNeighborsKneighborsOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestNeighborsKneighborsOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neighbors/NearestNeighbors.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L138)

### kneighbors\_graph()

Compute the (weighted) graph of k-Neighbors for points in X.

#### Signature

```ts
kneighbors_graph(opts: NearestNeighborsKneighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestNeighborsKneighborsGraphOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/NearestNeighbors.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L172)

### radius\_neighbors()

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Signature

```ts
radius_neighbors(opts: NearestNeighborsRadiusNeighborsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestNeighborsRadiusNeighborsOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NearestNeighbors.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L212)

### radius\_neighbors\_graph()

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Signature

```ts
radius_neighbors_graph(opts: NearestNeighborsRadiusNeighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestNeighborsRadiusNeighborsGraphOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/NearestNeighbors.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L250)
