# SelectKBest

Select features according to the k highest scores.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectKBest.html)

## Constructors

## constructor()

### Signature

```ts
new SelectKBest(opts?: object): SelectKBest;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.k?` | `number` \| `"all"` | Number of top features to select. The “all” option bypasses selection, for use in a parameter search.  `Default Value`  `10` |
| `opts.score_func?` | `any` | Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues) or a single array with scores. Default is f\_classif (see below “See Also”). The default function only works with classification tasks. |

### Returns

[`SelectKBest`](SelectKBest.md)

Defined in:  [generated/feature\_selection/SelectKBest.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L23)

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L93)

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
| `opts.X?` | `ArrayLike`[] | The training input samples. |
| `opts.y?` | `ArrayLike` | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectKBest.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L110)

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
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SelectKBest.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L152)

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L199)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L237)

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L272)

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L53)

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L307)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L342)

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

Defined in:  [generated/feature\_selection/SelectKBest.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L375)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectKBest.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectKBest.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SelectKBest.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L19)

### id

> `string`

Defined in:  [generated/feature\_selection/SelectKBest.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L16)

### opts

> `any`

Defined in:  [generated/feature\_selection/SelectKBest.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectKBest.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L479)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/SelectKBest.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L454)

### pvalues\_

p-values of feature scores, `undefined` if `score\_func` returned only scores.

#### Signature

```ts
pvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectKBest.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L431)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SelectKBest.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L40)

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

Defined in: [generated/feature\_selection/SelectKBest.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L44)

### scores\_

Scores of features.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectKBest.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/SelectKBest.ts#L408)
