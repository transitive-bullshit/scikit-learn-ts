# CCA

Canonical Correlation Analysis, also known as “Mode B” PLS.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.CCA.html)

## Constructors

## constructor()

### Signature

```ts
new CCA(opts?: object): CCA;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.  `Default Value`  `true` |
| `opts.max_iter?` | `number` | The maximum number of iterations of the power method.  `Default Value`  `500` |
| `opts.n_components?` | `number` | Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.  `Default Value`  `2` |
| `opts.scale?` | `boolean` | Whether to scale `X` and `Y`.  `Default Value`  `true` |
| `opts.tol?` | `number` | The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.  `Default Value`  `0.000001` |

### Returns

[`CCA`](CCA.md)

Defined in:  [generated/cross\_decomposition/CCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L23)

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

Defined in:  [generated/cross\_decomposition/CCA.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L119)

### fit()

Fit model to data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors. |
| `opts.Y?` | `ArrayLike` | Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L136)

### fit\_transform()

Learn and apply the dimension reduction on the train data.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors. |
| `opts.y?` | `ArrayLike`[] | Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L175)

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

Defined in:  [generated/cross\_decomposition/CCA.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L217)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

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

Defined in:  [generated/cross\_decomposition/CCA.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L252)

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

Defined in:  [generated/cross\_decomposition/CCA.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L76)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | New data, where `n\_samples` is the number of samples and `n\_components` is the number of pls components. |
| `opts.Y?` | `ArrayLike`[] | New target, where `n\_samples` is the number of samples and `n\_components` is the number of pls components. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L285)

### predict()

Predict targets of given samples.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Samples. |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization.  `Default Value`  `true` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L325)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L369)

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

Defined in:  [generated/cross\_decomposition/CCA.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L418)

### set\_predict\_request()

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_predict_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.copy?` | `string` \| `boolean` | Metadata routing for `copy` parameter in `predict`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L455)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L492)

### set\_transform\_request()

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_transform_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.copy?` | `string` \| `boolean` | Metadata routing for `copy` parameter in `transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L529)

### transform()

Apply the dimension reduction.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Samples to transform. |
| `opts.Y?` | `ArrayLike`[] | Target vectors. |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L562)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/CCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/CCA.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/CCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L19)

### id

> `string`

Defined in:  [generated/cross\_decomposition/CCA.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L16)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/CCA.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L17)

## Accessors

### coef\_

The coefficients of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:747](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L747)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cross\_decomposition/CCA.ts:836](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L836)

### intercept\_

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cross\_decomposition/CCA.ts:769](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L769)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cross\_decomposition/CCA.ts:813](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L813)

### n\_iter\_

Number of iterations of the power method, for each component.

#### Signature

```ts
n_iter_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:791](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L791)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/CCA.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L63)

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

Defined in: [generated/cross\_decomposition/CCA.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L67)

### x\_loadings\_

The loadings of `X`.

#### Signature

```ts
x_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L655)

### x\_rotations\_

The projection matrix used to transform `X`.

#### Signature

```ts
x_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L701)

### x\_weights\_

The left singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L611)

### y\_loadings\_

The loadings of `Y`.

#### Signature

```ts
y_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L678)

### y\_rotations\_

The projection matrix used to transform `Y`.

#### Signature

```ts
y_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:724](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L724)

### y\_weights\_

The right singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
y_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/CCA.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L633)
