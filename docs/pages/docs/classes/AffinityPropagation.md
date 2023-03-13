# AffinityPropagation

Perform Affinity Propagation Clustering of data.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html)

## Constructors

## constructor()

### Signature

```ts
new AffinityPropagation(opts?: AffinityPropagationOptions): AffinityPropagation;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `AffinityPropagationOptions` |

### Returns

[`AffinityPropagation`](AffinityPropagation.md)

Defined in:  [generated/cluster/AffinityPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/AffinityPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/AffinityPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/AffinityPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/AffinityPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/AffinityPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L17)

## Accessors

### affinity\_matrix\_

Stores the affinity matrix used in `fit`.

#### Signature

```ts
affinity_matrix_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/AffinityPropagation.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L285)

### cluster\_centers\_

Cluster centers (if affinity != `precomputed`).

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/AffinityPropagation.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L231)

### cluster\_centers\_indices\_

Indices of cluster centers.

#### Signature

```ts
cluster_centers_indices_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AffinityPropagation.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L204)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AffinityPropagation.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L366)

### labels\_

Labels of each point.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/AffinityPropagation.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L258)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AffinityPropagation.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L339)

### n\_iter\_

Number of iterations taken to converge.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/AffinityPropagation.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L312)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/AffinityPropagation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L28)

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

Defined in: [generated/cluster/AffinityPropagation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L32)

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

Defined in:  [generated/cluster/AffinityPropagation.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L93)

### fit()

Fit the clustering from features, or affinity matrix.

#### Signature

```ts
fit(opts: AffinityPropagationFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AffinityPropagationFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/AffinityPropagation.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L110)

### fit\_predict()

Fit clustering from features/affinity matrix; return cluster labels.

#### Signature

```ts
fit_predict(opts: AffinityPropagationFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AffinityPropagationFitPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/AffinityPropagation.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L140)

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

Defined in:  [generated/cluster/AffinityPropagation.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L41)

### predict()

Predict the closest cluster each sample in X belongs to.

#### Signature

```ts
predict(opts: AffinityPropagationPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `AffinityPropagationPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/AffinityPropagation.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L174)
