# SplineTransformer

Generate univariate B-spline bases for features.

Generate a new feature matrix consisting of `n\_splines=n\_knots + degree \- 1` (`n\_knots \- 1` for `extrapolation="periodic"`) spline basis functions (B-splines) of polynomial order=`degree` for each feature.

Read more in the [User Guide](../preprocessing.html#spline-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.SplineTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new SplineTransformer(opts?: SplineTransformerOptions): SplineTransformer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SplineTransformerOptions`](../interfaces/SplineTransformerOptions.md) |

### Returns

[`SplineTransformer`](SplineTransformer.md)

Defined in:  [generated/preprocessing/SplineTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/SplineTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/SplineTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/SplineTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/SplineTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/SplineTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L19)

## Accessors

### bsplines\_

List of BSplines objects, one for each feature.

#### Signature

```ts
bsplines_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/preprocessing/SplineTransformer.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L279)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/SplineTransformer.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L333)

### n\_features\_in\_

The total number of input features.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/SplineTransformer.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L306)

### n\_features\_out\_

The total number of output features, which is computed as `n\_features \* n\_splines`, where `n\_splines` is the number of bases elements of the B-splines, `n\_knots + degree \- 1` for non-periodic splines and `n\_knots \- 1` for periodic ones. If `include\_bias=False`, then it is only `n\_features \* (n\_splines \- 1)`.

#### Signature

```ts
n_features_out_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/SplineTransformer.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L360)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/SplineTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L30)

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

Defined in: [generated/preprocessing/SplineTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L34)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L91)

### fit()

Compute knot positions of splines.

#### Signature

```ts
fit(opts: SplineTransformerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerFitOptions`](../interfaces/SplineTransformerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/SplineTransformer.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L108)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SplineTransformerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerFitTransformOptions`](../interfaces/SplineTransformerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/SplineTransformer.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L144)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: SplineTransformerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerGetFeatureNamesOutOptions`](../interfaces/SplineTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/SplineTransformer.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L182)

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

Defined in:  [generated/preprocessing/SplineTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L43)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: SplineTransformerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerSetOutputOptions`](../interfaces/SplineTransformerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/SplineTransformer.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L219)

### transform()

Transform each feature data to B-splines.

#### Signature

```ts
transform(opts: SplineTransformerTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SplineTransformerTransformOptions`](../interfaces/SplineTransformerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/SplineTransformer.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L249)
