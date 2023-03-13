# MiniBatchKMeans

Mini-Batch K-Means clustering.

Read more in the [User Guide](../clustering.html#mini-batch-kmeans).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MiniBatchKMeans.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchKMeans(opts?: MiniBatchKMeansOptions): MiniBatchKMeans;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MiniBatchKMeansOptions`](../interfaces/MiniBatchKMeansOptions.md) |

### Returns

[`MiniBatchKMeans`](MiniBatchKMeans.md)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L19)

### id

> `string`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L16)

### opts

> `any`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L17)

## Accessors

### cluster\_centers\_

Coordinates of cluster centers.

#### Signature

```ts
cluster_centers_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L405)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L405)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L555)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L555)

### inertia\_

The value of the inertia criterion associated with the chosen partition if compute\_labels is set to `true`. If compute\_labels is set to `false`, it’s an approximation of the inertia based on an exponentially weighted average of the batch inertiae. The inertia is defined as the sum of square distances of samples to their cluster center, weighted by the sample weights if provided.

#### Signature

```ts
inertia_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L455)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L455)

### labels\_

Labels of each point (if compute\_labels is set to `true`).

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L430)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L430)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L530)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L530)

### n\_iter\_

Number of iterations over the full dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L480)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L480)

### n\_steps\_

Number of minibatches processed.

#### Signature

```ts
n_steps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L505)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L505)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/MiniBatchKMeans.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L28)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L32)

Defined in:  [generated/cluster/MiniBatchKMeans.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L28) [generated/cluster/MiniBatchKMeans.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L32)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L95)

### fit()

Compute the centroids on X by chunking it into mini-batches.

#### Signature

```ts
fit(opts: MiniBatchKMeansFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansFitOptions`](../interfaces/MiniBatchKMeansFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L112)

### fit\_predict()

Compute cluster centers and predict cluster index for each sample.

Convenience method; equivalent to calling fit(X) followed by predict(X).

#### Signature

```ts
fit_predict(opts: MiniBatchKMeansFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansFitPredictOptions`](../interfaces/MiniBatchKMeansFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L146)

### fit\_transform()

Compute clustering and transform X to cluster-distance space.

Equivalent to fit(X).transform(X), but more efficiently implemented.

#### Signature

```ts
fit_transform(opts: MiniBatchKMeansFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansFitTransformOptions`](../interfaces/MiniBatchKMeansFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L180)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: MiniBatchKMeansGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansGetFeatureNamesOutOptions`](../interfaces/MiniBatchKMeansGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L216)

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

Defined in:  [generated/cluster/MiniBatchKMeans.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L41)

### partial\_fit()

Update k means estimate on a single mini-batch X.

#### Signature

```ts
partial_fit(opts: MiniBatchKMeansPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansPartialFitOptions`](../interfaces/MiniBatchKMeansPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L249)

### predict()

Predict the closest cluster each sample in X belongs to.

In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.

#### Signature

```ts
predict(opts: MiniBatchKMeansPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansPredictOptions`](../interfaces/MiniBatchKMeansPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L283)

### score()

Opposite of the value of X on the K-means objective.

#### Signature

```ts
score(opts: MiniBatchKMeansScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansScoreOptions`](../interfaces/MiniBatchKMeansScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L313)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: MiniBatchKMeansSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansSetOutputOptions`](../interfaces/MiniBatchKMeansSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L347)

### transform()

Transform X to a cluster-distance space.

In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.

#### Signature

```ts
transform(opts: MiniBatchKMeansTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchKMeansTransformOptions`](../interfaces/MiniBatchKMeansTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/MiniBatchKMeans.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L377)
