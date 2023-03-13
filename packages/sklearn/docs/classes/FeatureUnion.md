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
new FeatureUnion(opts?: object): FeatureUnion;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.transformer_list?` | `any` | List of transformer objects to be applied to the data. The first half of each tuple is the name of the transformer. The transformer can be ‘drop’ for it to be ignored or can be ‘passthrough’ for features to be passed unchanged. |
| `opts.transformer_weights?` | `any` | Multiplicative weights for features per transformer. Keys are transformer names, values the weights. Raises ValueError if key not present in `transformer\_list`. |
| `opts.verbose?` | `boolean` | If `true`, the time elapsed while fitting each transformer will be printed as it is completed.  `Default Value`  `false` |

### Returns

[`FeatureUnion`](FeatureUnion.md)

Defined in:  [generated/pipeline/FeatureUnion.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/pipeline/FeatureUnion.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/pipeline/FeatureUnion.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/pipeline/FeatureUnion.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L23)

### id

> `string`

Defined in:  [generated/pipeline/FeatureUnion.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L20)

### opts

> `any`

Defined in:  [generated/pipeline/FeatureUnion.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L21)

## Accessors

### named\_transformers

Dictionary-like object, with the following attributes. Read-only attribute to access any transformer parameter by user given name. Keys are transformer names and values are transformer parameters.

#### Signature

```ts
named_transformers(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/FeatureUnion.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L320)

Defined in:  [generated/pipeline/FeatureUnion.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L320)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/pipeline/FeatureUnion.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L54)

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

Defined in:  [generated/pipeline/FeatureUnion.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L58)

Defined in:  [generated/pipeline/FeatureUnion.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L54) [generated/pipeline/FeatureUnion.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L58)

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

Defined in:  [generated/pipeline/FeatureUnion.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L109)

### fit()

Fit all transformers using X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data, used to fit transformers. |
| `opts.fit_params?` | `any` | Parameters to pass to the fit method of the estimator. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md)[] | Targets for supervised learning. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/FeatureUnion.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L126)

### fit\_transform()

Fit all transformers, transform the data and concatenate results.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data to be transformed. |
| `opts.fit_params?` | `any` | Parameters to pass to the fit method of the estimator. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md)[] | Targets for supervised learning. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/FeatureUnion.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L171)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/pipeline/FeatureUnion.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L216)

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

Defined in:  [generated/pipeline/FeatureUnion.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L67)

### set\_output()

Set the output container when `"transform"` and `"fit\_transform"` are called.

`set\_output` will set the output of all estimators in `transformer\_list`.

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

Defined in:  [generated/pipeline/FeatureUnion.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L254)

### transform()

Transform X separately by each transformer, concatenate results.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input data to be transformed. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/pipeline/FeatureUnion.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L287)
