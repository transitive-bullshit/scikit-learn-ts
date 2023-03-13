# FitFailedWarning

Warning class used if there is an error while fitting the estimator.

This Warning is used in meta estimators GridSearchCV and RandomizedSearchCV and the cross-validation helper function cross\_val\_score to warn when there is an error while fitting the estimator.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.FitFailedWarning.html)

## Constructors

## constructor()

### Signature

```ts
new FitFailedWarning(opts?: object): FitFailedWarning;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `object` |
| `opts.args?` | `any` |

### Returns

[`FitFailedWarning`](FitFailedWarning.md)

Defined in:  [generated/exceptions/FitFailedWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L23)

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

Defined in:  [generated/exceptions/FitFailedWarning.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L83)

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

Defined in:  [generated/exceptions/FitFailedWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L41)

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

Defined in:  [generated/exceptions/FitFailedWarning.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L100)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/exceptions/FitFailedWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/exceptions/FitFailedWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/exceptions/FitFailedWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L19)

### id

> `string`

Defined in:  [generated/exceptions/FitFailedWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L16)

### opts

> `any`

Defined in:  [generated/exceptions/FitFailedWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/exceptions/FitFailedWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L28)

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

Defined in:  [generated/exceptions/FitFailedWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L32)

Defined in:  [generated/exceptions/FitFailedWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L28) [generated/exceptions/FitFailedWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L32)
