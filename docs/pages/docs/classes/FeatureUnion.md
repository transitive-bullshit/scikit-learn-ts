# FeatureUnion

Concatenates results of multiple transformer objects.

This estimator applies a list of transformer objects in parallel to the input data, then concatenates the results. This is useful to combine several feature extraction mechanisms into a single transformer.

Parameters of the transformers may be set using its name and the parameter name separated by a ‘\_\_’. A transformer may be replaced entirely by setting the parameter with its name to another transformer, removed by setting to ‘drop’ or disabled by setting to ‘passthrough’ (features are passed without transformation).

Read more in the [User Guide](../compose.html#feature-union).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.FeatureUnion.html)

## Constructors

## constructor()

### Signature

```ts
new FeatureUnion(opts?: FeatureUnionOptions): FeatureUnion;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FeatureUnionOptions`](../interfaces/FeatureUnionOptions.md) |

### Returns

[`FeatureUnion`](FeatureUnion.md)

Defined in:  [generated/pipeline/FeatureUnion.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/pipeline/FeatureUnion.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/pipeline/FeatureUnion.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/pipeline/FeatureUnion.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L23)

### id

> `string`

Defined in:  [generated/pipeline/FeatureUnion.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L20)

### opts

> `any`

Defined in:  [generated/pipeline/FeatureUnion.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L21)

## Accessors

### named\_transformers

Dictionary-like object, with the following attributes. Read-only attribute to access any transformer parameter by user given name. Keys are transformer names and values are transformer parameters.

#### Signature

```ts
named_transformers(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/pipeline/FeatureUnion.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L259)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/pipeline/FeatureUnion.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L32)

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

Defined in: [generated/pipeline/FeatureUnion.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L36)

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

Defined in:  [generated/pipeline/FeatureUnion.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L87)

### fit()

Fit all transformers using X.

#### Signature

```ts
fit(opts: FeatureUnionFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionFitOptions`](../interfaces/FeatureUnionFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/FeatureUnion.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L104)

### fit\_transform()

Fit all transformers, transform the data and concatenate results.

#### Signature

```ts
fit_transform(opts: FeatureUnionFitTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionFitTransformOptions`](../interfaces/FeatureUnionFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/FeatureUnion.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L134)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: FeatureUnionGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionGetFeatureNamesOutOptions`](../interfaces/FeatureUnionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/FeatureUnion.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L166)

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

Defined in:  [generated/pipeline/FeatureUnion.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L45)

### set\_output()

Set the output container when `"transform"` and `"fit\_transform"` are called.

`set\_output` will set the output of all estimators in `transformer\_list`.

#### Signature

```ts
set_output(opts: FeatureUnionSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionSetOutputOptions`](../interfaces/FeatureUnionSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/FeatureUnion.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L201)

### transform()

Transform X separately by each transformer, concatenate results.

#### Signature

```ts
transform(opts: FeatureUnionTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FeatureUnionTransformOptions`](../interfaces/FeatureUnionTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/FeatureUnion.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L229)
