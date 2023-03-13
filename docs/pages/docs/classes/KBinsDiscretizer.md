# KBinsDiscretizer

Bin continuous data into intervals.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KBinsDiscretizer.html)

## Constructors

## constructor()

### Signature

```ts
new KBinsDiscretizer(opts?: KBinsDiscretizerOptions): KBinsDiscretizer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `KBinsDiscretizerOptions` |

### Returns

[`KBinsDiscretizer`](KBinsDiscretizer.md)

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L17)

## Accessors

### bin\_edges\_

The edges of each bin. Contain arrays of varying shapes `(n\_bins\_, )` Ignored features will have empty arrays.

#### Signature

```ts
bin_edges_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L310)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L391)

### n\_bins\_

Number of bins per feature. Bins whose width are too small (i.e., <= 1e-8) are removed with a warning.

#### Signature

```ts
n_bins_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L337)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L364)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L28)

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

Defined in: [generated/preprocessing/KBinsDiscretizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L32)

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

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L89)

### fit()

Fit the estimator.

#### Signature

```ts
fit(opts: KBinsDiscretizerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KBinsDiscretizerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L106)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: KBinsDiscretizerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KBinsDiscretizerFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L138)

### get\_feature\_names\_out()

Get output feature names.

#### Signature

```ts
get_feature_names_out(opts: KBinsDiscretizerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KBinsDiscretizerGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L176)

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

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L41)

### inverse\_transform()

Transform discretized data back to original feature space.

Note that this function does not regenerate the original data due to discretization rounding.

#### Signature

```ts
inverse_transform(opts: KBinsDiscretizerInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KBinsDiscretizerInverseTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L213)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: KBinsDiscretizerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KBinsDiscretizerSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L250)

### transform()

Discretize the data.

#### Signature

```ts
transform(opts: KBinsDiscretizerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KBinsDiscretizerTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/KBinsDiscretizer.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/KBinsDiscretizer.ts#L280)
