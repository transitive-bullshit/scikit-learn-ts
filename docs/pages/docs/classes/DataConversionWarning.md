# DataConversionWarning

Warning used to notify implicit data conversions happening in the code.

This warning occurs when some input data needs to be converted or interpreted in a way that may not match the user’s expectations.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.DataConversionWarning.html)

## Constructors

## constructor()

### Signature

```ts
new DataConversionWarning(opts?: object): DataConversionWarning;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |
| `opts.args?` | `any` |

### Returns

[`DataConversionWarning`](DataConversionWarning.md)

Defined in:  [generated/exceptions/DataConversionWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/exceptions/DataConversionWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/exceptions/DataConversionWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/exceptions/DataConversionWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L19)

### id

> `string`

Defined in:  [generated/exceptions/DataConversionWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L16)

### opts

> `any`

Defined in:  [generated/exceptions/DataConversionWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/exceptions/DataConversionWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L28)

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

Defined in: [generated/exceptions/DataConversionWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L32)

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

Defined in:  [generated/exceptions/DataConversionWarning.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L85)

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

Defined in:  [generated/exceptions/DataConversionWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L41)

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

Defined in:  [generated/exceptions/DataConversionWarning.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L102)
