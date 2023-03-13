# MaxAbsScaler

Scale each feature by its maximum absolute value.

This estimator scales and translates each feature individually such that the maximal absolute value of each feature in the training set will be 1.0. It does not shift/center the data, and thus does not destroy any sparsity.

This scaler can also be applied to sparse CSR or CSC matrices.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MaxAbsScaler.html)

## Constructors

## constructor()

### Signature

```ts
new MaxAbsScaler(opts?: object): MaxAbsScaler;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Set to `false` to perform inplace scaling and avoid a copy (if the input is already a numpy array).  `Default Value`  `true` |

### Returns

[`MaxAbsScaler`](MaxAbsScaler.md)

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L25)

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

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L90)

### fit()

Compute the maximum absolute value to be used for later scaling.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to compute the per-feature minimum and maximum used for later scaling along the features axis. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L107)

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

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L147)

### get\_feature\_names\_out()

Get output feature names for transformation.

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

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L194)

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

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L50)

### inverse\_transform()

Scale back the data to the original representation.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data that should be transformed back. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L230)

### partial\_fit()

Online computation of max absolute value of X for later scaling.

All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MaxAbsScaler.fit "sklearn.preprocessing.MaxAbsScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data used to compute the mean and standard deviation used for later scaling along the features axis. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L267)

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

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L307)

### transform()

Scale the data.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data that should be scaled. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L340)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L444)

### max\_abs\_

Per feature maximum absolute value.

#### Signature

```ts
max_abs_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L396)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L419)

### n\_samples\_seen\_

The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.

#### Signature

```ts
n_samples_seen_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L469)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/MaxAbsScaler.ts:37](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L37)

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

Defined in: [generated/preprocessing/MaxAbsScaler.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L41)

### scale\_

Per feature relative scaling of the data.

#### Signature

```ts
scale_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/MaxAbsScaler.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/MaxAbsScaler.ts#L373)
