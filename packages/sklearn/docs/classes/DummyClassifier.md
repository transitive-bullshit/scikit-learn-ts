# DummyClassifier

DummyClassifier makes predictions that ignore the input features.

This classifier serves as a simple baseline to compare against other more complex classifiers.

The specific behavior of the baseline is selected with the `strategy` parameter.

All strategies make predictions that ignore the input feature values passed as the `X` argument to `fit` and `predict`. The predictions, however, typically depend on values observed in the `y` parameter passed to `fit`.

Note that the “stratified” and “uniform” strategies lead to non-deterministic predictions that can be rendered deterministic by setting the `random\_state` parameter if needed. The other strategies are naturally deterministic and, once fit, always return the same constant prediction for any value of `X`.

Read more in the [User Guide](../model_evaluation.html#dummy-estimators).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new DummyClassifier(opts?: object): DummyClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.constant?` | `string` \| `number` \| [`ArrayLike`](../types/ArrayLike.md) | The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy. |
| `opts.random_state?` | `number` | Controls the randomness to generate the predictions when `strategy='stratified'` or `strategy='uniform'`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.strategy?` | `"uniform"` \| `"most_frequent"` \| `"prior"` \| `"stratified"` \| `"constant"` | Strategy to use to generate predictions.  `Default Value`  `'prior'` |

### Returns

[`DummyClassifier`](DummyClassifier.md)

Defined in:  [generated/dummy/DummyClassifier.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/dummy/DummyClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L27)

### id

> `string`

Defined in:  [generated/dummy/DummyClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L24)

### opts

> `any`

Defined in:  [generated/dummy/DummyClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L25)

## Accessors

### class\_prior\_

Frequency of each class observed in `y`. For multioutput classification problems, this is computed independently for each output.

#### Signature

```ts
class_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/dummy/DummyClassifier.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L374)

Defined in:  [generated/dummy/DummyClassifier.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L374)

### classes\_

Unique class labels observed in `y`. For multi-output classification problems, this attribute is a list of arrays as each output has an independent set of possible classes.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/dummy/DummyClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L324)

Defined in:  [generated/dummy/DummyClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L324)

### n\_classes\_

Number of label for each output.

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/dummy/DummyClassifier.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L349)

Defined in:  [generated/dummy/DummyClassifier.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L349)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/dummy/DummyClassifier.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L399)

Defined in:  [generated/dummy/DummyClassifier.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L399)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/dummy/DummyClassifier.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L53)

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

Defined in:  [generated/dummy/DummyClassifier.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L57)

Defined in:  [generated/dummy/DummyClassifier.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L53) [generated/dummy/DummyClassifier.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L57)

### sparse\_output\_

True if the array returned from predict is to be in sparse CSC format. Is automatically set to `true` if the input `y` is passed in sparse format.

#### Signature

```ts
sparse_output_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/dummy/DummyClassifier.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L424)

Defined in:  [generated/dummy/DummyClassifier.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L424)

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

Defined in:  [generated/dummy/DummyClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L110)

### fit()

Fit the baseline classifier.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/dummy/DummyClassifier.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L127)

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

Defined in:  [generated/dummy/DummyClassifier.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L66)

### predict()

Perform classification on test vectors X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/dummy/DummyClassifier.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L174)

### predict\_log\_proba()

Return log probability estimates for the test vectors X.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/dummy/DummyClassifier.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L207)

### predict\_proba()

Return probability estimates for the test vectors X.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/dummy/DummyClassifier.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L242)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. Passing `undefined` as test samples gives the same result as passing real test samples, since DummyClassifier operates independently of the sampled observations. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for X. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/dummy/DummyClassifier.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L277)
