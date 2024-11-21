# Class: ConstantKernel

Constant kernel.

Can be used as part of a product-kernel where it scales the magnitude of the other factor (kernel) or as part of a sum-kernel, where it modifies the mean of the Gaussian process.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ConstantKernel.html)

## Constructors

### new ConstantKernel()

> **new ConstantKernel**(`opts`?): [`ConstantKernel`](ConstantKernel.md)

#### Parameters

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

`opts.constant_value`?

</td>
<td>

`number`

</td>
<td>

The constant value which defines the covariance: k(x_1, x_2) = constant_value

</td>
</tr>
<tr>
<td>

`opts.constant_value_bounds`?

</td>
<td>

`"fixed"`

</td>
<td>

The lower and upper bound on `constant_value`. If set to “fixed”, `constant_value` cannot be changed during hyperparameter tuning.

</td>
</tr>
</tbody>
</table>

#### Returns

[`ConstantKernel`](ConstantKernel.md)

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/gaussian\_process/kernels/ConstantKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/gaussian\_process/kernels/ConstantKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/gaussian\_process/kernels/ConstantKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L19) |
| `id` | `string` | `undefined` | [generated/gaussian\_process/kernels/ConstantKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L16) |
| `opts` | `any` | `undefined` | [generated/gaussian\_process/kernels/ConstantKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L17) |

## Accessors

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

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

##### Returns

`void`

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L40)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

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

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

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

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L109)

***

### clone\_with\_theta()

> **clone\_with\_theta**(`opts`): `Promise`\<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

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

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

The hyperparameters

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L153)

***

### diag()

> **diag**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

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

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Argument to the kernel.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L189)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L92)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

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

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L53)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

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

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/ConstantKernel.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L221)
