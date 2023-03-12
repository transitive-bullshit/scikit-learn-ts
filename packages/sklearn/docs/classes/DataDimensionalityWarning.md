# DataDimensionalityWarning

Custom warning to notify potential issues with data dimensionality.

For example, in random projection, this warning is raised when the number of components, which quantifies the dimensionality of the target projection space, is higher than the number of features, which quantifies the dimensionality of the original source space, to imply that the dimensionality of the problem will not be reduced.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.DataDimensionalityWarning.html)

## Constructors

## constructor()

### Signature

```ts
new DataDimensionalityWarning(opts?: DataDimensionalityWarningOptions): DataDimensionalityWarning;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DataDimensionalityWarningOptions`](../interfaces/DataDimensionalityWarningOptions.md) |

### Returns

[`DataDimensionalityWarning`](DataDimensionalityWarning.md)

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L19)

### id

> `string`

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L16)

### opts

> `any`

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L28)

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

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L32)

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L28) [generated/exceptions/DataDimensionalityWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L32)

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

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L85)

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

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L41)

### with\_traceback()

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Signature

```ts
with_traceback(opts: DataDimensionalityWarningWithTracebackOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DataDimensionalityWarningWithTracebackOptions`](../interfaces/DataDimensionalityWarningWithTracebackOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/exceptions/DataDimensionalityWarning.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L102)
