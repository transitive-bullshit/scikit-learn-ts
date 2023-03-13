# MaxAbsScaler

Scale each feature by its maximum absolute value.

This estimator scales and translates each feature individually such that the maximal absolute value of each feature in the training set will be 1.0. It does not shift/center the data, and thus does not destroy any sparsity.

This scaler can also be applied to sparse CSR or CSC matrices.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MaxAbsScaler.html)

## Constructors

## constructor()

### Signature

```ts
new MaxAbsScaler(opts?: MaxAbsScalerOptions): MaxAbsScaler;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MaxAbsScalerOptions` |

### Returns

[`MaxAbsScaler`](MaxAbsScaler.md)

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L388)

### max\_abs\_

Per feature maximum absolute value.

#### Signature

```ts
max_abs_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L340)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L363)

### n\_samples\_seen\_

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L413)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L30)

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

Defined in: [generated/preprocessing/MaxAbsScaler.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L34)

### scale\_

Per feature relative scaling of the data.

#### Signature

```ts
scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L317)

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

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L83)

### fit()

Compute the maximum absolute value to be used for later scaling.

#### Signature

```ts
fit(opts: MaxAbsScalerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaxAbsScalerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L100)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: MaxAbsScalerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaxAbsScalerFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L130)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: MaxAbsScalerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaxAbsScalerGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L162)

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

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L43)

### inverse\_transform()

Scale back the data to the original representation.

#### Signature

```ts
inverse_transform(opts: MaxAbsScalerInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaxAbsScalerInverseTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L195)

### partial\_fit()

Online computation of max absolute value of X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MaxAbsScaler.fit "sklearn.preprocessing.MaxAbsScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

#### Signature

```ts
partial_fit(opts: MaxAbsScalerPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaxAbsScalerPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L229)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: MaxAbsScalerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaxAbsScalerSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L259)

### transform()

Scale the data.

#### Signature

```ts
transform(opts: MaxAbsScalerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaxAbsScalerTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L287)
