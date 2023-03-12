# ExtraTreeClassifier

An extremely randomized tree classifier.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the [User Guide](../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new ExtraTreeClassifier(opts?: ExtraTreeClassifierOptions): ExtraTreeClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExtraTreeClassifierOptions`](../interfaces/ExtraTreeClassifierOptions.md) |

### Returns

[`ExtraTreeClassifier`](ExtraTreeClassifier.md)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/tree/ExtraTreeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/tree/ExtraTreeClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/tree/ExtraTreeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L23)

### id

> `string`

Defined in:  [generated/tree/ExtraTreeClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L20)

### opts

> `any`

Defined in:  [generated/tree/ExtraTreeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L21)

## Accessors

### classes\_

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L472)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L472)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L580)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L580)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L499)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L499)

### n\_classes\_

The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L526)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L526)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L553)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L553)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L607)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L607)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/tree/ExtraTreeClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L32)

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

Defined in:  [generated/tree/ExtraTreeClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L36)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L32) [generated/tree/ExtraTreeClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L36)

### tree\_

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L634)

Defined in:  [generated/tree/ExtraTreeClassifier.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L634)

## Methods

### apply()

Return the index of the leaf that each sample is predicted as.

#### Signature

```ts
apply(opts: ExtraTreeClassifierApplyOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierApplyOptions`](../interfaces/ExtraTreeClassifierApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L124)

### cost\_complexity\_pruning\_path()

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Signature

```ts
cost_complexity_pruning_path(opts: ExtraTreeClassifierCostComplexityPruningPathOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierCostComplexityPruningPathOptions`](../interfaces/ExtraTreeClassifierCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L158)

### decision\_path()

Return the decision path in the tree.

#### Signature

```ts
decision_path(opts: ExtraTreeClassifierDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierDecisionPathOptions`](../interfaces/ExtraTreeClassifierDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L197)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L107)

### fit()

Build a decision tree classifier from the training set (X, y).

#### Signature

```ts
fit(opts: ExtraTreeClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierFitOptions`](../interfaces/ExtraTreeClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L233)

### get\_depth()

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Signature

```ts
get_depth(opts: ExtraTreeClassifierGetDepthOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierGetDepthOptions`](../interfaces/ExtraTreeClassifierGetDepthOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L271)

### get\_n\_leaves()

Return the number of leaves of the decision tree.

#### Signature

```ts
get_n_leaves(opts: ExtraTreeClassifierGetNLeavesOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierGetNLeavesOptions`](../interfaces/ExtraTreeClassifierGetNLeavesOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L299)

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

Defined in:  [generated/tree/ExtraTreeClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L45)

### predict()

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Signature

```ts
predict(opts: ExtraTreeClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierPredictOptions`](../interfaces/ExtraTreeClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L331)

### predict\_log\_proba()

Predict class log-probabilities of the input samples X.

#### Signature

```ts
predict_log_proba(opts: ExtraTreeClassifierPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierPredictLogProbaOptions`](../interfaces/ExtraTreeClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L363)

### predict\_proba()

Predict class probabilities of the input samples X.

The predicted class probability is the fraction of samples of the same class in a leaf.

#### Signature

```ts
predict_proba(opts: ExtraTreeClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierPredictProbaOptions`](../interfaces/ExtraTreeClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L400)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: ExtraTreeClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeClassifierScoreOptions`](../interfaces/ExtraTreeClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L438)
