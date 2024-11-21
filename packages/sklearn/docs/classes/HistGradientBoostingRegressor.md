[**sklearn**](../README.md) • **Docs**

***

Histogram-based Gradient Boosting Regression Tree.

This estimator is much faster than [`GradientBoostingRegressor`](sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor "sklearn.ensemble.GradientBoostingRegressor") for big datasets (n\_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples. See [Features in Histogram Gradient Boosting Trees](../../auto_examples/ensemble/plot_hgbt_regression.html#sphx-glr-auto-examples-ensemble-plot-hgbt-regression-py) for a usecase example of this feature.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the [User Guide](../ensemble.html#histogram-based-gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html)

## Constructors

### new HistGradientBoostingRegressor()

> **new HistGradientBoostingRegressor**(`opts`?): [`HistGradientBoostingRegressor`](HistGradientBoostingRegressor.md)

#### Parameters

• **opts?**

• **opts.categorical\_features?**: `number`

Indicates the categorical features.

• **opts.early\_stopping?**: `boolean` \| `"auto"`

If ‘auto’, early stopping is enabled if the sample size is larger than 10000. If `true`, early stopping is enabled, otherwise early stopping is disabled.

**Default Value**

`'auto'`

• **opts.interaction\_cst?**: `"pairwise"` \| `"no_interactions"`

Specify interaction constraints, the sets of features which can interact with each other in child node splits.

Each item specifies the set of feature indices that are allowed to interact with each other. If there are more features than specified in these constraints, they are treated as if they were specified as an additional set.

The strings “pairwise” and “no\_interactions” are shorthands for allowing only pairwise or no interactions, respectively.

For instance, with 5 features in total, `interaction\_cst=\[{0, 1}\]` is equivalent to `interaction\_cst=\[{0, 1}, {2, 3, 4}\]`, and specifies that each branch of a tree will either only split on features 0 and 1 or only split on features 2, 3 and 4.

• **opts.l2\_regularization?**: `number`

The L2 regularization parameter penalizing leaves with small hessians. Use `0` for no regularization (default).

**Default Value**

`0`

• **opts.learning\_rate?**: `number`

The learning rate, also known as *shrinkage*. This is used as a multiplicative factor for the leaves values. Use `1` for no shrinkage.

**Default Value**

`0.1`

• **opts.loss?**: `"quantile"` \| `"gamma"` \| `"squared_error"` \| `"absolute_error"` \| `"poisson"`

The loss function to use in the boosting process. Note that the “squared error”, “gamma” and “poisson” losses actually implement “half least squares loss”, “half gamma deviance” and “half poisson deviance” to simplify the computation of the gradient. Furthermore, “gamma” and “poisson” losses internally use a log-link, “gamma” requires `y > 0` and “poisson” requires `y >= 0`. “quantile” uses the pinball loss.

**Default Value**

`'squared_error'`

• **opts.max\_bins?**: `number`

The maximum number of bins to use for non-missing values. Before training, each feature of the input array `X` is binned into integer-valued bins, which allows for a much faster training stage. Features with a small number of unique values may use less than `max\_bins` bins. In addition to the `max\_bins` bins, one more bin is always reserved for missing values. Must be no larger than 255.

**Default Value**

`255`

• **opts.max\_depth?**: `number`

The maximum depth of each tree. The depth of a tree is the number of edges to go from the root to the deepest leaf. Depth isn’t constrained by default.

• **opts.max\_features?**: `number`

Proportion of randomly chosen features in each and every node split. This is a form of regularization, smaller values make the trees weaker learners and might prevent overfitting. If interaction constraints from `interaction\_cst` are present, only allowed features are taken into account for the subsampling.

**Default Value**

`1`

• **opts.max\_iter?**: `number`

The maximum number of iterations of the boosting process, i.e. the maximum number of trees.

**Default Value**

`100`

• **opts.max\_leaf\_nodes?**: `number`

The maximum number of leaves for each tree. Must be strictly greater than 1. If `undefined`, there is no maximum limit.

**Default Value**

`31`

• **opts.min\_samples\_leaf?**: `number`

The minimum number of samples per leaf. For small datasets with less than a few hundred samples, it is recommended to lower this value since only very shallow trees would be built.

**Default Value**

`20`

• **opts.monotonic\_cst?**: `any`

Monotonic constraint to enforce on each feature are specified using the following integer values:

• **opts.n\_iter\_no\_change?**: `number`

Used to determine when to “early stop”. The fitting process is stopped when none of the last `n\_iter\_no\_change` scores are better than the `n\_iter\_no\_change \- 1` -th-to-last one, up to some tolerance. Only used if early stopping is performed.

**Default Value**

`10`

• **opts.quantile?**: `number`

If loss is “quantile”, this parameter specifies which quantile to be estimated and must be between 0 and 1.

• **opts.random\_state?**: `number`

Pseudo-random number generator to control the subsampling in the binning process, and the train/validation data split if early stopping is enabled. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.scoring?**: `string`

Scoring parameter to use for early stopping. It can be a single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)). If `undefined`, the estimator’s default scorer is used. If `scoring='loss'`, early stopping is checked w.r.t the loss value. Only used if early stopping is performed.

**Default Value**

`'loss'`

• **opts.tol?**: `number`

The absolute tolerance to use when comparing scores during early stopping. The higher the tolerance, the more likely we are to early stop: higher tolerance means that it will be harder for subsequent iterations to be considered an improvement upon the reference score.

**Default Value**

`1e-7`

• **opts.validation\_fraction?**: `number`

Proportion (or absolute size) of training data to set aside as validation data for early stopping. If `undefined`, early stopping is done on the training data. Only used if early stopping is performed.

**Default Value**

`0.1`

• **opts.verbose?**: `number`

The verbosity level. If not zero, print some information about the fitting process.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble. For results to be valid, the estimator should be re-trained on the same data only. See [the Glossary](../../glossary.html#term-warm_start).

**Default Value**

`false`

#### Returns

[`HistGradientBoostingRegressor`](HistGradientBoostingRegressor.md)

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L23)

## Accessors

### do\_early\_stopping\_

#### Get Signature

> **get** **do\_early\_stopping\_**(): `Promise`\<`boolean`\>

Indicates whether early stopping is used during training.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L534)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L696)

***

### is\_categorical\_

#### Get Signature

> **get** **is\_categorical\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Boolean mask for the categorical features. `undefined` if there are no categorical features.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L642)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L669)

***

### n\_trees\_per\_iteration\_

#### Get Signature

> **get** **n\_trees\_per\_iteration\_**(): `Promise`\<`number`\>

The number of tree that are built at each iteration. For regressors, this is always 1.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L561)

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

[generated/ensemble/HistGradientBoostingRegressor.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L175)

***

### train\_score\_

#### Get Signature

> **get** **train\_score\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L588)

***

### validation\_score\_

#### Get Signature

> **get** **validation\_score\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L615)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L231)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the gradient boosting model.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `any`

Weights of training data.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L248)

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

[generated/ensemble/HistGradientBoostingRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L296)

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

[generated/ensemble/HistGradientBoostingRegressor.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L188)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict values for X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The input samples.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L332)

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

[generated/ensemble/HistGradientBoostingRegressor.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L370)

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

[generated/ensemble/HistGradientBoostingRegressor.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L420)

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

[generated/ensemble/HistGradientBoostingRegressor.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L460)

***

### staged\_predict()

> **staged\_predict**(`opts`): `Promise`\<`any`[]\>

Predict regression target for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The input samples.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L498)
