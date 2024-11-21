**sklearn** • **Docs**

***

Linear Support Vector Classification.

Similar to SVC with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

The main differences between [`LinearSVC`](#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") and [`SVC`](sklearn.svm.SVC.html#sklearn.svm.SVC "sklearn.svm.SVC") lie in the loss function used by default, and in the handling of intercept regularization between those two implementations.

This class supports both dense and sparse input and the multiclass support is handled according to a one-vs-the-rest scheme.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html)

## Constructors

### new LinearSVC()

> **new LinearSVC**(`opts`?): [`LinearSVC`](LinearSVC.md)

#### Parameters

• **opts?**

• **opts.C?**: `number`

Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. For an intuitive visualization of the effects of scaling the regularization parameter C, see Scaling the regularization parameter for SVCs.

**Default Value**

`1`

• **opts.class\_weight?**: `any`

Set the parameter C of class i to `class\_weight\[i\]\*C` for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

• **opts.dual?**: `boolean` \| `"auto"`

Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features. `dual="auto"` will choose the value of the parameter automatically, based on the values of `n\_samples`, `n\_features`, `loss`, `multi\_class` and `penalty`. If `n\_samples` < `n\_features` and optimizer supports chosen `loss`, `multi\_class` and `penalty`, then dual will be set to `true`, otherwise it will be set to `false`.

**Default Value**

`'auto'`

• **opts.fit\_intercept?**: `boolean`

Whether or not to fit an intercept. If set to `true`, the feature vector is extended to include an intercept term: `\[x\_1, ..., x\_n, 1\]`, where 1 corresponds to the intercept. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be already centered).

**Default Value**

`true`

• **opts.intercept\_scaling?**: `number`

When `fit\_intercept` is `true`, the instance vector x becomes `\[x\_1, ..., x\_n, intercept\_scaling\]`, i.e. a “synthetic” feature with a constant value equal to `intercept\_scaling` is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight. Note that liblinear internally penalizes the intercept, treating it like any other term in the feature vector. To reduce the impact of the regularization on the intercept, the `intercept\_scaling` parameter can be set to a value greater than 1; the higher the value of `intercept\_scaling`, the lower the impact of regularization on it. Then, the weights become `\[w\_x\_1, ..., w\_x\_n, w\_intercept\*intercept\_scaling\]`, where `w\_x\_1, ..., w\_x\_n` represent the feature weights and the intercept weight is scaled by `intercept\_scaling`. This scaling allows the intercept term to have a different regularization behavior compared to the other features.

**Default Value**

`1`

• **opts.loss?**: `"hinge"` \| `"squared_hinge"`

Specifies the loss function. ‘hinge’ is the standard SVM loss (used e.g. by the SVC class) while ‘squared\_hinge’ is the square of the hinge loss. The combination of `penalty='l1'` and `loss='hinge'` is not supported.

**Default Value**

`'squared_hinge'`

• **opts.max\_iter?**: `number`

The maximum number of iterations to be run.

**Default Value**

`1000`

• **opts.multi\_class?**: `"ovr"` \| `"crammer_singer"`

Determines the multi-class strategy if `y` contains more than two classes. `"ovr"` trains n\_classes one-vs-rest classifiers, while `"crammer\_singer"` optimizes a joint objective over all classes. While `crammer\_singer` is interesting from a theoretical perspective as it is consistent, it is seldom used in practice as it rarely leads to better accuracy and is more expensive to compute. If `"crammer\_singer"` is chosen, the options loss, penalty and dual will be ignored.

**Default Value**

`'ovr'`

• **opts.penalty?**: `"l1"` \| `"l2"`

Specifies the norm used in the penalization. The ‘l2’ penalty is the standard used in SVC. The ‘l1’ leads to `coef\_` vectors that are sparse.

**Default Value**

`'l2'`

• **opts.random\_state?**: `number`

Controls the pseudo random number generation for shuffling the data for the dual coordinate descent (if `dual=True`). When `dual=False` the underlying implementation of [`LinearSVC`](#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") is not random and `random\_state` has no effect on the results. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.tol?**: `number`

Tolerance for stopping criteria.

**Default Value**

`0.0001`

• **opts.verbose?**: `number`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.

**Default Value**

`0`

#### Returns

[`LinearSVC`](LinearSVC.md)

#### Defined in

[generated/svm/LinearSVC.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVC.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVC.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/svm/LinearSVC.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/svm/LinearSVC.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/svm/LinearSVC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L23)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The unique classes labels.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/LinearSVC.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L548)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`[][]\>

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

##### Returns

`Promise`\<`ArrayLike`[][]\>

#### Defined in

[generated/svm/LinearSVC.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L502)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/LinearSVC.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L596)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`ArrayLike`[]\>

Constants in decision function.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/svm/LinearSVC.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L525)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/LinearSVC.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L571)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Maximum number of iterations run across all classes.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/LinearSVC.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L621)

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

[generated/svm/LinearSVC.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L114)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The data matrix for which we want to get the confidence scores.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/LinearSVC.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L184)

***

### densify()

> **densify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L218)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/svm/LinearSVC.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L165)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model according to the given training data.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.

• **opts.X?**: `ArrayLike`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target vector relative to X.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L244)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L288)

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

[generated/svm/LinearSVC.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L127)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class labels for samples in X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The data matrix for which we want to get the predictions.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/svm/LinearSVC.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L322)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Test samples.

• **opts.y?**: `ArrayLike`

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/LinearSVC.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L356)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L402)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L438)

***

### sparsify()

> **sparsify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/LinearSVC.ts#L474)
