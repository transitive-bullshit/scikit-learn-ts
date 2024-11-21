# Class: CompoundKernel

Kernel which is composed of a set of other kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.CompoundKernel.html)

## Constructors

### new CompoundKernel()

> **new CompoundKernel**(`opts`?): [`CompoundKernel`](CompoundKernel.md)

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

`opts.kernels`?

</td>
<td>

`any`

</td>
<td>

The other kernels

</td>
</tr>
</tbody>
</table>

**Returns** [`CompoundKernel`](CompoundKernel.md)

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L21)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/gaussian\_process/kernels/CompoundKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L19) |
| `_isInitialized` | `boolean` | `false` | [generated/gaussian\_process/kernels/CompoundKernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L18) |
| `_py` | `PythonBridge` | `undefined` | [generated/gaussian\_process/kernels/CompoundKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L17) |
| `id` | `string` | `undefined` | [generated/gaussian\_process/kernels/CompoundKernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L14) |
| `opts` | `any` | `undefined` | [generated/gaussian\_process/kernels/CompoundKernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L15) |

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

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L31)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<`ArrayLike`[][]\>

Return the kernel k(X, Y) and optionally its gradient.

Note that this compound kernel returns the results of all simple kernel stacked along an additional axis.

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

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.

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

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[][]\>

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L102)

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

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L146)

***

### diag()

> **diag**(`opts`): `Promise`\<`ArrayLike`[]\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.

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

Argument to the kernel.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L182)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L83)

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

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L44)

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

**Defined in** [generated/gaussian\_process/kernels/CompoundKernel.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L214)
