# Class: Hyperparameter

A kernel hyperparameter’s specification in form of a namedtuple.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Hyperparameter.html)

## Constructors

### new Hyperparameter()

> **new Hyperparameter**(`opts`?): [`Hyperparameter`](Hyperparameter.md)

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

`opts.bounds`?

</td>
<td>

`"fixed"`

</td>
<td>

The lower and upper bound on the parameter. If n_elements>1, a pair of 1d array with n_elements each may be given alternatively. If the string “fixed” is passed as bounds, the hyperparameter’s value cannot be changed.

</td>
</tr>
<tr>
<td>

`opts.fixed`?

</td>
<td>

`boolean`

</td>
<td>

Whether the value of this hyperparameter is fixed, i.e., cannot be changed during hyperparameter tuning. If `undefined` is passed, the “fixed” is derived based on the given bounds.

</td>
</tr>
<tr>
<td>

`opts.n_elements`?

</td>
<td>

`number`

</td>
<td>

The number of elements of the hyperparameter value. Defaults to 1, which corresponds to a scalar hyperparameter. n_elements > 1 corresponds to a hyperparameter which is vector-valued, such as, e.g., anisotropic length-scales.

</td>
</tr>
<tr>
<td>

`opts.name`?

</td>
<td>

`string`

</td>
<td>

The name of the hyperparameter. Note that a kernel using a hyperparameter with name “x” must have the attributes self.x and self.x_bounds

</td>
</tr>
<tr>
<td>

`opts.value_type`?

</td>
<td>

`string`

</td>
<td>

The type of the hyperparameter. Currently, only “numeric” hyperparameters are supported.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Hyperparameter`](Hyperparameter.md)

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L21)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/gaussian\_process/kernels/Hyperparameter.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L19) |
| `_isInitialized` | `boolean` | `false` | [generated/gaussian\_process/kernels/Hyperparameter.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L18) |
| `_py` | `PythonBridge` | `undefined` | [generated/gaussian\_process/kernels/Hyperparameter.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L17) |
| `id` | `string` | `undefined` | [generated/gaussian\_process/kernels/Hyperparameter.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L14) |
| `opts` | `any` | `undefined` | [generated/gaussian\_process/kernels/Hyperparameter.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L15) |

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

[generated/gaussian\_process/kernels/Hyperparameter.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L53)

## Methods

### count()

> **count**(`opts`): `Promise`\<`any`\>

Return number of occurrences of value.

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

[generated/gaussian\_process/kernels/Hyperparameter.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L122)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L105)

***

### index()

> **index**(`opts`): `Promise`\<`any`\>

Return first index of value.

Raises ValueError if the value is not present.

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

[generated/gaussian\_process/kernels/Hyperparameter.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L150)

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

[generated/gaussian\_process/kernels/Hyperparameter.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L66)
