[**sklearn**](../README.md) • **Docs**

***

Linear Support Vector Regression.

Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

The main differences between [`LinearSVR`](#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") and [`SVR`](sklearn.svm.SVR.html#sklearn.svm.SVR "sklearn.svm.SVR") lie in the loss function used by default, and in the handling of intercept regularization between those two implementations.

This class supports both dense and sparse input.

Read more in the [User Guide](../svm.html#svm-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html)

## Constructors

### new LinearSVR()

> **new LinearSVR**(`opts`?): [`LinearSVR`](LinearSVR.md)

#### Parameters

• **opts?**

• **opts.C?**: `number`

Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.

**Default Value**

`1`

• **opts.dual?**: `boolean` \| `"auto"`

Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features. `dual="auto"` will choose the value of the parameter automatically, based on the values of `n\_samples`, `n\_features` and `loss`. If `n\_samples` < `n\_features` and optimizer supports chosen `loss`, then dual will be set to `true`, otherwise it will be set to `false`.

**Default Value**

`'auto'`

• **opts.epsilon?**: `number`

Epsilon parameter in the epsilon-insensitive loss function. Note that the value of this parameter depends on the scale of the target variable y. If unsure, set `epsilon=0`.

**Default Value**

`0`

• **opts.fit\_intercept?**: `boolean`

Whether or not to fit an intercept. If set to `true`, the feature vector is extended to include an intercept term: `\[x\_1, ..., x\_n, 1\]`, where 1 corresponds to the intercept. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be already centered).

**Default Value**

`true`

• **opts.intercept\_scaling?**: `number`

When `fit\_intercept` is `true`, the instance vector x becomes `\[x\_1, ..., x\_n, intercept\_scaling\]`, i.e. a “synthetic” feature with a constant value equal to `intercept\_scaling` is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight. Note that liblinear internally penalizes the intercept, treating it like any other term in the feature vector. To reduce the impact of the regularization on the intercept, the `intercept\_scaling` parameter can be set to a value greater than 1; the higher the value of `intercept\_scaling`, the lower the impact of regularization on it. Then, the weights become `\[w\_x\_1, ..., w\_x\_n, w\_intercept\*intercept\_scaling\]`, where `w\_x\_1, ..., w\_x\_n` represent the feature weights and the intercept weight is scaled by `intercept\_scaling`. This scaling allows the intercept term to have a different regularization behavior compared to the other features.

**Default Value**

`1`

• **opts.loss?**: `"epsilon_insensitive"` \| `"squared_epsilon_insensitive"`

Specifies the loss function. The epsilon-insensitive loss (standard SVR) is the L1 loss, while the squared epsilon-insensitive loss (‘squared\_epsilon\_insensitive’) is the L2 loss.

**Default Value**

`'epsilon_insensitive'`

• **opts.max\_iter?**: `number`

The maximum number of iterations to be run.

**Default Value**

`1000`

• **opts.random\_state?**: `number`

Controls the pseudo random number generation for shuffling the data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.tol?**: `number`

Tolerance for stopping criteria.

**Default Value**

`0.0001`

• **opts.verbose?**: `number`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.

**Default Value**

`0`

#### Returns

[`LinearSVR`](LinearSVR.md)

#### Defined in

[generated/svm/LinearSVR.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVR.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/svm/LinearSVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/svm/LinearSVR.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/svm/LinearSVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L23)

## Accessors

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/LinearSVR.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L397)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/LinearSVR.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L468)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Constants in decision function.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/LinearSVR.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L420)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/LinearSVR.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L443)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Maximum number of iterations run across all classes.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/LinearSVR.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L493)

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

[generated/svm/LinearSVR.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L102)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/svm/LinearSVR.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L153)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model according to the given training data.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target vector relative to X.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVR.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L170)

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

[generated/svm/LinearSVR.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L214)

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

[generated/svm/LinearSVR.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L115)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict using the linear model.

#### Parameters

• **opts**

• **opts.X?**: `any`

Samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVR.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L248)

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

[generated/svm/LinearSVR.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L281)

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

[generated/svm/LinearSVR.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L327)

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

[generated/svm/LinearSVR.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/svm/LinearSVR.ts#L363)
