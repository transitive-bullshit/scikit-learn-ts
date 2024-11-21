[**sklearn**](../README.md) • **Docs**

***

The Exponentiation kernel takes one base kernel and a scalar parameter \\(p\\) and combines them via

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Exponentiation.html)

## Constructors

### new Exponentiation()

> **new Exponentiation**(`opts`?): [`Exponentiation`](Exponentiation.md)

#### Parameters

• **opts?**

• **opts.exponent?**: `number`

The exponent for the base kernel

• **opts.kernel?**: `any`

The base kernel

#### Returns

[`Exponentiation`](Exponentiation.md)

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L21)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L19)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L18)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L17)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L14)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L15)

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

[generated/gaussian\_process/kernels/Exponentiation.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L36)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return the kernel k(X, Y) and optionally its gradient.

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

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L105)

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

[generated/gaussian\_process/kernels/Exponentiation.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L149)

***

### diag()

> **diag**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Argument to the kernel.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L185)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L88)

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

[generated/gaussian\_process/kernels/Exponentiation.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L49)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/Exponentiation.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Exponentiation.ts#L217)
