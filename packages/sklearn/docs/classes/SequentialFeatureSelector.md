[**sklearn**](../README.md) • **Docs**

***

Transformer that performs Sequential Feature Selection.

This Sequential Feature Selector adds (forward selection) or removes (backward selection) features to form a feature subset in a greedy fashion. At each stage, this estimator chooses the best feature to add or remove based on the cross-validation score of an estimator. In the case of unsupervised learning, this Sequential Feature Selector looks only at the features (X), not the desired outputs (y).

Read more in the [User Guide](../feature_selection.html#sequential-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SequentialFeatureSelector.html)

## Constructors

### new SequentialFeatureSelector()

> **new SequentialFeatureSelector**(`opts`?): [`SequentialFeatureSelector`](SequentialFeatureSelector.md)

#### Parameters

• **opts?**

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

• **opts.direction?**: `"forward"` \| `"backward"`

Whether to perform forward selection or backward selection.

**Default Value**

`'forward'`

• **opts.estimator?**: `any`

An unfitted estimator.

• **opts.n\_features\_to\_select?**: `number` \| `"auto"`

If `"auto"`, the behaviour depends on the `tol` parameter:

**Default Value**

`'auto'`

• **opts.n\_jobs?**: `number`

Number of jobs to run in parallel. When evaluating a new feature to add or remove, the cross-validation procedure is parallel over the folds. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.scoring?**: `string`

A single str (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)) to evaluate the predictions on the test set.

NOTE that when using a custom scorer, it should return a single value.

If `undefined`, the estimator’s score method is used.

• **opts.tol?**: `number`

If the score is not incremented by at least `tol` between two consecutive feature additions or removals, stop adding or removing.

`tol` can be negative when removing features using `direction="backward"`. `tol` is required to be strictly positive when doing forward selection. It can be useful to reduce the number of features at the cost of a small decrease in the score.

`tol` is enabled only when `n\_features\_to\_select` is `"auto"`.

#### Returns

[`SequentialFeatureSelector`](SequentialFeatureSelector.md)

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L19)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L480)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L453)

***

### n\_features\_to\_select\_

#### Get Signature

> **get** **n\_features\_to\_select\_**(): `Promise`\<`number`\>

The number of features that were selected.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L507)

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

[generated/feature\_selection/SequentialFeatureSelector.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L77)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The mask of selected features.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L534)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L133)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn the features to select from X.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values. This parameter may be ignored for unsupervised learning.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L150)

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

[generated/feature\_selection/SequentialFeatureSelector.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L191)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Mask feature names according to selected features.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L237)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Raise `NotImplementedError`.

This estimator does not support metadata routing yet.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L275)

***

### get\_support()

> **get\_support**(`opts`): `Promise`\<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

• **opts**

• **opts.indices?**: `boolean`

If `true`, the return value will be an array of integers, rather than a boolean mask.

**Default Value**

`false`

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L305)

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

[generated/feature\_selection/SequentialFeatureSelector.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L90)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Reverse the transformation operation.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L343)

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

[generated/feature\_selection/SequentialFeatureSelector.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L381)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Reduce X to the selected features.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SequentialFeatureSelector.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L417)
