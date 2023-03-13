# Matern

Matern kernel.

The class of Matern kernels is a generalization of the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF"). It has an additional parameter \\(\\nu\\) which controls the smoothness of the resulting function. The smaller \\(\\nu\\), the less smooth the approximated function is. As \\(\\nu\\rightarrow\\infty\\), the kernel becomes equivalent to the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF") kernel. When \\(\\nu = 1/2\\), the Matérn kernel becomes identical to the absolute exponential kernel. Important intermediate values are \\(\\nu=1.5\\) (once differentiable functions) and \\(\\nu=2.5\\) (twice differentiable functions).

The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Matern.html)

## Constructors

## constructor()

### Signature

```ts
new Matern(opts?: MaternOptions): Matern;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MaternOptions` |

### Returns

[`Matern`](Matern.md)

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L21)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L18)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L19)

## Accessors

### anisotropic

#### Signature

```ts
anisotropic(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/kernels/Matern.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L216)

### hyperparameter\_length\_scale

#### Signature

```ts
hyperparameter_length_scale(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/kernels/Matern.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L236)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L30)

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

Defined in: [generated/gaussian\_process/kernels/Matern.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L34)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

#### Signature

```ts
__call__(opts: MaternCallOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaternCallOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L103)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: MaternCloneWithThetaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaternCloneWithThetaOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L135)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: MaternDiagOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaternDiagOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L165)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L86)

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

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L43)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: MaternIsStationaryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MaternIsStationaryOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Matern.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L193)
