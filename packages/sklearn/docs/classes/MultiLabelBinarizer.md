# MultiLabelBinarizer

Transform between iterable of iterables and a multilabel format.

Although a list of sets or tuples is a very intuitive format for multilabel data, it is unwieldy to process. This transformer converts between this intuitive format and the supported multilabel format: a (samples x classes) binary matrix indicating the presence of a class label.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html)

## Constructors

## constructor()

### Signature

```ts
new MultiLabelBinarizer(opts?: object): MultiLabelBinarizer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.classes?` | [`ArrayLike`](../types/ArrayLike.md) | Indicates an ordering for the class labels. All entries should be unique (cannot contain duplicate classes). |
| `opts.sparse_output?` | `boolean` | Set to `true` if output binary array is desired in CSR sparse format.  `Default Value`  `false` |

### Returns

[`MultiLabelBinarizer`](MultiLabelBinarizer.md)

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L17)

## Accessors

### classes\_

A copy of the `classes` parameter when provided. Otherwise it corresponds to the sorted set of classes found when fitting.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L300)

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L300)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L40)

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

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L44)

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L40) [generated/preprocessing/MultiLabelBinarizer.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L44)

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

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L99)

### fit()

Fit the label sets binarizer, storing [classes\_](../../glossary.html#term-classes_).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `any` | A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L116)

### fit\_transform()

Fit the label sets binarizer and transform the given label sets.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `any` | A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L151)

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

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L53)

### inverse\_transform()

Transform the given indicator matrix into label sets.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.yt?` | [`ArrayLike`](../types/ArrayLike.md) | A matrix containing only 1s ands 0s. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L188)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

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

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L228)

### transform()

Transform the given label sets.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `any` | A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/MultiLabelBinarizer.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L265)
