[**sklearn**](../README.md) • **Docs**

***

Exp-Sine-Squared kernel (aka periodic kernel).

The ExpSineSquared kernel allows one to model functions which repeat themselves exactly. It is parameterized by a length scale parameter \\(l>0\\) and a periodicity parameter \\(p>0\\). Only the isotropic variant where \\(l\\) is a scalar is supported at the moment. The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ExpSineSquared.html)

## Constructors

### new ExpSineSquared()

> **new ExpSineSquared**(`opts`?): [`ExpSineSquared`](ExpSineSquared.md)

#### Parameters

• **opts?**

• **opts.length\_scale?**: `any`

The length scale of the kernel.

**Default Value**

`1`

• **opts.length\_scale\_bounds?**: `"fixed"`

The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.

• **opts.periodicity?**: `any`

The periodicity of the kernel.

**Default Value**

`1`

• **opts.periodicity\_bounds?**: `"fixed"`

The lower and upper bound on ‘periodicity’. If set to “fixed”, ‘periodicity’ cannot be changed during hyperparameter tuning.

#### Returns

[`ExpSineSquared`](ExpSineSquared.md)

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L17)

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

[generated/gaussian\_process/kernels/ExpSineSquared.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L52)

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

[generated/gaussian\_process/kernels/ExpSineSquared.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L121)

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

[generated/gaussian\_process/kernels/ExpSineSquared.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L165)

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

[generated/gaussian\_process/kernels/ExpSineSquared.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L201)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L104)

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

[generated/gaussian\_process/kernels/ExpSineSquared.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L65)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/ExpSineSquared.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L233)
