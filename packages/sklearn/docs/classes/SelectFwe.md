# SelectFwe

Filter: Select the p-values corresponding to Family-wise error rate.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFwe.html)

## Constructors

## constructor()

### Signature

```ts
new SelectFwe(opts?: SelectFweOptions): SelectFwe;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelectFweOptions`](../interfaces/SelectFweOptions.md) |

### Returns

[`SelectFwe`](SelectFwe.md)

Defined in:  [generated/feature\_selection/SelectFwe.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFwe.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFwe.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SelectFwe.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L19)

### id

> `string`

Defined in:  [generated/feature\_selection/SelectFwe.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L16)

### opts

> `any`

Defined in:  [generated/feature\_selection/SelectFwe.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L381)

Defined in:  [generated/feature\_selection/SelectFwe.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L381)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L356)

Defined in:  [generated/feature\_selection/SelectFwe.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L356)

### pvalues\_

p-values of feature scores.

#### Signature

```ts
pvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L333)

Defined in:  [generated/feature\_selection/SelectFwe.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L333)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SelectFwe.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L28)

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

Defined in:  [generated/feature\_selection/SelectFwe.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L32)

Defined in:  [generated/feature\_selection/SelectFwe.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L28) [generated/feature\_selection/SelectFwe.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L32)

### scores\_

Scores of features.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L310)

Defined in:  [generated/feature\_selection/SelectFwe.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L310)

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

Defined in:  [generated/feature\_selection/SelectFwe.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L80)

### fit()

Run score function on (X, y) and get the appropriate features.

#### Signature

```ts
fit(opts: SelectFweFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFweFitOptions`](../interfaces/SelectFweFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L97)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SelectFweFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFweFitTransformOptions`](../interfaces/SelectFweFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L129)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: SelectFweGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFweGetFeatureNamesOutOptions`](../interfaces/SelectFweGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L161)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: SelectFweGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFweGetSupportOptions`](../interfaces/SelectFweGetSupportOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L194)

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

Defined in:  [generated/feature\_selection/SelectFwe.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L41)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: SelectFweInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFweInverseTransformOptions`](../interfaces/SelectFweInverseTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L222)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: SelectFweSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFweSetOutputOptions`](../interfaces/SelectFweSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L254)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: SelectFweTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelectFweTransformOptions`](../interfaces/SelectFweTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFwe.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectFwe.ts#L282)
