# VotingClassifier

Soft Voting/Majority Rule classifier for unfitted estimators.

Read more in the [User Guide](../ensemble.html#voting-classifier).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new VotingClassifier(opts?: object): VotingClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimators?` | `any` | Invoking the `fit` method on the `VotingClassifier` will fit clones of those original estimators that will be stored in the class attribute `self.estimators\_`. An estimator can be set to `'drop'` using [`set\_params`](#sklearn.ensemble.VotingClassifier.set_params "sklearn.ensemble.VotingClassifier.set_params"). |
| `opts.flatten_transform?` | `boolean` | Affects shape of transform output only when voting=’soft’ If voting=’soft’ and flatten\_transform=`true`, transform method returns matrix with shape (n\_samples, n\_classifiers \* n\_classes). If flatten\_transform=`false`, it returns (n\_classifiers, n\_samples, n\_classes).  `Default Value`  `true` |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.verbose?` | `boolean` | If `true`, the time elapsed while fitting will be printed as it is completed.  `Default Value`  `false` |
| `opts.voting?` | `"hard"` \| `"soft"` | If ‘hard’, uses predicted class labels for majority rule voting. Else if ‘soft’, predicts the class label based on the argmax of the sums of the predicted probabilities, which is recommended for an ensemble of well-calibrated classifiers.  `Default Value`  `'hard'` |
| `opts.weights?` | [`ArrayLike`](../types/ArrayLike.md) | Sequence of weights (`float` or `int`) to weight the occurrences of predicted class labels (`hard` voting) or class probabilities before averaging (`soft` voting). Uses uniform weights if `undefined`. |

### Returns

[`VotingClassifier`](VotingClassifier.md)

Defined in:  [generated/ensemble/VotingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L23)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L125)

### fit()

Fit the estimators.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L142)

### fit\_transform()

Return class labels or probabilities for each estimator.

Return predictions for X for each estimator.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/VotingClassifier.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L193)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L244)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L284)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L77)

### predict()

Predict class labels for X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingClassifier.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L321)

### predict\_proba()

Compute probabilities of possible outcomes for samples in X.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/VotingClassifier.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L356)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L395)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L448)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L488)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L527)

### transform()

Return class labels or probabilities for X for each estimator.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L565)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/VotingClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/ensemble/VotingClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/ensemble/VotingClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L17)

## Accessors

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingClassifier.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L679)

Defined in:  [generated/ensemble/VotingClassifier.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L679)

### estimators\_

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L600)

Defined in:  [generated/ensemble/VotingClassifier.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L600)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingClassifier.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L706)

Defined in:  [generated/ensemble/VotingClassifier.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L706)

### le\_

Transformer used to encode the labels during fit and decode during prediction.

#### Signature

```ts
le_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L654)

Defined in:  [generated/ensemble/VotingClassifier.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L654)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L627)

Defined in:  [generated/ensemble/VotingClassifier.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L627)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/VotingClassifier.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L64)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/ensemble/VotingClassifier.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L68)

Defined in:  [generated/ensemble/VotingClassifier.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L64) [generated/ensemble/VotingClassifier.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L68)
