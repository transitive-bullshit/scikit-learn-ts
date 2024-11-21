**sklearn** • **Docs**

***

Base class for all kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Kernel.html)

## Constructors

### new Kernel()

> **new Kernel**(`opts`?): [`Kernel`](Kernel.md)

#### Parameters

• **opts?**

• **opts.bounds?**: `ArrayLike`[]

The log-transformed bounds on the kernel’s hyperparameters theta

#### Returns

[`Kernel`](Kernel.md)

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L21)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L19)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L18)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L17)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L14)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L15)

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

[generated/gaussian\_process/kernels/Kernel.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L31)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<`any`\>

Evaluate the kernel.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L99)

***

### clone\_with\_theta()

> **clone\_with\_theta**(`opts`): `Promise`\<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

• **opts**

• **opts.theta?**: `ArrayLike`

The hyperparameters

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L125)

***

### diag()

> **diag**(`opts`): `Promise`\<`ArrayLike`\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Left argument of the returned kernel k(X, Y)

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L159)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L82)

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

[generated/gaussian\_process/kernels/Kernel.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L44)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/Kernel.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L191)
