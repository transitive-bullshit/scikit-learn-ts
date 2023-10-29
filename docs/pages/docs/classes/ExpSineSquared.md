# ExpSineSquared

Exp-Sine-Squared kernel (aka periodic kernel).

The ExpSineSquared kernel allows one to model functions which repeat themselves exactly. It is parameterized by a length scale parameter \\(l>0\\) and a periodicity parameter \\(p>0\\). Only the isotropic variant where \\(l\\) is a scalar is supported at the moment. The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ExpSineSquared.html)

## Constructors

## constructor()

### Signature

```ts
new ExpSineSquared(opts?: object): ExpSineSquared;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.length_scale?` | `any` | The length scale of the kernel.  `Default Value`  `1` |
| `opts.length_scale_bounds?` | `"fixed"` | The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning. |
| `opts.periodicity?` | `any` | The periodicity of the kernel.  `Default Value`  `1` |
| `opts.periodicity_bounds?` | `"fixed"` | The lower and upper bound on ‘periodicity’. If set to “fixed”, ‘periodicity’ cannot be changed during hyperparameter tuning. |

### Returns

[`ExpSineSquared`](ExpSineSquared.md)

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L23)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

#### Signature

```ts
__call__(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Left argument of the returned kernel k(X, Y) |
| `opts.Y?` | `ArrayLike`[] | Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead. |
| `opts.eval_gradient?` | `boolean` | Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.  `Default Value`  `false` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L126)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.theta?` | `ArrayLike` | The hyperparameters |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L175)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Left argument of the returned kernel k(X, Y) |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L213)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L109)

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

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L65)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L246)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L17)

## Accessors

### hyperparameter\_periodicity

#### Signature

```ts
hyperparameter_periodicity(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/kernels/ExpSineSquared.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L269)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L52)

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

Defined in: [generated/gaussian\_process/kernels/ExpSineSquared.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L56)
