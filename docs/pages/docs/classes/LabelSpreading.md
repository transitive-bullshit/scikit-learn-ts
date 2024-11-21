**sklearn** • **Docs**

***

LabelSpreading model for semi-supervised learning.

This model is similar to the basic Label Propagation algorithm, but uses affinity matrix based on the normalized graph Laplacian and soft clamping across the labels.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelSpreading.html)

## Constructors

### new LabelSpreading()

> **new LabelSpreading**(`opts`?): [`LabelSpreading`](LabelSpreading.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

Clamping factor. A value in (0, 1) that specifies the relative amount that an instance should adopt the information from its neighbors as opposed to its initial label. alpha=0 means keeping the initial label information; alpha=1 means replacing all initial information.

**Default Value**

`0.2`

• **opts.gamma?**: `number`

Parameter for rbf kernel.

**Default Value**

`20`

• **opts.kernel?**: `"rbf"` \| `"knn"`

String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n\_samples, n\_features), and return a (n\_samples, n\_samples) shaped weight matrix.

**Default Value**

`'rbf'`

• **opts.max\_iter?**: `number`

Maximum number of iterations allowed.

**Default Value**

`30`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.n\_neighbors?**: `number`

Parameter for knn kernel which is a strictly positive integer.

**Default Value**

`7`

• **opts.tol?**: `number`

Convergence tolerance: threshold to consider the system at steady state.

**Default Value**

`0.001`

#### Returns

[`LabelSpreading`](LabelSpreading.md)

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L19)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The distinct labels used in classifying instances.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L392)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L492)

***

### label\_distributions\_

#### Get Signature

> **get** **label\_distributions\_**(): `Promise`\<`ArrayLike`[]\>

Categorical distribution for each item.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L417)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L467)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L517)

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

[generated/semi\_supervised/LabelSpreading.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L77)

***

### transduction\_

#### Get Signature

> **get** **transduction\_**(): `Promise`\<`ArrayLike`\>

Label assigned to each item during fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L442)

***

### X\_

#### Get Signature

> **get** **X\_**(): `Promise`\<`ArrayLike`[]\>

Input array.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L369)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L129)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit a semi-supervised label propagation model to X.

The input samples (labeled and unlabeled) are provided by matrix X, and target labels are provided by matrix y. We conventionally apply the label -1 to unlabeled samples in matrix y in a semi-supervised classification.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction\_`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L148)

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

[generated/semi\_supervised/LabelSpreading.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L187)

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

[generated/semi\_supervised/LabelSpreading.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L90)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform inductive inference across the model.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data matrix.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L221)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict probability for each possible outcome.

Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data matrix.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/semi\_supervised/LabelSpreading.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L255)

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

[generated/semi\_supervised/LabelSpreading.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L289)

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

[generated/semi\_supervised/LabelSpreading.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L335)
