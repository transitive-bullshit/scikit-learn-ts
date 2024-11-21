**sklearn** • **Docs**

***

Matern kernel.

The class of Matern kernels is a generalization of the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF"). It has an additional parameter \\(\\nu\\) which controls the smoothness of the resulting function. The smaller \\(\\nu\\), the less smooth the approximated function is. As \\(\\nu\\rightarrow\\infty\\), the kernel becomes equivalent to the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF") kernel. When \\(\\nu = 1/2\\), the Matérn kernel becomes identical to the absolute exponential kernel. Important intermediate values are \\(\\nu=1.5\\) (once differentiable functions) and \\(\\nu=2.5\\) (twice differentiable functions).

The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Matern.html)

## Constructors

### new Matern()

> **new Matern**(`opts`?): [`Matern`](Matern.md)

#### Parameters

• **opts?**

• **opts.length\_scale?**: `number` \| `ArrayLike`

The length scale of the kernel. If a float, an isotropic kernel is used. If an array, an anisotropic kernel is used where each dimension of l defines the length-scale of the respective feature dimension.

**Default Value**

`1`

• **opts.length\_scale\_bounds?**: `"fixed"`

The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.

• **opts.nu?**: `number`

The parameter nu controlling the smoothness of the learned function. The smaller nu, the less smooth the approximated function is. For nu=inf, the kernel becomes equivalent to the RBF kernel and for nu=0.5 to the absolute exponential kernel. Important intermediate values are nu=1.5 (once differentiable functions) and nu=2.5 (twice differentiable functions). Note that values of nu not in \[0.5, 1.5, 2.5, inf\] incur a considerably higher computational cost (appr. 10 times higher) since they require to evaluate the modified Bessel function. Furthermore, in contrast to l, nu is kept fixed to its initial value and not optimized.

**Default Value**

`1.5`

#### Returns

[`Matern`](Matern.md)

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L19)

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

[generated/gaussian\_process/kernels/Matern.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L49)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<`ArrayLike`[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

• **opts**

• **opts.eval\_gradient?**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**Default Value**

`false`

• **opts.X?**: `ArrayLike`[]

Left argument of the returned kernel k(X, Y)

• **opts.Y?**: `ArrayLike`[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L117)

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

[generated/gaussian\_process/kernels/Matern.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L161)

***

### diag()

> **diag**(`opts`): `Promise`\<`ArrayLike`\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Left argument of the returned kernel k(X, Y)

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L195)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L100)

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

[generated/gaussian\_process/kernels/Matern.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L62)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/Matern.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L227)
