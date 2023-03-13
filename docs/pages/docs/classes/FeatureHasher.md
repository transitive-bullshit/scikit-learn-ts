# FeatureHasher

Implements feature hashing, aka the hashing trick.

This class turns sequences of symbolic feature names (strings) into scipy.sparse matrices, using a hash function to compute the matrix column corresponding to a name. The hash function employed is the signed 32-bit version of Murmurhash3.

Feature names of type byte string are used as-is. Unicode strings are converted to UTF-8 first, but no Unicode normalization is done. Feature values must be (finite) numbers.

This class is a low-memory alternative to DictVectorizer and CountVectorizer, intended for large-scale (online) learning and situations where memory is tight, e.g. when running prediction code on embedded devices.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.FeatureHasher.html)

## Constructors

## constructor()

### Signature

```ts
new FeatureHasher(opts?: FeatureHasherOptions): FeatureHasher;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `FeatureHasherOptions` |

### Returns

[`FeatureHasher`](FeatureHasher.md)

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L25)

### id

> `string`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L22)

### opts

> `any`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L34)

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

Defined in: [generated/feature\_extraction/FeatureHasher.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L38)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L89)

### fit()

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
fit(opts: FeatureHasherFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureHasherFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L108)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: FeatureHasherFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureHasherFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L138)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L47)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: FeatureHasherSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureHasherSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L172)

### transform()

Transform a sequence of instances to a scipy.sparse matrix.

#### Signature

```ts
transform(opts: FeatureHasherTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FeatureHasherTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L200)
