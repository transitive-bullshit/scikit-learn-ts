**sklearn** • **Docs**

***

DummyClassifier makes predictions that ignore the input features.

This classifier serves as a simple baseline to compare against other more complex classifiers.

The specific behavior of the baseline is selected with the `strategy` parameter.

All strategies make predictions that ignore the input feature values passed as the `X` argument to `fit` and `predict`. The predictions, however, typically depend on values observed in the `y` parameter passed to `fit`.

Note that the “stratified” and “uniform” strategies lead to non-deterministic predictions that can be rendered deterministic by setting the `random\_state` parameter if needed. The other strategies are naturally deterministic and, once fit, always return the same constant prediction for any value of `X`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyClassifier.html)

## Constructors

### new DummyClassifier()

> **new DummyClassifier**(`opts`?): [`DummyClassifier`](DummyClassifier.md)

#### Parameters

• **opts?**

• **opts.constant?**: `string` \| `number` \| `ArrayLike`

The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy.

• **opts.random\_state?**: `number`

Controls the randomness to generate the predictions when `strategy='stratified'` or `strategy='uniform'`. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.strategy?**: `"uniform"` \| `"most_frequent"` \| `"prior"` \| `"stratified"` \| `"constant"`

Strategy to use to generate predictions.

**Default Value**

`'prior'`

#### Returns

[`DummyClassifier`](DummyClassifier.md)

#### Defined in

[generated/dummy/DummyClassifier.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/dummy/DummyClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/dummy/DummyClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/dummy/DummyClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/dummy/DummyClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/dummy/DummyClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L25)

## Accessors

### class\_prior\_

#### Get Signature

> **get** **class\_prior\_**(): `Promise`\<`ArrayLike`\>

Frequency of each class observed in `y`. For multioutput classification problems, this is computed independently for each output.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L468)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

Unique class labels observed in `y`. For multi-output classification problems, this attribute is a list of arrays as each output has an independent set of possible classes.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L418)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L518)

***

### n\_classes\_

#### Get Signature

> **get** **n\_classes\_**(): `Promise`\<`number`\>

Number of label for each output.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L443)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L493)

***

### n\_outputs\_

#### Get Signature

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

Number of outputs.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L543)

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

[generated/dummy/DummyClassifier.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L53)

***

### sparse\_output\_

#### Get Signature

> **get** **sparse\_output\_**(): `Promise`\<`boolean`\>

True if the array returned from predict is to be in sparse CSC format. Is automatically set to `true` if the input `y` is passed in sparse format.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L568)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L105)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the baseline classifier.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Training data.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L122)

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

[generated/dummy/DummyClassifier.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L166)

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

[generated/dummy/DummyClassifier.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L66)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform classification on test vectors X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Test data.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L200)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Return log probability estimates for the test vectors X.

#### Parameters

• **opts**

• **opts.X?**: `any`

Training data.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/dummy/DummyClassifier.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L232)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Return probability estimates for the test vectors X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Test data.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/dummy/DummyClassifier.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L266)

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

Test samples. Passing `undefined` as test samples gives the same result as passing real test samples, since DummyClassifier operates independently of the sampled observations.

• **opts.y?**: `ArrayLike`

True labels for X.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/dummy/DummyClassifier.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L300)

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

[generated/dummy/DummyClassifier.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L346)

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

[generated/dummy/DummyClassifier.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L384)
