# VotingClassifier

Soft Voting/Majority Rule classifier for unfitted estimators.

Read more in the User Guide.

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
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.verbose?` | `boolean` | If `true`, the time elapsed while fitting will be printed as it is completed.  `Default Value`  `false` |
| `opts.voting?` | `"hard"` \| `"soft"` | If ‘hard’, uses predicted class labels for majority rule voting. Else if ‘soft’, predicts the class label based on the argmax of the sums of the predicted probabilities, which is recommended for an ensemble of well-calibrated classifiers.  `Default Value`  `'hard'` |
| `opts.weights?` | `ArrayLike` | Sequence of weights (`float` or `int`) to weight the occurrences of predicted class labels (`hard` voting) or class probabilities before averaging (`soft` voting). Uses uniform weights if `undefined`. |

### Returns

[`VotingClassifier`](VotingClassifier.md)

Defined in:  [generated/ensemble/VotingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L23)

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

Defined in:  [generated/ensemble/VotingClassifier.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L125)

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
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L142)

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
| `opts.X?` | `ArrayLike` | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/VotingClassifier.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L193)

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

Defined in:  [generated/ensemble/VotingClassifier.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L244)

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

Defined in:  [generated/ensemble/VotingClassifier.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L77)

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
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L282)

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
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/VotingClassifier.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L317)

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
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L356)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

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

Defined in:  [generated/ensemble/VotingClassifier.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L407)

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
| `opts.X?` | `ArrayLike` | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L442)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/VotingClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/ensemble/VotingClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/ensemble/VotingClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L17)

## Accessors

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/VotingClassifier.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L556)

### estimators\_

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/VotingClassifier.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L477)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/VotingClassifier.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L583)

### le\_

Transformer used to encode the labels during fit and decode during prediction.

#### Signature

```ts
le_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/VotingClassifier.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L531)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/VotingClassifier.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L504)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/VotingClassifier.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L64)

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

Defined in: [generated/ensemble/VotingClassifier.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L68)
