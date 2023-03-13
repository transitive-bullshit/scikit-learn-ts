# ClassifierChain

A multi-label model that arranges binary classifiers into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.ClassifierChain.html)

## Constructors

## constructor()

### Signature

```ts
new ClassifierChain(opts?: object): ClassifierChain;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | The base estimator from which the classifier chain is built. |
| `opts.cv?` | `number` | Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are: |
| `opts.order?` | `ArrayLike` \| `"random"` | If `undefined`, the order will be determined by the order of columns in the label matrix Y.: |
| `opts.random_state?` | `number` | If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base\_estimator` at each chaining iteration. Thus, it is only used when `base\_estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.verbose?` | `boolean` | If `true`, chain progress is output as each model is completed.  `Default Value`  `false` |

### Returns

[`ClassifierChain`](ClassifierChain.md)

Defined in:  [generated/multioutput/ClassifierChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/ClassifierChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/ClassifierChain.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/ClassifierChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L21)

### id

> `string`

Defined in:  [generated/multioutput/ClassifierChain.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L18)

### opts

> `any`

Defined in:  [generated/multioutput/ClassifierChain.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L19)

## Accessors

### classes\_

A list of arrays of length `len(estimators\_)` containing the class labels for each estimator in the chain.

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/multioutput/ClassifierChain.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L321)

### estimators\_

A list of clones of base\_estimator.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/multioutput/ClassifierChain.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L346)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/multioutput/ClassifierChain.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L421)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying `base\_estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/multioutput/ClassifierChain.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L396)

### order\_

The order of labels in the classifier chain.

#### Signature

```ts
order_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/multioutput/ClassifierChain.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L371)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/ClassifierChain.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L57)

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

Defined in: [generated/multioutput/ClassifierChain.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L61)

## Methods

### decision\_function()

Evaluate the decision\_function of the models in the chain.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L131)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L114)

### fit()

Fit the model to data matrix X and targets Y.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |
| `opts.Y?` | `ArrayLike`[] | The target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L166)

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

Defined in:  [generated/multioutput/ClassifierChain.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L70)

### predict()

Predict on the data matrix X using the ClassifierChain model.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L206)

### predict\_proba()

Predict probability estimates.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L239)

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

Defined in:  [generated/multioutput/ClassifierChain.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L274)
