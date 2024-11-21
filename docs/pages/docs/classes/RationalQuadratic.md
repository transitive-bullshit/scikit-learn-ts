# Class: RationalQuadratic

Rational Quadratic kernel.

The RationalQuadratic kernel can be seen as a scale mixture (an infinite sum) of RBF kernels with different characteristic length scales. It is parameterized by a length scale parameter \\(l>0\\) and a scale mixture parameter \\(\\alpha>0\\). Only the isotropic variant where length_scale \\(l\\) is a scalar is supported at the moment. The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RationalQuadratic.html)

## Constructors

### new RationalQuadratic()

> **new RationalQuadratic**(`opts`?): [`RationalQuadratic`](RationalQuadratic.md)

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

`opts.alpha`?

</td>
<td>

`any`

</td>
<td>

Scale mixture parameter

</td>
</tr>
<tr>
<td>

`opts.alpha_bounds`?

</td>
<td>

`"fixed"`

</td>
<td>

The lower and upper bound on ‘alpha’. If set to “fixed”, ‘alpha’ cannot be changed during hyperparameter tuning.

</td>
</tr>
<tr>
<td>

`opts.length_scale`?

</td>
<td>

`any`

</td>
<td>

The length scale of the kernel.

</td>
</tr>
<tr>
<td>

`opts.length_scale_bounds`?

</td>
<td>

`"fixed"`

</td>
<td>

The lower and upper bound on ‘length_scale’. If set to “fixed”, ‘length_scale’ cannot be changed during hyperparameter tuning.

</td>
</tr>
</tbody>
</table>

**Returns** [`RationalQuadratic`](RationalQuadratic.md)

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/gaussian\_process/kernels/RationalQuadratic.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/gaussian\_process/kernels/RationalQuadratic.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/gaussian\_process/kernels/RationalQuadratic.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L19) |
| `id` | `string` | `undefined` | [generated/gaussian\_process/kernels/RationalQuadratic.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L16) |
| `opts` | `any` | `undefined` | [generated/gaussian\_process/kernels/RationalQuadratic.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L17) |

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

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L52)

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

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L123)

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

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L169)

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

Left argument of the returned kernel k(X, Y)

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L207)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L106)

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

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L65)

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

**Defined in** [generated/gaussian\_process/kernels/RationalQuadratic.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L241)
