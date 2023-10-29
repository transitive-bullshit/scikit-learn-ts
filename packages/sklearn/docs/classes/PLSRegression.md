# PLSRegression

PLS regression.

PLSRegression is also known as PLS2 or PLS1, depending on the number of targets.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSRegression.html)

## Constructors

## constructor()

### Signature

```ts
new PLSRegression(opts?: object): PLSRegression;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y` in [fit](../../glossary.html#term-fit) before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.  `Default Value`  `true` |
| `opts.max_iter?` | `number` | The maximum number of iterations of the power method when `algorithm='nipals'`. Ignored otherwise.  `Default Value`  `500` |
| `opts.n_components?` | `number` | Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.  `Default Value`  `2` |
| `opts.scale?` | `boolean` | Whether to scale `X` and `Y`.  `Default Value`  `true` |
| `opts.tol?` | `number` | The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.  `Default Value`  `0.000001` |

### Returns

[`PLSRegression`](PLSRegression.md)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L25)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L122)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors. |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md) | Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L139)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md)[] | Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L179)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L221)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L259)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L78)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | New data, where `n\_samples` is the number of samples and `n\_components` is the number of pls components. |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md)[] | New target, where `n\_samples` is the number of samples and `n\_components` is the number of pls components. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L294)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Samples. |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization.  `Default Value`  `true` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L336)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L380)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L429)

### set\_predict\_request()

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L466)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L505)

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
| `opts.copy?` | `string` \| `boolean` | Metadata routing for `copy` parameter in `transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L544)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Samples to transform. |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md)[] | Target vectors. |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L579)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L21)

### id

> `string`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L18)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L19)

## Accessors

### coef\_

The coefficients of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:828](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L828)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:828](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L828)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:924](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L924)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:924](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L924)

### intercept\_

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:851](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L851)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:851](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L851)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:899](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L899)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:899](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L899)

### n\_iter\_

Number of iterations of the power method, for each component.

#### Signature

```ts
n_iter_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:876](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L876)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:876](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L876)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L65)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L69)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L65) [generated/cross\_decomposition/PLSRegression.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L69)

### x\_loadings\_

The loadings of `X`.

#### Signature

```ts
x_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L678)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L678)

### x\_rotations\_

The projection matrix used to transform `X`.

#### Signature

```ts
x_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:778](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L778)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:778](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L778)

### x\_scores\_

The transformed training samples.

#### Signature

```ts
x_scores_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:728](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L728)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:728](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L728)

### x\_weights\_

The left singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L628)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L628)

### y\_loadings\_

The loadings of `Y`.

#### Signature

```ts
y_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L703)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L703)

### y\_rotations\_

The projection matrix used to transform `Y`.

#### Signature

```ts
y_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:803](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L803)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:803](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L803)

### y\_scores\_

The transformed training targets.

#### Signature

```ts
y_scores_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:753](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L753)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:753](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L753)

### y\_weights\_

The right singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
y_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L653)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L653)
