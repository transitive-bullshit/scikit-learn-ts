# FunctionTransformer

Constructs a transformer from an arbitrary callable.

A FunctionTransformer forwards its X (and optionally y) arguments to a user-defined function or function object and returns the result of this function. This is useful for stateless transformations such as taking the log of frequencies, doing custom scaling, etc.

Note: If a lambda is used as the function, then the resulting transformer will not be pickleable.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.FunctionTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new FunctionTransformer(opts?: object): FunctionTransformer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.accept_sparse?` | `boolean` | Indicate that func accepts a sparse matrix as input. If validate is `false`, this has no effect. Otherwise, if accept\_sparse is false, sparse matrix inputs will cause an exception to be raised.  `Default Value`  `false` |
| `opts.check_inverse?` | `boolean` | Whether to check that or `func` followed by `inverse\_func` leads to the original inputs. It can be used for a sanity check, raising a warning when the condition is not fulfilled.  `Default Value`  `true` |
| `opts.feature_names_out?` | `"one-to-one"` | Determines the list of feature names that will be returned by the `get\_feature\_names\_out` method. If it is ‘one-to-one’, then the output feature names will be equal to the input feature names. If it is a callable, then it must take two positional arguments: this `FunctionTransformer` (`self`) and an array-like of input feature names (`input\_features`). It must return an array-like of output feature names. The `get\_feature\_names\_out` method is only defined if `feature\_names\_out` is not `undefined`.  See `get\_feature\_names\_out` for more details. |
| `opts.func?` | `any` | The callable to use for the transformation. This will be passed the same arguments as transform, with args and kwargs forwarded. If func is `undefined`, then func will be the identity function. |
| `opts.inv_kw_args?` | `any` | Dictionary of additional keyword arguments to pass to inverse\_func. |
| `opts.inverse_func?` | `any` | The callable to use for the inverse transformation. This will be passed the same arguments as inverse transform, with args and kwargs forwarded. If inverse\_func is `undefined`, then inverse\_func will be the identity function. |
| `opts.kw_args?` | `any` | Dictionary of additional keyword arguments to pass to func. |
| `opts.validate?` | `boolean` | Indicate that the input X array should be checked before calling `func`. The possibilities are:  `Default Value`  `false` |

### Returns

[`FunctionTransformer`](FunctionTransformer.md)

Defined in:  [generated/preprocessing/FunctionTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L436)

Defined in:  [generated/preprocessing/FunctionTransformer.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L436)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L409)

Defined in:  [generated/preprocessing/FunctionTransformer.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L409)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L78)

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

Defined in:  [generated/preprocessing/FunctionTransformer.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L82)

Defined in:  [generated/preprocessing/FunctionTransformer.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L78) [generated/preprocessing/FunctionTransformer.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L82)

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

Defined in:  [generated/preprocessing/FunctionTransformer.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L145)

### fit()

Fit transformer by checking X.

If `validate` is `true`, `X` will be checked.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Input array. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L164)

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

Defined in:  [generated/preprocessing/FunctionTransformer.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L206)

### get\_feature\_names\_out()

Get output feature names for transformation.

This method is only defined if `feature\_names\_out` is not `undefined`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input feature names. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L259)

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

Defined in:  [generated/preprocessing/FunctionTransformer.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L91)

### inverse\_transform()

Transform X using the inverse function.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Input array. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L297)

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

Defined in:  [generated/preprocessing/FunctionTransformer.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L337)

### transform()

Transform X using the forward function.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Input array. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/FunctionTransformer.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L374)
