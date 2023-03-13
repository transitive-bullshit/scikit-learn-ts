# LabelBinarizer

Binarize labels in a one-vs-all fashion.

Several regression and binary classification algorithms are available in scikit-learn. A simple way to extend these algorithms to the multi-class classification case is to use the so-called one-vs-all scheme.

At learning time, this simply consists in learning one regressor or binary classifier per class. In doing so, one needs to convert multi-class labels to binary labels (belong or does not belong to the class). LabelBinarizer makes this process easy with the transform method.

At prediction time, one assigns the class for which the corresponding model gave the greatest confidence. LabelBinarizer makes this easy with the inverse\_transform method.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html)

## Constructors

## constructor()

### Signature

```ts
new LabelBinarizer(opts?: object): LabelBinarizer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.neg_label?` | `number` | Value with which negative labels must be encoded.  `Default Value`  `0` |
| `opts.pos_label?` | `number` | Value with which positive labels must be encoded.  `Default Value`  `1` |
| `opts.sparse_output?` | `boolean` | True if the returned array from transform is desired to be in sparse CSR format.  `Default Value`  `false` |

### Returns

[`LabelBinarizer`](LabelBinarizer.md)

Defined in:  [generated/preprocessing/LabelBinarizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/LabelBinarizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/LabelBinarizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/LabelBinarizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L25)

### id

> `string`

Defined in:  [generated/preprocessing/LabelBinarizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L22)

### opts

> `any`

Defined in:  [generated/preprocessing/LabelBinarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L23)

## Accessors

### classes\_

Holds the label for each class.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/LabelBinarizer.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L311)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/LabelBinarizer.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L55)

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

Defined in: [generated/preprocessing/LabelBinarizer.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L59)

### sparse\_input\_

True if the input data to transform is given as a sparse matrix, `false` otherwise.

#### Signature

```ts
sparse_input_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/preprocessing/LabelBinarizer.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L361)

### y\_type\_

Represents the type of the target data as evaluated by utils.multiclass.type\_of\_target. Possible type are ‘continuous’, ‘continuous-multioutput’, ‘binary’, ‘multiclass’, ‘multiclass-multioutput’, ‘multilabel-indicator’, and ‘unknown’.

#### Signature

```ts
y_type_(): Promise<string>;
```

#### Returns

`Promise`\<`string`\>

Defined in: [generated/preprocessing/LabelBinarizer.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L336)

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

Defined in:  [generated/preprocessing/LabelBinarizer.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L110)

### fit()

Fit label binarizer.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `ArrayLike` | Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/LabelBinarizer.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L127)

### fit\_transform()

Fit label binarizer/transform multi-class labels to binary labels.

The output of transform is sometimes referred to as the 1-of-K coding scheme.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `any` | Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/LabelBinarizer.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L162)

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

Defined in:  [generated/preprocessing/LabelBinarizer.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L68)

### inverse\_transform()

Transform binary labels back to multi-class labels.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.Y?` | `ArrayLike` | Target values. All sparse matrices are converted to CSR before inverse transformation. |
| `opts.threshold?` | `number` | Threshold used in the binary and multi-label cases.  Use 0 when `Y` contains the output of decision\_function (classifier). Use 0.5 when `Y` contains the output of predict\_proba.  If `undefined`, the threshold is assumed to be half way between neg\_label and pos\_label. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/LabelBinarizer.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L195)

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

Defined in:  [generated/preprocessing/LabelBinarizer.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L243)

### transform()

Transform multi-class labels to binary labels.

The output of transform is sometimes referred to by some authors as the 1-of-K coding scheme.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.y?` | `any` | Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/LabelBinarizer.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L278)
