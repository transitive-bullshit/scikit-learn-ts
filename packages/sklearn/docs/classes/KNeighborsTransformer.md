# KNeighborsTransformer

Transform X into a (weighted) graph of k nearest neighbors.

The transformed data is a sparse graph as returned by kneighbors\_graph.

Read more in the [User Guide](../neighbors.html#neighbors-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new KNeighborsTransformer(opts?: KNeighborsTransformerOptions): KNeighborsTransformer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNeighborsTransformerOptions`](../interfaces/KNeighborsTransformerOptions.md) |

### Returns

[`KNeighborsTransformer`](KNeighborsTransformer.md)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L19)

## Accessors

### effective\_metric\_

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Signature

```ts
effective_metric_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L357)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L357)

### effective\_metric\_params\_

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Signature

```ts
effective_metric_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L384)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L384)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L438)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L438)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L411)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L411)

### n\_samples\_fit\_

Number of samples in the fitted data.

#### Signature

```ts
n_samples_fit_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L465)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L465)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L30)

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

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L34)

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L30) [generated/neighbors/KNeighborsTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L34)

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

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L93)

### fit()

Fit the k-nearest neighbors transformer from the training dataset.

#### Signature

```ts
fit(opts: KNeighborsTransformerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerFitOptions`](../interfaces/KNeighborsTransformerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L110)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to X and y with optional parameters fit\_params and returns a transformed version of X.

#### Signature

```ts
fit_transform(opts: KNeighborsTransformerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerFitTransformOptions`](../interfaces/KNeighborsTransformerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L142)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: KNeighborsTransformerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerGetFeatureNamesOutOptions`](../interfaces/KNeighborsTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L179)

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

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L43)

### kneighbors()

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Signature

```ts
kneighbors(opts: KNeighborsTransformerKneighborsOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerKneighborsOptions`](../interfaces/KNeighborsTransformerKneighborsOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L216)

### kneighbors\_graph()

Compute the (weighted) graph of k-Neighbors for points in X.

#### Signature

```ts
kneighbors_graph(opts: KNeighborsTransformerKneighborsGraphOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerKneighborsGraphOptions`](../interfaces/KNeighborsTransformerKneighborsGraphOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L252)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: KNeighborsTransformerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerSetOutputOptions`](../interfaces/KNeighborsTransformerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L291)

### transform()

Compute the (weighted) graph of Neighbors for points in X.

#### Signature

```ts
transform(opts: KNeighborsTransformerTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerTransformOptions`](../interfaces/KNeighborsTransformerTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L323)
