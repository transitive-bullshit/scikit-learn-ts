# FeatureAgglomeration

Agglomerate features.

Recursively merges pair of clusters of features.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.FeatureAgglomeration.html)

## Constructors

## constructor()

### Signature

```ts
new FeatureAgglomeration(opts?: FeatureAgglomerationOptions): FeatureAgglomeration;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `FeatureAgglomerationOptions` |

### Returns

[`FeatureAgglomeration`](FeatureAgglomeration.md)

Defined in:  [generated/cluster/FeatureAgglomeration.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L19)

## Accessors

### children\_

The children of each non-leaf node. Values less than `n\_features` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_features` is a non-leaf node and has children `children\_\[i \- n\_features\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_features + i`.

#### Signature

```ts
children_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L486)

### distances\_

Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.

#### Signature

```ts
distances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L513)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L459)

### labels\_

Cluster labels for each feature.

#### Signature

```ts
labels_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L351)

### n\_clusters\_

The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.

#### Signature

```ts
n_clusters_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L324)

### n\_connected\_components\_

The estimated number of connected components in the graph.

#### Signature

```ts
n_connected_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L405)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L432)

### n\_leaves\_

Number of leaves in the hierarchical tree.

#### Signature

```ts
n_leaves_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/FeatureAgglomeration.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L378)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L30)

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

Defined in: [generated/cluster/FeatureAgglomeration.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L34)

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

Defined in:  [generated/cluster/FeatureAgglomeration.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L97)

### fit()

Fit the hierarchical clustering on the data.

#### Signature

```ts
fit(opts: FeatureAgglomerationFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureAgglomerationFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L114)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: FeatureAgglomerationFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureAgglomerationFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L146)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: FeatureAgglomerationGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureAgglomerationGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L186)

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

Defined in:  [generated/cluster/FeatureAgglomeration.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L43)

### inverse\_transform()

Inverse the transformation and return a vector of size `n\_features`.

#### Signature

```ts
inverse_transform(opts: FeatureAgglomerationInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureAgglomerationInverseTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L221)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: FeatureAgglomerationSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureAgglomerationSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L258)

### transform()

Transform a new matrix using the built clustering.

#### Signature

```ts
transform(opts: FeatureAgglomerationTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureAgglomerationTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cluster/FeatureAgglomeration.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L290)
