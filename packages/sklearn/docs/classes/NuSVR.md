[**sklearn**](../README.md) • **Docs**

***

Nu Support Vector Regression.

Similar to NuSVC, for regression, uses a parameter nu to control the number of support vectors. However, unlike NuSVC, where nu replaces C, here nu replaces the parameter epsilon of epsilon-SVR.

The implementation is based on libsvm.

Read more in the [User Guide](../svm.html#svm-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVR.html)

## Constructors

### new NuSVR()

> **new NuSVR**(`opts`?): [`NuSVR`](NuSVR.md)

#### Parameters

• **opts?**

• **opts.C?**: `number`

Penalty parameter C of the error term. For an intuitive visualization of the effects of scaling the regularization parameter C, see [Scaling the regularization parameter for SVCs](../../auto_examples/svm/plot_svm_scale_c.html#sphx-glr-auto-examples-svm-plot-svm-scale-c-py).

**Default Value**

`1`

• **opts.cache\_size?**: `number`

Specify the size of the kernel cache (in MB).

**Default Value**

`200`

• **opts.coef0?**: `number`

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

**Default Value**

`0`

• **opts.degree?**: `number`

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

**Default Value**

`3`

• **opts.gamma?**: `number` \| `"auto"` \| `"scale"`

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

**Default Value**

`'scale'`

• **opts.kernel?**: `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"`

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.

**Default Value**

`'rbf'`

• **opts.max\_iter?**: `number`

Hard limit on iterations within solver, or -1 for no limit.

**Default Value**

`-1`

• **opts.nu?**: `number`

An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

**Default Value**

`0.5`

• **opts.shrinking?**: `boolean`

Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

**Default Value**

`true`

• **opts.tol?**: `number`

Tolerance for stopping criterion.

**Default Value**

`0.001`

• **opts.verbose?**: `boolean`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

**Default Value**

`false`

#### Returns

[`NuSVR`](NuSVR.md)

#### Defined in

[generated/svm/NuSVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/NuSVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/NuSVR.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/svm/NuSVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/svm/NuSVR.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/svm/NuSVR.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L21)

## Accessors

### dual\_coef\_

#### Get Signature

> **get** **dual\_coef\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Coefficients of the support vector in the decision function.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/NuSVR.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L403)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVR.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L495)

***

### fit\_status\_

#### Get Signature

> **get** **fit\_status\_**(): `Promise`\<`number`\>

0 if correctly fitted, 1 otherwise (will raise warning)

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/NuSVR.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L426)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Constants in decision function.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVR.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L449)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/NuSVR.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L472)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run by the optimization routine to fit the model.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/svm/NuSVR.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L520)

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

[generated/svm/NuSVR.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L109)

***

### shape\_fit\_

#### Get Signature

> **get** **shape\_fit\_**(): `Promise`\<`any`[]\>

Array dimensions of training vector `X`.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/svm/NuSVR.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L542)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Indices of support vectors.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVR.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L565)

***

### support\_vectors\_

#### Get Signature

> **get** **support\_vectors\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Support vectors.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/svm/NuSVR.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L587)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/svm/NuSVR.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L160)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the SVM model according to the given training data.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n\_samples, n\_samples).

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (class labels in classification, real numbers in regression).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/svm/NuSVR.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L177)

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

[generated/svm/NuSVR.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L221)

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

[generated/svm/NuSVR.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L122)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform regression on samples in X.

For an one-class model, +1 (inlier) or -1 (outlier) is returned.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train).

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/svm/NuSVR.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L255)

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

[generated/svm/NuSVR.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L289)

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

[generated/svm/NuSVR.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L335)

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

[generated/svm/NuSVR.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/svm/NuSVR.ts#L371)
