[**sklearn**](../README.md) • **Docs**

***

Isotonic regression model.

Read more in the [User Guide](../isotonic.html#isotonic).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.isotonic.IsotonicRegression.html)

## Constructors

### new IsotonicRegression()

> **new IsotonicRegression**(`opts`?): [`IsotonicRegression`](IsotonicRegression.md)

#### Parameters

• **opts?**

• **opts.increasing?**: `boolean` \| `"auto"`

Determines whether the predictions should be constrained to increase or decrease with `X`. ‘auto’ will decide based on the Spearman correlation estimate’s sign.

**Default Value**

`true`

• **opts.out\_of\_bounds?**: `"nan"` \| `"clip"` \| `"raise"`

Handles how `X` values outside of the training domain are handled during prediction.

**Default Value**

`'nan'`

• **opts.y\_max?**: `number`

Upper bound on the highest predicted value (the maximum may still be lower). If not set, defaults to +inf.

• **opts.y\_min?**: `number`

Lower bound on the lowest predicted value (the minimum value may still be higher). If not set, defaults to -inf.

#### Returns

[`IsotonicRegression`](IsotonicRegression.md)

#### Defined in

[generated/isotonic/IsotonicRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/isotonic/IsotonicRegression.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L17)

## Accessors

### f\_

#### Get Signature

> **get** **f\_**(): `Promise`\<`any`\>

The stepwise interpolating function that covers the input domain `X`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:709](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L709)

***

### increasing\_

#### Get Signature

> **get** **increasing\_**(): `Promise`\<`boolean`\>

Inferred value for `increasing`.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:734](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L734)

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

[generated/isotonic/IsotonicRegression.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L52)

***

### X\_max\_

#### Get Signature

> **get** **X\_max\_**(): `Promise`\<`number`\>

Maximum value of input array `X\_` for right bound.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L628)

***

### X\_min\_

#### Get Signature

> **get** **X\_min\_**(): `Promise`\<`number`\>

Minimum value of input array `X\_` for left bound.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L601)

***

### X\_thresholds\_

#### Get Signature

> **get** **X\_thresholds\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Unique ascending `X` values used to interpolate the y = f(X) monotonic function.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L655)

***

### y\_thresholds\_

#### Get Signature

> **get** **y\_thresholds\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

De-duplicated `y` values suitable to interpolate the y = f(X) monotonic function.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L682)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L108)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model using X, y as training data.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Weights. If set to `undefined`, all weights will be set to 1 (equal weights).

• **opts.X?**: `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)

Training data.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training target.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L125)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L171)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L217)

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

[generated/isotonic/IsotonicRegression.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L255)

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

[generated/isotonic/IsotonicRegression.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L65)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict new data by linear interpolation.

#### Parameters

• **opts**

• **opts.T?**: `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)

Data to transform.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L291)

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

[generated/isotonic/IsotonicRegression.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L327)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L375)

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

[generated/isotonic/IsotonicRegression.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L413)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.T?**: `string` \| `boolean`

Metadata routing for `T` parameter in `predict`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L451)

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

[generated/isotonic/IsotonicRegression.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L491)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.T?**: `string` \| `boolean`

Metadata routing for `T` parameter in `transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L531)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Transform new data by linear interpolation.

#### Parameters

• **opts**

• **opts.T?**: `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md)

Data to transform.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/isotonic/IsotonicRegression.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L567)
