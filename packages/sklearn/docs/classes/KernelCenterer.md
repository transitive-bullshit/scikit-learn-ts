# KernelCenterer

Center an arbitrary kernel matrix \\(K\\).

Let define a kernel \\(K\\) such that:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KernelCenterer.html)

## Constructors

## constructor()

### Signature

```ts
new KernelCenterer(opts?: object): KernelCenterer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.K_fit_all_?` | `number` | Average of kernel matrix. |
| `opts.K_fit_rows_?` | [`ArrayLike`](../types/ArrayLike.md) | Average of each column of kernel matrix. |
| `opts.feature_names_in_?` | [`ArrayLike`](../types/ArrayLike.md) | Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings. |
| `opts.n_features_in_?` | `number` | Number of features seen during [fit](../../glossary.html#term-fit). |

### Returns

[`KernelCenterer`](KernelCenterer.md)

Defined in:  [generated/preprocessing/KernelCenterer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L23)

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

Defined in:  [generated/preprocessing/KernelCenterer.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L107)

### fit()

Fit KernelCenterer.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.K?` | [`ArrayLike`](../types/ArrayLike.md)[] | Kernel matrix. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KernelCenterer.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L124)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/KernelCenterer.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L164)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KernelCenterer.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L213)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KernelCenterer.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L251)

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

Defined in:  [generated/preprocessing/KernelCenterer.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L61)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.K?` | `string` \| `boolean` | Metadata routing for `K` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KernelCenterer.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L290)

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

Defined in:  [generated/preprocessing/KernelCenterer.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L327)

### set\_transform\_request()

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_transform_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.K?` | `string` \| `boolean` | Metadata routing for `K` parameter in `transform`. |
| `opts.copy?` | `string` \| `boolean` | Metadata routing for `copy` parameter in `transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/KernelCenterer.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L364)

### transform()

Center kernel matrix.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.K?` | [`ArrayLike`](../types/ArrayLike.md)[] | Kernel matrix. |
| `opts.copy?` | `boolean` | Set to `false` to perform inplace computation.  `Default Value`  `true` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/preprocessing/KernelCenterer.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L404)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/KernelCenterer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/KernelCenterer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/KernelCenterer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L19)

### id

> `string`

Defined in:  [generated/preprocessing/KernelCenterer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L16)

### opts

> `any`

Defined in:  [generated/preprocessing/KernelCenterer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L17)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/KernelCenterer.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L48)

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

Defined in:  [generated/preprocessing/KernelCenterer.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L52)

Defined in:  [generated/preprocessing/KernelCenterer.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L48) [generated/preprocessing/KernelCenterer.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L52)
