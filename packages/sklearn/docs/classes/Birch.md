# Birch

Implements the BIRCH clustering algorithm.

It is a memory-efficient, online-learning algorithm provided as an alternative to [`MiniBatchKMeans`](sklearn.cluster.MiniBatchKMeans.html#sklearn.cluster.MiniBatchKMeans "sklearn.cluster.MiniBatchKMeans"). It constructs a tree data structure with the cluster centroids being read off the leaf. These can be either the final cluster centroids or can be provided as input to another clustering algorithm such as [`AgglomerativeClustering`](sklearn.cluster.AgglomerativeClustering.html#sklearn.cluster.AgglomerativeClustering "sklearn.cluster.AgglomerativeClustering").

Read more in the [User Guide](../clustering.html#birch).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html)

## Constructors

## constructor()

### Signature

```ts
new Birch(opts?: BirchOptions): Birch;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BirchOptions`](../interfaces/BirchOptions.md) |

### Returns

[`Birch`](Birch.md)

Defined in:  [generated/cluster/Birch.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/Birch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/Birch.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/Birch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/Birch.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/Birch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L19)

## Accessors

### dummy\_leaf\_

Start pointer to all the leaves.

#### Signature

```ts
dummy_leaf_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L369)

Defined in:  [generated/cluster/Birch.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L369)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L487)

Defined in:  [generated/cluster/Birch.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L487)

### labels\_

Array of labels assigned to the input data. if partial\_fit is used instead of fit, they are assigned to the last batch of data.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L442)

Defined in:  [generated/cluster/Birch.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L442)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/Birch.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L464)

Defined in:  [generated/cluster/Birch.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L464)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/Birch.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L30)

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

Defined in:  [generated/cluster/Birch.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L34)

Defined in:  [generated/cluster/Birch.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L30) [generated/cluster/Birch.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L34)

### root\_

Root of the CFTree.

#### Signature

```ts
root_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L347)

Defined in:  [generated/cluster/Birch.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L347)

### subcluster\_centers\_

Centroids of all subclusters read directly from the leaves.

#### Signature

```ts
subcluster_centers_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L392)

Defined in:  [generated/cluster/Birch.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L392)

### subcluster\_labels\_

Labels assigned to the centroids of the subclusters after they are clustered globally.

#### Signature

```ts
subcluster_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L417)

Defined in:  [generated/cluster/Birch.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L417)

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

Defined in:  [generated/cluster/Birch.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L88)

### fit()

Build a CF Tree for the input data.

#### Signature

```ts
fit(opts: BirchFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchFitOptions`](../interfaces/BirchFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L105)

### fit\_predict()

Perform clustering on `X` and returns cluster labels.

#### Signature

```ts
fit_predict(opts: BirchFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchFitPredictOptions`](../interfaces/BirchFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L133)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: BirchFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchFitTransformOptions`](../interfaces/BirchFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/cluster/Birch.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L163)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: BirchGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchGetFeatureNamesOutOptions`](../interfaces/BirchGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L197)

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

Defined in:  [generated/cluster/Birch.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L43)

### partial\_fit()

Online learning. Prevents rebuilding of CFTree from scratch.

#### Signature

```ts
partial_fit(opts: BirchPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchPartialFitOptions`](../interfaces/BirchPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L227)

### predict()

Predict data using the `centroids\_` of subclusters.

Avoid computation of the row norms of X.

#### Signature

```ts
predict(opts: BirchPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchPredictOptions`](../interfaces/BirchPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L257)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: BirchSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchSetOutputOptions`](../interfaces/BirchSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/Birch.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L287)

### transform()

Transform X into subcluster centroids dimension.

Each dimension represents the distance from the sample point to each cluster centroid.

#### Signature

```ts
transform(opts: BirchTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BirchTransformOptions`](../interfaces/BirchTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/Birch.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/Birch.ts#L317)
