# ExpSineSquared

Exp-Sine-Squared kernel (aka periodic kernel).

The ExpSineSquared kernel allows one to model functions which repeat themselves exactly. It is parameterized by a length scale parameter \\(l>0\\) and a periodicity parameter \\(p>0\\). Only the isotropic variant where \\(l\\) is a scalar is supported at the moment. The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ExpSineSquared.html)

## Constructors

## constructor()

### Signature

```ts
new ExpSineSquared(opts?: ExpSineSquaredOptions): ExpSineSquared;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExpSineSquaredOptions`](../interfaces/ExpSineSquaredOptions.md) |

### Returns

[`ExpSineSquared`](ExpSineSquared.md)

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L17)

## Accessors

### hyperparameter\_periodicity

#### Signature

```ts
hyperparameter_periodicity(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L220)

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L220)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L28)

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

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L32)

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L28) [generated/gaussian\_process/kernels/ExpSineSquared.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L32)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

#### Signature

```ts
__call__(opts: ExpSineSquaredCallOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredCallOptions`](../interfaces/ExpSineSquaredCallOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L102)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: ExpSineSquaredCloneWithThetaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredCloneWithThetaOptions`](../interfaces/ExpSineSquaredCloneWithThetaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L134)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: ExpSineSquaredDiagOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredDiagOptions`](../interfaces/ExpSineSquaredDiagOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L169)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L85)

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

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L41)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: ExpSineSquaredIsStationaryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredIsStationaryOptions`](../interfaces/ExpSineSquaredIsStationaryOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L197)
