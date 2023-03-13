# PowerTransformer

Apply a power transform featurewise to make data more Gaussian-like.

Power transforms are a family of parametric, monotonic transformations that are applied to make data more Gaussian-like. This is useful for modeling issues related to heteroscedasticity (non-constant variance), or other situations where normality is desired.

Currently, PowerTransformer supports the Box-Cox transform and the Yeo-Johnson transform. The optimal parameter for stabilizing variance and minimizing skewness is estimated through maximum likelihood.

Box-Cox requires input data to be strictly positive, while Yeo-Johnson supports both positive or negative data.

By default, zero-mean, unit-variance normalization is applied to the transformed data.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PowerTransformer.html)

## Constructors

## constructor()

### Signature

```ts
new PowerTransformer(opts?: object): PowerTransformer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Set to `false` to perform inplace computation during transformation.  `Default Value`  `true` |
| `opts.method?` | `"yeo-johnson"` \| `"box-cox"` | The power transform method. Available methods are:  `Default Value`  `'yeo-johnson'` |
| `opts.standardize?` | `boolean` | Set to `true` to apply zero-mean, unit-variance normalization to the transformed output.  `Default Value`  `true` |

### Returns

[`PowerTransformer`](PowerTransformer.md)

Defined in:  [generated/preprocessing/PowerTransformer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PowerTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PowerTransformer.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/PowerTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L27)

### id

> `string`

Defined in:  [generated/preprocessing/PowerTransformer.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L24)

### opts

> `any`

Defined in:  [generated/preprocessing/PowerTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L25)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/PowerTransformer.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L418)

### lambdas\_

The parameters of the power transformation for the selected features.

#### Signature

```ts
lambdas_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/preprocessing/PowerTransformer.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L364)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/PowerTransformer.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L391)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/PowerTransformer.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L57)

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

Defined in: [generated/preprocessing/PowerTransformer.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L61)

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

Defined in:  [generated/preprocessing/PowerTransformer.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L114)

### fit()

Estimate the optimal parameter lambda for each feature.

The optimal lambda parameter for minimizing skewness is estimated on each feature independently using maximum likelihood.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data used to estimate the optimal transformation parameters. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L133)

### fit\_transform()

Fit `PowerTransformer` to `X`, then transform `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data used to estimate the optimal transformation parameters and to be transformed using a power transformation. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L173)

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

Defined in:  [generated/preprocessing/PowerTransformer.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L215)

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

Defined in:  [generated/preprocessing/PowerTransformer.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L70)

### inverse\_transform()

Apply the inverse power transformation using the fitted lambdas.

The inverse of the Box-Cox transformation is given by:

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The transformed data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L255)

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

Defined in:  [generated/preprocessing/PowerTransformer.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L294)

### transform()

Apply the power transform to each feature using the fitted lambdas.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data to be transformed using a power transformation. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/preprocessing/PowerTransformer.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L329)
