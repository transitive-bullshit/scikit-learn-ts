[**sklearn**](../README.md) • **Docs**

***

Canonical Correlation Analysis, also known as “Mode B” PLS.

For a comparison between other cross decomposition algorithms, see [Compare cross decomposition methods](../../auto_examples/cross_decomposition/plot_compare_cross_decomposition.html#sphx-glr-auto-examples-cross-decomposition-plot-compare-cross-decomposition-py).

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.CCA.html)

## Constructors

### new CCA()

> **new CCA**(`opts`?): [`CCA`](CCA.md)

#### Parameters

• **opts?**

• **opts.copy?**: `boolean`

Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

**Default Value**

`true`

• **opts.max\_iter?**: `number`

The maximum number of iterations of the power method.

**Default Value**

`500`

• **opts.n\_components?**: `number`

Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

**Default Value**

`2`

• **opts.scale?**: `boolean`

Whether to scale `X` and `Y`.

**Default Value**

`true`

• **opts.tol?**: `number`

The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.

**Default Value**

`0.000001`

#### Returns

[`CCA`](CCA.md)

#### Defined in

[generated/cross\_decomposition/CCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cross\_decomposition/CCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cross\_decomposition/CCA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cross\_decomposition/CCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/cross\_decomposition/CCA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cross\_decomposition/CCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L19)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The coefficients of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L731)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L820)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:753](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L753)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:797](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L797)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`any`[]\>

Number of iterations of the power method, for each component.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:775](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L775)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/cross\_decomposition/CCA.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L65)

***

### x\_loadings\_

#### Get Signature

> **get** **x\_loadings\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The loadings of `X`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L639)

***

### x\_rotations\_

#### Get Signature

> **get** **x\_rotations\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The projection matrix used to transform `X`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L685)

***

### x\_weights\_

#### Get Signature

> **get** **x\_weights\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The left singular vectors of the cross-covariance matrices of each iteration.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L595)

***

### y\_loadings\_

#### Get Signature

> **get** **y\_loadings\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The loadings of `Y`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L662)

***

### y\_rotations\_

#### Get Signature

> **get** **y\_rotations\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The projection matrix used to transform `Y`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L708)

***

### y\_weights\_

#### Get Signature

> **get** **y\_weights\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The right singular vectors of the cross-covariance matrices of each iteration.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:617](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L617)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L116)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit model to data.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables.

• **opts.Y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L133)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Learn and apply the dimension reduction on the train data.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L174)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L213)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L247)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L78)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform data back to its original space.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

New data, where `n\_samples` is the number of samples and `n\_components` is the number of pls components.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

New target, where `n\_samples` is the number of samples and `n\_components` is the number of pls components.

• **opts.Y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

New target, where `n\_samples` is the number of samples and `n\_components` is the number of pls components.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L279)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict targets of given samples.

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

Whether to copy `X` and `Y`, or perform in-place normalization.

**Default Value**

`true`

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L321)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True values for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L362)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L406)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `predict`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L442)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L478)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L514)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Apply the dimension reduction.

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

Whether to copy `X` and `Y`, or perform in-place normalization.

**Default Value**

`true`

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Samples to transform.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Target vectors.

• **opts.Y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Target vectors.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cross\_decomposition/CCA.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L546)
