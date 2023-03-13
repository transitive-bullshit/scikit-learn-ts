# NotFittedError

Exception class to raise if estimator is used before fitting.

This class inherits from both ValueError and AttributeError to help with exception handling and backward compatibility.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.NotFittedError.html)

## Constructors

## constructor()

### Signature

```ts
new NotFittedError(opts?: object): NotFittedError;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |
| `opts.args?` | `any` |

### Returns

[`NotFittedError`](NotFittedError.md)

Defined in:  [generated/exceptions/NotFittedError.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/exceptions/NotFittedError.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/exceptions/NotFittedError.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/exceptions/NotFittedError.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L19)

### id

> `string`

Defined in:  [generated/exceptions/NotFittedError.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L16)

### opts

> `any`

Defined in:  [generated/exceptions/NotFittedError.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/exceptions/NotFittedError.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L28)

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

Defined in:  [generated/exceptions/NotFittedError.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L32)

Defined in:  [generated/exceptions/NotFittedError.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L28) [generated/exceptions/NotFittedError.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L32)

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

Defined in:  [generated/exceptions/NotFittedError.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L81)

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

Defined in:  [generated/exceptions/NotFittedError.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L41)

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

Defined in:  [generated/exceptions/NotFittedError.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L98)
