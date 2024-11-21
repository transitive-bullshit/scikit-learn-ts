# Class: DotProduct

Dot-Product kernel.

The DotProduct kernel is non-stationary and can be obtained from linear regression by putting \\(N(0, 1)\\) priors on the coefficients of \\(x_d (d = 1, . . . , D)\\) and a prior of \\(N(0, \\sigma_0^2)\\) on the bias. The DotProduct kernel is invariant to a rotation of the coordinates about the origin, but not translations. It is parameterized by a parameter sigma_0 \\(\\sigma\\) which controls the inhomogenity of the kernel. For \\(\\sigma_0^2 =0\\), the kernel is called the homogeneous linear kernel, otherwise it is inhomogeneous. The kernel is given by

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.DotProduct.html)

## Constructors

### new DotProduct()

> **new DotProduct**(`opts`?): [`DotProduct`](DotProduct.md)

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sigma_0`?

</td>
<td>

`any`

</td>
<td>

Parameter controlling the inhomogenity of the kernel. If sigma_0=0, the kernel is homogeneous.

</td>
</tr>
<tr>
<td>

`opts.sigma_0_bounds`?

</td>
<td>

`"fixed"`

</td>
<td>

The lower and upper bound on ‘sigma_0’. If set to “fixed”, ‘sigma_0’ cannot be changed during hyperparameter tuning.

</td>
</tr>
</tbody>
</table>

**Returns** [`DotProduct`](DotProduct.md)

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/gaussian\_process/kernels/DotProduct.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/gaussian\_process/kernels/DotProduct.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/gaussian\_process/kernels/DotProduct.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L19) |
| `id` | `string` | `undefined` | [generated/gaussian\_process/kernels/DotProduct.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L16) |
| `opts` | `any` | `undefined` | [generated/gaussian\_process/kernels/DotProduct.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L17) |

## Accessors

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `void`

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L40)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<`ArrayLike`[]\>

Return the kernel k(X, Y) and optionally its gradient.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.eval_gradient`?

</td>
<td>

`boolean`

</td>
<td>

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Left argument of the returned kernel k(X, Y)

</td>
</tr>
<tr>
<td>

`opts.Y`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L109)

***

### clone\_with\_theta()

> **clone\_with\_theta**(`opts`): `Promise`\<`any`\>

Returns a clone of self with given hyperparameters theta.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.theta`?

</td>
<td>

`ArrayLike`

</td>
<td>

The hyperparameters

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L153)

***

### diag()

> **diag**(`opts`): `Promise`\<`ArrayLike`\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Left argument of the returned kernel k(X, Y).

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L187)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L92)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`void`\>

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L53)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/gaussian\_process/kernels/DotProduct.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L219)
