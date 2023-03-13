# KernelDensity

Kernel Density Estimation.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KernelDensity.html)

## Constructors

## constructor()

### Signature

```ts
new KernelDensity(opts?: KernelDensityOptions): KernelDensity;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `KernelDensityOptions` |

### Returns

[`KernelDensity`](KernelDensity.md)

Defined in:  [generated/neighbors/KernelDensity.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KernelDensity.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KernelDensity.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KernelDensity.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/KernelDensity.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/KernelDensity.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L17)

## Accessors

### bandwidth\_

Value of the bandwidth, given directly by the bandwidth parameter or estimated using the ‘scott’ or ‘silverman’ method.

#### Signature

```ts
bandwidth_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/KernelDensity.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L299)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/KernelDensity.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L274)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/KernelDensity.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L226)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KernelDensity.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L28)

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

Defined in: [generated/neighbors/KernelDensity.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L32)

### tree\_

The tree algorithm for fast generalized N-point problems.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/KernelDensity.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L251)

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

Defined in:  [generated/neighbors/KernelDensity.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L89)

### fit()

Fit the Kernel Density model on the data.

#### Signature

```ts
fit(opts: KernelDensityFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelDensityFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KernelDensity.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L106)

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

Defined in:  [generated/neighbors/KernelDensity.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L41)

### sample()

Generate random samples from the model.

Currently, this is implemented only for gaussian and tophat kernels.

#### Signature

```ts
sample(opts: KernelDensitySampleOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelDensitySampleOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neighbors/KernelDensity.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L140)

### score()

Compute the total log-likelihood under the model.

#### Signature

```ts
score(opts: KernelDensityScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelDensityScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/KernelDensity.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L168)

### score\_samples()

Compute the log-likelihood of each sample under the model.

#### Signature

```ts
score_samples(opts: KernelDensityScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelDensityScoreSamplesOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neighbors/KernelDensity.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/KernelDensity.ts#L196)
