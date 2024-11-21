[**sklearn**](../README.md) • **Docs**

***

A kernel hyperparameter’s specification in form of a namedtuple.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Hyperparameter.html)

## Constructors

### new Hyperparameter()

> **new Hyperparameter**(`opts`?): [`Hyperparameter`](Hyperparameter.md)

#### Parameters

• **opts?**

• **opts.bounds?**: `"fixed"`

The lower and upper bound on the parameter. If n\_elements>1, a pair of 1d array with n\_elements each may be given alternatively. If the string “fixed” is passed as bounds, the hyperparameter’s value cannot be changed.

• **opts.fixed?**: `boolean`

Whether the value of this hyperparameter is fixed, i.e., cannot be changed during hyperparameter tuning. If `undefined` is passed, the “fixed” is derived based on the given bounds.

• **opts.n\_elements?**: `number`

The number of elements of the hyperparameter value. Defaults to 1, which corresponds to a scalar hyperparameter. n\_elements > 1 corresponds to a hyperparameter which is vector-valued, such as, e.g., anisotropic length-scales.

**Default Value**

`1`

• **opts.name?**: `string`

The name of the hyperparameter. Note that a kernel using a hyperparameter with name “x” must have the attributes self.x and self.x\_bounds

• **opts.value\_type?**: `string`

The type of the hyperparameter. Currently, only “numeric” hyperparameters are supported.

#### Returns

[`Hyperparameter`](Hyperparameter.md)

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L21)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L19)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L18)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L17)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L14)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L15)

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

[generated/gaussian\_process/kernels/Hyperparameter.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L53)

## Methods

### count()

> **count**(`opts`): `Promise`\<`any`\>

Return number of occurrences of value.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L122)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L105)

***

### index()

> **index**(`opts`): `Promise`\<`any`\>

Return first index of value.

Raises ValueError if the value is not present.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/Hyperparameter.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L150)

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

[generated/gaussian\_process/kernels/Hyperparameter.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L66)
