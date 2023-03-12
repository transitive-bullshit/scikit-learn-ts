# DBSCAN

Perform DBSCAN clustering from vector array or distance matrix.

DBSCAN - Density-Based Spatial Clustering of Applications with Noise. Finds core samples of high density and expands clusters from them. Good for data which contains clusters of similar density.

Read more in the [User Guide](../clustering.html#dbscan).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html)

## Constructors

## constructor()

### Signature

```ts
new DBSCAN(opts?: DBSCANOptions): DBSCAN;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DBSCANOptions`](../interfaces/DBSCANOptions.md) |

### Returns

[`DBSCAN`](DBSCAN.md)

Defined in:  [generated/cluster/DBSCAN.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/DBSCAN.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/DBSCAN.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/DBSCAN.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/DBSCAN.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/DBSCAN.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L19)

## Accessors

### components\_

Copy of each core sample found by training.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/DBSCAN.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L196)

Defined in:  [generated/cluster/DBSCAN.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L196)

### core\_sample\_indices\_

Indices of core samples.

#### Signature

```ts
core_sample_indices_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L171)

Defined in:  [generated/cluster/DBSCAN.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L171)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L264)

Defined in:  [generated/cluster/DBSCAN.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L264)

### labels\_

Cluster labels for each point in the dataset given to fit(). Noisy samples are given the label -1.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L219)

Defined in:  [generated/cluster/DBSCAN.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L219)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/DBSCAN.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L241)

Defined in:  [generated/cluster/DBSCAN.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L241)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/DBSCAN.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L30)

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

Defined in:  [generated/cluster/DBSCAN.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L34)

Defined in:  [generated/cluster/DBSCAN.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L30) [generated/cluster/DBSCAN.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L34)

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

Defined in:  [generated/cluster/DBSCAN.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L90)

### fit()

Perform DBSCAN clustering from features, or distance matrix.

#### Signature

```ts
fit(opts: DBSCANFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DBSCANFitOptions`](../interfaces/DBSCANFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/DBSCAN.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L107)

### fit\_predict()

Compute clusters from a data or distance matrix and predict labels.

#### Signature

```ts
fit_predict(opts: DBSCANFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DBSCANFitPredictOptions`](../interfaces/DBSCANFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L139)

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

Defined in:  [generated/cluster/DBSCAN.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/DBSCAN.ts#L43)
