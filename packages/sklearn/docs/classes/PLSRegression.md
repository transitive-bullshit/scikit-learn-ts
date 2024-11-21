[**sklearn**](../README.md) • **Docs**

***

PLS regression.

PLSRegression is also known as PLS2 or PLS1, depending on the number of targets.

For a comparison between other cross decomposition algorithms, see [Compare cross decomposition methods](../../auto_examples/cross_decomposition/plot_compare_cross_decomposition.html#sphx-glr-auto-examples-cross-decomposition-plot-compare-cross-decomposition-py).

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSRegression.html)

## Constructors

### new PLSRegression()

> **new PLSRegression**(`opts`?): [`PLSRegression`](PLSRegression.md)

#### Parameters

• **opts?**

• **opts.copy?**: `boolean`

Whether to copy `X` and `Y` in [fit](../../glossary.html#term-fit) before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

**Default Value**

`true`

• **opts.max\_iter?**: `number`

The maximum number of iterations of the power method when `algorithm='nipals'`. Ignored otherwise.

**Default Value**

`500`

• **opts.n\_components?**: `number`

Number of components to keep. Should be in `\[1, n\_features\]`.

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

[`PLSRegression`](PLSRegression.md)

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L21)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The coefficients of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:811](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L811)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:907](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L907)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:834](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L834)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:882](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L882)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`any`[]\>

Number of iterations of the power method, for each component.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:859](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L859)

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

[generated/cross\_decomposition/PLSRegression.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L67)

***

### x\_loadings\_

#### Get Signature

> **get** **x\_loadings\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The loadings of `X`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:661](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L661)

***

### x\_rotations\_

#### Get Signature

> **get** **x\_rotations\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The projection matrix used to transform `X`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:761](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L761)

***

### x\_scores\_

#### Get Signature

> **get** **x\_scores\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The transformed training samples.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:711](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L711)

***

### x\_weights\_

#### Get Signature

> **get** **x\_weights\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The left singular vectors of the cross-covariance matrices of each iteration.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L611)

***

### y\_loadings\_

#### Get Signature

> **get** **y\_loadings\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The loadings of `Y`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:686](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L686)

***

### y\_rotations\_

#### Get Signature

> **get** **y\_rotations\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The projection matrix used to transform `Y`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:786](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L786)

***

### y\_scores\_

#### Get Signature

> **get** **y\_scores\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The transformed training targets.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:736](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L736)

***

### y\_weights\_

#### Get Signature

> **get** **y\_weights\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The right singular vectors of the cross-covariance matrices of each iteration.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L636)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cross\_decomposition/PLSRegression.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L119)

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

[generated/cross\_decomposition/PLSRegression.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L136)

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

[generated/cross\_decomposition/PLSRegression.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L178)

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

[generated/cross\_decomposition/PLSRegression.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L217)

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

[generated/cross\_decomposition/PLSRegression.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L253)

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

[generated/cross\_decomposition/PLSRegression.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L80)

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

[generated/cross\_decomposition/PLSRegression.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L287)

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

[generated/cross\_decomposition/PLSRegression.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L331)

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

[generated/cross\_decomposition/PLSRegression.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L372)

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

[generated/cross\_decomposition/PLSRegression.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L416)

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

[generated/cross\_decomposition/PLSRegression.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L452)

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

[generated/cross\_decomposition/PLSRegression.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L490)

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

[generated/cross\_decomposition/PLSRegression.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L528)

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

[generated/cross\_decomposition/PLSRegression.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L562)
