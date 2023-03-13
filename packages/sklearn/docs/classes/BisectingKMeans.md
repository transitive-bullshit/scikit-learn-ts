# BisectingKMeans

Bisecting K-Means clustering.

Read more in the [User Guide](../clustering.html#bisect-k-means).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.BisectingKMeans.html)

## Constructors

## constructor()

### Signature

```ts
new BisectingKMeans(opts?: BisectingKMeansOptions): BisectingKMeans;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BisectingKMeansOptions`](../interfaces/BisectingKMeansOptions.md) |

### Returns

[`BisectingKMeans`](BisectingKMeans.md)

Defined in:  [generated/cluster/BisectingKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/BisectingKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/BisectingKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/BisectingKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/BisectingKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/BisectingKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L17)

## Accessors

### cluster\_centers\_

Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/BisectingKMeans.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L367)

Defined in:  [generated/cluster/BisectingKMeans.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L367)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L467)

Defined in:  [generated/cluster/BisectingKMeans.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L467)

### inertia\_

Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.

#### Signature

```ts
inertia_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L417)

Defined in:  [generated/cluster/BisectingKMeans.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L417)

### labels\_

Labels of each point.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L392)

Defined in:  [generated/cluster/BisectingKMeans.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L392)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L442)

Defined in:  [generated/cluster/BisectingKMeans.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L442)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/BisectingKMeans.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L28)

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

Defined in:  [generated/cluster/BisectingKMeans.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L32)

Defined in:  [generated/cluster/BisectingKMeans.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L28) [generated/cluster/BisectingKMeans.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L32)

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

Defined in:  [generated/cluster/BisectingKMeans.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L89)

### fit()

Compute bisecting k-means clustering.

#### Signature

```ts
fit(opts: BisectingKMeansFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansFitOptions`](../interfaces/BisectingKMeansFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L106)

### fit\_predict()

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Signature

```ts
fit_predict(opts: BisectingKMeansFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansFitPredictOptions`](../interfaces/BisectingKMeansFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L140)

### fit\_transform()

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Signature

```ts
fit_transform(opts: BisectingKMeansFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansFitTransformOptions`](../interfaces/BisectingKMeansFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/BisectingKMeans.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L174)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: BisectingKMeansGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansGetFeatureNamesOutOptions`](../interfaces/BisectingKMeansGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L210)

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

Defined in:  [generated/cluster/BisectingKMeans.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L41)

### predict()

Predict which cluster each sample in X belongs to.

Prediction is made by going down the hierarchical tree in searching of closest leaf cluster.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Signature

```ts
predict(opts: BisectingKMeansPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansPredictOptions`](../interfaces/BisectingKMeansPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/BisectingKMeans.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L247)

### score()

Opposite of the value of X on the K-means objective.

#### Signature

```ts
score(opts: BisectingKMeansScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansScoreOptions`](../interfaces/BisectingKMeansScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L275)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: BisectingKMeansSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansSetOutputOptions`](../interfaces/BisectingKMeansSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/BisectingKMeans.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L309)

### transform()

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Signature

```ts
transform(opts: BisectingKMeansTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BisectingKMeansTransformOptions`](../interfaces/BisectingKMeansTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/BisectingKMeans.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/BisectingKMeans.ts#L339)
