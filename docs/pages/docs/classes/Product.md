# Class: Product

The `Product` kernel takes two kernels \\(k_1\\) and \\(k_2\\) and combines them via

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Product.html)

## Constructors

### new Product()

> **new Product**(`opts`?): [`Product`](Product.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.k1`? | `any` | The first base-kernel of the product-kernel |
| `opts.k2`? | `any` | The second base-kernel of the product-kernel |

**Returns** [`Product`](Product.md)

**Defined in** [generated/gaussian\_process/kernels/Product.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L21)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/gaussian\_process/kernels/Product.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L19) |
| `_isInitialized` | `boolean` | `false` | [generated/gaussian\_process/kernels/Product.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L18) |
| `_py` | `PythonBridge` | `undefined` | [generated/gaussian\_process/kernels/Product.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L17) |
| `id` | `string` | `undefined` | [generated/gaussian\_process/kernels/Product.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L14) |
| `opts` | `any` | `undefined` | [generated/gaussian\_process/kernels/Product.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L15) |

## Accessors

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/gaussian\_process/kernels/Product.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L36)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<`ArrayLike`[]\>

Return the kernel k(X, Y) and optionally its gradient.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.eval_gradient`? | `boolean` | Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. |
| `opts.X`? | `ArrayLike`[] | Left argument of the returned kernel k(X, Y) |
| `opts.Y`? | `ArrayLike`[] | Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/gaussian\_process/kernels/Product.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L104)

***

### clone\_with\_theta()

> **clone\_with\_theta**(`opts`): `Promise`\<`any`\>

Returns a clone of self with given hyperparameters theta.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.theta`? | `ArrayLike` | The hyperparameters |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/gaussian\_process/kernels/Product.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L148)

***

### diag()

> **diag**(`opts`): `Promise`\<`ArrayLike`\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Argument to the kernel. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/gaussian\_process/kernels/Product.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L182)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/gaussian\_process/kernels/Product.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L87)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/gaussian\_process/kernels/Product.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L49)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/gaussian\_process/kernels/Product.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L214)
