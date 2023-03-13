# MultiLabelBinarizer

Transform between iterable of iterables and a multilabel format.

Although a list of sets or tuples is a very intuitive format for multilabel data, it is unwieldy to process. This transformer converts between this intuitive format and the supported multilabel format: a (samples x classes) binary matrix indicating the presence of a class label.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html)

## Constructors

## constructor()

### Signature

```ts
new MultiLabelBinarizer(opts?: MultiLabelBinarizerOptions): MultiLabelBinarizer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MultiLabelBinarizerOptions` |

### Returns

[`MultiLabelBinarizer`](MultiLabelBinarizer.md)

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L17)

## Accessors

### classes\_

A copy of the `classes` parameter when provided. Otherwise it corresponds to the sorted set of classes found when fitting.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/MultiLabelBinarizer.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L267)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L28)

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

Defined in: [generated/preprocessing/MultiLabelBinarizer.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L32)

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

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L87)

### fit()

Fit the label sets binarizer, storing classes\_.

#### Signature

```ts
fit(opts: MultiLabelBinarizerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiLabelBinarizerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L104)

### fit\_transform()

Fit the label sets binarizer and transform the given label sets.

#### Signature

```ts
fit_transform(opts: MultiLabelBinarizerFitTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiLabelBinarizerFitTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L134)

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

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L41)

### inverse\_transform()

Transform the given indicator matrix into label sets.

#### Signature

```ts
inverse_transform(opts: MultiLabelBinarizerInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiLabelBinarizerInverseTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L168)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: MultiLabelBinarizerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiLabelBinarizerSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L205)

### transform()

Transform the given label sets.

#### Signature

```ts
transform(opts: MultiLabelBinarizerTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiLabelBinarizerTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L237)
