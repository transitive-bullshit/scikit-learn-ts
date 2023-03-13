# EfficiencyWarning

Warning used to notify the user of inefficient computation.

This warning notifies the user that the efficiency may not be optimal due to some reason which may be included as a part of the warning message. This may be subclassed into a more specific Warning class.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.EfficiencyWarning.html)

## Constructors

## constructor()

### Signature

```ts
new EfficiencyWarning(opts?: EfficiencyWarningOptions): EfficiencyWarning;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `EfficiencyWarningOptions` |

### Returns

[`EfficiencyWarning`](EfficiencyWarning.md)

Defined in:  [generated/exceptions/EfficiencyWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/exceptions/EfficiencyWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/exceptions/EfficiencyWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/exceptions/EfficiencyWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L19)

### id

> `string`

Defined in:  [generated/exceptions/EfficiencyWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L16)

### opts

> `any`

Defined in:  [generated/exceptions/EfficiencyWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/exceptions/EfficiencyWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L28)

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

Defined in: [generated/exceptions/EfficiencyWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L32)

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

Defined in:  [generated/exceptions/EfficiencyWarning.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L83)

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

Defined in:  [generated/exceptions/EfficiencyWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L41)

### with\_traceback()

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Signature

```ts
with_traceback(opts: EfficiencyWarningWithTracebackOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `EfficiencyWarningWithTracebackOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/exceptions/EfficiencyWarning.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L100)
