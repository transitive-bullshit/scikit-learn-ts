**sklearn** • **Docs**

***

Linear perceptron classifier.

The implementation is a wrapper around [`SGDClassifier`](sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier "sklearn.linear_model.SGDClassifier") by fixing the `loss` and `learning\_rate` parameters as:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html)

## Constructors

### new Perceptron()

> **new Perceptron**(`opts`?): [`Perceptron`](Perceptron.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Constant that multiplies the regularization term if regularization is used.

**Default Value**

`0.0001`

• **opts.class\_weight?**: `any`

Preset for the class\_weight fit parameter.

Weights associated with classes. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

• **opts.early\_stopping?**: `boolean`

Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive epochs.

**Default Value**

`false`

• **opts.eta0?**: `number`

Constant by which the updates are multiplied.

**Default Value**

`1`

• **opts.fit\_intercept?**: `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

**Default Value**

`true`

• **opts.l1\_ratio?**: `number`

The Elastic Net mixing parameter, with `0 <= l1\_ratio <= 1`. `l1\_ratio=0` corresponds to L2 penalty, `l1\_ratio=1` to L1. Only used if `penalty='elasticnet'`.

**Default Value**

`0.15`

• **opts.max\_iter?**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.Perceptron.partial_fit "sklearn.linear_model.Perceptron.partial_fit") method.

**Default Value**

`1000`

• **opts.n\_iter\_no\_change?**: `number`

Number of iterations with no improvement to wait before early stopping.

**Default Value**

`5`

• **opts.n\_jobs?**: `number`

The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.penalty?**: `"l1"` \| `"l2"` \| `"elasticnet"`

The penalty (aka regularization term) to be used.

• **opts.random\_state?**: `number`

Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See Glossary.

**Default Value**

`0`

• **opts.shuffle?**: `boolean`

Whether or not the training data should be shuffled after each epoch.

**Default Value**

`true`

• **opts.tol?**: `number`

The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).

**Default Value**

`0.001`

• **opts.validation\_fraction?**: `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

**Default Value**

`0.1`

• **opts.verbose?**: `number`

The verbosity level.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See the Glossary.

**Default Value**

`false`

#### Returns

[`Perceptron`](Perceptron.md)

#### Defined in

[generated/linear\_model/Perceptron.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/Perceptron.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/Perceptron.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/Perceptron.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/Perceptron.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/Perceptron.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L17)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The unique classes labels.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L637)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`[][]\>

Weights assigned to the features.

##### Returns

`Promise`\<`ArrayLike`[][]\>

#### Defined in

[generated/linear\_model/Perceptron.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L660)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:756](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L756)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`ArrayLike`[]\>

Constants in decision function.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/Perceptron.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L683)

***

### loss\_function\_

#### Get Signature

> **get** **loss\_function\_**(): `Promise`\<`any`\>

The function that determines the loss, or difference between the output of the algorithm and the target values.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L706)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L731)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L781)

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

[generated/linear\_model/Perceptron.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L138)

***

### t\_

#### Get Signature

> **get** **t\_**(): `Promise`\<`number`\>

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:804](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L804)

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

[generated/linear\_model/Perceptron.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L209)

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

[generated/linear\_model/Perceptron.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L243)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L190)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit linear model with Stochastic Gradient Descent.

#### Parameters

• **opts**

• **opts.coef\_init?**: `ArrayLike`[]

The initial coefficients to warm-start the optimization.

• **opts.intercept\_init?**: `ArrayLike`

The initial intercept to warm-start the optimization.

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified.

• **opts.X?**: `any`

Training data.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L269)

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

[generated/linear\_model/Perceptron.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L323)

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

[generated/linear\_model/Perceptron.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L151)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.

#### Parameters

• **opts**

• **opts.classes?**: `ArrayLike`

Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.

• **opts.sample\_weight?**: `ArrayLike`

Weights applied to individual samples. If not provided, uniform weights are assumed.

• **opts.X?**: `any`

Subset of the training data.

• **opts.y?**: `ArrayLike`

Subset of the target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L359)

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

[generated/linear\_model/Perceptron.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L406)

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

[generated/linear\_model/Perceptron.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L440)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.coef\_init?**: `string` \| `boolean`

Metadata routing for `coef\_init` parameter in `fit`.

• **opts.intercept\_init?**: `string` \| `boolean`

Metadata routing for `intercept\_init` parameter in `fit`.

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L486)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.classes?**: `string` \| `boolean`

Metadata routing for `classes` parameter in `partial\_fit`.

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/Perceptron.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L532)

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

[generated/linear\_model/Perceptron.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L575)

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

[generated/linear\_model/Perceptron.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/Perceptron.ts#L611)
