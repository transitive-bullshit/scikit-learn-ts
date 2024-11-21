# Class: Parallel

Tweak of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.5.dev0)") that propagates the scikit-learn configuration.

This subclass of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.5.dev0)") ensures that the active configuration (thread-local) of scikit-learn is propagated to the parallel workers for the duration of the execution of the parallel tasks.

The API does not change and you can refer to [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.5.dev0)") documentation for more details.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.parallel.Parallel.html)

## Constructors

### new Parallel()

> **new Parallel**(`opts`?): [`Parallel`](Parallel.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.iterable`? | `any` | Iterable containing tuples of (delayed_function, args, kwargs) that should be consumed. |

**Returns** [`Parallel`](Parallel.md)

**Defined in** [generated/utils/parallel/Parallel.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/utils/parallel/Parallel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/utils/parallel/Parallel.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/utils/parallel/Parallel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L21) |
| `id` | `string` | `undefined` | [generated/utils/parallel/Parallel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L18) |
| `opts` | `any` | `undefined` | [generated/utils/parallel/Parallel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L19) |

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

**Defined in** [generated/utils/parallel/Parallel.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L35)

***

### results

**Get Signature**

> **get** **results**(): `Promise`\<`any`[]\>

List of results of the tasks.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/utils/parallel/Parallel.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L245)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<`any`[]\>

Dispatch the tasks and return the results.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.iterable`? | `any` | Iterable containing tuples of (delayed_function, args, kwargs) that should be consumed. |

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/utils/parallel/Parallel.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L103)

***

### dispatch\_next()

> **dispatch\_next**(`opts`): `Promise`\<`any`\>

Dispatch more data for parallel processing

This method is meant to be called concurrently by the multiprocessing callback. We rely on the thread-safety of dispatch_one_batch to protect against concurrent consumption of the unprotected iterator.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/utils/parallel/Parallel.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L137)

***

### dispatch\_one\_batch()

> **dispatch\_one\_batch**(`opts`): `Promise`\<`any`\>

Prefetch the tasks for the next batch and dispatch them.

The effective size of the batch is computed here. If there are no more jobs to dispatch, return `false`, else return `true`.

The iterator consumption and dispatching is protected by the same lock so calling this function should be thread safe.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/utils/parallel/Parallel.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L167)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/utils/parallel/Parallel.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L86)

***

### format()

> **format**(`opts`): `Promise`\<`any`\>

Return the formatted representation of the object.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/utils/parallel/Parallel.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L193)

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

**Defined in** [generated/utils/parallel/Parallel.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L48)

***

### print\_progress()

> **print\_progress**(`opts`): `Promise`\<`any`\>

Display the process of the parallel execution only a fraction of time, controlled by self.verbose.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/utils/parallel/Parallel.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L219)
