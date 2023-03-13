# LabelEncoder

Encode target labels with value between 0 and n\_classes-1.

This transformer should be used to encode target values, *i.e.* `y`, and not the input `X`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html)

## Constructors

## constructor()

### Signature

```ts
new LabelEncoder(opts?: object): LabelEncoder;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.classes_?` | `ArrayLike` | Holds the label for each class. |

### Returns

[`LabelEncoder`](LabelEncoder.md)

Defined in:  [generated/preprocessing/LabelEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/LabelEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/LabelEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/LabelEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/LabelEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/LabelEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/LabelEncoder.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L35)

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

Defined in: [generated/preprocessing/LabelEncoder.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L39)

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

Defined in:  [generated/preprocessing/LabelEncoder.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L88)

### fit()

Fit label encoder.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/LabelEncoder.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L105)

### fit\_transform()

Fit label encoder and return encoded labels.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/LabelEncoder.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L138)

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

Defined in:  [generated/preprocessing/LabelEncoder.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L48)

### inverse\_transform()

Transform labels back to original encoding.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/LabelEncoder.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L171)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/LabelEncoder.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L208)

### transform()

Transform labels to normalized encoding.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/LabelEncoder.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L241)
