# SelectPercentile

Select features according to a percentile of the highest scores.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectPercentile.html)

## Constructors

## constructor()

### Signature

```ts
new SelectPercentile(opts?: SelectPercentileOptions): SelectPercentile;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `SelectPercentileOptions` |

### Returns

[`SelectPercentile`](SelectPercentile.md)

Defined in:  [generated/feature\_selection/SelectPercentile.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectPercentile.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectPercentile.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SelectPercentile.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L19)

### id

> `string`

Defined in:  [generated/feature\_selection/SelectPercentile.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L16)

### opts

> `any`

Defined in:  [generated/feature\_selection/SelectPercentile.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectPercentile.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L414)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/SelectPercentile.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L387)

### pvalues\_

p-values of feature scores, `undefined` if `score\_func` returned only scores.

#### Signature

```ts
pvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectPercentile.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L360)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SelectPercentile.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L28)

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

Defined in: [generated/feature\_selection/SelectPercentile.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L32)

### scores\_

Scores of features.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectPercentile.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L333)

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

Defined in:  [generated/feature\_selection/SelectPercentile.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L83)

### fit()

Run score function on (X, y) and get the appropriate features.

#### Signature

```ts
fit(opts: SelectPercentileFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectPercentileFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectPercentile.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L100)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SelectPercentileFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectPercentileFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SelectPercentile.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L134)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: SelectPercentileGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectPercentileGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectPercentile.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L172)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: SelectPercentileGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectPercentileGetSupportOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectPercentile.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L207)

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

Defined in:  [generated/feature\_selection/SelectPercentile.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L41)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: SelectPercentileInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectPercentileInverseTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectPercentile.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L237)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: SelectPercentileSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectPercentileSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectPercentile.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L273)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: SelectPercentileTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectPercentileTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectPercentile.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectPercentile.ts#L303)
