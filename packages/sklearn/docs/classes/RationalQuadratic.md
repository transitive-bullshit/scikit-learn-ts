[**sklearn**](../README.md) • **Docs**

***

Rational Quadratic kernel.

The RationalQuadratic kernel can be seen as a scale mixture (an infinite sum) of RBF kernels with different characteristic length scales. It is parameterized by a length scale parameter \\(l>0\\) and a scale mixture parameter \\(\\alpha>0\\). Only the isotropic variant where length\_scale \\(l\\) is a scalar is supported at the moment. The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RationalQuadratic.html)

## Constructors

### new RationalQuadratic()

> **new RationalQuadratic**(`opts`?): [`RationalQuadratic`](RationalQuadratic.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `any`

Scale mixture parameter

**Default Value**

`1`

• **opts.alpha\_bounds?**: `"fixed"`

The lower and upper bound on ‘alpha’. If set to “fixed”, ‘alpha’ cannot be changed during hyperparameter tuning.

• **opts.length\_scale?**: `any`

The length scale of the kernel.

**Default Value**

`1`

• **opts.length\_scale\_bounds?**: `"fixed"`

The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.

#### Returns

[`RationalQuadratic`](RationalQuadratic.md)

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L17)

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

[generated/gaussian\_process/kernels/RationalQuadratic.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L52)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

• **opts**

• **opts.eval\_gradient?**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**Default Value**

`false`

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

• **opts.Y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L123)

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

[generated/gaussian\_process/kernels/RationalQuadratic.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L169)

***

### diag()

> **diag**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L207)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L106)

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

[generated/gaussian\_process/kernels/RationalQuadratic.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L65)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/RationalQuadratic.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L241)
