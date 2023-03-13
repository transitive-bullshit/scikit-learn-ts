# GaussianRandomProjection

Reduce dimensionality through Gaussian random projection.

The components of the random matrix are drawn from N(0, 1 / n\_components).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.GaussianRandomProjection.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianRandomProjection(opts?: GaussianRandomProjectionOptions): GaussianRandomProjection;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `GaussianRandomProjectionOptions` |

### Returns

[`GaussianRandomProjection`](GaussianRandomProjection.md)

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L21)

### id

> `string`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L18)

### opts

> `any`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L19)

## Accessors

### components\_

Random matrix used for the projection.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L350)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L431)

### inverse\_components\_

Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.

#### Signature

```ts
inverse_components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L377)

### n\_components\_

Concrete number of components computed when n\_components=”auto”.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L323)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L404)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L30)

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

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L34)

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

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L89)

### fit()

Generate a sparse random projection matrix.

#### Signature

```ts
fit(opts: GaussianRandomProjectionFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianRandomProjectionFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L106)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: GaussianRandomProjectionFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianRandomProjectionFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L138)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: GaussianRandomProjectionGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianRandomProjectionGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L179)

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

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L43)

### inverse\_transform()

Project data back to its original space.

Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.

#### Signature

```ts
inverse_transform(opts: GaussianRandomProjectionInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianRandomProjectionInverseTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L218)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: GaussianRandomProjectionSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianRandomProjectionSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L255)

### transform()

Project the data by using matrix product with the random matrix.

#### Signature

```ts
transform(opts: GaussianRandomProjectionTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianRandomProjectionTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L289)
