**sklearn** • **Docs**

***

Label Propagation classifier.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelPropagation.html)

## Constructors

### new LabelPropagation()

> **new LabelPropagation**(`opts`?): [`LabelPropagation`](LabelPropagation.md)

#### Parameters

• **opts?**

• **opts.gamma?**: `number`

Parameter for rbf kernel.

**Default Value**

`20`

• **opts.kernel?**: `"rbf"` \| `"knn"`

String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n\_samples, n\_features), and return a (n\_samples, n\_samples) shaped weight matrix.

**Default Value**

`'rbf'`

• **opts.max\_iter?**: `number`

Change maximum number of iterations allowed.

**Default Value**

`1000`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.n\_neighbors?**: `number`

Parameter for knn kernel which need to be strictly positive.

**Default Value**

`7`

• **opts.tol?**: `number`

Convergence tolerance: threshold to consider the system at steady state.

#### Returns

[`LabelPropagation`](LabelPropagation.md)

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L17)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The distinct labels used in classifying instances.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L397)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L505)

***

### label\_distributions\_

#### Get Signature

> **get** **label\_distributions\_**(): `Promise`\<`ArrayLike`[]\>

Categorical distribution for each item.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L424)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L478)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L532)

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

[generated/semi\_supervised/LabelPropagation.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L66)

***

### transduction\_

#### Get Signature

> **get** **transduction\_**(): `Promise`\<`ArrayLike`\>

Label assigned to each item during fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L451)

***

### X\_

#### Get Signature

> **get** **X\_**(): `Promise`\<`ArrayLike`\>

Input array.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L372)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L120)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit a semi-supervised label propagation model to X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction\_`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/semi\_supervised/LabelPropagation.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L137)

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

[generated/semi\_supervised/LabelPropagation.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L178)

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

[generated/semi\_supervised/LabelPropagation.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L79)

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

[generated/semi\_supervised/LabelPropagation.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L214)

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

[generated/semi\_supervised/LabelPropagation.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L250)

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

[generated/semi\_supervised/LabelPropagation.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L288)

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

[generated/semi\_supervised/LabelPropagation.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L336)
