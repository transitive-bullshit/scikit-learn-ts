[sklearn](../readme.md) / [Exports](../modules.md) / Parallel

# Class: Parallel

Tweak of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") that propagates the scikit-learn configuration.

This subclass of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") ensures that the active configuration (thread-local) of scikit-learn is propagated to the parallel workers for the duration of the execution of the parallel tasks.

The API does not change and you can refer to [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") documentation for more details.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.utils.parallel.Parallel.html

## Table of contents

### Constructors

- [constructor](Parallel.md#constructor)

### Properties

- [\_isDisposed](Parallel.md#_isdisposed)
- [\_isInitialized](Parallel.md#_isinitialized)
- [\_py](Parallel.md#_py)
- [id](Parallel.md#id)
- [opts](Parallel.md#opts)

### Accessors

- [py](Parallel.md#py)

### Methods

- [dispatch\_next](Parallel.md#dispatch_next)
- [dispatch\_one\_batch](Parallel.md#dispatch_one_batch)
- [dispose](Parallel.md#dispose)
- [format](Parallel.md#format)
- [init](Parallel.md#init)
- [print\_progress](Parallel.md#print_progress)

## Constructors

### constructor

• **new Parallel**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ParallelOptions`](../interfaces/ParallelOptions.md) |

#### Defined in

[generated/utils/parallel/Parallel.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/utils/parallel/Parallel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/utils/parallel/Parallel.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/utils/parallel/Parallel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/utils/parallel/Parallel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/utils/parallel/Parallel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/utils/parallel/Parallel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/utils/parallel/Parallel.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L34)

## Methods

### dispatch\_next

▸ **dispatch_next**(`opts`): `Promise`<`any`\>

Dispatch more data for parallel processing

This method is meant to be called concurrently by the multiprocessing callback. We rely on the thread-safety of dispatch\_one\_batch to protect against concurrent consumption of the unprotected iterator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ParallelDispatchNextOptions`](../interfaces/ParallelDispatchNextOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/parallel/Parallel.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L99)

___

### dispatch\_one\_batch

▸ **dispatch_one_batch**(`opts`): `Promise`<`any`\>

Prefetch the tasks for the next batch and dispatch them.

The effective size of the batch is computed here. If there are no more jobs to dispatch, return `false`, else return `true`.

The iterator consumption and dispatching is protected by the same lock so calling this function should be thread safe.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ParallelDispatchOneBatchOptions`](../interfaces/ParallelDispatchOneBatchOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/parallel/Parallel.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L129)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/utils/parallel/Parallel.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L80)

___

### format

▸ **format**(`opts`): `Promise`<`any`\>

Return the formatted representation of the object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ParallelFormatOptions`](../interfaces/ParallelFormatOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/parallel/Parallel.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L157)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/utils/parallel/Parallel.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L43)

___

### print\_progress

▸ **print_progress**(`opts`): `Promise`<`any`\>

Display the process of the parallel execution only a fraction of time, controlled by self.verbose.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ParallelPrintProgressOptions`](../interfaces/ParallelPrintProgressOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/utils/parallel/Parallel.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L183)
