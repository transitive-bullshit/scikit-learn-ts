# VotingClassifier

Soft Voting/Majority Rule classifier for unfitted estimators.

Read more in the [User Guide](../ensemble.html#voting-classifier).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new VotingClassifier(opts?: VotingClassifierOptions): VotingClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`VotingClassifierOptions`](../interfaces/VotingClassifierOptions.md) |

### Returns

[`VotingClassifier`](VotingClassifier.md)

Defined in:  [generated/ensemble/VotingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/VotingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/VotingClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/ensemble/VotingClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/ensemble/VotingClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L17)

## Accessors

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingClassifier.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L456)

Defined in:  [generated/ensemble/VotingClassifier.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L456)

### estimators\_

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L377)

Defined in:  [generated/ensemble/VotingClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L377)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingClassifier.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L483)

Defined in:  [generated/ensemble/VotingClassifier.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L483)

### le\_

Transformer used to encode the labels during fit and decode during prediction.

#### Signature

```ts
le_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L431)

Defined in:  [generated/ensemble/VotingClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L431)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L404)

Defined in:  [generated/ensemble/VotingClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L404)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/VotingClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L28)

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

Defined in:  [generated/ensemble/VotingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L32)

Defined in:  [generated/ensemble/VotingClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L28) [generated/ensemble/VotingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L32)

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

Defined in:  [generated/ensemble/VotingClassifier.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L89)

### fit()

Fit the estimators.

#### Signature

```ts
fit(opts: VotingClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierFitOptions`](../interfaces/VotingClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L106)

### fit\_transform()

Return class labels or probabilities for each estimator.

Return predictions for X for each estimator.

#### Signature

```ts
fit_transform(opts: VotingClassifierFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierFitTransformOptions`](../interfaces/VotingClassifierFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/VotingClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L142)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: VotingClassifierGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierGetFeatureNamesOutOptions`](../interfaces/VotingClassifierGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L180)

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

Defined in:  [generated/ensemble/VotingClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L41)

### predict()

Predict class labels for X.

#### Signature

```ts
predict(opts: VotingClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierPredictOptions`](../interfaces/VotingClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/VotingClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L215)

### predict\_proba()

Compute probabilities of possible outcomes for samples in X.

#### Signature

```ts
predict_proba(opts: VotingClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierPredictProbaOptions`](../interfaces/VotingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/VotingClassifier.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L245)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: VotingClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierScoreOptions`](../interfaces/VotingClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L281)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: VotingClassifierSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierSetOutputOptions`](../interfaces/VotingClassifierSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L317)

### transform()

Return class labels or probabilities for X for each estimator.

#### Signature

```ts
transform(opts: VotingClassifierTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierTransformOptions`](../interfaces/VotingClassifierTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/VotingClassifier.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L347)
