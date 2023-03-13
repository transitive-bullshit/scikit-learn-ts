# Parallel

Tweak of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") that propagates the scikit-learn configuration.

This subclass of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") ensures that the active configuration (thread-local) of scikit-learn is propagated to the parallel workers for the duration of the execution of the parallel tasks.

The API does not change and you can refer to [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") documentation for more details.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.parallel.Parallel.html)

## Constructors

## constructor()

### Signature

```ts
new Parallel(opts?: ParallelOptions): Parallel;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ParallelOptions` |

### Returns

[`Parallel`](Parallel.md)

Defined in:  [generated/utils/parallel/Parallel.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/utils/parallel/Parallel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/utils/parallel/Parallel.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/utils/parallel/Parallel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L21)

### id

> `string`

Defined in:  [generated/utils/parallel/Parallel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L18)

### opts

> `any`

Defined in:  [generated/utils/parallel/Parallel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/utils/parallel/Parallel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L30)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/utils/parallel/Parallel.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L34)

## Methods

### dispatch\_next()

Dispatch more data for parallel processing

This method is meant to be called concurrently by the multiprocessing callback. We rely on the thread-safety of dispatch\_one\_batch to protect against concurrent consumption of the unprotected iterator.

#### Signature

```ts
dispatch_next(opts: ParallelDispatchNextOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ParallelDispatchNextOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/parallel/Parallel.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L99)

### dispatch\_one\_batch()

Prefetch the tasks for the next batch and dispatch them.

The effective size of the batch is computed here. If there are no more jobs to dispatch, return `false`, else return `true`.

The iterator consumption and dispatching is protected by the same lock so calling this function should be thread safe.

#### Signature

```ts
dispatch_one_batch(opts: ParallelDispatchOneBatchOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ParallelDispatchOneBatchOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/parallel/Parallel.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L129)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/utils/parallel/Parallel.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L80)

### format()

Return the formatted representation of the object.

#### Signature

```ts
format(opts: ParallelFormatOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ParallelFormatOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/parallel/Parallel.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L157)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/utils/parallel/Parallel.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L43)

### print\_progress()

Display the process of the parallel execution only a fraction of time, controlled by self.verbose.

#### Signature

```ts
print_progress(opts: ParallelPrintProgressOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ParallelPrintProgressOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/utils/parallel/Parallel.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/utils/parallel/Parallel.ts#L183)
