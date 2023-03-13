# UndefinedMetricWarning

Warning used when the metric is invalid

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.UndefinedMetricWarning.html)

## Constructors

## constructor()

### Signature

```ts
new UndefinedMetricWarning(opts?: object): UndefinedMetricWarning;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |
| `opts.args?` | `any` |

### Returns

[`UndefinedMetricWarning`](UndefinedMetricWarning.md)

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L17)

### id

> `string`

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L14)

### opts

> `any`

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L15)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L26)

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

Defined in: [generated/exceptions/UndefinedMetricWarning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L30)

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

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L83)

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

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L39)

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

Defined in:  [generated/exceptions/UndefinedMetricWarning.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L100)
