# DummyClassifier

DummyClassifier makes predictions that ignore the input features.

This classifier serves as a simple baseline to compare against other more complex classifiers.

The specific behavior of the baseline is selected with the `strategy` parameter.

All strategies make predictions that ignore the input feature values passed as the `X` argument to `fit` and `predict`. The predictions, however, typically depend on values observed in the `y` parameter passed to `fit`.

Note that the “stratified” and “uniform” strategies lead to non-deterministic predictions that can be rendered deterministic by setting the `random\_state` parameter if needed. The other strategies are naturally deterministic and, once fit, always return the same constant prediction for any value of `X`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new DummyClassifier(opts?: DummyClassifierOptions): DummyClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `DummyClassifierOptions` |

### Returns

[`DummyClassifier`](DummyClassifier.md)

Defined in:  [generated/dummy/DummyClassifier.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/dummy/DummyClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L27)

### id

> `string`

Defined in:  [generated/dummy/DummyClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L24)

### opts

> `any`

Defined in:  [generated/dummy/DummyClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L25)

## Accessors

### class\_prior\_

Frequency of each class observed in `y`. For multioutput classification problems, this is computed independently for each output.

#### Signature

```ts
class_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/dummy/DummyClassifier.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L316)

### classes\_

Unique class labels observed in `y`. For multi-output classification problems, this attribute is a list of arrays as each output has an independent set of possible classes.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/dummy/DummyClassifier.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L266)

### n\_classes\_

Number of label for each output.

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/dummy/DummyClassifier.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L291)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/dummy/DummyClassifier.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L341)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/dummy/DummyClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L36)

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

Defined in: [generated/dummy/DummyClassifier.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L40)

### sparse\_output\_

True if the array returned from predict is to be in sparse CSC format. Is automatically set to `true` if the input `y` is passed in sparse format.

#### Signature

```ts
sparse_output_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/dummy/DummyClassifier.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L366)

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

Defined in:  [generated/dummy/DummyClassifier.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L93)

### fit()

Fit the baseline classifier.

#### Signature

```ts
fit(opts: DummyClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyClassifierFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/dummy/DummyClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L110)

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

Defined in:  [generated/dummy/DummyClassifier.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L49)

### predict()

Perform classification on test vectors X.

#### Signature

```ts
predict(opts: DummyClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyClassifierPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/dummy/DummyClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L142)

### predict\_log\_proba()

Return log probability estimates for the test vectors X.

#### Signature

```ts
predict_log_proba(opts: DummyClassifierPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyClassifierPredictLogProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/dummy/DummyClassifier.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L170)

### predict\_proba()

Return probability estimates for the test vectors X.

#### Signature

```ts
predict_proba(opts: DummyClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyClassifierPredictProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/dummy/DummyClassifier.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L202)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: DummyClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DummyClassifierScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/dummy/DummyClassifier.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L234)
