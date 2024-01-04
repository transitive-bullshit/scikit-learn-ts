# MinMaxScaler

Transform features by scaling each feature to a given range.

This estimator scales and translates each feature individually such that it is in the given range on the training set, e.g. between zero and one.

The transformation is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html)

## Constructors

## constructor()

### Signature

```ts
new MinMaxScaler(opts?: object): MinMaxScaler;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.clip?` | `boolean` | Set to `true` to clip transformed values of held-out data to provided `feature range`.  `Default Value`  `false` |
| `opts.copy?` | `boolean` | Set to `false` to perform inplace row normalization and avoid a copy (if the input is already a numpy array).  `Default Value`  `true` |
| `opts.feature_range?` | `any` | Desired range of transformed data. |

### Returns

[`MinMaxScaler`](MinMaxScaler.md)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L25)

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

Defined in:  [generated/preprocessing/MinMaxScaler.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L104)

### fit()

Compute the minimum and maximum to be used for later scaling.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data used to compute the per-feature minimum and maximum used for later scaling along the features axis. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L121)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L161)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L208)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L246)

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

Defined in:  [generated/preprocessing/MinMaxScaler.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L62)

### inverse\_transform()

Undo the scaling of X according to feature\_range.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input data that will be transformed. It cannot be sparse. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L281)

### partial\_fit()

Online computation of min and max on X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MinMaxScaler.fit "sklearn.preprocessing.MinMaxScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data used to compute the mean and standard deviation used for later scaling along the features axis. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L318)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L358)

### transform()

Scale features of X according to feature\_range.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input data that will be transformed. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L391)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MinMaxScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MinMaxScaler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/MinMaxScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/MinMaxScaler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/MinMaxScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L19)

## Accessors

### data\_max\_

Per feature maximum seen in the data

#### Signature

```ts
data_max_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L495)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L495)

### data\_min\_

Per feature minimum seen in the data

#### Signature

```ts
data_min_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L470)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L470)

### data\_range\_

Per feature range `(data\_max\_ \- data\_min\_)` seen in the data

#### Signature

```ts
data_range_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L520)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L520)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L595)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L595)

### min\_

Per feature adjustment for minimum. Equivalent to `min \- X.min(axis=0) \* self.scale\_`

#### Signature

```ts
min_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L424)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L424)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L545)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L545)

### n\_samples\_seen\_

The number of samples processed by the estimator. It will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L570)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L570)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/MinMaxScaler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L49)

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

Defined in:  [generated/preprocessing/MinMaxScaler.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L53)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L49) [generated/preprocessing/MinMaxScaler.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L53)

### scale\_

Per feature relative scaling of the data. Equivalent to `(max \- min) / (X.max(axis=0) \- X.min(axis=0))`

#### Signature

```ts
scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MinMaxScaler.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L447)

Defined in:  [generated/preprocessing/MinMaxScaler.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/preprocessing/MinMaxScaler.ts#L447)
