# RadiusNeighborsTransformer

Transform X into a (weighted) graph of neighbors nearer than a radius.

The transformed data is a sparse graph as returned by `radius\_neighbors\_graph`.

Read more in the [User Guide](../neighbors.html#neighbors-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new RadiusNeighborsTransformer(opts?: RadiusNeighborsTransformerOptions): RadiusNeighborsTransformer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RadiusNeighborsTransformerOptions`](../interfaces/RadiusNeighborsTransformerOptions.md) |

### Returns

[`RadiusNeighborsTransformer`](RadiusNeighborsTransformer.md)

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L19)

## Accessors

### effective\_metric\_

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/neighbors/RadiusNeighborsTransformer.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L369)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/RadiusNeighborsTransformer.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L396)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/neighbors/RadiusNeighborsTransformer.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L450)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/RadiusNeighborsTransformer.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L423)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/RadiusNeighborsTransformer.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L477)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L30)

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

Defined in: [generated/neighbors/RadiusNeighborsTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L34)

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

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L93)

### fit()

Fit the radius neighbors transformer from the training dataset.

#### Signature

```ts
fit(opts: RadiusNeighborsTransformerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerFitOptions`](../interfaces/RadiusNeighborsTransformerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L110)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to X and y with optional parameters fit\_params and returns a transformed version of X.

#### Signature

```ts
fit_transform(opts: RadiusNeighborsTransformerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerFitTransformOptions`](../interfaces/RadiusNeighborsTransformerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L144)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: RadiusNeighborsTransformerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerGetFeatureNamesOutOptions`](../interfaces/RadiusNeighborsTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L181)

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

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L43)

### radius\_neighbors()

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Signature

```ts
radius_neighbors(opts: RadiusNeighborsTransformerRadiusNeighborsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerRadiusNeighborsOptions`](../interfaces/RadiusNeighborsTransformerRadiusNeighborsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L220)

### radius\_neighbors\_graph()

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Signature

```ts
radius_neighbors_graph(opts: RadiusNeighborsTransformerRadiusNeighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerRadiusNeighborsGraphOptions`](../interfaces/RadiusNeighborsTransformerRadiusNeighborsGraphOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L258)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: RadiusNeighborsTransformerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerSetOutputOptions`](../interfaces/RadiusNeighborsTransformerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L299)

### transform()

Compute the (weighted) graph of Neighbors for points in X.

#### Signature

```ts
transform(opts: RadiusNeighborsTransformerTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerTransformOptions`](../interfaces/RadiusNeighborsTransformerTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/RadiusNeighborsTransformer.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L334)
