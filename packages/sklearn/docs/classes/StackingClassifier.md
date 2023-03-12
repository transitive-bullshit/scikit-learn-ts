# StackingClassifier

Stack of estimators with a final classifier.

Stacked generalization consists in stacking the output of individual estimator and use a classifier to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

Read more in the [User Guide](../ensemble.html#stacking).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new StackingClassifier(opts?: StackingClassifierOptions): StackingClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StackingClassifierOptions`](../interfaces/StackingClassifierOptions.md) |

### Returns

[`StackingClassifier`](StackingClassifier.md)

Defined in:  [generated/ensemble/StackingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/StackingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/StackingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/StackingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/StackingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/StackingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L21)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/StackingClassifier.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L422)

Defined in:  [generated/ensemble/StackingClassifier.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L422)

### estimators\_

The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L449)

Defined in:  [generated/ensemble/StackingClassifier.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L449)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/StackingClassifier.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L503)

Defined in:  [generated/ensemble/StackingClassifier.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L503)

### final\_estimator\_

The classifier which predicts given the output of `estimators\_`.

#### Signature

```ts
final_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L530)

Defined in:  [generated/ensemble/StackingClassifier.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L530)

### named\_estimators\_

Attribute to access any fitted sub-estimators by name.

#### Signature

```ts
named_estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L476)

Defined in:  [generated/ensemble/StackingClassifier.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L476)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/StackingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L32)

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

Defined in:  [generated/ensemble/StackingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L36)

Defined in:  [generated/ensemble/StackingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L32) [generated/ensemble/StackingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L36)

### stack\_method\_

The method used by each base estimator.

#### Signature

```ts
stack_method_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L557)

Defined in:  [generated/ensemble/StackingClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L557)

## Methods

### decision\_function()

Decision function for samples in `X` using the final estimator.

#### Signature

```ts
decision_function(opts: StackingClassifierDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierDecisionFunctionOptions`](../interfaces/StackingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/StackingClassifier.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L112)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L95)

### fit()

Fit the estimators.

#### Signature

```ts
fit(opts: StackingClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierFitOptions`](../interfaces/StackingClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L147)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: StackingClassifierFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierFitTransformOptions`](../interfaces/StackingClassifierFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/StackingClassifier.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L183)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: StackingClassifierGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierGetFeatureNamesOutOptions`](../interfaces/StackingClassifierGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L221)

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

Defined in:  [generated/ensemble/StackingClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L45)

### predict()

Predict target for X.

#### Signature

```ts
predict(opts: StackingClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierPredictOptions`](../interfaces/StackingClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/StackingClassifier.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L256)

### predict\_proba()

Predict class probabilities for `X` using the final estimator.

#### Signature

```ts
predict_proba(opts: StackingClassifierPredictProbaOptions): Promise<any[] | ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierPredictProbaOptions`](../interfaces/StackingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`[] \| [`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/StackingClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L288)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: StackingClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierScoreOptions`](../interfaces/StackingClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L324)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: StackingClassifierSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierSetOutputOptions`](../interfaces/StackingClassifierSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/StackingClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L360)

### transform()

Return class labels or probabilities for X for each estimator.

#### Signature

```ts
transform(opts: StackingClassifierTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierTransformOptions`](../interfaces/StackingClassifierTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/StackingClassifier.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L390)
