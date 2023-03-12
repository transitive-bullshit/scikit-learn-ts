# KNNImputer

Imputation for completing missing values using k-Nearest Neighbors.

Each sample’s missing values are imputed using the mean value from `n\_neighbors` nearest neighbors found in the training set. Two samples are close if the features that neither is missing are close.

Read more in the [User Guide](../impute.html#knnimpute).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.KNNImputer.html)

## Constructors

## constructor()

### Signature

```ts
new KNNImputer(opts?: KNNImputerOptions): KNNImputer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNNImputerOptions`](../interfaces/KNNImputerOptions.md) |

### Returns

[`KNNImputer`](KNNImputer.md)

Defined in:  [generated/impute/KNNImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/impute/KNNImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/impute/KNNImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/impute/KNNImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L21)

### id

> `string`

Defined in:  [generated/impute/KNNImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L18)

### opts

> `any`

Defined in:  [generated/impute/KNNImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/impute/KNNImputer.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L307)

Defined in:  [generated/impute/KNNImputer.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L307)

### indicator\_

Indicator used to add binary indicators for missing values. `undefined` if add\_indicator is `false`.

#### Signature

```ts
indicator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/KNNImputer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L259)

Defined in:  [generated/impute/KNNImputer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L259)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/impute/KNNImputer.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L282)

Defined in:  [generated/impute/KNNImputer.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L282)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/impute/KNNImputer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L30)

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

Defined in:  [generated/impute/KNNImputer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L34)

Defined in:  [generated/impute/KNNImputer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L30) [generated/impute/KNNImputer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L34)

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

Defined in:  [generated/impute/KNNImputer.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L89)

### fit()

Fit the imputer on X.

#### Signature

```ts
fit(opts: KNNImputerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerFitOptions`](../interfaces/KNNImputerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/KNNImputer.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L106)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: KNNImputerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerFitTransformOptions`](../interfaces/KNNImputerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/impute/KNNImputer.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L136)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: KNNImputerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerGetFeatureNamesOutOptions`](../interfaces/KNNImputerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/KNNImputer.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L168)

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

Defined in:  [generated/impute/KNNImputer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L43)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: KNNImputerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerSetOutputOptions`](../interfaces/KNNImputerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/KNNImputer.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L203)

### transform()

Impute all missing values in X.

#### Signature

```ts
transform(opts: KNNImputerTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNNImputerTransformOptions`](../interfaces/KNNImputerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/impute/KNNImputer.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/impute/KNNImputer.ts#L231)
