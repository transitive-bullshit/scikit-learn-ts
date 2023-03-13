# FunctionTransformer

Constructs a transformer from an arbitrary callable.

A FunctionTransformer forwards its X (and optionally y) arguments to a user-defined function or function object and returns the result of this function. This is useful for stateless transformations such as taking the log of frequencies, doing custom scaling, etc.

Note: If a lambda is used as the function, then the resulting transformer will not be pickleable.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.FunctionTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new FunctionTransformer(opts?: FunctionTransformerOptions): FunctionTransformer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `FunctionTransformerOptions` |

### Returns

[`FunctionTransformer`](FunctionTransformer.md)

Defined in:  [generated/preprocessing/FunctionTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/FunctionTransformer.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L351)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/FunctionTransformer.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L324)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L30)

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

Defined in: [generated/preprocessing/FunctionTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L34)

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

Defined in:  [generated/preprocessing/FunctionTransformer.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L97)

### fit()

Fit transformer by checking X.

If `validate` is `true`, `X` will be checked.

#### Signature

```ts
fit(opts: FunctionTransformerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FunctionTransformerFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L116)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: FunctionTransformerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FunctionTransformerFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L148)

### get\_feature\_names\_out()

Get output feature names for transformation.

This method is only defined if `feature\_names\_out` is not `undefined`.

#### Signature

```ts
get_feature_names_out(opts: FunctionTransformerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FunctionTransformerGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L188)

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

Defined in:  [generated/preprocessing/FunctionTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L43)

### inverse\_transform()

Transform X using the inverse function.

#### Signature

```ts
inverse_transform(opts: FunctionTransformerInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FunctionTransformerInverseTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L223)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: FunctionTransformerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FunctionTransformerSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L260)

### transform()

Transform X using the forward function.

#### Signature

```ts
transform(opts: FunctionTransformerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FunctionTransformerTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L292)
