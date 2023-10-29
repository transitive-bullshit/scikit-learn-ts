# InconsistentVersionWarning

Warning raised when an estimator is unpickled with a inconsistent version.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.InconsistentVersionWarning.html)

## Constructors

## constructor()

### Signature

```ts
new InconsistentVersionWarning(opts?: object): InconsistentVersionWarning;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.current_sklearn_version?` | `string` | Current scikit-learn version. |
| `opts.estimator_name?` | `string` | Estimator name. |
| `opts.original_sklearn_version?` | `string` | Original scikit-learn version. |

### Returns

[`InconsistentVersionWarning`](InconsistentVersionWarning.md)

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:21

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:102

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

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:54

### with\_traceback()

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Signature

```ts
with_traceback(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:119

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:19

### \_isInitialized

> `boolean`  = `false`

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:18

### \_py

> `PythonBridge`

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:17

### id

> `string`

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:14

### opts

> `any`

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:15

## Accessors

### args

#### Signature

```ts
args(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: generated/exceptions/InconsistentVersionWarning.ts:146

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  generated/exceptions/InconsistentVersionWarning.ts:41

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

Defined in: generated/exceptions/InconsistentVersionWarning.ts:45
