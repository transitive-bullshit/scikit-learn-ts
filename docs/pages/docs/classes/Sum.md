# Sum

The `Sum` kernel takes two kernels \\(k\_1\\) and \\(k\_2\\) and combines them via

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Sum.html)

## Constructors

## constructor()

### Signature

```ts
new Sum(opts?: SumOptions): Sum;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SumOptions`](../interfaces/SumOptions.md) |

### Returns

[`Sum`](Sum.md)

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L17)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L14)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L15)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L26)

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

Defined in: [generated/gaussian\_process/kernels/Sum.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L30)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

#### Signature

```ts
__call__(opts: SumCallOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumCallOptions`](../interfaces/SumCallOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L95)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: SumCloneWithThetaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumCloneWithThetaOptions`](../interfaces/SumCloneWithThetaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L127)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: SumDiagOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumDiagOptions`](../interfaces/SumDiagOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L157)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L78)

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

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L39)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: SumIsStationaryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumIsStationaryOptions`](../interfaces/SumIsStationaryOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Sum.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L184)
