# SelectFpr

Filter: Select the pvalues below alpha based on a FPR test.

FPR test stands for `false` Positive Rate test. It controls the total amount of false detections.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFpr.html)

## Constructors

## constructor()

### Signature

```ts
new SelectFpr(opts?: object): SelectFpr;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Features with p-values less than `alpha` are selected.  `Default Value`  `0.05` |
| `opts.score_func?` | `any` | Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). Default is f\_classif (see below “See Also”). The default function only works with classification tasks. |

### Returns

[`SelectFpr`](SelectFpr.md)

Defined in:  [generated/feature\_selection/SelectFpr.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L25)

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

Defined in:  [generated/feature\_selection/SelectFpr.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L94)

### fit()

Run score function on (X, y) and get the appropriate features.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The training input samples. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L111)

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

Defined in:  [generated/feature\_selection/SelectFpr.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L153)

### get\_feature\_names\_out()

Mask feature names according to selected features.

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

Defined in:  [generated/feature\_selection/SelectFpr.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L200)

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

Defined in:  [generated/feature\_selection/SelectFpr.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L238)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.indices?` | `boolean` | If `true`, the return value will be an array of integers, rather than a boolean mask.  `Default Value`  `false` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L273)

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

Defined in:  [generated/feature\_selection/SelectFpr.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L55)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L308)

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

Defined in:  [generated/feature\_selection/SelectFpr.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L343)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L376)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFpr.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFpr.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SelectFpr.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/SelectFpr.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/SelectFpr.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L480)

Defined in:  [generated/feature\_selection/SelectFpr.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L480)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L455)

Defined in:  [generated/feature\_selection/SelectFpr.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L455)

### pvalues\_

p-values of feature scores.

#### Signature

```ts
pvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L432)

Defined in:  [generated/feature\_selection/SelectFpr.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L432)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SelectFpr.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L42)

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

Defined in:  [generated/feature\_selection/SelectFpr.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L46)

Defined in:  [generated/feature\_selection/SelectFpr.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L42) [generated/feature\_selection/SelectFpr.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L46)

### scores\_

Scores of features.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SelectFpr.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L409)

Defined in:  [generated/feature\_selection/SelectFpr.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/feature_selection/SelectFpr.ts#L409)
