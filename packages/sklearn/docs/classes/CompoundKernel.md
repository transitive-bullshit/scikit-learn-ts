[**sklearn**](../README.md) • **Docs**

***

Kernel which is composed of a set of other kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.CompoundKernel.html)

## Constructors

### new CompoundKernel()

> **new CompoundKernel**(`opts`?): [`CompoundKernel`](CompoundKernel.md)

#### Parameters

• **opts?**

• **opts.kernels?**: `any`

The other kernels

#### Returns

[`CompoundKernel`](CompoundKernel.md)

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L21)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L19)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L18)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L17)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L14)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L15)

## Accessors

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L31)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[][]\>

Return the kernel k(X, Y) and optionally its gradient.

Note that this compound kernel returns the results of all simple kernel stacked along an additional axis.

#### Parameters

• **opts**

• **opts.eval\_gradient?**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.

**Default Value**

`false`

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

• **opts.Y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[][]\>

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L102)

***

### clone\_with\_theta()

> **clone\_with\_theta**(`opts`): `Promise`\<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

• **opts**

• **opts.theta?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The hyperparameters

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L146)

***

### diag()

> **diag**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Argument to the kernel.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L182)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L83)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L44)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/CompoundKernel.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L214)
