# PLSSVD

Partial Least Square SVD.

This transformer simply performs a SVD on the cross-covariance matrix `X'Y`. It is able to project both the training data `X` and the targets `Y`. The training data `X` is projected on the left singular vectors, while the targets are projected on the right singular vectors.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSSVD.html)

## Constructors

## constructor()

### Signature

```ts
new PLSSVD(opts?: PLSSVDOptions): PLSSVD;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PLSSVDOptions`](../interfaces/PLSSVDOptions.md) |

### Returns

[`PLSSVD`](PLSSVD.md)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L21)

### id

> `string`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L18)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L322)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L322)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L299)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L299)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L30)

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

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L34)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L30) [generated/cross\_decomposition/PLSSVD.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L34)

### x\_weights\_

The left singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L253)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L253)

### y\_weights\_

The right singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").

#### Signature

```ts
y_weights_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L276)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L276)

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

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L84)

### fit()

Fit model to data.

#### Signature

```ts
fit(opts: PLSSVDFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDFitOptions`](../interfaces/PLSSVDFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L101)

### fit\_transform()

Learn and apply the dimensionality reduction.

#### Signature

```ts
fit_transform(opts: PLSSVDFitTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDFitTransformOptions`](../interfaces/PLSSVDFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L131)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: PLSSVDGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDGetFeatureNamesOutOptions`](../interfaces/PLSSVDGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L163)

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

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L43)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: PLSSVDSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDSetOutputOptions`](../interfaces/PLSSVDSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L195)

### transform()

Apply the dimensionality reduction.

#### Signature

```ts
transform(opts: PLSSVDTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSSVDTransformOptions`](../interfaces/PLSSVDTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L223)
