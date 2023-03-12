# FastICA

FastICA: a fast algorithm for Independent Component Analysis.

The implementation is based on [\[1\]](#r44c805292efc-1).

Read more in the [User Guide](../decomposition.html#ica).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FastICA.html)

## Constructors

## constructor()

### Signature

```ts
new FastICA(opts?: FastICAOptions): FastICA;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FastICAOptions`](../interfaces/FastICAOptions.md) |

### Returns

[`FastICA`](FastICA.md)

Defined in:  [generated/decomposition/FastICA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/FastICA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/FastICA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/FastICA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/FastICA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/FastICA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L19)

## Accessors

### components\_

The linear operator to apply to the data to get the independent sources. This is equal to the unmixing matrix when `whiten` is `false`, and equal to `np.dot(unmixing\_matrix, self.whitening\_)` when `whiten` is `true`.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/decomposition/FastICA.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L289)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/decomposition/FastICA.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L382)

### mean\_

The mean over features. Only set if `self.whiten` is `true`.

#### Signature

```ts
mean_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/decomposition/FastICA.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L335)

### mixing\_

The pseudo-inverse of `components\_`. It is the linear operator that maps independent sources to the data.

#### Signature

```ts
mixing_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/decomposition/FastICA.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L312)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/FastICA.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L357)

### n\_iter\_

If the algorithm is “deflation”, n\_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/FastICA.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L407)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/FastICA.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L30)

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

Defined in: [generated/decomposition/FastICA.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L34)

### whitening\_

Only set if whiten is ‘`true`’. This is the pre-whitening matrix that projects data onto the first `n\_components` principal components.

#### Signature

```ts
whitening_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/decomposition/FastICA.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L430)

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

Defined in:  [generated/decomposition/FastICA.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L92)

### fit()

Fit the model to X.

#### Signature

```ts
fit(opts: FastICAFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAFitOptions`](../interfaces/FastICAFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FastICA.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L109)

### fit\_transform()

Fit the model and recover the sources from X.

#### Signature

```ts
fit_transform(opts: FastICAFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAFitTransformOptions`](../interfaces/FastICAFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/FastICA.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L137)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: FastICAGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAGetFeatureNamesOutOptions`](../interfaces/FastICAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FastICA.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L167)

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

Defined in:  [generated/decomposition/FastICA.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L43)

### inverse\_transform()

Transform the sources back to the mixed data (apply mixing matrix).

#### Signature

```ts
inverse_transform(opts: FastICAInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICAInverseTransformOptions`](../interfaces/FastICAInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/FastICA.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L197)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: FastICASetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICASetOutputOptions`](../interfaces/FastICASetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FastICA.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L231)

### transform()

Recover the sources from X (apply the unmixing matrix).

#### Signature

```ts
transform(opts: FastICATransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FastICATransformOptions`](../interfaces/FastICATransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/FastICA.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/FastICA.ts#L259)
